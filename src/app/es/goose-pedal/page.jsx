import Page from '@/app/goose-pedal/page';

// The Spanish edition of this page. It renders the same component with Spanish
// content, so there is one set of page code rather than two that can drift.
export const metadata = {
  title: {
    absolute: 'Goose Effects — pedales Texas Flood, Crossfire y Gooseboost',
  },
  description:
    'Goose Effects: pedales de guitarra hechos a mano por Ramon Goose. El overdrive Texas Flood, el Crossfire basado en el TS-10 y el Gooseboost de un solo mando. Diodos y transistores Toshiba originales.',
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
