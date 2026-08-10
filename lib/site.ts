export const siteConfig = {
  name: 'Portugal Prático',
  description:
    'Guias claros e verificados para tratar de documentos e serviços essenciais em Portugal.',
  locale: 'pt_PT',
};

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!configuredUrl) return new URL('http://localhost:3000');

  return new URL(configuredUrl);
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}
