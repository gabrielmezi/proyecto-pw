import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import TituloPagina from "../estilo/TituloPagina";
import PublicoLayout from "../components/PublicoLayout";

export default function H1PaginaNoEncontrada() {
  const navigate = useNavigate();
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="mb-4 text-7xl font-semibold text-primary">404</p>
        <TituloPagina
          titulo="No encontramos esta página"
          descripcion="El enlace puede haber cambiado. Si buscabas un ticket, ingresa su código en el buscador de la cabecera."
        ></TituloPagina>
        <div data-acciones className="flex flex-wrap items-center justify-center gap-3">
          <Boton onClick={() => navigate("/")} variante="primario">Ir al inicio</Boton>
          <Boton onClick={() => navigate("/h3/mis-tickets")} variante="secundario">Buscar un ticket</Boton>
        </div>
      </div>
    </PublicoLayout>
  );
}
