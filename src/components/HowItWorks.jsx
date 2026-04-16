const steps = [
  {
    id: '01',
    label: 'Data Ingestion',
    description: 'Market feeds, on-chain flow, private market data',
    accent: '#58a6ff',
  },
  {
    id: '02',
    label: 'Feature Engine',
    description: 'Normalization, enrichment, structured representation',
    accent: '#bc8cff',
  },
  {
    id: '03',
    label: 'Intelligence Layer',
    description: 'LLM reasoning, pattern recognition, signal generation',
    accent: '#58a6ff',
  },
  {
    id: '04',
    label: 'Risk Engine',
    description: 'Constraint validation, volatility filters, exposure checks',
    accent: '#3fb950',
  },
  {
    id: '05',
    label: 'Scoring Engine',
    description: 'Multi-factor alpha model, opportunity ranking',
    accent: '#e3b341',
  },
  {
    id: '06',
    label: 'Signal Output',
    description: 'Structured, explainable, audit-ready allocation decisions',
    accent: '#3fb950',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-[10px] text-[#58a6ff] tracking-widest uppercase mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#e6edf3] leading-tight tracking-tight max-w-xl">
            From raw data to structured capital allocation decisions.
          </h2>
        </div>

        {/* Desktop flow */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6 gap-0 border border-white/[0.06]">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className={`p-6 border-r border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition-colors relative`}
              >
                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-px top-1/2 -translate-y-1/2 z-10 w-0 h-0" />
                )}

                <div className="mb-4 font-mono text-[9px] tracking-widest uppercase" style={{ color: step.accent }}>
                  Step {step.id}
                </div>
                <div className="font-semibold text-[#e6edf3] text-sm tracking-tight mb-2">
                  {step.label}
                </div>
                <p className="text-[11px] text-[#6e7681] leading-relaxed">{step.description}</p>

                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-[#6e7681] text-xs">›</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 px-2">
            <div className="flex-1 h-px bg-gradient-to-r from-[#58a6ff]/30 via-[#3fb950]/30 to-transparent" />
            <span className="font-mono text-[9px] text-[#6e7681] tracking-widest uppercase">Signal Pipeline</span>
          </div>
        </div>

        {/* Mobile flow */}
        <div className="md:hidden space-y-0 border border-white/[0.06]">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="p-5 border-b border-white/[0.06] last:border-0 flex items-start gap-4"
            >
              <div
                className="w-8 h-8 shrink-0 border flex items-center justify-center font-mono text-[10px]"
                style={{ borderColor: `${step.accent}30`, color: step.accent, backgroundColor: `${step.accent}08` }}
              >
                {step.id}
              </div>
              <div>
                <div className="font-semibold text-[#e6edf3] text-sm tracking-tight mb-1">
                  {step.label}
                </div>
                <p className="text-xs text-[#6e7681] leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="absolute left-9 font-mono text-[#6e7681] text-xs">↓</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
