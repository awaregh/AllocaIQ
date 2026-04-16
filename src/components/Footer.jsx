export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <span className="text-sm font-medium text-slate-800">AllocaIQ</span>
        <p className="text-xs text-slate-500">For institutional use only. Not financial advice.</p>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} AllocaIQ</p>
      </div>
    </footer>
  )
}
