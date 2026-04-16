export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="/" className="text-base font-semibold tracking-tight text-slate-900">
          AllocaIQ
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <a href="#solution" className="transition-colors hover:text-slate-900">
            Product
          </a>
          <a href="#" className="transition-colors hover:text-slate-900">
            Docs
          </a>
          <a href="#" className="transition-colors hover:text-slate-900">
            Pricing
          </a>
          <a href="#" className="transition-colors hover:text-slate-900">
            Login
          </a>
        </div>
        <a
          href="#request-access"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
        >
          Request Access
        </a>
      </div>
    </nav>
  )
}
