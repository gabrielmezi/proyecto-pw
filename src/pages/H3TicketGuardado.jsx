import { useNavigate, useParams } from "react-router";
import { useDatos } from "../context/DatosContext";
import UsuarioLayout from "../components/UsuarioLayout";
import Boton from "../estilo/Boton";
import Tarjeta from "../estilo/Tarjeta";

export default function H3TicketGuardado({ confirmacion = false }) {
  const navigate = useNavigate();

  // RUTA CON PARÁMETRO: el ID permite recuperar el ticket incluso al recargar.
  const { id } = useParams();
  const { misTickets } = useDatos();
  const ticket = misTickets.find((item) => item.id === id);

  if (!ticket) {
    return (
      <UsuarioLayout pagina="mis-tickets">
        <h1 className="mb-4 text-2xl font-semibold">Ticket no encontrado</h1>
        <p className="mb-4">Este ticket no está guardado para el perfil actual en este navegador.</p>
        <Boton onClick={() => navigate("/h3/mis-tickets")}>Ir a mis tickets</Boton>
      </UsuarioLayout>
    );
  }

  return (
    <UsuarioLayout pagina="mis-tickets">
      <h1 className="mb-5 text-2xl font-semibold">
        {confirmacion ? "Tu ticket quedó registrado" : "Detalle del ticket"}
      </h1>

      <Tarjeta titulo={ticket.asunto}>
        <p className="break-all font-mono text-primary">{ticket.codigo}</p>
        <p className="whitespace-pre-wrap">{ticket.descripcion}</p>
        <dl className="grid gap-3 sm:grid-cols-2">
          <div><dt className="text-muted">Estado</dt><dd>{ticket.estado}</dd></div>
          <div><dt className="text-muted">Prioridad</dt><dd>{ticket.prioridad}</dd></div>
          <div><dt className="text-muted">Categoría</dt><dd>{ticket.categoria}</dd></div>
          <div><dt className="text-muted">Subcategoría</dt><dd>{ticket.subcategoria}</dd></div>
          <div><dt className="text-muted">Ambiente</dt><dd>{ticket.ambiente}</dd></div>
          <div><dt className="text-muted">Registrado</dt><dd>{new Date(ticket.creadoEn).toLocaleString("es-PE")}</dd></div>
        </dl>

        <div className="flex flex-wrap gap-3">
          {confirmacion && (
            <Boton onClick={() => navigate(`/h3/detalle-ticket/${ticket.id}`)}>
              Ver el detalle del ticket
            </Boton>
          )}
          <Boton variante="secundario" onClick={() => navigate("/h3/mis-tickets")}>
            Ir a mis tickets
          </Boton>
        </div>
      </Tarjeta>
    </UsuarioLayout>
  );
}
