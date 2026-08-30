/**
 * Renders a line of copy from src/content/site.js.
 *
 * If the text still starts with "TODO", it is drawn as a loud dashed red box so
 * unfinished copy is impossible to miss on the live site. Replace the TODO text
 * in the content file and it renders as ordinary prose.
 */
export function isTodo(value) {
  return typeof value === 'string' && value.trimStart().toUpperCase().startsWith('TODO');
}

export function Txt({ children }) {
  if (isTodo(children)) {
    return <span className="todo">{children}</span>;
  }
  return <>{children}</>;
}

/** A list of paragraphs, e.g. the body arrays in the content file. */
export function Paragraphs({ items, className }) {
  if (!items || items.length === 0) return null;
  return (
    <>
      {items.map((text, i) => (
        <p key={i} className={className}>
          <Txt>{text}</Txt>
        </p>
      ))}
    </>
  );
}
