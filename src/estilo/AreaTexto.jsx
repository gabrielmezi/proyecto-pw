export default function AreaTexto({ titulo, valor, placeholder, ayuda, contador, obligatorio = false }) {
  return (
    <label className="flex min-w-0 flex-col gap-2 text-[12px] text-muted">
      <span>{titulo}</span>
      <textarea className="w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] text-ink
      placeholder:text-muted aria-invalid:border-danger min-h-28 resize-none"
        defaultValue={valor} placeholder={placeholder} required={obligatorio} />
      {contador ? (
        <span className="flex items-baseline justify-between gap-4">
          <span className="text-[13px] text-muted empty:hidden">{ayuda}</span>
          <span className="text-[13px] empty:hidden shrink-0 text-right">{contador}</span>
        </span>
      ) : (
        <span className="text-[13px] text-muted empty:hidden">{ayuda}</span>
      )}
    </label>
  );
}
