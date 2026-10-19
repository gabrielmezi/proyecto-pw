import Boton from "../estilo/Boton";
import Modal from "../estilo/Modal";

export default function H4DevolverCola() {
  return (
    <Modal titulo="¿Devolver 3 tickets a la cola?">
      <p>
        Se quitará el técnico asignado y los tickets volverán al estado Abierto.
        La bitácora conserva el historial.
      </p>
      <div className="acciones">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="peligro">Devolver a la cola</Boton>
      </div>
    </Modal>
  );
}
