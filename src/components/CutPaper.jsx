/**
 * Hand-cut paper lettering, in the style of the album sleeve.
 *
 * The sleeve title was made by cutting the letters out of red paper by hand, so
 * no two sit quite straight and none of them share a baseline. This does the
 * same thing in the browser: every letter gets its own small rotation, vertical
 * bounce and horizontal nudge.
 *
 * Those per-letter values are handed to CSS as custom properties rather than as
 * an inline transform. A CSS animation outranks an inline style, so animating
 * the letters would otherwise wipe out the jitter and make every letter move
 * identically — which is exactly the machine-made look this is avoiding. With
 * the values in variables, the keyframes can add movement on top of each
 * letter's own angle instead of replacing it.
 *
 * Letters are grouped into words, and each word is a nowrap inline-block, so a
 * line can only break between words. Without that the browser is free to break
 * inside a word and "GOOSE" comes out as "GOO" on one line.
 *
 * The wobble is worked out from the letter's position rather than at random, so
 * it is identical every build and identical again in the visitor's browser.
 * Real randomness would make the two disagree and React would throw a
 * hydration error.
 */

// A small, stable pseudo-random number in 0..1 from two whole numbers.
function jitter(index, salt) {
  const n = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

export default function CutPaper({ text, className = '', as: Tag = 'span' }) {
  const words = String(text).split(' ');
  let letterIndex = 0;

  return (
    <Tag className={`cutpaper ${className}`.trim()} aria-label={text}>
      {words.map((word, w) => {
        const letters = [...word].map((ch) => {
          const i = letterIndex++;
          const rotate = (jitter(i, 1) - 0.5) * 6.4; // ±3.2°
          const shiftY = (jitter(i, 2) - 0.5) * 0.11; // ±0.055em
          const shiftX = (jitter(i, 3) - 0.5) * 0.04;

          return (
            <span
              key={i}
              className="cutpaper__letter"
              aria-hidden="true"
              style={{
                '--rot': `${rotate.toFixed(2)}deg`,
                '--tx': `${shiftX.toFixed(3)}em`,
                '--ty': `${shiftY.toFixed(3)}em`,
                // Staggers the sway so the movement runs along the word rather
                // than the whole line lifting as one block.
                '--i': i,
              }}
            >
              {ch}
            </span>
          );
        });

        return (
          <span key={w} className="cutpaper__word" aria-hidden="true">
            {letters}
            {w < words.length - 1 ? <span className="cutpaper__space"> </span> : null}
          </span>
        );
      })}
    </Tag>
  );
}
