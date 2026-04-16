export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Autonomous Capital Allocation Intelligence
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Structured investment signals powered by AI reasoning and risk-controlled scoring systems for institutional investors.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            id="request-access"
            href="mailto:access@allocaiq.com"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            Request Access
          </a>
          <a href="#signals" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">
            View Sample Signals
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Built for hedge funds, venture firms, and quantitative investment teams.
        </p>
      </div>
    </section>
  )
}
