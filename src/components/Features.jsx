import { Shield, Zap, Layers3, Sparkles } from 'lucide-react'

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Tactical Depth',
    desc: 'Positioning, timing, and resource flow matter. Outsmart opponents with layered play.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Combo Engine',
    desc: 'Chain abilities and trigger reactions to create electrifying turns.',
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: 'Dual Realities',
    desc: 'Shift between planes to alter card effects and rewrite the board state.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Collect & Craft',
    desc: 'Unlock variants, craft foils, and build your signature Kamui identity.',
  },
]

function Features() {
  return (
    <section id="features" className="relative bg-[#0B0B12] text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center text-cyan-300 mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
