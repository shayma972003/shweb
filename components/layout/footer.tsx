import Link from "next/link";
import { Mail, Code2, Contact2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-base font-semibold text-foreground">{siteConfig.name}</span>
          <span className="text-sm text-muted-foreground">{siteConfig.title}</span>
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
                {item.label}
              </Link>
            ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`mailto:${siteConfig.email}`}
            aria-label="Email Shayma Samir"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="size-4" />
          </Link>
          <span
            aria-label="GitHub — coming soon"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground/50"
          >
            <Code2 className="size-4" />
          </span>
          <span
            aria-label="LinkedIn — coming soon"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground/50"
          >
            <Contact2 className="size-4" />
          </span>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
