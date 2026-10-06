import { ArrowDown, Github, Linkedin, Mail, Sparkles, Presentation } from 'lucide-react';
import { personalInfo, stats } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 md:px-12 lg:px-24"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl animate-float" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/8 blur-3xl" />
      </div>

 {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-300">
              <Sparkles className="h-4 w-4" />
              <span>Available for opportunities</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="mt-4 text-2xl font-medium text-slate-300 sm:text-3xl">
              {personalInfo.title}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              {personalInfo.tagline}
            </p>

            {/* Social + CV */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  View CV
                </a>
                <a
                  href={personalInfo.presentationUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-teal-500/40 hover:text-teal-400"
                >
                  <Presentation className="h-4 w-4" />
                  PowerPoint
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 p-3 text-slate-400 transition-all hover:border-teal-500/40 hover:text-teal-400"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 p-3 text-slate-400 transition-all hover:border-teal-500/40 hover:text-teal-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="rounded-xl border border-slate-700 p-3 text-slate-400 transition-all hover:border-teal-500/40 hover:text-teal-400"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: stats card */}
          <div className="reveal hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center transition-colors hover:border-teal-500/30"
                  >
                    <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                    <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center lg:mt-8">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-teal-400"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
