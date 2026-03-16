import SectionFadeIn from "@/components/SectionFadeIn";
import ParallaxSection from "@/components/ParallaxSection";
import { MapPin, Mail, Phone } from "lucide-react";
import contactOffice from "@/assets/contact-office.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";

const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden">
        <img src={contactOffice} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative z-10">
          <SectionFadeIn>
            <h1 className="text-3xl md:text-5xl font-black mb-4">Let's Connect With Us</h1>
            <p className="text-primary-foreground/70">We'd love to hear from you</p>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <SectionFadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p className="text-muted-foreground text-sm">NH65 near Ramoji Film City, Hyderabad, Toopranpet, Telangana 508252</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground text-sm">General: info@theasb.in</p>
                        <p className="text-muted-foreground text-sm">Admissions: admissions@theasb.in</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-muted-foreground text-sm">General: +91 72079 39930</p>
                        <p className="text-muted-foreground text-sm">Admissions: +91 72079 39934</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionFadeIn>

            {/* Form */}
            <SectionFadeIn delay={0.15}>
              <div className="bg-secondary p-8 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </SectionFadeIn>
          </div>
        </div>
      </section>

      {/* Parallax Map Area */}
      <ParallaxSection bgImage={campusAerial} className="py-20 md:py-28">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">Visit Our Campus</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Malkapur Village, Choutuppal Mandal, Nalgonda District, Telangana 508252, India</p>
          </SectionFadeIn>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default ContactPage;
