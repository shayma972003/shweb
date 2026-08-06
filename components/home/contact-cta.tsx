"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function ContactCta() {
  const { locale, dir } = useLocale();
  const ForwardArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <Reveal>
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-gradient-to-br from-navy to-indigo px-8 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {dict.home.ctaTitle[locale]}
          </h2>
          <p className="max-w-xl text-white/80">{dict.home.ctaText[locale]}</p>
          <Button
            size="lg"
            className="rounded-full bg-white text-navy hover:bg-white/90"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            {dict.home.getInTouch[locale]}
            <ForwardArrow className="size-4" />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
