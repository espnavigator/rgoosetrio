import PageHeader from '@/components/PageHeader';
import { Paragraphs, Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { band } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: 'The Compadres',
  description:
    'The two Compadres line-ups — Santiago de Cuba and England — and the guests on the record.',
  alternates: {
    canonical: '/band/',
    languages: {
      'en-GB': '/band/',
      'es': '/es/band/',
      'x-default': '/band/',
    },
  },
};

/** A member card. Falls back to an initial when there is no photograph yet. */
function Member({ member }) {
  const initial = member.name.trim().charAt(0).toUpperCase();

  return (
    <article className="member">
      {member.photo ? (
        <img
          className="member__photo"
          src={asset(`/images/band/${member.photo}`)}
          alt={member.name}
          loading="lazy"
          width="400"
          height="400"
        />
      ) : (
        <div className="member__photo member__photo--empty" aria-hidden="true">
          {initial}
        </div>
      )}

      <div className="member__body">
        <h3>
          <Txt>{member.name}</Txt>
        </h3>
        <p className="kicker kicker--muted">{member.role}</p>
        {/* A bio can be a single line or several paragraphs — write it either
            way in site.js and it renders correctly. */}
        {Array.isArray(member.bio) ? (
          <Paragraphs items={member.bio} />
        ) : (
          <p>
            <Txt>{member.bio}</Txt>
          </p>
        )}
      </div>
    </article>
  );
}

export default function BandPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { band } = getContent(locale);
  return (
    <>
      <PageHeader kicker="Who plays" title={band.heading} lead={band.standfirst} />

      {band.groups.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className={i % 2 === 1 ? 'section section--paper' : 'section'}
        >
          <div className="container">
            <div className="section-head">
              <span className="kicker">
                {group.id === 'cuba' ? 'Santiago de Cuba' : 'England'}
              </span>
              <h2>{group.name}</h2>
              <p className="lead">
                <Txt>{group.blurb}</Txt>
              </p>
            </div>

            {group.photo && (
              <figure className="band-photo">
                <img
                  src={asset(`/images/band/${group.photo}`)}
                  alt={group.name}
                  loading="lazy"
                  width="1800"
                  height="1013"
                />
                {group.photoCaption && (
                  <figcaption>
                    <Txt>{group.photoCaption}</Txt>
                  </figcaption>
                )}
              </figure>
            )}

            <div className="member-grid">
              {group.members.map((m, j) => (
                <Member key={`${group.id}-${j}`} member={m} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--ink">
        <div className="container">
          <div className="section-head">
            <span className="kicker">{band.guestsKicker}</span>
            <h2>{band.guestsHeading}</h2>
          </div>

          <ul className="credits">
            {band.guests.map((g) => (
              <li key={g.name} style={{ borderBottomColor: 'rgba(243,232,213,0.2)' }}>
                <strong>
                  {g.name}{' '}
                  <span style={{ color: 'var(--gold)', fontStyle: 'normal' }}>{g.role}</span>
                </strong>
                <span style={{ color: 'rgba(243,232,213,0.75)', maxWidth: '32rem' }}>
                  <Txt>{g.bio}</Txt>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
