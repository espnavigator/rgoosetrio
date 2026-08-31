import PageHeader from '@/components/PageHeader';
import { Txt } from '@/components/Txt';
import { contact, site } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: 'Contact',
  description: 'Bookings, press and everything else.',
  alternates: {
    canonical: '/contact/',
    languages: {
      'en-GB': '/contact/',
      'es': '/es/contact/',
      'x-default': '/contact/',
    },
  },
};

export default function ContactPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { contact, site } = getContent(locale);
  return (
    <>
      <PageHeader kicker="Get in touch" title={contact.heading} lead={contact.intro} />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {contact.routes.map((route) => (
              <article key={route.title} className="card">
                <h3>{route.title}</h3>
                <p>
                  <Txt>{route.body}</Txt>
                </p>
                <a
                  href={`mailto:${route.email}?subject=${encodeURIComponent(route.title)}`}
                  className="btn btn--sm"
                  style={{ marginTop: '1.25rem', alignSelf: 'flex-start' }}
                >
                  Email
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container container--narrow">
          <span className="kicker">Elsewhere</span>
          <h2>Follow along</h2>
          <div className="btn-row">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="btn btn--onink btn--sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
