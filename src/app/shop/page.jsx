import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { paypalHref } from '@/lib/paypal';
import { shop, site } from '@/content/site';
import { getContent } from '@/content';

export const metadata = {
  title: 'Shop',
  description: 'Records, shirts and the Goose Effects pedals.',
  alternates: {
    canonical: '/shop/',
    languages: {
      'en-GB': '/shop/',
      'es': '/es/shop/',
      'x-default': '/shop/',
    },
  },
};

export default function ShopPage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { shop, site, forSale } = getContent(locale);

  /**
   * The signed CDs sit in the same grid as everything else rather than in a
   * section of their own further down the page. Someone who does not scroll
   * past the shirts would never have seen them otherwise, which rather defeats
   * the point of selling them. They are shaped into the same card as the rest
   * here, so the row reads as one shop and not two.
   *
   * The fuller write-up of each record still lives on the music page; what
   * belongs on a shop card is one line and a price.
   */
  const signed = forSale.items.map((rec) => ({
    name: rec.title,
    variant: forSale.badge,
    price: forSale.price,
    priceNote: forSale.priceNote,
    imagePath: `/images/albums/${rec.image}`,
    note: rec.shopNote,
    buyHref: paypalHref(forSale, rec),
    buyLabel: forSale.paypalLabel,
  }));

  // Records together, then the rest.
  const items = [...shop.items.slice(0, 2), ...signed, ...shop.items.slice(2)];

  return (
    <>
      <PageHeader kicker="Merchandise" title={shop.heading} lead={shop.intro} />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {items.map((item, i) => {
              const internal = item.href?.startsWith('/');
              return (
                <article key={`${item.name}-${i}`} className="product">
                  {/* Either one shot across the top of the card, or a pair of
                      them side by side where there is more than one thing in
                      the box — the two pedals, for instance. */}
                  {item.pair ? (
                    <div className="product__pair">
                      {item.pair.map((ph) => (
                        <img
                          key={ph.src}
                          src={asset(ph.src)}
                          alt={ph.alt}
                          loading="lazy"
                          width="800"
                          height="800"
                        />
                      ))}
                    </div>
                  ) : (
                    (item.image || item.imagePath) && (
                      <img
                        className="product__image"
                        src={asset(item.imagePath || `/images/shop/${item.image}`)}
                        alt={item.name}
                        loading="lazy"
                        width="1100"
                        height="1116"
                      />
                    )
                  )}

                  <span className="product__variant">
                    <Txt>{item.variant}</Txt>
                  </span>
                  <span className="product__name">{item.name}</span>
                  {item.price && (
                    <span className="product__price">
                      <Txt>{item.price}</Txt>
                      {item.priceNote && (
                        <span className="product__pricenote">{item.priceNote}</span>
                      )}
                    </span>
                  )}
                  <p className="product__note">
                    <Txt>{item.note}</Txt>
                  </p>

                  {item.buyHref ? (
                    <a
                      href={item.buyHref}
                      className="btn btn--primary btn--sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.buyLabel}
                    </a>
                  ) : item.href ? (
                    internal ? (
                      <Link href={item.href} className="btn btn--sm">
                        Have a look
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="btn btn--primary btn--sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy
                      </a>
                    )
                  ) : (
                    <span className="btn btn--sm" aria-disabled="true">
                      Coming soon
                    </span>
                  )}
                </article>
              );
            })}
          </div>

          <p style={{ marginTop: '2rem' }}>
            Anything else, or a signed copy —{' '}
            <a href={`mailto:${site.email.general}`}>email me</a>.
          </p>
        </div>
      </section>
    </>
  );
}
