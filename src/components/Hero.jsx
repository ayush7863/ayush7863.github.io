import { useState } from 'react';
import { hero, profile, socials } from '../data/portfolio';
import { Beacon, Icon, toneText } from './ui';

function Portrait() {
  const [failed, setFailed] = useState(!profile.portrait);

  return (
    <div className="relative w-72 lg:w-80">
      {/* Diffuse telemetry halo — the one decorative glow on the page */}
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-emerald-500/15 via-transparent to-cyan-500/10 blur-lg"
      />
      <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/80 p-2.5 shadow-2xl backdrop-blur-xl">
        <div className="aspect-square overflow-hidden rounded-lg bg-slate-950">
          {failed ? (
            <div className="flex h-full w-full items-center justify-center font-headline text-6xl font-bold tracking-tight text-slate-700">
              {profile.initials}
            </div>
          ) : (
            <img
              src={profile.portrait}
              alt={`${profile.name}, portrait`}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-center grayscale-[15%]"
            />
          )}
        </div>
        <div className="flex items-center justify-between px-1 pb-1 pt-3 font-code text-[12px]">
          <span className="flex items-center gap-2 text-slate-300">
            <Beacon live={profile.available} />
            {profile.location}
          </span>
          {profile.available && <span className="font-medium text-emerald-400">Available</span>}
        </div>
      </div>
    </div>
  );
}

function Summary() {
  const [before, after] = hero.summary.split(hero.summaryEmphasis);
  return (
    <p className="max-w-xl text-lg leading-relaxed text-slate-400">
      {before}
      <span className="font-medium text-slate-200">{hero.summaryEmphasis}</span>
      {after}
    </p>
  );
}

export default function Hero() {
  return (
    <section id="overview" className="relative w-full py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-code text-[12px]">
            <Beacon live size="h-2 w-2" />
            <span className="font-medium text-emerald-400">{hero.status}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">{hero.statusDetail}</span>
          </div>

          <h1 className="font-headline text-4xl font-bold leading-[1.15] tracking-tight text-white lg:text-5xl">
            {hero.headline.map((part, i) => (
              <span key={i} className={part.accent ? toneText[part.accent] : undefined}>
                {part.text}
              </span>
            ))}
          </h1>

          <Summary />

          <div className="flex w-full flex-wrap items-center gap-4 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 font-code text-[13px] font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              Explore featured work
              <Icon name="arrow_forward" className="text-[16px]" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/80 px-5 py-2.5 font-code text-[13px] text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              <Icon name="calendar_today" className="text-[16px]" />
              Schedule intro
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-1 font-code text-[12px] text-slate-500">
            {socials.map((s, i) => (
              <span key={s.label} className="flex items-center gap-5">
                {i > 0 && <span className="text-slate-800">/</span>}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-emerald-400"
                >
                  <Icon name={s.icon} className="text-[15px]" />
                  {s.label}
                </a>
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <Portrait />
        </div>
      </div>

      {/* Telemetry strip */}
      <div className="mt-20 grid grid-cols-2 gap-6 rounded-xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-xl md:grid-cols-4 lg:p-8">
        {hero.stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <div className="mono-label">{stat.label}</div>
            <div
              className={`font-headline text-3xl font-bold tracking-tight lg:text-4xl ${
                stat.tone === 'neutral' ? 'text-white' : toneText[stat.tone]
              }`}
            >
              {stat.value}
            </div>
            <div className="text-[13px] text-slate-400">{stat.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
