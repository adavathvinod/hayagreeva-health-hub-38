import SectionFadeIn from "@/components/SectionFadeIn";
import { CheckCircle, Download, TrendingUp, Building2, Cpu, GraduationCap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const trimester1 = [
  "Financial Markets", "Market Microstructure", "Quantitative Methods",
  "Financial Statement Analysis", "Economics", "Behavioral Finance"
];
const trimester2 = [
  "Technical Analysis I & II", "Derivatives", "Volatility",
  "Personal Finance: Planning & Insurance"
];
const trimester3 = [
  "Global Markets", "Fixed Income", "Asset Management",
  "Investment Banking Operations", "Personal Finance: Wealth Planning & Taxation"
];
const trimester4 = [
  "Portfolio Management", "Algorithmic Trading", "Advanced Quant Methods"
];
const electives = [
  "Equity Research", "Advanced Technical Analysis", "Global Derivatives",
  "FinTech / WealthTech", "Treasury & Markets"
];

const careerPaths = [
  {
    title: "Trading & Markets Roles",
    icon: TrendingUp,
    roles: ["Equity / Derivatives Trader", "Technical or Quant Analyst", "Algo Trading Intern", "Market Research Analyst"]
  },
  {
    title: "Finance & Global Bank (GCC) Roles",
    icon: Building2,
    roles: ["Investment Banking Operations", "Global Markets Operations", "Fund Accounting & Custody", "Wealth Management Advisory"]
  },
  {
    title: "FinTech & Analytics Roles",
    icon: Cpu,
    roles: ["Market Data Analyst", "Risk & Reporting Analyst", "Trading Technology Support"]
  }
];

const graduatesWith = [
  "Exposure to a ₹50 lakh live portfolio",
  "Strong understanding of markets, risk, and behaviour",
  "Multiple industry-recognised certifications",
  "Job-ready technical skills (Python, SQL, Power BI)",
  "Personal finance discipline for life",
  "A professionally backtested capstone project",
  "Internship and placement readiness"
];

const recruiterTable = [
  { category: "Indian Stock Exchanges & Brokerages", examples: "NSE, BSE, Motilal Oswal, ICICI Securities, HDFC Securities", business: "Trade execution, brokerage services, market surveillance, research & advisory", learns: "Market microstructure, trading systems, order flow, live market behaviour", trust: "Stable finance careers; understanding markets as a system, not gambling" },
  { category: "Asset Management Companies (AMCs), PMS & AIFs", examples: "SBI Mutual Fund, HDFC AMC, Axis Mutual Fund, Marcellus", business: "Managing long-term investor money, equity & fixed-income research", learns: "Financial statement analysis, behavioural finance, portfolio & risk management", trust: "Teaches capital protection, patience, and discipline—not speculation" },
  { category: "Global Investment Banks (India Offices & GCCs)", examples: "Goldman Sachs, JP Morgan, Morgan Stanley, Citi, HSBC", business: "Global markets operations, trade lifecycle, risk & compliance, analytics", learns: "Global markets, derivatives, IB operations, Bloomberg, Power BI", trust: "Safe, globally respected careers with structured growth" },
  { category: "Hedge Funds & Buy-Side Firms", examples: "DE Shaw, WorldQuant, AQR Capital, Two Sigma", business: "Research-driven investing, quantitative strategies, risk modelling", learns: "Quant methods, Python, backtesting, volatility & drawdown control", trust: "Research-oriented, logic-based finance—not thrill-based trading" },
  { category: "Proprietary Trading Desks", examples: "Tower Research Capital, AlphaGrep, Graviton, iRage", business: "Trading firm's own capital with strict rules and risk limits", learns: "Technical analysis, derivatives, rule-based trading, live portfolio learning", trust: "Highly disciplined environment; rules, accountability, no gambling" },
  { category: "FinTech, Market Data & Analytics", examples: "Zerodha, Upstox, Groww, CRISIL, Morningstar India", business: "Trading platforms, market data, risk analytics, reporting systems", learns: "Python, SQL, Power BI, market data interpretation", trust: "Combines technology + finance, strong demand and career flexibility" },
];

const PGDMSecuritiesPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-primary/20" />
        <div className="relative z-10 w-full">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">PGDM Program</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4">PGDM in Securities Markets</h1>
            <p className="text-primary-foreground/70 text-lg max-w-3xl mx-auto mb-6">A 2-Year, Market-Driven Management Program — Build Careers in Trading, Investments, Research, and Global Finance</p>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto mb-8">This program is designed for students who want to work with financial markets professionally, not just study them from textbooks.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link>
              <button className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Brochure
              </button>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trimester-wise Curriculum</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Semester 1 – Foundations + Live Markets", subjects: trimester1 },
                { title: "Semester 2 – Technicals, Derivatives & Personal Finance", subjects: trimester2 },
                { title: "Semester 3 – Global Markets & Asset Management", subjects: trimester3 },
                { title: "Semester 4 – Quant, Algo & Portfolio Management", subjects: trimester4 },
              ].map((sem) => (
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
            <div className="mt-6 bg-secondary rounded-xl p-6 border border-border">
              <h3 className="font-bold text-foreground mb-4">Electives (Choose 2)</h3>
              <div className="flex flex-wrap gap-2">
                {electives.map((e) => (
                  <span key={e} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{e}</span>
                ))}
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Career Pathways</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {careerPaths.map((path) => (
                <div key={path.title} className="bg-background rounded-xl p-6 border border-border">
                  <path.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-4">{path.title}</h3>
                  <div className="space-y-2">
                    {path.roles.map((r) => (
                      <div key={r} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* What Students Graduate With */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What Students Graduate With</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {graduatesWith.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border">
                  <GraduationCap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Admissions */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-4xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Admissions</h2>
            <div className="bg-background p-8 rounded-xl border border-border space-y-4">
              <p className="text-foreground">• Open to graduates from any discipline</p>
              <p className="text-foreground">• Ideal for students with curiosity, discipline, and interest in markets</p>
              <p className="text-foreground font-medium mt-4">Selection via:</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Entrance Test", "Personal Interview"].map((t) => (
                  <span key={t} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Apply Now</Link>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Recruiter Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-6xl mx-auto">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Recruiter Categories</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Examples</th>
                    <th className="p-3 text-left hidden lg:table-cell">What Student Learns</th>
                    <th className="p-3 text-left hidden md:table-cell">Why Parents Can Trust</th>
                  </tr>
                </thead>
                <tbody>
                  {recruiterTable.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? "bg-secondary/50" : "bg-background"}>
                      <td className="p-3 font-medium text-foreground">{row.category}</td>
                      <td className="p-3 text-muted-foreground">{row.examples}</td>
                      <td className="p-3 text-muted-foreground hidden lg:table-cell">{row.learns}</td>
                      <td className="p-3 text-muted-foreground hidden md:table-cell">{row.trust}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Final Summary */}
      <section className="section-padding bg-charcoal text-primary-foreground">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <SectionFadeIn>
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-bold mb-4">This program trains students to respect money, understand markets deeply, and build stable careers in modern finance—without gambling or shortcuts.</p>
            <Link to="/contact" className="inline-block mt-4 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Start Your Journey</Link>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default PGDMSecuritiesPage;
