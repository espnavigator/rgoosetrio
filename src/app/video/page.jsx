import PageHeader from '@/components/PageHeader';
import { Txt } from '@/components/Txt';
import { video } from '@/content/site';

export const metadata = {
  title: 'Video',
  description:
    'Video from Ramon Goose & The Compadres, the back catalogue, and The Guitar Show.',
  alternates: { canonical: '/video/' },
};

/** One embedded YouTube video. */
function Embed({ item }) {
  return (
    <figure className="video-item">
      <div className="video-embed">
        <iframe
          // The nocookie domain means YouTube does not set tracking cookies
          // until someone actually presses play.
          src={`https://www.youtube-nocookie.com/embed/${item.id}`}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <figcaption>{item.title}</figcaption>
    </figure>
  );
}

export default function VideoPage() {
  return (
    <>
      <PageHeader kicker="YouTube" title={video.heading} lead={video.intro} />

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {video.channels.map((ch) => (
              <article key={ch.name} className="card">
                <h3>{ch.name}</h3>
                <p className="kicker kicker--muted">
                  <Txt>{ch.handle}</Txt>
                </p>
                <p>
                  <Txt>{ch.body}</Txt>
                </p>
                <a
                  href={ch.href}
                  className="btn btn--sm"
                  style={{ marginTop: '1.25rem', alignSelf: 'flex-start' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ch.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {video.groups.map((group, i) => (
        <section
          key={group.title}
          className={i % 2 === 0 ? 'section section--paper' : 'section'}
        >
          <div className="container">
            <div className="section-head">
              <span className="kicker">{group.kicker}</span>
              <h2>{group.title}</h2>
            </div>

            <div className="video-grid">
              {group.items.map((item) => (
                <Embed key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
