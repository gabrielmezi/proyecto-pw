export default function Campo({titulo, valor, placeholder, ayuda, error, tipo = "text", soloLectura = false, }) {
  return (
    <label className="flex min-w-0 flex-col gap-2 text-[12px] text-muted">
      <span>{titulo}</span>
      <input
        className="min-h-10 w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] text-ink data-[error=true]:border-danger"
        type={tipo}
        defaultValue={valor}
        placeholder={placeholder}
        data-error={error}
        readOnly={soloLectura}
      />
      <span className="text-[13px] text-muted empty:hidden">{ayuda}</span>
    </label>
  );
}

