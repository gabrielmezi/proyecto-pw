import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Etiqueta from "../estilo/Etiqueta";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import Modal from "../estilo/Modal";
import Metrica from "../estilo/Metrica";

export default function H5CerrarTicket() {
  const navigate = useNavigate();
  return (
    <Modal volverTo="/h5/detalle-atencion" titulo="Cerrar TCK-2026-00147">
      <AreaTexto
        titulo="SOLUCIÓN APLICADA (OBLIGATORIA)"
        valor="Se reemplazó el extensor HDBaseT del rack del piso 2 y se verificó la proyección con dos laptops distintas."
        ayuda=""
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Metrica
          titulo="TIEMPO TOTAL DE ATENCIÓN"
          valor="3 h 24 min"
          detalle="Dentro del tiempo esperado (8 h)"
        />
        <Tarjeta titulo="ESTADO FINAL">
          <Etiqueta tono="success">Cerrado</Etiqueta>
        </Tarjeta>
      </div>
      <Aviso tono="info">
        Al cerrar, Camila Quispe Ramos recibirá la encuesta de satisfacción y
        podrá reabrir el ticket dentro de 7 días.
      </Aviso>
      <div data-acciones className="flex flex-wrap items-center gap-3">
        <Boton onClick={() => navigate("/h5/detalle-atencion")} variante="secundario">Cancelar</Boton>
        <Boton onClick={() => navigate("/h4/bandeja-tecnico")} variante="primario">Cerrar ticket</Boton>
      </div>
    </Modal>
  );
}
