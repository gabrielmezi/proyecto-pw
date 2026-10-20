import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Etiqueta from "../estilo/Etiqueta";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import Paginacion from "../estilo/Paginacion";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H7Usuarios() {
  return (
    <SupervisorLayout pagina="usuarios">
      <TituloPagina
        titulo="Usuarios"
        descripcion="15 cuentas · 9 usuarios, 5 técnicos, 1 supervisor"
      >
        <Boton variante="primario">Invitar técnico</Boton>
        <Boton variante="secundario">Exportar cuentas</Boton>
      </TituloPagina>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Campo titulo="BUSCAR POR NOMBRE O CORREO" valor="" ayuda="" />
        <Selector titulo="ROL">
          <option>Todos</option>
          <option>Usuario</option>
          <option>Técnico</option>
          <option>Supervisor</option>
        </Selector>
        <Selector titulo="ESTADO">
          <option>Todos</option>
          <option>Activo</option>
          <option>Bloqueado</option>
          <option>Inactivo</option>
        </Selector>
        <Selector titulo="UNIDAD">
          <option>Todas</option>
          <option>Ingeniería de Sistemas</option>
          <option>Infraestructura y Servicios</option>
        </Selector>
      </div>
      <Tabla titulo="Listado">
        <thead>
          <tr>
            <th scope="col">USUARIO</th>
            <th scope="col">CORREO</th>
            <th scope="col">ROL</th>
            <th scope="col">UNIDAD O ESPECIALIDAD</th>
            <th scope="col">TICKETS REPORTADOS</th>
            <th scope="col">ESTADO</th>
            <th scope="col">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Camila Quispe Ramos</td>
            <td>camila.quispe@aloe.ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Ingeniería de Sistemas</td>
            <td>12</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Renzo Salazar Núñez</td>
            <td>renzo.salazar@aloe.ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Ingeniería Industrial</td>
            <td>7</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Milagros Ccahuana Ríos</td>
            <td>mccahuana@ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Docente · Comunicaciones</td>
            <td>9</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Julio Paredes Soto</td>
            <td>jparedes@ulima.edu.pe</td>
            <td>Técnico</td>
            <td>Audiovisuales · Redes</td>
            <td>4</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Marco Huamán Vela</td>
            <td>mhuaman@ulima.edu.pe</td>
            <td>Técnico</td>
            <td>Mobiliario · Audiovisuales</td>
            <td>2</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Iván Zegarra Pinto</td>
            <td>izegarra@ulima.edu.pe</td>
            <td>Técnico</td>
            <td>Eléctrico · Accesos</td>
            <td>1</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Sandra Nolasco Ríos</td>
            <td>snolasco@ulima.edu.pe</td>
            <td>Técnico</td>
            <td>Redes · Climatización</td>
            <td>3</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Rocío Espinoza Farfán</td>
            <td>respinoza@ulima.edu.pe</td>
            <td>Técnico</td>
            <td>Limpieza</td>
            <td>0</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Lucía Mendoza Ríos</td>
            <td>lmendoza@ulima.edu.pe</td>
            <td>Supervisor</td>
            <td>Infraestructura y Servicios</td>
            <td>5</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Diego Aliaga Ferrer</td>
            <td>diego.aliaga@aloe.ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Derecho</td>
            <td>6</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Andrea Chávez Loayza</td>
            <td>achavez@ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Docente · Arquitectura</td>
            <td>11</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Pedro Salcedo Ayala</td>
            <td>psalcedo@ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Administración</td>
            <td>4</td>
            <td>
              <Etiqueta tono="danger">Bloqueado</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Rosa Ticona Álvarez</td>
            <td>rosa.ticona@aloe.ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Psicología</td>
            <td>3</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Karina Bustamante Ruiz</td>
            <td>kbustamante@ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Biblioteca</td>
            <td>15</td>
            <td>
              <Etiqueta tono="success">Activo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
          <tr>
            <td>César Rojas Bermúdez</td>
            <td>cesar.rojas@aloe.ulima.edu.pe</td>
            <td>Usuario</td>
            <td>Ingeniería de Sistemas</td>
            <td>2</td>
            <td>
              <Etiqueta tono="muted">Inactivo</Etiqueta>
            </td>
            <td>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="terciario">Ver ficha</Boton>
                <Boton variante="terciario">Bloquear</Boton>
              </div>
            </td>
          </tr>
        </tbody>
      </Tabla>
      <Paginacion>Mostrando 1–15 de 428 cuentas</Paginacion>
    </SupervisorLayout>
  );
}
