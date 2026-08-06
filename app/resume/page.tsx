import { Metadata } from "next";
import { ResumeContent } from "@/components/resume/resume-content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional summary, core areas, certifications, and languages for Shaima Alashaab.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
