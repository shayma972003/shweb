"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export function Hero() {
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
            <span className="text-lg font-semibold text-foreground">{siteConfig.name}</span>
            <span className="text-sm font-medium text-muted-foreground">{siteConfig.title}</span>
          </div>

          <h1 className="whitespace-pre-line text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            {siteConfig.heroSupporting}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="lg"
              className="rounded-full bg-navy text-navy-foreground hover:bg-navy/90"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              View Projects
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" nativeButton={false} render={<Link href="/ai-lab" />}>
              Explore AI Lab
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full" nativeButton={false} render={<Link href="/resume" />}>
              Download Resume
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <ImagePlaceholder
            label="Profile photo — coming soon"
            icon={User}
            aspectRatio="aspect-square"
            className="max-w-sm lg:ml-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
