import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1Registro() {
  const navigate = useNavigate();
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
        <Tarjeta titulo="Crear mi cuenta">
          <p className="text-[13px] text-muted">
            Solo para miembros de la comunidad con correo institucional.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo titulo="NOMBRES" valor="Camila Alejandra" ayuda="" />
            <Campo titulo="APELLIDOS" valor="Quispe Ramos" ayuda="" />
            {/* Correo validado: borde y mensaje en verde */}
            <label className="flex min-w-0 flex-col gap-2 text-[12px] text-muted">
              <span>CORREO INSTITUCIONAL</span>
              <span className="flex min-h-10 items-center rounded-sm border border-success bg-white pr-3">
                <input
                  className="min-w-0 flex-1 rounded-sm px-3 py-2 text-[15px] text-ink"
                  defaultValue="camila.quispe@aloe.ulima.edu.pe"
                />
                <span className="text-success">✓</span>
              </span>
              <span className="text-[13px] text-success">Correo válido y disponible.</span>
            </label>
            <Campo
              titulo="TELÉFONO"
              valor="987 654 321"
              ayuda="Para coordinar el acceso al ambiente."
            />
            <Campo
              titulo="CONTRASEÑA"
              tipo="password"
              valor="Contrasena1"
              ayuda="Mínimo 8 caracteres, con una mayúscula y un número."
            />
            {/* Confirmación con error: borde y mensaje en rojo junto al campo */}
            <label className="flex min-w-0 flex-col gap-2 text-[12px] text-muted">
              <span>CONFIRMAR CONTRASEÑA</span>
              <input
                className="min-h-10 w-full rounded-sm border border-danger bg-white px-3 py-2 text-[15px] text-ink"
                type="password"
                defaultValue="Contra1"
              />
              <span className="text-[13px] text-danger">Las contraseñas no coinciden.</span>
            </label>
            <Selector titulo="UNIDAD O CARRERA" flechaInterior>
              <option>Ingeniería de Sistemas</option>
              <option>Ingeniería Industrial</option>
              <option>Derecho</option>
            </Selector>
            <Selector titulo="VÍNCULO CON LA UNIVERSIDAD" flechaInterior>
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
          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton onClick={() => navigate("/h1/iniciar-sesion")} variante="primario">Crear cuenta</Boton>
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
              Tu cuenta queda activa al instante; el correo de bienvenida llega
              en pocos minutos.
            </p>
          </Tarjeta>
        </aside>
      </div>
    </PublicoLayout>
  );
}
