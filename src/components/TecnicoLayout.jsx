import BotonNavegacion from "../estilo/BotonNavegacion";

export default function TecnicoLayout({ children, pagina }) {
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
          ASIGNADOS A MÍ · 8
        </span>
        <div className="text-right text-xs">
          Julio Paredes Soto
          <p className="text-[10px]">TECNICO</p>
        </div>
        <span className="rounded-sm bg-accent p-2 text-xs">JP</span>
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="flex shrink-0 flex-col border-r border-border bg-white p-3 md:w-[236px]">
          <p className="px-3 py-3 text-[11px] text-muted">
            ATENCIÓN
          </p>
          <nav
            className="grid grid-cols-2 md:block"
          >
            <BotonNavegacion activo={pagina === "bandeja"}>
              Mi bandeja<span className="rounded-sm border border-border bg-background px-1 text-[11px]">8</span>
            </BotonNavegacion>
            <BotonNavegacion activo={pagina === "atencion"}>
              En atención<span className="rounded-sm border border-border bg-background px-1 text-[11px]">3</span>
            </BotonNavegacion>
            <BotonNavegacion activo={pagina === "espera"}>
              En espera<span className="rounded-sm border border-border bg-background px-1 text-[11px]">2</span>
            </BotonNavegacion>
            <BotonNavegacion activo={pagina === "resueltos"}>
              Resueltos hoy<span className="rounded-sm border border-border bg-background px-1 text-[11px]">2</span>
            </BotonNavegacion>
            <BotonNavegacion activo={pagina === "historial"}>
              Historial
            </BotonNavegacion>
            <BotonNavegacion activo={pagina === "cuenta"}>
              Mi cuenta
            </BotonNavegacion>
          </nav>
          <div className="mt-auto border-t border-border pt-2">
            <BotonNavegacion>
              Mi cuenta
            </BotonNavegacion>
            <BotonNavegacion>
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
