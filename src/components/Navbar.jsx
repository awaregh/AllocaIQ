export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#080b0f]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm tracking-widest text-[#58a6ff] font-semibold uppercase">
            AllocaIQ
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs text-[#8b949e] tracking-wide uppercase font-medium">
          <a href="#solution" className="hover:text-[#c9d1d9] transition-colors">Platform</a>
          <a href="#features" className="hover:text-[#c9d1d9] transition-colors">Features</a>
          <a href="#signals" className="hover:text-[#c9d1d9] transition-colors">Signals</a>
          <a href="#trust" className="hover:text-[#c9d1d9] transition-colors">About</a>
        </div>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] hover:bg-[#58a6ff]/20 hover:border-[#58a6ff]/50 transition-all"
        >
          Request Access
        </a>
      </div>
    </nav>
  );
}
