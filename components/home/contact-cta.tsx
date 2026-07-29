import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <Reveal>
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-gradient-to-br from-navy to-indigo px-8 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="max-w-xl text-white/80">
            I&apos;m always interested in building useful software, exploring AI agents, and
            working on challenging technical problems.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-white text-navy hover:bg-white/90"
            nativeButton={false}
            render={<Link href={`mailto:${siteConfig.email}`} />}
          >
            <Mail className="size-4" />
            Get in Touch
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
