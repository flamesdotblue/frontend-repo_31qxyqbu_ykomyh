import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const bullets = [
    'Quick onboarding wizard',
    'Preset voices + optional cloning',
    'Google/Microsoft calendar integrations',
    'GDPR/CCPA‑ready with DSR endpoints',
  ];

  return (
    <section id="cta" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Spin up your AI receptionist in minutes</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl">Start with a friendly preset voice, then customize flows per role (Sales, Support, Billing). Your assistant books meetings, sends reminders, and keeps you in the loop.</p>
            <ul className="mt-6 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-500" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 font-semibold shadow-sm ring-1 ring-black/5 hover:opacity-90"
              >
                Create account <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white px-6 py-3 font-semibold shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700"
              >
                View full feature list
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-gradient-to-tr from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-900/60 p-6"
          >
            <div className="rounded-xl border border-dashed border-zinc-300/60 dark:border-zinc-700/60 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Selected voice</div>
                  <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">Warm • Neutral • en‑US</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Voicemail threshold</div>
                  <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">12 seconds</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Calendars</div>
                  <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">Google • Microsoft 365</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Notifications</div>
                  <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">Email • SMS • Slack</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
