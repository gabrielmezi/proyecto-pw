import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Modal from "../estilo/Modal";

export default function H3CancelarTicket() {
  const navigate = useNavigate();
  return (
    <Modal volverTo="/h3/detalle-ticket" titulo="Cancelar TCK-2026-00147">
      <p>
        ¿Seguro que desea cancelar ticket?
      </p>
      <div data-acciones className="flex flex-wrap items-center gap-3">
        <Boton onClick={() => navigate("/h3/detalle-ticket")} variante="secundario">Volver</Boton>
        <Boton onClick={() => navigate("/h3/mis-tickets")} variante="peligro">Cancelar ticket</Boton>
      </div>
    </Modal>
  );
}
