import { Link } from "react-router-dom";
import SectionFadeIn from "@/components/SectionFadeIn";
import ParallaxSection from "@/components/ParallaxSection";
import campusBuilding from "@/assets/campus-building.png";
import campusCafeteria from "@/assets/campus-cafeteria.png";
import campusHub from "@/assets/campus-hub.png";
import awardCeremony from "@/assets/award-ceremony.png";
import heroAbout from "@/assets/hero-about.jpg";
import smartClassroom from "@/assets/smart-classroom.jpg";
import library from "@/assets/library.jpg";
import studyHall from "@/assets/study-hall.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import graduation from "@/assets/graduation.jpg";
import { GraduationCap, Globe, Lightbulb, Users, BookOpen, Building2, Coffee, Gamepad2, Library, Monitor } from "lucide-react";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center px-4">
          <SectionFadeIn>
            <h1 className="font-display text-5xl md:text-7xl font-black text-primary-foreground mb-4 tracking-tight">
              Learn. Lead. <span className="text-primary">Conquer.</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-display font-medium mb-10">
              Ashoka School of Business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/bba"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary/90 transition-colors"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* About ASB */}
      <section id="about" className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About ASB</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Empowering Future Leaders Through Excellence
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Ashoka School of Business empowers future leaders through global exposure, innovative education, career mentoring, real-world experience, and entrepreneurial growth.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, label: "Global Exposure" },
                    { icon: Lightbulb, label: "Innovative Education" },
                    { icon: Users, label: "Career Mentoring" },
                    { icon: GraduationCap, label: "Entrepreneurial Growth" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img src={heroAbout} alt="ASB Campus Students" className="rounded-2xl shadow-xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="text-3xl font-bold">25+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Parallax CTA */}
      <ParallaxSection bgImage={campusAerial} className="py-24 md:py-32">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">A Campus Built for Ambition</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">World-class infrastructure designed to inspire the next generation of business leaders.</p>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* Campus Facilities */}
      <section id="campus" className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Campus Life</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">World-Class Campus Facilities</h2>
            </div>
          </SectionFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Gamepad2, title: "Games Area", desc: "Indoor and outdoor sports facilities for holistic development", img: campusHub },
              { icon: Coffee, title: "Cafeteria", desc: "Spacious cafeteria serving nutritious and diverse cuisine", img: campusCafeteria },
              { icon: Library, title: "Library", desc: "Extensive digital and physical academic resources", img: library },
              { icon: BookOpen, title: "Study Halls", desc: "Quiet, comfortable spaces designed for focused learning", img: studyHall },
              { icon: Monitor, title: "Smart Classrooms", desc: "AV-equipped classrooms with business simulation tools", img: smartClassroom },
              { icon: Building2, title: "Modern Infrastructure", desc: "State-of-the-art campus with contemporary architecture", img: campusBuilding },
            ].map(({ icon: Icon, title, desc, img }, i) => (
              <SectionFadeIn key={title} delay={i * 0.1}>
                <div className="bg-background rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
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

      {/* Parallax Graduation */}
      <ParallaxSection bgImage={graduation} className="py-24 md:py-32">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">Shape Your Tomorrow</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">Join the ranks of successful alumni making an impact across industries worldwide.</p>
            <Link to="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary/90 transition-colors inline-block">
              Start Your Journey
            </Link>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* Programs */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Programs</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Programs Offered</h2>
            </div>
          </SectionFadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "BBA Program", desc: "10-Dimensional BBA program combining academic excellence with real-world exposure. Build your foundation for business leadership.", path: "/bba", img: awardCeremony },
              { title: "MBA / PGDM Programs", desc: "2-year full-time tech-blended PGDM program with specializations in Marketing Analytics, HR Analytics, Finance with FinTech, and more.", path: "/pgdm", img: smartClassroom },
            ].map((prog, i) => (
              <SectionFadeIn key={prog.title} delay={i * 0.15}>
                <div className="border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
                  <div className="h-48 overflow-hidden">
                    <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <GraduationCap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">{prog.title}</h3>
                    <p className="text-muted-foreground mb-6">{prog.desc}</p>
                    <Link to={prog.path} className="text-primary font-semibold text-sm hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
