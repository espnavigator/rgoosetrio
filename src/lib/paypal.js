/**
 * The PayPal link for one signed record.
 *
 * Everything the payment needs travels in the URL: who is being paid, how
 * much, and which album — so the payment notification names the record rather
 * than just showing £12 from a stranger. `no_shipping: 2` makes PayPal ask for
 * a postal address and insist on it, because a CD has to go somewhere.
 *
 * With no PayPal account set in src/content/site.js this returns an empty
 * string, and the button that would have used it is left out altogether.
 */
export function paypalHref(forSale, rec) {
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
