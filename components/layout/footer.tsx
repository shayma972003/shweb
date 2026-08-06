"use client";

import Link from "next/link";
import { Mail, Phone, Contact2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-base font-semibold text-foreground">{siteConfig.name[locale]}</span>
          <span className="text-sm text-muted-foreground">{siteConfig.title[locale]}</span>
        </div>

        <div className="flex flex-col gap-1.5 text-sm">
          {siteConfig.nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {dict.nav[item.key][locale]}
              </Link>
            ))}
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4 shrink-0" />
            <span dir="ltr">{siteConfig.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4 shrink-0" />
            <span dir="ltr">{siteConfig.phone}</span>
          </a>
          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Contact2 className="size-4 shrink-0" />
              <span>{dict.footer.linkedin[locale]}</span>
            </a>
          )}
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 {siteConfig.name[locale]}. {dict.footer.rights[locale]}
      </div>
    </footer>
  );
}
