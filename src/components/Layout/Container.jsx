export default function Container({sectionClass, divClass, children}){
    return <section className={sectionClass}>
        <div className={`container mx-auto ${divClass}`}>
          {children}
        </div>
      </section>
}