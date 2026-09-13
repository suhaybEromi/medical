import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import DepartmentSection from "../components/DepartmentSection";
import DoctorsSection from "../components/DoctorsSection";
import HowItWorks from "../components/HowItWorks";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <ServicesSection />
        <DepartmentSection />
        <DoctorsSection />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
      {/* <Footer /> */}
    </>
  );
}

// Contact → Footer
