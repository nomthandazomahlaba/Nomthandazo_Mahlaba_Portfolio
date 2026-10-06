import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useReveal';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((n) => n.id));

  const handleClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-12">
        <button
          onClick={() => handleClick('home')}
          className="flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-teal-400"
        >
          <Code2 className="h-6 w-6 text-teal-400" />
          <span>Alex<span className="text-teal-400">.</span>dev</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? 'text-teal-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-teal-400" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    activeId === item.id
                      ? 'bg-teal-500/10 text-teal-400'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
