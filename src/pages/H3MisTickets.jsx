import TablaTickets from "../components/TablaTickets";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import Paginacion from "../estilo/Paginacion";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3MisTickets() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <TituloPagina
        titulo="Mis tickets"
        descripcion="12 tickets registrados · 3 en curso"
      >
        <Boton variante="primario">Registrar un ticket</Boton>
      </TituloPagina>
      <div className="filtros">
        <Campo titulo="CÓDIGO" valor="" ayuda="TCK-2026-…" />
        <Boton variante="secundario">Estado: en curso ×</Boton>
        <Boton variante="secundario">01/08/2026 – 07/09/2026 ×</Boton>
        <Selector titulo="CATEGORÍA">
          <option>Todas</option>
          <option>Audiovisuales</option>
          <option>Redes y conectividad</option>
        </Selector>
        <Boton variante="terciario">Limpiar filtros</Boton>
      </div>
      <TablaTickets />
      <Paginacion>Mostrando 1–8 de 12 tickets</Paginacion>
    </UsuarioLayout>
  );
}
