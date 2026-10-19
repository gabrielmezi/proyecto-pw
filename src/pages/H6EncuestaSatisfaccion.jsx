import Boton from "../estilo/Boton";
import AreaTexto from "../estilo/AreaTexto";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H6EncuestaSatisfaccion() {
  return (
    <UsuarioLayout pagina="encuesta">
      <TituloPagina
        titulo="¿Cómo fue la atención de tu ticket?"
        descripcion="Tu respuesta ayuda al área de Infraestructura a mejorar los tiempos y el trato. Toma menos de un minuto."
      ></TituloPagina>
      <div className="dos-columnas">
        <div className="space-y-6">
          <Tarjeta titulo="PUNTAJE GENERAL">
            <div className="acciones">
              <Boton variante="secundario">1</Boton>
              <Boton variante="secundario">2</Boton>
              <Boton variante="secundario">3</Boton>
              <Boton variante="primario">4</Boton>
              <Boton variante="secundario">5</Boton>
            </div>
            <p className="text-primary">4 · Buena atención</p>
            <h3>CALIFICACIÓN POR ASPECTOS</h3>
            <p>Rapidez</p>
            <div className="acciones">
              <Boton variante="secundario">1</Boton>
              <Boton variante="secundario">2</Boton>
              <Boton variante="secundario">3</Boton>
              <Boton variante="primario">4</Boton>
              <Boton variante="secundario">5</Boton>
            </div>
            <p>Trato del técnico</p>
            <div className="acciones">
              <Boton variante="secundario">1</Boton>
              <Boton variante="secundario">2</Boton>
              <Boton variante="secundario">3</Boton>
              <Boton variante="primario">4</Boton>
              <Boton variante="secundario">5</Boton>
            </div>
            <p>Solución del problema</p>
            <div className="acciones">
              <Boton variante="secundario">1</Boton>
              <Boton variante="secundario">2</Boton>
              <Boton variante="secundario">3</Boton>
              <Boton variante="primario">4</Boton>
              <Boton variante="secundario">5</Boton>
            </div>
            <AreaTexto
              titulo="COMENTARIO (OPCIONAL)"
              valor="El técnico llegó rápido y explicó qué había pasado. Tardó un día porque faltaba el repuesto."
              ayuda="Tu comentario lo lee el supervisor del área; el técnico lo ve sin tu nombre."
            />
            <div className="acciones">
              <Boton variante="primario">Enviar encuesta</Boton>
              <Boton variante="secundario">Responder después</Boton>
            </div>
          </Tarjeta>
        </div>
        <aside className="space-y-6">
          <Tarjeta titulo="Ticket evaluado">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00130
            </span>
            <p>Extensión eléctrica en mal estado</p>
            <p>
              Categoría <strong>Eléctrico</strong>
            </p>
            <p>
              Ambiente <strong>E-304</strong>
            </p>
            <p>
              Técnico <strong>Iván Zegarra Pinto</strong>
            </p>
            <p>
              Cerrado <strong>01/09/2026</strong>
            </p>
            <p>
              Tiempo de atención <strong>1 d 6 h 12 min</strong>
            </p>
            <Aviso tono="info">
              Puedes editar tu respuesta hasta 7 días después de enviarla.
            </Aviso>
          </Tarjeta>
        </aside>
      </div>
    </UsuarioLayout>
  );
}
