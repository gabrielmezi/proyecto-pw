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
      <div className="dos-columnas">
        <div className="space-y-6">
          <Tarjeta titulo="Datos personales">
            <div className="formulario">
              <Campo titulo="NOMBRES" valor="Camila Alejandra" ayuda="" />
              <Campo titulo="APELLIDOS" valor="Quispe Ramos" ayuda="" />
              <Campo
                titulo="CORREO INSTITUCIONAL"
                valor="camila.quispe@aloe.ulima.edu.pe"
                ayuda="No editable."
                soloLectura
              />
              <Campo titulo="TELÉFONO" valor="987 654 321" ayuda="" />
              <Selector titulo="UNIDAD O CARRERA">
                <option>Ingeniería de Sistemas</option>
                <option>Ingeniería Industrial</option>
              </Selector>
              <Selector titulo="AMBIENTE HABITUAL">
                <option>A-201</option>
                <option>H-210</option>
                <option>E-304</option>
              </Selector>
            </div>
            <div className="acciones">
              <Boton variante="primario">Guardar cambios</Boton>
              <Boton variante="secundario">Descartar</Boton>
            </div>
          </Tarjeta>
          <Tarjeta titulo="Cambiar contraseña">
            <div className="formulario">
              <Campo titulo="ACTUAL" tipo="password" valor="Contrasena1" />
              <Campo titulo="NUEVA" tipo="password" valor="Contrasena2" />
              <Campo titulo="CONFIRMAR" tipo="password" valor="Contrasena2" />
            </div>
            <Boton variante="primario">Actualizar contraseña</Boton>
          </Tarjeta>
        </div>
        <aside className="space-y-6">
          <Tarjeta titulo="CQ · Camila Quispe Ramos">
            <p>Usuario · alumna</p>
            <p>
              Tickets reportados <strong>12</strong>
            </p>
            <p>
              Abiertos ahora <strong>3</strong>
            </p>
            <p>
              Cuenta creada <strong>14/03/2026</strong>
            </p>
          </Tarjeta>
          <Aviso tono="info">
            <h3>Encuesta pendiente</h3>
            <p>
              El ticket TCK-2026-00131 se cerró el 03/09/2026. Califica la
              atención antes del 10/09/2026.
            </p>
            <Boton variante="secundario">Responder encuesta</Boton>
          </Aviso>
        </aside>
      </div>
    </UsuarioLayout>
  );
}
