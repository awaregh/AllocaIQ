const pillars = [
  {
    label: 'Explainable AI Decisions',
    description:
      'Every signal includes a traceable reasoning chain. Investment committees can audit the logic, not just the output.',
    icon: '⬡',
    accent: '#58a6ff',
  },
  {
    label: 'Risk-Controlled System',
    description:
      'Deterministic constraints enforced at the allocation layer. No signal bypasses volatility, exposure, or liquidity checks.',
    icon: '⬡',
    accent: '#3fb950',
  },
  {
    label: 'Audit-Ready Signal Generation',
    description:
      'Full provenance from data source to allocation recommendation. Designed for institutional compliance workflows.',
    icon: '⬡',
    accent: '#bc8cff',
  },
  {
    label: 'Institutional Workflow Design',
    description:
      'Built around how capital allocators think and operate — not consumer UX. Dense, precise, structured output.',
    icon: '⬡',
    accent: '#e3b341',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-[10px] text-[#58a6ff] tracking-widest uppercase mb-4">
            Institutional Standards
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#e6edf3] leading-tight tracking-tight max-w-2xl mx-auto mb-6">
            Built for institutional capital allocation.
          </h2>
          <p className="text-base text-[#8b949e] max-w-xl mx-auto">
            AllocaIQ meets the information quality, auditability, and risk control standards
            required for institutional deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.06]">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`p-7 border-white/[0.06] hover:bg-white/[0.02] transition-colors
                ${i < pillars.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}
                ${i === 1 && 'lg:border-b-0'}
              `}
            >
              <div
                className="w-8 h-8 border flex items-center justify-center mb-5 font-mono text-[9px]"
                style={{ borderColor: `${p.accent}30`, color: p.accent, backgroundColor: `${p.accent}08` }}
              >
                ✓
              </div>
              <h3 className="font-semibold text-[#e6edf3] text-sm tracking-tight mb-3">{p.label}</h3>
              <p className="text-xs text-[#8b949e] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-0 border border-white/[0.06]">
          {[
            { value: '2-Layer', label: 'Architecture' },
            { value: '4-Factor', label: 'Alpha Model' },
            { value: 'Audit-Grade', label: 'Signal Provenance' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-8 text-center border-white/[0.06] ${i < 2 ? 'border-b md:border-b-0 md:border-r' : ''}`}
            >
              <div className="font-mono text-2xl font-semibold text-[#58a6ff] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-[#6e7681] tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
