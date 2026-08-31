import Page from '@/app/band/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'The Compadres',
  description: 'Las dos formaciones de The Compadres: Inglaterra y Santiago de Cuba.',
  alternates: {
    canonical: '/es/band/',
    languages: {
      'en-GB': '/band/',
      'es': '/es/band/',
      'x-default': '/band/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
