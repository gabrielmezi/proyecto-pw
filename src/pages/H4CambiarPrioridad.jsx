import Boton from "../estilo/Boton";
import Etiqueta from "../estilo/Etiqueta";
import AreaTexto from "../estilo/AreaTexto";
import Aviso from "../estilo/Aviso";
import Modal from "../estilo/Modal";

export default function H4CambiarPrioridad() {
  return (
    <Modal titulo="Cambiar prioridad">
      <div data-acciones className="flex flex-wrap items-center gap-3">
        <div>
          <p className="mb-2 text-xs text-muted">ACTUAL</p>
          <Etiqueta tono="warning">Media</Etiqueta>
        </div>
        <span>→</span>
        <div>
          <p className="mb-2 text-xs text-muted">NUEVA</p>
          <Etiqueta tono="danger">Crítica</Etiqueta>
        </div>
      </div>
      <AreaTexto
        titulo="MOTIVO (OBLIGATORIO)"
        valor="Afecta al auditorio con evento institucional mañana a las 09:00."
        ayuda=""
      />
      <Aviso tono="warning">
        El ticket subirá al inicio de la cola y su tiempo esperado pasará de 24
        h a 2 h.
      </Aviso>
      <div data-acciones className="flex flex-wrap items-center justify-end gap-3">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="primario">Guardar prioridad</Boton>
      </div>
    </Modal>
  );
}
