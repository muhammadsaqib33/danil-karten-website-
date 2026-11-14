export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      return new URL(raw);
    } catch {
      // Fallback safely if env value is malformed
    }
  }
  return new URL('http://localhost:3000');
}
