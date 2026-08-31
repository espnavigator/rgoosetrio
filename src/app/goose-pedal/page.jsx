import PageHeader from '@/components/PageHeader';
import { Paragraphs, Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { pedal, site } from '@/content/site';
import { getContent } from '@/content';

// gooseeffects.com forwards here, so this page has to be the thing search
// engines find when someone looks up the brand rather than the guitarist. The
// title deliberately breaks the site-wide "Cuban Electric Guitar" template —
// nobody searching for a Tube Screamer mod is searching for son cubano.
export const metadata = {
  title: {
    absolute: 'Goose Effects — Texas Flood, Crossfire & Gooseboost Pedals',
  },
  description:
    'Goose Effects: guitar pedals hand-built by Ramon Goose. The Texas Flood overdrive for SRV tones, the Crossfire TS-10 with Keeley and Landgraff mods, and the one-knob Gooseboost. Original Toshiba diodes and transistors, in manufacture now.',
  keywords: [
    'Goose Effects',
    'Goose Effects pedals',
    'Texas Flood pedal',
    'Texas Flood overdrive',
    'Goose Effects Crossfire',
    'Gooseboost',
    'TS-10 mods',
    'Keeley mod Tube Screamer',
    'Landgraff mod',
    'handmade guitar pedals UK',
    'boutique overdrive pedal',
    'Ramon Goose pedals',
  ],
  alternates: {
    canonical: '/goose-pedal/',
    languages: {
      'en-GB': '/goose-pedal/',
      'es': '/es/goose-pedal/',
      'x-default': '/goose-pedal/',
    },
  },
  openGraph: {
    title: 'Goose Effects — pedals built by Ramon Goose',
    description:
      'Three hand-built pedals: the Texas Flood overdrive, the Crossfire, and the one-knob Gooseboost. Original Toshiba parts.',
    url: `${site.url}/goose-pedal/`,
    siteName: site.artist,
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/pedals/texas-flood.jpg',
        width: 2048,
        height: 1536,
        alt: 'The Goose Effects Texas Flood overdrive pedal',
      },
    ],
  },
};

/** "Texas Flood" -> "texas-flood", for the structured-data ids. */
function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function PedalPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { pedal, site } = getContent(locale);
  const path = locale === 'es' ? '/es/goose-pedal/' : '/goose-pedal/';

  // Machine-readable facts about the brand and the three pedals. This is what
  // tells Google that "Goose Effects" is a maker of guitar pedals with a home
  // at gooseeffects.com, and that this page is that home. No Offer blocks:
  // nothing is for sale yet, and inventing a price to win a rich result would
  // be publishing something untrue.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Brand',
        '@id': `${site.url}${path}#brand`,
        name: 'Goose Effects',
        alternateName: 'GooseFX',
        url: `${site.url}${path}`,
        description:
          'Guitar effects pedals designed and hand-built by Ramon Goose, using original Toshiba diodes and transistors.',
        founder: { '@id': `${site.url}/#person` },
        sameAs: ['https://gooseeffects.com'],
      },
      {
        '@type': 'WebPage',
        '@id': `${site.url}${path}#webpage`,
        url: `${site.url}${path}`,
        name: 'Goose Effects',
        about: { '@id': `${site.url}${path}#brand` },
        isPartOf: { '@id': `${site.url}/#website` },
        inLanguage: locale === 'es' ? 'es' : 'en-GB',
      },
      ...pedal.pedals.map((p) => ({
        '@type': 'Product',
        '@id': `${site.url}${path}#${slug(p.name)}`,
        name: `Goose Effects ${p.name}`,
        category: 'Guitar effects pedal',
        description: p.body,
        material: 'Original Toshiba diodes and transistors',
        brand: { '@id': `${site.url}${path}#brand` },
        manufacturer: { '@id': `${site.url}/#person` },
        ...(p.image ? { image: `${site.url}/images/pedals/${p.image}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Our own static object, not anything a visitor can supply.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader kicker={pedal.kicker} title={pedal.heading} lead={pedal.standfirst} />

      <section className="section">
        <div className="container split">
          <div>
            <Paragraphs items={pedal.body} />
          </div>

          <div className="facts">
            <div className="facts__label">Status</div>
            <div className="facts__value" style={{ marginBottom: '1.25rem' }}>
              <Txt>{pedal.status}</Txt>
            </div>

            <div className="facts__label">Parts</div>
            <div className="facts__value" style={{ marginBottom: '1.25rem' }}>
              <Txt>{pedal.parts}</Txt>
            </div>

            <div className="facts__label">{pedal.domainLabel}</div>
            <div className="facts__value" style={{ marginBottom: '1.25rem' }}>
              gooseeffects.com
            </div>

            {pedal.price ? (
              <>
                <div className="facts__label">Price</div>
                <div className="facts__value" style={{ marginBottom: '1.25rem' }}>
                  {pedal.price}
                </div>
              </>
            ) : null}

            <p style={{ color: 'rgba(243,232,213,0.85)', fontSize: '0.95rem' }}>
              <Txt>{pedal.notifyCopy}</Txt>
            </p>

            <a
              href={`mailto:${site.email.general}?subject=${encodeURIComponent(
                `${pedal.name} — let me know when they are ready`
              )}`}
              className="btn btn--onink btn--sm"
            >
              {pedal.buyHref ? 'Buy one' : 'Join the list'}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-head">
            <span className="kicker">{pedal.pedalsKicker}</span>
            <h2>{pedal.pedalsHeading}</h2>
          </div>

          {/* One box per pedal. The picture only appears once a file name is
              set on the pedal in src/content/site.js. */}
          <div className="grid grid--3">
            {pedal.pedals.map((p) => (
              <article key={p.name} className="card">
                {p.image && (
                  <img
                    className="gear-photo"
                    src={asset(`/images/pedals/${p.image}`)}
                    alt={`The Goose Effects ${p.name} pedal`}
                    loading="lazy"
                    width="1600"
                    height="1200"
                  />
                )}
                <h3>
                  <Txt>{p.name}</Txt>
                </h3>
                <p className="kicker kicker--muted">
                  <Txt>{p.detail}</Txt>
                </p>
                <p>
                  <Txt>{p.body}</Txt>
                </p>

                {p.players && (
                  <div className="pedal-specs">
                    <p className="pedal-spec">
                      {pedal.playersLabel} <span>{p.players}</span>
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
