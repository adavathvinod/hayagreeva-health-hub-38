import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Explore ASB",
    children: [
      { label: "About ASB", path: "/#about" },
      { label: "Campus Facilities", path: "/#campus" },
      { label: "Awards & Recognition", path: "/#awards" },
    ],
  },
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
    children: [
      { label: "BBA Program", path: "/bba" },
      { label: "PGDM Program", path: "/pgdm" },
    ],
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
            item.children ? (
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
                  <div className="absolute top-full left-0 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                    {item.children.map((child) => (
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
                to={item.path}
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
            item.children ? (
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
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.path} className="block px-10 py-2.5 text-sm text-muted-foreground hover:text-primary">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.path} className="block px-6 py-3 text-sm font-medium text-foreground hover:text-primary">
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
