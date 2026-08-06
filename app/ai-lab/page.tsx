import { Metadata } from "next";
import { AiLabIndex } from "@/components/ai-lab/ai-lab-index";

export const metadata: Metadata = {
  title: "AI Lab",
  description:
    "Experiments and practical AI systems built around agents, automation, and intelligent tools.",
};

export default function AiLabPage() {
  return <AiLabIndex />;
}
