export default function Solution() {
  return (
    <section id="solution" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-[10px] text-[#58a6ff] tracking-widest uppercase mb-4">
            The Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#e6edf3] leading-tight tracking-tight mb-6 max-w-2xl mx-auto">
            A dual-layer intelligence system for capital decisions.
          </h2>
          <p className="text-base text-[#8b949e] max-w-xl mx-auto">
            Two distinct systems working in sequence: AI reasoning for interpretation,
            deterministic scoring for risk control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Intelligence Layer */}
          <div className="border border-[#58a6ff]/20 bg-[#58a6ff]/[0.03] p-8 relative">
            <div className="absolute top-4 right-4 font-mono text-[9px] text-[#58a6ff]/50 tracking-widest uppercase">
              Layer 01
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-[#58a6ff]/30 bg-[#58a6ff]/10 flex items-center justify-center">
                <span className="font-mono text-[10px] text-[#58a6ff]">AI</span>
              </div>
              <h3 className="font-semibold text-[#e6edf3] text-lg tracking-tight">Intelligence Layer</h3>
            </div>

            <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
              LLM-based reasoning system that interprets structured and unstructured financial data.
              Produces explainable investment signals backed by traceable reasoning chains.
            </p>

            <div className="space-y-3">
              {[
                'LLM reasoning over financial + on-chain data',
                'On-chain capital flow interpretation',
                'Liquidity shift and momentum analysis',
                'Investor behavior pattern recognition',
                'Generates structured signals with explanations',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#58a6ff] shrink-0" />
                  <span className="text-xs text-[#8b949e] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk & Allocation Layer */}
          <div className="border border-[#3fb950]/20 bg-[#3fb950]/[0.03] p-8 relative">
            <div className="absolute top-4 right-4 font-mono text-[9px] text-[#3fb950]/50 tracking-widest uppercase">
              Layer 02
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-[#3fb950]/30 bg-[#3fb950]/10 flex items-center justify-center">
                <span className="font-mono text-[10px] text-[#3fb950]">RS</span>
              </div>
              <h3 className="font-semibold text-[#e6edf3] text-lg tracking-tight">Risk &amp; Allocation Layer</h3>
            </div>

            <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
              Deterministic scoring engine that validates AI outputs against hard constraints.
              Enforces institutional risk parameters before any signal is surfaced.
            </p>

            <div className="space-y-3">
              {[
                'Deterministic multi-factor scoring engine',
                'Validates and filters intelligence layer signals',
                'Volatility filter enforcement',
                'Exposure limit constraints',
                'Liquidity threshold checks',
                'Ranks opportunities via alpha model',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#3fb950] shrink-0" />
                  <span className="text-xs text-[#8b949e] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 border border-white/[0.08] bg-white/[0.02] text-center">
          <p className="font-mono text-sm text-[#e6edf3] tracking-wide">
            Decision-grade intelligence, not raw data.
          </p>
        </div>
      </div>
    </section>
  );
}
