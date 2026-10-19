import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Modal from "../estilo/Modal";

export default function H2NuevoAmbiente() {
  return (
    <Modal titulo="Nuevo ambiente">
      <div className="formulario">
        <Campo titulo="CÓDIGO" valor="H-212" />
        <Selector titulo="TIPO DE AMBIENTE">
          <option>Laboratorio</option>
          <option>Aula</option>
          <option>Auditorio</option>
        </Selector>
        <Campo titulo="PABELLÓN · PISO" valor="H · piso 2" />
        <Campo titulo="CAPACIDAD" valor="30" />
      </div>
      <div className="acciones">
        <Boton variante="secundario">Cancelar</Boton>
        <Boton variante="primario">Guardar ambiente</Boton>
      </div>
    </Modal>
  );
}
