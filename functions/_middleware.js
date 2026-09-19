export async function onRequest(context) {
  const url = new URL(context.request.url);
  const response = await context.next();

  // If accessed via Cloudflare Pages preview/subdomain (*.pages.dev), prevent indexing
  if (url.hostname.endsWith('.pages.dev')) {
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, nofollow');

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      return new HTMLRewriter()
        .on('head', {
          element(head) {
            head.append('\n    <meta name="robots" content="noindex, nofollow" />', { html: true });
          },
        })
        .transform(
          new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers,
          })
        );
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  // Custom domain (howheight.org) remains 100% indexable with NO X-Robots-Tag and NO noindex meta
  return response;
}
