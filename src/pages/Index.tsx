import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NumbersSection from "@/components/NumbersSection";
import BenefitsSection from "@/components/BenefitsSection";
import EmployeesSection from "@/components/EmployeesSection";
import PresidentSection from "@/components/PresidentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <NumbersSection />
      <BenefitsSection />
      <EmployeesSection />
      <PresidentSection />
      <Footer />
    </div>
  );
};

export default Index;
