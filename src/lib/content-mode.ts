export type ContentMode = 'preview' | 'production';

/**
 * Resolves whether the public site renders in preview mode (candidate treatments,
 * demo gallery imagery, placeholder portrait, noindex) or strict production mode
 * (approved services and approved non-demo assets only; never falls back to demo).
 *
 * Priority:
 * 1. Explicit `CONTENT_MODE=preview` or `CONTENT_MODE=production`
 * 2. Legacy `ENABLE_DRAFT_PREVIEW=true`
 * 3. Non-production `?preview=drafts` query override
 * 4. Default: `preview` in development, `production` when `NODE_ENV === 'production'`
 */
export function resolveContentMode(
  previewParam?: string,
  env: NodeJS.ProcessEnv = process.env,
): ContentMode {
  const configured = env.CONTENT_MODE?.trim().toLowerCase();

  if (configured === 'production') {
    return 'production';
  }

  if (configured === 'preview') {
    return 'preview';
  }

  if (env.ENABLE_DRAFT_PREVIEW === 'true') {
    return 'preview';
  }

  if (env.NODE_ENV !== 'production') {
    if (previewParam === 'production') {
      return 'production';
    }
    return 'preview';
  }

  return 'production';
}

export function isPreviewContentMode(
  previewParam?: string,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return resolveContentMode(previewParam, env) === 'preview';
}

