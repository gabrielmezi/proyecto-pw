import { useState } from "react";
import TablaTickets from "../components/TablaTickets";
import FiltroSeleccionado from "../estilo/FiltroSeleccionado";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3MisTickets() {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(true);
  const [fechasSeleccionadas, setFechasSeleccionadas] = useState(true);
  const [codigo, setCodigo] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <UsuarioLayout pagina="mis-tickets">
      <TituloPagina
        titulo="Mis tickets"
        descripcion="12 tickets registrados · 3 en curso"
      >
        <button type="button" className="inline-flex min-h-10 items-center justify-center rounded-sm bg-primary px-4 py-2 text-[13px] font-medium text-white transition hover:bg-primary-dark">
          Registrar un ticket
        </button>
      </TituloPagina>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          className="h-10 w-full rounded-sm border border-border bg-white px-3 font-mono text-[13px] placeholder:text-muted sm:w-80"
          aria-label="Código del ticket"
          placeholder="TCK-2026-…"
          value={codigo}
          onChange={(event) => setCodigo(event.target.value)}
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
        <select className="h-full w-full appearance-none rounded-sm border border-border bg-white pl-3 pr-7 text-[13px] text-muted" aria-label="Categoría" value={categoria} onChange={(event) => setCategoria(event.target.value)}>
          <option value="">Categoría: todas</option>
          <option value="audiovisuales">Audiovisuales</option>
          <option value="redes">Redes y conectividad</option>
        </select>
        <svg className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="m2 4 4 4 4-4Z" />
        </svg>
        </span>
        <button
          type="button"
          className="cursor-pointer rounded-sm px-1 py-2 text-[13px] text-primary transition hover:bg-blue-50"
          onClick={() => {
            setEstadoSeleccionado(false);
            setFechasSeleccionadas(false);
            setCodigo("");
            setCategoria("");
          }}
        >
          Limpiar filtros
        </button>
      </div>
      <TablaTickets prioridades={false} />
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-b-sm border border-t-0 border-border bg-white px-4 py-3 text-xs">
        <p className="text-muted">Mostrando 1–8 de 12 tickets</p>
        <nav aria-label="Paginación de mis tickets" className="flex items-center gap-1">
          <button type="button" disabled className="min-h-8 rounded-sm border border-border px-3 py-1 text-muted">Anterior</button>
          <button type="button" aria-current="page" className="min-h-8 min-w-8 rounded-sm border border-primary bg-primary px-2 py-1 text-white">1</button>
          <button type="button" className="min-h-8 min-w-8 rounded-sm border border-border px-2 py-1 transition hover:bg-blue-50">2</button>
          <button type="button" className="min-h-8 rounded-sm border border-border px-3 py-1 transition hover:bg-blue-50">Siguiente</button>
        </nav>
      </div>
    </UsuarioLayout>
  );
}
