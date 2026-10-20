import TablaTickets from "../components/TablaTickets";
import Boton from "../estilo/Boton";
import FiltroSeleccionado from "../estilo/FiltroSeleccionado";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import Paginacion from "../estilo/Paginacion";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3MisTickets() {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(true);
  const [fechasSeleccionadas, setFechasSeleccionadas] = useState(true);

  return (
    <UsuarioLayout pagina="mis-tickets">
      <TituloPagina
        titulo="Mis tickets"
        descripcion="12 tickets registrados · 3 en curso"
      >
        <Boton variante="primario">Registrar un ticket</Boton>
      </TituloPagina>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          className="h-10 w-full rounded-sm border border-border bg-white px-3 font-mono text-[13px] placeholder:text-muted sm:w-80"
          aria-label="Código del ticket"
          placeholder="TCK-2026-…"
        />
        {estadoSeleccionado && (
          <FiltroSeleccionado
            etiquetaQuitar="Quitar filtro de estado"
            onQuitar={() => setEstadoSeleccionado(false)}
          >
            Estado: en curso
          </FiltroSeleccionado>
        )}
        {fechasSeleccionadas && (
          <FiltroSeleccionado
            etiquetaQuitar="Quitar filtro de fechas"
            onQuitar={() => setFechasSeleccionadas(false)}
          >
            01/08/2026 – 07/09/2026
          </FiltroSeleccionado>
        )}
        <span className="relative inline-flex h-10 w-[150px] shrink-0">
        <select className="h-full w-full appearance-none rounded-sm border border-border bg-white pl-3 pr-7 text-[13px] text-muted" aria-label="Categoría">
          <option>Categoría: todas</option>
          <option>Audiovisuales</option>
          <option>Redes y conectividad</option>
        </select>
        <svg className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="m2 4 4 4 4-4Z" />
        </svg>
        </span>
        <Boton variante="terciario">Limpiar filtros</Boton>
      </div>
      <TablaTickets />
      <Paginacion>Mostrando 1–8 de 12 tickets</Paginacion>
    </UsuarioLayout>
  );
}
import { useState } from "react";
