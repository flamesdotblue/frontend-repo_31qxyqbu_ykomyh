import { motion } from 'framer-motion';
import { Volume2, Shield, Wand2, Check, Crown } from 'lucide-react';

const packs = [
  {
    name: 'Professional Pack',
    tag: 'Most popular',
    voices: [
      { id: 'pro-alex', label: 'Alex — warm, neutral (EN-US)' },
      { id: 'pro-maya', label: 'Maya — friendly, upbeat (EN-US)' },
      { id: 'pro-liam', label: 'Liam — calm, confident (EN-GB)' },
    ],
  },
  {
    name: 'Multilingual Pack',
    tag: 'Global',
    voices: [
      { id: 'ml-sofia', label: 'Sofía — claro, profesional (ES)' },
      { id: 'ml-luc', label: 'Luc — posé, serviable (FR)' },
      { id: 'ml-anya', label: 'Anya — warm, precise (EN-IN)' },
    ],
  },
  {
    name: 'Creator Pack',
    tag: 'Premium',
    premium: true,
    voices: [
      { id: 'fx-scout', label: 'Scout — energetic, youthful' },
      { id: 'fx-aurora', label: 'Aurora — cinematic, airy' },
      { id: 'fx-bassline', label: 'Bassline — deep, broadcast' },
    ],
  },
];

export default function Voices() {
  return (
    <section id="voices" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Realistic voice packs</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Pick from natural, expressive voices designed for clarity and trust. Upgrade to Voice Studio for a real‑time voice changer with premium timbres.</p>
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-3">
            <Shield className="h-4 w-4" />
            Consent‑first policy. No cloning of public figures, celebrities, superheroes, or any voice without proof of ownership.
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-6 shadow-sm"
            >
              {p.tag && (
                <span className="absolute -top-2 right-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-xs font-medium text-white shadow-sm">
                  {p.tag}
                </span>
              )}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 grid place-items-center">
                  {p.premium ? <Crown className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.name}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {p.voices.map((v) => (
                  <li key={v.id} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{v.label}</span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                      aria-label={`Preview ${v.label}`}
                    >
                      <Wand2 className="h-3.5 w-3.5" /> Preview
                    </button>
                  </li>
                ))}
              </ul>
              {p.premium && (
                <div className="mt-5 rounded-lg bg-gradient-to-br from-amber-500/10 to-purple-500/10 p-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="font-semibold mb-1">Voice Studio (Add‑on)</div>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Real‑time voice changer</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> High‑fidelity timbres without quality loss</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Consent‑gated custom voices (no impersonations)</li>
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
