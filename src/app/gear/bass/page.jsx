import PageHeader from '@/components/PageHeader';
import GearTabs from '@/components/GearTabs';
import { Txt } from '@/components/Txt';
import { getContent } from '@/content';

export const metadata = {
  title: "Joe's Bass Gear",
  description:
    'The basses and rig Joe Goose plays in The Compadres — two Yamaha TRB Mk I, a Status Graphite Series 2 and a JayDee Supernatural, with his own rundowns.',
  alternates: {
    canonical: '/gear/bass/',
    languages: {
      'en-GB': '/gear/bass/',
      'es': '/es/gear/bass/',
      'x-default': '/gear/bass/',
    },
  },
};

export default function BassGearPage({ locale = 'en' }) {
  const { bassGear, gear } = getContent(locale);

  return (
    <>
      <PageHeader kicker="Bass" title={bassGear.heading} lead={bassGear.intro} />

      <div className="container">
        <GearTabs locale={locale} current="bass" labels={gear.tabs} />
      </div>

      {bassGear.groups.map((group, i) => (
        <section
          key={group.group}
          className={i % 2 === 1 ? 'section section--paper' : 'section'}
        >
          <div className="container">
            <div className="section-head">
              <h2>{group.group}</h2>
            </div>

            <div className="grid grid--2">
              {group.items.map((item) => (
                <article key={item.name} className="card">
                  {/* Joe's own short for this instrument. youtube-nocookie
                      keeps YouTube from setting tracking cookies on people who
                      never press play. */}
                  {item.video && (
                    <div className="short">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${item.video}`}
                        title={`${item.name} — ${bassGear.channelLabel}`}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <h3>
                    <Txt>{item.name}</Txt>
                  </h3>
                  <p className="kicker kicker--muted">
                    <Txt>{item.spec}</Txt>
                  </p>
                  <p>
                    <Txt>{item.note}</Txt>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--ink">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <span className="kicker">{bassGear.channelLabel}</span>
          <p style={{ margin: '0 auto 1.5rem' }}>
            <Txt>{bassGear.channelBlurb}</Txt>
          </p>
          <a
            className="btn btn--onink"
            href={bassGear.channelHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {bassGear.watchLabel}
          </a>
        </div>
      </section>
    </>
  );
}
