import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">H</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Hayagreeva</h3>
                <p className="text-sm text-muted-foreground">Multispeciality Hospitals</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Excellence in Every Care. Your trusted healthcare partner in Vanasthalipuram, providing state-of-the-art medical services 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/specialities", label: "Our Specialities" },
                { href: "/doctors", label: "Our Doctors" },
                { href: "/patient-resources", label: "Patient Resources" },
                { href: "/emergency", label: "Emergency Care" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  GURUDWARA Road, Vanasthalipuram, Hyderabad, Telangana 500070
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:08500419555"
                  className="text-muted-foreground hover:text-card transition-colors"
                >
                  085004 19555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@hayagreevahospitals.com"
                  className="text-muted-foreground hover:text-card transition-colors"
                >
                  info@hayagreevahospitals.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Open 24 Hours</span>
              </li>
            </ul>
          </div>

          {/* Social & Emergency */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="bg-gradient-emergency rounded-xl p-4">
              <p className="text-sm font-medium mb-2">Emergency Hotline</p>
              <a
                href="tel:08500419555"
                className="text-2xl font-bold hover:opacity-80 transition-opacity"
              >
                085004 19555
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-card/10 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Hayagreeva Multispeciality Hospitals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
