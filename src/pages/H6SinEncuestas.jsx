import Boton from "../estilo/Boton";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H6SinEncuestas() {
  return (
    <UsuarioLayout pagina="mis-encuestas">
      <TituloPagina titulo="Mis encuestas" descripcion=""></TituloPagina>
      <Tarjeta titulo="Aún no respondes encuestas">
        <p>
          Cuando se cierre uno de tus tickets te pediremos calificar la
          atención.
        </p>
        <Boton variante="primario">Ver mis tickets</Boton>
      </Tarjeta>
    </UsuarioLayout>
  );
}
