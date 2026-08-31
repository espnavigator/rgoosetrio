import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { shop, site } from '@/content/site';

export const metadata = {
  title: 'Shop',
  description: 'Records, shirts and the Texas Flood pedal.',
  alternates: { canonical: '/shop/' },
};

export default function ShopPage() {
  return (
    <>
      <PageHeader kicker="Merchandise" title={shop.heading} lead={shop.intro} />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {shop.items.map((item, i) => {
              const internal = item.href?.startsWith('/');
              return (
                <article key={i} className="product">
                  {item.image && (
                    <img
                      className="product__image"
                      src={asset(`/images/shop/${item.image}`)}
                      alt={item.name}
                      loading="lazy"
                      width="1100"
                      height="1116"
                    />
                  )}
                  <span className="product__variant">
                    <Txt>{item.variant}</Txt>
                  </span>
                  <span className="product__name">{item.name}</span>
                  {item.price && (
                    <span className="product__price">
                      <Txt>{item.price}</Txt>
                    </span>
                  )}
                  <p className="product__note">
                    <Txt>{item.note}</Txt>
                  </p>

                  {item.href ? (
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

          <div className="empty-note" style={{ marginTop: '2.5rem', textAlign: 'left' }}>
            <p style={{ marginBottom: 0 }}>
              <strong>Note for setting this up:</strong> GitHub Pages serves flat files
              and cannot take payments on its own. The straightforward route is Bandcamp
              or a Big Cartel / Ko-fi shop, with the buttons above pointing at it — no
              hosting cost and no card handling on your side. Put the link in{' '}
              <code>src/content/site.js</code> under <code>shop.items[].href</code>. If
              you would rather sell direct, Stripe Payment Links also work as plain URLs.
            </p>
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
