type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, body, light }: Props) {
  return (
    <header className={`section-heading${light ? " section-heading-light" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p className="section-heading-body">{body}</p> : null}
    </header>
  );
}
