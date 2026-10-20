import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Modal from "../estilo/Modal";

export default function H3ReabrirTicket() {
  return (
    <Modal titulo="Reabrir TCK-2026-00131">
      <p>
        Se admite reabrir hasta 7 días después del cierre. Plazo vigente hasta
        el 10/09/2026.
      </p>
      <AreaTexto
        titulo="MOTIVO (OBLIGATORIO)"
        valor="La limpieza se hizo, pero quedaron restos de pintura en el piso junto a la ventana."
        ayuda="El ticket volverá al estado Reabierto y regresará a la cola con su prioridad original."
      />
      <div data-acciones className="flex flex-wrap items-center gap-3">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="peligro">Reabrir ticket</Boton>
      </div>
    </Modal>
  );
}
