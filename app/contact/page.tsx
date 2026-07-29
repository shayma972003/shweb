import { Metadata } from "next";
import { Mail, Code2, Contact2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shayma Samir by email.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-20 text-center sm:py-28">
      <Reveal className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s Connect
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Have a project, opportunity, or interesting idea? Feel free to reach out.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-lg font-medium text-indigo underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {siteConfig.email}
        </a>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button
          size="lg"
          className="rounded-full bg-navy text-navy-foreground hover:bg-navy/90"
          nativeButton={false}
          render={<a href={`mailto:${siteConfig.email}`} />}
        >
          <Mail className="size-4" />
          Email Me
        </Button>
        <Button
          disabled
          size="lg"
          variant="outline"
          className="rounded-full opacity-60"
          aria-label="GitHub — coming soon"
        >
          <Code2 className="size-4" />
          GitHub — Coming soon
        </Button>
        <Button
          disabled
          size="lg"
          variant="outline"
          className="rounded-full opacity-60"
          aria-label="LinkedIn — coming soon"
        >
          <Contact2 className="size-4" />
          LinkedIn — Coming soon
        </Button>
      </Reveal>
    </div>
  );
}
