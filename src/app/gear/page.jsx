import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { gallery, gear } from '@/content/site';

export const metadata = {
  title: 'Gear',
  description:
    'The guitars, amplifiers and effects behind the Cuban electric guitar records — including the Guyatone LG-180.',
  alternates: { canonical: '/gear/' },
};

export default function GearPage() {
  // The gear photographs live in one list with the rest of the gallery; this
  // page shows the ones tagged 'gear' so nothing has to be listed twice.
  const shots = gallery.photos.filter((p) => p.tag === 'gear');

  return (
    <>
      <PageHeader kicker="Guitars, amps, effects" title={gear.heading} lead={gear.intro} />

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
              <span className="kicker">The workshop</span>
              <h2>In pictures</h2>
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
