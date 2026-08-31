import Page from '@/app/cuba/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Trabajar en Cuba',
  description: 'Guitarra eléctrica cubana grabada en los Estudios EGREM de Santiago de Cuba.',
  alternates: {
    canonical: '/es/cuba/',
    languages: {
      'en-GB': '/cuba/',
      'es': '/es/cuba/',
      'x-default': '/cuba/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
