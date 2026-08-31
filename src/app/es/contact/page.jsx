import Page from '@/app/contact/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Contacto',
  description: 'Contratación, prensa y todo lo demás.',
  alternates: {
    canonical: '/es/contact/',
    languages: {
      'en-GB': '/contact/',
      'es': '/es/contact/',
      'x-default': '/contact/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
