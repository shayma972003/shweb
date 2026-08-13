"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import homeHero from "@/public/home-hero.webp";
import { siteConfig } from "@/data/site-config";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { locale, dir } = useLocale();
  const ForwardArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">
              {siteConfig.title[locale]}
            </span>
          </div>

          <h1 className="whitespace-pre-line text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.tagline[locale]}
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            {siteConfig.heroSupporting[locale]}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="lg"
              className="rounded-full bg-navy text-navy-foreground hover:bg-navy/90"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              {dict.home.viewProjects[locale]}
              <ForwardArrow className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              nativeButton={false}
              render={<Link href="/ai-lab" />}
            >
              {dict.home.exploreAiLab[locale]}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Image
            src={homeHero}
            alt={`${siteConfig.name[locale]} — ${siteConfig.title[locale]}`}
            className="h-auto w-full lg:scale-130 lg:ms-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
