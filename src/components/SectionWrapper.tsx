type Props = {
  children: React.ReactNode;
  title: string;
};

function idify(title: string): string {
  return title.toLowerCase().replace(" ", "-");
}

export default function SectionWrapper({ title, children }: Props) {
  return (
    <section id={idify(title)} className="flex flex-column w-100 ph4">
      <h1 className="section-title-text">{title}</h1>
      {children}
    </section>
  );
}
