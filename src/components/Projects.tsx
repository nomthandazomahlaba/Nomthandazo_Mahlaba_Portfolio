import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
          <SectionHeading number="03" title="Featured Projects" />
          <p className="mt-4 max-w-2xl text-slate-400">
            A growing collection of personal work and highlights. Click the portfolio project to learn more.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group glass glass-hover rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Visual header */}
      <div className="mb-5 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 transition-colors group-hover:from-teal-500/10 group-hover:to-blue-500/10">
        <span className="font-mono text-3xl font-bold text-slate-700 transition-colors group-hover:text-teal-400/40">
          {'{'}
        </span>
        <span className="mx-2 font-mono text-sm text-slate-600 transition-colors group-hover:text-teal-300/60">
          {project.image}
        </span>
        <span className="font-mono text-3xl font-bold text-slate-700 transition-colors group-hover:text-teal-400/40">
          {'}'}
        </span>
      </div>

      {project.featured && (
        <span className="mb-2 inline-block rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-400">
          Featured
        </span>
      )}

      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-teal-400">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-700 bg-slate-900/50 px-2.5 py-1 text-xs text-slate-400"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="rounded-md px-2.5 py-1 text-xs text-slate-500">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass max-h-90vh w-full max-w-2xl overflow-y-auto rounded-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
          <span className="font-mono text-5xl font-bold text-teal-400/30">{project.image}</span>
        </div>

        <p className="mb-6 leading-relaxed text-slate-400">{project.longDescription}</p>

        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Technologies Used
        </h4>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-teal-500/20 bg-teal-500/10 px-3 py-1.5 text-sm text-teal-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith('#') ? undefined : '_blank'}
            rel={project.liveUrl.startsWith('#') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            target={project.repoUrl.startsWith('#') ? undefined : '_blank'}
            rel={project.repoUrl.startsWith('#') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-teal-500/40 hover:text-teal-400"
          >
            <Github className="h-4 w-4" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
