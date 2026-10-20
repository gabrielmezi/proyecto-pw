import Boton from "../estilo/Boton";
import Aviso from "../estilo/Aviso";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H2TecnicosPorCategoria() {
  return (
    <SupervisorLayout pagina="tecnicos">
      <TituloPagina
        titulo="Técnicos por categoría"
        descripcion="Marca las categorías que cada técnico puede atender. La cola solo ofrece técnicos habilitados al asignar."
      >
        <Boton variante="secundario">Invitar técnico</Boton>
        <Boton variante="primario">Guardar matriz</Boton>
      </TituloPagina>
      <Tabla titulo="Listado">
        <thead>
          <tr>
            <th scope="col">TÉCNICO</th>
            <th scope="col">ESPECIALIDAD DECLARADA</th>
            <th scope="col">CARGA ACTUAL</th>
            <th scope="col">AUDIOVISUALES</th>
            <th scope="col">CLIMATIZACIÓN</th>
            <th scope="col">REDES</th>
            <th scope="col">MOBILIARIO</th>
            <th scope="col">ELÉCTRICO</th>
            <th scope="col">LIMPIEZA</th>
            <th scope="col">ACCESOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Julio Paredes Soto</td>
            <td>Audiovisuales, Redes</td>
            <td>8 tickets</td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
          </tr>
          <tr>
            <td>Marco Huamán Vela</td>
            <td>Mobiliario, Audiovisuales</td>
            <td>6 tickets</td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
          </tr>
          <tr>
            <td>Iván Zegarra Pinto</td>
            <td>Eléctrico, Accesos</td>
            <td>5 tickets</td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
          </tr>
          <tr>
            <td>Sandra Nolasco Ríos</td>
            <td>Redes, Climatización</td>
            <td>7 tickets</td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
          </tr>
          <tr>
            <td>Rocío Espinoza Farfán</td>
            <td>Limpieza</td>
            <td>3 tickets</td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
          </tr>
          <tr>
            <td>Hernán Loayza Pomar</td>
            <td>Climatización</td>
            <td>4 tickets</td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
            </td>
          </tr>
        </tbody>
      </Tabla>
      <div className="mt-6">
        <Aviso tono="warning">
          Climatización tiene solo dos técnicos habilitados y 5 tickets
          abiertos. Considera habilitar un tercero.
        </Aviso>
        <p className="mt-3 text-xs text-muted">
          Carga actual = tickets asignados en estado abierto, en atención o en
          espera.
        </p>
      </div>
    </SupervisorLayout>
  );
}
