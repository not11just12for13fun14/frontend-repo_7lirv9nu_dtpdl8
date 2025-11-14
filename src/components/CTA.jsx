function CTA() {
  return (
    <section id="download" className="bg-[#0B0B12] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 p-1">
          <div className="rounded-3xl bg-[#0B0B12] px-6 py-12 md:px-12 md:py-16 text-center">
            <h3 className="text-3xl md:text-4xl font-black">Ready to bend reality?</h3>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">
              Join the alpha to unlock starter decks, seasonal rewards, and exclusive holographic cosmetics.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#play" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-400/20 transition">
                Get the Alpha
              </a>
              <a href="#community" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20 transition">
                Join the Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
