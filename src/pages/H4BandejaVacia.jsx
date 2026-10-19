import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import TecnicoLayout from "../components/TecnicoLayout";

export default function H4BandejaVacia() {
  return (
    <TecnicoLayout pagina="bandeja">
      <TituloPagina titulo="Mi bandeja" descripcion=""></TituloPagina>
      <Tarjeta titulo="Sin tickets asignados">
        <p>Cuando el supervisor te asigne uno aparecerá aquí.</p>
      </Tarjeta>
    </TecnicoLayout>
  );
}
