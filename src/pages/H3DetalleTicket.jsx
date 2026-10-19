import BitacoraPublica from "../components/BitacoraPublica";
import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Etiqueta from "../estilo/Etiqueta";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3DetalleTicket() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <TituloPagina
        titulo="TCK-2026-00147"
        descripcion="Proyector no enciende en aula A-201"
      >
        <Etiqueta tono="danger">Crítica</Etiqueta>
        <Etiqueta tono="warning">En atención</Etiqueta>
        <Boton variante="primario">Agregar información</Boton>
      </TituloPagina>
      <div className="dos-columnas">
        <div className="space-y-6">
          <h2 className="mb-6">Bitácora de la atención</h2>
          <BitacoraPublica />
          <Tarjeta titulo="Agregar información">
            <AreaTexto
              titulo="INFORMACIÓN COMPLEMENTARIA"
              valor=""
              ayuda="Escribe aquí si tienes un dato nuevo que ayude al técnico…"
            />
            <Boton variante="primario">Enviar comentario</Boton>
            <p className="text-xs text-muted">
              Las notas internas del equipo técnico no se muestran aquí.
            </p>
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
          <Tarjeta titulo="Línea de tiempo">
            <p>● Abierto · 07/09/2026 08:12 · registrado por ti</p>
            <p>● Asignado · 07/09/2026 08:20 · Lucía Mendoza Ríos</p>
            <p>● En atención · 07/09/2026 08:41 · Julio Paredes Soto</p>
            <p className="text-muted">○ Resuelto · Pendiente</p>
          </Tarjeta>
        </aside>
      </div>
    </UsuarioLayout>
  );
}
