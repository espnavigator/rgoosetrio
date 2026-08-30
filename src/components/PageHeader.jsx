import { Txt } from './Txt';

/** The banner at the top of every page other than the landing page. */
export default function PageHeader({ kicker, title, lead }) {
  return (
    <div className="page-head">
      <div className="container">
        {kicker && <span className="kicker">{kicker}</span>}
        <h1>{title}</h1>
        {lead && (
          <p className="lead">
            <Txt>{lead}</Txt>
          </p>
        )}
      </div>
    </div>
  );
}
