import { useNavigate } from "react-router";
import { useDatos } from "../context/DatosContext";
import Boton from "../estilo/Boton";
import TablaTickets from "../components/TablaTickets";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3MisTickets() {
  const navigate = useNavigate();

  // ESTADO COMPARTIDO: estos tickets se recuperan de localStorage al iniciar.
  const { misTickets } = useDatos();

  return (
    <UsuarioLayout pagina="mis-tickets">
      <TituloPagina titulo="Mis tickets" descripcion={`${misTickets.length} tickets registrados`}>
        <Boton onClick={() => navigate("/h3/nuevo-ticket")}>Registrar un ticket</Boton>
      </TituloPagina>

      {misTickets.length === 0 ? (
        <p className="rounded-sm border border-border bg-white p-6">
          Todavía no has registrado tickets. Usa «Registrar un ticket» para crear el primero.
        </p>
      ) : (
        <TablaTickets tickets={misTickets} />
      )}
    </UsuarioLayout>
  );
}
