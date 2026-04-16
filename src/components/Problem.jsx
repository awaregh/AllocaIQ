const problems = [
  {
    label: 'On-Chain Tools',
    description: 'Show activity, not interpretation. Raw flow data without causal context is structurally incomplete for allocation decisions.',
  },
  {
    label: 'Market Tools',
    description: 'Show price, not causality. Price feeds and technical indicators fail to explain why capital moves or where it will move next.',
  },
  {
    label: 'Private Market Data',
    description: 'Incomplete and slow. Deal flow, LP sentiment, and secondary liquidity data arrive fragmented and without normalization.',
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="font-mono text-[10px] text-[#58a6ff] tracking-widest uppercase mb-4">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#e6edf3] leading-tight tracking-tight mb-6">
              Investment signals are fragmented, delayed, and inconsistent.
            </h2>
            <p className="text-base text-[#8b949e] leading-relaxed max-w-md">
              Capital is deployed with incomplete intelligence. Existing tools solve
              isolated problems but fail to synthesize a coherent, actionable view
              for institutional decision-making.
            </p>
          </div>

          <div className="space-y-0 border border-white/[0.06]">
            {problems.map((p, i) => (
              <div
                key={i}
                className="p-6 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-2 w-1 h-1 rounded-full bg-[#f85149] shrink-0" />
                  <div>
                    <div className="font-mono text-xs text-[#c9d1d9] tracking-wide mb-2 font-medium">
                      {p.label}
                    </div>
                    <p className="text-sm text-[#8b949e] leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-6 border border-[#f85149]/20 bg-[#f85149]/[0.04]">
          <p className="font-mono text-sm text-[#f85149] tracking-wide">
            Capital is deployed with incomplete intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
