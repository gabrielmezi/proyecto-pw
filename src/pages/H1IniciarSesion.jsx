import { useState } from "react";
import { useDatos } from "../context/DatosContext";
import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1IniciarSesion() {
  const navigate = useNavigate();

  const { usuario } = useDatos();

  // ESTADO LOCAL: el correo escrito no modifica el perfil guardado.
  const [correo, setCorreo] = useState(usuario.correo);
  const [mensaje, setMensaje] = useState("");

  // DEMOSTRACIÓN: se pide una contraseña, pero no se compara ni se guarda.
  const [contrasena, setContrasena] = useState("");

  function ingresar() {
    if (!contrasena) {
      setMensaje("Ingresa una contraseña para continuar.");
      return;
    }

    if (correo.trim().toLowerCase() !== usuario.correo) {
      setMensaje("Usa el correo del perfil guardado o registra un perfil nuevo.");
      return;
    }

    navigate("/h3/mis-tickets");
  }

  return (
    <PublicoLayout pagina="">
      <div className="mx-auto grid w-full max-w-[1000px] items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Tarjeta titulo="Iniciar sesión">
          <p className="text-[13px] text-muted">Acceso de demostración al perfil de este navegador.</p>
          <Campo
            titulo="CORREO INSTITUCIONAL"
            tipo="email"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            ayuda=""
          />
          <Campo
            titulo="CONTRASEÑA"
            tipo="password"
            name="contrasena"
            autoComplete="current-password"
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
          />

          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton onClick={() => navigate("/h1/recuperar-contrasena")} variante="terciario">¿Olvidaste tu contraseña?</Boton>
          </div>
          {mensaje && <p role="alert">{mensaje}</p>}

          <div className="grid">
            <Boton onClick={ingresar} variante="primario">Ingresar</Boton>
          </div>
          <p className="text-center text-[13px] text-muted">
            ¿No tienes cuenta? <Boton onClick={() => navigate("/h1/registro")} variante="terciario">Regístrate</Boton>
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
            Este acceso usa un perfil local de demostración; no valida contraseñas.
          </Aviso>
        </aside>
      </div>
    </PublicoLayout>
  );
}
