import AboutSection from "../components/AboutSection";
import AppointmentSection from "../components/AppointmentSection";
import ContactSection from "../components/ContactSection";
import DepartmentsSection from "../components/DepartmentsSection";
import DoctorsSection from "../components/DoctorsSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RevealOnScroll from "../components/RevealOnScroll";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />

      <RevealOnScroll>
        <ServicesSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <DepartmentsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <DoctorsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <AppointmentSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <TestimonialsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </div>
  );
}
