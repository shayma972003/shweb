import { Metadata } from "next";
import { ContactContent } from "@/components/shared/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shaima Alashaab by email.",
};

export default function ContactPage() {
  return <ContactContent />;
}
