import { useState } from 'react';
import { Menu, X, Phone, Settings, ShieldCheck, Calendar, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#features', label: 'Features', icon: Settings },
    { href: '#voices', label: 'Voices', icon: User },
    { href: '#inbox', label: 'Inbox', icon: Phone },
    { href: '#security', label: 'Security', icon: ShieldCheck },
    { href: '#schedule', label: 'Scheduling', icon: Calendar },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="tracking-tight">VoixMate</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/5 hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> Start free trial
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200/70 dark:border-zinc-800"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4" role="dialog" aria-modal="true">
            <div className="mt-2 grid gap-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Start free trial
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
