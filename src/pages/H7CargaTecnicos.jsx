import Boton from "../estilo/Boton";
import Aviso from "../estilo/Aviso";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import Barra from "../estilo/Barra";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H7CargaTecnicos() {
  return (
    <SupervisorLayout pagina="carga">
      <TituloPagina
        titulo="Carga por técnico"
        descripcion="6 técnicos activos · 33 tickets asignados · promedio 5.5 tickets por técnico"
      >
        <Boton variante="secundario">Periodo: 01/08/2026 – 07/09/2026</Boton>
      </TituloPagina>
      <Tabla titulo="Listado">
        <thead>
          <tr>
            <th scope="col">TÉCNICO</th>
            <th scope="col">ESPECIALIDAD</th>
            <th scope="col">ASIGNADOS</th>
            <th scope="col">RESUELTOS</th>
            <th scope="col">EN ESPERA</th>
            <th scope="col">TIEMPO PROMEDIO</th>
            <th scope="col">SATISFACCIÓN</th>
            <th scope="col">RESUELTOS EN EL PERIODO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Julio Paredes Soto</td>
            <td>Audiovisuales · Redes</td>
            <td>8</td>
            <td>34</td>
            <td>2</td>
            <td>3 h 12 min</td>
            <td>4.6 / 5</td>
            <td>
              <Barra titulo="" valor="34" ancho="w-[100%]" tono="primary" />
            </td>
          </tr>
          <tr>
            <td>Marco Huamán Vela</td>
            <td>Mobiliario · Audiovisuales</td>
            <td>6</td>
            <td>28</td>
            <td>1</td>
            <td>4 h 05 min</td>
            <td>4.4 / 5</td>
            <td>
              <Barra titulo="" valor="28" ancho="w-[82%]" tono="primary" />
            </td>
          </tr>
          <tr>
            <td>Iván Zegarra Pinto</td>
            <td>Eléctrico · Accesos</td>
            <td>5</td>
            <td>31</td>
            <td>3</td>
            <td>2 h 48 min</td>
            <td>4.8 / 5</td>
            <td>
              <Barra titulo="" valor="31" ancho="w-[91%]" tono="primary" />
            </td>
          </tr>
          <tr>
            <td>Sandra Nolasco Ríos</td>
            <td>Redes · Climatización</td>
            <td>7</td>
            <td>26</td>
            <td>2</td>
            <td>5 h 20 min</td>
            <td>4.2 / 5</td>
            <td>
              <Barra titulo="" valor="26" ancho="w-[76%]" tono="primary" />
            </td>
          </tr>
          <tr>
            <td>Rocío Espinoza Farfán</td>
            <td>Limpieza</td>
            <td>3</td>
            <td>22</td>
            <td>0</td>
            <td>1 h 35 min</td>
            <td>4.7 / 5</td>
            <td>
              <Barra titulo="" valor="22" ancho="w-[65%]" tono="primary" />
            </td>
          </tr>
          <tr>
            <td>Hernán Loayza Pomar</td>
            <td>Climatización</td>
            <td>4</td>
            <td>19</td>
            <td>1</td>
            <td>6 h 10 min</td>
            <td>3.9 / 5</td>
            <td>
              <Barra titulo="" valor="19" ancho="w-[56%]" tono="primary" />
            </td>
          </tr>
        </tbody>
      </Tabla>
      <div className="mt-6">
        <Aviso tono="warning">
          Julio Paredes concentra 8 de los 33 tickets asignados. Considera
          repartir los tickets críticos de Audiovisuales con Marco Huamán.
        </Aviso>
        <p className="mt-4 text-xs text-muted">
          Los tickets en espera no cuentan en el tiempo promedio. Satisfacción
          es el promedio de las encuestas respondidas del periodo.
        </p>
      </div>
    </SupervisorLayout>
  );
}
