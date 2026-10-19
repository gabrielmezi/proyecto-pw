import Boton from "../estilo/Boton";
import Aviso from "../estilo/Aviso";
import Modal from "../estilo/Modal";

export default function H2DesactivarCategoria() {
  return (
    <Modal titulo="Desactivar Audiovisuales">
      <Aviso tono="warning">
        Esta categoría tiene 9 tickets abiertos. Los tickets en curso
        continuarán su atención.
      </Aviso>
      <p>
        Al desactivarla, la comunidad no podrá registrar nuevos tickets en esta
        categoría.
      </p>
      <div className="acciones">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="peligro">Desactivar categoría</Boton>
      </div>
    </Modal>
  );
}
