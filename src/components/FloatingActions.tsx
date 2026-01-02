import { Phone, MessageCircle, MapPin } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Get Directions */}
      <a
        href="https://maps.google.com/?q=Hayagreeva+Multispeciality+Hospital+Vanasthalipuram"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-elevated hover:shadow-card hover:-translate-y-1 transition-all duration-300"
        aria-label="Get Directions"
      >
        <MapPin className="h-6 w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918500419555"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-success text-success-foreground flex items-center justify-center shadow-elevated hover:shadow-card hover:-translate-y-1 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call Now */}
      <a
        href="tel:08500419555"
        className="w-14 h-14 rounded-full bg-gradient-emergency text-emergency-foreground flex items-center justify-center shadow-emergency hover:shadow-card hover:-translate-y-1 transition-all duration-300 pulse-emergency"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingActions;
