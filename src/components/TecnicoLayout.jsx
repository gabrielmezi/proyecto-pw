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
          aria-label="Buscar por código de ticket"
          placeholder="⌕ Buscar por código de ticket · TCK-2026-…"
        />
        <span className="ml-auto rounded-sm bg-white/10 px-3 py-1 text-[11px] tracking-wide">
          ASIGNADOS A MÍ · 8
        </span>
        <div className="text-right text-xs">
          Julio Paredes Soto
          <p className="text-[10px] tracking-widest">TECNICO</p>
        </div>
        <span className="rounded-sm bg-accent p-2 text-xs">JP</span>
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="flex shrink-0 flex-col border-r border-border bg-white p-3 md:w-[236px]">
          <p className="px-3 py-3 text-[11px] tracking-widest text-muted">
            ATENCIÓN
          </p>
          <nav
            aria-label="Navegación Tecnico"
            className="grid grid-cols-2 md:block"
          >
            <button type="button" className="nav-item nav-bandeja">
              Mi bandeja<span className="contador">8</span>
            </button>
            <button type="button" className="nav-item nav-atencion">
              En atención<span className="contador">3</span>
            </button>
            <button type="button" className="nav-item nav-espera">
              En espera<span className="contador">2</span>
            </button>
            <button type="button" className="nav-item nav-resueltos">
              Resueltos hoy<span className="contador">2</span>
            </button>
            <button type="button" className="nav-item nav-historial">
              Historial
            </button>
            <button type="button" className="nav-item nav-cuenta">
              Mi cuenta
            </button>
          </nav>
          <div className="mt-auto border-t border-border pt-2 md:mt-auto">
            <button type="button" className="nav-item">
              Mi cuenta
            </button>
            <button type="button" className="nav-item">
              Cerrar sesión
            </button>
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
