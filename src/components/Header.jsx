import { useEffect, useRef, useState } from "react";
import { nav, profile } from "../data/portfolio";
import { Beacon, Icon } from "./ui";

/** Highlights the nav item whose section is currently in view. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  // Persists each section's last known ratio across callbacks — a single
  // IntersectionObserver callback only reports the sections whose ratio just
  // crossed a threshold, not every currently-observed section, so comparing
  // within one callback's entries alone can miss the section that's actually
  // most visible.
  const ratios = useRef(new Map());

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        ratios.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId) setActive(bestId);
      },
      // Bias the trigger line toward the upper third of the viewport so the
      // highlight changes when a section actually takes over the screen.
      // `0` is included so even a sliver of a tall section still fires a
      // callback instead of never registering.
      { rootMargin: "-96px 0px -55% 0px", threshold: [0, 0.05, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Header() {
  const ids = nav.map((n) => n.id);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-shell rounded-2xl border border-slate-800/80 bg-[#0a0e17]/85 px-4 py-2.5 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          {/* Identity */}
          <a href="#overview" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900 font-code text-xs font-bold text-emerald-400 transition-colors group-hover:border-emerald-500/50">
              {profile.initials}
            </span>
            <span className="flex flex-col">
              <span className="flex items-center gap-1.5 leading-none">
                <span className="font-headline text-[14px] font-bold tracking-tight text-white transition-colors group-hover:text-emerald-400">
                  {profile.name}
                </span>
                {profile.available && (
                  <span className="hidden sm:inline-flex">
                    <Beacon live />
                  </span>
                )}
              </span>
              <span className="mt-0.5 font-code text-[11px] tracking-tight text-slate-400">
                {profile.tagline}
              </span>
            </span>
          </a>

          {/* Segmented nav */}
          <nav
            aria-label="Sections"
            className="hidden items-center gap-1 rounded-xl border border-slate-800/80 bg-[#060911]/90 p-1 md:flex"
          >
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-1.5 font-code text-[12px] transition-colors ${
                    isActive
                      ? "border border-emerald-500/20 bg-emerald-950/40 font-medium text-emerald-400"
                      : "border border-transparent text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Status + actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {profile.available && (
              <span className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/40 px-2.5 py-1 font-code text-[11px] font-medium text-emerald-400 lg:inline-flex">
                <Beacon live />
                {profile.availabilityNote}
              </span>
            )}

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 font-code text-[12px] font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              <Icon name="download" className="text-[15px]" />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-slate-100 md:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="text-[20px]" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav
            id="mobile-nav"
            aria-label="Sections"
            className="mt-3 grid grid-cols-2 gap-1 border-t border-slate-800/80 pt-3 md:hidden"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 font-code text-[12px] transition-colors ${
                  active === item.id
                    ? "bg-emerald-950/40 text-emerald-400"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
