/**
 * Hand-cut paper lettering, in the style of the album sleeve.
 *
 * The sleeve title was made by cutting the letters out of red paper by hand, so
 * no two sit quite straight and none of them share a baseline. This does the
 * same thing in the browser: every letter gets its own small rotation, vertical
 * bounce and horizontal nudge.
 *
 * Letters are grouped into words, and each word is a nowrap inline-block. That
 * matters: without it every letter is its own breakable box and the browser
 * will happily break a line in the middle of a word, so "GOOSE" comes out as
 * "GOO" on one line and "SE" on the next.
 *
 * The wobble is worked out from the letter's position rather than at random, so
 * it comes out identical every time the page is built and identical again in
 * the visitor's browser. Real randomness would make the two disagree and React
 * would throw a hydration error.
 */

// A small, stable pseudo-random number in 0..1 from two whole numbers.
function jitter(index, salt) {
  const n = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

export default function CutPaper({ text, className = '', as: Tag = 'span' }) {
  const words = String(text).split(' ');

  // Counts letters across the whole line, so the wobble does not restart at
  // each word and give every word the same opening tilt.
  let letterIndex = 0;

  return (
    <Tag className={`cutpaper ${className}`.trim()} aria-label={text}>
      {words.map((word, w) => {
        const letters = [...word].map((ch) => {
          const i = letterIndex++;
          // Rotation ±3.2°, baseline bounce ±0.055em, a touch of drift.
          const rotate = (jitter(i, 1) - 0.5) * 6.4;
          const shiftY = (jitter(i, 2) - 0.5) * 0.11;
          const shiftX = (jitter(i, 3) - 0.5) * 0.04;

          return (
            <span
              key={i}
              className="cutpaper__letter"
              aria-hidden="true"
              style={{
                transform: `translate(${shiftX}em, ${shiftY}em) rotate(${rotate}deg)`,
              }}
            >
              {ch}
            </span>
          );
        });

        return (
          <span key={w} className="cutpaper__word" aria-hidden="true">
            {letters}
            {/* A real space after every word but the last, so lines can break
                between words and only between words. */}
            {w < words.length - 1 ? <span className="cutpaper__space"> </span> : null}
          </span>
        );
      })}
    </Tag>
  );
}
