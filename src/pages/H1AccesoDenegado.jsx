import Boton from "../estilo/Boton";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H1AccesoDenegado() {
  return (
    <UsuarioLayout pagina="">
      <div className="mx-auto max-w-2xl py-24 text-center">
        <p className="mb-6 text-7xl font-semibold text-primary">403</p>
        <TituloPagina
          titulo="No tienes permiso para ver la cola de atención"
          descripcion=""
        ></TituloPagina>
        <p className="mb-8 text-muted">
          Tu cuenta tiene el rol de usuario. La cola, la asignación y el
          catálogo de servicios son exclusivos del supervisor. Si necesitas ese
          acceso, solicítalo a Infraestructura y Servicios.
        </p>
        <div className="acciones">
          <Boton variante="primario">Ir a mis tickets</Boton>
          <Boton variante="secundario">Solicitar acceso</Boton>
        </div>
      </div>
    </UsuarioLayout>
  );
}
