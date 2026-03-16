import SectionFadeIn from "@/components/SectionFadeIn";
import ParallaxSection from "@/components/ParallaxSection";
import { Link } from "react-router-dom";
import {
  Globe, Lightbulb, Users, Award, BookOpen, GraduationCap,
  Home, Monitor, Dumbbell, Heart, Rocket, Briefcase, TrendingUp,
  Building2, Star, MessageSquare
} from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import globalImmersion from "@/assets/global-immersion.jpg";
import hostel from "@/assets/hostel.jpg";
import smartClassroom from "@/assets/smart-classroom.jpg";
import library from "@/assets/library.jpg";
import incubation from "@/assets/incubation.jpg";
import sportsArena from "@/assets/sports-arena.jpg";
import campusLife from "@/assets/campus-life.jpg";
import graduation from "@/assets/graduation.jpg";
import leadership from "@/assets/leadership.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import expert1 from "@/assets/expert-1.jpg";
import expert2 from "@/assets/expert-2.jpg";
import expert3 from "@/assets/expert-3.jpg";
import expert4 from "@/assets/expert-4.jpg";
import expert5 from "@/assets/expert-5.jpg";

const bbaAdvantages = [
  { icon: Award, title: "Professional Edge Co-Curriculum", desc: "Skills beyond the syllabus" },
  { icon: Star, title: "Leadership Mastery", desc: "Because the future needs bold leaders" },
  { icon: Globe, title: "Global Immersion Program", desc: "Travel abroad for masterclasses & workshops" },
  { icon: Lightbulb, title: "Innovative Learning", desc: "Industry-driven experiential education" },
  { icon: Users, title: "Industry Mentoring", desc: "Guidance from top business professionals" },
  { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum with practical exposure" },
];

const campusFacilities = [
  { icon: Home, title: "Separate Hostels", desc: "Comfortable and secure hostels for boys and girls", img: hostel },
  { icon: Monitor, title: "Smart Classrooms & Labs", desc: "AV tools and business simulation tools", img: smartClassroom },
  { icon: BookOpen, title: "Learning Resource Centre", desc: "Digital academic resources and collaborative study spaces", img: library },
  { icon: Rocket, title: "Startup Incubation Centre", desc: "Mentorship and funding for business ideas", img: incubation },
  { icon: Dumbbell, title: "Gymnasium & Sports Arena", desc: "Modern fitness and sports facilities", img: sportsArena },
  { icon: Heart, title: "Vibrant Campus Life", desc: "Clubs, activities, and events", img: campusLife },
];

const careerPathways = [
  { icon: Briefcase, title: "Job-Ready at Graduation", desc: "Placement partnerships with leading companies" },
  { icon: GraduationCap, title: "MBA Entrance Support", desc: "Coaching for CAT, XAT, GMAT" },
  { icon: Globe, title: "Study Abroad", desc: "International university partnerships" },
  { icon: Building2, title: "Public Sector Pathway", desc: "Civil services and banking exam preparation" },
  { icon: Rocket, title: "Entrepreneurship & Startup", desc: "Startup mentorship and funding" },
  { icon: TrendingUp, title: "Family Business Management", desc: "Skills to grow family businesses" },
];

const experts = [
  { name: "Arun Kumar", role: "Data Scientist, Associate Manager, PepsiCo", quote: "ASB's BBA program stands out for experiential learning and industry alignment.", img: expert1 },
  { name: "Srinivas Rao", role: "HR, L N B Group", quote: "Industry experts, live projects, and leadership modules make this program unique.", img: expert2 },
  { name: "Ram Gopal", role: "CEO, ARGS Consultants", quote: "ASB's BBA program is a powerhouse of learning and practical exposure.", img: expert3 },
  { name: "Dr Ravindra Penmatsa", role: "Certified Life & Executive Coach", quote: "Curriculum blends academic fundamentals with real-world business skills.", img: expert4 },
  { name: "Dr Ch S Durga Prasad", role: "Academic Leader, AIMS", quote: "The 10-dimensional approach builds confidence and entrepreneurial thinking.", img: expert5 },
];

const recruiterNames = ["Cyient", "IBM", "HDFC", "Virtusa", "Capgemini", "Infosys", "TCS", "Wipro", "Deloitte", "Accenture"];

const BBAPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-charcoal text-primary-foreground section-padding text-center">
        <SectionFadeIn>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Ashoka College of Business Management</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Learn. Lead. <span className="text-primary">Conquer.</span></h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">10-Dimensional BBA Program — Where Future Business Leaders Begin</p>
        </SectionFadeIn>
      </section>

      {/* About BBA with image */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Where Future Business Leaders Begin</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At Ashoka College of Business Management (ACBM), powered by ASB, our 10 Dimensional BBA program combines academic excellence with real-world exposure.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {["Global Insights", "Innovative Learning", "Industry-Driven Experiences"].map((t) => (
                    <span key={t} className="px-5 py-2 bg-secondary text-foreground font-medium rounded-full text-sm">{t}</span>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  The Global Immersion Program (GIP) enables students to travel abroad for academic masterclasses, business workshops, and cultural exchanges.
                </p>
              </div>
              <div>
                <img src={heroAbout} alt="BBA Students" className="rounded-2xl shadow-xl w-full" />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-wide grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Vision", desc: "Empowering students with business excellence and ethical leadership." },
            { title: "Mission", desc: "Foster innovation, entrepreneurship, and holistic student development." },
          ].map((v, i) => (
            <SectionFadeIn key={v.title} delay={i * 0.15}>
              <div className="bg-background rounded-xl p-8 text-center border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </section>

      {/* Parallax - Global Immersion */}
      <ParallaxSection bgImage={globalImmersion} className="py-24 md:py-32">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">Global Immersion Program</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Travel abroad for academic masterclasses, business workshops, and cultural exchanges across the globe.</p>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* 10-Dimensional Advantages */}
      <section id="dimensions" className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">10-Dimensional BBA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ashoka BBA Advantages</h2>
            </div>
          </SectionFadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bbaAdvantages.map(({ icon: Icon, title, desc }, i) => (
              <SectionFadeIn key={title} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Enquiry */}
      <section className="section-padding bg-primary">
        <div className="container-wide max-w-xl mx-auto text-center">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-primary-foreground mb-8">Admission Enquiry</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30" />
              <input type="tel" placeholder="Mobile Number (+91)" className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30" />
              <input type="email" placeholder="Email ID" className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30" />
              <button type="submit" className="w-full py-3 bg-primary-foreground text-primary font-bold rounded-lg hover:bg-primary-foreground/90 transition-colors">
                Admissions Open 2026
              </button>
            </form>
          </SectionFadeIn>
        </div>
      </section>

      {/* Why BBA with image */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src={leadership} alt="Leadership Workshop" className="rounded-2xl shadow-xl w-full" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why a BBA Will Build the Future of Business Leadership?</h2>
                <p className="text-muted-foreground text-lg mb-6">The business world is changing fast. Ashoka's BBA program prepares students with global mindset and leadership skills.</p>
                <p className="text-muted-foreground">Our 10-dimensional BBA curriculum equips students for Entrepreneurship, International opportunities, and Successful career paths.</p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Campus Facilities with images */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Campus Facilities</h2>
            </div>
          </SectionFadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFacilities.map(({ icon: Icon, title, desc, img }, i) => (
              <SectionFadeIn key={title} delay={i * 0.08}>
                <div className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-md transition-all group">
                  <div className="h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="font-bold text-foreground">{title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax - Career */}
      <ParallaxSection bgImage={graduation} className="py-24 md:py-32">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">Craft Your Future</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Choose your business breakthrough with our diverse career pathways.</p>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* Career Pathways */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Career Pathways</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Craft Your Future — Choose Your Business Breakthrough</h2>
            </div>
          </SectionFadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPathways.map(({ icon: Icon, title, desc }, i) => (
              <SectionFadeIn key={title} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border hover:border-primary/30 transition-all text-center">
                  <Icon className="h-10 w-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneurship Ecosystem with parallax */}
      <ParallaxSection bgImage={incubation} className="py-20 md:py-28" overlay="bg-charcoal/80">
        <div className="container-wide max-w-3xl mx-auto text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Where Your Vision Turns into Thriving Startups</h2>
            <p className="text-primary-foreground/70 text-lg mb-8">We nurture every idea with expert mentoring, live projects, funding access, and entrepreneurial exposure.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Expert Mentoring", "Live Projects", "Funding Access", "Entrepreneurial Exposure"].map((t) => (
                <span key={t} className="px-5 py-2 border border-primary-foreground/20 rounded-full text-sm text-primary-foreground">{t}</span>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* Prominent Recruiters */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">Prominent Recruiters</h2>
            </div>
          </SectionFadeIn>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...recruiterNames, ...recruiterNames].map((name, i) => (
                <div key={i} className="shrink-0 px-8 py-4 bg-background rounded-lg border border-border flex items-center justify-center min-w-[160px]">
                  <span className="font-display font-bold text-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experts with photos */}
      <section id="experts" className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Industry Expert Insights</h2>
            </div>
          </SectionFadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, i) => (
              <SectionFadeIn key={expert.name} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-border bg-secondary">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={expert.img} alt={expert.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-foreground text-sm">{expert.name}</p>
                      <p className="text-xs text-muted-foreground">{expert.role}</p>
                    </div>
                  </div>
                  <MessageSquare className="h-5 w-5 text-primary mb-2" />
                  <p className="text-muted-foreground text-sm italic">"{expert.quote}"</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with parallax */}
      <ParallaxSection bgImage={campusAerial} className="py-20 md:py-28" overlay="bg-primary/80">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Begin Your Journey?</h2>
            <Link to="/contact" className="inline-block px-8 py-4 bg-primary-foreground text-primary font-bold rounded-lg hover:bg-primary-foreground/90 transition-colors">
              Apply Now
            </Link>
          </SectionFadeIn>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default BBAPage;
