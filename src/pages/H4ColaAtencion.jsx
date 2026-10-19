import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Etiqueta from "../estilo/Etiqueta";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H4ColaAtencion() {
  return (
    <SupervisorLayout pagina="cola">
      <TituloPagina
        titulo="Cola de atención"
        descripcion="24 tickets en cola · 9 sin asignar · 3 fuera del tiempo esperado"
      >
        <Etiqueta tono="info">Abierto</Etiqueta> 9{" "}
        <Etiqueta tono="warning">En atención</Etiqueta> 8{" "}
        <Etiqueta tono="muted">En espera</Etiqueta> 3{" "}
        <Etiqueta tono="success">Resuelto</Etiqueta> 4
      </TituloPagina>
      <div className="filtros">
        <Campo titulo="BUSCAR CÓDIGO O ASUNTO" valor="" ayuda="" />
        <Boton variante="secundario">Prioridad: crítica, alta ×</Boton>
        <Boton variante="secundario">Estado: abierto, en atención ×</Boton>
        <Selector titulo="CATEGORÍA">
          <option>Todas</option>
          <option>Audiovisuales</option>
          <option>Redes</option>
        </Selector>
        <Selector titulo="AMBIENTE">
          <option>Todos</option>
          <option>A-201</option>
          <option>H-210</option>
        </Selector>
        <Selector titulo="ORDEN">
          <option>Antigüedad</option>
          <option>Prioridad</option>
          <option>Tiempo sin atención</option>
        </Selector>
      </div>
      <Tabla prioridades titulo="Listado">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">CÓDIGO</th>
            <th scope="col">ASUNTO</th>
            <th scope="col">CATEGORÍA</th>
            <th scope="col">AMBIENTE</th>
            <th scope="col">SOLICITANTE</th>
            <th scope="col">ANTIGÜEDAD</th>
            <th scope="col">PRIORIDAD</th>
            <th scope="col">ESTADO</th>
            <th scope="col">TÉCNICO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00147"
                defaultChecked
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00147
              </span>
            </td>
            <td>Proyector no enciende en aula</td>
            <td>Audiovisuales · Proyector no enciende</td>
            <td>A-201</td>
            <td>Camila Quispe Ramos</td>
            <td>18 min</td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="info">Abierto</Etiqueta>
            </td>
            <td>Sin asignar</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00146"
                defaultChecked
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00146
              </span>
            </td>
            <td>Punto de red caído en laboratorio</td>
            <td>Redes y conectividad · Punto de red caído</td>
            <td>H-210</td>
            <td>Renzo Salazar Núñez</td>
            <td>42 min</td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="info">Abierto</Etiqueta>
            </td>
            <td>Sin asignar</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00145"
                defaultChecked
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00145
              </span>
            </td>
            <td>Aire acondicionado sin frío</td>
            <td>Climatización · Aire sin frío</td>
            <td>E-304</td>
            <td>Milagros Ccahuana Ríos</td>
            <td>1 h 10 min</td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="warning">En atención</Etiqueta>
            </td>
            <td>Julio Paredes Soto</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00144"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00144
              </span>
            </td>
            <td>Tomacorriente sin energía</td>
            <td>Eléctrico · Tomacorriente sin energía</td>
            <td>N-402</td>
            <td>Diego Aliaga Ferrer</td>
            <td>1 h 35 min</td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="info">Abierto</Etiqueta>
            </td>
            <td>Sin asignar</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00143"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00143
              </span>
            </td>
            <td>Imagen distorsionada del proyector</td>
            <td>Audiovisuales · Imagen distorsionada</td>
            <td>Q-101</td>
            <td>Andrea Chávez Loayza</td>
            <td>2 h 05 min</td>
            <td>
              <Etiqueta tono="warning">Media</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="warning">En atención</Etiqueta>
            </td>
            <td>Marco Huamán Vela</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00142"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00142
              </span>
            </td>
            <td>Chapa de puerta trabada</td>
            <td>Accesos y cerraduras · Chapa trabada</td>
            <td>H-105</td>
            <td>Pedro Salcedo Ayala</td>
            <td>2 h 40 min</td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="warning">En atención</Etiqueta>
            </td>
            <td>Iván Zegarra Pinto</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00141"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00141
              </span>
            </td>
            <td>Cinco sillas rotas en aula</td>
            <td>Mobiliario · Silla rota</td>
            <td>A-201</td>
            <td>Rosa Ticona Álvarez</td>
            <td>3 h 15 min</td>
            <td>
              <Etiqueta tono="warning">Media</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="muted">En espera</Etiqueta>
            </td>
            <td>Marco Huamán Vela</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00140"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00140
              </span>
            </td>
            <td>Fuga de agua en baño de damas</td>
            <td>Limpieza · Fuga de agua</td>
            <td>Biblioteca piso 2</td>
            <td>Karina Bustamante Ruiz</td>
            <td>3 h 50 min</td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="warning">En atención</Etiqueta>
            </td>
            <td>Julio Paredes Soto</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00139"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00139
              </span>
            </td>
            <td>Wifi intermitente en pasillo</td>
            <td>Redes y conectividad · Señal intermitente</td>
            <td>E-304</td>
            <td>Luis Fernando Ochoa</td>
            <td>4 h 20 min</td>
            <td>
              <Etiqueta tono="warning">Media</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="info">Abierto</Etiqueta>
            </td>
            <td>Sin asignar</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00138"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00138
              </span>
            </td>
            <td>Ecran no baja</td>
            <td>Audiovisuales · Ecran atascado</td>
            <td>Q-101</td>
            <td>Gabriela Ynga Paredes</td>
            <td>5 h 05 min</td>
            <td>
              <Etiqueta tono="info">Baja</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="info">Abierto</Etiqueta>
            </td>
            <td>Sin asignar</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00137"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00137
              </span>
            </td>
            <td>Luminaria parpadea</td>
            <td>Eléctrico · Luminaria defectuosa</td>
            <td>N-402</td>
            <td>César Rojas Bermúdez</td>
            <td>6 h 30 min</td>
            <td>
              <Etiqueta tono="info">Baja</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="muted">En espera</Etiqueta>
            </td>
            <td>Iván Zegarra Pinto</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00136"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00136
              </span>
            </td>
            <td>Aire acondicionado gotea</td>
            <td>Climatización · Fuga de condensado</td>
            <td>H-210</td>
            <td>Melissa Guerra Tapia</td>
            <td>8 h 10 min</td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="warning">En atención</Etiqueta>
            </td>
            <td>Sandra Nolasco Ríos</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Seleccionar TCK-2026-00135"
                className="accent-primary"
              />
            </td>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00135
              </span>
            </td>
            <td>Mesa desnivelada</td>
            <td>Mobiliario · Mesa dañada</td>
            <td>A-201</td>
            <td>Jorge Palomino Cruz</td>
            <td>10 h 45 min</td>
            <td>
              <Etiqueta tono="info">Baja</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="success">Resuelto</Etiqueta>
            </td>
            <td>Marco Huamán Vela</td>
          </tr>
        </tbody>
      </Tabla>
      <div className="mx-auto mt-4 flex w-fit flex-wrap items-center gap-4 rounded-sm bg-primary-dark p-4 text-white shadow-lg">
        <strong>3 tickets seleccionados</strong>
        <Boton variante="secundario">Asignar a técnico</Boton>
        <Boton variante="primario">Cambiar prioridad</Boton>
        <Boton variante="primario">Devolver a la cola</Boton>
        <Boton variante="secundario">Quitar selección</Boton>
      </div>
    </SupervisorLayout>
  );
}
