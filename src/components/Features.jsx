import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck, Mic, Shield, CreditCard, Brain } from 'lucide-react';

const features = [
  {
    icon: PhoneCall,
    title: 'Voicemail intercept',
    desc: 'Answers within 2 seconds when a call would hit voicemail, with friendly disclosure and consent.',
  },
  {
    icon: Mic,
    title: 'Adaptive conversation',
    desc: 'Captures contact info, intent, urgency and more using dynamic, context‑aware Q&A.',
  },
  {
    icon: CalendarCheck,
    title: 'Scheduling & reminders',
    desc: 'Checks availability, books meetings, and sends confirmations via email/SMS.',
  },
  {
    icon: Shield,
    title: 'Security & privacy',
    desc: 'RBAC, audit logs, PII guardrails, and GDPR/CCPA‑ready DSR endpoints.',
  },
  {
    icon: Brain,
    title: 'Self‑learning agent',
    desc: 'Learns from outcomes and improves question ordering and next‑best actions over time.',
  },
  {
    icon: CreditCard,
    title: 'Billing built‑in',
    desc: 'Stripe subscriptions with usage‑based minutes/transcripts and clean invoices.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Everything you need to never miss a call</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Designed for owners who want a helpful, respectful assistant that books meetings and sends next‑best actions instantly.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 p-[1px]">
                <div className="h-full w-full rounded-[10px] bg-white dark:bg-zinc-900 grid place-items-center">
                  <f.icon className="h-5 w-5 text-zinc-900 dark:text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
