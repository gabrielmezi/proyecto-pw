import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import PublicoLayout from "../components/PublicoLayout";

export default function H1MensajesAcceso() {
  return (
    <PublicoLayout pagina="">
      <TituloPagina
        titulo="Mensajes del formulario de acceso"
        descripcion=""
      ></TituloPagina>
      <div className="grid gap-6 lg:grid-cols-3">
        <Tarjeta titulo="Error de credenciales">
          <Aviso tono="danger">
            Correo o contraseña incorrectos. Te quedan 4 intentos antes del
            bloqueo temporal.
          </Aviso>
          <Campo
            titulo="CONTRASEÑA"
            tipo="password"
            valor="Clave1"
            error={true}
            ayuda="Verifica tus datos e inténtalo otra vez."
          />
        </Tarjeta>
        <Tarjeta titulo="Cuenta bloqueada">
          <Aviso tono="warning">
            Cuenta bloqueada por 15 minutos tras cinco intentos fallidos. Podrás
            ingresar a las 10:42 o restablecer tu contraseña ahora.
          </Aviso>
          <div className="acciones">
            <Boton variante="primario">Restablecer contraseña</Boton>
            <Boton variante="terciario">Escribir a soporte</Boton>
          </div>
        </Tarjeta>
        <Tarjeta titulo="Sesión">
          <button type="button" disabled className="boton opacity-60">
            Ingresando…
          </button>
          <Aviso tono="success">
            Bienvenida, Camila. Tienes 3 tickets abiertos y 1 encuesta
            pendiente.
          </Aviso>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
