import Page from '@/app/goose-pedal/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: 'Texas Flood',
  description: 'Un pedal construido por Ramon Goose. En desarrollo.',
  alternates: {
    canonical: '/es/goose-pedal/',
    languages: {
      'en-GB': '/goose-pedal/',
      'es': '/es/goose-pedal/',
      'x-default': '/goose-pedal/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
