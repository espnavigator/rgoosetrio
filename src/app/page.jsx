import Link from 'next/link';
import CutPaper from '@/components/CutPaper';
import { Paragraphs, Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { bio, home, music, site, video } from '@/content/site';
import { getContent, localeHref } from '@/content';

export default function HomePage({ locale = 'en' }) {
  // Content comes from the language this page was built for.
  const { bio, home, music, site, video } = getContent(locale);
  return (
    <>
      {/* ---- HERO ------------------------------------------------------- */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="kicker hero__kicker">{home.heroKicker}</span>
            {/* The banner, cut from red paper in the manner of the Seeco
                "Los Compadres" sleeve. The album title sits under it in the
                letterspaced white oblique caps of "Mambo Sinuendo". Both lines
                live inside the page's single <h1>. */}
            <h1 className="hero__title">
              <span className="hero__billing">
                <span className="hero__star" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 1.6l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8-6.1-3.4-6.1 3.4 1.4-6.8L2.2 8.7l6.9-.8z" />
                  </svg>
                </span>
                <CutPaper text={home.heroName} className="hero__banner" />
                <span className="hero__star" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 1.6l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8-6.1-3.4-6.1 3.4 1.4-6.8L2.2 8.7l6.9-.8z" />
                  </svg>
                </span>
              </span>{' '}
              <span className="hero__album">{home.heroTitle}</span>
            </h1>
            <p className="hero__subtitle">
              <Txt>{home.heroSubtitle}</Txt>
            </p>
            <div className="btn-row">
              <Link href={localeHref(home.heroCtaPrimary.href, locale)} className="btn btn--primary">
                {home.heroCtaPrimary.label}
              </Link>
              <Link href={localeHref(home.heroCtaSecondary.href, locale)} className="btn">
                {home.heroCtaSecondary.label}
              </Link>
            </div>
          </div>

          <img
            className="hero__sleeve"
            src={asset(music.featured.cover)}
            alt={`Album sleeve: ${music.featured.title} by ${music.featured.artist}`}
            width="1000"
            height="1000"
          />
        </div>

        {/* Cuban flag, taken apart into stripes. */}
        <div className="hero__flag" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </section>

      {/* ---- THE BAND ---------------------------------------------------
          The landing page goes straight from the hero into the band. The
          biography that used to sit here now lives on /bio. */}
      <section className="section section--paper">
        <div className="container container--narrow">
          <div className="section-head">
            <span className="kicker">Who they are</span>
            <h2>{home.bandBlurbHeading}</h2>
          </div>
          <Paragraphs items={home.bandBlurb} />

          {/* The two line-ups, side by side. */}
          <div className="lineup-photos">
            {home.bandPhotos.map((photo) => (
              <figure key={photo.src} className="lineup-photo">
                <img
                  src={asset(`/images/band/${photo.src}`)}
                  alt={photo.caption}
                  loading="lazy"
                  width={photo.width}
                  height={photo.height}
                />
                <figcaption>
                  <strong>{photo.caption}</strong>
                  <span>{photo.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* The quick facts a promoter or journalist wants without reading on.
              Same list as the biography page, so it is only written once. */}
          <ul className="facts facts--row">
            {bio.press.map((f) => (
              <li key={f.label}>
                <div className="facts__label">{f.label}</div>
                <div className="facts__value">
                  <Txt>{f.value}</Txt>
                </div>
              </li>
            ))}
          </ul>

          <div className="btn-row">
            <Link href={localeHref('/band', locale)} className="btn btn--sm">
              Meet The Compadres
            </Link>
            <Link href={localeHref('/bio', locale)} className="btn btn--sm">
              Biography
            </Link>
          </div>
        </div>
      </section>

      {/* ---- THE TILES -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Have a look round</span>
            <h2>The rest of it</h2>
          </div>

          <div className="grid grid--3">
            {home.cards.map((card) => (
              <Link key={card.href} href={localeHref(card.href, locale)} className="card">
                <h3>{card.title}</h3>
                <p>
                  <Txt>{card.body}</Txt>
                </p>
                <span className="card__more">Go &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- YOUTUBE ---------------------------------------------------- */}
      <section className="section section--ink">
        <div className="container split">
          <div>
            <span className="kicker">On YouTube</span>
            <h2>{video.channels[0].name}</h2>
            <p>{video.channels[0].body}</p>
            <div className="btn-row">
              <a
                href={video.channels[0].href}
                className="btn btn--onink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.channels[0].cta}
              </a>
              <Link href={localeHref('/video', locale)} className="btn btn--onink">
                Both channels
              </Link>
            </div>
          </div>

          <div>
            <span className="kicker">Get in touch</span>
            <h2>Bookings</h2>
            <p>
              Trio or full band, festivals and clubs. I read my own email and I answer it.
            </p>
            <div className="btn-row">
              <a href={`mailto:${site.email.booking}`} className="btn btn--onink">
                Email me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
