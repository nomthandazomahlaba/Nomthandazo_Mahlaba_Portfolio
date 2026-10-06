import { Code2, Users } from 'lucide-react';
import { technicalSkills, softSkills, type Skill } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-padding relative bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
          <SectionHeading number="02" title="Skills & Strengths" />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Technical */}
            <SkillGroup
              icon={<Code2 className="h-5 w-5" />}
              title="Core Strengths"
              skills={technicalSkills}
              delay={0}
            />
            {/* Soft */}
            <SkillGroup
              icon={<Users className="h-5 w-5" />}
              title="Soft Skills"
              skills={softSkills}
              delay={0.15}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  icon,
  title,
  skills,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
  delay: number;
}) {
  return (
    <div className="glass rounded-2xl p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-teal-500/10 p-2.5 text-teal-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-5">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} delay={delay} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ skill, index, delay }: { skill: Skill; index: number; delay: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            transitionDelay: `${delay + index * 0.08}s`,
          }}
        />
      </div>
    </div>
  );
}
