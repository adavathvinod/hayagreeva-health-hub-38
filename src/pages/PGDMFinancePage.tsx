import SectionFadeIn from "@/components/SectionFadeIn";
import { CheckCircle, Target, Lightbulb, Banknote } from "lucide-react";
import { Link } from "react-router-dom";

const objectives = [
  "To provide a perspective view of Finance and Banking",
  "To provide students with transactional approach and transformational experience",
  "Moulding the students into future leaders of business"
];
const takeaways = [
  "Strong knowledge across different sub-domains of Finance function",
  "Right foundation for future CFO / Finance Director roles",
  "Deep understanding of the rapidly growing Fintech industry"
];

const curriculum = [
  { title: "Trimester I", subjects: ["Business Communication and Cognitive Skills 1", "Organizational Behavior 1", "Microeconomics", "Financial Accounting", "Marketing Management", "Quantitative Techniques 1 (BS)"] },
  { title: "Trimester II", subjects: ["Computer Applications for Business", "Introduction to R/Python Programming", "Operations Management", "Quantitative Techniques 2 (OR)", "Business Communication and Cognitive Skills 2", "Macroeconomics"] },
  { title: "Trimester III", core: ["Auditing and Attestation", "Cost Accounting", "Cyber Security and Blockchain 1"], electives: ["Investment Management", "Information System Management", "Digital Transformation", "Negotiations and Conflict Management", "Financial Modelling (using Excel & XLMiner)", "Crypto Currency", "SAP End User Training"] },
  { title: "Trimester IV", core: ["Cyber Security and Blockchain 2", "Financial Derivatives", "Introduction to AI and ML"], electives: ["Mergers and Acquisitions", "Business Simulations", "Strategic Management & Analysis", "Entrepreneurship", "Portfolio Management", "Direct & Indirect Taxes", "Entrepreneurial Finance"] },
  { title: "Trimester V", electives: ["Integrated Marketing Communications", "Business Valuation", "Fixed Income Securities", "Business Law", "Planning, Budgeting & Consolidation", "B2B Marketing"] },
];

const PGDMFinancePage = () => (
  <div className="pt-20">
    <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-primary/20" />
      <div className="relative z-10 w-full">
        <SectionFadeIn>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">PGDM Program</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4">PGDM – Finance with FinTech</h1>
          <p className="text-primary-foreground/70 text-lg max-w-3xl mx-auto">With the advent of technology in all domains of finance, prepare to lead the future of corporate finance and fintech innovation.</p>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto mt-4">Students get placed in Corporate Finance, Fintech companies, Financial consulting, Banks and Investment banking organizations.</p>
          <div className="mt-8"><Link to="/contact" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link></div>
        </SectionFadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide max-w-5xl mx-auto">
        <SectionFadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6"><Target className="h-7 w-7 text-primary" /><h2 className="text-2xl font-bold text-foreground">Objectives</h2></div>
              <div className="space-y-3">{objectives.map((o) => (<div key={o} className="flex items-start gap-3 p-3 bg-secondary rounded-lg"><CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{o}</span></div>))}</div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6"><Lightbulb className="h-7 w-7 text-primary" /><h2 className="text-2xl font-bold text-foreground">Key Takeaways</h2></div>
              <div className="space-y-3">{takeaways.map((t) => (<div key={t} className="flex items-start gap-3 p-3 bg-secondary rounded-lg"><CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{t}</span></div>))}</div>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-wide max-w-5xl mx-auto">
        <SectionFadeIn>
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((sem) => (
              <div key={sem.title} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4 text-lg">{sem.title}</h3>
                {sem.subjects && <div className="space-y-2">{sem.subjects.map((s, i) => (<div key={s} className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold shrink-0">{i+1}</span><span className="text-foreground text-sm">{s}</span></div>))}</div>}
                {sem.core && <><p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Core</p><div className="space-y-2 mb-4">{sem.core.map((s, i) => (<div key={s} className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold shrink-0">{i+1}</span><span className="text-foreground text-sm">{s}</span></div>))}</div></>}
                {sem.electives && <><p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Electives</p><div className="flex flex-wrap gap-2">{sem.electives.map((e) => (<span key={e} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{e}</span>))}</div></>}
              </div>
            ))}
          </div>
        </SectionFadeIn>
      </div>
    </section>

    <section className="section-padding bg-charcoal text-primary-foreground text-center">
      <div className="container-wide max-w-3xl mx-auto">
        <SectionFadeIn>
          <Banknote className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-bold mb-6">Shape the future of Finance & FinTech</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link>
        </SectionFadeIn>
      </div>
    </section>
  </div>
);

export default PGDMFinancePage;
