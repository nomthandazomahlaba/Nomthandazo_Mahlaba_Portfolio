import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experience, highlights } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding relative bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
          <SectionHeading number="04" title="Work Experience" />

          <div className="mt-12 space-y-6">
            {experience.length === 0 ? (
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white">Ready for my first professional opportunity</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                  I do not have formal work experience to list yet, but I am eager to learn, work hard, and contribute positively in a professional environment.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ) : experience.map((item, i) => (
              <div
                key={i}
                className="glass glass-hover rounded-2xl p-8"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-teal-500/10 p-3 text-teal-400">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-1 text-teal-400">{item.company}</p>
                      <p className="mt-0.5 text-sm text-slate-500">{item.location}</p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-slate-700 bg-slate-900/50 px-3.5 py-1 text-xs font-medium text-slate-400">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-slate-400">{item.description}</p>

                <ul className="mt-4 space-y-2">
                  {item.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
