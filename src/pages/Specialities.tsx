import EmergencyHeader from "@/components/EmergencyHeader";
import Navbar from "@/components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const specialities = [
  {
    icon: "🦴",
    title: "Orthopedics",
    description: "Comprehensive bone and joint care including joint replacements, fracture treatment, sports injuries, and spine disorders.",
    services: [
      "Total Knee Replacement",
      "Hip Replacement Surgery",
      "Arthroscopy",
      "Fracture Management",
      "Sports Medicine",
      "Spine Surgery",
    ],
    doctors: 4,
  },
  {
    icon: "👶",
    title: "Gynecology & Obstetrics",
    description: "Complete women's health services from routine care to complex treatments, with special focus on maternal health.",
    services: [
      "Normal & C-Section Deliveries",
      "High-Risk Pregnancy Care",
      "Fertility Treatments",
      "Laparoscopic Surgery",
      "Menstrual Disorders",
      "Cancer Screening",
    ],
    doctors: 3,
  },
  {
    icon: "🧒",
    title: "Pediatrics",
    description: "Dedicated child healthcare from birth through adolescence with a child-friendly environment and specialized care.",
    services: [
      "Newborn Care (NICU)",
      "Vaccinations",
      "Growth Monitoring",
      "Childhood Infections",
      "Developmental Assessment",
      "Pediatric Emergency",
    ],
    doctors: 3,
  },
  {
    icon: "🩺",
    title: "General Medicine",
    description: "Primary care and internal medicine services for adults, focusing on prevention, diagnosis, and treatment.",
    services: [
      "Diabetes Management",
      "Hypertension Care",
      "Thyroid Disorders",
      "Respiratory Issues",
      "Health Check-ups",
      "Infectious Diseases",
    ],
    doctors: 5,
  },
  {
    icon: "🔬",
    title: "Advanced Surgery",
    description: "State-of-the-art surgical care using minimally invasive techniques for faster recovery and better outcomes.",
    services: [
      "Laparoscopic Surgery",
      "Hernia Repair",
      "Gallbladder Surgery",
      "Appendectomy",
      "Tumor Removal",
      "Emergency Surgery",
    ],
    doctors: 4,
  },
  {
    icon: "❤️",
    title: "Cardiology",
    description: "Heart health services including diagnostics, preventive care, and management of cardiovascular conditions.",
    services: [
      "ECG & Echo",
      "Stress Testing",
      "Holter Monitoring",
      "Heart Disease Management",
      "Cholesterol Management",
      "Lifestyle Counseling",
    ],
    doctors: 2,
  },
];

const Specialities = () => {
  return (
    <>
      <Helmet>
        <title>Medical Specialities | Hayagreeva Multispeciality Hospital</title>
        <meta
          name="description"
          content="Explore our medical specialities: Orthopedics, Gynecology, Pediatrics, General Medicine, Surgery & Cardiology. Expert care in Vanasthalipuram, Hyderabad."
        />
      </Helmet>

      <div className="min-h-screen">
        <EmergencyHeader />
        <Navbar />
        
        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section className="bg-gradient-trust py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Our <span className="text-gradient-hero">Specialities</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Comprehensive healthcare across multiple specialities, delivered by
                  experienced professionals using state-of-the-art technology.
                </p>
              </div>
            </div>
          </section>

          {/* Specialities Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8">
                {specialities.map((speciality, index) => (
                  <div
                    key={speciality.title}
                    className="bg-card rounded-2xl p-8 shadow-card hover-lift border border-border"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-5xl">{speciality.icon}</div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          {speciality.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {speciality.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {speciality.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-foreground">{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-primary font-medium">
                        {speciality.doctors} Expert Specialists
                      </span>
                      <Link to="/doctors">
                        <Button variant="ghost" size="sm">
                          View Doctors
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Need Expert Care?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our specialists are available 24/7 to provide you with the best
                possible care. Book an appointment today.
              </p>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-card text-foreground hover:bg-card/90 border-0"
                >
                  Book Appointment
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default Specialities;
