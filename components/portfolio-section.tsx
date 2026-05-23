import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioSection() {
  return (
    <>
      {/* Portfolio Cards - Right Column Extension (appears below hero on mobile, beside on desktop) */}
      <section className="px-6 py-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-16">
            {/* Left - Empty space matching hero layout */}
            <div className="hidden lg:block" />
            
            {/* Right - Stacked Cards */}
            <div className="flex gap-4">
              <div className="space-y-4 w-72 lg:w-80">
                {/* White/Light Card - Architectural */}
                <div className="bg-card border border-border rounded-[2rem] aspect-[4/3] flex flex-col relative overflow-hidden">
                  <div className="flex-1 p-4">
                    <div className="w-full h-full bg-secondary rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                      <span className="text-muted-foreground/50 text-sm font-medium">Add Project Image</span>
                    </div>
                  </div>
                </div>
                
                {/* Yellow/Ginger Card - Smaller */}
                <div className="bg-primary rounded-[1.5rem] aspect-square w-2/3 flex flex-col relative overflow-hidden">
                  <div className="flex-1 p-3">
                    <div className="w-full h-full bg-primary-foreground/10 rounded-xl flex items-center justify-center border-2 border-dashed border-primary-foreground/30">
                      <span className="text-primary-foreground/50 text-xs font-medium">Add Image</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Exhibition Title */}
              <div className="hidden lg:flex flex-col justify-start pt-4">
                <h2 className="text-5xl xl:text-6xl font-light italic text-foreground leading-none tracking-tight" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                  work
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition/Credentials Section - Contrasting Background */}
      <section className="bg-secondary">
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex items-baseline gap-4 mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground tracking-tight">
                experience
              </h2>
              <span className="text-muted-foreground text-lg">& credentials</span>
            </div>

            {/* Experience List */}
            <div className="space-y-0 border-t border-border">
              {[
                { place: "Krasiva", role: "Internal Software Engineer", detail: "AI automation, custom CRM, automated hiring & sales" },
                { place: "West Valley Web", role: "Founder", detail: "Business websites & scalable web solutions" },
                { place: "Scentalmentals", role: "Co-Founder", detail: "eCommerce brand & digital marketing" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-6 border-b border-border group"
                >
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-foreground font-medium text-lg">{item.place}</p>
                      <p className="text-muted-foreground text-sm">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-muted-foreground text-sm hidden md:block">{item.detail}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-16">
              <h3 className="text-2xl font-light italic text-foreground mb-8">certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Real Estate License", status: "Active" },
                  { title: "Cloud Computing", status: "In Progress" },
                  { title: "General Contractor", status: "In Progress" },
                  { title: "Digital Advertising", status: "In Progress" },
                ].map((cert, index) => (
                  <div key={index} className="bg-background rounded-2xl p-5">
                    <p className="text-foreground font-medium">{cert.title}</p>
                    <p className="text-muted-foreground text-sm mt-1">{cert.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work/Projects Section - Back to main background */}
      <section id="portfolio" className="bg-background">
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Large Card */}
              <div className="space-y-4">
                <div className="bg-secondary rounded-[2rem] aspect-[4/3] flex flex-col relative overflow-hidden group">
                  <div className="flex-1 p-6">
                    <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                      <span className="text-muted-foreground/50 text-sm font-medium">Add Project Image</span>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <span className="text-muted-foreground text-xs uppercase tracking-wider">AI & Automation</span>
                    <h3 className="text-foreground text-xl font-medium mt-1">Custom CRM System</h3>
                    <p className="text-muted-foreground text-sm mt-2">Automated lead pipelines, Qwen integration, intelligent workflows</p>
                  </div>
                  <Link href="#" className="absolute bottom-6 right-6 w-10 h-10 bg-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-background" />
                  </Link>
                </div>
              </div>

              {/* Right - Stacked Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary rounded-[2rem] aspect-square flex flex-col relative overflow-hidden group">
                  <div className="flex-1 p-4">
                    <div className="w-full h-full bg-primary-foreground/10 rounded-xl flex items-center justify-center border-2 border-dashed border-primary-foreground/30">
                      <span className="text-primary-foreground/50 text-xs font-medium">Add Image</span>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p className="text-primary-foreground text-sm font-medium">West Valley Web</p>
                  </div>
                </div>
                
                <div className="bg-secondary rounded-[2rem] aspect-square flex flex-col relative overflow-hidden group">
                  <div className="flex-1 p-4">
                    <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                      <span className="text-muted-foreground/50 text-xs font-medium">Add Image</span>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p className="text-foreground text-sm font-medium">Scentalmentals</p>
                  </div>
                </div>
                
                <div className="col-span-2 bg-card border border-border rounded-[2rem] p-6">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">Specialization</span>
                  <h3 className="text-foreground text-lg font-medium mt-1">Full-Stack Development</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["React", "Next.js", "Node.js", "Python", "AI/ML"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
