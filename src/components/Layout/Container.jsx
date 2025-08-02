export default function Container({ sectionClass, divClass, children }) {
  return (
    <section className={sectionClass}>
      <div className={`container mx-auto ${divClass} md:px-20 lg:px-36`}>
        {children}
      </div>
    </section>
  );
}
