import { projects } from "../data/portfolio";
import { Icon, Section, SectionHeading, StatusChip, Tag, toneText } from "./ui";

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-slate-700">
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <StatusChip tone={project.badge.tone}>
            {project.badge.text}
          </StatusChip>
          <span className="font-code text-[12px] text-slate-500">
            {project.meta}
          </span>
        </div>

        <h3 className="mb-2 font-headline text-xl font-bold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mb-6 text-[14px] leading-relaxed text-slate-400">
          {project.description}
        </p>

        <dl className="mb-5 grid grid-cols-3 gap-3 rounded-lg border border-slate-800/80 bg-[#060911]/80 p-3 text-center">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dd
                className={`font-code text-sm font-semibold ${toneText[m.tone]}`}
              >
                {m.value}
              </dd>
              <dt className="mono-label">{m.label}</dt>
            </div>
          ))}
        </dl>

        <ul className="mb-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
        <a
          href={project.link.url}
          className={`inline-flex items-center gap-1.5 font-code text-[12px] transition-colors hover:brightness-125 ${toneText[project.link.tone]}`}
        >
          {project.link.text}
          <Icon name="arrow_outward" className="text-[14px]" />
        </a>
        <span className="font-code text-[12px] text-slate-500">
          {project.status}
        </span>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="01"
        eyebrow="ENGINEERING CASE STUDIES"
        title="Featured case studies"
        aside="Deep dives into entity workflows and white-label theming — plus a real-time WebSocket chat app built end to end."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
