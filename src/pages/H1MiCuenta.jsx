import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H1MiCuenta() {
  return (
    <UsuarioLayout pagina="cuenta">
      <TituloPagina
        titulo="Mi cuenta"
        descripcion="Tus datos se usan para contactarte durante la atención de un ticket."
      ></TituloPagina>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
        <Tarjeta titulo="Datos personales">
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo titulo="NOMBRES" valor="Camila Alejandra" ayuda="" />
            <Campo titulo="APELLIDOS" valor="Quispe Ramos" ayuda="" />
            <Campo
              titulo="CORREO INSTITUCIONAL"
              valor="camila.quispe@aloe.ulima.edu.pe"
              ayuda="No editable."
              soloLectura
            />
            <Campo titulo="TELÉFONO" valor="987 654 321" ayuda="" />
            <Selector titulo="UNIDAD O CARRERA" flechaInterior>
              <option>Ingeniería de Sistemas</option>
              <option>Ingeniería Industrial</option>
            </Selector>
            <Selector titulo="AMBIENTE HABITUAL" flechaInterior>
              <option>A-201</option>
              <option>H-210</option>
              <option>E-304</option>
            </Selector>
          </div>
          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton variante="primario">Guardar cambios</Boton>
            <Boton variante="terciario">Descartar</Boton>
          </div>
          <div className="space-y-4 border-t border-border pt-6">
            <h2 className="text-xl font-semibold">Cambiar contraseña</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              <Campo titulo="ACTUAL" tipo="password" valor="Contrasena1" />
              <Campo titulo="NUEVA" tipo="password" valor="Contrasena2" />
              <Campo titulo="CONFIRMAR" tipo="password" valor="Contrasena2" />
            </div>
            <Boton variante="primario">Actualizar contraseña</Boton>
          </div>
        </Tarjeta>
        <aside className="space-y-6">
          <Tarjeta>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-sm font-semibold text-white">CQ</span>
              <div>
                <p className="font-semibold">Camila Quispe Ramos</p>
                <p className="text-[13px] text-muted">Usuario · alumna</p>
              </div>
            </div>
            <dl className="divide-y divide-border text-[13px]">
              <div className="flex justify-between py-2">
                <dt className="text-muted">Tickets reportados</dt>
                <dd className="font-semibold">12</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-muted">Abiertos ahora</dt>
                <dd className="font-semibold">3</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-muted">Cuenta creada</dt>
                <dd className="font-semibold">14/03/2026</dd>
              </div>
            </dl>
          </Tarjeta>
          <Aviso tono="warning">
            <h3 className="text-base font-semibold">Encuesta pendiente</h3>
            <p className="mb-3">
              El ticket TCK-2026-00131 se cerró el 03/09/2026. Califica la
              atención antes del 10/09/2026.
            </p>
            <Boton variante="heredado">Responder encuesta</Boton>
          </Aviso>
        </aside>
      </div>
    </UsuarioLayout>
  );
}
