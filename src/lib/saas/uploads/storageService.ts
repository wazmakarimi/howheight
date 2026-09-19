import type { AssetUploadRequest, AssetUploadResponse, UserAsset } from '../../../types/saas';

export const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/svg+xml',
] as const;

export type AllowedMimeType = (typeof ALLOWED_MIME_TYPES)[number];

export interface IStorageService {
  generatePresignedUploadUrl(
    userId: string,
    request: AssetUploadRequest
  ): Promise<AssetUploadResponse>;
  getUserAsset(userId: string, assetId: string): Promise<UserAsset | null>;
  deleteUserAsset(userId: string, assetId: string): Promise<boolean>;
  validateUpload(file: { mimeType: string; sizeBytes: number }, maxSizeBytes: number): { valid: boolean; error?: string };
}

/**
 * Storage key generator enforcing strict namespace separation:
 * Public assets: /assets/entities/...
 * User assets:   user/{userId}/{assetId}.{ext}
 */
export function generateUserR2Key(userId: string, assetId: string, extension: string): string {
  const safeExt = extension.replace(/^\./, '').toLowerCase();
  return `user/${userId}/${assetId}.${safeExt}`;
}

export class StorageServicePlaceholder implements IStorageService {
  validateUpload(
    file: { mimeType: string; sizeBytes: number },
    maxSizeBytes: number
  ): { valid: boolean; error?: string } {
    if (!ALLOWED_MIME_TYPES.includes(file.mimeType as AllowedMimeType)) {
      return {
        valid: false,
        error: `Unsupported file format. Allowed formats: ${ALLOWED_MIME_TYPES.join(', ')}`,
      };
    }

    if (file.sizeBytes > maxSizeBytes) {
      const maxMb = Math.round(maxSizeBytes / (1024 * 1024));
      return {
        valid: false,
        error: `File exceeds maximum allowed size of ${maxMb}MB for your plan.`,
      };
    }

    return { valid: true };
  }

  async generatePresignedUploadUrl(
    userId: string,
    request: AssetUploadRequest
  ): Promise<AssetUploadResponse> {
    const assetId = `ast_${Date.now()}`;
    const ext = request.fileName.split('.').pop() || 'png';
    const r2Key = generateUserR2Key(userId, assetId, ext);

    return {
      assetId,
      r2Key,
      uploadUrl: `https://storage.howheight.org/${r2Key}?upload=placeholder`,
      publicUrl: `https://assets.howheight.org/${r2Key}`,
    };
  }

  async getUserAsset(userId: string, assetId: string): Promise<UserAsset | null> {
    return null;
  }

  async deleteUserAsset(userId: string, assetId: string): Promise<boolean> {
    return true;
  }
}
