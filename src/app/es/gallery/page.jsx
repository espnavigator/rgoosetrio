import Page from '@/app/gallery/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Galería',
  description: 'Fotografías de Santiago de Cuba, La Habana y la carretera.',
  alternates: {
    canonical: '/es/gallery/',
    languages: {
      'en-GB': '/gallery/',
      'es': '/es/gallery/',
      'x-default': '/gallery/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
