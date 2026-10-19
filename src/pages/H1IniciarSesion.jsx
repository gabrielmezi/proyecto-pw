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
          <p className="text-muted">Ingresa con tu correo institucional.</p>
          <Campo
            titulo="CORREO INSTITUCIONAL"
            valor="camila.quispe@aloe.ulima.edu.pe"
            ayuda=""
          />
          <Campo titulo="CONTRASEÑA" tipo="password" valor="Contrasena1" />
          <div className="acciones">
            <label className="flex items-center gap-2 text-[13px]">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
              Recordarme en este equipo
            </label>
            <Boton variante="terciario">¿Olvidaste tu contraseña?</Boton>
          </div>
          <div className="grid">
            <Boton variante="primario">Ingresar</Boton>
          </div>
          <p className="text-center text-[13px]">
            ¿No tienes cuenta? <Boton variante="terciario">Regístrate</Boton>
          </p>
        </Tarjeta>
        <aside className="space-y-4">
          <h3>Acceso por rol</h3>
          <p className="text-muted">
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
