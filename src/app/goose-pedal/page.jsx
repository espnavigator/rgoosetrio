import PageHeader from '@/components/PageHeader';
import { Paragraphs, Txt } from '@/components/Txt';
import { pedal, site } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: pedal.name,
  description: 'A tremolo built by Ramon Goose. In development.',
  alternates: {
    canonical: '/goose-pedal/',
    languages: {
      'en-GB': '/goose-pedal/',
      'es': '/es/goose-pedal/',
      'x-default': '/goose-pedal/',
    },
  },
};

export default function PedalPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { pedal, site } = getContent(locale);
  return (
    <>
      <PageHeader kicker={pedal.kicker} title={pedal.heading} lead={pedal.standfirst} />

      <section className="section">
        <div className="container split">
          <div>
            <Paragraphs items={pedal.body} />
          </div>

          <div className="facts">
            <div className="facts__label">Status</div>
            <div className="facts__value" style={{ marginBottom: '1.25rem' }}>
              In development
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
                `${pedal.name} — let me know when it is ready`
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
            <span className="kicker">What it does</span>
            <h2>The controls</h2>
          </div>

          <div className="grid grid--3">
            {pedal.features.map((f, i) => (
              <article key={i} className="card">
                <h3>
                  <Txt>{f.title}</Txt>
                </h3>
                <p>
                  <Txt>{f.body}</Txt>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
