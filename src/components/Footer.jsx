export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#6e7681] tracking-widest uppercase">
          AllocaIQ
        </span>
        <p className="font-mono text-[10px] text-[#6e7681] tracking-wide text-center">
          For institutional use only. Not financial advice. Not a trading system.
        </p>
        <p className="font-mono text-[10px] text-[#6e7681]">
          © {new Date().getFullYear()} AllocaIQ
        </p>
      </div>
    </footer>
  );
}
