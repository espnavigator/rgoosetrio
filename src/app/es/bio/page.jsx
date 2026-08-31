import Page from '@/app/bio/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Biografía',
  description: 'Biografía de Ramon Goose, guitarrista inglés en la música cubana.',
  alternates: {
    canonical: '/es/bio/',
    languages: {
      'en-GB': '/bio/',
      'es': '/es/bio/',
      'x-default': '/bio/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
