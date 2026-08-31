import Page from '@/app/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Inicio',
  description: 'Ramon Goose es un guitarrista inglés que trabaja en la música cubana.',
  alternates: {
    canonical: '/es/',
    languages: {
      'en-GB': '/',
      'es': '/es/',
      'x-default': '/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
