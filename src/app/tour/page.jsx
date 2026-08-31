import PageHeader from '@/components/PageHeader';
import { Txt, isTodo } from '@/components/Txt';
import { site, tour } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: 'Live',
  description:
    'Live dates for Ramon Goose & The Compadres — trio in England, quintet in Santiago de Cuba.',
  alternates: {
    canonical: '/tour/',
    languages: {
      'en-GB': '/tour/',
      'es': '/es/tour/',
      'x-default': '/tour/',
    },
  },
};

/** "2026-06-12" -> "Fri 12 Jun 2026". Returns null if there is no usable date. */
function formatDate(value) {
  if (!value) return null;
  const d = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d);
}

function Gig({ gig, past }) {
  const when = formatDate(gig.date);
  const place = [gig.city, gig.country].filter(Boolean).join(', ');

  return (
    <li className="gig">
      <div className="gig__when">
        {when || <span className="todo">Date to be confirmed</span>}
      </div>

      <div className="gig__what">
        <span className="gig__venue">
          <Txt>{gig.venue}</Txt>
        </span>
        {place && <span className="gig__where">{place}</span>}
        {gig.note && (
          <span className="gig__note">
            <Txt>{gig.note}</Txt>
          </span>
        )}
      </div>

      <div className="gig__lineup">{gig.lineup}</div>

      <div className="gig__action">
        {past ? null : gig.tickets ? (
          <a
            href={gig.tickets}
            className="btn btn--primary btn--sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tickets
          </a>
        ) : (
          <a
            href={`mailto:${site.email.booking}?subject=${encodeURIComponent(
              `Enquiry: ${gig.venue}`
            )}`}
            className="btn btn--sm"
          >
            Ask
          </a>
        )}
      </div>
    </li>
  );
}

export default function TourPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { site, tour } = getContent(locale);
  // A row that is nothing but a placeholder should not be presented as a gig.
  const upcoming = tour.upcoming.filter((g) => !(isTodo(g.venue) && !g.date));
  const hasUpcoming = upcoming.length > 0;

  return (
    <>
      <PageHeader kicker="Dates" title={tour.heading} lead={tour.intro} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Coming up</span>
            <h2>Upcoming</h2>
          </div>

          {hasUpcoming ? (
            <ul className="gig-list">
              {upcoming.map((g, i) => (
                <Gig key={i} gig={g} />
              ))}
            </ul>
          ) : (
            <div className="empty-note">
              <p>
                Nothing in the diary at the moment. If you book shows and want the
                band, <a href={`mailto:${site.email.booking}`}>get in touch</a> — dates
                go up here as soon as they are confirmed.
              </p>
            </div>
          )}
        </div>
      </section>

      {tour.past.length > 0 && (
        <section className="section section--paper">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Already played</span>
              <h2>{tour.pastHeading}</h2>
            </div>
            <ul className="gig-list gig-list--past">
              {tour.past.map((g, i) => (
                <Gig key={i} gig={g} past />
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section section--ink">
        <div className="container container--narrow">
          <span className="kicker">For promoters</span>
          <h2>{tour.bookingHeading}</h2>
          <p>
            <Txt>{tour.bookingBody}</Txt>
          </p>
          <div className="btn-row">
            <a href={`mailto:${site.email.booking}`} className="btn btn--onink">
              Email for booking
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
