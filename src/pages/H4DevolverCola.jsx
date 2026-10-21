import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Modal from "../estilo/Modal";

export default function H4DevolverCola() {
  const navigate = useNavigate();
  return (
    <Modal volverTo="/h4/bandeja-tecnico" titulo="¿Devolver 3 tickets a la cola?">
      <p>
        Se quitará el técnico asignado y los tickets volverán al estado Abierto.
        La bitácora conserva el historial.
      </p>
      <div data-acciones className="flex flex-wrap items-center justify-end gap-3">
        <Boton onClick={() => navigate("/h4/bandeja-tecnico")} variante="secundario">Cancelar</Boton>
        <Boton onClick={() => navigate("/h4/cola")} variante="peligro">Devolver a la cola</Boton>
      </div>
    </Modal>
  );
}
