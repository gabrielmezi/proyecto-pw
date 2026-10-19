import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import AreaTexto from "../estilo/AreaTexto";
import Modal from "../estilo/Modal";

export default function H5CambiarEstado() {
  return (
    <Modal titulo="Cambiar estado de TCK-2026-00147">
      <p>
        Estado actual: En atención. Solo se ofrecen las transiciones permitidas.
      </p>
      <label className="aviso flex gap-3" data-tono="warning">
        <input type="radio" name="estado" defaultChecked />
        En espera · falta un repuesto o depende de un tercero
      </label>
      <label className="entrada flex gap-3">
        <input type="radio" name="estado" />
        Resuelto · la falla ya no se presenta
      </label>
      <label className="entrada flex gap-3 text-muted">
        <input type="radio" name="estado" disabled />
        Abierto · no disponible desde En atención
      </label>
      <div className="formulario">
        <AreaTexto
          titulo="MOTIVO DE ESPERA (OBLIGATORIO)"
          valor="Repuesto solicitado al almacén con guía 4471."
          ayuda=""
        />
        <Campo
          titulo="FECHA ESTIMADA DE RETORNO"
          tipo="date"
          valor="2026-09-09"
        />
      </div>
      <div className="acciones">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="primario">Guardar estado</Boton>
      </div>
    </Modal>
  );
}
