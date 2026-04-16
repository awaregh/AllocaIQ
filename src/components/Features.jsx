const features = [
  {
    id: '01',
    title: 'AI Research Layer',
    description:
      'Transforms raw market, on-chain, and private data into structured investment signals with traceable reasoning chains.',
    tags: ['LLM Reasoning', 'Signal Generation', 'Explainability'],
    accent: '#58a6ff',
  },
  {
    id: '02',
    title: 'Alpha Scoring Engine',
    description:
      'Multi-factor model that ranks opportunities across four dimensions: liquidity, smart money positioning, momentum, and volatility regime.',
    tags: ['Liquidity', 'Smart Money', 'Momentum', 'Volatility'],
    accent: '#bc8cff',
  },
  {
    id: '03',
    title: 'Risk Guardrails System',
    description:
      'Hard constraint enforcement at every stage. Volatility filters, concentration limits, liquidity thresholds, and anomaly detection.',
    tags: ['Volatility Filters', 'Exposure Limits', 'Anomaly Detection'],
    accent: '#3fb950',
  },
  {
    id: '04',
    title: 'Smart Money Tracking',
    description:
      'Detects institutional wallet flows and capital movement patterns across on-chain and off-chain venues.',
    tags: ['Wallet Flow Analysis', 'Capital Patterns', 'Institutional Flows'],
    accent: '#e3b341',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-[10px] text-[#58a6ff] tracking-widest uppercase mb-4">
            Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#e6edf3] leading-tight tracking-tight max-w-xl">
            Institutional-grade modules for every layer of the process.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-white/[0.06]">
          {features.map((f, i) => (
            <div
              key={f.id}
              className={`p-8 border-white/[0.06] hover:bg-white/[0.02] transition-colors group
                ${i === 0 || i === 1 ? 'border-b' : ''}
                ${i === 0 || i === 2 ? 'md:border-r' : ''}
              `}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-9 h-9 border flex items-center justify-center shrink-0"
                  style={{ borderColor: `${f.accent}30`, backgroundColor: `${f.accent}10` }}
                >
                  <span className="font-mono text-[10px]" style={{ color: f.accent }}>
                    {f.id}
                  </span>
                </div>
              </div>

              <h3 className="font-semibold text-[#e6edf3] text-base tracking-tight mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-[#8b949e] leading-relaxed mb-5">{f.description}</p>

              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 border tracking-wide"
                    style={{ borderColor: `${f.accent}20`, color: `${f.accent}` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
