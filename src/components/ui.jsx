// Small shared primitives used across every section.

/** Material Symbols glyph. `name` is the ligature, e.g. "arrow_forward". */
export function Icon({ name, className = 'text-[18px]' }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined leading-none ${className}`}>
      {name}
    </span>
  );
}

/** Circular status node. Pulses when `live`, per the telemetry beacon spec. */
export function Beacon({ tone = 'primary', live = false, size = 'h-1.5 w-1.5' }) {
  const color = tone === 'secondary' ? 'bg-cyan-400' : 'bg-emerald-400';
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rounded-full ${size} ${color} ${live ? 'animate-beacon' : ''}`}
    />
  );
}

/** Monospace stack chip. */
export function Tag({ children, size = 'sm' }) {
  const pad = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-[12px]';
  return (
    <span className={`rounded bg-slate-800/70 font-code text-slate-300 ${pad}`}>{children}</span>
  );
}

/** Bordered status chip with a leading beacon. */
export function StatusChip({ tone = 'primary', live = false, children }) {
  const skin =
    tone === 'secondary'
      ? 'border-cyan-500/20 bg-cyan-950/40 text-cyan-400'
      : 'border-emerald-500/20 bg-emerald-950/40 text-emerald-400';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-0.5 font-code text-[12px] ${skin}`}
    >
      <Beacon tone={tone} live={live} />
      {children}
    </span>
  );
}

/**
 * Section eyebrow + heading. The eyebrow carries the section's place in the
 * read order, which is a real sequence here, so the numbering is meaningful.
 */
export function SectionHeading({ index, eyebrow, title, tone = 'primary', aside }) {
  const eyebrowColor = tone === 'secondary' ? 'text-cyan-400' : 'text-emerald-400';
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className={`font-code text-[12px] font-semibold tracking-wider ${eyebrowColor}`}>
          {index} // {eyebrow}
        </div>
        <h2 className="mt-1 font-headline text-3xl font-bold tracking-tight text-white">{title}</h2>
      </div>
      {aside && <p className="max-w-md text-[14px] text-slate-400">{aside}</p>}
    </div>
  );
}

/** Wraps a top-level page section with consistent rhythm and a hairline rule. */
export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`w-full border-t border-slate-800/70 py-24 ${className}`}>
      {children}
    </section>
  );
}

export const toneText = {
  primary: 'text-emerald-400',
  secondary: 'text-cyan-400',
  neutral: 'text-slate-200',
};

/**
 * Renders **bold** spans in a string as emphasised white text, so the data
 * file can stay plain strings instead of JSX.
 */
export function RichText({ text }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-medium text-white">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
