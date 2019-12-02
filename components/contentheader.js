import Link from "next/link";

const ContentHeader = ({ title, breadcrumbs }) => (
  <section className="content-header">
    <h1>{title || defaultTitle}</h1>
    <ol className="breadcrumb">
      {(breadcrumbs || []).map((b, idx) => (
        <li key={idx}>
          <Link href={b.link || "#"} prefetch={false}>
            <a>{b.title || defaultLinkTitle}</a>
          </Link>
        </li>
      ))}
      <li className="active">{title || defaultTitle}</li>
    </ol>
  </section>
);

export default ContentHeader;
