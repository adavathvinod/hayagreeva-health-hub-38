import { useState } from "react";
import { Link } from "react-router-dom";
import SectionFadeIn from "@/components/SectionFadeIn";
import newsIimcImg from "@/assets/news-iimc-talent-test.png";
import aimaImg1 from "@/assets/news-aima-1.png";
import aimaImg2 from "@/assets/news-aima-2.png";
import aimaImg3 from "@/assets/news-aima-3.png";

const newsItems = [
  {
    title: "IIMC Holds Inter College Commerce Talent Test",
    date: "April 11, 2023",
    category: "News",
    image: newsIimcImg,
    description:
      "Over 300 students drawn from 50 colleges across Telangana participated in the Inter College Commerce Talent Test, organised by Indian Institute of Management and Commerce (IIMC) in collaboration with Ashoka School of Business, Ambitions Career Counsellors, Telangana Today and Namasthe Telangana.",
  },
  {
    title: "AIMA Chanakya Regional Finale",
    date: "2023",
    category: "Events",
    image: aimaImg1,
    description:
      "ASB students participated in the AIMA Chanakya Regional Finale, showcasing their strategic management skills and competing with top B-school students from across the region.",
  },
  {
    title: "Research Paper Presentation at National Seminar",
    date: "April 12–13, 2023",
    category: "Events",
    image: aimaImg2,
    description:
      "Students participated and presented Research Paper at National Seminar on Entrepreneurship and Startups in India on 12–13th April 2023.",
  },
  {
    title: "Students Achievement at HMA",
    date: "2023",
    category: "Events",
    image: aimaImg3,
    description:
      "ASB students showcased outstanding performance at the Hyderabad Management Association events, winning accolades and demonstrating excellence in management competitions.",
  },
  {
    title: "Research Articles at ICMMETC-2023",
    date: "June 23–25, 2023",
    category: "News",
    image: aimaImg2,
    description:
      "PGDM 1st year (AI & DS) and 2nd year (AI & ML) Students of ASB Presented their research articles at an International Conference on Mathematical Modelling and Emerging Trends in Computing (ICMMETC-2023) (Collaborating with APTSMS) DST-SERB SPONSORED, at the School of Technology, Woxsen University, Hyderabad.",
  },
];

const NewsEventsPage = () => {
  const [filter, setFilter] = useState<"All" | "News" | "Events">("All");
  const filtered = filter === "All" ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary section-padding">
        <div className="container-wide">
          <SectionFadeIn>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Stay Updated</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">News & Events</h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Latest happenings, achievements, and events at Ashoka School of Business.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex gap-3 mb-10">
            {(["All", "News", "Events"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  filter === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <SectionFadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          item.category === "News"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent text-accent-foreground"
                        }`}
                      >
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{item.description}</p>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionFadeIn>
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Event Gallery</h2>
          </SectionFadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[aimaImg1, aimaImg2, aimaImg3, newsIimcImg].map((img, i) => (
              <SectionFadeIn key={i} delay={i * 0.1}>
                <img src={img} alt={`Event ${i + 1}`} className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform" />
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <SectionFadeIn>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Want to be part of ASB?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join a vibrant community of future leaders, innovators, and change-makers.
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Apply Now
            </Link>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default NewsEventsPage;
