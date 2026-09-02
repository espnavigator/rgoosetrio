import BassGearPage from '@/app/gear/bass/page';

export const metadata = {
  title: 'El equipo de Joe',
  description:
    'Los bajos y el equipo que toca Joe Goose en The Compadres: dos Yamaha TRB Mk I, un Status Graphite Series 2 y un JayDee Supernatural.',
  alternates: {
    canonical: '/es/gear/bass/',
    languages: {
      'en-GB': '/gear/bass/',
      'es': '/es/gear/bass/',
      'x-default': '/gear/bass/',
    },
  },
};

export default function Page() {
  return <BassGearPage locale="es" />;
}
