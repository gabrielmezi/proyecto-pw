import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Etiqueta from "../estilo/Etiqueta";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TecnicoLayout from "../components/TecnicoLayout";

export default function H5DetalleAtencion() {
  return (
    <TecnicoLayout pagina="bandeja">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-[28px] leading-8 font-semibold font-mono text-primary">TCK-2026-00147</h1>
            <Etiqueta tono="danger">Crítica</Etiqueta>
            <Etiqueta tono="warning">En atención</Etiqueta>
            <span className="text-xs text-danger font-semibold">Vence en 1 h 42 min</span>
          </div>
            <p className="mt-2 font-semibold">Proyector no enciende en aula A-201 · Audiovisuales</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
        <Boton variante="primario">Cambiar estado</Boton>
        <Boton variante="secundario">Cerrar ticket</Boton>
        <Boton variante="terciario">Historial</Boton>
        </div>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-6">Bitácora · 6 entradas</h2>
          <div className="border-l-2 border-border pl-6 [&_article]:relative [&_article]:mb-6 [&_article]:rounded-sm [&_article]:border [&_article]:border-border [&_article]:bg-white [&_article]:p-4 [&_article]:before:absolute [&_article]:before:-left-[33px] [&_article]:before:top-5 [&_article]:before:h-3 [&_article]:before:w-3 [&_article]:before:rounded-full [&_article]:before:border-2 [&_article]:before:border-primary [&_article]:before:bg-white [&_article]:before:content-['']">
            <article>
              <h3 className="text-base font-semibold">Camila Quispe Ramos</h3>
              <p className="mb-3 text-xs text-muted">
                Usuario · 07/09/2026 08:12 · COMENTARIO PÚBLICO
              </p>
              <p>
                El proyector enciende el foco pero la imagen no llega. Ya probé
                con dos laptops distintas y el mismo cable.
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold">Lucía Mendoza Ríos</h3>
              <p className="mb-3 text-xs text-muted">
                Supervisor · 07/09/2026 08:20 · COMENTARIO PÚBLICO
              </p>
              <p>
                Asignamos tu ticket a Julio Paredes. Se atenderá antes del
                inicio de la clase de 10:00.
              </p>
            </article>
            <article className="bg-[#FBF3E2]!">
              <h3 className="text-base font-semibold">Julio Paredes Soto</h3>
              <p className="mb-3 text-xs text-warning">
                Técnico · 07/09/2026 08:41 · NOTA INTERNA · NO VISIBLE PARA EL
                USUARIO
              </p>
              <p>
                Nota interna: el HDMI de la mesa mide 0 V. Probable falla del
                extensor HDBaseT del rack del piso 2.
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold">Julio Paredes Soto</h3>
              <p className="mb-3 text-xs text-muted">
                Técnico · 07/09/2026 09:05 · COMENTARIO PÚBLICO
              </p>
              <p>
                Subí al aula con un cable de reemplazo. La imagen vuelve con
                conexión directa; el problema está en el extensor del rack.
              </p>
            </article>
          </div>
          <Tarjeta titulo="Nueva entrada de bitácora">
            <div data-acciones className="flex flex-wrap items-center gap-3">
              <Boton variante="secundario">Comentario público</Boton>
              <Boton variante="primario">Nota interna</Boton>
            </div>
            <Aviso tono="warning">
              Estás escribiendo una nota interna: solo la ve el equipo técnico y
              el supervisor.
            </Aviso>
            <AreaTexto
              titulo="NOTA INTERNA"
              valor="Extensor HDBaseT del rack del piso 2 sin salida. Pedí repuesto al almacén con guía 4471."
              ayuda=""
            />
            <div data-acciones className="flex flex-wrap items-center gap-3">
              <Boton variante="primario">Guardar nota interna</Boton>
              <Boton variante="secundario">Adjuntar foto</Boton>
            </div>
          </Tarjeta>
        </div>
        <aside className="space-y-6">
          <Tarjeta titulo="Datos del reporte">
            <div className="divide-y divide-border">
              <div className="flex justify-between gap-4 py-2">
                <span className="text-muted">Solicitante</span>
                <span className="font-medium">Camila Quispe Ramos</span>
              </div>

              <div className="flex justify-between gap-4 py-2">
                <span className="text-muted">Teléfono</span>
                <span className="font-medium">987 654 321</span>
              </div>

              <div className="flex justify-between gap-4 py-2">
                <span className="text-muted">Subcategoria</span>
                <span className="font-medium">Proyector no enciende</span>
              </div>

              <div className="flex justify-between gap-4 py-2">
                <span className="text-muted">Registrado</span>
                <span className="font-medium">07/09/2026 08:12</span>
              </div>
            </div>
            <p className="bg-background rounded-sm p-3">
              «El proyector enciende el foco pero la imagen no llega. Probé con dos laptops y el mismo cable HDMI de la mesa.»
            </p>
          </Tarjeta>
          <Tarjeta titulo="Ambiente">
            <h2 className="text-xl font-semibold font-mono text-primary">A-201</h2>
            <p>Aula · Pabellón A · piso 2 · capacidad 68 · Campus Monterrico</p>
            <p>
              2 tickets abiertos en este ambiente · último cierre 28/08/2026
            </p>
          </Tarjeta>
          <Tarjeta titulo= "Historial reciente">
            <span>
              Abierto 08:12 → Asignado 08:20 → En atención 08:41 · 1 h 20 min
              transcurridos
            </span>
          </Tarjeta>
        </aside>
      </div>
    </TecnicoLayout>
  );
}
