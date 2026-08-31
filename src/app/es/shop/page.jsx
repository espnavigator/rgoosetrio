import Page from '@/app/shop/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Tienda',
  description: 'Discos, camisetas y el pedal Texas Flood.',
  alternates: {
    canonical: '/es/shop/',
    languages: {
      'en-GB': '/shop/',
      'es': '/es/shop/',
      'x-default': '/shop/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
