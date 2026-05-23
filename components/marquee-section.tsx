export default function MarqueeSection() {
  return (
    <section id="about" className="py-6 overflow-hidden border-y border-border bg-background">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-5xl md:text-6xl lg:text-7xl font-light italic text-foreground/15 mx-4 tracking-tight">
            about <span className="text-foreground/10">.</span> about <span className="text-foreground/10">.</span> about <span className="text-foreground/10">.</span>
          </span>
        ))}
      </div>
    </section>
  )
}
