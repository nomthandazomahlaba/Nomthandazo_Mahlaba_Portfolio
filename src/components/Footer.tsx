import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-lg font-bold text-white">
          <Code2 className="h-5 w-5 text-teal-400" />
          <span>{personalInfo.name.split(' ')[0]}<span className="text-teal-400">.</span>profile</span>
        </div>

        <div className="flex items-center gap-4">
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-teal-400" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-teal-400" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          <a href={`mailto:${personalInfo.email}`} className="text-slate-500 transition-colors hover:text-teal-400" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © {year} {personalInfo.name} · Built with
          <Heart className="mx-1 inline h-3.5 w-3.5 text-teal-400" />
          React & Tailwind
        </p>
      </div>
    </footer>
  );
}
