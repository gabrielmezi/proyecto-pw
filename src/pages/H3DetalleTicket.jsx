import H3BitacoraAtencion from "./H3BitacoraAtencion";
import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Tarjeta from "../estilo/Tarjeta";
import Etiqueta from "../estilo/Etiqueta";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3DetalleTicket() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <p className="mb-2 text-xs text-muted">
        Mis tickets · <span className="font-mono text-ink">TCK-2026-00147</span>
      </p>
      <header className="mb-5">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="font-mono text-2xl font-semibold text-primary">TCK-2026-00147</h1>
          <Etiqueta tono="danger">Crítica</Etiqueta>
          <Etiqueta tono="warning">En atención</Etiqueta>
          <div className="ml-auto">
            <Boton onClick={() => window.location.assign("#agregar-informacion")} variante="secundario">Agregar información</Boton>
          </div>
        </div>
        <h2 className="mt-5 text-lg font-semibold">Proyector no enciende en aula A-201</h2>
      </header>

      <div className="flex flex-col items-start gap-6 lg:flex-row">
        <div className="w-full min-w-0 lg:flex-1">
          <Tarjeta titulo="Bitácora de la atención">
            <H3BitacoraAtencion />
            <div id="agregar-informacion" className="mt-4 border-t border-border pt-4">
              <AreaTexto
                titulo="AGREGAR INFORMACIÓN"
                placeholder="Escribe aquí si tienes un dato nuevo que ayude al técnico..."
              />
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Boton variante="primario">Enviar comentario</Boton>
                <p className="text-xs text-muted">Las notas internas del equipo técnico no se muestran aquí.</p>
              </div>
            </div>
          </Tarjeta>
        </div>

        <aside className="flex w-full shrink-0 flex-col gap-4 lg:w-80 xl:w-96">
          <Tarjeta titulo="Datos del reporte">
            <dl className="text-sm">
              <div className="flex justify-between gap-3 border-b border-border py-2">
                <dt className="shrink-0 text-muted">Categoría</dt>
                <dd className="text-right">Audiovisuales</dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-border py-2">
                <dt className="shrink-0 text-muted">Subcategoría</dt>
                <dd className="text-right">Proyector no enciende</dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-border py-2">
                <dt className="shrink-0 text-muted">Ambiente</dt>
                <dd className="text-right font-mono font-medium">A-201</dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-border py-2">
                <dt className="shrink-0 text-muted">Registrado</dt>
                <dd className="text-right">07/09/2026 08:12</dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-border py-2">
                <dt className="shrink-0 text-muted">Técnico asignado</dt>
                <dd className="text-right">Julio Paredes Soto</dd>
              </div>
              <div className="flex justify-between gap-3 pt-2">
                <dt className="shrink-0 text-muted">Atención esperada</dt>
                <dd className="text-right">Antes de 10:12</dd>
              </div>
            </dl>
          </Tarjeta>

          <Tarjeta titulo="Línea de tiempo">
            <ol className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-success" />
                <div>
                  <p>Abierto</p>
                  <p className="text-xs text-muted">07/09/2026 08:12 · registrado por ti</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-success" />
                <div>
                  <p>Asignado</p>
                  <p className="text-xs text-muted">07/09/2026 08:20 · Lucía Mendoza Ríos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-warning" />
                <div>
                  <p>En atención</p>
                  <p className="text-xs text-muted">07/09/2026 08:41 · Julio Paredes Soto</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-border" />
                <div>
                  <p>Resuelto</p>
                  <p className="text-xs">Pendiente</p>
                </div>
              </li>
            </ol>
          </Tarjeta>
        </aside>
      </div>
    </UsuarioLayout>
  );
}
