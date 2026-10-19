import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Etiqueta from "../estilo/Etiqueta";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import TecnicoLayout from "../components/TecnicoLayout";

export default function H5DetalleAtencion() {
  return (
    <TecnicoLayout pagina="bandeja">
      <TituloPagina
        titulo="TCK-2026-00147"
        descripcion="Proyector no enciende en aula A-201 · Audiovisuales"
      >
        <Etiqueta tono="danger">Crítica</Etiqueta>
        <Etiqueta tono="warning">En atención</Etiqueta>
        <Boton variante="secundario">Cambiar estado</Boton>
        <Boton variante="primario">Cerrar ticket</Boton>
        <Boton variante="secundario">Historial</Boton>
      </TituloPagina>
      <div className="dos-columnas">
        <div className="space-y-6">
          <h2 className="mb-6">Bitácora · 6 entradas</h2>
          <div className="bitacora">
            <article>
              <h3>Camila Quispe Ramos</h3>
              <p className="mb-3 text-xs text-muted">
                Usuario · 07/09/2026 08:12 · COMENTARIO PÚBLICO
              </p>
              <p>
                El proyector enciende el foco pero la imagen no llega. Ya probé
                con dos laptops distintas y el mismo cable.
              </p>
            </article>
            <article>
              <h3>Lucía Mendoza Ríos</h3>
              <p className="mb-3 text-xs text-muted">
                Supervisor · 07/09/2026 08:20 · COMENTARIO PÚBLICO
              </p>
              <p>
                Asignamos tu ticket a Julio Paredes. Se atenderá antes del
                inicio de la clase de 10:00.
              </p>
            </article>
            <article className="bg-amber-50!">
              <h3>Julio Paredes Soto</h3>
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
              <h3>Julio Paredes Soto</h3>
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
            <div className="acciones">
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
            <div className="acciones">
              <Boton variante="primario">Guardar nota interna</Boton>
              <Boton variante="secundario">Adjuntar foto</Boton>
            </div>
          </Tarjeta>
        </div>
        <aside className="space-y-6">
          <Tarjeta titulo="Datos del reporte">
            <p>
              Categoría <strong>Audiovisuales</strong>
            </p>
            <p>
              Subcategoría <strong>Proyector no enciende</strong>
            </p>
            <p>
              Ambiente <strong className="font-mono">A-201</strong>
            </p>
            <p>
              Registrado <strong>07/09/2026 08:12</strong>
            </p>
            <p>
              Técnico asignado <strong>Julio Paredes Soto</strong>
            </p>
            <p>
              Atención esperada <strong>Antes de 10:12</strong>
            </p>
          </Tarjeta>
          <Tarjeta titulo="Ambiente">
            <h2 className="font-mono">A-201</h2>
            <p>Aula · Pabellón A · piso 2 · capacidad 68 · Campus Monterrico</p>
            <p>
              2 tickets abiertos en este ambiente · último cierre 28/08/2026
            </p>
          </Tarjeta>
          <Aviso tono="info">
            Abierto 08:12 → Asignado 08:20 → En atención 08:41 · 1 h 20 min
            transcurridos
          </Aviso>
        </aside>
      </div>
    </TecnicoLayout>
  );
}
