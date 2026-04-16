import { useMemo, useState } from 'react'
import './index.css'

const navLinks = ['Product', 'Docs', 'Pricing', 'Company']
const tabs = ['Performance', 'Signals', 'Risk']

const performanceValues = [40, 65, 55, 78, 90, 72, 88]
const performanceLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const signals = [
  'AI momentum shift detected in SaaS vertical',
  'VC sentiment uptick in infra deals',
  'Macro liquidity tightening signal',
]

const stats = [
  { label: 'Portfolio IRR', value: '24.8%' },
  { label: 'Active Models', value: '128' },
  { label: 'Signals Processed', value: '2.4M' },
]

function PerformanceChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const chartData = useMemo(() => {
    const width = 640
    const height = 220
    const padding = 24
    const min = 0
    const max = 100

    return performanceValues.map((value, index) => {
      const x = padding + (index * (width - padding * 2)) / (performanceValues.length - 1)
      const y = height - padding - ((value - min) / (max - min)) * (height - padding * 2)
      return { x, y, value, label: performanceLabels[index] }
    })
  }, [])

  return (
    <div className="card animate-rise [animation-delay:200ms]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-semibold tracking-tight text-slate-100">7D Portfolio Performance</h3>
        <span className="text-xs text-slate-400">Updated just now</span>
      </div>
      <div className="relative">
        <svg viewBox="0 0 640 220" className="w-full">
          {[0, 1, 2, 3].map((line) => (
            <line
              key={line}
              x1="24"
              x2="616"
              y1={24 + line * 43}
              y2={24 + line * 43}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          ))}
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={chartData.map((point) => `${point.x},${point.y}`).join(' ')}
          />
          {chartData.map((point, index) => (
            <g key={point.label}>
              <circle
                cx={point.x}
                cy={point.y}
                r={hoveredIndex === index ? '5' : '4'}
                fill="#3B82F6"
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              {hoveredIndex === index && (
                <g>
                  <rect
                    x={point.x - 38}
                    y={point.y - 42}
                    width="76"
                    height="28"
                    rx="8"
                    fill="rgba(10,15,28,0.95)"
                    stroke="rgba(255,255,255,0.2)"
                  />
                  <text x={point.x} y={point.y - 24} textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    {point.label}: {point.value}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

function SignalsPanel() {
  return (
    <div className="card animate-rise [animation-delay:200ms]">
      <h3 className="mb-4 text-base font-semibold tracking-tight text-slate-100">AI Signals Feed</h3>
      <div className="space-y-3">
        {signals.map((signal) => (
          <div
            key={signal}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:brightness-110"
          >
            <span className="text-sm text-slate-200">{signal}</span>
            <span className="rounded-full border border-blue-300/20 bg-blue-500/20 px-2.5 py-1 text-xs font-medium text-blue-200">
              Signal
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RiskPanel() {
  const cells = Array.from({ length: 36 }, (_, index) => {
    const intensity = ((index % 6) + Math.floor(index / 6)) / 12
    return intensity
  })

  return (
    <div className="card animate-rise [animation-delay:200ms]">
      <h3 className="mb-4 text-base font-semibold tracking-tight text-slate-100">Risk Exposure Heatmap</h3>
      <div className="grid grid-cols-6 gap-2">
        {cells.map((intensity, idx) => (
          <div
            key={idx}
            className="aspect-square rounded-md border border-white/10 transition duration-200 hover:scale-[1.01] hover:shadow-[0_0_18px_rgba(59,130,246,0.2)]"
            style={{ backgroundColor: `rgba(59,130,246,${0.08 + intensity * 0.35})` }}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('Performance')

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-slate-100">
      <header className="border-b border-white/10 bg-[#0A0F1C]/90 backdrop-blur">
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6">
          <span className="text-lg font-bold tracking-tight">AllocaIQ</span>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-white">
                {link}
              </a>
            ))}
          </nav>
          <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90">
            Launch App
          </button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        <section className="animate-rise text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Capital allocation intelligence for modern funds
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            AI-native portfolio optimization, VC deal scoring, and PE risk modeling in one system.
          </p>
        </section>

        <section className="animate-rise [animation-delay:120ms]">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur sm:flex-row">
            <input
              type="text"
              placeholder="Ask: optimize portfolio, rank deals, simulate returns..."
              className="h-12 flex-1 rounded-xl border border-white/10 bg-[#111a2f]/80 px-4 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-blue-400/70 focus:shadow-[0_0_0_1px_rgba(59,130,246,0.6),0_0_30px_rgba(59,130,246,0.15)]"
            />
            <button className="h-12 rounded-xl bg-[#3B82F6] px-6 text-sm font-semibold text-white transition hover:brightness-110">
              Run
            </button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="card animate-rise"
              style={{ animationDelay: `${200 + index * 80}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.08em] text-slate-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
            </article>
          ))}
        </section>

        <section className="card animate-rise [animation-delay:360ms]">
          <div className="mb-6 flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'border border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Performance' && <PerformanceChart />}
          {activeTab === 'Signals' && <SignalsPanel />}
          {activeTab === 'Risk' && <RiskPanel />}
        </section>
      </main>

      <footer className="mt-10 border-t border-white/10 py-6">
        <p className="text-center text-sm text-slate-500">© 2026 AllocaIQ. Institutional-grade capital intelligence.</p>
      </footer>
    </div>
  )
}

export default App
