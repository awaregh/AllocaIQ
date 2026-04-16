import { useState } from 'react';

const signals = [
  {
    asset: 'ETH',
    action: 'BUY',
    score: 0.78,
    confidence: 'High',
    explanation:
      'Smart money accumulation detected across Layer 2 bridges. Liquidity inflow exceeds 30-day average. Volatility regime: stable.',
    actionColor: 'text-[#3fb950]',
    actionBg: 'bg-[#3fb950]/10 border-[#3fb950]/20',
    barColor: 'bg-[#3fb950]',
  },
  {
    asset: 'SOL',
    action: 'HOLD',
    score: 0.56,
    confidence: 'Moderate',
    explanation:
      'Mixed signals across liquidity and momentum factors. Risk engine flagged elevated volatility. Awaiting confirmation from on-chain flow shift.',
    actionColor: 'text-[#e3b341]',
    actionBg: 'bg-[#e3b341]/10 border-[#e3b341]/20',
    barColor: 'bg-[#e3b341]',
  },
  {
    asset: 'ARB',
    action: 'SELL',
    score: 0.32,
    confidence: 'High',
    explanation:
      'Institutional outflow detected. Smart money distribution pattern confirmed. Momentum factor declining. Risk engine enforced exposure reduction.',
    actionColor: 'text-[#f85149]',
    actionBg: 'bg-[#f85149]/10 border-[#f85149]/20',
    barColor: 'bg-[#f85149]',
  },
];

export default function SignalFeed() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="signals" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-[10px] text-[#58a6ff] tracking-widest uppercase mb-4">
            Signal Output
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#e6edf3] leading-tight tracking-tight max-w-lg">
              Live signal feed — validated and ranked.
            </h2>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
              <span className="font-mono text-xs text-[#3fb950] tracking-wide">Live</span>
            </div>
          </div>
        </div>

        {/* Table header */}
        <div className="border border-white/[0.06]">
          <div className="grid grid-cols-12 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="col-span-2 font-mono text-[10px] text-[#6e7681] tracking-widest uppercase">Asset</div>
            <div className="col-span-2 font-mono text-[10px] text-[#6e7681] tracking-widest uppercase">Signal</div>
            <div className="col-span-3 font-mono text-[10px] text-[#6e7681] tracking-widest uppercase">Confidence</div>
            <div className="col-span-4 font-mono text-[10px] text-[#6e7681] tracking-widest uppercase">Score</div>
            <div className="col-span-1" />
          </div>

          {signals.map((s, i) => (
            <div key={s.asset}>
              <button
                className="w-full text-left grid grid-cols-12 px-5 py-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors items-center group"
                onClick={() => setSelected(selected === i ? null : i)}
              >
                <div className="col-span-2 font-mono text-sm text-[#e6edf3] font-medium tracking-wider">
                  {s.asset}
                </div>
                <div className="col-span-2">
                  <span className={`font-mono text-[10px] font-semibold tracking-widest px-2 py-0.5 border ${s.actionBg} ${s.actionColor}`}>
                    {s.action}
                  </span>
                </div>
                <div className="col-span-3 font-mono text-xs text-[#8b949e]">{s.confidence}</div>
                <div className="col-span-4 flex items-center gap-3">
                  <div className="flex-1 h-1 bg-white/[0.06] max-w-[120px]">
                    <div
                      className={`h-full ${s.barColor} transition-all`}
                      style={{ width: `${s.score * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-[#8b949e]">{s.score.toFixed(2)}</span>
                </div>
                <div className="col-span-1 text-right">
                  <span className="font-mono text-[10px] text-[#6e7681] group-hover:text-[#8b949e] transition-colors">
                    {selected === i ? '▲' : '▼'}
                  </span>
                </div>
              </button>

              {selected === i && (
                <div className="px-5 py-4 bg-white/[0.02] border-b border-white/[0.06]">
                  <div className="flex items-start gap-3">
                    <div className="font-mono text-[9px] text-[#6e7681] tracking-widest uppercase mt-0.5 shrink-0 w-16">
                      Rationale
                    </div>
                    <p className="text-xs text-[#8b949e] leading-relaxed">{s.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-mono text-[10px] text-[#6e7681] tracking-wide">
            Signals validated by Risk Engine + Intelligence Layer
          </p>
          <p className="font-mono text-[10px] text-[#6e7681] tracking-wide">
            Click row for signal rationale
          </p>
        </div>
      </div>
    </section>
  );
}
