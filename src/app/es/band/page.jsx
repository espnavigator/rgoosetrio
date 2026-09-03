import Page from '@/app/band/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: {
    absolute: 'The Compadres — la banda cubana de Ramon Goose',
  },
  description:
    'The Compadres son la banda cubana de Ramon Goose: dos formaciones, una en Londres y otra en Santiago de Cuba, tocando son, guajira y bolero con guitarra eléctrica de blues.',
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
