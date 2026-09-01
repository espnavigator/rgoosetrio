/**
 * The little Spotify and Amazon buttons that sit beside a record.
 *
 * Each one only appears if there is a real link for it in src/content/site.js.
 * A record that is not on Spotify simply has no Spotify button — that is the
 * point of leaving the field blank rather than guessing at a URL, because a
 * button that lands on the wrong album is worse than no button at all.
 *
 * The accessible name always carries the album title, so someone using a
 * screen reader hears "Listen to Uptown Blues on Spotify" rather than a page
 * full of identical "Spotify" links.
 */

const MARKS = {
  spotify: {
    className: 'reclink--spotify',
    viewBox: '0 0 24 24',
    // The official mark: a filled circle with the three sound bars cut out.
    path: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
  },
  amazon: {
    className: 'reclink--amazon',
    viewBox: '0 0 24 24',
    // The smile, with the parcel arrow curling up at the right-hand end.
    path: 'M13.93 12.36c-.53.45-1.23.7-1.9.7-.94 0-1.61-.5-1.61-1.4 0-1.14 1.03-1.66 2.66-1.66h.85v.86c0 .61-.16 1.14-.5 1.5h-.5zm3.9 1.63c-.2-.26-.4-.5-.55-.8-.16-.32-.22-.7-.22-1.24V8.6c0-1.17-.13-2.05-.86-2.72-.62-.56-1.6-.78-2.42-.78-1.98 0-3.5.83-3.87 3.05l1.9.2c.18-.94.75-1.4 1.62-1.4.47 0 .96.18 1.22.6.3.48.26 1.13.26 1.68v.3c-1.36 0-3.1.09-4.32.66-1.42.64-2.4 1.9-2.4 3.75 0 2.36 1.55 3.55 3.5 3.55 1.68 0 2.62-.4 3.92-1.74.43.63.58.94 1.36 1.6.18.1.4.09.56-.05v.02c.44-.4 1.24-1.1 1.69-1.48.18-.15.15-.4.02-.6zM21.6 17.9c-2.6 1.93-6.4 2.95-9.66 2.95-4.58 0-8.7-1.7-11.82-4.52-.25-.22-.03-.53.27-.36 3.37 1.96 7.53 3.14 11.83 3.14 2.9 0 6.08-.6 9.02-1.84.44-.19.81.29.36.63zm1.08-1.24c-.33-.43-2.2-.2-3.05-.1-.25.03-.29-.19-.06-.35 1.5-1.05 3.95-.75 4.23-.4.29.36-.07 2.82-1.47 4-.22.18-.43.08-.33-.16.32-.8 1.02-2.57.68-3z',
  },
  shop: {
    className: 'reclink--shop',
    viewBox: '0 0 24 24',
    // A shopping bag, for records sold somewhere that is not Amazon — the
    // label's own shop, usually. Deliberately not another ring: Spotify's mark
    // is a circle already, and two circles side by side would read as a pair.
    path: 'M12 2a4.6 4.6 0 0 0-4.6 4.6V8H3.9l1.3 13.7A2.5 2.5 0 0 0 7.7 24h8.6a2.5 2.5 0 0 0 2.5-2.3L20.1 8h-3.5V6.6A4.6 4.6 0 0 0 12 2zm0 2a2.6 2.6 0 0 1 2.6 2.6V8H9.4V6.6A2.6 2.6 0 0 1 12 4z',
    fillRule: 'evenodd',
  },
};

function Mark({ kind }) {
  const mark = MARKS[kind];
  return (
    <svg viewBox={mark.viewBox} aria-hidden="true" focusable="false">
      <path d={mark.path} fillRule={mark.fillRule} />
    </svg>
  );
}

export default function RecordLinks({ record, labels }) {
  const links = [
    { kind: 'spotify', href: record.spotify, label: labels.listen },
    { kind: 'amazon', href: record.amazon, label: labels.buy },
    { kind: 'shop', href: record.shop, label: labels.shop },
  ].filter((l) => l.href);

  if (links.length === 0) return null;

  return (
    <span className="reclinks">
      {links.map((l) => (
        <a
          key={l.kind}
          className={`reclink ${MARKS[l.kind].className}`}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`${l.label}: ${record.title}`}
        >
          <Mark kind={l.kind} />
          <span className="sr-only">{`${l.label}: ${record.title}`}</span>
        </a>
      ))}
    </span>
  );
}
