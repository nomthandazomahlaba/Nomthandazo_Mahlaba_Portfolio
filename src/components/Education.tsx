import { GraduationCap, Award } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Education() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
          <SectionHeading number="05" title="Education" />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {education.map((edu, i) => (
              <div
                key={i}
                className="glass glass-hover rounded-2xl p-8 lg:col-span-2"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-teal-500/10 p-3 text-teal-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="mt-1 text-teal-400">{edu.institution}</p>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {edu.location} · {edu.period}
                    </p>
                  </div>
                </div>

                <p className="mt-5 leading-relaxed text-slate-400">{edu.details}</p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-teal-500/20 bg-teal-500/10 px-4 py-2">
                  <Award className="h-4 w-4 text-teal-400" />
                  <span className="text-sm font-medium text-teal-300">{edu.gpa}</span>
                </div>
              </div>
            ))}

            {/* Highlight card */}
            <div className="glass rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/5 p-8">
              <h3 className="text-lg font-semibold text-white">School Highlights</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                {['English First Additional Language', 'isiZulu Home Language', 'Mathematics and Physical Sciences', 'Life Sciences and Geography'].map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
