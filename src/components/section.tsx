
interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const section = ({id, title, description= "", children}: SectionProps) => {
  return (
    <section id={id}>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div>{description}</div>
      {children}
    </section>
  );
}

export default section;