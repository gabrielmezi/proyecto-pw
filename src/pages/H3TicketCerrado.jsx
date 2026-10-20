import Boton from "../estilo/Boton";
import Aviso from "../estilo/Aviso";
import Etiqueta from "../estilo/Etiqueta";
import Tarjeta from "../estilo/Tarjeta";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3TicketCerrado() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <div className="w-full max-w-md">
        <Tarjeta>
          <h1 className="mb-4 text-sm font-medium tracking-widest text-muted">
            CERRADO CON ENCUESTA PENDIENTE
          </h1>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h2 className="font-mono text-lg font-medium text-primary">TCK-2026-00131</h2>
            <Etiqueta tono="success">Cerrado</Etiqueta>
          </div>
          <Aviso tono="success">
            Resuelto el 03/09/2026 por Rocío Espinoza Farfán. Solución: limpieza
            profunda del ambiente y retiro de residuos del evento.
          </Aviso>
          <Aviso tono="warning">
            Tienes una encuesta pendiente para este ticket. Puedes responderla hasta el 10/09/2026.
          </Aviso>
          <div className="grid grid-cols-2 gap-3">
            <Boton variante="primario">
              Responder encuesta
            </Boton>
            <Boton variante="peligro">
              Reabrir ticket
            </Boton>
          </div>
        </Tarjeta>
      </div>
    </UsuarioLayout>
  );
}
