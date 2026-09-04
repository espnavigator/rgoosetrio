import Page from '@/app/gear/for-sale/page';

export const metadata = {
  title: 'Equipo en venta',
  description:
    'Guitarras, amplificadores y efectos que vende Ramon Goose. Instrumentos vintage y poco comunes.',
  alternates: {
    canonical: '/es/gear/for-sale/',
    languages: {
      'en-GB': '/gear/for-sale/',
      'es': '/es/gear/for-sale/',
      'x-default': '/gear/for-sale/',
    },
  },
};

export default function EsPage() {
  return <Page locale="es" />;
}
