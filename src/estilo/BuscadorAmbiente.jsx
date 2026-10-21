export default function BuscadorAmbiente({ valor, ayuda, value, onChange }) {
  return (
    <label className="flex min-w-0 flex-col gap-2 text-[12px] text-muted">
      <span>AMBIENTE</span>
      <span className="flex min-h-10 items-center rounded-sm border border-primary bg-white focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary">
        <input
          className="min-w-0 flex-1 rounded-sm px-3 py-2 font-mono text-[15px] font-medium text-ink focus-visible:outline-none"
          defaultValue={value === undefined ? valor : undefined}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="enabled:hover:bg-gray-200 shrink-0 rounded-sm px-3 py-2 text-[13px] text-primary"
        >
          Buscar
        </button>
      </span>
      <span className="text-[13px] text-muted empty:hidden">{ayuda}</span>
    </label>
  );
}
