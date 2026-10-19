import Boton from "../estilo/Boton";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H2CatalogoVacio() {
  return (
    <SupervisorLayout pagina="categorias">
      <TituloPagina
        titulo="Categorías de servicio"
        descripcion=""
      ></TituloPagina>
      <Tarjeta titulo="Aún no hay categorías de servicio">
        <p>
          Crea la primera categoría para que la comunidad pueda registrar
          tickets. Puedes empezar con Audiovisuales y Redes.
        </p>
        <Boton variante="primario">Crear primera categoría</Boton>
      </Tarjeta>
    </SupervisorLayout>
  );
}
