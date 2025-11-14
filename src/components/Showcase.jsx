import { motion } from 'framer-motion'

function Showcase() {
  return (
    <section id="world" className="bg-[#0B0B12] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20 p-1"
          >
            <div className="rounded-3xl bg-[#0B0B12] p-8">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">A universe of techno-mystic factions</h2>
            <p className="mt-4 text-white/80">
              From neon sanctums to quantum forges, each faction bends reality with unique mechanics. Draft your path, master their arts, and let the battlefield fold to your will.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Neon Shrine','Flux Guild','Cipher Bloom','Chrome Wardens'].map((f,i)=> (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="font-semibold">{f}</p>
                  <p className="text-sm text-white/70">Signature playstyle unlocked</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
