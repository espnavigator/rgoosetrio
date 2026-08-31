import Page from '@/app/tour/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'En directo',
  description: 'Fechas de Ramon Goose & The Compadres.',
  alternates: {
    canonical: '/es/tour/',
    languages: {
      'en-GB': '/tour/',
      'es': '/es/tour/',
      'x-default': '/tour/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
