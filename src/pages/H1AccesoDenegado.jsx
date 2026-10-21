import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H1AccesoDenegado() {
  const navigate = useNavigate();
  return (
    <UsuarioLayout pagina="inicio">
      <div className="mx-auto mt-24 max-w-2xl rounded-sm border border-border bg-white p-10 text-center">
        <span className="inline-flex h-10 w-12 items-center justify-center rounded-sm border border-danger bg-red-50 font-semibold text-danger">
          403
        </span>
        <h1 className="mt-4 text-xl font-semibold">
          No tienes permiso para ver la cola de atención
        </h1>
        <p className="mt-2 text-[13px] text-muted">
          Tu cuenta tiene el rol de usuario. La cola, la asignación y el
          catálogo de servicios son exclusivos del supervisor. Si necesitas ese
          acceso, solicítalo a Infraestructura y Servicios.
        </p>
        <div data-acciones className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Boton onClick={() => navigate("/h3/mis-tickets")} variante="primario">Ir a mis tickets</Boton>
          <Boton variante="secundario">Solicitar acceso</Boton>
        </div>
      </div>
    </UsuarioLayout>
  );
}
