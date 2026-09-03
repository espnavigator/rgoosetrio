/**
 * The two signed CDs Ramon sells direct.
 *
 * This lives in one component because the same two boxes appear on both the
 * music page and the shop. Change the wording or the price once in
 * src/content/site.js and both pages follow — there is no second copy of any
 * of it to forget about.
 */
import { Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { getContent } from '@/content';

/**
 * The PayPal link for one record. Everything the payment needs travels in the
 * URL: who is being paid, how much, and which album — so the payment
 * notification names the record rather than just showing £12 from a stranger.
 * `no_shipping: 2` makes PayPal ask for a postal address and insist on it,
 * because a CD has to go somewhere.
 *
 * With no PayPal account set in site.js this returns nothing and the button is
 * left out altogether.
 */
function paypalHref(forSale, rec) {
  const pp = forSale.paypal;
  if (!pp || !pp.email) return '';
  const params = new URLSearchParams({
    cmd: '_xclick',
    business: pp.email,
    item_name: `${rec.title} — signed CD`,
    amount: pp.amount,
    currency_code: pp.currency,
    no_shipping: '2',
  });
  return `https://www.paypal.com/cgi-bin/webscr?${params}`;
}

export default function SignedCds({ locale = 'en', className = 'section section--paper' }) {
  const { forSale } = getContent(locale);

  return (
    <section className={className}>
      <div className="container">
        <div className="section-head">
          <span className="kicker">
            {forSale.price} {forSale.priceNote}
          </span>
          <h2>{forSale.heading}</h2>
          <p className="lead" style={{ marginBottom: 0 }}>
            <Txt>{forSale.intro}</Txt>
          </p>
        </div>

        <div className="grid grid--sale">
          {forSale.items.map((rec) => (
            <article key={rec.title} className="forsale">
              <img
                className="forsale__cover"
                src={asset(`/images/albums/${rec.image}`)}
                alt={`${rec.title} — album cover`}
                loading="lazy"
                width="640"
                height="640"
              />
              <div className="forsale__body">
                <span className="forsale__badge">{forSale.badge}</span>
                <h3 className="forsale__title">
                  {rec.title} <span className="forsale__year">{rec.year}</span>
                </h3>
                <p className="forsale__label">{rec.label}</p>
                <p className="forsale__blurb">
                  <Txt>{rec.blurb}</Txt>
                </p>

                <p className="forsale__price">
                  {forSale.price} <span>{forSale.priceNote}</span>
                </p>

                <div className="forsale__actions">
                  {/* PayPal is the only way to buy these, so emptying the
                      PayPal account in site.js leaves the box with no button at
                      all. Put the account back, or add another route. */}
                  {paypalHref(forSale, rec) && (
                    <a
                      className="btn btn--primary btn--sm"
                      href={paypalHref(forSale, rec)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {forSale.paypalLabel}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
