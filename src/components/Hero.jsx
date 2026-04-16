import { useEffect, useState } from 'react';

const signals = [
  { asset: 'ETH', action: 'BUY', score: 0.78, color: 'text-[#3fb950]', bg: 'bg-[#3fb950]/10 border-[#3fb950]/20' },
  { asset: 'SOL', action: 'HOLD', score: 0.56, color: 'text-[#e3b341]', bg: 'bg-[#e3b341]/10 border-[#e3b341]/20' },
  { asset: 'ARB', action: 'SELL', score: 0.32, color: 'text-[#f85149]', bg: 'bg-[#f85149]/10 border-[#f85149]/20' },
];

function SignalRow({ asset, action, score, color, bg, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`flex items-center justify-between px-3 py-2 border-b border-white/[0.04] last:border-0 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
    >
      <span className="font-mono text-xs text-[#c9d1d9] tracking-wider">{asset}</span>
      <span className={`font-mono text-[10px] font-semibold tracking-widest px-2 py-0.5 border ${bg} ${color}`}>
        {action}
      </span>
      <span className="font-mono text-xs text-[#8b949e]">{score.toFixed(2)}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#58a6ff 1px, transparent 1px), linear-gradient(90deg, #58a6ff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#58a6ff]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.03] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
            <span className="font-mono text-[10px] text-[#8b949e] tracking-widest uppercase">
              Intelligence Layer Active
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.08] tracking-tight text-[#e6edf3] mb-6">
            Autonomous Capital{' '}
            <span className="text-[#58a6ff]">Allocation</span>{' '}
            Intelligence
          </h1>

          <p className="text-base text-[#8b949e] leading-relaxed max-w-lg mb-8">
            AllocaIQ is a dual-layer AI system that transforms fragmented market,
            on-chain, and private-market data into structured, explainable capital
            allocation decisions.
          </p>

          <p className="text-xs text-[#6e7681] uppercase tracking-widest mb-8 font-medium">
            Built for hedge funds, venture firms, and quantitative investment teams.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#58a6ff] text-[#0d1117] hover:bg-[#79b8ff] transition-colors tracking-wide"
            >
              Request Access
            </a>
            <a
              href="#signals"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-white/10 text-[#8b949e] hover:text-[#c9d1d9] hover:border-white/20 transition-all tracking-wide"
            >
              View Sample Signals
            </a>
          </div>
        </div>

        {/* Right: Signal widget */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[320px] border border-white/[0.08] bg-[#0d1117]/80 backdrop-blur-sm">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
              <span className="font-mono text-[10px] text-[#8b949e] tracking-widest uppercase">Signal Feed</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
                <span className="font-mono text-[10px] text-[#3fb950]">Live</span>
              </div>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {signals.map((s, i) => (
                <SignalRow key={s.asset} {...s} delay={i * 200 + 400} />
              ))}
            </div>
            <div className="px-3 py-2 border-t border-white/[0.06] bg-white/[0.02]">
              <p className="font-mono text-[9px] text-[#6e7681] tracking-wide">
                Validated by Risk Engine + Intelligence Layer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
