import Boton from "../estilo/Boton";
import Modal from "../estilo/Modal";

export default function H3CancelarTicket() {
  return (
    <Modal titulo="Cancelar TCK-2026-00147">
      <p>
        Este ticket aún no tiene un técnico asignado. ¿Confirmas que deseas
        cancelarlo?
      </p>
      <div className="acciones">
        <Boton variante="secundario">Volver</Boton>
        <Boton variante="peligro">Cancelar ticket</Boton>
      </div>
    </Modal>
  );
}
