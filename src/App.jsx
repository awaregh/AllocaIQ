import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignalPreview from './components/SignalPreview'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <SignalPreview />
        <Problem />
        <Solution />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
