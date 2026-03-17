import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import SectionFadeIn from "./SectionFadeIn";

const placements = [
  { name: "Kommu Shiva Krishna", role: "Marketing & Admission Department", company: "JV Ventures", batch: "2023-25" },
  { name: "Komaragiri Sreekari", role: "Human Resource Management Trainee", company: "JV Ventures", batch: "2023-25" },
  { name: "Alkari Parnika", role: "Management Trainee", company: "Virtusa", batch: "2023-25" },
  { name: "Mohammed Abdul Aziz", role: "Management Trainee School Operations", company: "JV Ventures", batch: "2023-25" },
  { name: "Srividya Ilapavuluri", role: "Management Trainee", company: "Tech Mahindra", batch: "2023-25" },
  { name: "Pilli Sai Kiran", role: "Management Trainee", company: "Asian Paints", batch: "2023-25" },
  { name: "Mohammed Hafiz Hussain", role: "Management Trainee", company: "Asian Paints", batch: "2023-25" },
  { name: "Lokesh Kumar Neyyala", role: "Management Trainee", company: "Ankura Hospital", batch: "2021-23" },
  { name: "D. Rajasri", role: "Management Trainee", company: "Ankura Hospital", batch: "2021-23" },
  { name: "Thaduri Sai Kumar", role: "Management Trainee", company: "Ankura Hospital", batch: "2021-23" },
  { name: "Maddula Mounika Reddy", role: "Management Trainee", company: "Ankura Hospital", batch: "2021-23" },
  { name: "M.B.N.S. Anjana", role: "Associate", company: "EY", batch: "2021-23" },
  { name: "Ergala Shravan", role: "Associate", company: "EY", batch: "2021-23" },
  { name: "Vaishnavi Singu", role: "Associate", company: "EY", batch: "2021-23" },
  { name: "Dasa Akanksha", role: "Associate", company: "Tech Mahindra", batch: "2021-23" },
  { name: "K. V. Swarna Malya", role: "Associate", company: "Tech Mahindra", batch: "2021-23" },
  { name: "S. Lingeswaran", role: "Associate", company: "Tech Mahindra", batch: "2021-23" },
  { name: "Richa Rani Das", role: "Associate", company: "Tech Mahindra", batch: "2021-23" },
  { name: "S. Snehit Reddy", role: "Associate", company: "Tech Mahindra", batch: "2021-23" },
];

const PlacementCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <SectionFadeIn>
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Placements</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Students, Our Pride</h2>
            <p className="text-muted-foreground mt-2">Congratulations to our placed students across top companies</p>
          </div>
        </SectionFadeIn>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {placements.map((p, i) => (
              <Link
                to="/placements"
                key={i}
                className="snap-start shrink-0 w-[260px] group"
              >
                <div className="relative bg-background rounded-2xl border-2 border-primary/20 overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300 h-[340px] flex flex-col">
                  {/* Top red accent */}
                  <div className="bg-primary px-4 py-2 flex items-center justify-between">
                    <span className="text-primary-foreground text-xs font-bold tracking-wide">🎓 Batch {p.batch}</span>
                    <span className="text-primary-foreground/80 text-[10px] font-medium">ASB</span>
                  </div>

                  {/* Congratulations banner */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 text-center">
                    <p className="text-primary font-display font-bold text-sm italic">Congratulations!</p>
                  </div>

                  {/* Avatar */}
                  <div className="flex justify-center py-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-primary font-display font-bold text-xl">{getInitials(p.name)}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-4 text-center flex-1 flex flex-col justify-between pb-4">
                    <div>
                      <h3 className="font-display font-bold text-foreground text-sm leading-tight mb-1">{p.name}</h3>
                      <p className="text-muted-foreground text-xs mb-3">{p.role}</p>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
                        <GraduationCap className="h-3.5 w-3.5 text-primary" />
                        <span className="text-primary font-semibold text-xs">Placed at {p.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <SectionFadeIn>
          <div className="text-center mt-8">
            <Link
              to="/placements"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Placements →
            </Link>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
};

export default PlacementCarousel;
