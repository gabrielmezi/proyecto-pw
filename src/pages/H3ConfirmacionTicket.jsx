import Boton from "../estilo/Boton";
import Etiqueta from "../estilo/Etiqueta";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3ConfirmacionTicket() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <section className="mx-auto max-w-4xl space-y-5 rounded-sm border border-border bg-white px-5 py-8 text-center sm:p-8">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-sm border border-success bg-success/10 text-2xl font-semibold text-success">✓</div>
          <h2 className="text-xl font-semibold">Tu ticket quedó registrado</h2>
          <p className="text-[13px] text-muted">
            Guarda el código: con él puedes buscar el ticket desde la cabecera
            en cualquier momento.
          </p>
          <div className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-3 rounded-sm border border-primary bg-primary-soft px-5 py-3 text-primary">
            <span className="font-mono text-2xl font-semibold sm:text-[30px]">TCK-2026-00147</span>
            <Boton variante="heredado">Copiar</Boton>
          </div>
          <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="space-y-1 rounded-sm border border-border p-3">
          <h3 className="text-[11px] font-medium text-muted">PRIORIDAD ASIGNADA</h3>
          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Etiqueta tono="danger">Crítica</Etiqueta>
            <Etiqueta tono="info">Abierto</Etiqueta>
          </div>
          </div>
          <div className="space-y-1 rounded-sm border border-border p-3">
          <h3 className="text-[11px] font-medium text-muted">TIEMPO DE ATENCIÓN ESPERADO</h3>
          <p>2 horas hábiles · antes de las 10:12 del 07/09/2026</p>
          </div>
          <div className="space-y-1 rounded-sm border border-border p-3">
          <h3 className="text-[11px] font-medium text-muted">AMBIENTE</h3>
          <p className="font-mono font-medium">A-201 · Audiovisuales</p>
          </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <Boton variante="primario">Ver el detalle del ticket</Boton>
            <Boton variante="secundario">Ir a mis tickets</Boton>
          </div>
      </section>
    </UsuarioLayout>
  );
}
