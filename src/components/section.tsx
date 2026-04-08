interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
