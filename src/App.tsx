import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import BBAPage from "./pages/BBAPage";
import PGDMPage from "./pages/PGDMPage";
import PGDMSecuritiesPage from "./pages/PGDMSecuritiesPage";
import PGDMAIDataSciencePage from "./pages/PGDMAIDataSciencePage";
import PGDMMarketingPage from "./pages/PGDMMarketingPage";
import PGDMFinancePage from "./pages/PGDMFinancePage";
import PGDMHRPage from "./pages/PGDMHRPage";
import PGDMAgriBizPage from "./pages/PGDMAgriBizPage";
import PlacementsPage from "./pages/PlacementsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bba" element={<BBAPage />} />
          <Route path="/pgdm" element={<PGDMPage />} />
          <Route path="/pgdm/securities-markets" element={<PGDMSecuritiesPage />} />
          <Route path="/pgdm/ai-data-science" element={<PGDMAIDataSciencePage />} />
          <Route path="/pgdm/marketing-analytics" element={<PGDMMarketingPage />} />
          <Route path="/pgdm/finance-fintech" element={<PGDMFinancePage />} />
          <Route path="/pgdm/hr-analytics" element={<PGDMHRPage />} />
          <Route path="/pgdm/agri-business" element={<PGDMAgriBizPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
