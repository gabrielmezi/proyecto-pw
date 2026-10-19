import Etiqueta from "../estilo/Etiqueta";
import Tabla from "../estilo/Tabla";
export default function TablaTickets() {
  return (
    <Tabla prioridades titulo="Mis tickets">
      <thead>
        <tr>
          <th scope="col">CÓDIGO</th>
          <th scope="col">ASUNTO</th>
          <th scope="col">CATEGORÍA</th>
          <th scope="col">AMBIENTE</th>
          <th scope="col">REGISTRADO</th>
          <th scope="col">PRIORIDAD</th>
          <th scope="col">ESTADO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00147
            </span>
          </td>
          <td>Proyector no enciende en aula</td>
          <td>Audiovisuales · Proyector no enciende</td>
          <td>A-201</td>
          <td>07/09/2026</td>
          <td>
            <Etiqueta tono="danger">Crítica</Etiqueta>
          </td>
          <td>
            <Etiqueta tono="info">Abierto</Etiqueta>
          </td>
        </tr>
        <tr>
          <td>
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00146
            </span>
          </td>
          <td>Punto de red caído en laboratorio</td>
          <td>Redes y conectividad · Punto de red caído</td>
          <td>H-210</td>
          <td>07/09/2026</td>
          <td>
            <Etiqueta tono="danger">Crítica</Etiqueta>
          </td>
          <td>
            <Etiqueta tono="info">Abierto</Etiqueta>
          </td>
        </tr>
        <tr>
          <td>
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00145
            </span>
          </td>
          <td>Aire acondicionado sin frío</td>
          <td>Climatización · Aire sin frío</td>
          <td>E-304</td>
          <td>07/09/2026</td>
          <td>
            <Etiqueta tono="accent">Alta</Etiqueta>
          </td>
          <td>
            <Etiqueta tono="warning">En atención</Etiqueta>
          </td>
        </tr>
        <tr>
          <td>
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00144
            </span>
          </td>
          <td>Tomacorriente sin energía</td>
          <td>Eléctrico · Tomacorriente sin energía</td>
          <td>N-402</td>
          <td>07/09/2026</td>
          <td>
            <Etiqueta tono="accent">Alta</Etiqueta>
          </td>
          <td>
            <Etiqueta tono="info">Abierto</Etiqueta>
          </td>
        </tr>
        <tr>
          <td>
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00143
            </span>
          </td>
          <td>Imagen distorsionada del proyector</td>
          <td>Audiovisuales · Imagen distorsionada</td>
          <td>Q-101</td>
          <td>07/09/2026</td>
          <td>
            <Etiqueta tono="warning">Media</Etiqueta>
          </td>
          <td>
            <Etiqueta tono="warning">En atención</Etiqueta>
          </td>
        </tr>
        <tr>
          <td>
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00142
            </span>
          </td>
          <td>Chapa de puerta trabada</td>
          <td>Accesos y cerraduras · Chapa trabada</td>
          <td>H-105</td>
          <td>07/09/2026</td>
          <td>
            <Etiqueta tono="accent">Alta</Etiqueta>
          </td>
          <td>
            <Etiqueta tono="warning">En atención</Etiqueta>
          </td>
        </tr>
        <tr>
          <td>
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00141
            </span>
          </td>
          <td>Cinco sillas rotas en aula</td>
          <td>Mobiliario · Silla rota</td>
          <td>A-201</td>
          <td>07/09/2026</td>
          <td>
            <Etiqueta tono="warning">Media</Etiqueta>
          </td>
          <td>
            <Etiqueta tono="muted">En espera</Etiqueta>
          </td>
        </tr>
        <tr>
          <td>
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00140
            </span>
          </td>
          <td>Fuga de agua en baño de damas</td>
          <td>Limpieza · Fuga de agua</td>
          <td>Biblioteca piso 2</td>
          <td>07/09/2026</td>
          <td>
            <Etiqueta tono="danger">Crítica</Etiqueta>
          </td>
          <td>
            <Etiqueta tono="warning">En atención</Etiqueta>
          </td>
        </tr>
      </tbody>
    </Tabla>
  );
}
