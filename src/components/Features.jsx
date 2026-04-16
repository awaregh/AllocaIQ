const features = [
  {
    title: 'AI Research Layer',
    description: 'Transforms fragmented data into clear investment signal candidates with consistent reasoning output.',
  },
  {
    title: 'Risk Scoring Engine',
    description: 'Applies deterministic scoring and constraints before any signal is surfaced to decision-makers.',
  },
  {
    title: 'Smart Money Tracking',
    description: 'Monitors institutional flow behavior and changing liquidity conditions across venues.',
  },
]

export default function Features() {
  return (
    <section id="features" className="px-6 pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Features</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
