import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Selector from "../estilo/Selector";
import AreaTexto from "../estilo/AreaTexto";
import Modal from "../estilo/Modal";

export default function H4AsignacionLote() {
  const navigate = useNavigate();
  return (
    <Modal volverTo="/h4/cola" titulo="Asignar 3 tickets seleccionados">
      <p>TCK-2026-00147 · TCK-2026-00146 · TCK-2026-00145</p>
      <Selector titulo="TÉCNICO">
        <option>Julio Paredes Soto</option>
        <option>Sandra Nolasco Ríos</option>
      </Selector>
      <AreaTexto
        titulo="MOTIVO DE ASIGNACIÓN"
        valor="Atención prioritaria de incidencias del campus."
        ayuda=""
      />
      <div data-acciones className="flex flex-wrap items-center justify-end gap-3">
        <Boton onClick={() => navigate("/h4/cola")} variante="secundario">Cancelar</Boton>
        <Boton onClick={() => navigate("/h4/cola")} variante="primario">Asignar tickets</Boton>
      </div>
    </Modal>
  );
}
