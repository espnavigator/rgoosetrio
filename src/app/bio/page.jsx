import PageHeader from '@/components/PageHeader';
import { Paragraphs, Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { bio, site } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: 'Biography',
  description: bio.short,
  alternates: {
    canonical: '/bio/',
    languages: {
      'en-GB': '/bio/',
      'es': '/es/bio/',
      'x-default': '/bio/',
    },
  },
};

export default function BioPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { bio, site } = getContent(locale);
  const downloads = bio.downloads.filter((d) => d.href);

  return (
    <>
      <PageHeader kicker="Press and background" title={bio.heading} lead={bio.short} />

      <section className="section">
        <div className="container split">
          <div>
            {bio.longHeading && <h2>{bio.longHeading}</h2>}
            <Paragraphs items={bio.long} />

            {downloads.length > 0 && (
              <div className="btn-row">
                {downloads.map((d) => (
                  <a key={d.label} href={asset(d.href)} className="btn btn--sm" download>
                    {d.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <ul className="facts">
            {bio.press.map((f) => (
              <li key={f.label}>
                <div className="facts__label">{f.label}</div>
                <div className="facts__value">
                  <Txt>{f.value}</Txt>
                </div>
              </li>
            ))}
            <li>
              <div className="facts__label">Press enquiries</div>
              <div className="facts__value">
                <a href={`mailto:${site.email.press}`} style={{ color: 'var(--paper)' }}>
                  {site.email.press}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
