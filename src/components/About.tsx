import { MapPin, GraduationCap, BookOpen } from 'lucide-react';
import { personalInfo, stats } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
          <SectionHeading number="01" title="About Me" />

          <div className="mt-12 grid gap-12 lg:grid-cols-5">
            {/* Left: bio paragraphs */}
            <div className="lg:col-span-3">
              {personalInfo.about.map((para, i) => (
                <p
                  key={i}
                  className="mb-5 text-lg leading-relaxed text-slate-400"
                >
                  {para}
                </p>
              ))}

              <div className="mt-8 flex flex-wrap gap-4">
                <InfoChip icon={<MapPin className="h-4 w-4" />} text={personalInfo.location} />
                <InfoChip icon={<GraduationCap className="h-4 w-4" />} text="Grade 12 · 2025" />
                <InfoChip icon={<BookOpen className="h-4 w-4" />} text="Ready to learn" />
              </div>
            </div>

            {/* Right: quick facts card */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                <h3 className="mb-6 text-lg font-semibold text-white">Quick Facts</h3>
                <dl className="space-y-4">
                  <FactRow label="Name" value={personalInfo.name} />
                  <FactRow label="Role" value={personalInfo.title} />
                  <FactRow label="Location" value={personalInfo.location} />
                  <FactRow label="Email" value={personalInfo.email} />
                  <FactRow label="Availability" value="Open to opportunities" />
                </dl>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-800 pt-6">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-bold text-teal-400">{s.value}</div>
                      <div className="text-xs text-slate-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm text-slate-300">
      <span className="text-teal-400">{icon}</span>
      {text}
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-sm text-slate-500">{label}</dt>
      <dd className="text-sm font-medium text-slate-200">{value}</dd>
    </div>
  );
}

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-teal-400">{number}.</span>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
    </div>
  );
}
