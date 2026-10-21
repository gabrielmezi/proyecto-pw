import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1NuevaContrasena() {
  const navigate = useNavigate();
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto w-full max-w-md">
        <Tarjeta titulo="Nueva contraseña">
          <Campo titulo="NUEVA CONTRASEÑA" tipo="password" valor="Contrasena1" />
          {/* Indicador de fuerza: 2 de 3 segmentos llenos = segura */}
          <div className="flex items-center gap-2">
            <span className="h-1 flex-1 rounded-sm bg-success" />
            <span className="h-1 flex-1 rounded-sm bg-success" />
            <span className="h-1 flex-1 rounded-sm bg-border" />
            <span className="text-[13px] text-success">Segura</span>
          </div>
          <Campo titulo="CONFIRMAR" tipo="password" valor="Contrasena1" />
          <div className="grid">
            <Boton onClick={() => navigate("/h1/iniciar-sesion")} variante="primario">Guardar contraseña</Boton>
          </div>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
