import type { HowToGuideData } from './types';

export const enHowToGuide: HowToGuideData = {
  locale: 'en',
  title: 'How to Use the Height Comparison Tool',
  subtitle: 'A comprehensive, step-by-step master guide to comparing people, celebrities, anime characters, animals, and objects with visual mathematical precision.',
  badge: 'Master User Guide',
  metaDescription: 'Learn how to use HowHeight\'s height comparison tool to compare people, animals, objects and characters, understand height differences, adjust comparisons and share results.',
  readTime: '8 min read',
  tocTitle: 'Table of Contents',
  intro: {
    lead: 'HowHeight is an interactive visual measurement platform built to help people intuitively understand the true physical scale of anything in the known universe.',
    paragraphs: [
      'Whether you are curious about how you measure up next to your favorite movie star, analyzing character height charts for an animation project, teaching students about wildlife proportions, or drafting a novel, numbers alone often fail to communicate genuine physical presence. Reading that an individual is 188 cm (6 ft 2 in) tall provides an abstract measurement; placing that figure directly beside an average doorframe, a companion, or an everyday object instantly brings scale to life.',
      'Our universal height comparison tool bridges the gap between raw numeric measurements and human visual perception. By anchoring every silhouette to a common zero-level ground baseline and scaling every figure through rigorous mathematical geometry, HowHeight eliminates perspective distortion. This guide walks you through every single feature of the platform, from basic searches and drag-and-drop canvas interactions to custom uploads, difference metrics, and high-resolution chart exports.',
    ],
  },
  sections: [
    {
      id: 'what-is-howheight',
      heading: '1. What Is a Height Comparison Tool?',
      paragraphs: [
        'A height comparison tool is an interactive visualizer designed to display two or more measurable entities side-by-side using an identical scale factor. Rather than forcing you to mentally calculate what a 15-centimeter or 6-inch gap looks like in real life, the tool renders anatomically proportioned models that clearly demonstrate proportional relationships.',
        'On HowHeight, the comparison engine supports a wide range of verified categories: adult men and women, global celebrities, beloved anime and manga characters, iconic film heroes, domestic and wild animals, architectural and household objects, botanical plants, sports equipment, and legendary fictional creatures. Every entity is measured against a shared vertical ruler, allowing you to combine any two or more items into a single, cohesive visual chart.',
      ],
      callout: {
        type: 'info',
        text: 'Visual comparison is not about guessing; it is about translating verified dimensions into an authentic, perspective-free visual format.',
      },
    },
    {
      id: 'how-to-start',
      heading: '2. How to Start a Comparison: 7 Simple Steps',
      paragraphs: [
        'Getting started on HowHeight requires zero registration, no software downloads, and no complex setup. The tool is available directly on the homepage and comparison workspace.',
      ],
      steps: [
        {
          number: 1,
          title: 'Open the Workspace',
          description: 'Navigate to HowHeight.org or visit the dedicated /compare/ page in your web browser.',
        },
        {
          number: 2,
          title: 'Locate the Comparison Stage',
          description: 'The interactive workspace features an entity selector on the left (or top on mobile) and a wide canvas stage with a vertical measurement ruler on the right.',
        },
        {
          number: 3,
          title: 'Search or Select Your First Entity',
          description: 'Use the search bar or category chips to find an entity—such as an average human silhouette, a celebrity, or an animal.',
        },
        {
          number: 4,
          title: 'Add to Canvas',
          description: 'Click the card or the "+ Add" button. The figure immediately renders on the shared ground baseline.',
        },
        {
          number: 5,
          title: 'Select a Second Entity',
          description: 'Search for a comparison partner, a rival character, or a benchmark object like a basketball hoop or vehicle.',
        },
        {
          number: 6,
          title: 'Observe the Visual Result',
          description: 'Watch the ruler dynamically adjust its scale factor so both figures fit comfortably with perfect proportional fidelity.',
        },
        {
          number: 7,
          title: 'Fine-Tune or Share',
          description: 'Rearrange positions, switch measurement units between cm and ft/in, inspect the difference summary card, or copy a direct share link.',
        },
      ],
    },
    {
      id: 'searching-entities',
      heading: '3. Searching the Universal Entity Library',
      paragraphs: [
        'HowHeight features a curated, verified catalog spanning thousands of entities. To help you locate exact figures swiftly, the asset library includes instant multi-attribute search and category filtering.',
        'You can filter by clicking any category tab above the library grid—such as Celebrities, Anime, Animals, Objects, Sports, Plants, or Fictional. Alternatively, type directly into the search bar. The search engine queries across entity names, category labels, professions, and alternate aliases (for example, typing "CR7" or "Ronaldo" will instantly surface the Portuguese football legend).',
        'If an entity is not currently present in the library, you do not need to worry: HowHeight includes a custom entity input form where you can type any name, specify a precise height in centimeters or feet and inches, select gender or category, choose a silhouette color, and instantly insert your custom figure onto the stage.',
      ],
      link: {
        text: 'Browse the Celebrity Stature Directory →',
        href: '/celebrity-height-comparison/',
      },
    },
    {
      id: 'adding-multiple-entities',
      heading: '4. Comparing Multiple Figures Simultaneously',
      paragraphs: [
        'Real-world comparisons often involve more than just two individuals. You might want to see an entire family lineup, compare an athletic team roster, visualize a party of fantasy adventurers, or evaluate how a human, a domestic dog, a horse, and an elephant scale together.',
        'HowHeight allows you to compare from 2 up to 20+ figures simultaneously on a single stage. As you add additional figures, the comparison stage dynamically adjusts its layout. On standard monitors, figures are comfortably spaced across the canvas. On narrower mobile screens, the stage enables smooth horizontal scrolling, allowing you to pan side-to-side without crushing or shrinking individual silhouettes.',
      ],
      callout: {
        type: 'tip',
        text: 'When comparing many figures, keep one standard benchmark entity on stage—such as the Average Male (175 cm) or a Standard Doorframe (210 cm)—to serve as an intuitive visual anchor.',
      },
    },
    {
      id: 'dragging-arranging',
      heading: '5. Arranging Figures: Canvas Drag-and-Drop',
      paragraphs: [
        'By default, added entities line up neatly across the comparison floor in the order they were added. However, visual storytelling and analytical comparison frequently require custom positioning.',
        'HowHeight features direct click-and-drag interaction. Simply click and hold (or touch and drag on mobile devices) any entity on the stage to slide it horizontally along the 0 cm baseline floor. You can place two rivals shoulder-to-shoulder, move a pet right next to its owner\'s legs, or cluster characters into distinct groups.',
        'If you prefer automated alignments, the toolbar allows you to switch between "Auto" layout mode and "Manual" layout mode at any time, or sort your lineup instantly by height ascending or descending.',
      ],
    },
    {
      id: 'resizing-scale',
      heading: '6. Adjusting Heights vs. Visual Display Scale',
      paragraphs: [
        'An essential distinction to understand when using HowHeight is the difference between an entity\'s actual physical height and the canvas display scale.',
        'When you select an entity on the canvas, the Entity Inspector panel opens. Here, you can adjust the figure\'s underlying height using the numerical input fields or the interactive slider. If you change a custom figure from 175 cm to 190 cm, the engine recalculates the figure\'s true coordinate dimensions, and the visual model expands upward from the floor line.',
        'Conversely, using the Zoom controls (+ / -) or changing the viewport size alters the visual magnification of the entire chart uniformly. It scales all entities simultaneously without changing their true numerical height or altering the mathematically verified proportions between them.',
      ],
      callout: {
        type: 'note',
        text: 'Figures always scale upward from the ground. Feet remain strictly locked to the 0 cm baseline floor so that relative differences are never skewed by floating offsets.',
      },
    },
    {
      id: 'height-units',
      heading: '7. Measurement Units: Metric (cm) and Imperial (ft & in)',
      paragraphs: [
        'Height data worldwide is split between the Metric system (meters and centimeters) and the Imperial / US Customary system (feet and inches). HowHeight provides seamless, bidirectional support for both.',
        'At the top of the measurement ruler and inside the inspector panel, you can toggle between "cm" and "ft". When Imperial mode is active, the ruler displays major markers every 12 inches (1 foot) and intermediate markers every 6 inches (half foot). In Metric mode, the ruler renders major markers every 20 or 50 centimeters.',
        'Conversion between systems is strictly calculated using the international standard: 1 inch = exactly 2.54 cm, and 1 foot = exactly 30.48 cm. Entering 5 ft 10 in instantly translates to 177.8 cm without rounding artifacts or data corruption.',
      ],
      link: {
        text: 'Try the Height Difference Calculator Tool →',
        href: '/height-difference-calculator/',
      },
    },
    {
      id: 'understanding-visual-result',
      heading: '8. How to Read the Comparison Canvas and Ruler',
      paragraphs: [
        'The HowHeight comparison canvas is engineered with several visual cues that make reading results effortless:',
        '1. The Ground Baseline (0 cm / 0 ft): A prominent horizontal baseline at the bottom of the canvas representing the floor. Every model is anchored here, ensuring fair, unskewed comparisons.',
        '2. The Vertical Ruler: Positioned along the left edge of the stage, the ruler features dynamic tick marks with clear numerical labels. It automatically calculates the maximum height needed to encompass the tallest figure plus generous headroom.',
        '3. Entity Labels and Badges: Above or beneath each figure, a clean tag displays the entity\'s name, chosen category badge, and exact height in your preferred unit.',
        '4. Contrast Silhouettes: Models are rendered in distinct, customizable colors (such as Royal Blue, Emerald Green, Rose Pink, or Charcoal Slate) with subtle opacities so overlapping figures remain clearly legible.',
      ],
    },
    {
      id: 'height-difference',
      heading: '9. Understanding the Height Difference Breakdown',
      paragraphs: [
        'When exactly two figures are active on the comparison canvas, HowHeight automatically generates an instant Difference Insight card directly below the stage.',
        'For example, if you place an adult male measuring 180 cm (5\'11") next to an adult female measuring 165 cm (5\'5"), the tool immediately reports: "Person A is 15 cm (5.9 inches) taller than Person B." Both metric and imperial differences are calculated and rounded to one decimal place for maximum clarity.',
        'If three or more entities are present, the tool transitions to a multi-entity Summary Table, presenting the tallest entity, the shortest entity, the group average height, and an ordered height delta table.',
      ],
    },
    {
      id: 'comparing-people',
      heading: '10. Comparing People, Couples, and Public Figures',
      paragraphs: [
        'One of the most frequent uses of HowHeight is exploring interpersonal statures. Friends comparing their heights for an upcoming event, couples curious about their visual contrast in photographs, or parents tracking children\'s growth milestones find the side-by-side human silhouettes exceptionally illuminating.',
        'Our human models feature distinct male and female anatomical proportions—accurately reflecting differences in shoulder breadth, hip-to-waist ratios, and posture—while maintaining identical scaling. You can also compare yourself directly against world-famous athletes, actors, historical leaders, and musicians with documented heights.',
      ],
      link: {
        text: 'Explore Human Height Percentiles & Benchmarks →',
        href: '/people-height-comparison/',
      },
    },
    {
      id: 'comparing-animals',
      heading: '11. Exploring the Animal Kingdom: Micro to Megafauna',
      paragraphs: [
        'Visualizing animal sizes in textbooks or encyclopedias is notoriously challenging because photos are rarely scaled to one another. An insect photo may appear the same size as a photograph of an elephant.',
        'HowHeight eliminates this confusion by placing wildlife on the exact same scale as humans. You can place a domestic cat (25 cm) beside a Golden Retriever (60 cm), compare an average person to an adult Arabian horse (160 cm), or look up in awe at an African bush elephant (330 cm) or a towering giraffe (500 cm). It is an invaluable educational resource for classrooms, biology enthusiasts, and nature lovers.',
      ],
      link: {
        text: 'View Animal Height Comparisons →',
        href: '/animal-height-comparison/',
      },
    },
    {
      id: 'comparing-objects',
      heading: '12. Everyday Objects, Architecture, and Vehicles',
      paragraphs: [
        'Numbers take on concrete meaning when contrasted with objects we touch every day. If someone says a sculpture is 2.4 meters tall, picturing it can be tricky. When you place it next to a standard residential doorframe (210 cm / 6\'11"), you immediately realize it would not clear your ceiling.',
        'The HowHeight Objects category includes household furniture (chairs, desks, beds, refrigerators), vehicles (compact cars, SUVs, bicycles, transit buses), architectural landmarks, and athletic fixtures (such as official regulation 305 cm basketball rims). This gives designers, architects, and shoppers an effortless way to check spatial clearances.',
      ],
      link: {
        text: 'Compare Common Everyday Objects →',
        href: '/object-height-comparison/',
      },
    },
    {
      id: 'anime-fictional-characters',
      heading: '13. Anime Characters and Fictional Heroes',
      paragraphs: [
        'For fans of anime, manga, comic books, video games, and cinematic universes, canon character heights are a frequent topic of passionate debate. Official databooks often list character statures, but seeing them drawn in separate manga panels or animated in cinematic wide shots can make it difficult to appreciate their true physical contrast.',
        'On HowHeight, you can stand legendary heroes like Goku, Naruto, Levi Ackerman, or All Might next to each other, or compare giant mechas and mythical monsters against ordinary civilians. It provides digital artists, cosplayers, fanfiction writers, and lore enthusiasts with an indispensable reference tool for drafting proportional fanart and costumes.',
      ],
      link: {
        text: 'Explore Anime Character Comparisons →',
        href: '/anime-height-comparison/',
      },
    },
    {
      id: 'using-the-result',
      heading: '14. What to Do with Your Finished Comparison',
      paragraphs: [
        'Once you have arranged your entities to perfection, HowHeight gives you practical tools to utilize your results:',
        '• Download as PNG Image: Click the "Download Chart" button in the canvas toolbar. The tool compiles your silhouettes, ruler, labels, and baseline into a crystal-clear, high-resolution PNG image with a clean background, ready for saving to your device or embedding into documents and presentations.',
        '• Review Statistical Summaries: Examine the difference badges, percentage variations, and average stature calculations displayed in the summary panel below the canvas.',
        '• Adjust Display Settings: Toggle dark mode for comfortable late-night viewing, toggle the ruler grid lines for precision alignment, or duplicate figures to compare different outfits or poses.',
      ],
    },
    {
      id: 'sharing-comparisons',
      heading: '15. Instant Link Sharing Without Accounts',
      paragraphs: [
        'Sharing your creations should be instantaneous. We believe you should never be forced to create an account, log in with social media, or wait for server-side processing just to share a chart with a friend or colleague.',
        'When you click the "Share" button on the canvas toolbar, HowHeight encodes the exact state of your comparison—including every active figure, customized name, height value, chosen color, and horizontal position—into a compact, safe URL parameter and copies it directly to your clipboard.',
        'When your recipient clicks the link, their browser instantly reconstructs the identical visual comparison in real time. They can inspect your figures, continue editing, or add their own entities.',
      ],
      callout: {
        type: 'tip',
        text: 'Shared URLs are completely self-contained. They do not depend on external databases, ensuring your shared link will work forever.',
      },
    },
    {
      id: 'mobile-experience',
      heading: '16. Seamless Usage Across Mobile, Tablets, and Desktop',
      paragraphs: [
        'HowHeight is built with a responsive, mobile-first design system. Whether you are using a compact smartphone, an iPad or Android tablet, a laptop, or a multi-monitor desktop workstation, the interface adapts effortlessly:',
        '• Touch Gestures: On mobile touchscreens, dragging figures across the floor, zooming with the toolbar buttons, and tapping to select is fluid and lag-free.',
        '• Responsive Drawers: The entity selector and inspector collapse into convenient slide-out panels and bottom drawers on smaller viewports, keeping the comparison stage unobstructed.',
        '• Horizontal Panning: When comparing four or more entities on a phone, the stage allows natural horizontal swipe-panning so each figure remains comfortably readable.',
      ],
    },
    {
      id: 'why-visual-matters',
      heading: '17. Why Visual Height Comparison Is So Effective',
      paragraphs: [
        'The human brain is fundamentally optimized for spatial and visual reasoning. When presented with numbers such as "160 cm" and "185 cm", our minds recognize that the second number is larger, but we do not instinctively feel the physical presence of a 25 cm (nearly 10 inch) difference.',
        'Visual height comparison activates our innate depth and proportion perception. It allows us to immediately grasp that an 185 cm individual\'s shoulders align with a 160 cm individual\'s chin. This makes visual comparisons invaluable for educational lectures, creative world-building, product ergonomic reviews, theatrical casting, and casual curiosity.',
      ],
    },
    {
      id: 'numbers-vs-visuals',
      heading: '18. Numbers vs. Visuals: Combining Both for Maximum Clarity',
      paragraphs: [
        'Neither numbers alone nor pictures alone tell the whole story. A purely numerical table lacks immediate intuitive impact; an unmeasured drawing without a scale ruler can be deceptively exaggerated by artistic license.',
        'HowHeight unites the strengths of both approaches. You receive the exact, verified numerical values down to fractions of an inch and millimeter alongside a mathematically scaled silhouette grounded on an unyielding baseline. You never have to sacrifice scientific precision for visual clarity.',
      ],
    },
    {
      id: 'data-accuracy',
      heading: '19. Data Integrity, Sourcing, and Transparent Accuracy',
      paragraphs: [
        'At HowHeight, we maintain strict editorial standards regarding measurement integrity. Celebrity heights are aggregated from official athletic combines, certified medical measurements, verified talent agency profiles, and documented public interviews, cross-checked against reliable biographic databases.',
        'Animal and plant dimensions represent mature adult medians documented by biological and zoological authorities. Object dimensions adhere to international manufacturing standards (such as ISO container sizes, FIBA basketball regulations, and standard building architectural codes).',
        'Where data points represent statistical estimates or canon fictional databooks rather than physical tape measurements, our documentation notes this transparently. We never fabricate measurements.',
      ],
      link: {
        text: 'Read About Our Measurement Methodology & Standards →',
        href: '/about/',
      },
    },
    {
      id: 'tips-for-better-comparisons',
      heading: '20. Practical Tips for Creating High-Impact Charts',
      paragraphs: [
        'To get the cleanest, most insightful comparisons out of HowHeight, keep these best practices in mind:',
        '1. Use Contrasting Colors: When placing figures close together, assign contrasting colors (e.g. Royal Blue next to Crimson Red or Coral Orange) to distinguish shoulder and arm boundaries clearly.',
        '2. Include a Reference Anchor: If you are comparing two fictional characters or unusual animals, add a standard human figure (like Average Male, 175 cm) or a doorframe so viewers have an immediate real-world touchstone.',
        '3. Pick the Right Unit: Switch the ruler to ft/in if sharing with North American audiences, or cm for international audiences.',
        '4. Order Thoughtfully: Use the toolbar to sort figures by height ascending or descending to highlight gradual height progressions across a group.',
      ],
    },
    {
      id: 'example-workflow',
      heading: '21. Example Walkthrough: Designing a Superhero Lineup',
      paragraphs: [
        'Let us walk through a practical scenario: suppose you are organizing a comic book discussion analyzing the scale difference between realistic human vigilantes and superhuman icons.',
        'First, search for a normal human reference (175 cm) and add it to the canvas. Next, search the Fictional category for a 190 cm (6\'3") superhero figure and select bold red. Then add a towering 230 cm (7\'7") armored villain in charcoal slate. Slide the figures so the human stands between the hero and the villain. Click "Download Chart" to export a crisp PNG graphic, and tap "Share" to post the link in your discussion group. In less than 60 seconds, you have produced a publication-ready comparison asset.',
      ],
    },
    {
      id: 'who-can-use',
      heading: '22. Who Benefits from the Height Comparison Tool?',
      paragraphs: [
        'HowHeight is designed for an exceptionally diverse global audience:',
        '• Students and Educators: Bringing geometry, biology, and physical science to life in classrooms.',
        '• Writers and Novelists: Ensuring fictional characters maintain believable physical interactions and eye-lines throughout scenes.',
        '• Digital Artists and Animators: Setting exact model sheets and scale proportions before beginning illustration work.',
        '• Cosplayers and Costumers: Understanding true proportions relative to reference characters.',
        '• Content Creators and Streamers: Generating engaging, visual talking points for YouTube videos, TikToks, and blog articles.',
        '• Parents and Families: Visualizing how children\'s growth compares to family relatives.',
        '• Everyday Curious Explorers: Satisfying that universal impulse to know: "How tall is that really?"',
      ],
    },
    {
      id: 'faq-reference',
      heading: '23. Frequently Asked Questions and Troubleshooting',
      paragraphs: [
        'Have specific questions regarding browser compatibility, data conversion standards, or silhouette models? Our comprehensive FAQ section addresses technical specifics, coordinate projection, multi-figure scaling formulas, and unit math in detail.',
      ],
    },
    {
      id: 'final-cta',
      heading: '24. Start Your First Height Comparison Today',
      paragraphs: [
        'Ready to experience true visual scale? The comparison engine is live, fast, and completely free. Choose any entity, set your measurements, and discover how anything in the world truly compares.',
      ],
    },
  ],
  faqTransition: {
    badge: 'Have More Questions?',
    heading: 'Explore Our Frequently Asked Questions',
    text: 'Learn more about HowHeight\'s proportional scaling algorithm, unit conversions, and universal rendering engine.',
    ctaText: 'View All Frequently Asked Questions',
    ctaHref: '/#faq',
  },
  finalCta: {
    heading: 'Ready to See How Tall It Really Is?',
    description: 'Launch the interactive height comparison tool now. Add people, celebrities, anime characters, animals, and objects side-by-side in real time.',
    buttonText: 'Launch Comparison Engine',
    buttonHref: '/compare/',
    secondaryText: 'Explore Comparison Chart Standards',
    secondaryHref: '/height-comparison-chart/',
  },
};
