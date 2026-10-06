import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socialLinks = [
    ...(personalInfo.github ? [{ icon: <Github className="h-5 w-5" />, label: 'GitHub', url: personalInfo.github, value: personalInfo.github.replace('https://', '') }] : []),
    ...(personalInfo.linkedin ? [{ icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', url: personalInfo.linkedin, value: personalInfo.linkedin.replace('https://', '') }] : []),
    { icon: <Mail className="h-5 w-5" />, label: 'Email', url: `mailto:${personalInfo.email}`, value: personalInfo.email },
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', url: `tel:${personalInfo.phone}`, value: personalInfo.phone },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
          <SectionHeading number="07" title="Get In Touch" />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Left: contact info */}
            <div>
              <h3 className="text-2xl font-semibold text-white">Let's work together</h3>
              <p className="mt-4 max-w-md leading-relaxed text-slate-400">
                I'm actively seeking internship and full-time software engineering opportunities.
                Whether you have a question, a project idea, or just want to connect — my inbox is always open.
              </p>

              <div className="mt-8 space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? undefined : '_blank'}
                    rel={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition-all hover:border-teal-500/40 hover:bg-slate-900/80"
                  >
                    <div className="rounded-lg bg-teal-500/10 p-2.5 text-teal-400 transition-colors group-hover:bg-teal-500/20">
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{link.label}</div>
                      <div className="text-sm font-medium text-slate-200">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-teal-400" />
                {personalInfo.location}
              </div>
            </div>

            {/* Right: contact form */}
            <div className="glass rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-teal-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-teal-500/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-teal-500/50"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
