import Boton from "../estilo/Boton";
import Aviso from "../estilo/Aviso";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H6MisEncuestas() {
  return (
    <UsuarioLayout pagina="mis-encuestas">
      <TituloPagina
        titulo="Mis encuestas"
        descripcion="7 encuestas respondidas · 1 pendiente · promedio que diste: 4.2 de 5"
      ></TituloPagina>
      <Aviso tono="info">
        Tienes 1 encuesta pendiente del ticket TCK-2026-00131. El plazo vence el
        10/09/2026. <Boton variante="secundario">Responder ahora</Boton>
      </Aviso>
      <div className="mt-6">
        <Tabla titulo="Listado">
          <thead>
            <tr>
              <th scope="col">TICKET</th>
              <th scope="col">ASUNTO</th>
              <th scope="col">TÉCNICO</th>
              <th scope="col">RESPONDIDA</th>
              <th scope="col">PUNTAJE</th>
              <th scope="col">PLAZO DE EDICIÓN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="whitespace-nowrap font-mono text-xs text-primary">
                  TCK-2026-00131
                </span>
              </td>
              <td>Piso con residuos tras evento</td>
              <td>Rocío Espinoza Farfán</td>
              <td>03/09/2026</td>
              <td>5 / 5</td>
              <td>Editable hasta el 10/09/2026</td>
            </tr>
            <tr>
              <td>
                <span className="whitespace-nowrap font-mono text-xs text-primary">
                  TCK-2026-00130
                </span>
              </td>
              <td>Extensión eléctrica en mal estado</td>
              <td>Iván Zegarra Pinto</td>
              <td>01/09/2026</td>
              <td>4 / 5</td>
              <td>Editable hasta el 08/09/2026</td>
            </tr>
            <tr>
              <td>
                <span className="whitespace-nowrap font-mono text-xs text-primary">
                  TCK-2026-00122
                </span>
              </td>
              <td>Aire acondicionado sin frío</td>
              <td>Sandra Nolasco Ríos</td>
              <td>27/08/2026</td>
              <td>3 / 5</td>
              <td>Plazo vencido</td>
            </tr>
            <tr>
              <td>
                <span className="whitespace-nowrap font-mono text-xs text-primary">
                  TCK-2026-00118
                </span>
              </td>
              <td>Proyector no enciende</td>
              <td>Julio Paredes Soto</td>
              <td>21/08/2026</td>
              <td>5 / 5</td>
              <td>Plazo vencido</td>
            </tr>
            <tr>
              <td>
                <span className="whitespace-nowrap font-mono text-xs text-primary">
                  TCK-2026-00109
                </span>
              </td>
              <td>Silla rota en aula</td>
              <td>Marco Huamán Vela</td>
              <td>14/08/2026</td>
              <td>4 / 5</td>
              <td>Plazo vencido</td>
            </tr>
          </tbody>
        </Tabla>
      </div>
    </UsuarioLayout>
  );
}
