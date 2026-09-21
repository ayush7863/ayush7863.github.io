import { experience } from '../data/portfolio';
import { Beacon, Icon, RichText, Section, SectionHeading, toneText } from './ui';

function Role({ role }) {
  const accent = role.current ? 'primary' : 'secondary';

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 lg:p-8">
      <header className="flex flex-col justify-between gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-start">
        <div>
          <div
            className={`mb-2 inline-flex items-center gap-2 rounded px-2.5 py-0.5 font-code text-[12px] font-medium ${
              role.current
                ? 'border border-emerald-500/20 bg-emerald-950/40 text-emerald-400'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {role.current && <Beacon live />}
            {role.period}
            {role.current && ' (current)'}
          </div>
          <h3 className="font-headline text-2xl font-bold tracking-tight text-white">{role.role}</h3>
          <div
            className={`mt-0.5 text-sm font-medium ${role.current ? 'text-emerald-400' : 'text-slate-400'}`}
          >
            {role.company}
          </div>
        </div>

        <div className="self-start rounded border border-slate-800 bg-slate-950 px-3 py-1.5 font-code text-[12px] text-slate-400">
          {role.keyMetric.label}:{' '}
          <span className={`font-medium ${toneText[role.keyMetric.tone]}`}>
            {role.keyMetric.value}
          </span>
        </div>
      </header>

      <ul className="space-y-3 pt-6">
        {role.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3 text-[14px] text-slate-300">
            <span className={`mt-0.5 shrink-0 ${toneText[accent]}`}>
              <Icon name="check_circle" />
            </span>
            <span>
              <RichText text={h} />
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="02" eyebrow="CAREER TIMELINE" title="Professional experience" />
      <div className="space-y-6">
        {experience.map((role) => (
          <Role key={role.role + role.period} role={role} />
        ))}
      </div>
    </Section>
  );
}
