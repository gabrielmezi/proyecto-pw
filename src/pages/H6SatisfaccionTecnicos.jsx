import Boton from "../estilo/Boton";
import Selector from "../estilo/Selector";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H6SatisfaccionTecnicos() {
  return (
    <SupervisorLayout pagina="satisfaccion">
      <TituloPagina
        titulo="Satisfacción por técnico y categoría"
        descripcion="141 encuestas respondidas · tasa de respuesta 62 % · promedio general 4.4 de 5"
      >
        <Boton variante="secundario">Periodo: 01/08/2026 – 07/09/2026</Boton>
        <Boton variante="secundario">Exportar</Boton>
      </TituloPagina>
      <Tabla titulo="Listado">
        <thead>
          <tr>
            <th scope="col">TÉCNICO</th>
            <th scope="col">CATEGORÍA PRINCIPAL</th>
            <th scope="col">GENERAL</th>
            <th scope="col">RAPIDEZ</th>
            <th scope="col">TRATO</th>
            <th scope="col">SOLUCIÓN</th>
            <th scope="col">ENCUESTAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Julio Paredes Soto</td>
            <td>Audiovisuales</td>
            <td>4.6</td>
            <td>4.5</td>
            <td>4.7</td>
            <td>4.6</td>
            <td>31</td>
          </tr>
          <tr>
            <td>Sandra Nolasco Ríos</td>
            <td>Redes y conectividad</td>
            <td>4.2</td>
            <td>3.9</td>
            <td>4.4</td>
            <td>4.3</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Iván Zegarra Pinto</td>
            <td>Eléctrico</td>
            <td>4.8</td>
            <td>4.9</td>
            <td>4.7</td>
            <td>4.8</td>
            <td>28</td>
          </tr>
          <tr>
            <td>Marco Huamán Vela</td>
            <td>Mobiliario</td>
            <td>4.4</td>
            <td>4.2</td>
            <td>4.5</td>
            <td>4.4</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Rocío Espinoza Farfán</td>
            <td>Limpieza</td>
            <td>4.7</td>
            <td>4.8</td>
            <td>4.6</td>
            <td>4.7</td>
            <td>22</td>
          </tr>
          <tr>
            <td>Hernán Loayza Pomar</td>
            <td>Climatización</td>
            <td>3.9</td>
            <td>3.5</td>
            <td>4.1</td>
            <td>4.0</td>
            <td>17</td>
          </tr>
        </tbody>
      </Tabla>
      <div className="my-6">
        <Aviso tono="warning">
          Climatización es la categoría con menor promedio (3.9). Rapidez es el
          aspecto peor calificado del área.
        </Aviso>
      </div>
      <Tarjeta titulo="Comentarios recibidos">
        <Selector titulo="PUNTAJE">
          <option>1 a 3</option>
          <option>Todos</option>
          <option>4 a 5</option>
        </Selector>
        <div className="grid gap-4 md:grid-cols-2">
          <Tarjeta titulo="2 / 5 · Climatización">
            <p className="text-xs text-muted">
              Hernán Loayza Pomar · 04/09/2026
            </p>
            <p>
              «El aire recién funcionó al tercer día. Nadie avisó que faltaba un
              repuesto.»
            </p>
          </Tarjeta>
          <Tarjeta titulo="3 / 5 · Redes">
            <p className="text-xs text-muted">
              Sandra Nolasco Ríos · 02/09/2026
            </p>
            <p>
              «Se resolvió, pero tuve que volver a reportar el mismo punto de
              red dos semanas después.»
            </p>
          </Tarjeta>
          <Tarjeta titulo="5 / 5 · Eléctrico">
            <p className="text-xs text-muted">
              Iván Zegarra Pinto · 01/09/2026
            </p>
            <p>
              «Llegó en veinte minutos y explicó qué había pasado con el
              tomacorriente.»
            </p>
          </Tarjeta>
          <Tarjeta titulo="4 / 5 · Audiovisuales">
            <p className="text-xs text-muted">
              Julio Paredes Soto · 31/08/2026
            </p>
            <p>«Solucionó la proyección antes de que empezara la clase.»</p>
          </Tarjeta>
        </div>
      </Tarjeta>
    </SupervisorLayout>
  );
}
