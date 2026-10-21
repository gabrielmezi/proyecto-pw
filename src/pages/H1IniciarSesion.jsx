import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1IniciarSesion() {
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto grid w-full max-w-[1000px] items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Tarjeta titulo="Iniciar sesión">
          <p className="text-[13px] text-muted">Ingresa con tu correo institucional.</p>
          <Campo
            titulo="CORREO INSTITUCIONAL"
            valor="camila.quispe@aloe.ulima.edu.pe"
            ayuda=""
          />
          {/* Contraseña con el botón Mostrar dentro del mismo borde */}
          <label className="flex min-w-0 flex-col gap-2 text-[12px] text-muted">
            <span>CONTRASEÑA</span>
            <span className="flex min-h-10 items-center rounded-sm border border-border bg-white pr-2">
              <input
                className="min-w-0 flex-1 rounded-sm px-3 py-2 text-[15px] text-ink"
                type="password"
                defaultValue="Contrasena1"
              />
              <Boton variante="terciario">Mostrar</Boton>
            </span>
          </label>
          <div data-acciones className="flex flex-wrap items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-[13px]">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
              Recordarme en este equipo
            </label>
            <Boton to="/h1/recuperar-contrasena" variante="terciario">¿Olvidaste tu contraseña?</Boton>
          </div>
          <div className="grid">
            <Boton variante="primario">Ingresar</Boton>
          </div>
          <p className="text-center text-[13px] text-muted">
            ¿No tienes cuenta? <Boton to="/h1/registro" variante="terciario">Regístrate</Boton>
          </p>
        </Tarjeta>
        <aside className="space-y-4">
          <h3 className="text-base font-semibold">Acceso por rol</h3>
          <p className="text-[13px] text-muted">
            Usuarios de la comunidad ingresan con su correo. Técnicos y
            supervisores reciben una invitación del área de Infraestructura y
            definen su contraseña al aceptarla.
          </p>
          <Aviso tono="info">
            Tras cinco intentos fallidos la cuenta se bloquea por 15 minutos.
          </Aviso>
        </aside>
      </div>
    </PublicoLayout>
  );
}
