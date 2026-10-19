import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Modal from "../estilo/Modal";

export default function H4AsignarTecnico() {
  return (
    <Modal titulo="Asignar TCK-2026-00147">
      <p>Audiovisuales · A-201 · prioridad crítica</p>
      <p className="text-xs text-muted">TÉCNICO HABILITADO</p>
      <div className="space-y-2">
        <div className="aviso flex justify-between gap-4">
          <strong>Julio Paredes Soto</strong>
          <span>8 tickets · 2 críticos</span>
        </div>
        <div className="entrada flex justify-between gap-4">
          <span>Marco Huamán Vela</span>
          <span>6 tickets · 0 críticos</span>
        </div>
        <div className="entrada flex justify-between gap-4">
          <span>Sandra Nolasco Ríos</span>
          <span>7 tickets · 1 crítico</span>
        </div>
      </div>
      <AreaTexto
        titulo="NOTA PARA EL TÉCNICO"
        valor="Hay clase de 10:00 a 13:00; atender antes de esa hora."
        ayuda=""
      />
      <div className="acciones">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="primario">Asignar</Boton>
      </div>
    </Modal>
  );
}
