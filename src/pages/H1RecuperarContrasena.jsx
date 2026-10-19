import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1RecuperarContrasena() {
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto w-full max-w-[680px]">
        <p className="mb-8 text-primary">
          ① Tu correo　　② Enlace enviado　　③ Nueva contraseña
        </p>
        <Tarjeta titulo="Recuperar mi contraseña">
          <p>
            Te enviaremos un enlace de restablecimiento válido por 30 minutos.
          </p>
          <Campo
            titulo="CORREO INSTITUCIONAL"
            valor="camila.quispe@aloe.ulima.edu.pe"
            ayuda="Si la cuenta existe recibirás el enlace; por seguridad no informamos lo contrario."
          />
          <div className="acciones">
            <Boton variante="primario">Enviar enlace</Boton>
            <Boton variante="terciario">Volver a iniciar sesión</Boton>
          </div>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
