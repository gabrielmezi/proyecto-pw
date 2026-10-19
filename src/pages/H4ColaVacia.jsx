import Boton from "../estilo/Boton";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H4ColaVacia() {
  return (
    <SupervisorLayout pagina="cola">
      <TituloPagina titulo="Cola de atención" descripcion=""></TituloPagina>
      <Tarjeta titulo="No hay tickets con estos filtros">
        <p>La cola está al día para prioridad crítica en Audiovisuales.</p>
        <Boton variante="primario">Quitar filtros</Boton>
      </Tarjeta>
    </SupervisorLayout>
  );
}
