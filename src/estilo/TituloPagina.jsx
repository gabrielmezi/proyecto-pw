export default function TituloPagina({ titulo, descripcion, children }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-[28px] leading-8 font-semibold">{titulo}</h1>
        <p className="mt-1 text-[13px] text-muted">{descripcion}</p>
      </div>
      <div data-acciones className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}
