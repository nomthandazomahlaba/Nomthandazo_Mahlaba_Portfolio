import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="section-padding relative bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
          <SectionHeading number="06" title="Certifications" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.length === 0 ? (
              <div className="glass rounded-2xl p-8 sm:col-span-2 lg:col-span-3">
                <h3 className="text-xl font-semibold text-white">Certifications to be added</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                  No professional certifications were listed on my current CV. This section will be updated as I complete future training and qualifications.
                </p>
              </div>
            ) : certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-teal-500/10 p-2.5 text-teal-400 transition-colors group-hover:bg-teal-500/20">
                    <Award className="h-5 w-5" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-600 transition-colors group-hover:text-teal-400" />
                </div>

                <h3 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-teal-400">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>

                <div className="mt-4 flex items-center gap-2 border-t border-slate-800 pt-4">
                  <BadgeCheck className="h-4 w-4 text-teal-400" />
                  <span className="text-xs text-slate-500">
                    Issued {cert.date} · ID: {cert.credentialId}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
