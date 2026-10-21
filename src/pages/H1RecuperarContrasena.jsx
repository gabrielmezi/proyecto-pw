import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1RecuperarContrasena() {
  const navigate = useNavigate();
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto w-full max-w-[680px]">
        <Tarjeta>
          <ol className="flex items-center gap-3 text-[13px] text-muted">
            <li className="flex items-center gap-2 text-primary">
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-xs text-white">1</span>
              Tu correo
            </li>
            <li className="h-px flex-1 bg-border" />
            <li className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-border text-xs">2</span>
              Enlace enviado
            </li>
            <li className="h-px flex-1 bg-border" />
            <li className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-border text-xs">3</span>
              Nueva contraseña
            </li>
          </ol>
          <h1 className="text-xl font-semibold">Recuperar mi contraseña</h1>
          <p className="text-[13px] text-muted">
            Te enviaremos un enlace de restablecimiento válido por 30 minutos.
          </p>
          <Campo
            titulo="CORREO INSTITUCIONAL"
            valor="camila.quispe@aloe.ulima.edu.pe"
            ayuda="Si la cuenta existe recibirás el enlace; por seguridad no informamos lo contrario."
          />
          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton onClick={() => navigate("/h1/enlace-enviado")} variante="primario">Enviar enlace</Boton>
            <Boton onClick={() => navigate("/h1/iniciar-sesion")} variante="terciario">Volver a iniciar sesión</Boton>
          </div>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
