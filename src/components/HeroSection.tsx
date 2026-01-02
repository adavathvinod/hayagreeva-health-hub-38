import { Link } from "react-router-dom";
import { ArrowRight, Clock, Star, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import hospitalLobby from "@/assets/hospital-lobby.jpg";
import diagnosticEquipment from "@/assets/diagnostic-equipment.jpg";
import hospitalExterior from "@/assets/hospital-exterior.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-trust">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="stagger-children">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-6">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Open 24 Hours • 365 Days
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Health is{" "}
              <span className="text-gradient-hero">Our Priority</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              State-of-the-art healthcare in Vanasthalipuram. Experience excellence
              in every care with our team of dedicated specialists and modern
              diagnostic facilities.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 shadow-soft">
                <Star className="h-5 w-5 text-amber-500 fill-current" />
                <div>
                  <span className="font-bold text-foreground">4.1</span>
                  <span className="text-sm text-muted-foreground ml-1">
                    (4,000+ Reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 shadow-soft">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  NABH Compliant
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Book Appointment
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/specialities">
                <Button variant="hero-outline" size="lg">
                  Our Specialities
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-elevated animate-fade-in">
                  <img
                    src={hospitalLobby}
                    alt="Hayagreeva Hospital modern lobby"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-elevated animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <img
                    src={hospitalExterior}
                    alt="Hayagreeva Hospital exterior"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-elevated h-80 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <img
                    src={diagnosticEquipment}
                    alt="Modern diagnostic equipment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-card">
                    <p className="text-sm font-medium">Advanced Diagnostics</p>
                    <p className="text-xs opacity-80">MRI, CT Scan & More</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-elevated p-4 animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">50k+</p>
                  <p className="text-xs text-muted-foreground">Patients</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">20+</p>
                  <p className="text-xs text-muted-foreground">Doctors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: Shield,
              title: "Expert Specialists",
              description:
                "Board-certified doctors with decades of combined experience",
            },
            {
              icon: Award,
              title: "State-of-the-Art Equipment",
              description:
                "Latest diagnostic and surgical technology for accurate care",
            },
            {
              icon: Users,
              title: "Compassionate Care",
              description:
                "Patient-first approach with personalized treatment plans",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-card hover-lift fade-in-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
