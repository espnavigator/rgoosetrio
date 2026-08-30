import PageHeader from '@/components/PageHeader';
import { Txt } from '@/components/Txt';
import { video } from '@/content/site';

export const metadata = {
  title: 'Video',
  description:
    'The Guitar Show — long-form guitar history documentaries — and the Ramon Goose artist channel.',
  alternates: { canonical: '/video/' },
};

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

      {video.featured.length > 0 && (
        <section className="section section--paper">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Worth your time</span>
              <h2>Selected films</h2>
            </div>

            <div className="grid grid--2">
              {video.featured.map((id) => (
                <div key={id} className="video-embed">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
