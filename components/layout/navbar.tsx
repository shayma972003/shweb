"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {siteConfig.name[locale]}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
                  active && "text-foreground",
                )}
              >
                {dict.nav[item.key][locale]}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button
            size="sm"
            className="rounded-full bg-navy text-navy-foreground hover:bg-navy/90"
            nativeButton={false}
            render={<a href="/Shaima CV.pdf" download />}
          >
            {dict.nav.downloadCv[locale]}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={dict.nav.openMenu[locale]}
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{siteConfig.name[locale]}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4 pb-6">
                {siteConfig.nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                      />
                    }
                  >
                    {dict.nav[item.key][locale]}
                  </SheetClose>
                ))}
                <SheetClose>
                  <a
                    href="/Shaima CV.pdf"
                    download
                    className="mt-3 rounded-full bg-navy px-3 py-2.5 text-center text-base font-medium text-navy-foreground block"
                  >
                    {dict.nav.downloadCv[locale]}
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
