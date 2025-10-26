import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline() {
  return (
    <section id="top" className="relative pt-28 overflow-hidden">
      {/* Background 3D scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90 dark:from-zinc-950/70 dark:via-zinc-950/40 dark:to-zinc-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              A human‑sounding AI that answers when voicemail would.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl"
            >
              Meet VoixMate — your friendly receptionist that greets callers, captures details, and books meetings automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 font-semibold shadow-sm ring-1 ring-black/5 hover:opacity-90"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white px-6 py-3 font-semibold shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700"
              >
                Explore features
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                Live voicemail intercept <span className="sr-only">enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                Calendar, email, SMS integrations
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5" aria-hidden />
        </div>
      </div>
    </section>
  );
}
