import { useNavigate } from "react-router";
import { useState } from "react";

import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Modal from "../estilo/Modal";

export default function H4AsignarTecnico() {
  const navigate = useNavigate();
  const [tecnico, setTecnico] = useState(0);
  return (
    <Modal volverTo="/h4/cola" titulo="Asignar TCK-2026-00147">
      <p className="text-muted">Audiovisuales · A-201 · prioridad crítica</p>
      <fieldset className="space-y-2">
        <legend className="mb-2 text-xs font-medium text-muted">TÉCNICO HABILITADO</legend>
        {[
          { nombre: "Julio Paredes Soto", carga: "8 tickets · 2 críticos" },
          { nombre: "Marco Huamán Vela", carga: "6 tickets · 0 críticos" },
          { nombre: "Sandra Nolasco Ríos", carga: "7 tickets · 1 crítico" },
        ].map((opcion, indice) => (
          <div key={opcion.nombre} className="grid">
            <Boton
              variante={tecnico === indice ? "primario" : "secundario"}
              aria-pressed={tecnico === indice}
              onClick={() => setTecnico(indice)}
            >
              <span className="grid w-full grid-cols-2 gap-4 py-2 text-left">
                <span className="font-semibold">{opcion.nombre}</span>
                <span>{opcion.carga}</span>
              </span>
            </Boton>
          </div>
        ))}
      </fieldset>
      <AreaTexto
        titulo="NOTA PARA EL TÉCNICO"
        valor="Hay clase de 10:00 a 13:00; atender antes de esa hora."
        ayuda=""
      />
      <div data-acciones className="flex flex-wrap items-center justify-end gap-3">
        <Boton onClick={() => navigate("/h4/cola")} variante="secundario">Cancelar</Boton>
        <Boton onClick={() => navigate("/h4/cola")} variante="primario">Asignar</Boton>
      </div>
    </Modal>
  );
}
