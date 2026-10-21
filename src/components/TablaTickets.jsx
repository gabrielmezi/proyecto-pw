import { useNavigate } from "react-router";
import Tabla from "../estilo/Tabla";

export default function TablaTickets({ tickets }) {
  const navigate = useNavigate();

  return (
    <Tabla titulo="Mis tickets">
      <thead>
        <tr>
          <th scope="col">CÓDIGO</th>
          <th scope="col">ASUNTO</th>
          <th scope="col">CATEGORÍA</th>
          <th scope="col">AMBIENTE</th>
          <th scope="col">REGISTRADO</th>
          <th scope="col">PRIORIDAD</th>
          <th scope="col">ESTADO</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>
              <button
                type="button"
                className="break-all text-left font-mono text-xs text-primary hover:underline"
                onClick={() => navigate(`/h3/detalle-ticket/${ticket.id}`)}
              >
                {ticket.codigo}
              </button>
            </td>
            <td>{ticket.asunto}</td>
            <td>{ticket.categoria}</td>
            <td>{ticket.ambiente}</td>
            <td>{new Date(ticket.creadoEn).toLocaleDateString("es-PE")}</td>
            <td>{ticket.prioridad}</td>
            <td>{ticket.estado}</td>
          </tr>
        ))}
      </tbody>
    </Tabla>
  );
}
