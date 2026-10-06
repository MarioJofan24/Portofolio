/**
 * Prefixes root-relative paths with the configured Astro `base`
 * (needed when deploying under a sub-path, e.g. GitHub Pages project sites).
 * Absolute URLs, anchors and mailto: links are returned unchanged.
 */
export function withBase(path: string): string {
  if (!path || /^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
