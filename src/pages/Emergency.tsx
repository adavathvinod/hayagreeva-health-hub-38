import EmergencyHeader from "@/components/EmergencyHeader";
import Navbar from "@/components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Ambulance, 
  Clock, 
  AlertTriangle,
  Heart,
  Activity,
  Zap,
  Users
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import hospitalBeds from "@/assets/hospital-beds.png";

const Emergency = () => {
  return (
    <>
      <Helmet>
        <title>24/7 Emergency Care | Hayagreeva Multispeciality Hospital</title>
        <meta
          name="description"
          content="24/7 Emergency care at Hayagreeva Hospital. Ambulance service, trauma care, and critical care. Call 085004 19555 for immediate assistance."
        />
      </Helmet>

      <div className="min-h-screen">
        <EmergencyHeader />
        <Navbar />

        <main className="pt-32 pb-20">
          {/* Emergency Hero - High Contrast */}
          <section className="bg-gradient-emergency py-20 text-emergency-foreground">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-card/20 rounded-full px-4 py-2 mb-6">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-semibold">Emergency Services</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    24/7 Emergency & Critical Care
                  </h1>

                  <p className="text-xl opacity-90 mb-8 leading-relaxed">
                    When every second counts, trust our experienced emergency team.
                    We're here for you round the clock, every day of the year.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href="tel:08500419555">
                      <Button
                        size="xl"
                        className="bg-card text-foreground hover:bg-card/90 font-bold"
                      >
                        <Phone className="h-6 w-6" />
                        Call Now: 085004 19555
                      </Button>
                    </a>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>Response in 5 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ambulance className="h-5 w-5" />
                      <span>Ambulance Available</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={hospitalBeds}
                      alt="Emergency care facility"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevated">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-emergency rounded-full flex items-center justify-center pulse-emergency">
                        <Heart className="h-8 w-8 text-emergency-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Available</p>
                        <p className="text-2xl font-bold text-foreground">24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Services */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Emergency Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our emergency department is equipped to handle all types of medical emergencies
                  with speed and expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Activity,
                    title: "Trauma Care",
                    description: "Immediate care for accident victims and trauma cases",
                  },
                  {
                    icon: Heart,
                    title: "Cardiac Emergency",
                    description: "Rapid response for heart attacks and cardiac events",
                  },
                  {
                    icon: Zap,
                    title: "Critical Care",
                    description: "Advanced ICU facilities with round-the-clock monitoring",
                  },
                  {
                    icon: Users,
                    title: "Pediatric Emergency",
                    description: "Specialized emergency care for children",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="bg-card rounded-2xl p-6 shadow-card hover-lift border border-border"
                  >
                    <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-destructive" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ambulance Contact */}
          <section className="py-16 bg-accent">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-20 h-20 bg-gradient-emergency rounded-2xl flex items-center justify-center mb-6">
                        <Ambulance className="h-10 w-10 text-emergency-foreground" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        Ambulance Service
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Our fully-equipped ambulances are available 24/7 with trained
                        paramedics. We cover Vanasthalipuram and surrounding areas.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Advanced Life Support (ALS) Ambulance",
                          "Trained paramedics on board",
                          "GPS-enabled for quick response",
                          "Direct communication with ER",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-emergency rounded-2xl p-8 text-center text-emergency-foreground">
                      <p className="text-lg font-medium mb-2">Emergency Hotline</p>
                      <a
                        href="tel:08500419555"
                        className="text-4xl md:text-5xl font-bold hover:opacity-80 transition-opacity block mb-4"
                      >
                        085004 19555
                      </a>
                      <p className="opacity-80 mb-6">Available 24 Hours</p>
                      <a href="tel:08500419555">
                        <Button
                          size="lg"
                          className="bg-card text-foreground hover:bg-card/90 w-full"
                        >
                          <Phone className="h-5 w-5" />
                          Call Ambulance
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When to Call */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  When to Call Emergency
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't wait if you experience any of these symptoms. Call us immediately.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  {[
                    "Chest pain or difficulty breathing",
                    "Sudden severe headache or confusion",
                    "Loss of consciousness or fainting",
                    "Severe bleeding or injuries",
                    "Signs of stroke (face drooping, arm weakness)",
                    "Severe allergic reactions",
                    "High fever with convulsions",
                    "Poisoning or overdose",
                  ].map((symptom) => (
                    <div
                      key={symptom}
                      className="flex items-center gap-3 bg-destructive/5 border border-destructive/20 rounded-lg p-4"
                    >
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                      <span className="text-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default Emergency;
