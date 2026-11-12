// Cloudflare supplies country metadata; the visitor IP is never stored.
export function onRequestGet({ request }) {
  const country = request.cf?.country;
  const language = country === 'CN' ? 'zh-CN' : country === 'JP' ? 'ja' : 'en';
  return Response.json({ language }, {
    headers: { 'Cache-Control': 'private, no-store' }
  });
}
