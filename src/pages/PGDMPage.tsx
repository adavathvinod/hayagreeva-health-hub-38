import SectionFadeIn from "@/components/SectionFadeIn";
import ParallaxSection from "@/components/ParallaxSection";
import { CheckCircle, FileText } from "lucide-react";
import pgdmSeminar from "@/assets/pgdm-seminar.jpg";
import smartClassroom from "@/assets/smart-classroom.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";

const specializations = [
  "Marketing with Analytics",
  "HR Analytics",
  "Finance with FinTech",
  "Artificial Intelligence & Data Science",
  "Securities in Market",
];

const admissionSteps = [
  "Application Submission",
  "Selection Process",
  "Submission of Statement of Purpose",
  "Scholarship Allocation",
  "Offer Letter and Confirmation",
  "Final Confirmation",
];

const feeStructure = [
  { item: "Admission Fee", amount: "₹50,000" },
  { item: "1st Year — First Term Fee", amount: "₹2,50,000" },
  { item: "1st Year — Second Term Fee", amount: "₹1,70,000" },
  { item: "2nd Year — Third Term Fee", amount: "₹1,70,000" },
  { item: "2nd Year — Fourth Term Fee", amount: "₹1,70,000" },
  { item: "Total Fees", amount: "₹8,10,000", bold: true },
];

const selectionCriteria = [
  { criterion: "Management Aptitude Test Score", marks: "50" },
  { criterion: "Previous Academic Performance", marks: "10" },
  { criterion: "Work Experience", marks: "5" },
  { criterion: "Group Discussion", marks: "20" },
  { criterion: "Personal Interview", marks: "15" },
  { criterion: "Total", marks: "100", bold: true },
];

const documents = [
  "Aadhaar Card",
  "10th Mark Sheet",
  "12th Mark Sheet",
  "Undergraduate Degree Certificates",
  "Entrance Exam Score Card",
];

const PGDMPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden">
        <img src={pgdmSeminar} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">PGDM Program</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4">PGDM Marketing with Analytics</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">ASB offers a 2-year full-time tech-blended PGDM program</p>
          </SectionFadeIn>
        </div>
      </section>

      {/* Specializations with image */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Specializations</h2>
                <div className="space-y-4">
                  {specializations.map((s) => (
                    <div key={s} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium text-foreground">{s}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6">
                  The curriculum equips students with management skills for Hospitals, Industries, NGOs, IoT companies, and Equipment manufacturing.
                </p>
              </div>
              <div>
                <img src={smartClassroom} alt="PGDM Classroom" className="rounded-2xl shadow-xl w-full" />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Parallax */}
      <ParallaxSection bgImage={campusAerial} className="py-20 md:py-28">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">Your Path to Management Excellence</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Join India's leading tech-blended PGDM program.</p>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* Eligibility */}
      <section id="admissions" className="section-padding bg-secondary">
        <div className="container-wide max-w-4xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Eligibility</h2>
            <div className="bg-background p-8 rounded-xl border border-border space-y-4">
              <p className="text-foreground">• Bachelor's degree of minimum 3 years duration in any discipline</p>
              <p className="text-foreground">• Minimum 50% marks or equivalent CGPA</p>
              <p className="text-foreground">• Final year students may apply</p>
              <p className="text-foreground font-medium mt-4">Valid entrance test scores accepted:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["CAT", "XAT", "MAT", "CMAT", "GMAT", "ATMA"].map((t) => (
                  <span key={t} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{t}</span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">Any national or state level admission test is also accepted.</p>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Process</h2>
            <p className="text-center text-muted-foreground mb-8">Candidates can apply online or offline. Applicants must attend Group Discussion and Personal Interview. Application Fee: <strong className="text-foreground">₹1,000</strong></p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {admissionSteps.map((step, i) => (
                <div key={step} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                  <span className="text-sm font-medium text-foreground mt-1">{step}</span>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Fee Structure — PGDM (2026-2028)</h2>
            <div className="bg-background rounded-xl overflow-hidden border border-border">
              {feeStructure.map((row, i) => (
                <div key={row.item} className={`flex justify-between px-6 py-4 ${i % 2 === 0 ? "bg-secondary/50" : ""} ${(row as any).bold ? "font-bold border-t-2 border-primary" : ""}`}>
                  <span className="text-foreground">{row.item}</span>
                  <span className="text-foreground font-semibold">{row.amount}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-background border border-border rounded-lg text-sm text-muted-foreground space-y-1">
              <p>Additional Fees: ₹10,000 with first term</p>
              <p>Alumni Association Fee – ₹5,000 | Student Welfare Fee – ₹5,000</p>
              <p>Scholarship will be deducted from fourth term fee.</p>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Selection Criteria</h2>
            <div className="bg-background rounded-xl overflow-hidden border border-border">
              {selectionCriteria.map((row, i) => (
                <div key={row.criterion} className={`flex justify-between px-6 py-4 ${i % 2 === 0 ? "bg-secondary/50" : ""} ${(row as any).bold ? "font-bold border-t-2 border-primary" : ""}`}>
                  <span className="text-foreground">{row.criterion}</span>
                  <span className="text-foreground font-semibold">{row.marks} Marks</span>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Required Documents</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {documents.map((doc) => (
                <div key={doc} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                  <FileText className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default PGDMPage;
