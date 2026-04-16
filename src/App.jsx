import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import SignalFeed from './components/SignalFeed'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#080b0f] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <SignalFeed />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

