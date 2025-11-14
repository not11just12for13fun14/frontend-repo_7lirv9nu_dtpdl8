import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B12]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="bg-[#0B0B12] border-t border-white/10 py-12 text-center text-white/60">
        <p>© {new Date().getFullYear()} Kamui Card — All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
