import SectionFadeIn from "@/components/SectionFadeIn";
import { CheckCircle, Target, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const objectives = [
  "To train the students to be abreast of changing HR Practices",
  "To familiarize students with technology applications in HRM",
  "To create and sustain data driven organization culture"
];
const takeaways = [
  "The ability to become game-changers in the HR functions",
  "Strong ability to analyze data to develop future strategies related to HR",
  "Data driven Human Capital Management capabilities"
];

const curriculum = [
  { title: "Trimester I", subjects: ["Business Communication and Cognitive Skills 1", "Organizational Behavior 1", "Microeconomics", "Financial Accounting", "Marketing Management", "Quantitative Techniques 1 (BS)"] },
  { title: "Trimester II", subjects: ["Computer Applications for Business", "Introduction to R/Python Programming", "Operations Management", "Quantitative Techniques 2 (OR)", "Business Communication and Cognitive Skills 2", "Macroeconomics"] },
  { title: "Trimester III", subjects: ["Business Research Methods (using R)", "Corporate Finance", "Organizational Behaviour 2", "Human Resource Management", "Introduction to HR Analytics", "Information Systems Management"] },
  { title: "Trimester IV", core: ["Data Visualisation and Power BI", "Learning and Development", "Decision Making Skills using Data Analytics", "Performance Management & Competency Mapping"], electives: ["Conflict and Negotiation Skills", "Cross Cultural & Interpersonal HRM", "Design Thinking and Innovation", "Strategy Execution including Economics of Strategy", "Labour Laws", "Digital Marketing"], electiveNote: "Choose 2 electives out of 6" },
  { title: "Trimester V", core: ["Projecting Future Performance by Using Associative Statistics", "Compensation Management and HR Audit", "Analysis of Attrition using Descriptive Statistics"], electives: ["New Venture Planning", "Analysis of Attrition using Descriptive Analytics", "People Analytics", "Risk Management", "Managing Change and Transformation", "Project Management"], electiveNote: "Choose 3 electives out of 6" },
  { title: "Trimester VI", electives: ["Data Driven Decision Making and Reporting", "Motivation and Incentives", "Design Thinking and Innovation", "Managing Interpersonal and Group Process", "Fundamentals of Industrial Relations", "Business Intelligence"] },
];

const PGDMHRPage = () => (
  <div className="pt-20">
    <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-primary/20" />
      <div className="relative z-10 w-full">
        <SectionFadeIn>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">PGDM Program</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4">PGDM – HR with HR Analytics</h1>
          <p className="text-primary-foreground/70 text-lg max-w-3xl mx-auto">Address the cataclysmic changes in the eternal triangle of People, Structure and Technology to emerge as a winner.</p>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto mt-4">HR departments across industries, start-ups, HR consulting firms, HCM software companies, and technology driven recruitment firms.</p>
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
                {sem.electives && <><p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Electives</p><div className="flex flex-wrap gap-2">{sem.electives.map((e) => (<span key={e} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{e}</span>))}</div>{sem.electiveNote && <p className="text-xs text-muted-foreground mt-2">*{sem.electiveNote}</p>}</>}
              </div>
            ))}
          </div>
        </SectionFadeIn>
      </div>
    </section>

    <section className="section-padding bg-charcoal text-primary-foreground text-center">
      <div className="container-wide max-w-3xl mx-auto">
        <SectionFadeIn>
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-bold mb-6">Become the HR game-changer organizations need</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link>
        </SectionFadeIn>
      </div>
    </section>
  </div>
);

export default PGDMHRPage;
