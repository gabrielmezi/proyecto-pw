import Boton from "../estilo/Boton";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3SinTickets() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <div className="w-full max-w-md">
        <Tarjeta>
          <h1 className="mb-4 text-sm font-medium text-muted">ESTADO VACÍO · SIN TICKETS</h1>
          <Tarjeta>
            <div className="flex flex-col items-center py-2 text-center">
              <span aria-hidden="true" className="mb-5 h-14 w-14 rounded-sm border border-border bg-background" />
              <h2 className="mb-3 text-xl font-semibold">Todavía no has reportado nada</h2>
              <p className="mb-4 text-lg text-muted">
                Cuando registres un ticket lo verás aquí con su estado y su prioridad.
              </p>
              <Boton variante="primario">
                Registrar un ticket
              </Boton>
            </div>
          </Tarjeta>
          <div role="alert">
            <Aviso tono="danger">
            Notificación de error · «No pudimos registrar el ticket. Revisa tu conexión e inténtalo otra vez.»
            </Aviso>
          </div>
        </Tarjeta>
      </div>
    </UsuarioLayout>
  );
}
