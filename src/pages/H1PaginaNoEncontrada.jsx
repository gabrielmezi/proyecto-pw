import Boton from "../estilo/Boton";
import TituloPagina from "../estilo/TituloPagina";
import PublicoLayout from "../components/PublicoLayout";

export default function H1PaginaNoEncontrada() {
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="mb-4 text-7xl font-semibold text-primary">404</p>
        <TituloPagina
          titulo="No encontramos esta página"
          descripcion="El enlace puede haber cambiado. Si buscabas un ticket, ingresa su código en el buscador de la cabecera."
        ></TituloPagina>
        <div data-acciones className="flex flex-wrap items-center gap-3">
          <Boton to="/" variante="primario">Ir al inicio</Boton>
          <Boton to="/h3/mis-tickets" variante="secundario">Buscar un ticket</Boton>
        </div>
      </div>
    </PublicoLayout>
  );
}
