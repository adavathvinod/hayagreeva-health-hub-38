import EmergencyHeader from "@/components/EmergencyHeader";
import Navbar from "@/components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import { 
  CreditCard, 
  FileText, 
  Calendar, 
  Clock, 
  Clipboard, 
  HelpCircle,
  CheckCircle,
  Download,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const PatientResources = () => {
  return (
    <>
      <Helmet>
        <title>Patient Resources | Hayagreeva Multispeciality Hospital</title>
        <meta
          name="description"
          content="Patient resources at Hayagreeva Hospital: Insurance information, billing, what to expect on your first visit, and helpful guides."
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
                  Patient <span className="text-gradient-hero">Resources</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Everything you need to know before, during, and after your visit.
                  We're here to make your healthcare journey seamless.
                </p>
              </div>
            </div>
          </section>

          {/* Insurance & Billing */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Insurance */}
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                      <CreditCard className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Insurance</h2>
                      <p className="text-muted-foreground">We accept major insurance providers</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-foreground">
                      We work with most major health insurance companies to ensure you receive the coverage you deserve. Our dedicated insurance desk helps with:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Pre-authorization assistance",
                        "Cashless claim processing",
                        "Insurance documentation support",
                        "Direct billing with partner insurers",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-accent rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Accepted Insurance</h4>
                    <p className="text-sm text-muted-foreground">
                      Star Health, ICICI Lombard, HDFC Ergo, New India, United India, Max Bupa, Religare, and many more.
                    </p>
                  </div>
                </div>

                {/* Billing */}
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                      <FileText className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Billing Transparency</h2>
                      <p className="text-muted-foreground">Clear and upfront pricing</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-foreground">
                      We believe in complete transparency when it comes to billing. Before any procedure:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Detailed cost estimates provided upfront",
                        "No hidden charges or surprise bills",
                        "Itemized billing statements",
                        "Multiple payment options available",
                        "EMI options for major procedures",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="default" size="sm">
                      <Phone className="h-4 w-4" />
                      Call Billing Desk
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="py-16 bg-accent">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What to Expect on Your First Visit
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We want to make your first visit as smooth as possible. Here's a step-by-step guide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Calendar,
                    step: "1",
                    title: "Book Appointment",
                    description: "Call or WhatsApp us to schedule your visit. Bring your ID and insurance card.",
                  },
                  {
                    icon: Clipboard,
                    step: "2",
                    title: "Registration",
                    description: "Quick registration at our reception. Our staff will guide you through the process.",
                  },
                  {
                    icon: Clock,
                    step: "3",
                    title: "Consultation",
                    description: "Meet with your specialist. Discuss your concerns and get a thorough examination.",
                  },
                  {
                    icon: FileText,
                    step: "4",
                    title: "Treatment Plan",
                    description: "Receive a detailed treatment plan with clear next steps and follow-up schedule.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-card rounded-2xl p-6 shadow-card relative"
                  >
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 mt-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "What documents should I bring for my first visit?",
                      answer: "Please bring a valid ID (Aadhaar/Passport), insurance card if applicable, previous medical records, and current medication list.",
                    },
                    {
                      question: "Do you offer cashless treatment?",
                      answer: "Yes, we offer cashless treatment for patients with partner insurance companies. Our insurance desk will assist with pre-authorization.",
                    },
                    {
                      question: "What are your visiting hours?",
                      answer: "Visiting hours are from 10 AM to 12 PM and 5 PM to 7 PM. ICU has limited visiting hours - please check with the nursing station.",
                    },
                    {
                      question: "Is parking available?",
                      answer: "Yes, we have dedicated parking space for patients and visitors. Valet parking is also available for emergency cases.",
                    },
                    {
                      question: "How can I get my medical records?",
                      answer: "You can request medical records at our reception desk. Digital copies can be emailed within 24-48 hours.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 shadow-soft border border-border"
                    >
                      <div className="flex items-start gap-4">
                        <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      </div>
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

export default PatientResources;
