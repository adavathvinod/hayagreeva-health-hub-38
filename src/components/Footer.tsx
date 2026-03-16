import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-secondary">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-4">Ashoka School of Business</h3>
          <div className="space-y-3 text-sm text-secondary/70">
            <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />Malkapur, Yadadri Bhuvanagiri, Telangana 508252</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" />info@theasb.in</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" />+91 72079 39930</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-secondary/70">
            {[["Home", "/"], ["BBA Program", "/bba"], ["PGDM Program", "/pgdm"], ["Placements", "/placements"], ["Contact Us", "/contact"]].map(([label, path]) => (
              <Link key={label} to={path} className="block hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Programs</h4>
          <div className="space-y-2 text-sm text-secondary/70">
            <p>MBA / PGDM Programs</p>
            <p>BBA Program</p>
            <p>Marketing with Analytics</p>
            <p>HR Analytics</p>
            <p>Finance with FinTech</p>
            <p>AI & Data Science</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Postal Address</h4>
          <p className="text-sm text-secondary/70 mb-4">Malkapur Village, Choutuppal Mandal, Nalgonda District, Telangana 508252, India</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary/10 py-6 text-center text-sm text-secondary/50">
      Copyright © 2025 Ashoka School of Business. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
