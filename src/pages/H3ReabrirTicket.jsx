import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Modal from "../estilo/Modal";
import AreaTexto from "../estilo/AreaTexto";

export default function H3ReabrirTicket() {
  const navigate = useNavigate();
  return (
    <Modal volverTo="/h3/ticket-cerrado" titulo="Reabrir TCK-2026-00131" compacto>
      <p className="text-lg text-muted">
        Se admite reabrir hasta 7 días después del cierre. Plazo vigente hasta el 10/09/2026.
      </p>
      <AreaTexto
        titulo="MOTIVO (OBLIGATORIO)"
        valor="La limpieza se hizo, pero quedaron restos de pintura en el piso junto a la ventana."
        ayuda="El ticket volverá al estado Reabierto y regresará a la cola con su prioridad original."
        obligatorio
      />
      <div className="flex flex-wrap justify-end gap-3">
        <Boton onClick={() => navigate("/h3/ticket-cerrado")} variante="secundario">Cancelar</Boton>
        <Boton onClick={() => navigate("/h3/detalle-ticket")} variante="peligro">Reabrir ticket</Boton>
      </div>
    </Modal>
  );
}
