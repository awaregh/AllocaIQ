export default function Solution() {
  return (
    <section id="solution" className="px-6 pb-16">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Solution</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          A dual-layer AI system that produces structured, explainable capital allocation decisions.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">Intelligence Layer</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              LLM-based reasoning interprets fragmented financial, market, and on-chain inputs into structured signals.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">Risk Layer</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Deterministic scoring validates outputs against volatility, exposure, and liquidity constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
