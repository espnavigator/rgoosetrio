import Page from '@/app/video/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Vídeo',
  description: 'Vídeos de Ramon Goose & The Compadres.',
  alternates: {
    canonical: '/es/video/',
    languages: {
      'en-GB': '/video/',
      'es': '/es/video/',
      'x-default': '/video/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
