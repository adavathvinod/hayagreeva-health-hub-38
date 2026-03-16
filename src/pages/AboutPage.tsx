import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionFadeIn from "@/components/SectionFadeIn";
import { Eye, Target, GraduationCap, Users, BookOpen, Microscope } from "lucide-react";

const governingCouncil = [
  { name: "Debashish Ghosh", title: "SVP & Country HR Head, Berkadia", bio: "Mr. Debashish Ghosh is Senior VP & Country HR Head at Berkadia with 20+ years of experience across leading global organizations. An alumnus of IIM Calcutta and XLRI, he holds SHRM-SCP® and GTML™ certifications. Featured among \"India's 50 Best HR Leaders\" by Forbes and \"Top 10 HR Leaders\" by Silicon India." },
  { name: "Srinivas Taluka", title: "Vice President, T-Hub", bio: "A seasoned management professional with 25 years of experience, currently contributing to T-Hub's mission of fostering innovation and entrepreneurship. Known for driving operational excellence, team leadership, and enhancing employee experience. Passionate about mentoring students, impacting over 10,000 through talks on entrepreneurship." },
  { name: "Laxminarayanan G", title: "Head, AI & Transformation, IIM Faculty", bio: "A business leader and consultant with nearly two decades of experience in AI, data analytics, and digital strategy. An IIM Lucknow alumnus, he has led transformative projects for Fortune 500 firms and is a visiting faculty at top institutions like IIMs and IITs." },
  { name: "Dr. Elton Ron Nathan", title: "Group Head – L&D, Apollo Health and Lifestyle Limited", bio: "Head of L&D at Apollo Health & Lifestyle Ltd., with 25+ years of HR and OD experience. He has led award-winning leadership and talent development initiatives, recognized by ET, ISTD, and Newsweek. A certified coach and NLP practitioner." },
  { name: "Dr. Murthy Devarabhotla", title: "Global President, The Diplomatic Club", bio: "A global leader in trade diplomacy, cultural collaboration, and strategic consulting. He serves as Global President of The Diplomatic Club and Chairman of Travian Group. He has received numerous international awards for contributions to peace, diplomacy, and business." },
  { name: "Dr. Pavan Kumar Damaraju", title: "Program Director, TCS", bio: "A seasoned data science and statistics expert with over 28 years of experience, currently serving as Senior Manager at TCS, leading AI/GenAI programs. He holds a Ph.D. in Statistics from Osmania University and has been awarded a patent in HR analytics." },
  { name: "Raja Vadlamani", title: "President-Supply Chain, Seed Works International", bio: "A veteran in the agricultural seed supply chain industry with over 38 years of experience. He has led SeedWorks' transformation from a startup to a top-tier seed company through innovation, sustainability, and digital integration." },
  { name: "Puneet Gupta", title: "Vice President, Tech Mahindra", bio: "A global executive with 30 years of experience in Sales, Strategy, Operations, and Technology Consulting across top firms like IBM, Deloitte, Accenture, and TechM. He has led multi-million-dollar deals and built large global teams." },
  { name: "Navish Reddy", title: "CEO & Co-Founder, Leo 1", bio: "Co-Founder and COO of LEO1, an edu-fintech firm transforming education financing in India. An IIT Bombay alumnus, he leads operations, strategy, and partnerships. Under his leadership, LEO1 has impacted over 12,000 institutions." },
  { name: "T.V. Shiva Rao", title: "CEO, Future Labs", bio: "A management professional with 30 years of experience in manufacturing, services, and business leadership. He currently serves as Regional Director at IOD, Consultant at TGCHE, and Chief Adviser at Future Labs." },
  { name: "Pradeep Bharade", title: "CEO & Founder, PowerUrBiz Solutions", bio: "Founder & CEO of PowerUrBiz, a consulting and marketing firm focused on scaling businesses through strategy and digital innovation. With 15+ years of experience, he previously led expansion initiatives at Paytm as AVP." },
];

const academicCouncil = [
  { name: "Arun Kumar", title: "Data Scientist, Associate Manager, PepsiCo", bio: "An experienced Data Scientist and AI Consultant specializing in machine learning, statistical modeling, and AI integration. He has led AI initiatives at global companies like PepsiCo and Google." },
  { name: "Bhanu Prakash", title: "VP - Head CSR, Spandana Spoorthy Financial Limited", bio: "Vice President & Head of CSR with 20+ years of experience across diverse sectors. He leads initiatives in women's empowerment, health, sustainability, and financial literacy." },
  { name: "Prof. Chetan Srivastava", title: "Professor, Hyderabad Central University (HCU)", bio: "A senior faculty at the School of Management Studies, University of Hyderabad, with 25 years of experience. An award-winning educator known for marketing, strategic management, and academic leadership." },
  { name: "Devi Prasad Uppala", title: "Finance Professional & Academic Advisor", bio: "A finance professional with 17+ years of experience in investment banking, capital markets, and financial education. A Chartered FRM who has trained over 50,000 professionals." },
  { name: "Dr. Ch S Durga Prasad", title: "Academic Leader, AIMS", bio: "Executive Director of AIMS, with nearly 35 years of experience in academics, industry, and research. He has guided 8 Ph.D. scholars and published 25+ papers." },
  { name: "G.V. Subbareddy", title: "VP - Sales & Marketing, Coromandel", bio: "Vice President at Coromandel International Ltd. with 42+ years in the agri-sector. He has led a ₹5000+ crore business and conducted 500+ farmer seminars." },
  { name: "Harsha Vardhan", title: "MD, Medha Research and Consulting", bio: "Managing Director specializing in strategy and market intelligence. Named \"Top 10 Market Research Leader\" by CEO Insights in 2021." },
  { name: "Kishore Kumar", title: "CEO, Excelytics", bio: "Founder & CEO of Team Excelytics, with 16+ years of experience in Business Intelligence, AI, and Data Analytics. A Microsoft Certified Trainer." },
  { name: "Dr. P. Murugan", title: "Researcher, Hyderabad Central University (HCU)", bio: "Assistant Professor at the School of Management Studies, University of Hyderabad. Chancellor's Award recipient with expertise in data analysis and structural modeling." },
  { name: "Dr. Pradeep Racherla", title: "Professor, Mahindra University", bio: "Associate Dean and Professor of Marketing specializing in digital transformation. Over 3,000 citations. Worked with major brands like Pepsi, Nestle, and Diageo." },
  { name: "Rajendra Krishna Prasad Peddi", title: "VP, Hyderabad Management Association", bio: "A seasoned engineering professional with over 35 years of experience in production, operations, and project management." },
  { name: "Ram Gopal", title: "CEO, ARGS Consultants", bio: "Founding Director with 32 years of experience in industrial packaging and manufacturing operations. Empanelled trainer and consultant with CII." },
  { name: "V. Ravi Kumar", title: "Director-Alliance, AlgaEnergy S.A.", bio: "A seasoned agri-business leader with 21 years of experience in sales, marketing, and business development." },
  { name: "Dr. Ravindra Penmatsa", title: "Certified Life & Executive Coach, Acumentor", bio: "40 years of experience across NTPC, SAIL, and Tech Mahindra. An IIT Kharagpur alumnus with a PhD in Well-Being. Certified ICF coach." },
  { name: "Srinivas Rao", title: "HR, LNB Group", bio: "21 years of HR leadership experience. Currently GM – HR at LN Bangur Group, specializing in HR digitalization and talent management." },
  { name: "Sudhir Kumar", title: "Former Director, Ni-MSME", bio: "30+ years in the Ministry of MSME, leading entrepreneurship and MSME development initiatives across Telangana and Andhra Pradesh." },
  { name: "C. Vamsi Krishna", title: "CEO, AgriSensei", bio: "19 years of experience in the Indian Agri-Input sector. Specializes in AgriTech, branding, P&L management, and team development." },
  { name: "Dr. Vengalarao Pachava", title: "Asst. Professor, NMIMS", bio: "Ph.D. in Management with expertise in business analytics, AI, and data science. Certified in SAS and Power BI." },
];

const faculty = [
  { name: "Dr. Y. Lakshman Kumar", role: "Director" },
  { name: "Dr. Gajanethi Swathi Kumari", role: "Dean - Academics" },
  { name: "Dr. Sabitha Godasu", role: "Professor & Chief – Innovation and Entrepreneurship" },
  { name: "Prof. Maruti Prabhakar", role: "Head - Strategic Initiative & Associate Professor" },
  { name: "Prof. Mirza Rafathulla Baig", role: "Head - International Affairs & Associate Professor" },
  { name: "Prof. Anuradha Vuyyuru", role: "Assistant Professor" },
  { name: "Dr. B Rajender Goud", role: "Associate Professor" },
  { name: "Prof. Gandhy Prashanth Kumar", role: "Assistant Professor" },
  { name: "Prof. Rajesh Pershad", role: "Associate Professor" },
  { name: "Prof. Sripriya Gurazada", role: "Assistant Professor" },
  { name: "Prof. I Gopi Naik", role: "Assistant Professor" },
  { name: "Devi Prasad Uppala", role: "Professor of Practice" },
  { name: "Harshavardhan S. R. Gaddalae", role: "Professor of Practice" },
  { name: "Dr Mohsin Khan", role: "Visiting Faculty" },
  { name: "Prof. R. Sathish", role: "Visiting Faculty" },
  { name: "Dr. Pramod K Mishra", role: "Visiting Faculty" },
  { name: "Kishor Kumar Ananthapalli", role: "Visiting Faculty" },
  { name: "V. Padmavathi", role: "Visiting Faculty" },
  { name: "Dr. Jaya Krishna V", role: "Visiting Faculty" },
  { name: "Mushtaq Ali", role: "Visiting Faculty" },
  { name: "Dr. T. Sudha", role: "Visiting Faculty" },
  { name: "Dr. A G Jayashree", role: "Founder & Director, KADAL Consulting" },
  { name: "Ms. Koustubha Priya Mudigonda", role: "Assistant Professor, Dept. of AIDS" },
  { name: "Ms. Nikita Goel", role: "Assistant Professor of English" },
];

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-wide px-4 text-center">
          <SectionFadeIn>
            <h1 className="font-display text-4xl md:text-5xl font-black text-primary-foreground mb-4">
              About Ashoka School of Business
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
              Empowering future leaders through global exposure, innovative education, and entrepreneurial growth.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* About ASB */}
      <section id="about" className="section-padding bg-background">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="max-w-4xl mx-auto">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About ASB</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose Us</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Set up in a 30-acre lush green environs, ASB offers PGDM programs and promises a very high ROI. The students will have an advantage of studying in Hyderabad, a city which is throbbing with start-ups by young graduates with out-of-the-box concepts.
                </p>
                <p>
                  ASB offers PGDM programs blended with disruptive technologies. With faculty from across the globe, a curriculum that is unique and exclusive to ASB, with Industry experts adopting students for industrial training and personality development, ASB aspires to be among the top B-Schools in India. ASB symbolizes the maturing of Indian Technical and Management ability and "can-do" entrepreneurial spirit, especially as derived from the private sector.
                </p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="section-padding bg-secondary">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To deliver world class facilities that support brilliance in Management Education, Research, Teaching and Learning.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our Mission is to contribute to the society through the pursuit of Education Learning and Research at the International level of Excellence.
                </p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Founder & Director Messages */}
      <section id="leadership" className="section-padding bg-background">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Messages from Our Leaders</h2>
            </div>
          </SectionFadeIn>

          <div className="space-y-12 max-w-4xl mx-auto">
            <SectionFadeIn>
              <div className="bg-secondary rounded-xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="text-sm text-primary font-semibold uppercase tracking-widest">Founder & Chairman</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Nomula Ashok Kumar</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Since the inception of Ashoka School Business our aim is to provide a scholastically exhilarating environment consenting our students to feel more responsible towards the society. It is pleasing to note that our intensive efforts under the auspices of Ashok Sailaja Educational Society have fructified and ASB today enjoys the distinction in the fields of Management Education with Tech-enabled Industry demand programs.
                  </p>
                  <p>
                    I strongly believe that education ought to be "good" or "moral" and for this reason it is important to groom the students morally for the real life of the corporate world and imbibe in them not only academic brilliance but also professional ethics.
                  </p>
                </div>
              </div>
            </SectionFadeIn>

            <SectionFadeIn>
              <div className="bg-secondary rounded-xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="text-sm text-primary font-semibold uppercase tracking-widest">Director</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Dr. Y Lakshman Kumar</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    It is my pleasure to welcome you to ASB, where we are dedicated to shaping not just professionals, but visionary leaders equipped to thrive in a dynamic global business environment. The two-year PGDM & PGDM (AI&DS) programs at ASB is a transformative journey that blends rigorous academic training with immersive industry exposure.
                  </p>
                  <p>
                    Our carefully crafted curriculum—designed in collaboration with top academicians and industry leaders—focuses on strengthening both core and functional business knowledge. Complementing this are value-added certifications, aptitude and personality development sessions, language and communication training, and hands-on simulations.
                  </p>
                  <p>
                    At ASB, learning goes beyond the classroom—we offer you the independence and responsibility to lead, create, and transform. This is your opportunity to engage deeply, evolve holistically, and realize the full potential that lies within you. Seize it with purpose, passion, and persistence.
                  </p>
                </div>
              </div>
            </SectionFadeIn>
          </div>
        </div>
      </section>

      {/* Governing Council */}
      <section id="governing-council" className="section-padding bg-secondary">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Governance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Governing Council Members</h2>
            </div>
          </SectionFadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governingCouncil.map((member, i) => (
              <SectionFadeIn key={member.name} delay={i * 0.05}>
                <div className="bg-background rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Council */}
      <section id="academic-council" className="section-padding bg-background">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Academics</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academic Council Members</h2>
            </div>
          </SectionFadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicCouncil.map((member, i) => (
              <SectionFadeIn key={member.name} delay={i * 0.05}>
                <div className="bg-secondary rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-secondary">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Faculty</h2>
            </div>
          </SectionFadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {faculty.map((member, i) => (
              <SectionFadeIn key={member.name} delay={i * 0.03}>
                <div className="bg-background rounded-xl p-5 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                  <p className="text-primary text-xs font-medium mt-1">{member.role}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Consulting */}
      <section id="research" className="section-padding bg-background">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-primary font-semibold text-sm uppercase tracking-widest">Centre of Excellence</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research and Consulting</h2>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Centre is to monitor and administer Research programs for faculty and students and to encourage them to be focused on research activities by providing the necessary infrastructural set up including reputed journals and information materials on timely basis to facilitate quality research output. The objectives of the Cell are to create and promote a culture of research among the faculty and staff, to organize various workshops/seminars/trainings related to promotion of research, to enhance the research output of the institute by research paper publication in referred journals and reputed conferences, to publish an ISSN/refereed research journal of the college on annual basis.
              </p>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
