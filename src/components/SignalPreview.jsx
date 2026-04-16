const signals = [
  { asset: 'ETH', action: 'BUY', score: '0.78' },
  { asset: 'SOL', action: 'HOLD', score: '0.56' },
  { asset: 'ARB', action: 'SELL', score: '0.32' },
]

const actionStyles = {
  BUY: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  HOLD: 'bg-amber-50 text-amber-700 ring-amber-200',
  SELL: 'bg-rose-50 text-rose-700 ring-rose-200',
}

export default function SignalPreview() {
  return (
    <section id="signals" className="px-6 pb-20">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-3 border-b border-slate-100 px-6 py-3 text-xs font-medium uppercase tracking-widest text-slate-500">
          <span>Asset</span>
          <span>Signal</span>
          <span className="text-right">Score</span>
        </div>
        {signals.map((signal) => (
          <div
            key={signal.asset}
            className="grid grid-cols-3 items-center px-6 py-4 text-sm border-b border-slate-100 last:border-b-0"
          >
            <span className="font-mono font-medium text-slate-900">{signal.asset}</span>
            <span>
              <span
                className={`inline-flex rounded-md px-2 py-1 text-xs font-semibold ring-1 ring-inset ${
                  actionStyles[signal.action]
                }`}
              >
                {signal.action}
              </span>
            </span>
            <span className="text-right font-mono text-slate-700">{signal.score}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
