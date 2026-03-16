import SectionFadeIn from "@/components/SectionFadeIn";
import ParallaxSection from "@/components/ParallaxSection";
import placementsImg from "@/assets/placements.jpg";
import graduation from "@/assets/graduation.jpg";

const companies = ["Cyient", "IBM", "HDFC", "Virtusa", "Capgemini", "Infosys", "TCS", "Wipro", "Deloitte", "Accenture", "HCL", "Tech Mahindra"];

const PlacementsPage = () => {
  return (
    <div className="pt-20">
      <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden">
        <img src={placementsImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative z-10">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Placements</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4">Recruiters of ASB</h1>
            <p className="text-primary-foreground/50 text-sm">Home → Top Placements MBA College in Hyderabad</p>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Recruiting Partners</h2>
              <p className="text-muted-foreground">Leading companies trust ASB graduates for their talent and business acumen.</p>
            </div>
          </SectionFadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {companies.map((company, i) => (
              <SectionFadeIn key={company} delay={i * 0.05}>
                <div className="aspect-square flex items-center justify-center border-2 border-primary/20 rounded-xl hover:border-primary hover:shadow-md transition-all bg-background">
                  <span className="font-display font-bold text-foreground text-lg">{company}</span>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax */}
      <ParallaxSection bgImage={graduation} className="py-20 md:py-28">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">Your Career Starts Here</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">95% placement rate with top companies across industries.</p>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Recruiting Partners" },
              { value: "95%", label: "Placement Rate" },
              { value: "8 LPA", label: "Highest Package" },
              { value: "500+", label: "Students Placed" },
            ].map((stat, i) => (
              <SectionFadeIn key={stat.label} delay={i * 0.1}>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 bg-background overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee gap-8">
            {[...companies, ...companies].map((name, i) => (
              <div key={i} className="shrink-0 px-8 py-4 bg-secondary rounded-lg border border-border min-w-[160px] text-center">
                <span className="font-display font-bold text-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementsPage;
