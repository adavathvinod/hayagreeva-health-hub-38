import { Phone, MessageCircle, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-emergency">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* 24/7 Badge */}
          <div className="flex items-center gap-2 text-emergency-foreground">
            <div className="flex items-center gap-1.5 bg-card/20 rounded-full px-3 py-1">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-semibold">Open 24/7</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-card/20 rounded-full px-3 py-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-semibold">4.1 ★ (4,000+ Reviews)</span>
            </div>
          </div>

          {/* Emergency Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/918500419555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-success hover:bg-success/90 text-success-foreground rounded-full px-3 py-1.5 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="tel:08500419555"
              className="flex items-center gap-2 bg-card hover:bg-card/90 text-foreground rounded-full px-4 py-1.5 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">085004 19555</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EmergencyHeader;
