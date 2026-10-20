export default function Campo({
  titulo,
  valor,
  placeholder,
  ayuda,
  error,
  tipo = "text",
  soloLectura = false,
}) {
  return (
    <label className="flex min-w-0 flex-col gap-2 text-[12px] tracking-wide text-muted">
      <span>{titulo}</span>
      <input
        className="min-h-10 w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] tracking-normal text-ink aria-invalid:border-danger"
        type={tipo}
        defaultValue={valor}
        placeholder={placeholder}
        aria-invalid={error}
        readOnly={soloLectura}
      />
      <span className="text-[13px] tracking-normal text-muted empty:hidden">{ayuda}</span>
    </label>
  );
}
