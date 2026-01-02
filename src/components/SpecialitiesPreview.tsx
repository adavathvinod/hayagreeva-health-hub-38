import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialities = [
  {
    icon: "🦴",
    title: "Orthopedics",
    description: "Joint replacements, fracture care, and sports medicine",
    doctors: 4,
  },
  {
    icon: "👶",
    title: "Gynecology",
    description: "Women's health, maternity care, and fertility treatments",
    doctors: 3,
  },
  {
    icon: "🧒",
    title: "Pediatrics",
    description: "Comprehensive child healthcare from newborn to adolescent",
    doctors: 3,
  },
  {
    icon: "🩺",
    title: "General Medicine",
    description: "Primary care, chronic disease management, and health screenings",
    doctors: 5,
  },
  {
    icon: "🔬",
    title: "Advanced Surgery",
    description: "Minimally invasive procedures and complex surgeries",
    doctors: 4,
  },
  {
    icon: "❤️",
    title: "Cardiology",
    description: "Heart health diagnostics and preventive care",
    doctors: 2,
  },
];

const SpecialitiesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Specialities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specialities,
            delivered by experienced professionals.
          </p>
        </div>

        {/* Specialities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specialities.map((speciality, index) => (
            <Link
              to="/specialities"
              key={speciality.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover-lift border border-transparent hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{speciality.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {speciality.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {speciality.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary font-medium">
                  {speciality.doctors} Specialists
                </span>
                <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/specialities">
            <Button variant="default" size="lg">
              View All Specialities
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesPreview;
