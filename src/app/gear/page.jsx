import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import GearTabs from '@/components/GearTabs';
import { Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { gallery, gear } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: 'Gear',
  description:
    'The guitars, amplifiers and effects behind the Cuban electric guitar records — including the Guyatone LG-180.',
  alternates: {
    canonical: '/gear/',
    languages: {
      'en-GB': '/gear/',
      'es': '/es/gear/',
      'x-default': '/gear/',
    },
  },
};

export default function GearPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { gallery, gear } = getContent(locale);
  // The gear photographs live in one list with the rest of the gallery; this
  // page shows the ones tagged 'gear' so nothing has to be listed twice.
  const shots = gallery.photos.filter((p) => p.tag === 'gear');

  return (
    <>
      <PageHeader kicker="Guitars, amps, effects" title={gear.heading} lead={gear.intro} />

      <div className="container">
        <GearTabs locale={locale} current="guitar" labels={gear.tabs} />
      </div>

      {gear.groups.map((group, i) => (
        <section
          key={group.group}
          className={i % 2 === 1 ? 'section section--paper' : 'section'}
        >
          <div className="container">
            <div className="section-head">
              <span className="kicker">{String(i + 1).padStart(2, '0')}</span>
              <h2>{group.group}</h2>
            </div>

            <div className="grid grid--2">
              {group.items.map((item) => (
                <article key={item.name} className="card">
                  {item.image && (
                    <img
                      className="gear-photo"
                      src={asset(item.image)}
                      alt={item.name}
                      loading="lazy"
                      width="1600"
                      height="1200"
                    />
                  )}
                  <h3>
                    <Txt>{item.name}</Txt>
                  </h3>
                  <p className="kicker kicker--muted">
                    <Txt>{item.detail}</Txt>
                  </p>
                  <p>
                    <Txt>{item.body}</Txt>
                  </p>
                  {item.href &&
                    (item.href.startsWith('http') ? (
                      <a
                        href={item.href}
                        className="card__more"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Who makes it &rarr;
                      </a>
                    ) : (
                      <Link href={item.href} className="card__more">
                        Read more &rarr;
                      </Link>
                    ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {shots.length > 0 && (
        <section className="section section--ink">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{gear.photosKicker}</span>
              <h2>{gear.photosHeading}</h2>
            </div>

            <div className="gallery-grid">
              {shots.map((photo) => (
                <figure key={photo.src} className="gallery-figure">
                  <img
                    src={asset(`/images/gallery/${photo.src}`)}
                    alt={photo.caption || ''}
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <figcaption>
                    <Txt>{photo.caption}</Txt>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
