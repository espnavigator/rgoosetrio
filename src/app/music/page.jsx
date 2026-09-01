import PageHeader from '@/components/PageHeader';
import RecordLinks from '@/components/RecordLinks';
import { Paragraphs, Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { music } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: 'Music',
  description: `${music.featured.title} by ${music.featured.artist} — Cuban electric guitar recorded at ${music.featured.recordedAt}, plus twenty years of back catalogue.`,
  alternates: {
    canonical: '/music/',
    languages: {
      'en-GB': '/music/',
      'es': '/es/music/',
      'x-default': '/music/',
    },
  },
};

export default function MusicPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { music } = getContent(locale);
  const album = music.featured;
  // Streaming links are only drawn once they actually point somewhere.
  const liveLinks = album.links.filter((l) => l.href);

  return (
    <>
      <PageHeader kicker="Records" title={music.heading} lead={music.intro} />

      {/* ---- THE NEW ALBUM ---------------------------------------------- */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">{album.status}</span>
            <h2>{album.title}</h2>
            <p className="lead">{album.artist}</p>
            <Paragraphs items={album.blurb} />

            <p style={{ fontSize: '0.92rem', color: 'var(--ink-faint)' }}>
              Recorded at {album.recordedAt}. Released by <Txt>{album.label}</Txt>.
              <br />
              <Txt>{album.releaseLine}</Txt>
            </p>

            {liveLinks.length > 0 ? (
              <div className="btn-row">
                {liveLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="btn btn--primary btn--sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : (
              <p className="kicker kicker--muted" style={{ marginTop: '1.75rem' }}>
                <Txt>{album.linksPending}</Txt>
              </p>
            )}
          </div>

          <img
            src={asset(album.cover)}
            alt={`Album sleeve: ${album.title}`}
            width="1000"
            height="1000"
            style={{
              border: '2px solid var(--ink)',
              boxShadow: '8px 8px 0 var(--red)',
            }}
          />
        </div>
      </section>

      {/* ---- TRACKS AND CREDITS ----------------------------------------- */}
      <section className="section section--paper">
        <div className="container split split--even">
          <div>
            <div className="section-head">
              <span className="kicker">Side one, side two</span>
              <h2>Tracklist</h2>
            </div>
            <ol className="tracklist">
              {album.tracks.map((t) => (
                <li key={t.n}>
                  <span className="tracklist__n">{String(t.n).padStart(2, '0')}</span>
                  <span className="tracklist__title">{t.title}</span>
                  <span className="tracklist__credit">
                    <Txt>{t.credit}</Txt>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="section-head">
              <span className="kicker">Who played</span>
              <h2>Personnel</h2>
            </div>
            <ul className="credits">
              {album.personnel.map((p) => (
                <li key={p.name}>
                  <strong>
                    <Txt>{p.name}</Txt>
                  </strong>
                  <span>
                    <Txt>{p.role}</Txt>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- IN PROGRESS ------------------------------------------------ */}
      <section className="section">
        <div className="container container--narrow">
          <div className="section-head">
            <span className="kicker">Not finished yet</span>
            <h2>In the works</h2>
          </div>

          {music.upcoming.map((rec) => (
            <article key={rec.title} style={{ marginBottom: '2.5rem' }}>
              <h3>
                <Txt>{rec.title}</Txt>
              </h3>
              <p className="kicker kicker--muted">{rec.status}</p>
              <Paragraphs items={rec.blurb} />
            </article>
          ))}
        </div>
      </section>

      {/* ---- BACK CATALOGUE --------------------------------------------- */}
      <section className="section section--ink">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Twenty years of it</span>
            <h2>{music.catalogueHeading}</h2>
          </div>

          <ul className="credits credits--links" style={{ color: 'var(--paper)' }}>
            {music.catalogue.map((rec) => (
              <li
                key={rec.title}
                style={{ borderBottomColor: 'rgba(243,232,213,0.2)' }}
              >
                <strong>
                  {rec.title}{' '}
                  <span style={{ color: 'var(--gold)', fontStyle: 'normal' }}>
                    <Txt>{rec.year}</Txt>
                  </span>
                </strong>
                <span style={{ color: 'rgba(243,232,213,0.7)' }}>
                  <Txt>{rec.role}</Txt> · <Txt>{rec.label}</Txt>
                </span>
                <RecordLinks
                  record={rec}
                  labels={{ listen: music.listenLabel, buy: music.buyLabel }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
