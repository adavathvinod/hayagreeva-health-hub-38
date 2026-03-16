import SectionFadeIn from "@/components/SectionFadeIn";
import { CheckCircle, Brain, Target, Lightbulb, Cpu, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const objectives = [
  "Sharpening Decision making skills using AI-DS tools",
  "All round development of Personality",
  "High managerial efficiency in resource utilization",
  "Learning mindset to improve Knowledge, Skills, Attitude and Habits",
  "Problem Solving and Critical Thinking to create Socio-Economic impact",
  "Empower students with data driven decision making capabilities"
];

const highlights = [
  "Two thirds of the program involves practical engagement",
  "One Week Global Immersion Programme (Global Experience)",
  "Industry interface – Knowledge sharing",
  "Technology enhanced classroom for interactive learning",
  "Well established computer labs facilitating hands-on learning",
  "Value addition through NPTEL online certification",
  "Excellent start-up ecosystem in place"
];

const takeaways = [
  "Knowledge to build technology-driven businesses",
  "Skills to manage and own tech-enabled businesses",
  "Data driven decision making",
  "Recruiters from Management Consulting, IT, Retail, Pharma, Healthcare, EdTech, Start-ups & more"
];

const curriculum = [
  {
    title: "Trimester I", subjects: [
      "Management and Organization Behavior", "Accounting for Management", "Management Information System",
      "Fundamentals of Programming", "Introduction to Statistics", "Marketing Management",
      "Spreadsheet Modelling", "Introduction to R"
    ]
  },
  {
    title: "Trimester II", subjects: [
      "Human Resource Management", "Operations Management", "Managerial Economics",
      "Financial Management", "Business Communication", "Query Language for Data Science",
      "Introduction to Python", "Project-1"
    ]
  },
  {
    title: "Trimester III", subjects: [
      "Project Management", "Business Research Methods", "Artificial Intelligence Introduction",
      "Design Thinking", "Predictive Analytics", "Python for Data Science",
      "Machine Learning Theory and Applications", "Visual Analytics using Power BI", "Industry Analysis – Project"
    ]
  },
  {
    title: "Trimester IV", subjects: [
      "Innovation and Entrepreneurship", "Big Data", "Operational Analytics",
      "Introduction to Deep Learning", "IoT Analytics for Managers", "Financial Analytics",
      "Social Media and Web Analytics", "Marketing Analytics", "Data Science Project-1"
    ]
  },
  {
    title: "Trimester V", subjects: [
      "Advanced Deep Learning Techniques", "Text Analytics", "Supply Chain Analytics",
      "Case Studies and Practices in Data Science", "HR Analytics", "Software Project Management",
      "Campus Recruitment Training (CRT)", "Data Science Project 2"
    ]
  },
  {
    title: "Trimester VI", subjects: [
      "Guided Open Learning (online certification)", "Full Time Industry Project"
    ]
  },
];

const PGDMAIDataSciencePage = () => {
  return (
    <div className="pt-20">
      <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-primary/20" />
        <div className="relative z-10 w-full">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">PGDM Program</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4">PGDM – Artificial Intelligence & Data Science</h1>
            <p className="text-primary-foreground/70 text-lg max-w-3xl mx-auto">Hands-on experience demystifying the data science ecosystem — designed for better employability and career prospects.</p>
            <div className="mt-8">
              <Link to="/contact" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Objectives & Highlights */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionFadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-7 w-7 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Program Objectives</h2>
                </div>
                <div className="space-y-3">
                  {objectives.map((o) => (
                    <div key={o} className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="h-7 w-7 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Program Highlights</h2>
                </div>
                <div className="space-y-3">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-4xl mx-auto">
          <SectionFadeIn>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Brain className="h-7 w-7 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Key Takeaways</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {takeaways.map((t) => (
                <div key={t} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                  <BarChart3 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Curriculum</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {curriculum.map((sem) => (
                <div key={sem.title} className="bg-secondary rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-4 text-lg">{sem.title}</h3>
                  <div className="space-y-2">
                    {sem.subjects.map((s, i) => (
                      <div key={s} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                        <span className="text-foreground text-sm">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-primary-foreground text-center">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionFadeIn>
            <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-bold mb-6">Ready to lead the AI & Data Science revolution?</p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default PGDMAIDataSciencePage;
