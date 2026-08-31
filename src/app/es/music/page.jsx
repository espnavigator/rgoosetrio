import Page from '@/app/music/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Música',
  description: 'I Left My Blues In Cuba, grabado en los Estudios EGREM de Santiago de Cuba.',
  alternates: {
    canonical: '/es/music/',
    languages: {
      'en-GB': '/music/',
      'es': '/es/music/',
      'x-default': '/music/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
