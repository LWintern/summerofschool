import Portfolio from "@/components/customComponents/AboutMentor";
import ImageGallery from "@/components/customComponents/Gallery";
import ContentDiscovery from "@/components/customComponents/HeroPage";
import Testimonials from "@/components/customComponents/Testimonials";
import EnhancedMedicalServices from "@/components/customComponents/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <ContentDiscovery />
   <Testimonials />
   <Portfolio />
   <ImageGallery />
   </>  );
}
