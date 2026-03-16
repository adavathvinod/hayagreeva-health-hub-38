import { Phone, MessageCircle, CreditCard, FileEdit, HelpCircle } from "lucide-react";

const sideButtons = [
  { icon: CreditCard, label: "Pay Fee", href: "/contact", color: "bg-primary" },
  { icon: FileEdit, label: "Apply", href: "/contact", color: "bg-primary" },
  { icon: MessageCircle, label: "Chat", href: "https://wa.me/917207939930", external: true, color: "bg-primary" },
  { icon: HelpCircle, label: "Enquire", href: "/contact", color: "bg-primary" },
];

const FloatingButtons = () => (
  <>
    {/* Side vertical panel - like reference */}
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col shadow-xl rounded-l-xl overflow-hidden">
      {sideButtons.map(({ icon: Icon, label, href, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="flex flex-col items-center justify-center w-20 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border-b border-primary-foreground/10 last:border-b-0"
        >
          <Icon className="h-6 w-6 mb-1" />
          <span className="text-[10px] font-semibold">{label}</span>
        </a>
      ))}
    </div>

    {/* Mobile bottom buttons */}
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
      <a
        href="https://wa.me/917207939930"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>
      <a
        href="tel:+917207939930"
        className="w-14 h-14 rounded-full bg-call-blue flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <Phone className="h-6 w-6 text-primary-foreground" />
      </a>
    </div>
  </>
);

export default FloatingButtons;
