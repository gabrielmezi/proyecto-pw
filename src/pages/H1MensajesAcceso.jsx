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
          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton variante="primario">Restablecer contraseña</Boton>
            <Boton variante="terciario">Escribir a soporte</Boton>
          </div>
        </Tarjeta>
        <Tarjeta titulo="Sesión">
          <button type="button" disabled className="min-h-10 w-full rounded-sm bg-primary-dark px-4 py-2 text-[15px] font-medium text-white">
            Ingresando…
          </button>
          <p className="text-[13px] text-muted">
            Campos y enlaces quedan deshabilitados mientras se valida la sesión.
          </p>
          <Aviso tono="success">
            Bienvenida, Camila. Tienes 3 tickets abiertos y 1 encuesta
            pendiente.
          </Aviso>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
