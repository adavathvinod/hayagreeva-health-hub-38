import EmergencyHeader from "@/components/EmergencyHeader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecialitiesPreview from "@/components/SpecialitiesPreview";
import ReviewsWidget from "@/components/ReviewsWidget";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hayagreeva Multispeciality Hospital | 24/7 Healthcare in Vanasthalipuram</title>
        <meta
          name="description"
          content="Hayagreeva Multispeciality Hospital - Your trusted healthcare partner in Vanasthalipuram, Hyderabad. 24/7 emergency care, expert specialists, advanced diagnostics. Call 085004 19555"
        />
        <meta name="keywords" content="hospital vanasthalipuram, multispeciality hospital hyderabad, 24 hour hospital, emergency care, orthopedics, gynecology, pediatrics" />
        <link rel="canonical" href="https://hayagreevahospitals.com" />
      </Helmet>
      
      <div className="min-h-screen">
        <EmergencyHeader />
        <Navbar />
        <main>
          <HeroSection />
          <SpecialitiesPreview />
          <ReviewsWidget />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default Index;
