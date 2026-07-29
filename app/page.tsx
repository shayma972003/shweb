import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { AiLabPreview } from "@/components/home/ai-lab-preview";
import { CertificationsSection } from "@/components/home/certifications-section";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AiLabPreview />
      <CertificationsSection />
      <ContactCta />
    </>
  );
}
