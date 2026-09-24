import type { AppState, ComparisonItem, EntityCategory, InteractionState, RulerUnit, SortMode } from '../lib/constants';
import {
  INITIAL_PEOPLE,
  LIMITS,
  PRESET_COLORS,
  QUICK_PRESETS,
  QUICK_COMPARE_HUMAN_PRESETS,
  QUICK_COMPARE_ANIMAL_PRESETS,
  QUICK_COMPARE_OBJECT_PRESETS,
  QUICK_COMPARE_CELEBRITY_PRESETS,
  BENCHMARK_SCALE_PRESET,
} from '../lib/constants';
import { calculateDifference, calculateScale, generateRulerTicks, sortPeople } from '../lib/comparison';
import { cmToFeetInches, feetInchesToCm, formatHeight, formatHeightFull } from '../lib/height';
import { copyToClipboard, decodePeopleFromUrl, encodePeopleToUrl } from '../lib/share';
import { renderEntitySvg, fetchSvgData, hasCachedSvg, setModelResolver } from '../lib/renderModel';
import { resolveMigratedAssetId } from '../lib/migrationMap';
import { getArchetypeAsset } from '../lib/archetypes';
import type { CatalogAsset as AssetMetadata } from '../data/assetCatalog';

class HeightComparisonApp {
  private allAssets: AssetMetadata[] = [];
  private catalogPromise: Promise<AssetMetadata[]> | null = null;
  private state: AppState = {
    people: [...INITIAL_PEOPLE],
    editingId: null,
    selectedId: null,
    sortMode: 'added',
    rulerUnit: 'cm',
    positionMode: 'auto',
    zoomLevel: 1,
  };

  private currentInspectorUnit: 'cm' | 'ft' = 'ft';

  // Interaction & History State
  private interaction: InteractionState = {
    mode: 'none',
    itemId: null,
    startX: 0,
    startY: 0,
    initialPositionX: 0,
    initialHeightCm: 0,
  };

  private undoStack: Array<{ people: ComparisonItem[]; positionMode: 'auto' | 'manual' }> = [];
  private redoStack: Array<{ people: ComparisonItem[]; positionMode: 'auto' | 'manual' }> = [];

  // DOM Elements cache - Asset Grid & Filter
  private assetSearchInput: HTMLInputElement | null = null;
  private categoryFilterBar: HTMLElement | null = null;
  private assetLibraryGrid: HTMLElement | null = null;
  private assetCountBadge: HTMLElement | null = null;
  private noAssetsMsg: HTMLElement | null = null;

  // DOM Elements cache - Entity Edit Inspector Panel
  private entityEditPanel: HTMLElement | null = null;
  private editPanelTitle: HTMLElement | null = null;
  private deselectEntityBtn: HTMLButtonElement | null = null;
  private editEntityNameInput: HTMLInputElement | null = null;
  private unitTabFt: HTMLButtonElement | null = null;
  private unitTabCm: HTMLButtonElement | null = null;
  private editHeightCmGroup: HTMLElement | null = null;
  private editHeightCmInput: HTMLInputElement | null = null;
  private editHeightFtGroup: HTMLElement | null = null;
  private editHeightFeetInput: HTMLInputElement | null = null;
  private editHeightInchesInput: HTMLInputElement | null = null;
  private editHeightSlider: HTMLInputElement | null = null;
  private colorPickerChips: HTMLElement | null = null;
  private editOpacitySlider: HTMLInputElement | null = null;
  private opacityValLabel: HTMLElement | null = null;
  private duplicateEntityBtn: HTMLButtonElement | null = null;
  private deleteEntityBtn: HTMLButtonElement | null = null;

  // DOM Elements cache - People List
  private peopleListContainer: HTMLElement | null = null;
  private peopleListEmpty: HTMLElement | null = null;
  private peopleCountBadge: HTMLElement | null = null;

  // DOM Elements cache - Comparison Stage & Ruler
  private modelsContainer!: HTMLElement;
  private modelsStage!: HTMLElement;
  private chartGridLines!: HTMLElement;
  private rulerTicksContainer!: HTMLElement;
  private chartEmptyState!: HTMLElement;
  private chartTotalCount!: HTMLElement;
  private tooltipEl!: HTMLElement;
  private tooltipName!: HTMLElement;
  private tooltipDetails!: HTMLElement;

  // Difference & Summary
  private diffCard: HTMLElement | null = null;
  private diffStatement: HTMLElement | null = null;
  private diffBadgeImperial: HTMLElement | null = null;
  private diffBadgeMetric: HTMLElement | null = null;

  private summaryTableBody: HTMLElement | null = null;
  private summaryCardsContainer: HTMLElement | null = null;
  private summaryStatsBadge: HTMLElement | null = null;
  private summaryTallestStat: HTMLElement | null = null;
  private summaryAverageStat: HTMLElement | null = null;

  // Toolbar & General Controls
  private sortSelector: HTMLSelectElement | null = null;
  private rulerToggleCm: HTMLButtonElement | null = null;
  private rulerToggleFt: HTMLButtonElement | null = null;
  private shareBtn: HTMLButtonElement | null = null;
  private shareBtnText: HTMLElement | null = null;
  private downloadBtn: HTMLButtonElement | null = null;
  private resetBtn: HTMLButtonElement | null = null;
  private clearAllBtn: HTMLButtonElement | null = null;

  // Toolbar Viewport Controls
  private undoBtn: HTMLButtonElement | null = null;
  private redoBtn: HTMLButtonElement | null = null;
  private zoomOutBtn: HTMLButtonElement | null = null;
  private zoomInBtn: HTMLButtonElement | null = null;
  private zoomResetBtn: HTMLButtonElement | null = null;
  private zoomLabel: HTMLElement | null = null;
  private fitAllBtn: HTMLButtonElement | null = null;
  private resetPositionsBtn: HTMLButtonElement | null = null;
  private hintBanner: HTMLElement | null = null;
  private dismissHintBtn: HTMLButtonElement | null = null;

  // Precision Toolbar
  private precisionToolbar: HTMLElement | null = null;
  private selectedItemColorDot: HTMLElement | null = null;
  private selectedItemName: HTMLElement | null = null;
  private selectedItemBadge: HTMLElement | null = null;
  private selectedCustomBadge: HTMLElement | null = null;
  private selectedHeightDisplay: HTMLElement | null = null;
  private nudgeDownBtn: HTMLButtonElement | null = null;
  private nudgeUpBtn: HTMLButtonElement | null = null;
  private nudgeLeftBtn: HTMLButtonElement | null = null;
  private nudgeRightBtn: HTMLButtonElement | null = null;
  private resetSelectedHeightBtn: HTMLButtonElement | null = null;
  private deselectBtn: HTMLButtonElement | null = null;

  // Custom Image Upload elements
  private uploadCustomImageBtn: HTMLButtonElement | null = null;
  private customImageFileInput: HTMLInputElement | null = null;
  private customImageModal: HTMLElement | null = null;
  private closeCustomModalBtn: HTMLButtonElement | null = null;
  private cancelCustomModalBtn: HTMLButtonElement | null = null;
  private confirmCustomModalBtn: HTMLButtonElement | null = null;
  private customModalPreviewImg: HTMLImageElement | null = null;
  private customModalAspectHint: HTMLElement | null = null;
  private customModalNameInput: HTMLInputElement | null = null;
  private customModalHeightInput: HTMLInputElement | null = null;
  private pendingCustomImageDataUrl: string | null = null;
  private pendingCustomImageAspect: number = 0.5;
  private selectedCustomModalColor: string = PRESET_COLORS[0].value;

  // Drawing Canvas elements & state
  private toggleDrawModeBtn: HTMLButtonElement | null = null;
  private drawBtnText: HTMLElement | null = null;
  private drawingToolbar: HTMLElement | null = null;
  private drawingCanvas: HTMLCanvasElement | null = null;
  private drawCtx: CanvasRenderingContext2D | null = null;
  private drawUndoBtn: HTMLButtonElement | null = null;
  private drawClearBtn: HTMLButtonElement | null = null;
  private drawDoneBtn: HTMLButtonElement | null = null;
  private isDrawingMode: boolean = false;
  private isDrawingPointerDown: boolean = false;
  private currentDrawTool: 'pen' | 'highlighter' | 'eraser' | 'move' = 'pen';
  private prevDrawToolBeforeSpace: 'pen' | 'highlighter' | 'eraser' | 'move' = 'pen';
  private isSpacePressedForMove: boolean = false;
  private currentDrawColor: string = '#2563eb';
  private currentDrawSize: number = 3;
  private drawStrokes: Array<{
    tool: 'pen' | 'highlighter' | 'eraser';
    color: string;
    size: number;
    points: Array<{ x: number; y: number }>;
  }> = [];
  private currentStroke: {
    tool: 'pen' | 'highlighter' | 'eraser';
    color: string;
    size: number;
    points: Array<{ x: number; y: number }>;
  } | null = null;
  private drawUndoHistory: Array<Array<{
    tool: 'pen' | 'highlighter' | 'eraser';
    color: string;
    size: number;
    points: Array<{ x: number; y: number }>;
  }>> = [];
  private isMovingDrawing: boolean = false;
  private moveStartPoint: { x: number; y: number } | null = null;
  private moveLastPoint: { x: number; y: number } | null = null;
  private movingStrokes: Array<{
    tool: 'pen' | 'highlighter' | 'eraser';
    color: string;
    size: number;
    points: Array<{ x: number; y: number }>;
  }> = [];
  private hasActuallyMovedDrawing: boolean = false;

  init() {
    this.cacheDomElements();
    this.loadInitialState();
    this.attachEventListeners();
    this.render();

    if (this.state.people.length > 0) {
      this.selectItem(this.state.people[0].id);
    }

    // Warm SVG vector cache for all initial entities
    const initialSvgPaths = this.state.people
      .map((it) => it.publicPath || getArchetypeAsset(it.assetId || (it as any).modelType || it.id, it.category).publicPath)
      .filter((p) => p && !p.endsWith('.png') && p.endsWith('.svg'));

    if (initialSvgPaths.length > 0) {
      Promise.all(initialSvgPaths.map((p) => fetchSvgData(p))).then((results) => {
        if (results.some(Boolean)) {
          this.renderChart();
        }
      });
    }

    // Progressively preload asset catalog in background when browser is idle
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => this.ensureCatalog(), { timeout: 2500 });
      } else {
        setTimeout(() => this.ensureCatalog(), 1200);
      }
    }
  }

  private async ensureCatalog(): Promise<AssetMetadata[]> {
    if (this.allAssets.length > 0) return this.allAssets;
    if (!this.catalogPromise) {
      this.catalogPromise = import('../data/assetCatalog').then((mod) => {
        this.allAssets = mod.ASSET_CATALOG;
        setModelResolver((id) => mod.getCatalogAssetById(id));
        return this.allAssets;
      });
    }
    return this.catalogPromise;
  }

  private cacheDomElements() {
    this.assetSearchInput = document.getElementById('asset-search-input') as HTMLInputElement;
    this.categoryFilterBar = document.getElementById('category-filter-bar');
    this.assetLibraryGrid = document.getElementById('asset-library-grid');
    this.assetCountBadge = document.getElementById('asset-count-badge');
    this.noAssetsMsg = document.getElementById('no-assets-msg');

    this.entityEditPanel = document.getElementById('entity-edit-panel');
    this.editPanelTitle = document.getElementById('edit-panel-title');
    this.deselectEntityBtn = document.getElementById('deselect-entity-btn') as HTMLButtonElement;
    this.editEntityNameInput = document.getElementById('edit-entity-name') as HTMLInputElement;
    this.unitTabFt = document.getElementById('unit-tab-ft') as HTMLButtonElement;
    this.unitTabCm = document.getElementById('unit-tab-cm') as HTMLButtonElement;
    this.editHeightCmGroup = document.getElementById('edit-height-cm-group');
    this.editHeightCmInput = document.getElementById('edit-height-cm-input') as HTMLInputElement;
    this.editHeightFtGroup = document.getElementById('edit-height-ft-group');
    this.editHeightFeetInput = document.getElementById('edit-height-feet-input') as HTMLInputElement;
    this.editHeightInchesInput = document.getElementById('edit-height-inches-input') as HTMLInputElement;
    this.editHeightSlider = document.getElementById('edit-height-slider') as HTMLInputElement;
    this.colorPickerChips = document.getElementById('color-picker-chips');
    this.editOpacitySlider = document.getElementById('edit-opacity-slider') as HTMLInputElement;
    this.opacityValLabel = document.getElementById('opacity-val-label');
    this.duplicateEntityBtn = document.getElementById('duplicate-entity-btn') as HTMLButtonElement;
    this.deleteEntityBtn = document.getElementById('delete-entity-btn') as HTMLButtonElement;

    this.peopleListContainer = document.getElementById('people-list-container');
    this.peopleListEmpty = document.getElementById('people-list-empty');
    this.peopleCountBadge = document.getElementById('people-count-badge');

    this.modelsContainer = document.getElementById('models-container') as HTMLElement;
    this.modelsStage = document.getElementById('models-stage') as HTMLElement;
    this.chartGridLines = document.getElementById('chart-grid-lines') as HTMLElement;
    this.rulerTicksContainer = document.getElementById('ruler-ticks') as HTMLElement;
    this.chartEmptyState = document.getElementById('chart-empty-state') as HTMLElement;
    this.chartTotalCount = document.getElementById('chart-total-count') as HTMLElement;
    this.tooltipEl = document.getElementById('chart-tooltip') as HTMLElement;
    this.tooltipName = document.getElementById('tooltip-name') as HTMLElement;
    this.tooltipDetails = document.getElementById('tooltip-details') as HTMLElement;

    this.diffCard = document.getElementById('height-difference-card');
    this.diffStatement = document.getElementById('diff-statement');
    this.diffBadgeImperial = document.getElementById('diff-badge-imperial');
    this.diffBadgeMetric = document.getElementById('diff-badge-metric');

    this.summaryTableBody = document.getElementById('summary-table-body');
    this.summaryCardsContainer = document.getElementById('summary-cards-container');
    this.summaryStatsBadge = document.getElementById('summary-stats-badge');
    this.summaryTallestStat = document.getElementById('summary-tallest-stat');
    this.summaryAverageStat = document.getElementById('summary-average-stat');

    this.sortSelector = document.getElementById('sort-selector') as HTMLSelectElement;
    this.rulerToggleCm = document.getElementById('ruler-toggle-cm') as HTMLButtonElement;
    this.rulerToggleFt = document.getElementById('ruler-toggle-ft') as HTMLButtonElement;
    this.shareBtn = document.getElementById('share-btn') as HTMLButtonElement;
    this.shareBtnText = document.getElementById('share-btn-text');
    this.downloadBtn = document.getElementById('download-btn') as HTMLButtonElement;
    this.resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;
    this.clearAllBtn = document.getElementById('clear-all-btn') as HTMLButtonElement;

    this.undoBtn = document.getElementById('undo-btn') as HTMLButtonElement;
    this.redoBtn = document.getElementById('redo-btn') as HTMLButtonElement;
    this.zoomOutBtn = document.getElementById('zoom-out-btn') as HTMLButtonElement;
    this.zoomInBtn = document.getElementById('zoom-in-btn') as HTMLButtonElement;
    this.zoomResetBtn = document.getElementById('zoom-reset-btn') as HTMLButtonElement;
    this.zoomLabel = document.getElementById('zoom-label');
    this.fitAllBtn = document.getElementById('fit-all-btn') as HTMLButtonElement;
    this.resetPositionsBtn = document.getElementById('reset-positions-btn') as HTMLButtonElement;
    this.hintBanner = document.getElementById('interaction-hint-banner');
    this.dismissHintBtn = document.getElementById('dismiss-hint-btn') as HTMLButtonElement;

    this.precisionToolbar = document.getElementById('selection-precision-toolbar');
    this.selectedItemColorDot = document.getElementById('selected-item-color-dot');
    this.selectedItemName = document.getElementById('selected-item-name');
    this.selectedItemBadge = document.getElementById('selected-item-badge');
    this.selectedCustomBadge = document.getElementById('selected-custom-badge');
    this.selectedHeightDisplay = document.getElementById('selected-height-display');
    this.nudgeDownBtn = document.getElementById('nudge-down-btn') as HTMLButtonElement;
    this.nudgeUpBtn = document.getElementById('nudge-up-btn') as HTMLButtonElement;
    this.nudgeLeftBtn = document.getElementById('nudge-left-btn') as HTMLButtonElement;
    this.nudgeRightBtn = document.getElementById('nudge-right-btn') as HTMLButtonElement;
    this.resetSelectedHeightBtn = document.getElementById('reset-selected-height-btn') as HTMLButtonElement;
    this.deselectBtn = document.getElementById('deselect-btn') as HTMLButtonElement;

    // Custom Image Elements
    this.uploadCustomImageBtn = document.getElementById('upload-custom-image-btn') as HTMLButtonElement;
    this.customImageFileInput = document.getElementById('custom-image-file-input') as HTMLInputElement;
    this.customImageModal = document.getElementById('custom-image-modal');
    this.closeCustomModalBtn = document.getElementById('close-custom-modal-btn') as HTMLButtonElement;
    this.cancelCustomModalBtn = document.getElementById('cancel-custom-modal-btn') as HTMLButtonElement;
    this.confirmCustomModalBtn = document.getElementById('confirm-custom-modal-btn') as HTMLButtonElement;
    this.customModalPreviewImg = document.getElementById('custom-modal-preview-img') as HTMLImageElement;
    this.customModalAspectHint = document.getElementById('custom-modal-aspect-hint');
    this.customModalNameInput = document.getElementById('custom-modal-name') as HTMLInputElement;
    this.customModalHeightInput = document.getElementById('custom-modal-height') as HTMLInputElement;

    // Drawing Canvas Elements
    this.toggleDrawModeBtn = document.getElementById('toggle-draw-mode-btn') as HTMLButtonElement;
    this.drawBtnText = document.getElementById('draw-btn-text');
    this.drawingToolbar = document.getElementById('canvas-drawing-toolbar');
    this.drawingCanvas = document.getElementById('drawing-canvas') as HTMLCanvasElement;
    this.drawUndoBtn = document.getElementById('draw-undo-btn') as HTMLButtonElement;
    this.drawClearBtn = document.getElementById('draw-clear-btn') as HTMLButtonElement;
    this.drawDoneBtn = document.getElementById('draw-done-btn') as HTMLButtonElement;
  }

  private migrateItem(item: any): ComparisonItem {
    if (item.customImageUrl) {
      return {
        id: item.id || `custom-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        category: 'custom',
        name: item.name || 'Custom Figure',
        heightCm: typeof item.heightCm === 'number' ? item.heightCm : 170,
        referenceHeightCm: item.referenceHeightCm ?? item.heightCm ?? 170,
        isCustomHeight: Boolean(item.isCustomHeight),
        color: item.color || PRESET_COLORS[0].value,
        opacity: typeof item.opacity === 'number' ? item.opacity : 1.0,
        positionX: typeof item.positionX === 'number' ? item.positionX : undefined,
        customImageUrl: item.customImageUrl,
        customImageAspect: item.customImageAspect || 0.5,
        isCustomUpload: true,
      };
    }

    const rawLookup = item.assetId || item.celebrityId || item.animalType || item.objectType || (item.category === 'human' ? item.gender : item.id);
    const archetype = getArchetypeAsset(rawLookup, item.category);
    const assetId = item.assetId || archetype.id;
    const category: EntityCategory = (item.category || archetype.category || 'male') as EntityCategory;

    return {
      id: item.id || `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      assetId,
      category,
      name: item.name || archetype.name || 'Entity',
      heightCm: typeof item.heightCm === 'number' && item.heightCm > 0 ? item.heightCm : (archetype.heightCm ?? 175),
      referenceHeightCm: item.referenceHeightCm ?? item.heightCm ?? archetype.heightCm ?? 175,
      isCustomHeight: Boolean(item.isCustomHeight),
      color: item.color || PRESET_COLORS[0].value,
      opacity: typeof item.opacity === 'number' ? item.opacity : 1.0,
      positionX: typeof item.positionX === 'number' ? item.positionX : undefined,
      publicPath: item.publicPath || archetype.publicPath,
      viewBox: item.viewBox || archetype.viewBox,
      measurementAnchor: item.measurementAnchor || archetype.measurementAnchor,
      isPng: item.isPng ?? archetype.isPng,
    };
  }

  private loadInitialState() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedParam = urlParams.get('people') || urlParams.get('p');
    if (sharedParam) {
      const decodedPeople = decodePeopleFromUrl(sharedParam);
      if (decodedPeople && decodedPeople.length > 0) {
        this.state.people = decodedPeople.map((item) => this.migrateItem(item));
        if (this.state.people.some((p) => typeof p.positionX === 'number')) {
          this.state.positionMode = 'manual';
        }
        return;
      }
    }

    const toolSection = document.getElementById('comparison-tool');
    const initialItemsAttr = toolSection?.getAttribute('data-initial-items');
    if (initialItemsAttr) {
      try {
        const parsed = JSON.parse(initialItemsAttr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.state.people = parsed.map((item) => this.migrateItem(item));
          return;
        }
      } catch (err) {
        console.warn('Failed to parse data-initial-items', err);
      }
    }

    try {
      const saved = localStorage.getItem('height_compare_people');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.state.people = parsed.map((item) => this.migrateItem(item));
          const savedPos = localStorage.getItem('height_compare_pos_mode');
          if (savedPos === 'manual') this.state.positionMode = 'manual';
          return;
        }
      }
    } catch {
      // Ignore storage read errors
    }

    if (localStorage.getItem('height_compare_hint_dismissed') === 'true' && this.hintBanner) {
      this.hintBanner.classList.add('hidden');
    }

    this.state.people = INITIAL_PEOPLE.map((item) => this.migrateItem(item));
  }

  private persistState() {
    try {
      localStorage.setItem('height_compare_people', JSON.stringify(this.state.people));
      localStorage.setItem('height_compare_pos_mode', this.state.positionMode);
    } catch {
      // Ignore storage write errors
    }
  }

  private getVisualHeightPx(): number {
    if (this.modelsStage && this.modelsStage.clientHeight > 200) {
      // Usable stage height minus baseline (36px) minus top headroom (44px)
      return Math.max(460, this.modelsStage.clientHeight - 80);
    }
    if (typeof window !== 'undefined') {
      const vh = window.innerHeight;
      return Math.min(740, Math.max(480, Math.round(vh * 0.58)));
    }
    return 620;
  }

  private attachEventListeners() {
    this.initAssetGrid();
    this.initInspectorPanel();
    this.initToolbarControls();
    this.initPresets();
    this.initKeyboardControls();
    this.initCustomImageUpload();
    this.initDrawingMode();

    let resizeTimer: any;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.renderChart();
        this.resizeDrawingCanvas();
      }, 150);
    });
  }

  private initAssetGrid() {
    const categoryTabs = document.querySelectorAll('.category-tab-btn');

    let activeCategory = 'all';
    let searchQuery = '';
    let visibleLimit = 30;

    const escapeHtml = (str: string) => {
      return (str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const renderCard = (asset: AssetMetadata) => {
      const heightDisplay =
        asset.status === 'verified' && asset.heightCm
          ? `<span class="text-[9px] font-semibold text-slate-500">${asset.heightCm} cm</span>`
          : `<span class="text-[8.5px] font-medium text-slate-400 truncate">Height unavailable</span>`;

      const reviewBadge =
        asset.status !== 'verified'
          ? `<span class="absolute top-0.5 right-0.5 text-[8px] font-bold text-amber-700 bg-amber-100/90 px-1 py-0.2 rounded leading-tight">Review</span>`
          : '';

      const cardTitle =
        asset.status === 'verified' && asset.heightCm
          ? `Click to add ${escapeHtml(asset.name)} (${asset.heightCm} cm)`
          : `Click to add ${escapeHtml(asset.name)} (Needs review / Height unavailable)`;

      const tagsAttr = (asset.tags || []).join(',');
      const aliasesAttr = (asset.aliases || []).join(',');
      const viewBoxAttr = typeof asset.viewBox === 'string'
        ? asset.viewBox
        : asset.viewBox
          ? `${(asset.viewBox as any).minX} ${(asset.viewBox as any).minY} ${(asset.viewBox as any).width} ${(asset.viewBox as any).height}`
          : '';
      const anchorAttr = asset.measurementAnchor
        ? `${(asset.measurementAnchor as any).groundY ?? (asset.measurementAnchor as any).baseY},${(asset.measurementAnchor as any).measurementY ?? (asset.measurementAnchor as any).topY}`
        : '';
      const isPngAttr = asset.isPng ? 'true' : 'false';

      return `
        <button
          type="button"
          class="asset-grid-card group flex flex-col items-center justify-between p-1.5 rounded-lg bg-white border border-slate-200/80 hover:border-brand-500 hover:shadow-soft-sm hover:scale-[1.02] transition-all text-center cursor-pointer select-none"
          data-asset-id="${asset.id}"
          data-category="${asset.category}"
          data-name="${escapeHtml(asset.name)}"
          data-height="${asset.heightCm || ''}"
          data-path="${asset.publicPath || ''}"
          data-viewbox="${viewBoxAttr}"
          data-anchor="${anchorAttr}"
          data-is-png="${isPngAttr}"
          data-status="${asset.status}"
          data-tags="${escapeHtml(tagsAttr)}"
          data-aliases="${escapeHtml(aliasesAttr)}"
          title="${cardTitle}"
        >
          <div class="w-full h-14 flex items-end justify-center py-0.5 overflow-hidden pointer-events-none relative">
            <img
              src="${asset.publicPath}"
              alt="${escapeHtml(asset.name)}"
              loading="lazy"
              decoding="async"
              class="max-h-full max-w-full object-contain pointer-events-none filter drop-shadow-sm group-hover:scale-105 transition-transform"
            />
            ${reviewBadge}
          </div>
          <div class="w-full mt-1 pt-0.5 border-t border-slate-100 flex flex-col items-center">
            <span class="text-[10px] font-bold text-slate-900 group-hover:text-brand-600 truncate w-full" title="${escapeHtml(asset.name)}">
              ${escapeHtml(asset.name)}
            </span>
            ${heightDisplay}
          </div>
        </button>
      `;
    };

    let filteredAssets: AssetMetadata[] = [];

    const getFilteredAssets = () => {
      const q = searchQuery.toLowerCase().trim();
      return this.allAssets.filter((asset) => {
        const matchesCat = activeCategory === 'all' || asset.category === activeCategory;
        if (!matchesCat) return false;
        if (!q) return true;
        const nameMatch = asset.name.toLowerCase().includes(q);
        const catMatch = asset.category.toLowerCase().includes(q);
        const tagMatch = asset.tags && asset.tags.some((t) => t.toLowerCase().includes(q));
        const aliasMatch = asset.aliases && asset.aliases.some((a) => a.toLowerCase().includes(q));
        return nameMatch || catMatch || tagMatch || aliasMatch;
      });
    };

    const updateGrid = (resetScroll = false) => {
      if (!this.assetLibraryGrid) return;

      filteredAssets = getFilteredAssets();
      const totalCount = filteredAssets.length;

      if (this.assetCountBadge) {
        this.assetCountBadge.textContent = `${totalCount} Available`;
      }

      if (this.noAssetsMsg) {
        if (totalCount === 0) {
          this.noAssetsMsg.classList.remove('hidden');
        } else {
          this.noAssetsMsg.classList.add('hidden');
        }
      }

      const toRender = filteredAssets.slice(0, visibleLimit);
      this.assetLibraryGrid.innerHTML = toRender.map(renderCard).join('');

      if (resetScroll) {
        this.assetLibraryGrid.scrollTop = 0;
      }
    };

    // Infinite scroll loading within the asset grid drawer
    this.assetLibraryGrid?.addEventListener(
      'scroll',
      () => {
        if (!this.assetLibraryGrid) return;
        const { scrollTop, scrollHeight, clientHeight } = this.assetLibraryGrid;
        if (scrollTop + clientHeight >= scrollHeight - 60) {
          if (visibleLimit < filteredAssets.length) {
            const nextBatch = filteredAssets.slice(visibleLimit, visibleLimit + 30);
            visibleLimit += 30;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = nextBatch.map(renderCard).join('');
            while (tempDiv.firstChild) {
              this.assetLibraryGrid.appendChild(tempDiv.firstChild);
            }
          }
        }
      },
      { passive: true }
    );

    // Warm catalog on hover/focus
    this.assetLibraryGrid?.addEventListener('mouseenter', () => this.ensureCatalog(), { once: true });
    this.assetSearchInput?.addEventListener('focus', () => this.ensureCatalog());

    // Category Tabs click
    categoryTabs.forEach((tab) => {
      tab.addEventListener('mouseenter', () => this.ensureCatalog(), { once: true });
      tab.addEventListener('click', async (e) => {
        const target = e.currentTarget as HTMLElement;
        activeCategory = target.getAttribute('data-category') || 'all';

        categoryTabs.forEach((t) => {
          t.classList.remove('bg-white', 'text-brand-600', 'shadow-soft-sm');
          t.classList.add('text-slate-600', 'hover:text-slate-900', 'hover:bg-white/60');
        });
        target.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-white/60');
        target.classList.add('bg-white', 'text-brand-600', 'shadow-soft-sm');

        visibleLimit = 30;
        await this.ensureCatalog();
        updateGrid(true);
      });
    });

    // Search query input
    this.assetSearchInput?.addEventListener('input', async () => {
      searchQuery = this.assetSearchInput?.value || '';
      visibleLimit = 30;
      await this.ensureCatalog();
      updateGrid(true);
    });

    // Event delegation for single click listener handling all asset cards
    this.assetLibraryGrid?.addEventListener('click', (e) => {
      const card = (e.target as HTMLElement).closest('.asset-grid-card') as HTMLElement;
      if (!card) return;
      const assetId = card.getAttribute('data-asset-id') || 'male-004';
      const category = (card.getAttribute('data-category') || 'male') as EntityCategory;
      const name = card.getAttribute('data-name') || 'Entity';
      const parsedHeight = parseFloat(card.getAttribute('data-height') || '');
      const publicPath = card.getAttribute('data-path') || undefined;
      const viewBox = card.getAttribute('data-viewbox') || undefined;
      const anchorStr = card.getAttribute('data-anchor');
      let measurementAnchor: { groundY: number; measurementY: number } | undefined = undefined;
      if (anchorStr) {
        const parts = anchorStr.split(',').map(Number);
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          measurementAnchor = { groundY: parts[0], measurementY: parts[1] };
        }
      }
      const isPng = card.getAttribute('data-is-png') === 'true';
      const defaultHeight =
        !isNaN(parsedHeight) && parsedHeight > 0
          ? parsedHeight
          : category === 'male'
            ? 175
            : category === 'female'
              ? 163
              : 170;

      this.addAssetToBoard(assetId, category, name, defaultHeight, {
        publicPath,
        viewBox,
        measurementAnchor,
        isPng,
      });
    });

    // Initial populate on load once catalog is ready
    this.ensureCatalog().then(() => {
      updateGrid(false);
    });
  }

  private addAssetToBoard(
    assetId: string,
    category: EntityCategory,
    name: string,
    heightCm: number,
    meta?: { publicPath?: string; viewBox?: string; measurementAnchor?: { groundY: number; measurementY: number } | null; isPng?: boolean }
  ) {
    this.pushHistory();
    const nextColorIdx = this.state.people.length % PRESET_COLORS.length;
    const color = PRESET_COLORS[nextColorIdx].value;

    const archetype = getArchetypeAsset(assetId, category);
    const publicPath = meta?.publicPath || archetype.publicPath;
    const viewBox = meta?.viewBox || archetype.viewBox;
    const measurementAnchor = meta?.measurementAnchor || archetype.measurementAnchor;
    const isPng = meta?.isPng ?? archetype.isPng;

    const newItem: ComparisonItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      assetId,
      category,
      name,
      heightCm,
      referenceHeightCm: heightCm,
      isCustomHeight: false,
      color,
      publicPath,
      viewBox,
      measurementAnchor,
      isPng,
    };

    this.state.people.push(newItem);
    this.selectItem(newItem.id);
    this.persistState();
    this.render();

    if (publicPath && !isPng && !publicPath.endsWith('.png') && publicPath.endsWith('.svg') && !hasCachedSvg(publicPath)) {
      fetchSvgData(publicPath).then(() => {
        this.renderChart();
      });
    }

    if (window.innerWidth < 768 && this.modelsContainer) {
      this.modelsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private initCustomImageUpload() {
    this.uploadCustomImageBtn?.addEventListener('click', () => {
      this.customImageFileInput?.click();
    });

    this.customImageFileInput?.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (PNG, JPG, WebP, SVG).');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        this.pendingCustomImageDataUrl = dataUrl;

        // Load into temporary image to determine natural aspect ratio
        const img = new Image();
        img.onload = () => {
          this.pendingCustomImageAspect = img.naturalWidth / img.naturalHeight || 0.5;

          if (this.customModalPreviewImg) {
            this.customModalPreviewImg.src = dataUrl;
          }
          if (this.customModalAspectHint) {
            this.customModalAspectHint.textContent = `Aspect ratio: ${this.pendingCustomImageAspect.toFixed(2)}:1 (${img.naturalWidth} × ${img.naturalHeight}px)`;
          }
          if (this.customModalNameInput) {
            this.customModalNameInput.value = file.name.replace(/\.[^/.]+$/, '').trim() || 'My Photo';
          }
          if (this.customModalHeightInput) {
            this.customModalHeightInput.value = '170';
          }
          this.customImageModal?.classList.remove('hidden');
        };
        img.src = dataUrl;
      };
      reader.readAsDataURL(file);

      // Reset file input so user can pick the same file again if desired
      (e.target as HTMLInputElement).value = '';
    });

    this.closeCustomModalBtn?.addEventListener('click', () => {
      this.customImageModal?.classList.add('hidden');
    });

    this.cancelCustomModalBtn?.addEventListener('click', () => {
      this.customImageModal?.classList.add('hidden');
    });

    this.confirmCustomModalBtn?.addEventListener('click', () => {
      if (!this.pendingCustomImageDataUrl) return;

      const name = this.customModalNameInput?.value.trim() || 'Custom Figure';
      const heightCm = parseInt(this.customModalHeightInput?.value || '170', 10) || 170;
      const color = this.selectedCustomModalColor || PRESET_COLORS[0].value;

      this.addCustomImageToBoard(name, heightCm, color, this.pendingCustomImageDataUrl, this.pendingCustomImageAspect);
      this.customImageModal?.classList.add('hidden');
    });

    // Custom Modal color palette chips
    const colorChips = this.customImageModal?.querySelectorAll('.custom-modal-color-btn');
    colorChips?.forEach((btn) => {
      btn.addEventListener('click', () => {
        colorChips.forEach((b) => b.classList.remove('ring-2', 'ring-brand-500', 'ring-offset-2'));
        btn.classList.add('ring-2', 'ring-brand-500', 'ring-offset-2');
        this.selectedCustomModalColor = btn.getAttribute('data-color') || PRESET_COLORS[0].value;
      });
    });
  }

  private addCustomImageToBoard(name: string, heightCm: number, color: string, dataUrl: string, aspect: number) {
    this.pushHistory();
    const newItem: ComparisonItem = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      category: 'custom',
      name,
      heightCm,
      referenceHeightCm: heightCm,
      isCustomHeight: true,
      color,
      customImageUrl: dataUrl,
      customImageAspect: aspect,
      isCustomUpload: true,
    };

    this.state.people.push(newItem);
    this.selectItem(newItem.id);
    this.persistState();
    this.render();

    if (window.innerWidth < 768 && this.modelsContainer) {
      this.modelsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private initDrawingMode() {
    this.toggleDrawModeBtn?.addEventListener('click', () => {
      this.setDrawingMode(!this.isDrawingMode);
    });

    this.drawDoneBtn?.addEventListener('click', () => {
      this.setDrawingMode(false);
    });

    // Tool selection
    const toolBtns = this.drawingToolbar?.querySelectorAll('.draw-tool-btn') as NodeListOf<HTMLButtonElement>;
    toolBtns?.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tool = (btn.getAttribute('data-tool') as any) || 'pen';
        this.setDrawTool(tool);
      });
    });

    // Color selection
    const colorBtns = this.drawingToolbar?.querySelectorAll('.draw-color-btn') as NodeListOf<HTMLButtonElement>;
    colorBtns?.forEach((btn) => {
      btn.addEventListener('click', () => {
        colorBtns.forEach((b) => b.classList.remove('border-brand-400', 'scale-110'));
        btn.classList.add('border-brand-400', 'scale-110');
        this.currentDrawColor = btn.getAttribute('data-color') || '#2563eb';
        if (this.currentDrawTool === 'eraser' || this.currentDrawTool === 'move') {
          this.setDrawTool('pen');
        }
      });
    });

    // Size selection
    const sizeBtns = this.drawingToolbar?.querySelectorAll('.draw-size-btn') as NodeListOf<HTMLButtonElement>;
    sizeBtns?.forEach((btn) => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach((b) => {
          b.classList.remove('text-white', 'bg-slate-700', 'font-bold');
          b.classList.add('text-slate-400', 'font-semibold');
        });
        btn.classList.add('text-white', 'bg-slate-700', 'font-bold');
        btn.classList.remove('text-slate-400', 'font-semibold');
        this.currentDrawSize = parseInt(btn.getAttribute('data-size') || '3', 10);
      });
    });

    // Undo & Clear
    this.drawUndoBtn?.addEventListener('click', () => {
      this.applyDrawUndo();
    });

    this.drawClearBtn?.addEventListener('click', () => {
      if (this.drawStrokes.length > 0 && confirm('Clear all drawings from the canvas?')) {
        this.pushDrawUndo();
        this.drawStrokes = [];
        this.redrawAllStrokes();
      }
    });

    // Setup Canvas & pointer events
    if (this.drawingCanvas) {
      this.drawCtx = this.drawingCanvas.getContext('2d');
      this.drawingCanvas.addEventListener('pointerdown', (e) => this.handleDrawPointerDown(e));
      this.drawingCanvas.addEventListener('pointermove', (e) => this.handleDrawPointerMove(e));
      this.drawingCanvas.addEventListener('pointerup', (e) => this.handleDrawPointerUp(e));
      this.drawingCanvas.addEventListener('pointercancel', (e) => this.handleDrawPointerUp(e));
    }
  }

  private setDrawTool(tool: 'pen' | 'highlighter' | 'eraser' | 'move') {
    this.currentDrawTool = tool;
    const toolBtns = this.drawingToolbar?.querySelectorAll('.draw-tool-btn') as NodeListOf<HTMLButtonElement>;
    toolBtns?.forEach((b) => {
      const t = b.getAttribute('data-tool');
      if (t === tool) {
        b.classList.add('bg-brand-600', 'text-white', 'shadow-sm');
        b.classList.remove('text-slate-300');
      } else {
        b.classList.remove('bg-brand-600', 'text-white', 'shadow-sm');
        b.classList.add('text-slate-300');
      }
    });

    if (this.drawingCanvas) {
      if (tool === 'move') {
        this.drawingCanvas.style.cursor = 'grab';
      } else {
        this.drawingCanvas.style.cursor = 'crosshair';
      }
    }
  }

  private setDrawingMode(active: boolean) {
    this.isDrawingMode = active;
    if (active) {
      this.toggleDrawModeBtn?.classList.add('bg-brand-50', 'text-brand-700', 'border-brand-300', 'ring-2', 'ring-brand-500');
      if (this.drawBtnText) this.drawBtnText.textContent = 'Drawing...';
      this.drawingToolbar?.classList.remove('hidden');
      this.drawingCanvas?.classList.remove('pointer-events-none');
      this.drawingCanvas?.classList.add('pointer-events-auto');
      this.setDrawTool(this.currentDrawTool);
      this.resizeDrawingCanvas();
    } else {
      this.toggleDrawModeBtn?.classList.remove('bg-brand-50', 'text-brand-700', 'border-brand-300', 'ring-2', 'ring-brand-500');
      if (this.drawBtnText) this.drawBtnText.textContent = 'Draw';
      this.drawingToolbar?.classList.add('hidden');
      this.drawingCanvas?.classList.remove('pointer-events-auto');
      this.drawingCanvas?.classList.add('pointer-events-none');
      this.isMovingDrawing = false;
      this.movingStrokes = [];
      this.redrawAllStrokes();
    }
  }

  private getCanvasPoint(e: PointerEvent): { x: number; y: number } {
    if (!this.drawingCanvas) return { x: 0, y: 0 };
    const rect = this.drawingCanvas.getBoundingClientRect();
    const cssWidth = this.drawingCanvas.offsetWidth || rect.width;
    const cssHeight = this.drawingCanvas.offsetHeight || rect.height;
    const scaleX = cssWidth > 0 && rect.width > 0 ? cssWidth / rect.width : 1;
    const scaleY = cssHeight > 0 && rect.height > 0 ? cssHeight / rect.height : 1;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  private getStrokeBounds(stroke: { points: Array<{ x: number; y: number }>; size: number }) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of stroke.points) {
      if (p.x < minX) minX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.x > maxX) maxX = p.x;
      if (p.y > maxY) maxY = p.y;
    }
    const pad = Math.max(8, (stroke.size || 3) * 2);
    return {
      minX: minX - pad,
      minY: minY - pad,
      maxX: maxX + pad,
      maxY: maxY + pad,
    };
  }

  private isPointInStroke(pt: { x: number; y: number }, stroke: { points: Array<{ x: number; y: number }>; size: number }, tolerance = 25): boolean {
    const b = this.getStrokeBounds(stroke);
    if (pt.x < b.minX - tolerance || pt.x > b.maxX + tolerance || pt.y < b.minY - tolerance || pt.y > b.maxY + tolerance) {
      return false;
    }
    const tolSq = (tolerance + stroke.size) * (tolerance + stroke.size);
    for (let i = 0; i < stroke.points.length; i++) {
      const p = stroke.points[i];
      const distSq = (p.x - pt.x) * (p.x - pt.x) + (p.y - pt.y) * (p.y - pt.y);
      if (distSq <= tolSq) return true;
    }
    return false;
  }

  private getConnectedStrokes(targetStroke: any): any[] {
    const cluster = new Set<any>([targetStroke]);
    let addedNew = true;
    while (addedNew) {
      addedNew = false;
      for (const stroke of this.drawStrokes) {
        if (cluster.has(stroke)) continue;
        const b1 = this.getStrokeBounds(stroke);
        for (const item of Array.from(cluster)) {
          const b2 = this.getStrokeBounds(item);
          const intersects = !(b1.maxX + 35 < b2.minX || b1.minX - 35 > b2.maxX || b1.maxY + 35 < b2.minY || b1.minY - 35 > b2.maxY);
          if (intersects) {
            cluster.add(stroke);
            addedNew = true;
            break;
          }
        }
      }
    }
    return Array.from(cluster);
  }

  private drawSelectionBounds(strokes: any[]) {
    if (!this.drawCtx || strokes.length === 0) return;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const stroke of strokes) {
      const b = this.getStrokeBounds(stroke);
      if (b.minX < minX) minX = b.minX;
      if (b.minY < minY) minY = b.minY;
      if (b.maxX > maxX) maxX = b.maxX;
      if (b.maxY > maxY) maxY = b.maxY;
    }
    if (!isFinite(minX)) return;

    const ctx = this.drawCtx;
    ctx.save();
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.strokeRect(minX - 4, minY - 4, (maxX - minX) + 8, (maxY - minY) + 8);

    ctx.setLineDash([]);
    ctx.fillStyle = '#2563eb';
    const corners = [
      { x: minX - 4, y: minY - 4 },
      { x: maxX + 4, y: minY - 4 },
      { x: minX - 4, y: maxY + 4 },
      { x: maxX + 4, y: maxY + 4 },
    ];
    for (const c of corners) {
      ctx.beginPath();
      ctx.arc(c.x, c.y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private pushDrawUndo() {
    this.drawUndoHistory.push(JSON.parse(JSON.stringify(this.drawStrokes)));
    if (this.drawUndoHistory.length > 30) {
      this.drawUndoHistory.shift();
    }
  }

  private applyDrawUndo() {
    if (this.drawUndoHistory.length > 0) {
      const prev = this.drawUndoHistory.pop()!;
      this.drawStrokes = JSON.parse(JSON.stringify(prev));
    } else {
      this.drawStrokes = [];
    }
    this.redrawAllStrokes();
  }

  private resizeDrawingCanvas() {
    if (!this.drawingCanvas || !this.modelsStage) return;
    const width = this.drawingCanvas.offsetWidth || this.modelsStage.clientWidth || 800;
    const height = this.drawingCanvas.offsetHeight || this.modelsStage.clientHeight || 600;
    if (width === 0 || height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    this.drawingCanvas.width = Math.round(width * dpr);
    this.drawingCanvas.height = Math.round(height * dpr);

    if (this.drawCtx) {
      if (typeof this.drawCtx.resetTransform === 'function') {
        this.drawCtx.resetTransform();
      } else {
        this.drawCtx.setTransform(1, 0, 0, 1, 0, 0);
      }
      this.drawCtx.scale(dpr, dpr);
    }
    this.redrawAllStrokes();
  }

  private redrawAllStrokes() {
    if (!this.drawingCanvas || !this.drawCtx) return;
    const width = this.drawingCanvas.offsetWidth || 800;
    const height = this.drawingCanvas.offsetHeight || 600;
    this.drawCtx.clearRect(0, 0, width, height);

    for (const stroke of this.drawStrokes) {
      this.drawSingleStroke(stroke);
    }
  }

  private drawSingleStroke(stroke: {
    tool: 'pen' | 'highlighter' | 'eraser';
    color: string;
    size: number;
    points: Array<{ x: number; y: number }>;
  }) {
    if (!this.drawCtx || stroke.points.length === 0) return;
    const ctx = this.drawCtx;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (stroke.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = stroke.size * 2.5;
    } else if (stroke.tool === 'highlighter') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = stroke.color;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = stroke.size * 3.5;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = stroke.color;
      ctx.globalAlpha = 0.95;
      ctx.lineWidth = stroke.size;
    }

    if (stroke.points.length === 1) {
      ctx.fillStyle = stroke.tool === 'eraser' ? '#000000' : stroke.color;
      ctx.beginPath();
      ctx.arc(stroke.points[0].x, stroke.points[0].y, ctx.lineWidth / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        const p1 = stroke.points[i - 1];
        const p2 = stroke.points[i];
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
      }
      const last = stroke.points[stroke.points.length - 1];
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
    }
    ctx.restore();
  }

  private handleDrawPointerDown(e: PointerEvent) {
    if (!this.isDrawingMode || !this.drawingCanvas) return;
    const pt = this.getCanvasPoint(e);

    if (this.currentDrawTool === 'move') {
      if (this.drawStrokes.length === 0) return;

      let hitStroke: any = null;
      for (let i = this.drawStrokes.length - 1; i >= 0; i--) {
        if (this.isPointInStroke(pt, this.drawStrokes[i])) {
          hitStroke = this.drawStrokes[i];
          break;
        }
      }

      if (hitStroke) {
        this.movingStrokes = this.getConnectedStrokes(hitStroke);
      } else {
        // If clicked in canvas space during move mode, move all strokes together
        this.movingStrokes = [...this.drawStrokes];
      }

      this.isMovingDrawing = true;
      this.hasActuallyMovedDrawing = false;
      this.moveStartPoint = pt;
      this.moveLastPoint = pt;
      this.drawingCanvas.setPointerCapture(e.pointerId);
      this.drawingCanvas.style.cursor = 'grabbing';
      this.drawSelectionBounds(this.movingStrokes);
      return;
    }

    this.drawingCanvas.setPointerCapture(e.pointerId);
    this.isDrawingPointerDown = true;

    this.currentStroke = {
      tool: this.currentDrawTool,
      color: this.currentDrawColor,
      size: this.currentDrawSize,
      points: [pt],
    };
    this.drawSingleStroke(this.currentStroke);
  }

  private handleDrawPointerMove(e: PointerEvent) {
    if (!this.isDrawingMode || !this.drawingCanvas) return;
    const pt = this.getCanvasPoint(e);

    if (this.currentDrawTool === 'move') {
      if (this.isMovingDrawing && this.moveLastPoint) {
        const dx = pt.x - this.moveLastPoint.x;
        const dy = pt.y - this.moveLastPoint.y;
        this.moveLastPoint = pt;

        if (Math.abs(pt.x - this.moveStartPoint!.x) > 2 || Math.abs(pt.y - this.moveStartPoint!.y) > 2) {
          this.hasActuallyMovedDrawing = true;
        }

        for (const stroke of this.movingStrokes) {
          for (const p of stroke.points) {
            p.x += dx;
            p.y += dy;
          }
        }

        this.redrawAllStrokes();
        this.drawSelectionBounds(this.movingStrokes);
      } else {
        let overStroke = false;
        for (const s of this.drawStrokes) {
          if (this.isPointInStroke(pt, s, 15)) {
            overStroke = true;
            break;
          }
        }
        this.drawingCanvas.style.cursor = overStroke ? 'grab' : 'grab';
      }
      return;
    }

    if (!this.isDrawingPointerDown || !this.currentStroke) return;

    this.currentStroke.points.push(pt);
    this.redrawAllStrokes();
    this.drawSingleStroke(this.currentStroke);
  }

  private handleDrawPointerUp(e: PointerEvent) {
    if (!this.isDrawingMode) return;
    try {
      this.drawingCanvas?.releasePointerCapture(e.pointerId);
    } catch {}

    if (this.currentDrawTool === 'move') {
      if (this.isMovingDrawing) {
        this.isMovingDrawing = false;
        if (this.drawingCanvas) {
          this.drawingCanvas.style.cursor = 'grab';
        }
        this.redrawAllStrokes();
        if (this.hasActuallyMovedDrawing) {
          this.pushDrawUndo();
        }
      }
      return;
    }

    if (this.isDrawingPointerDown) {
      this.isDrawingPointerDown = false;
      if (this.currentStroke && this.currentStroke.points.length > 0) {
        this.pushDrawUndo();
        this.drawStrokes.push(this.currentStroke);
        this.currentStroke = null;
        this.redrawAllStrokes();
      }
    }
  }

  private initInspectorPanel() {
    this.unitTabFt?.addEventListener('click', () => {
      this.currentInspectorUnit = 'ft';
      this.unitTabFt!.className = 'px-2 py-0.5 rounded font-bold text-brand-600 bg-white shadow-soft-sm';
      this.unitTabCm!.className = 'px-2 py-0.5 rounded text-slate-600 hover:text-slate-900';
      this.editHeightFtGroup?.classList.remove('hidden');
      this.editHeightFtGroup?.classList.add('grid');
      this.editHeightCmGroup?.classList.add('hidden');
    });

    this.unitTabCm?.addEventListener('click', () => {
      this.currentInspectorUnit = 'cm';
      this.unitTabCm!.className = 'px-2 py-0.5 rounded font-bold text-brand-600 bg-white shadow-soft-sm';
      this.unitTabFt!.className = 'px-2 py-0.5 rounded text-slate-600 hover:text-slate-900';
      this.editHeightCmGroup?.classList.remove('hidden');
      this.editHeightFtGroup?.classList.add('hidden');
      this.editHeightFtGroup?.classList.remove('grid');
    });

    this.editEntityNameInput?.addEventListener('input', () => {
      const item = this.getSelectedItem();
      if (!item) return;
      item.name = this.editEntityNameInput?.value.trim() || 'Entity';
      this.persistState();
      this.renderChart();
      this.renderPeopleList();
      this.renderSummary();
      this.syncPrecisionToolbar();
    });

    this.editHeightCmInput?.addEventListener('input', () => {
      const item = this.getSelectedItem();
      if (!item) return;
      const cm = parseFloat(this.editHeightCmInput?.value || '0');
      if (!isNaN(cm) && cm >= LIMITS.MIN_HEIGHT_CM && cm <= LIMITS.MAX_HEIGHT_CM) {
        item.heightCm = cm;
        item.isCustomHeight = item.referenceHeightCm !== undefined ? cm !== item.referenceHeightCm : true;
        const { feet, inches } = cmToFeetInches(cm);
        if (this.editHeightFeetInput) this.editHeightFeetInput.value = String(feet);
        if (this.editHeightInchesInput) this.editHeightInchesInput.value = String(inches);
        if (this.editHeightSlider) this.editHeightSlider.value = String(Math.min(500, Math.max(15, Math.round(cm))));
        this.persistState();
        this.render();
        this.syncPrecisionToolbar();
      }
    });

    const updateFromFtIn = () => {
      const item = this.getSelectedItem();
      if (!item) return;
      const ft = parseFloat(this.editHeightFeetInput?.value || '0') || 0;
      const inc = parseFloat(this.editHeightInchesInput?.value || '0') || 0;
      const cm = feetInchesToCm(ft, inc);
      if (cm >= LIMITS.MIN_HEIGHT_CM && cm <= LIMITS.MAX_HEIGHT_CM) {
        item.heightCm = Math.round(cm);
        item.isCustomHeight = item.referenceHeightCm !== undefined ? item.heightCm !== item.referenceHeightCm : true;
        if (this.editHeightCmInput) this.editHeightCmInput.value = String(item.heightCm);
        if (this.editHeightSlider) this.editHeightSlider.value = String(Math.min(500, Math.max(15, item.heightCm)));
        this.persistState();
        this.render();
        this.syncPrecisionToolbar();
      }
    };

    this.editHeightFeetInput?.addEventListener('input', updateFromFtIn);
    this.editHeightInchesInput?.addEventListener('input', updateFromFtIn);

    this.editHeightSlider?.addEventListener('input', () => {
      const item = this.getSelectedItem();
      if (!item) return;
      const cm = parseFloat(this.editHeightSlider?.value || '175');
      item.heightCm = cm;
      item.isCustomHeight = item.referenceHeightCm !== undefined ? cm !== item.referenceHeightCm : true;
      if (this.editHeightCmInput) this.editHeightCmInput.value = String(cm);
      const { feet, inches } = cmToFeetInches(cm);
      if (this.editHeightFeetInput) this.editHeightFeetInput.value = String(feet);
      if (this.editHeightInchesInput) this.editHeightInchesInput.value = String(inches);
      this.persistState();
      this.render();
      this.syncPrecisionToolbar();
    });

    const colorChips = this.colorPickerChips?.querySelectorAll('.color-chip-btn');
    colorChips?.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const item = this.getSelectedItem();
        if (!item) return;
        const color = (e.currentTarget as HTMLElement).getAttribute('data-color');
        if (color) {
          item.color = color;
          this.persistState();
          this.render();
          this.syncPrecisionToolbar();
          this.syncInspectorPanel();
        }
      });
    });

    this.editOpacitySlider?.addEventListener('input', () => {
      const item = this.getSelectedItem();
      if (!item) return;
      const op = parseFloat(this.editOpacitySlider?.value || '1.0');
      item.opacity = op;
      if (this.opacityValLabel) {
        this.opacityValLabel.textContent = `${Math.round(op * 100)}%`;
      }
      this.persistState();
      this.renderChart();
    });

    this.duplicateEntityBtn?.addEventListener('click', () => {
      const item = this.getSelectedItem();
      if (!item) return;
      this.pushHistory();
      const dup: ComparisonItem = {
        ...item,
        id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        name: `${item.name} (Copy)`,
        positionX: typeof item.positionX === 'number' ? item.positionX + 40 : undefined,
      };
      this.state.people.push(dup);
      this.selectItem(dup.id);
      this.persistState();
      this.render();
    });

    this.deleteEntityBtn?.addEventListener('click', () => {
      const item = this.getSelectedItem();
      if (!item) return;
      this.deleteItem(item.id);
    });

    this.deselectEntityBtn?.addEventListener('click', () => {
      this.deselectItem();
    });
  }

  private getSelectedItem(): ComparisonItem | undefined {
    if (!this.state.selectedId) return undefined;
    return this.state.people.find((p) => p.id === this.state.selectedId);
  }

  private syncInspectorPanel() {
    if (!this.entityEditPanel) return;

    if (!this.state.selectedId) {
      this.entityEditPanel.classList.add('opacity-50', 'pointer-events-none');
      if (this.editPanelTitle) this.editPanelTitle.textContent = 'No Entity Selected';
      return;
    }

    const item = this.getSelectedItem();
    if (!item) {
      this.entityEditPanel.classList.add('opacity-50', 'pointer-events-none');
      if (this.editPanelTitle) this.editPanelTitle.textContent = 'No Entity Selected';
      return;
    }

    this.entityEditPanel.classList.remove('opacity-50', 'pointer-events-none');
    if (this.editPanelTitle) this.editPanelTitle.textContent = `Controls: ${item.name}`;

    if (this.editEntityNameInput && document.activeElement !== this.editEntityNameInput) {
      this.editEntityNameInput.value = item.name;
    }
    if (this.editHeightCmInput && document.activeElement !== this.editHeightCmInput) {
      this.editHeightCmInput.value = String(Math.round(item.heightCm));
    }
    const { feet, inches } = cmToFeetInches(item.heightCm);
    if (this.editHeightFeetInput && document.activeElement !== this.editHeightFeetInput) {
      this.editHeightFeetInput.value = String(feet);
    }
    if (this.editHeightInchesInput && document.activeElement !== this.editHeightInchesInput) {
      this.editHeightInchesInput.value = String(inches);
    }
    if (this.editHeightSlider && document.activeElement !== this.editHeightSlider) {
      this.editHeightSlider.value = String(Math.min(500, Math.max(15, Math.round(item.heightCm))));
    }
    const opacity = typeof item.opacity === 'number' ? item.opacity : 1.0;
    if (this.editOpacitySlider && document.activeElement !== this.editOpacitySlider) {
      this.editOpacitySlider.value = String(opacity);
    }
    if (this.opacityValLabel) {
      this.opacityValLabel.textContent = `${Math.round(opacity * 100)}%`;
    }

    const colorChips = this.colorPickerChips?.querySelectorAll('.color-chip-btn');
    colorChips?.forEach((chip) => {
      const c = chip.getAttribute('data-color');
      if (c?.toLowerCase() === item.color?.toLowerCase()) {
        chip.classList.add('ring-2', 'ring-offset-2', 'ring-slate-900', 'scale-110');
      } else {
        chip.classList.remove('ring-2', 'ring-offset-2', 'ring-slate-900', 'scale-110');
      }
    });
  }

  private initToolbarControls() {
    if (this.sortSelector) {
      this.sortSelector.addEventListener('change', (e) => {
        this.state.sortMode = (e.target as HTMLSelectElement).value as SortMode;
        this.renderChart();
      });
    }

    if (this.rulerToggleCm && this.rulerToggleFt) {
      this.rulerToggleCm.addEventListener('click', () => this.setRulerUnit('cm'));
      this.rulerToggleFt.addEventListener('click', () => this.setRulerUnit('ft'));
    }

    if (this.shareBtn) {
      this.shareBtn.addEventListener('click', async () => this.handleShare());
    }

    if (this.downloadBtn) {
      this.downloadBtn.addEventListener('click', async () => this.handleDownload());
    }

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.handleReset());
    }

    if (this.clearAllBtn) {
      this.clearAllBtn.addEventListener('click', () => {
        this.state.people = [];
        this.deselectItem();
        this.persistState();
        this.render();
      });
    }

    if (this.undoBtn) {
      this.undoBtn.addEventListener('click', () => this.undo());
    }
    if (this.redoBtn) {
      this.redoBtn.addEventListener('click', () => this.redo());
    }

    if (this.zoomOutBtn) {
      this.zoomOutBtn.addEventListener('click', () => this.setZoom(this.state.zoomLevel - 0.1));
    }
    if (this.zoomInBtn) {
      this.zoomInBtn.addEventListener('click', () => this.setZoom(this.state.zoomLevel + 0.1));
    }
    if (this.zoomResetBtn) {
      this.zoomResetBtn.addEventListener('click', () => this.setZoom(1.0));
    }

    if (this.fitAllBtn) {
      this.fitAllBtn.addEventListener('click', () => this.fitAll());
    }
    if (this.resetPositionsBtn) {
      this.resetPositionsBtn.addEventListener('click', () => this.resetToAutoLayout());
    }

    if (this.dismissHintBtn) {
      this.dismissHintBtn.addEventListener('click', () => {
        this.hintBanner?.classList.add('hidden');
        try {
          localStorage.setItem('height_compare_hint_dismissed', 'true');
        } catch {}
      });
    }

    if (this.nudgeDownBtn) {
      this.nudgeDownBtn.addEventListener('click', (e) => {
        const item = this.getSelectedItem();
        if (!item) return;
        const step = e.shiftKey ? 5 : 1;
        this.pushHistory();
        item.heightCm = Math.max(LIMITS.MIN_HEIGHT_CM, item.heightCm - step);
        item.isCustomHeight = item.referenceHeightCm !== undefined ? item.heightCm !== item.referenceHeightCm : true;
        this.persistState();
        this.render();
        this.syncPrecisionToolbar();
        this.syncInspectorPanel();
      });
    }

    if (this.nudgeUpBtn) {
      this.nudgeUpBtn.addEventListener('click', (e) => {
        const item = this.getSelectedItem();
        if (!item) return;
        const step = e.shiftKey ? 5 : 1;
        this.pushHistory();
        item.heightCm = Math.min(LIMITS.MAX_HEIGHT_CM, item.heightCm + step);
        item.isCustomHeight = item.referenceHeightCm !== undefined ? item.heightCm !== item.referenceHeightCm : true;
        this.persistState();
        this.render();
        this.syncPrecisionToolbar();
        this.syncInspectorPanel();
      });
    }

    if (this.nudgeLeftBtn) {
      this.nudgeLeftBtn.addEventListener('click', (e) => {
        const item = this.getSelectedItem();
        if (!item) return;
        this.ensureManualPositions();
        this.pushHistory();
        const step = e.shiftKey ? 40 : 10;
        item.positionX = Math.max(10, (item.positionX ?? 50) - step);
        this.persistState();
        this.renderChart();
      });
    }

    if (this.nudgeRightBtn) {
      this.nudgeRightBtn.addEventListener('click', (e) => {
        const item = this.getSelectedItem();
        if (!item) return;
        this.ensureManualPositions();
        this.pushHistory();
        const step = e.shiftKey ? 40 : 10;
        item.positionX = (item.positionX ?? 50) + step;
        this.persistState();
        this.renderChart();
      });
    }

    if (this.resetSelectedHeightBtn) {
      this.resetSelectedHeightBtn.addEventListener('click', () => {
        const item = this.getSelectedItem();
        if (!item) return;
        this.pushHistory();
        item.heightCm = item.referenceHeightCm ?? item.heightCm;
        item.isCustomHeight = false;
        this.persistState();
        this.render();
        this.syncPrecisionToolbar();
        this.syncInspectorPanel();
      });
    }

    if (this.deselectBtn) {
      this.deselectBtn.addEventListener('click', () => this.deselectItem());
    }
  }

  private initPresets() {
    const presetBtns = document.querySelectorAll('.quick-preset-btn');
    presetBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const presetId = (e.currentTarget as HTMLElement).getAttribute('data-preset-id');
        const found = QUICK_PRESETS.find((p) => p.id === presetId);
        if (!found) return;

        this.pushHistory();
        this.state.positionMode = 'auto';
        this.state.selectedId = null;
        this.state.people = found.items.map((it, i) => ({
          id: `preset-${Date.now()}-${i}`,
          assetId: it.assetId,
          category: it.category,
          name: it.name,
          heightCm: it.heightCm,
          referenceHeightCm: it.heightCm,
          isCustomHeight: false,
          color: it.color,
        }));

        this.persistState();
        this.render();
        if (this.state.people.length > 0) {
          this.selectItem(this.state.people[0].id);
        }

        const chartEl = document.getElementById('comparison-tool');
        chartEl?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const benchmarkBtn = document.querySelector('.quick-preset-benchmark-btn');
    benchmarkBtn?.addEventListener('click', () => {
      this.pushHistory();
      this.state.positionMode = 'auto';
      this.state.selectedId = null;
      this.state.people = BENCHMARK_SCALE_PRESET.items.map((it, i) => ({
        id: `benchmark-${Date.now()}-${i}`,
        assetId: it.assetId,
        category: it.category,
        name: it.name,
        heightCm: it.heightCm,
        referenceHeightCm: it.heightCm,
        isCustomHeight: false,
        color: it.color,
      }));

      this.persistState();
      this.render();
      if (this.state.people.length > 0) {
        this.selectItem(this.state.people[0].id);
      }

      const chartEl = document.getElementById('comparison-tool');
      chartEl?.scrollIntoView({ behavior: 'smooth' });
    });

    const legacyPresetBtns = document.querySelectorAll('.quick-compare-btn');
    legacyPresetBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const type = target.getAttribute('data-preset-type');
        const idx = parseInt(target.getAttribute('data-preset-index') || '0', 10);
        this.loadQuickComparePreset(type || 'human', idx);
      });
    });
  }

  private loadQuickComparePreset(type: string, index: number) {
    let preset: any = null;
    if (type === 'benchmark') {
      preset = BENCHMARK_SCALE_PRESET;
    } else if (type === 'celebrity') {
      preset = QUICK_COMPARE_CELEBRITY_PRESETS[index];
    } else if (type === 'object') {
      preset = QUICK_COMPARE_OBJECT_PRESETS[index];
    } else if (type === 'animal') {
      preset = QUICK_COMPARE_ANIMAL_PRESETS[index];
    } else {
      preset = QUICK_COMPARE_HUMAN_PRESETS[index];
    }
    if (!preset) return;

    this.pushHistory();
    this.state.positionMode = 'auto';
    this.state.selectedId = null;
    this.state.people = preset.items.map((item: any, i: number) => this.migrateItem({
      ...item,
      id: `preset-${Date.now()}-${i}`,
    }));

    this.persistState();
    this.render();
    if (this.state.people.length > 0) {
      this.selectItem(this.state.people[0].id);
    }

    const chartEl = document.getElementById('comparison-tool');
    chartEl?.scrollIntoView({ behavior: 'smooth' });
  }

  private initKeyboardControls() {
    document.addEventListener('keydown', (e) => {
      const isInputFocused =
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement ||
        document.activeElement instanceof HTMLSelectElement;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        if (this.isDrawingMode) {
          e.preventDefault();
          this.applyDrawUndo();
          return;
        }
        if (e.shiftKey) {
          e.preventDefault();
          this.redo();
        } else {
          e.preventDefault();
          this.undo();
        }
        return;
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        if (this.isDrawingMode) return;
        e.preventDefault();
        this.redo();
        return;
      }

      if (this.isDrawingMode) {
        if (isInputFocused) return;
        const k = e.key.toLowerCase();
        if (k === 'm' || k === 'v') {
          e.preventDefault();
          this.setDrawTool('move');
          return;
        } else if (k === 'p') {
          e.preventDefault();
          this.setDrawTool('pen');
          return;
        } else if (k === 'h') {
          e.preventDefault();
          this.setDrawTool('highlighter');
          return;
        } else if (k === 'e') {
          e.preventDefault();
          this.setDrawTool('eraser');
          return;
        } else if (e.code === 'Space' && !this.isSpacePressedForMove) {
          e.preventDefault();
          this.isSpacePressedForMove = true;
          this.prevDrawToolBeforeSpace = this.currentDrawTool;
          this.setDrawTool('move');
          return;
        }
      }

      if (isInputFocused) return;

      if (e.key === 'Escape') {
        if (this.isDrawingMode) {
          this.setDrawingMode(false);
          return;
        }
        this.deselectItem();
        return;
      }

      const item = this.getSelectedItem();
      if (!item) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const step = e.shiftKey ? 5 : 1;
        this.pushHistory();
        item.heightCm = Math.min(LIMITS.MAX_HEIGHT_CM, item.heightCm + step);
        item.isCustomHeight = item.referenceHeightCm !== undefined ? item.heightCm !== item.referenceHeightCm : true;
        this.persistState();
        this.render();
        this.syncPrecisionToolbar();
        this.syncInspectorPanel();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const step = e.shiftKey ? 5 : 1;
        this.pushHistory();
        item.heightCm = Math.max(LIMITS.MIN_HEIGHT_CM, item.heightCm - step);
        item.isCustomHeight = item.referenceHeightCm !== undefined ? item.heightCm !== item.referenceHeightCm : true;
        this.persistState();
        this.render();
        this.syncPrecisionToolbar();
        this.syncInspectorPanel();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.ensureManualPositions();
        this.pushHistory();
        const step = e.shiftKey ? 40 : 10;
        item.positionX = Math.max(10, (item.positionX ?? 50) - step);
        this.persistState();
        this.renderChart();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.ensureManualPositions();
        this.pushHistory();
        const step = e.shiftKey ? 40 : 10;
        item.positionX = (item.positionX ?? 50) + step;
        this.persistState();
        this.renderChart();
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        this.pushHistory();
        this.deleteItem(item.id);
      }
    });

    document.addEventListener('keyup', (e) => {
      if (this.isDrawingMode && e.code === 'Space' && this.isSpacePressedForMove) {
        e.preventDefault();
        this.isSpacePressedForMove = false;
        this.setDrawTool(this.prevDrawToolBeforeSpace);
      }
    });
  }

  private pushHistory() {
    const snapshot = {
      people: JSON.parse(JSON.stringify(this.state.people)) as ComparisonItem[],
      positionMode: this.state.positionMode,
    };
    this.undoStack.push(snapshot);
    if (this.undoStack.length > 30) {
      this.undoStack.shift();
    }
    this.redoStack = [];
    this.updateUndoRedoButtons();
  }

  private undo() {
    if (this.undoStack.length === 0) return;

    const currentSnapshot = {
      people: JSON.parse(JSON.stringify(this.state.people)) as ComparisonItem[],
      positionMode: this.state.positionMode,
    };
    this.redoStack.push(currentSnapshot);

    const prev = this.undoStack.pop()!;
    this.state.people = prev.people;
    this.state.positionMode = prev.positionMode;

    this.persistState();
    this.render();
    this.syncPrecisionToolbar();
    this.syncInspectorPanel();
    this.updateUndoRedoButtons();
  }

  private redo() {
    if (this.redoStack.length === 0) return;

    const currentSnapshot = {
      people: JSON.parse(JSON.stringify(this.state.people)) as ComparisonItem[],
      positionMode: this.state.positionMode,
    };
    this.undoStack.push(currentSnapshot);

    const next = this.redoStack.pop()!;
    this.state.people = next.people;
    this.state.positionMode = next.positionMode;

    this.persistState();
    this.render();
    this.syncPrecisionToolbar();
    this.syncInspectorPanel();
    this.updateUndoRedoButtons();
  }

  private updateUndoRedoButtons() {
    if (this.undoBtn) {
      this.undoBtn.disabled = this.undoStack.length === 0;
    }
    if (this.redoBtn) {
      this.redoBtn.disabled = this.redoStack.length === 0;
    }
  }

  private setZoom(level: number) {
    const clamped = Math.min(2.0, Math.max(0.5, Math.round(level * 10) / 10));
    this.state.zoomLevel = clamped;
    if (this.zoomLabel) {
      this.zoomLabel.textContent = `${Math.round(clamped * 100)}%`;
    }
    if (this.modelsStage) {
      this.modelsStage.style.transform = clamped === 1 ? '' : `scale(${clamped})`;
      this.modelsStage.style.transformOrigin = 'bottom left';
    }
  }

  private fitAll() {
    const count = this.state.people.length;
    if (count === 0) return;

    this.pushHistory();
    this.ensureManualPositions();

    const stageWidth = this.modelsStage?.clientWidth || 800;
    const itemWidth = 140;
    const minGap = 24;
    const totalNeeded = count * itemWidth + (count - 1) * minGap;

    if (totalNeeded > stageWidth - 60) {
      const spacing = itemWidth + minGap;
      this.state.people.forEach((item, index) => {
        item.positionX = Math.round(30 + index * spacing);
      });
    } else {
      const available = stageWidth - 60;
      const step = available / Math.max(1, count);
      this.state.people.forEach((item, index) => {
        item.positionX = Math.round(30 + index * step + (step - itemWidth) / 2);
      });
    }

    this.setZoom(1.0);
    this.persistState();
    this.renderChart();
  }

  private resetToAutoLayout() {
    this.pushHistory();
    this.state.positionMode = 'auto';
    this.state.people.forEach((item) => {
      delete item.positionX;
    });
    this.setZoom(1.0);
    this.persistState();
    this.renderChart();
  }

  private ensureManualPositions() {
    if (this.state.positionMode === 'manual') return;

    const wrappers = this.modelsContainer.querySelectorAll('.human-wrapper');
    const containerRect = this.modelsContainer.getBoundingClientRect();

    wrappers.forEach((wrapper) => {
      const id = wrapper.getAttribute('data-id');
      const item = this.state.people.find((p) => p.id === id);
      if (item && wrapper instanceof HTMLElement) {
        const rect = wrapper.getBoundingClientRect();
        const relLeft = (rect.left - containerRect.left) / this.state.zoomLevel;
        item.positionX = Math.round(Math.max(10, relLeft));
        wrapper.style.position = 'absolute';
        wrapper.style.left = `${item.positionX}px`;
        wrapper.style.bottom = '0';
        wrapper.style.width = '140px';
      }
    });

    this.state.positionMode = 'manual';
    this.modelsContainer.className = 'relative z-10 w-full h-full pb-0 mb-[36px] block';
  }

  private selectItem(id: string) {
    this.state.selectedId = id;
    this.syncPrecisionToolbar();
    this.syncInspectorPanel();
    this.renderChart();
    this.renderPeopleList();
  }

  private deselectItem() {
    this.state.selectedId = null;
    this.syncPrecisionToolbar();
    this.syncInspectorPanel();
    this.renderChart();
    this.renderPeopleList();
  }

  private deleteItem(itemId: string) {
    this.pushHistory();
    if (this.state.selectedId === itemId) {
      this.deselectItem();
    }
    this.state.people = this.state.people.filter((p) => p.id !== itemId);
    this.persistState();
    this.render();
  }

  private syncPrecisionToolbar() {
    if (!this.precisionToolbar) return;

    if (!this.state.selectedId) {
      this.precisionToolbar.classList.add('hidden');
      return;
    }

    const item = this.getSelectedItem();
    if (!item) {
      this.precisionToolbar.classList.add('hidden');
      this.state.selectedId = null;
      return;
    }

    this.precisionToolbar.classList.remove('hidden');
    if (this.selectedItemColorDot) this.selectedItemColorDot.style.backgroundColor = item.color;
    if (this.selectedItemName) this.selectedItemName.textContent = item.name;
    if (this.selectedItemBadge) this.selectedItemBadge.textContent = item.category.toUpperCase();

    if (this.selectedHeightDisplay) {
      this.selectedHeightDisplay.textContent = formatHeight(item.heightCm, this.state.rulerUnit);
    }

    if (item.isCustomHeight) {
      this.selectedCustomBadge?.classList.remove('hidden');
      this.resetSelectedHeightBtn?.classList.remove('hidden');
    } else {
      this.selectedCustomBadge?.classList.add('hidden');
      this.resetSelectedHeightBtn?.classList.add('hidden');
    }
  }

  private setRulerUnit(unit: RulerUnit) {
    this.state.rulerUnit = unit;
    if (unit === 'cm') {
      this.rulerToggleCm!.className = 'px-2 py-1 rounded-md transition-all font-bold text-brand-600 bg-white shadow-soft-sm';
      this.rulerToggleFt!.className = 'px-2 py-1 rounded-md transition-all text-slate-600 hover:text-slate-900';
    } else {
      this.rulerToggleFt!.className = 'px-2 py-1 rounded-md transition-all font-bold text-brand-600 bg-white shadow-soft-sm';
      this.rulerToggleCm!.className = 'px-2 py-1 rounded-md transition-all text-slate-600 hover:text-slate-900';
    }
    this.renderChart();
    this.renderSummary();
    this.syncPrecisionToolbar();
  }

  private async handleShare() {
    if (this.state.people.length === 0) {
      alert('Please add at least one item to share.');
      return;
    }

    const encoded = encodePeopleToUrl(this.state.people);
    const url = `${window.location.origin}${window.location.pathname}?p=${encoded}`;

    window.history.replaceState({}, '', url);

    const copied = await copyToClipboard(url);
    if (copied && this.shareBtn && this.shareBtnText) {
      const originalText = this.shareBtnText.textContent;
      this.shareBtnText.textContent = 'Link copied!';
      this.shareBtn.classList.add('text-emerald-600', 'border-emerald-300', 'bg-emerald-50');

      setTimeout(() => {
        this.shareBtnText!.textContent = originalText;
        this.shareBtn?.classList.remove('text-emerald-600', 'border-emerald-300', 'bg-emerald-50');
      }, 2500);
    } else {
      prompt('Copy your comparison link:', url);
    }
  }

  private async handleDownload() {
    if (this.state.people.length === 0) {
      alert('Please add at least one item to export.');
      return;
    }

    if (!this.downloadBtn) return;
    const originalBtn = this.downloadBtn.innerHTML;
    this.downloadBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-1.5 h-3.5 w-3.5 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Exporting...</span>
    `;

    try {
      const sorted = sortPeople(this.state.people, this.state.sortMode);
      const { downloadChartAsPng } = await import('../lib/exportChart');
      await downloadChartAsPng(sorted, this.state.rulerUnit, 'height-comparison.png', this.drawingCanvas);
    } finally {
      this.downloadBtn.innerHTML = originalBtn;
    }
  }

  private handleReset() {
    if (confirm('Reset comparison back to the default demo items?')) {
      this.pushHistory();
      this.state.people = INITIAL_PEOPLE.map((it) => this.migrateItem(it));
      this.state.sortMode = 'added';
      this.state.rulerUnit = 'cm';
      this.state.positionMode = 'auto';
      this.setZoom(1.0);
      if (this.sortSelector) this.sortSelector.value = 'added';
      this.setRulerUnit('cm');
      this.persistState();
      window.history.replaceState({}, '', window.location.pathname);
      this.render();
      if (this.state.people.length > 0) {
        this.selectItem(this.state.people[0].id);
      }
    }
  }

  private render() {
    this.renderPeopleList();
    this.renderChart();
    this.renderDifference();
    this.renderSummary();
  }

  private renderPeopleList() {
    if (!this.peopleListContainer) return;

    if (this.peopleCountBadge) {
      this.peopleCountBadge.textContent = String(this.state.people.length);
    }

    if (this.state.people.length === 0) {
      this.peopleListContainer.innerHTML = '';
      this.peopleListEmpty?.classList.remove('hidden');
      return;
    }

    this.peopleListEmpty?.classList.add('hidden');

    this.peopleListContainer.innerHTML = this.state.people
      .map((item) => {
        const isSelected = this.state.selectedId === item.id;
        const formattedFtIn = cmToFeetInches(item.heightCm).formatted;
        const typeSubtitle = (item.category === 'custom' || item.customImageUrl) ? 'CUSTOM IMAGE' : item.category.toUpperCase();

        return `
          <div class="flex items-center justify-between p-2.5 rounded-xl border ${
            isSelected ? 'border-brand-500 bg-brand-50/50' : 'border-slate-200/80 bg-slate-50/40 hover:bg-slate-50'
          } transition-all cursor-pointer select-none" data-id="${item.id}">
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
              <span class="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-sm" style="background-color: ${item.color};"></span>
              <div class="truncate">
                <div class="font-bold text-xs text-slate-900 truncate">${item.name}</div>
                <div class="text-[11px] text-slate-500 flex items-center gap-1.5 uppercase tracking-tight">
                  <span>${typeSubtitle}</span>
                  <span>•</span>
                  <span>${formattedFtIn} (${Math.round(item.heightCm)} cm)</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-1 ml-2 flex-shrink-0">
              <button
                type="button"
                class="delete-person-btn p-1.5 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition-colors"
                data-id="${item.id}"
                title="Delete ${item.name}"
                aria-label="Delete ${item.name}"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        `;
      })
      .join('');

    this.peopleListContainer.querySelectorAll('[data-id]').forEach((row) => {
      row.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.closest('.delete-person-btn')) return;
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (id) {
          this.selectItem(id);
          document.getElementById('person-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    this.peopleListContainer.querySelectorAll('.delete-person-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (id) this.deleteItem(id);
      });
    });
  }

  private renderChart() {
    if (!this.modelsContainer) return;

    const items = sortPeople(this.state.people, this.state.sortMode);
    const count = items.length;

    if (this.chartTotalCount) {
      this.chartTotalCount.textContent = `${count} ${count === 1 ? 'Item' : 'Items'}`;
    }

    if (count === 0) {
      this.chartEmptyState.classList.remove('hidden');
      this.modelsContainer.innerHTML = '';
      this.chartGridLines.innerHTML = '';
      this.rulerTicksContainer.innerHTML = '';
      return;
    }

    this.chartEmptyState.classList.add('hidden');

    const visualHeightPx = this.getVisualHeightPx();
    const { scale, rulerMaxCm } = calculateScale(items, visualHeightPx);

    const ticks = generateRulerTicks(rulerMaxCm, this.state.rulerUnit);
    this.renderRuler(ticks, scale);

    this.chartGridLines.innerHTML = ticks
      .filter((t) => t.isMajor)
      .map((t) => {
        const bottomPx = t.cm * scale + 36;
        return `
          <div 
            class="absolute left-0 right-0 border-b border-dashed border-slate-200/90 pointer-events-none" 
            style="bottom: ${bottomPx}px;"
          ></div>
        `;
      })
      .join('');

    const isManual = this.state.positionMode === 'manual';
    let stageWidthPx = Math.max(380, count * 160);
    if (isManual) {
      const maxItemX = Math.max(...items.map((it) => it.positionX ?? 50), 300);
      stageWidthPx = Math.max(stageWidthPx, maxItemX + 220);
    }
    this.modelsContainer.style.minWidth = `${stageWidthPx}px`;
    this.modelsContainer.className = `relative z-10 w-full h-full pb-0 mb-[36px] ${
      isManual ? 'block' : 'flex items-end justify-around'
    }`;

    // Ensure all SVGs for currently rendered items are cached for responsive recoloring
    const uncachedAssets = items
      .map((it) => {
        const publicPath = it.publicPath || getArchetypeAsset(it.assetId || (it as any).modelType || it.id, it.category)?.publicPath;
        const isPng = it.isPng ?? (publicPath?.endsWith('.png') || false);
        return { publicPath, isPng };
      })
      .filter(
        (a) =>
          a.publicPath &&
          !a.isPng &&
          !a.publicPath.endsWith('.png') &&
          a.publicPath.endsWith('.svg') &&
          !hasCachedSvg(a.publicPath)
      );

    if (uncachedAssets.length > 0) {
      Promise.all(uncachedAssets.map((a) => fetchSvgData(a.publicPath!))).then((results) => {
        if (results.some(Boolean)) {
          this.renderChart();
        }
      });
    }

    this.modelsContainer.innerHTML = items
      .map((item, itemIndex) => {
        const { svgMarkup, totalSvgHeightPx, totalSvgWidthPx, measurementHeightPx } = renderEntitySvg(item, scale);
        const formattedDisplay = formatHeight(item.heightCm, this.state.rulerUnit);
        const fullDetails = formatHeightFull(item.heightCm);
        const isSelected = this.state.selectedId === item.id;

        let typeLabel = item.category.toUpperCase();
        if (item.category === 'male') typeLabel = 'MALE (VERTEX)';
        else if (item.category === 'female') typeLabel = 'FEMALE (VERTEX)';
        else if (item.category === 'animals') typeLabel = 'ANIMAL (SHOULDER/WITHERS)';
        else if (item.category === 'objects') typeLabel = 'OBJECT (GROUND TO TOP)';
        else if (item.category === 'apparel') typeLabel = 'APPAREL (REFERENCE SCALE)';
        else if (item.category === 'fictional') typeLabel = 'FICTIONAL (SCALE BENCHMARK)';
        else if (item.category === 'plants') typeLabel = 'PLANT (MAX REACH)';
        else if (item.category === 'sports') typeLabel = 'SPORTS (REGULATION HEIGHT)';
        else if (item.category === 'custom' || item.customImageUrl) typeLabel = 'CUSTOM IMAGE';

        const positionStyle = isManual
          ? `position: absolute; left: ${item.positionX ?? 50}px; bottom: 0; width: 140px;`
          : 'position: relative;';

        // Label collision mitigation: if adjacent items are positioned closely, alternate vertical offset
        let labelOffset = 8;
        if (isManual) {
          const closeItem = items.find(
            (other) => other.id !== item.id && Math.abs((item.positionX ?? 50) - (other.positionX ?? 50)) < 120
          );
          if (closeItem) {
            const itemX = item.positionX ?? 50;
            const otherX = closeItem.positionX ?? 50;
            if (itemX > otherX) {
              labelOffset = 34;
            }
          }
        } else if (count > 3) {
          labelOffset = (itemIndex % 2 === 1) ? 32 : 8;
        }

        return `
          <div 
            class="human-wrapper group relative flex flex-col items-center justify-end ${
              isManual ? '' : 'flex-1 max-w-[220px]'
            } cursor-grab active:cursor-grabbing select-none touch-none transition-[outline,box-shadow] duration-150 ${
              isSelected ? 'ring-2 ring-brand-500 ring-offset-2 ring-offset-white rounded-xl shadow-soft-sm' : ''
            }"
            style="${positionStyle}"
            data-id="${item.id}"
            data-name="${item.name}"
            data-category="${item.category}"
            data-type-label="${typeLabel}"
            data-height-full="${fullDetails}"
            tabindex="0"
            role="button"
            aria-label="${item.name}, ${typeLabel}, ${fullDetails}"
          >
            <!-- Vertical Top Resize Handle positioned above model and label -->
            <div 
              class="resize-handle-top absolute left-1/2 -translate-x-1/2 z-30 ${
                isSelected ? 'flex' : 'hidden group-hover:flex'
              } items-center justify-center cursor-ns-resize touch-none select-none group/handle"
              style="bottom: ${Math.max(measurementHeightPx, totalSvgHeightPx) + labelOffset + 26}px;"
              data-id="${item.id}"
              title="Drag up/down to adjust physical height (Shift for 5 cm snap)"
            >
              <div class="w-6 h-6 rounded-full bg-white border-2 border-brand-600 shadow-md flex items-center justify-center text-brand-600 hover:scale-110 hover:bg-brand-50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="7 15 12 20 17 15"></polyline>
                  <polyline points="7 9 12 4 17 9"></polyline>
                  <line x1="12" y1="4" x2="12" y2="20"></line>
                </svg>
              </div>
            </div>

            <!-- Height indicator tag above model reference point -->
            <div 
              class="absolute px-2.5 py-0.5 rounded-md text-[11px] font-bold text-white shadow-soft-sm tracking-tight transition-transform group-hover:scale-105 z-20 flex items-center gap-1.5 whitespace-nowrap pointer-events-none"
              style="background-color: ${item.color}; bottom: ${Math.max(measurementHeightPx, totalSvgHeightPx) + labelOffset}px;"
            >
              <span class="text-[10px] font-black uppercase opacity-90">${item.name}</span>
              <span>•</span>
              <span>${formattedDisplay}</span>
              ${item.isCustomHeight ? '<span class="text-[8px] bg-amber-400 text-slate-950 px-1 rounded font-black tracking-wider">CUSTOM</span>' : ''}
            </div>

            <!-- Model Vector SVG scaled accurately with baseline anchor -->
            <div 
              class="flex items-end justify-center w-full model-transition pointer-events-none"
              style="height: ${totalSvgHeightPx}px;"
            >
              ${svgMarkup}
            </div>

            <!-- Model Base Label (under baseline) -->
            <div class="absolute -bottom-[32px] flex flex-col items-center pointer-events-none">
              <span class="w-2 h-2 rounded-full mb-0.5" style="background-color: ${item.color};"></span>
              <span class="text-xs font-bold text-slate-900 truncate max-w-[120px] text-center">${item.name}</span>
            </div>
          </div>
        `;
      })
      .join('');

    this.attachModelInteractions();
    this.attachTooltipListeners();
    this.resizeDrawingCanvas();
  }

  private attachModelInteractions() {
    const wrappers = this.modelsContainer.querySelectorAll('.human-wrapper');

    wrappers.forEach((wrapperEl) => {
      const wrapper = wrapperEl as HTMLElement;
      const id = wrapper.getAttribute('data-id');
      if (!id) return;
      const item = this.state.people.find((p) => p.id === id);
      if (!item) return;

      wrapper.addEventListener('pointerdown', (e: PointerEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.resize-handle-top')) return;

        this.selectItem(id);
        this.ensureManualPositions();

        let hasMoved = false;
        const startX = e.clientX;
        const initialPosX = item.positionX ?? 50;

        this.interaction = {
          mode: 'dragging',
          itemId: id,
          startX,
          startY: e.clientY,
          initialPositionX: initialPosX,
          initialHeightCm: item.heightCm,
        };

        const onPointerMove = (moveEv: PointerEvent) => {
          if (this.interaction.mode !== 'dragging' || this.interaction.itemId !== id) return;
          const deltaX = (moveEv.clientX - startX) / this.state.zoomLevel;

          if (!hasMoved && Math.abs(deltaX) > 3) {
            this.pushHistory();
            hasMoved = true;
          }

          if (hasMoved) {
            const stageWidth = this.modelsContainer.offsetWidth;
            const newX = Math.max(10, Math.min(stageWidth - 140, initialPosX + deltaX));
            item.positionX = Math.round(newX);
            wrapper.style.left = `${item.positionX}px`;
          }
        };

        const onPointerUp = () => {
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
          window.removeEventListener('pointercancel', onPointerUp);

          if (this.interaction.mode === 'dragging') {
            this.interaction.mode = 'none';
            if (hasMoved) {
              this.persistState();
              this.renderChart();
            }
          }
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerUp);
      });

      const handle = wrapper.querySelector('.resize-handle-top') as HTMLElement | null;
      if (handle) {
        handle.addEventListener('pointerdown', (e: PointerEvent) => {
          e.stopPropagation();
          e.preventDefault();

          this.selectItem(id);

          let hasResized = false;
          const startY = e.clientY;
          const initialHeightCm = item.heightCm;

          this.interaction = {
            mode: 'resizing',
            itemId: id,
            startX: e.clientX,
            startY,
            initialPositionX: item.positionX ?? 50,
            initialHeightCm,
          };

          const onPointerMove = (moveEv: PointerEvent) => {
            if (this.interaction.mode !== 'resizing' || this.interaction.itemId !== id) return;
            moveEv.preventDefault();

            const deltaY = (startY - moveEv.clientY) / this.state.zoomLevel;
            const visualHeightPx = this.getVisualHeightPx();
            const { scale } = calculateScale(this.state.people, visualHeightPx);
            const deltaCm = deltaY / scale;

            const snap = moveEv.shiftKey ? 5 : 1;
            let newCm = Math.round((initialHeightCm + deltaCm) / snap) * snap;
            newCm = Math.max(LIMITS.MIN_HEIGHT_CM, Math.min(LIMITS.MAX_HEIGHT_CM, newCm));

            if (newCm !== item.heightCm) {
              if (!hasResized) {
                this.pushHistory();
                hasResized = true;
              }
              item.heightCm = newCm;
              item.isCustomHeight = item.referenceHeightCm !== undefined ? newCm !== item.referenceHeightCm : true;
              this.render();
              this.syncPrecisionToolbar();
              this.syncInspectorPanel();
            }
          };

          const onPointerUp = () => {
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
            window.removeEventListener('pointercancel', onPointerUp);

            if (this.interaction.mode === 'resizing') {
              this.interaction.mode = 'none';
              if (hasResized) {
                this.persistState();
                this.render();
              }
            }
          };

          window.addEventListener('pointermove', onPointerMove);
          window.addEventListener('pointerup', onPointerUp);
          window.addEventListener('pointercancel', onPointerUp);
        });
      }
    });
  }

  private renderRuler(ticks: ReturnType<typeof generateRulerTicks>, scale: number) {
    if (!this.rulerTicksContainer) return;

    const maxCm = ticks.length > 0 ? ticks[ticks.length - 1].cm : 200;
    this.rulerTicksContainer.style.height = `${maxCm * scale}px`;

    this.rulerTicksContainer.innerHTML = ticks
      .map((tick) => {
        const bottomPx = tick.cm * scale;
        if (tick.isMajor) {
          return `
            <div 
              class="absolute right-0 flex items-center justify-end w-full"
              style="bottom: ${bottomPx}px;"
            >
              <span class="text-[10px] font-bold text-slate-500 mr-1.5 whitespace-nowrap">${tick.label}</span>
              <div class="w-2.5 h-[1.5px] bg-slate-400"></div>
            </div>
          `;
        } else {
          return `
            <div 
              class="absolute right-0 flex items-center justify-end w-full"
              style="bottom: ${bottomPx}px;"
            >
              <div class="w-1.5 h-[1px] bg-slate-300"></div>
            </div>
          `;
        }
      })
      .join('');
  }

  private attachTooltipListeners() {
    const wrappers = this.modelsContainer.querySelectorAll('.human-wrapper');

    const showTooltip = (wrapper: Element, clientX: number, clientY: number) => {
      if (this.interaction.mode !== 'none') return;
      const name = wrapper.getAttribute('data-name') || '';
      const typeLabel = wrapper.getAttribute('data-type-label') || '';
      const full = wrapper.getAttribute('data-height-full') || '';

      this.tooltipName.textContent = name;
      this.tooltipDetails.textContent = `${typeLabel} • ${full}`;

      this.tooltipEl.style.left = `${clientX}px`;
      this.tooltipEl.style.top = `${clientY - 12}px`;
      this.tooltipEl.classList.remove('hidden');
    };

    const hideTooltip = () => {
      this.tooltipEl.classList.add('hidden');
    };

    wrappers.forEach((w) => {
      w.addEventListener('mouseenter', () => {
        const rect = w.getBoundingClientRect();
        showTooltip(w, rect.left + rect.width / 2, rect.top);
      });

      w.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent;
        this.tooltipEl.style.left = `${me.clientX}px`;
        this.tooltipEl.style.top = `${me.clientY - 15}px`;
      });

      w.addEventListener('mouseleave', hideTooltip);

      w.addEventListener('click', () => {
        const rect = w.getBoundingClientRect();
        showTooltip(w, rect.left + rect.width / 2, rect.top);
      });

      w.addEventListener('focus', () => {
        const rect = w.getBoundingClientRect();
        showTooltip(w, rect.left + rect.width / 2, rect.top);
      });

      w.addEventListener('blur', hideTooltip);
    });

    document.addEventListener('click', (e) => {
      if (!(e.target as HTMLElement).closest('.human-wrapper')) {
        hideTooltip();
      }
    });
  }

  private renderDifference() {
    if (!this.diffCard || !this.diffStatement || !this.diffBadgeImperial || !this.diffBadgeMetric) return;

    const diff = calculateDifference(this.state.people);
    if (!diff) {
      this.diffCard.classList.add('hidden');
      return;
    }

    this.diffCard.classList.remove('hidden');
    this.diffStatement.textContent = diff.statement;

    if (diff.isEqual) {
      this.diffBadgeImperial.textContent = '0 in difference';
      this.diffBadgeMetric.textContent = '0 cm difference';
    } else {
      const inchWord = diff.diffInchesRounded === 1 ? 'inch' : 'inches';
      this.diffBadgeImperial.textContent = `${diff.diffInchesRounded} ${inchWord} difference`;
      this.diffBadgeMetric.textContent = `${diff.diffCm} cm difference`;
    }
  }

  private renderSummary() {
    if (!this.summaryTableBody || !this.summaryCardsContainer) return;

    const items = this.state.people;
    if (items.length === 0) {
      this.summaryTableBody.innerHTML = '';
      this.summaryCardsContainer.innerHTML = '';
      document.getElementById('summary-empty-state')?.classList.remove('hidden');
      this.summaryStatsBadge?.classList.add('hidden');
      return;
    }

    document.getElementById('summary-empty-state')?.classList.add('hidden');
    this.summaryStatsBadge?.classList.remove('hidden');

    const maxHeight = Math.max(...items.map((p) => p.heightCm));
    const avgHeight = items.reduce((acc, p) => acc + p.heightCm, 0) / items.length;

    const tallestItem = items.find((p) => p.heightCm === maxHeight);
    if (this.summaryTallestStat && tallestItem) {
      this.summaryTallestStat.textContent = `Tallest: ${tallestItem.name} (${formatHeight(maxHeight, this.state.rulerUnit)})`;
    }
    if (this.summaryAverageStat) {
      this.summaryAverageStat.textContent = `Average: ${formatHeight(avgHeight, this.state.rulerUnit)}`;
    }

    this.summaryTableBody.innerHTML = items
      .map((item) => {
        const diffFromTallest = maxHeight - item.heightCm;
        const diffText =
          diffFromTallest === 0
            ? '<span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Tallest</span>'
            : `<span class="text-xs text-slate-500">-${(diffFromTallest / 2.54).toFixed(1)} in (-${diffFromTallest.toFixed(1)} cm)</span>`;

        let typeDetail = item.category.toUpperCase();
        if (item.category === 'male' || item.category === 'female') {
          typeDetail = item.category === 'male' ? 'Male Human' : 'Female Human';
        } else if (item.category === 'animals') {
          typeDetail = 'Animal (Shoulder/Withers)';
        } else if (item.category === 'objects') {
          typeDetail = 'Object (Ground to Top)';
        } else if (item.category === 'apparel') {
          typeDetail = 'Apparel / Gear';
        } else if (item.category === 'fictional') {
          typeDetail = 'Fictional Creature';
        } else if (item.category === 'plants') {
          typeDetail = 'Plant / Flora';
        } else if (item.category === 'sports') {
          typeDetail = 'Sports Equipment';
        } else if (item.category === 'anime') {
          typeDetail = 'Anime Character';
        } else if (item.category === 'films') {
          typeDetail = 'Film Character / Item';
        } else if (item.category === 'celebrities') {
          typeDetail = 'Celebrity Figure';
        }

        return `
          <tr class="hover:bg-slate-50/80 transition-colors">
            <td class="py-3 px-4 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full flex-shrink-0" style="background-color: ${item.color};"></span>
              <span class="font-bold text-slate-900">${item.name}</span>
            </td>
            <td class="py-3 px-4 capitalize font-medium text-slate-700">${item.category}</td>
            <td class="py-3 px-4 text-xs text-slate-600">${typeDetail}</td>
            <td class="py-3 px-4 font-semibold text-slate-800">${cmToFeetInches(item.heightCm).formatted}</td>
            <td class="py-3 px-4 font-semibold text-slate-800">${Math.round(item.heightCm)} cm</td>
            <td class="py-3 px-4">${diffText}</td>
          </tr>
        `;
      })
      .join('');

    this.summaryCardsContainer.innerHTML = items
      .map((item) => {
        const diffFromTallest = maxHeight - item.heightCm;
        const diffLabel =
          diffFromTallest === 0
            ? '<span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Tallest</span>'
            : `<span class="text-[11px] text-slate-500">-${(diffFromTallest / 2.54).toFixed(1)} in</span>`;

        let typeDetail = item.category.toUpperCase();
        if (item.category === 'male' || item.category === 'female') {
          typeDetail = item.category === 'male' ? 'Male Human' : 'Female Human';
        } else if (item.category === 'animals') {
          typeDetail = 'Animal (Shoulder/Withers)';
        } else if (item.category === 'objects') {
          typeDetail = 'Object (Ground to Top)';
        } else if (item.category === 'anime') {
          typeDetail = 'Anime Character';
        } else if (item.category === 'films') {
          typeDetail = 'Film Character / Item';
        } else if (item.category === 'celebrities') {
          typeDetail = 'Celebrity Figure';
        }

        return `
          <div class="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col gap-1.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full" style="background-color: ${item.color};"></span>
                <span class="font-bold text-sm text-slate-900">${item.name}</span>
              </div>
              <span class="text-xs font-semibold uppercase text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded">${item.category}</span>
            </div>
            <div class="text-xs text-slate-500">${typeDetail}</div>
            <div class="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
              <span class="font-semibold text-slate-700">${cmToFeetInches(item.heightCm).formatted} • ${Math.round(item.heightCm)} cm</span>
              <div>${diffLabel}</div>
            </div>
          </div>
        `;
      })
      .join('');
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new HeightComparisonApp();
    app.init();
  });
}
