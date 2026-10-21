import { useState } from "react";
import { useDatos } from "../context/DatosContext";
import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1Registro() {
  const navigate = useNavigate();

  // ESTADO LOCAL: el borrador cambia mientras se escribe; aún no se guarda.
  const { usuario, guardarUsuario } = useDatos();
  const [datos, setDatos] = useState({ ...usuario });
  const [mensaje, setMensaje] = useState("");

  // CONTRASEÑAS: solo viven en este formulario, no se envían al Context.
  const [contrasena, setContrasena] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  function cambiarCampo(event) {
    const { name, value } = event.target;
    setDatos((anterior) => ({ ...anterior, [name]: value }));
  }

  // Al pulsar Guardar, el Context escribe el perfil en localStorage.
  function guardarPerfil() {
    if (!datos.nombres.trim() || !datos.apellidos.trim()
      || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo.trim())) {
      setMensaje("Completa nombres, apellidos y un correo válido.");
      return;
    }

    if (contrasena.length < 8 || !/[A-Z]/.test(contrasena) || !/[0-9]/.test(contrasena)) {
      setMensaje("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
      return;
    }

    if (contrasena !== confirmacion) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    if (guardarUsuario(datos)) {
      navigate("/h1/iniciar-sesion");
    }
  }

  return (
    <PublicoLayout pagina="">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
        <Tarjeta titulo="Crear mi cuenta">
          <p className="text-[13px] text-muted">
            Guarda tu perfil para la demostración en este navegador.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo name="nombres" value={datos.nombres} onChange={cambiarCampo} titulo="NOMBRES" ayuda="" />
            <Campo name="apellidos" value={datos.apellidos} onChange={cambiarCampo} titulo="APELLIDOS" ayuda="" />
            <label className="flex min-w-0 flex-col gap-2 text-[12px] text-muted">
              <span>CORREO INSTITUCIONAL</span>
              <span className="flex min-h-10 items-center rounded-sm border border-success bg-white pr-3">
                <input
                  className="min-w-0 flex-1 rounded-sm px-3 py-2 text-[15px] text-ink"
                  name="correo" type="email" value={datos.correo} onChange={cambiarCampo}
                />
              </span>
            </label>
            <Campo name="telefono" value={datos.telefono} onChange={cambiarCampo}
              titulo="TELÉFONO"
              ayuda="Para coordinar el acceso al ambiente."
            />
            <Campo
              titulo="CONTRASEÑA"
              tipo="password"
              name="contrasena"
              autoComplete="new-password"
              value={contrasena}
              onChange={(event) => setContrasena(event.target.value)}
              ayuda="Mínimo 8 caracteres, con una mayúscula y un número."
            />
            <Campo
              titulo="CONFIRMAR CONTRASEÑA"
              tipo="password"
              name="confirmacion"
              autoComplete="new-password"
              value={confirmacion}
              onChange={(event) => setConfirmacion(event.target.value)}
            />

            <Selector name="carrera" value={datos.carrera} onChange={cambiarCampo} titulo="UNIDAD O CARRERA" flechaInterior>
              <option>Ingeniería de Sistemas</option>
              <option>Ingeniería Industrial</option>
              <option>Derecho</option>
            </Selector>
            <Selector name="vinculo" value={datos.vinculo} onChange={cambiarCampo} titulo="VÍNCULO CON LA UNIVERSIDAD" flechaInterior>
              <option>Alumna</option>
              <option>Alumno</option>
              <option>Docente</option>
              <option>Personal administrativo</option>
            </Selector>
          </div>
          <label className="flex items-center gap-2 text-[13px]">
            <input type="checkbox" className="h-4 w-4 accent-primary" />
            Acepto los términos del servicio y la política de privacidad.
          </label>
          {mensaje && <p role="status" className="text-sm">{mensaje}</p>}

          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton onClick={guardarPerfil} variante="primario">Crear cuenta</Boton>
            <Boton onClick={() => navigate("/h1/iniciar-sesion")} variante="secundario">Cancelar</Boton>
          </div>
        </Tarjeta>
        <aside>
          <Tarjeta titulo="Antes de registrarte">
            <p className="text-[13px] text-muted">
              Si eres técnico o supervisor no uses este formulario: el área de
              Infraestructura te envía una invitación con tus datos precargados.
            </p>
            <p className="border-t border-border pt-4 text-[13px] text-muted">
              El perfil queda disponible en este navegador. Este registro de demostración no envía correos ni crea una cuenta en un servidor.
            </p>
          </Tarjeta>
        </aside>
      </div>
    </PublicoLayout>
  );
}
