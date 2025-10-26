import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import Features from './components/Features';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main>
        <HeroSpline />
        <Features />
        <section id="voices" className="py-8 sm:py-10">{/* anchor spacer */}</section>
        <CTASection />
      </main>
      <footer className="border-t border-zinc-200/60 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} VoixMate. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#security" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Privacy</a>
            <a href="#features" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Features</a>
            <a href="#cta" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Get started</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
