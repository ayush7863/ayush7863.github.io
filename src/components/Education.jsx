import { certifications, education } from '../data/portfolio';
import { Icon, Section } from './ui';

export default function Education() {
  return (
    <Section id="education">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mb-1 font-code text-[12px] font-semibold tracking-wider text-emerald-400">
            04 // ACADEMICS
          </div>
          <h2 className="mb-6 font-headline text-2xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-lg font-bold text-white">{edu.degree}</h3>
                    <div className="mt-0.5 text-sm font-medium text-emerald-400">{edu.school}</div>
                    <div className="mt-1 font-code text-[12px] text-slate-400">{edu.detail}</div>
                  </div>
                  <Icon name="school" className="shrink-0 text-3xl text-slate-600" />
                </div>
                {edu.focus && (
                  <p className="mt-4 border-t border-slate-800 pt-4 text-[13px] text-slate-400">
                    <span className="font-medium text-slate-300">Focus:</span> {edu.focus}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1 font-code text-[12px] font-semibold tracking-wider text-cyan-400">
            05 // CREDENTIALS
          </div>
          <h2 className="mb-6 font-headline text-2xl font-bold tracking-tight text-white">
            Certifications
          </h2>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <span
                  className={`rounded-lg border p-2.5 ${
                    cert.tone === 'secondary'
                      ? 'border-cyan-500/20 bg-cyan-950/50 text-cyan-400'
                      : 'border-emerald-500/20 bg-emerald-950/50 text-emerald-400'
                  }`}
                >
                  <Icon name={cert.icon} className="text-2xl" />
                </span>
                <span>
                  <span className="block font-headline text-[15px] font-semibold text-white">
                    {cert.name}
                  </span>
                  <span className="block font-code text-[12px] text-slate-400">{cert.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
