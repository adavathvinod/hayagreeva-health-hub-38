import SectionFadeIn from "@/components/SectionFadeIn";
import { CheckCircle, Sprout, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Comprehensive understanding of Agri-Business value chains",
  "Technology-enabled agricultural management practices",
  "Supply chain and logistics management for agri-products",
  "Agri-FinTech and digital farming solutions",
  "Rural marketing and distribution strategies",
  "Sustainability and environmental management",
  "Industry mentoring from agri-business leaders"
];

const careerPaths = [
  "Agri-Business Management", "Rural Marketing Manager", "Supply Chain Manager (Agri)",
  "Agri-Tech Consultant", "Farm Business Advisor", "Agricultural Policy Analyst",
  "Food Processing Manager", "Commodity Trading Analyst"
];

const PGDMAgriBizPage = () => (
  <div className="pt-20">
    <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-primary/20" />
      <div className="relative z-10 w-full">
        <SectionFadeIn>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">PGDM Program</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4">PGDM – Agri-Business Management</h1>
          <p className="text-primary-foreground/70 text-lg max-w-3xl mx-auto">Lead the transformation of India's agricultural sector with technology, management, and innovation.</p>
          <div className="mt-8"><Link to="/contact" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link></div>
        </SectionFadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide max-w-5xl mx-auto">
        <SectionFadeIn>
          <div className="flex items-center gap-3 mb-8 justify-center"><Sprout className="h-7 w-7 text-primary" /><h2 className="text-3xl font-bold text-foreground">Program Highlights</h2></div>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm font-medium">{h}</span>
              </div>
            ))}
          </div>
        </SectionFadeIn>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionFadeIn>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Career Pathways</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {careerPaths.map((c) => (
              <div key={c} className="p-4 bg-background rounded-lg border border-border text-center">
                <span className="text-foreground text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </SectionFadeIn>
      </div>
    </section>

    <section className="section-padding bg-charcoal text-primary-foreground text-center">
      <div className="container-wide max-w-3xl mx-auto">
        <SectionFadeIn>
          <Sprout className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-bold mb-6">Transform agriculture with modern management</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link>
        </SectionFadeIn>
      </div>
    </section>
  </div>
);

export default PGDMAgriBizPage;
