export default function Selector({ titulo, children, ayuda, flechaInterior = false }) {
  return (
    <label className="flex min-w-0 flex-col gap-2 text-[12px] text-muted">
      <span>{titulo}</span>
      {flechaInterior ? (
        <span className="relative block">
          <select className="min-h-10 w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] text-ink aria-invalid:border-danger appearance-none pr-10">{children}</select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      ) : (
        <select className="min-h-10 w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] text-ink aria-invalid:border-danger">{children}</select>
      )}
      <span className="text-[13px] text-muted empty:hidden">{ayuda}</span>
    </label>
  );
}
