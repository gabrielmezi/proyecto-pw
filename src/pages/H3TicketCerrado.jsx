import Boton from "../estilo/Boton";
import Etiqueta from "../estilo/Etiqueta";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3TicketCerrado() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <TituloPagina
        titulo="TCK-2026-00131"
        descripcion="Piso con residuos tras evento"
      >
        <Etiqueta tono="success">Cerrado</Etiqueta>
      </TituloPagina>
      <Tarjeta titulo="Solución aplicada">
        <p>Resuelto el 03/09/2026 por Rocío Espinoza Farfán.</p>
        <p>Limpieza profunda del ambiente y retiro de residuos del evento.</p>
        <Aviso tono="info">
          Tienes una encuesta pendiente para este ticket. Puedes responderla
          hasta el 10/09/2026.
        </Aviso>
        <div data-acciones className="flex flex-wrap items-center gap-3">
          <Boton variante="primario">Responder encuesta</Boton>
          <Boton variante="secundario">Reabrir ticket</Boton>
        </div>
      </Tarjeta>
    </UsuarioLayout>
  );
}
