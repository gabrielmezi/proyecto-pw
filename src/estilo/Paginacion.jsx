import Boton from "./Boton";
export default function Paginacion({ children }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border border-t-0 border-border bg-white px-4 py-3 text-[13px] text-muted">
      <span>{children}</span>
      <div data-acciones className="flex flex-wrap items-center gap-3">
        <Boton variante="secundario">Anterior</Boton>
        <Boton>1</Boton>
        <Boton variante="secundario">2</Boton>
        <Boton variante="secundario">3</Boton>
        <Boton variante="secundario">Siguiente</Boton>
      </div>
    </div>
  );
}
