export default function TituloPagina({ titulo, descripcion, children }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1>{titulo}</h1>
        <p className="mt-1 text-[13px] text-muted">{descripcion}</p>
      </div>
      <div className="acciones">{children}</div>
    </div>
  );
}
