/**
 * Hand-cut paper lettering, in the style of the album sleeve.
 *
 * The sleeve title was made by cutting the letters out of red paper by hand, so
 * no two sit quite straight and none of them share a baseline. This does the
 * same thing in the browser: every letter gets its own small rotation, vertical
 * bounce and horizontal nudge.
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
  const letters = [...String(text)];

  return (
    <Tag className={`cutpaper ${className}`.trim()} aria-label={text}>
      {letters.map((ch, i) => {
        if (ch === ' ') {
          return (
            <span key={i} className="cutpaper__space" aria-hidden="true">
              {' '}
            </span>
          );
        }

        // Rotation ±3.2°, baseline bounce ±0.055em, a touch of horizontal drift.
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
      })}
    </Tag>
  );
}
