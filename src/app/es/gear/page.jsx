import Page from '@/app/gear/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'El equipo',
  description: 'Las guitarras, amplificadores y efectos detrás de los discos cubanos.',
  alternates: {
    canonical: '/es/gear/',
    languages: {
      'en-GB': '/gear/',
      'es': '/es/gear/',
      'x-default': '/gear/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
