"use client";

import { useState } from "react";
import { Copy, Check, Phone, Contact2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

function useCopy() {
  const [copied, setCopied] = useState(false);

  function copy(value: string) {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return { copied, copy };
}

export function ContactContent() {
  const { locale } = useLocale();
  const t = dict.contactPage;
  const emailCopy = useCopy();
  const phoneCopy = useCopy();

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-20 text-center sm:py-28">
      <Reveal className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t.title[locale]}
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">{t.text[locale]}</p>
        <span dir="ltr" className="text-lg font-medium text-indigo">
          {siteConfig.email}
        </span>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button
          size="lg"
          className="rounded-full bg-navy text-navy-foreground hover:bg-navy/90"
          onClick={() => emailCopy.copy(siteConfig.email)}
        >
          {emailCopy.copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {emailCopy.copied ? t.emailCopied[locale] : t.copyEmail[locale]}
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full"
          onClick={() => phoneCopy.copy(siteConfig.phone)}
        >
          {phoneCopy.copied ? <Check className="size-4" /> : <Phone className="size-4" />}
          {phoneCopy.copied ? t.phoneCopied[locale] : t.copyPhone[locale]}
        </Button>
        {siteConfig.social.linkedin && (
          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
            nativeButton={false}
            render={<a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" />}
          >
            <Contact2 className="size-4" />
            {t.linkedin[locale]}
          </Button>
        )}
      </Reveal>
    </div>
  );
}
