export default function CTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#58a6ff 1px, transparent 1px), linear-gradient(90deg, #58a6ff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#58a6ff]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="font-mono text-[10px] text-[#58a6ff] tracking-widest uppercase mb-6">
          Early Access
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#e6edf3] leading-tight tracking-tight max-w-3xl mx-auto mb-6">
          Move from fragmented signals to structured intelligence.
        </h2>
        <p className="text-base text-[#8b949e] max-w-xl mx-auto mb-10">
          Join early access to AllocaIQ and evaluate capital opportunities with
          institutional-grade AI systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:access@allocaiq.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#58a6ff] text-[#0d1117] hover:bg-[#79b8ff] transition-colors tracking-wide"
          >
            Request Access
          </a>
        </div>

        <div className="border-t border-white/[0.06] pt-8">
          <p className="font-mono text-xs text-[#6e7681] tracking-widest">
            AllocaIQ — Capital allocation intelligence, redefined.
          </p>
        </div>
      </div>
    </section>
  );
}
