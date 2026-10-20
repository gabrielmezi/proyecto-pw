import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import AreaTexto from "../estilo/AreaTexto";
import Modal from "../estilo/Modal";

export default function H5CambiarEstado() {
  return (
    <Modal titulo="Cambiar estado de TCK-2026-00147">
      <p>
        Estado actual: En atención. Solo se ofrecen las transiciones permitidas.
      </p>
      <label className="rounded-sm border border-primary bg-primary-soft p-4 text-[13px] text-primary data-[tono=warning]:border-warning data-[tono=warning]:bg-[#FBF3E2] data-[tono=warning]:text-warning data-[tono=danger]:border-danger data-[tono=danger]:bg-red-50 data-[tono=danger]:text-danger data-[tono=success]:border-success data-[tono=success]:bg-green-50 data-[tono=success]:text-success flex gap-3" data-tono="warning">
        <input type="radio" name="estado" defaultChecked />
        En espera · falta un repuesto o depende de un tercero
      </label>
      <label className="min-h-10 w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] tracking-normal text-ink aria-invalid:border-danger flex gap-3">
        <input type="radio" name="estado" />
        Resuelto · la falla ya no se presenta
      </label>
      <label className="min-h-10 w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] tracking-normal aria-invalid:border-danger flex gap-3 text-muted">
        <input type="radio" name="estado" disabled />
        Abierto · no disponible desde En atención
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <AreaTexto
          titulo="MOTIVO DE ESPERA (OBLIGATORIO)"
          valor="Repuesto solicitado al almacén con guía 4471."
          ayuda=""
        />
        <Campo
          titulo="FECHA ESTIMADA DE RETORNO"
          tipo="date"
          valor="2026-09-09"
        />
      </div>
      <div data-acciones className="flex flex-wrap items-center gap-3">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="primario">Guardar estado</Boton>
      </div>
    </Modal>
  );
}
