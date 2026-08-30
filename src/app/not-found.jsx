import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container--narrow" style={{ textAlign: 'center' }}>
        <span className="kicker">404</span>
        <h1>Nothing here</h1>
        <p className="lead" style={{ marginInline: 'auto' }}>
          That page has moved or never existed. The music is still where you left it.
        </p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <Link href="/" className="btn btn--primary">
            Home
          </Link>
          <Link href="/music" className="btn">
            The music
          </Link>
        </div>
      </div>
    </section>
  );
}
