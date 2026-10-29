// Cloudflare Pages Function: redirect the *.pages.dev preview domain to the
// canonical domain.
//
// Why this exists: _redirects rules do NOT apply to the pages.dev hostname
// itself (verified live: www.howheight.org redirects via _redirects, but
// howheight.pages.dev kept returning 200 even with a forced 301! rule).
// Without this, pages.dev serves the full site as a duplicate of howheight.org.
//
// This runs at the edge before static files are served, preserves the full
// path and query string, and only touches pages.dev hostnames — the main
// domain passes through untouched.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'howheight.pages.dev' || url.hostname.endsWith('.pages.dev')) {
    url.hostname = 'howheight.org';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
