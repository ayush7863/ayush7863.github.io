import { footer, profile } from '../data/portfolio';
import { Beacon } from './ui';

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-slate-800/80 bg-[#060911] py-8">
      <div className="mx-auto flex max-w-shell flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-[13px] text-slate-400">
          © {new Date().getFullYear()} {profile.name} · {footer.note}
        </p>

        <div className="flex items-center gap-2 font-code text-[12px] text-slate-400">
          <Beacon />
          {footer.telemetry.map((t, i) => (
            <span key={t.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-slate-700">|</span>}
              <span className={i > 0 ? 'text-emerald-400' : undefined}>
                {t.label}: {t.value}
              </span>
            </span>
          ))}
        </div>

        <nav aria-label="Elsewhere" className="flex items-center gap-4 font-code text-[12px] text-slate-400">
          {footer.links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-emerald-400"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
