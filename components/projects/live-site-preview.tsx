"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LiveSitePreviewProps {
  liveUrl: string;
  title: string;
}

type Status = "loading" | "loaded" | "blocked";

const LOAD_TIMEOUT_MS = 8000;

function getDisplayUrl(liveUrl: string) {
  try {
    const url = new URL(liveUrl);
    return `${url.hostname}${url.pathname !== "/" ? url.pathname : ""}`;
  } catch {
    return liveUrl;
  }
}

export function LiveSitePreview({ liveUrl, title }: LiveSitePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<Status>("loading");
  const displayUrl = getDisplayUrl(liveUrl);

  useEffect(() => {
    setStatus("loading");
    const timeout = setTimeout(() => {
      setStatus((current) => (current === "loading" ? "blocked" : current));
    }, LOAD_TIMEOUT_MS);
    return () => clearTimeout(timeout);
  }, [liveUrl]);

  function handleLoad() {
    try {
      const href = iframeRef.current?.contentWindow?.location.href;
      // A blocked frame (X-Frame-Options / CSP) is cancelled back to
      // about:blank, which stays same-origin and readable. A real
      // cross-origin load throws when we try to read it here.
      if (!href || href === "about:blank") {
        setStatus("blocked");
        return;
      }
      setStatus("loaded");
    } catch {
      setStatus("loaded");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <Button
          variant="outline"
          className="rounded-full"
          nativeButton={false}
          render={<a href={liveUrl} target="_blank" rel="noopener noreferrer" />}
        >
          Open Live Site ↗
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
        <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex flex-1 justify-center overflow-hidden">
            <span className="max-w-[80%] truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
              {displayUrl}
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full bg-muted sm:aspect-[16/10]">
          {status !== "blocked" && (
            <iframe
              ref={iframeRef}
              src={liveUrl}
              title={`${title} — live preview`}
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              onLoad={handleLoad}
              onError={() => setStatus("blocked")}
            />
          )}

          {status === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center bg-card">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <div className="size-8 animate-spin rounded-full border-2 border-border border-t-indigo" />
                <span className="text-sm">Loading preview…</span>
              </div>
            </div>
          )}

          {status === "blocked" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-navy/[0.06] via-indigo/[0.06] to-violet/[0.08] px-6 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-white/70 shadow-sm">
                <Globe className="size-5 text-indigo" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Live preview unavailable
              </p>
              <Button
                size="sm"
                className="rounded-full"
                nativeButton={false}
                render={<a href={liveUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <ExternalLink className="size-4" />
                Open Live Site
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
