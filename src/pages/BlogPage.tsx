import { Link } from "react-router-dom";
import SectionFadeIn from "@/components/SectionFadeIn";
import blogHero from "@/assets/blog-mba-finance.jpg";
import blogOverview from "@/assets/blog-finance-overview.jpg";

const BlogPage = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary section-padding">
        <div className="container-wide">
          <SectionFadeIn>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">ASB Blog</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Insights & Articles</h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Expert perspectives on management education, career growth, and industry trends.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <SectionFadeIn>
            <article>
              <img src={blogHero} alt="MBA Finance classroom" className="w-full h-64 md:h-96 object-cover rounded-xl mb-8" />
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">Featured</span>
                <span className="text-sm text-muted-foreground">March 2026</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Is an MBA in Finance Really That Difficult? Here's What You Need to Know
              </h2>

              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Earning an MBA with a focus on finance is one of the most respected achievements in the business world. Yet, it's also considered one of the toughest programs out there. Many prospective students often wonder—is it really that difficult? This article clears the air, exploring what makes this specialization demanding, what students actually experience, and how it blends finance with leadership development.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">What an MBA in Finance Is All About</h3>
                <p>
                  An MBA in Finance is designed to develop a deep understanding of financial systems, investment practices, and corporate money management. Students learn about financial reporting, investment strategies, risk assessment, and market operations.
                </p>
                <p>
                  This course suits individuals who want to combine strong financial expertise with leadership abilities, preparing them for roles such as corporate finance managers, financial consultants, investment analysts, and banking professionals. Many Hyderabad MBA colleges offer well-structured programs that balance technical learning with practical business exposure.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">The Level of Academic Challenge</h3>
                <p>
                  One of the major concerns surrounding an MBA in Finance is its reputation for being academically intense. The coursework demands logical thinking, numerical skills, and comfort with statistics and mathematics. Topics like financial modeling, valuation techniques, and quantitative methods can initially feel complex—especially for those from non-finance or non-mathematical backgrounds.
                </p>
                <p>
                  However, the difficulty level isn't uniform for everyone. Students who've previously dealt with basic finance concepts often adapt faster. Ultimately, success depends less on raw mathematical ability and more on consistent practice, self-discipline, and taking advantage of resources like peer discussions, academic mentoring, or faculty support.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">Balancing Finance With Management</h3>
                <img src={blogOverview} alt="Finance overview" className="w-full h-56 object-cover rounded-xl my-6" />
                <p>
                  A unique aspect of this specialization is how it merges financial learning with management training. Most MBA programs are structured to help students not only analyze financial data but also make sound business decisions aligned with organizational goals.
                </p>
                <p>
                  Apart from finance-related subjects, students also study leadership, strategy, and communication. These managerial courses complement financial studies, teaching how to apply technical knowledge in decision-making, teamwork, and strategic execution. As a result, graduates emerge as professionals who understand both financial systems and human dynamics within businesses.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">Clearing Up Common Misconceptions</h3>
                
                <div className="space-y-6">
                  <div className="bg-secondary rounded-xl p-6">
                    <h4 className="font-display font-bold text-foreground mb-2">Myth 1: It's Only for People Good at Math</h4>
                    <p className="text-sm">It's a widespread belief that only math experts can succeed in this specialization. In reality, most MBA programs guide students through financial calculations and quantitative reasoning step by step. With determination and regular practice, anyone can grasp the required skills.</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-6">
                    <h4 className="font-display font-bold text-foreground mb-2">Myth 2: It's Just About Numbers With No Practical Value</h4>
                    <p className="text-sm">Another misunderstanding is that the program focuses solely on theories and endless equations. In truth, finance courses are heavily application-based, integrating case studies, real-world simulations, and internships that demonstrate how financial principles apply to actual business challenges.</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-6">
                    <h4 className="font-display font-bold text-foreground mb-2">Myth 3: It's Impossible to Manage With Other Responsibilities</h4>
                    <p className="text-sm">Balancing academic demands with work or family life can feel daunting, but with organized planning and time management, it's entirely possible. Many learners pursue this program successfully alongside their professional or personal obligations.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">Why an MBA in Finance Is Worth It</h3>
                <p>
                  An MBA specializing in finance offers both intellectual growth and strong career prospects. Graduates often find opportunities across industries, from banking and corporate management to consulting and investment firms. The blend of financial expertise and leadership skills makes them highly valuable in roles requiring analytical decision-making and strategic insight.
                </p>
                <p>
                  Moreover, this qualification opens doors to senior positions and competitive salaries. It shapes professionals who not only understand numbers but can interpret them to drive organizational growth.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">Is It Really That Difficult?</h3>
                <p>
                  The challenge level of an MBA in Finance depends largely on each student's background, motivation, and ability to manage time effectively. While the program demands effort and focus, it's equally rewarding—helping individuals gain practical, analytical, and leadership competencies that last a lifetime.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">Program Overview</h3>
                <p>
                  A typical MBA in Finance program combines theoretical knowledge with practical exposure. Students dive into subjects like corporate financial management, portfolio analysis, banking systems, and economic policy. Many institutions also allow learners to specialize in niche areas such as FinTech, risk analysis, or investment management, ensuring they're equipped to tackle real-world industry challenges.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">Final Thoughts</h3>
                <p>
                  An MBA in Finance is not just about complex equations—it's about mastering the art of financial decision-making, strategic planning, and leadership. Though the course requires effort and commitment, it rewards graduates with lasting skills and a strong foundation for success in the business and finance sectors.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary rounded-xl text-center">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">Interested in PGDM Finance & FinTech?</h3>
                <p className="text-muted-foreground mb-6">Explore ASB's industry-aligned finance program with FinTech integration.</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link to="/pgdm/finance-fintech" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                    Explore Program
                  </Link>
                  <Link to="/contact" className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
                    Apply Now
                  </Link>
                </div>
              </div>
            </article>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
