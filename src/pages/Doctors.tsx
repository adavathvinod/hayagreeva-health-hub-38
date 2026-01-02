import EmergencyHeader from "@/components/EmergencyHeader";
import Navbar from "@/components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import { Award, GraduationCap, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

import doctorConsultation from "@/assets/doctor-consultation.jpg";
import doctorFemale from "@/assets/doctor-female.jpg";
import doctorSurgeon from "@/assets/doctor-surgeon.jpg";
import doctorPediatrician from "@/assets/doctor-pediatrician.jpg";
import doctorOrthopedic from "@/assets/doctor-orthopedic.jpg";

const doctors = [
  {
    name: "Dr. Ramesh Babu",
    speciality: "Orthopedics",
    qualification: "MBBS, MS (Ortho), FICS",
    experience: 18,
    image: doctorOrthopedic,
    expertise: ["Joint Replacement", "Sports Medicine", "Fracture Care"],
  },
  {
    name: "Dr. Lakshmi Devi",
    speciality: "Gynecology & Obstetrics",
    qualification: "MBBS, MS (OBG), FRCOG",
    experience: 15,
    image: doctorFemale,
    expertise: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Infertility"],
  },
  {
    name: "Dr. Suresh Kumar",
    speciality: "General Surgery",
    qualification: "MBBS, MS (General Surgery)",
    experience: 20,
    image: doctorSurgeon,
    expertise: ["Laparoscopic Surgery", "Hernia Repair", "Trauma Surgery"],
  },
  {
    name: "Dr. Priya Menon",
    speciality: "Pediatrics",
    qualification: "MBBS, MD (Pediatrics), IAP Fellow",
    experience: 12,
    image: doctorPediatrician,
    expertise: ["Newborn Care", "Vaccination", "Child Development"],
  },
  {
    name: "Dr. Venkat Rao",
    speciality: "General Medicine",
    qualification: "MBBS, MD (Internal Medicine)",
    experience: 16,
    image: doctorConsultation,
    expertise: ["Diabetes", "Hypertension", "Thyroid Disorders"],
  },
  {
    name: "Dr. Anitha Sharma",
    speciality: "Cardiology",
    qualification: "MBBS, MD (Cardiology), DM",
    experience: 14,
    image: doctorFemale,
    expertise: ["Echocardiography", "Heart Disease", "Preventive Cardiology"],
  },
];

const Doctors = () => {
  return (
    <>
      <Helmet>
        <title>Our Doctors | Expert Medical Team at Hayagreeva Hospital</title>
        <meta
          name="description"
          content="Meet our expert doctors and specialists at Hayagreeva Multispeciality Hospital. Experienced professionals in Orthopedics, Gynecology, Pediatrics, and more."
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
                  Our <span className="text-gradient-hero">Expert Team</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Meet our dedicated team of specialists who bring decades of
                  combined experience and a passion for patient care.
                </p>
              </div>
            </div>
          </section>

          {/* Doctors Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor, index) => (
                  <div
                    key={doctor.name}
                    className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-border group"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {doctor.experience} Years
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {doctor.speciality}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        {doctor.qualification}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {doctor.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-4 border-t border-border">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {doctor.experience}+ years of excellence
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-accent">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "20+", label: "Expert Doctors" },
                  { value: "95+", label: "Years Combined Experience" },
                  { value: "50k+", label: "Patients Treated" },
                  { value: "24/7", label: "Availability" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
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

export default Doctors;
