import Aviso from "../estilo/Aviso";
import TituloPagina from "../estilo/TituloPagina";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H7Notificaciones() {
  return (
    <SupervisorLayout pagina="usuarios">
      <TituloPagina
        titulo="Notificaciones de resultado"
        descripcion=""
      ></TituloPagina>
      <div className="max-w-3xl space-y-5">
        <Aviso tono="success">
          Cuenta bloqueada. Pedro Salcedo Ayala ya no puede iniciar sesión.
        </Aviso>
        <Aviso tono="danger">
          No pudimos bloquear la cuenta. Vuelve a intentarlo en unos minutos.
        </Aviso>
        <Aviso tono="warning">
          Esta cuenta tiene 2 tickets críticos abiertos. Reasígnalos antes de
          bloquearla.
        </Aviso>
        <Aviso tono="info">
          El bloqueo se puede revertir desde la ficha de la cuenta.
        </Aviso>
      </div>
    </SupervisorLayout>
  );
}
