import PageHeader from '@/components/PageHeader';
import GearTabs from '@/components/GearTabs';
import { Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { getContent } from '@/content';

export const metadata = {
  title: { absolute: 'Gear For Sale — Fernandes P-Project AI-N | Ramon Goose' },
  description:
    'Guitars and amplifiers Ramon Goose is selling. A Fernandes P-Project AI-N nylon-string electric, the Dominic Miller model.',
  keywords: [
    'Fernandes P-Project',
    'Fernandes P-Project AI-N',
    'Dominic Miller guitar',
    'nylon string electric guitar',
    'nylon string electric for sale',
    'vintage guitar for sale UK',
    'Ry Cooder style gear',
  ],
  alternates: {
    canonical: '/gear/for-sale/',
    languages: {
      'en-GB': '/gear/for-sale/',
      'es': '/es/gear/for-sale/',
      'x-default': '/gear/for-sale/',
    },
  },
};

export default function GearForSalePage({ locale = 'en' }) {
  const { gearForSale, gear, site } = getContent(locale);
  const items = gearForSale.items || [];

  return (
    <>
      <PageHeader kicker="Passing through" title={gearForSale.heading} lead={gearForSale.intro} />

      <div className="container">
        <GearTabs locale={locale} current="sale" labels={gear.tabs} />
      </div>

      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            /* An empty list is a normal state here, not a broken page — so it
               says so plainly and still gives them a way to get in touch. */
            <p className="lead">
              <Txt>{gearForSale.emptyNote}</Txt>{' '}
              <a href={`mailto:${site.email.general}?subject=${encodeURIComponent('Gear enquiry')}`}>
                {site.email.general}
              </a>
            </p>
          ) : (
            <div className="grid grid--3">
              {items.map((item) => (
                <article key={item.name} className={`product${item.sold ? ' product--sold' : ''}`}>
                  {item.image && (
                    <img
                      className="product__image"
                      /* A full path is used as-is, so a guitar already
                         photographed for the gear page does not need a second
                         copy of the same file. */
                      src={asset(
                        item.image.startsWith('/') ? item.image : `/images/for-sale/${item.image}`
                      )}
                      alt={item.name}
                      loading="lazy"
                      width="1100"
                      height="1100"
                    />
                  )}
                  <span className="product__variant">
                    <Txt>{item.spec}</Txt>
                  </span>
                  <span className="product__name">{item.name}</span>
                  <span
                    className={`product__price${
                      item.sold || !item.price ? ' product__price--ask' : ''
                    }`}
                  >
                    {item.sold ? gearForSale.soldLabel : item.price || gearForSale.priceOnAsking}
                  </span>
                  {item.condition && (
                    <p className="product__note" style={{ marginBottom: 0 }}>
                      <Txt>{item.condition}</Txt>
                    </p>
                  )}
                  {item.note && (
                    <p className="product__note">
                      <Txt>{item.note}</Txt>
                    </p>
                  )}
                  {!item.sold && (
                    <a
                      className="btn btn--primary btn--sm"
                      href={`mailto:${site.email.general}?subject=${encodeURIComponent(
                        `Gear enquiry: ${item.name}`
                      )}`}
                    >
                      {gearForSale.enquireLabel}
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
