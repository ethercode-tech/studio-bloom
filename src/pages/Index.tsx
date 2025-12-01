import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { BookingWidget } from "@/components/BookingWidget";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
    document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <GallerySection />
        <PricingSection onSelectPackage={handleSelectPackage} />
        <TestimonialsSection />
        <BookingWidget preselectedService={selectedPackage} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
