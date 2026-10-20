import TablaTickets from "../components/TablaTickets";
import Boton from "../estilo/Boton";
import Etiqueta from "../estilo/Etiqueta";
import Tarjeta from "../estilo/Tarjeta";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import Metrica from "../estilo/Metrica";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H7FichaUsuario() {
  return (
    <SupervisorLayout pagina="usuarios">
      <TituloPagina
        titulo="Camila Quispe Ramos"
        descripcion="camila.quispe@aloe.ulima.edu.pe · Ingeniería de Sistemas · alumna"
      >
        <Etiqueta tono="info">Usuario</Etiqueta>
        <Etiqueta tono="success">Activo</Etiqueta>
        <Boton variante="peligro">Bloquear cuenta</Boton>
      </TituloPagina>
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <Tarjeta titulo="Datos de la cuenta">
          <p>
            Teléfono <strong>987 654 321</strong>
          </p>
          <p>
            Ambiente habitual <strong>A-201</strong>
          </p>
          <p>
            Cuenta creada <strong>14/03/2026</strong>
          </p>
          <p>
            Último acceso <strong>07/09/2026 08:05</strong>
          </p>
        </Tarjeta>
        <Tarjeta titulo="Resumen de reportes">
          <div className="grid grid-cols-2 gap-3">
            <Metrica titulo="REPORTADOS" valor="12" detalle="" />
            <Metrica titulo="ABIERTOS" valor="3" detalle="" />
            <Metrica titulo="CERRADOS" valor="9" detalle="" />
            <Metrica titulo="SATISFACCIÓN PROMEDIO" valor="4.3" detalle="" />
          </div>
        </Tarjeta>
      </div>
      <h2 className="text-xl leading-7 font-semibold mb-4">Historial de reportes</h2>
      <TablaTickets />
    </SupervisorLayout>
  );
}
