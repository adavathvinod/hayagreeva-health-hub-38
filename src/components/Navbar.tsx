import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const megaMenuItems = {
  "Explore ASB": {
    sections: [
      {
        heading: "Why Choose Us",
        links: [
          { label: "About ASB", path: "/about#about" },
          { label: "Vision & Mission", path: "/about#vision-mission" },
          { label: "Leadership Messages", path: "/about#leadership" },
        ],
      },
      {
        heading: "Our People",
        links: [
          { label: "Governing Council", path: "/about#governing-council" },
          { label: "Academic Council", path: "/about#academic-council" },
          { label: "Our Faculty", path: "/about#faculty" },
        ],
      },
      {
        heading: "Excellence",
        links: [
          { label: "Research & Consulting", path: "/about#research" },
          { label: "Campus Facilities", path: "/#campus" },
          { label: "Awards & Recognition", path: "/#awards" },
        ],
      },
    ],
  },
};

const programsChildren = [
  { label: "BBA Program", path: "/bba" },
  { label: "PGDM Overview", path: "/pgdm" },
  { label: "PGDM – Securities Markets", path: "/pgdm/securities-markets" },
  { label: "PGDM – AI & Data Science", path: "/pgdm/ai-data-science" },
  { label: "PGDM – Marketing with Analytics", path: "/pgdm/marketing-analytics" },
  { label: "PGDM – Finance with FinTech", path: "/pgdm/finance-fintech" },
  { label: "PGDM – HR with HR Analytics", path: "/pgdm/hr-analytics" },
  { label: "PGDM – Agri-Business Management", path: "/pgdm/agri-business" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "Explore ASB", megaMenu: true },
  {
    label: "Why ASB",
    children: [
      { label: "10-Dimensional Learning", path: "/bba#dimensions" },
      { label: "Entrepreneurship Ecosystem", path: "/bba#entrepreneurship" },
      { label: "Industry Experts", path: "/bba#experts" },
    ],
  },
  {
    label: "Programs",
    children: programsChildren,
  },
  { label: "Placements", path: "/placements" },
  { label: "Admissions", path: "/pgdm#admissions" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2" : "bg-background py-4"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ashoka School of Business" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <p className="font-display font-bold text-sm leading-tight text-foreground">Ashoka School</p>
            <p className="font-display font-bold text-sm leading-tight text-primary">of Business</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            (item as any).megaMenu ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 bg-background border border-border rounded-xl shadow-xl py-6 px-8 min-w-[600px]">
                    <div className="grid grid-cols-3 gap-6">
                      {megaMenuItems[item.label as keyof typeof megaMenuItems]?.sections.map((section) => (
                        <div key={section.heading}>
                          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{section.heading}</p>
                          <div className="space-y-1">
                            {section.links.map((link) => (
                              <Link
                                key={link.label}
                                to={link.path}
                                className="block px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link to="/about" className="text-sm font-semibold text-primary hover:underline">
                        View Full About Page →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (item as any).children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[260px]">
                    {(item as any).children.map((child: any) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path!}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          {navItems.map((item) =>
            (item as any).megaMenu ? (
              <div key={item.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium text-foreground"
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item.label && (
                  <div className="bg-secondary px-6 py-4 space-y-4">
                    {megaMenuItems[item.label as keyof typeof megaMenuItems]?.sections.map((section) => (
                      <div key={section.heading}>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{section.heading}</p>
                        {section.links.map((link) => (
                          <Link key={link.label} to={link.path} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link to="/about" className="block px-4 py-2 text-sm font-semibold text-primary">
                      View Full About Page →
                    </Link>
                  </div>
                )}
              </div>
            ) : (item as any).children ? (
              <div key={item.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium text-foreground"
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item.label && (
                  <div className="bg-secondary">
                    {(item as any).children.map((child: any) => (
                      <Link key={child.label} to={child.path} className="block px-10 py-2.5 text-sm text-muted-foreground hover:text-primary">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.path!} className="block px-6 py-3 text-sm font-medium text-foreground hover:text-primary">
                {item.label}
              </Link>
            )
          )}
          <div className="p-4">
            <Link to="/contact" className="block w-full text-center px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
