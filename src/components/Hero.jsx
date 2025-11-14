import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0B12] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0B12]/40 via-[#0B0B12]/40 to-[#0B0B12]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-36 pb-24 sm:pt-40 sm:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 ring-1 ring-white/15 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                Interactive 3D cover — move your mouse
              </div>
              <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Enter the world of Kamui
                <span className="block bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">A strategic card game of shifting realities</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/80">
                Build decks infused with techno-mystic powers. Master combos, warp positions, and outplay rivals in a living battlefield.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#play" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-400/20 transition">
                  Play Now
                </a>
                <a href="#learn" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20 transition">
                  Learn the Rules
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
