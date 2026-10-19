import Boton from "../estilo/Boton";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3SinTickets() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <TituloPagina titulo="Mis tickets" descripcion=""></TituloPagina>
      <Tarjeta titulo="Todavía no has reportado nada">
        <p>
          Cuando registres un ticket lo verás aquí con su estado y su prioridad.
        </p>
        <Boton variante="primario">Registrar un ticket</Boton>
      </Tarjeta>
    </UsuarioLayout>
  );
}
