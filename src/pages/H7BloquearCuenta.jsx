import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Modal from "../estilo/Modal";

export default function H7BloquearCuenta() {
  return (
    <Modal titulo="Bloquear la cuenta de Pedro Salcedo Ayala">
      <p>
        La persona no podrá iniciar sesión ni registrar tickets. Sus 4 tickets
        existentes se mantienen y siguen su curso.
      </p>
      <AreaTexto
        titulo="MOTIVO DEL BLOQUEO (OBLIGATORIO)"
        valor="Registró seis tickets duplicados del mismo ambiente en un día pese a los avisos."
        ayuda=""
      />
      <label className="flex items-center gap-2">
        <input type="checkbox" className="h-4 w-4 accent-primary" />
        Notificar a la persona por correo
      </label>
      <div data-acciones className="flex flex-wrap items-center gap-3">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="peligro">Bloquear cuenta</Boton>
      </div>
    </Modal>
  );
}
