import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Modal from "../estilo/Modal";

export default function H4AsignarTecnico() {
  return (
    <Modal titulo="Asignar TCK-2026-00147">
      <p>Audiovisuales · A-201 · prioridad crítica</p>
      <p className="text-xs text-muted">TÉCNICO HABILITADO</p>
      <div className="space-y-2">
        <div className="rounded-sm border border-primary bg-primary-soft p-4 text-[13px] text-primary data-[tono=warning]:border-warning data-[tono=warning]:bg-[#FBF3E2] data-[tono=warning]:text-warning data-[tono=danger]:border-danger data-[tono=danger]:bg-red-50 data-[tono=danger]:text-danger data-[tono=success]:border-success data-[tono=success]:bg-green-50 data-[tono=success]:text-success flex justify-between gap-4">
          <strong>Julio Paredes Soto</strong>
          <span>8 tickets · 2 críticos</span>
        </div>
        <div className="min-h-10 w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] text-ink flex justify-between gap-4">
          <span>Marco Huamán Vela</span>
          <span>6 tickets · 0 críticos</span>
        </div>
        <div className="min-h-10 w-full rounded-sm border border-border bg-white px-3 py-2 text-[15px] text-ink flex justify-between gap-4">
          <span>Sandra Nolasco Ríos</span>
          <span>7 tickets · 1 crítico</span>
        </div>
      </div>
      <AreaTexto
        titulo="NOTA PARA EL TÉCNICO"
        valor="Hay clase de 10:00 a 13:00; atender antes de esa hora."
        ayuda=""
      />
      <div data-acciones className="flex flex-wrap items-center gap-3">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="primario">Asignar</Boton>
      </div>
    </Modal>
  );
}
