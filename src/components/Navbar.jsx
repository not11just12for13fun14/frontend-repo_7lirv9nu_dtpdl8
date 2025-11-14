import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 grid place-items-center text-white shadow-lg">
              <Sparkles size={18} />
            </div>
            <span className="text-white text-lg sm:text-xl font-bold tracking-tight">
              Kamui <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Card</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#world" className="hover:text-white transition">World</a>
            <a href="#play" className="hover:text-white transition">Play</a>
            <a href="#community" className="hover:text-white transition">Community</a>
            <a href="#download" className="ml-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition">Get Started</a>
          </nav>

          <button aria-label="menu" className="md:hidden p-2 rounded-lg bg-white/10 text-white">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
