import { useNavigate } from "react-router";
import BotonNavegacion from "../estilo/BotonNavegacion";

export default function SupervisorLayout({ children, pagina }) {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col" data-pagina={pagina}>
       <header className="flex min-h-[60px] flex-wrap items-center gap-5 bg-primary px-6 py-3 text-white">
        <strong className="flex w-[188px] items-center gap-3">
          <span className="h-5 w-5 rounded-sm bg-white" />
          Mesa de Ayuda
        </strong>
        <input
          className="min-w-0 flex-1 rounded-sm border border-white/25 bg-white/10 px-3 py-2 font-mono text-xs placeholder:text-white/80 lg:max-w-md"
          placeholder="⌕ Buscar por código de ticket · TCK-2026-…"
        />
        <span className="ml-auto rounded-sm bg-white/10 px-3 py-1 text-[11px]">
          COLA SIN ASIGNAR · 9
        </span>
        <div className="text-right text-xs">
          Lucía Mendoza Ríos
          <p className="text-[10px]">SUPERVISOR</p>
        </div>
        <span className="rounded-sm bg-accent p-2 text-xs">LM</span>
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="flex shrink-0 flex-col border-r border-border bg-white p-3 md:w-[236px]">
          <p className="px-3 py-3 text-[11px] text-muted">
            SUPERVISIÓN
          </p>
          <nav
            className="grid grid-cols-2 md:block"
          >
            <BotonNavegacion activo={pagina === "tablero"}>
              Tablero
            </BotonNavegacion>
            <BotonNavegacion onClick={() => navigate("/h4/cola")} activo={pagina === "cola"}>
              Cola de atención<span className="rounded-sm border border-border bg-background px-1 text-[11px]">24</span>
            </BotonNavegacion>
            <BotonNavegacion onClick={() => navigate("/h4/bandeja-tecnico")} activo={pagina === "bandejas"}>
              Bandejas de técnicos<span className="rounded-sm border border-border bg-background px-1 text-[11px]">6</span>
            </BotonNavegacion>
            <BotonNavegacion onClick={() => navigate("/h2/categorias")} activo={pagina === "categorias"}>
              Categorías<span className="rounded-sm border border-border bg-background px-1 text-[11px]">7</span>
            </BotonNavegacion>
            <BotonNavegacion onClick={() => navigate("/h2/ambientes")} activo={pagina === "ambientes"}>
              Sedes y ambientes<span className="rounded-sm border border-border bg-background px-1 text-[11px]">48</span>
            </BotonNavegacion>
            <BotonNavegacion onClick={() => navigate("/h2/tecnicos-por-categoria")} activo={pagina === "tecnicos"}>
              Técnicos por categoría
            </BotonNavegacion>
            <BotonNavegacion activo={pagina === "satisfaccion"}>
              Satisfacción
            </BotonNavegacion>
            <BotonNavegacion activo={pagina === "carga"}>
              Carga por técnico
            </BotonNavegacion>
            <BotonNavegacion activo={pagina === "usuarios"}>
              Usuarios<span className="rounded-sm border border-border bg-background px-1 text-[11px]">15</span>
            </BotonNavegacion>
          </nav>
          <div className="mt-auto border-t border-border pt-2">
            <BotonNavegacion onClick={() => navigate("/h1/mi-cuenta")} >
              Mi cuenta
            </BotonNavegacion>
            <BotonNavegacion onClick={() => navigate("/h1/iniciar-sesion")} >
              Cerrar sesión
            </BotonNavegacion>
          </div>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="mx-auto w-full max-w-[1684px] flex-1 px-4 py-7 lg:px-8">
            {children}
          </main>
          <footer className="flex min-h-11 flex-wrap items-center justify-between gap-2 border-t border-border bg-white px-6 py-3 text-[11px] text-muted">
            <span>
              Mesa de Ayuda de Servicios del Campus · Universidad de Lima
            </span>
            <span>
              soporte.campus@ulima.edu.pe · anexo 30500 · Términos · Privacidad
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
