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
                aria-label="Julio Paredes Soto: Audiovisuales"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Julio Paredes Soto: Climatización"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Julio Paredes Soto: Redes"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Julio Paredes Soto: Mobiliario"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Julio Paredes Soto: Eléctrico"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Julio Paredes Soto: Limpieza"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Julio Paredes Soto: Accesos"
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
                aria-label="Marco Huamán Vela: Audiovisuales"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Marco Huamán Vela: Climatización"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Marco Huamán Vela: Redes"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Marco Huamán Vela: Mobiliario"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Marco Huamán Vela: Eléctrico"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Marco Huamán Vela: Limpieza"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Marco Huamán Vela: Accesos"
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
                aria-label="Iván Zegarra Pinto: Audiovisuales"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Iván Zegarra Pinto: Climatización"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Iván Zegarra Pinto: Redes"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Iván Zegarra Pinto: Mobiliario"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Iván Zegarra Pinto: Eléctrico"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Iván Zegarra Pinto: Limpieza"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Iván Zegarra Pinto: Accesos"
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
                aria-label="Sandra Nolasco Ríos: Audiovisuales"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Sandra Nolasco Ríos: Climatización"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Sandra Nolasco Ríos: Redes"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Sandra Nolasco Ríos: Mobiliario"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Sandra Nolasco Ríos: Eléctrico"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Sandra Nolasco Ríos: Limpieza"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Sandra Nolasco Ríos: Accesos"
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
                aria-label="Rocío Espinoza Farfán: Audiovisuales"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Rocío Espinoza Farfán: Climatización"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Rocío Espinoza Farfán: Redes"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Rocío Espinoza Farfán: Mobiliario"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Rocío Espinoza Farfán: Eléctrico"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Rocío Espinoza Farfán: Limpieza"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Rocío Espinoza Farfán: Accesos"
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
                aria-label="Hernán Loayza Pomar: Audiovisuales"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Hernán Loayza Pomar: Climatización"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Hernán Loayza Pomar: Redes"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Hernán Loayza Pomar: Mobiliario"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Hernán Loayza Pomar: Eléctrico"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Hernán Loayza Pomar: Limpieza"
                className="h-4 w-4 accent-primary"
              />
            </td>
            <td>
              <input
                type="checkbox"
                aria-label="Hernán Loayza Pomar: Accesos"
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
