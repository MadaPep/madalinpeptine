
interface SectionProps {
  item: {id: string; title: string; description: string; details?: {id: string; title: string; description: string;}[]};
  className?: string;
  children?: React.ReactNode;
}

const section = ({ item, className = "", children }: SectionProps) => {
  return (
    <section id={item.id} className={className}>
      <h1 className='text-2xl font-semibold'>{item.title}</h1>
      <div>{item.description}</div>
      {children}
      {item.details && item.details.length > 0 && (
        <ul>
          {item.details.map(detail => (
            <li id={detail.id} key={detail.id} className="ml-9 my-9">
              <h2 className="text-xl font-semibold">{detail.title}</h2>
              <p>{detail.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default section;