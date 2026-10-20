export default function H3BitacoraAtencion() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <article className="rounded-sm border border-border bg-white p-4">
        <header className="mb-2 flex flex-wrap items-center gap-2">
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-accent text-xs font-semibold text-white">CQ</span>
          <h3 className="text-sm font-medium">Camila Quispe Ramos</h3>
          <p className="text-xs text-muted">Usuario · 07/09/2026 08:12</p>
        </header>
        <p>
          El proyector enciende el foco pero la imagen no llega. Ya probé con
          dos laptops distintas y el mismo cable.
        </p>
      </article>
      <article className="rounded-sm border border-border bg-white p-4">
        <header className="mb-2 flex flex-wrap items-center gap-2">
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary-dark text-xs font-semibold text-white">LM</span>
          <h3 className="text-sm font-medium">Lucía Mendoza Ríos</h3>
          <p className="text-xs text-muted">Supervisor · 07/09/2026 08:20</p>
        </header>
        <p>
          Asignamos tu ticket a Julio Paredes. Se atenderá antes del inicio de
          la clase de 10:00.
        </p>
      </article>
      <article className="rounded-sm border border-border bg-white p-4">
        <header className="mb-2 flex flex-wrap items-center gap-2">
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary text-xs font-semibold text-white">JP</span>
          <h3 className="text-sm font-medium">Julio Paredes Soto</h3>
          <p className="text-xs text-muted">Técnico · 07/09/2026 09:05</p>
        </header>
        <p>
          Subí al aula con un cable de reemplazo. La imagen vuelve con conexión
          directa; el problema está en el extensor del rack.
        </p>
      </article>
    </div>
  );
}
