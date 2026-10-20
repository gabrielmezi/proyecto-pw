export default function BuscadorAmbiente({ valor, ayuda }) {
  return (
    <label className="flex min-w-0 flex-col gap-2 text-[12px] tracking-wide text-muted">
      <span>AMBIENTE</span>
      <span className="flex min-h-10 items-center rounded-sm border border-primary bg-white focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary">
        <input
          className="min-w-0 flex-1 rounded-sm px-3 py-2 font-mono text-[15px] font-medium tracking-normal text-ink focus-visible:outline-none"
          defaultValue={valor}
        />
        <button
          type="button"
          className="shrink-0 rounded-sm px-3 py-2 text-[13px] tracking-normal text-primary"
        >
          Buscar
        </button>
      </span>
      <span className="text-[13px] tracking-normal text-muted empty:hidden">{ayuda}</span>
    </label>
  );
}
