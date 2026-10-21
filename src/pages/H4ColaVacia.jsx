import Tarjeta from "../estilo/Tarjeta";
import Boton from "../estilo/Boton";
import TituloPagina from "../estilo/TituloPagina";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H4ColaVacia() {
  return (
    <SupervisorLayout pagina="cola">
      <TituloPagina titulo="Cola de atención" descripcion=""></TituloPagina>
      <div className="mx-auto my-8 max-w-xl text-center">
        <Tarjeta>
          <div aria-hidden="true" className="mx-auto size-14 rounded-sm border border-border bg-background" />
          <h2 className="text-xl font-semibold">No hay tickets con estos filtros</h2>
          <p className="text-muted">La cola está al día para prioridad crítica en Audiovisuales.</p>
          <Boton variante="primario" to="/h4/cola">Quitar filtros</Boton>
        </Tarjeta>
      </div>
    </SupervisorLayout>
  );
}
