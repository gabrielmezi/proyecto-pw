import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import PublicoLayout from "../components/PublicoLayout";

export default function H1Registro() {
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto w-full max-w-[1200px]">
        <TituloPagina
          titulo="Crear mi cuenta"
          descripcion="Solo para miembros de la comunidad con correo institucional."
        ></TituloPagina>
        <div className="dos-columnas">
          <div className="space-y-6">
            <Tarjeta titulo="Datos de registro">
              <div className="formulario">
                <Campo titulo="NOMBRES" valor="Camila Alejandra" ayuda="" />
                <Campo titulo="APELLIDOS" valor="Quispe Ramos" ayuda="" />
                <Campo
                  titulo="CORREO INSTITUCIONAL"
                  valor="camila.quispe@aloe.ulima.edu.pe"
                  ayuda="Correo válido y disponible."
                />
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
                <Campo
                  titulo="CONFIRMAR CONTRASEÑA"
                  tipo="password"
                  valor="Contra1"
                  error={true}
                  ayuda="Las contraseñas no coinciden."
                />
                <Selector titulo="UNIDAD O CARRERA">
                  <option>Ingeniería de Sistemas</option>
                  <option>Ingeniería Industrial</option>
                  <option>Derecho</option>
                </Selector>
                <Selector titulo="VÍNCULO CON LA UNIVERSIDAD">
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
              <div className="acciones">
                <Boton variante="primario">Crear cuenta</Boton>
                <Boton variante="secundario">Cancelar</Boton>
              </div>
            </Tarjeta>
          </div>
          <aside className="space-y-6">
            <Tarjeta titulo="Antes de registrarte">
              <p>
                Si eres técnico o supervisor no uses este formulario: el área de
                Infraestructura te envía una invitación con tus datos
                precargados.
              </p>
              <p>
                Tu cuenta queda activa al instante; el correo de bienvenida
                llega en pocos minutos.
              </p>
            </Tarjeta>
          </aside>
        </div>
      </div>
    </PublicoLayout>
  );
}
