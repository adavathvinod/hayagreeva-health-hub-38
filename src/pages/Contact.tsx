import { useState } from "react";
import EmergencyHeader from "@/components/EmergencyHeader";
import Navbar from "@/components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  MessageCircle,
  Send,
  Navigation
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Thank you! We'll contact you shortly.");
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Hayagreeva Multispeciality Hospital Vanasthalipuram</title>
        <meta
          name="description"
          content="Contact Hayagreeva Hospital: GURUDWARA Road, Vanasthalipuram, Hyderabad. Call 085004 19555. Book appointments, get directions, or send us a message."
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
                  Contact <span className="text-gradient-hero">Us</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  We're here to help. Reach out to us for appointments, inquiries,
                  or any assistance you need.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info & Map */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>

                  {/* Contact Cards */}
                  <div className="space-y-4 mb-8">
                    <a
                      href="tel:08500419555"
                      className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover-lift border border-border group"
                    >
                      <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call Us</p>
                        <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          085004 19555
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/918500419555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover-lift border border-border group"
                    >
                      <div className="w-14 h-14 bg-success rounded-xl flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-success-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">WhatsApp</p>
                        <p className="text-xl font-bold text-foreground group-hover:text-success transition-colors">
                          Send Reports & Queries
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card border border-border">
                      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="text-foreground font-medium">
                          GURUDWARA Road, Vanasthalipuram,<br />
                          Hyderabad, Telangana 500070
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card border border-border">
                      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Working Hours</p>
                        <p className="text-foreground font-medium">
                          Open 24 Hours • 365 Days
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1234567890123!2d78.5456789!3d17.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHayagreeva%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hayagreeva Hospital Location"
                    />
                    <div className="p-4">
                      <a
                        href="https://maps.google.com/?q=Hayagreeva+Multispeciality+Hospital+Vanasthalipuram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="default" className="w-full">
                          <Navigation className="h-5 w-5" />
                          Get Directions
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Book an Appointment
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Fill out the form and we'll get back to you within 30 minutes.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message / Reason for Visit
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your concern or which department you'd like to visit..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Request Appointment
                          </>
                        )}
                      </Button>
                    </form>

                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </div>
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

export default Contact;
