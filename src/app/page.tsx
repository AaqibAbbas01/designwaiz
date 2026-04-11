import HeroCarousel from "@/components/home/HeroCarousel";
import CompanyPrinciples from "@/components/home/CompanyPrinciples";
import VideoShowcase from "@/components/home/VideoShowcase";
import DesignIdeas from "@/components/home/DesignIdeas";
import VastuChecker from "@/components/home/VastuChecker";
import FreeConsultation from "@/components/home/FreeConsultation";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GoogleReviews from "@/components/home/GoogleReviews";
import TestimonialsVideo from "@/components/home/TestimonialsVideo";
import BrandPartners from "@/components/home/BrandPartners";
import BottomCTA from "@/components/home/BottomCTA";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CompanyPrinciples />
      <VideoShowcase />
      <DesignIdeas />
      <VastuChecker />
      <FreeConsultation />
      <WhyChooseUs />
      <GoogleReviews />
      <TestimonialsVideo />
      <BrandPartners />
      <BottomCTA />
    </>
  );
}

