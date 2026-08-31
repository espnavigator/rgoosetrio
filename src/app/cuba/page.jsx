import PageHeader from '@/components/PageHeader';
import { Paragraphs, Txt } from '@/components/Txt';
import { cuba } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: 'Working In Cuba',
  description:
    'Cuban electric guitar recorded at EGREM Studios in Santiago de Cuba, with The Compadres and the trova guitarist Alejandro Almenares.',
  alternates: {
    canonical: '/cuba/',
    languages: {
      'en-GB': '/cuba/',
      'es': '/es/cuba/',
      'x-default': '/cuba/',
    },
  },
};

export default function CubaPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { cuba } = getContent(locale);
  return (
    <>
      <PageHeader kicker="Santiago de Cuba" title={cuba.heading} lead={cuba.standfirst} />

      <section className="section">
        <div className="container split">
          <div>
            {cuba.sections.map((s) => (
              <article key={s.title} style={{ marginBottom: '3rem' }}>
                <h2>{s.title}</h2>
                <Paragraphs items={s.body} />
              </article>
            ))}
          </div>

          <ul className="facts">
            {cuba.facts.map((f) => (
              <li key={f.label}>
                <div className="facts__label">{f.label}</div>
                <div className="facts__value">
                  <Txt>{f.value}</Txt>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
