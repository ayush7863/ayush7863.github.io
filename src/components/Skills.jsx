import { skills } from '../data/portfolio';
import { Icon, Section, SectionHeading, Tag, toneText } from './ui';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="03"
        eyebrow="STACK & CAPABILITIES"
        title="Technical competencies"
        aside="Core domains from accessible React frontends to Node.js/WebSocket services and AI-assisted delivery workflows."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <article
            key={group.title}
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <div>
              <div className={`mb-3 flex items-center gap-2 ${toneText[group.tone]}`}>
                <Icon name={group.icon} className="text-xl" />
                <h3 className="font-headline font-semibold text-white">{group.title}</h3>
              </div>
              <p className="mb-4 text-[13px] text-slate-400">{group.blurb}</p>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag size="md">{item}</Tag>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
