import { useNavigate } from "react-router";
import Selector from "../estilo/Selector";
import TablaTickets from "../components/TablaTickets";
import FiltroSeleccionado from "../estilo/FiltroSeleccionado";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3MisTickets() {
  const navigate = useNavigate();

  return (
    <UsuarioLayout pagina="mis-tickets">
      <TituloPagina
        titulo="Mis tickets"
        descripcion="12 tickets registrados · 3 en curso"
      >
        <button type="button" onClick={() => navigate("/h3/nuevo-ticket")} className="enabled:hover:bg-primary-dark inline-flex min-h-10 items-center justify-center rounded-sm bg-primary px-4 py-2 text-[13px] font-medium text-white transition">
          Registrar un ticket
        </button>
      </TituloPagina>
      <div className="mb-4 flex flex-wrap items-end gap-3">
        <input
          className="h-10 w-full rounded-sm border border-border bg-white px-3 font-mono text-[13px] placeholder:text-muted sm:w-80"
          placeholder="TCK-2026-…"
        />
        <FiltroSeleccionado>
          Estado: en curso
        </FiltroSeleccionado>
        <FiltroSeleccionado>
          01/08/2026 – 07/09/2026
        </FiltroSeleccionado>
        <Selector titulo="Categoría" flechaInterior>
          <option value="">Categoria: Todas</option>
          <option value="audiovisuales">Audiovisuales</option>
          <option value="redes">Redes</option>
        </Selector>
        <button type="button" className="enabled:hover:bg-gray-200 cursor-pointer rounded-sm px-1 py-2 text-[13px] text-primary transition">
          Limpiar filtros
        </button>
      </div>
      <TablaTickets prioridades={false} />
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-b-sm border border-t-0 border-border bg-white px-4 py-3 text-xs">
        <p className="text-muted">Mostrando 1–8 de 12 tickets</p>
        <nav className="flex items-center gap-1">
          <button type="button" className="enabled:hover:bg-gray-200 min-h-8 rounded-sm border border-border px-3 py-1 transition">Anterior</button>
          <button type="button" className="enabled:hover:bg-primary-dark min-h-8 min-w-8 rounded-sm border border-primary bg-primary px-2 py-1 text-white">1</button>
          <button type="button" className="enabled:hover:bg-gray-200 min-h-8 min-w-8 rounded-sm border border-border px-2 py-1 transition">2</button>
          <button type="button" className="enabled:hover:bg-gray-200 min-h-8 rounded-sm border border-border px-3 py-1 transition">Siguiente</button>
        </nav>
      </div>
    </UsuarioLayout>
  );
}
