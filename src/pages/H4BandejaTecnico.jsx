import Tarjeta from "../estilo/Tarjeta";
import Boton from "../estilo/Boton";
import Selector from "../estilo/Selector";
import Etiqueta from "../estilo/Etiqueta";
import Aviso from "../estilo/Aviso";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import TecnicoLayout from "../components/TecnicoLayout";

export default function H4BandejaTecnico() {
  return (
    <TecnicoLayout pagina="bandeja">
      <TituloPagina
        titulo="Mi bandeja"
        descripcion="Julio Paredes Soto · Audiovisuales y Redes · 8 tickets asignados"
      >
        <Etiqueta tono="info">Abiertos 1</Etiqueta>
        <Etiqueta tono="warning">En atención 3</Etiqueta>
        <Etiqueta tono="muted">En espera 2</Etiqueta>
        <Etiqueta tono="success">Resueltos 2</Etiqueta>
      </TituloPagina>
      <div className="mb-4 flex flex-wrap items-end gap-3">
        <Boton variante="primario">Todos (8)</Boton>
        <Boton variante="secundario">Solo críticos (3)</Boton>
        <Boton variante="secundario">Fuera de plazo (1)</Boton>
        <Boton variante="secundario">Hoy</Boton>
        <div className="ml-auto"><Selector titulo="Orden">
          <option>Prioridad y plazo</option>
          <option>Antigüedad</option>
        </Selector></div>
      </div>
      <Tabla prioridades titulo="Listado">
        <thead>
          <tr>
            <th scope="col">CÓDIGO</th>
            <th scope="col">ASUNTO</th>
            <th scope="col">CATEGORÍA</th>
            <th scope="col">AMBIENTE</th>
            <th scope="col">SOLICITANTE</th>
            <th scope="col">PRIORIDAD</th>
            <th scope="col">ESTADO</th>
            <th scope="col">PLAZO</th>
            <th scope="col">ACCIÓN</th>
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
            <td>Audiovisuales</td>
            <td>A-201</td>
            <td>Camila Quispe Ramos</td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="info">Abierto</Etiqueta>
            </td>
            <td>Vence en 1 h 42 min</td>
            <td>
              <Boton variante="terciario" to="/h5/detalle-atencion">Abrir bitácora</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00140
              </span>
            </td>
            <td>Fuga de agua en baño de damas</td>
            <td>Limpieza</td>
            <td>Biblioteca piso 2</td>
            <td>Karina Bustamante Ruiz</td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="warning">En atención</Etiqueta>
            </td>
            <td className="text-danger">Vencido hace 1 h 50 min</td>
            <td>
              <Boton variante="terciario" to="/h5/detalle-atencion">Abrir bitácora</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00145
              </span>
            </td>
            <td>Aire acondicionado sin frío</td>
            <td>Climatización</td>
            <td>E-304</td>
            <td>Milagros Ccahuana Ríos</td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="warning">En atención</Etiqueta>
            </td>
            <td>Vence en 6 h 50 min</td>
            <td>
              <Boton variante="terciario" to="/h5/detalle-atencion">Abrir bitácora</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00134
              </span>
            </td>
            <td>Micrófono inalámbrico sin señal</td>
            <td>Audiovisuales</td>
            <td>Auditorio Central</td>
            <td>Patricia Vílchez Soto</td>
            <td>
              <Etiqueta tono="warning">Media</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="success">Resuelto</Etiqueta>
            </td>
            <td>Atendido a tiempo</td>
            <td>
              <Boton variante="terciario" to="/h5/detalle-atencion">Abrir bitácora</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00128
              </span>
            </td>
            <td>Puerta de emergencia no cierra</td>
            <td>Accesos y cerraduras</td>
            <td>H-210</td>
            <td>Elena Rivas Coaguila</td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="success">Cerrado</Etiqueta>
            </td>
            <td>Cerrado el 04/09/2026</td>
            <td>
              <Boton variante="terciario" to="/h5/detalle-atencion">Abrir bitácora</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00126
              </span>
            </td>
            <td>Proyector con imagen verdosa</td>
            <td>Audiovisuales</td>
            <td>Q-101</td>
            <td>Nicolás Farfán Beltrán</td>
            <td>
              <Etiqueta tono="warning">Media</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="muted">En espera</Etiqueta>
            </td>
            <td>Espera repuesto · retorno 09/09/2026</td>
            <td>
              <Boton variante="terciario" to="/h5/detalle-atencion">Abrir bitácora</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00124
              </span>
            </td>
            <td>Punto de red sin enlace</td>
            <td>Redes y conectividad</td>
            <td>H-105</td>
            <td>Ricardo Yupanqui Mora</td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="warning">En atención</Etiqueta>
            </td>
            <td>Vence en 2 h 30 min</td>
            <td>
              <Boton variante="terciario" to="/h5/detalle-atencion">Abrir bitácora</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span className="whitespace-nowrap font-mono text-xs text-primary">
                TCK-2026-00119
              </span>
            </td>
            <td>Cortina del auditorio trabada</td>
            <td>Mobiliario</td>
            <td>Auditorio Central</td>
            <td>Verónica Salas Pinedo</td>
            <td>
              <Etiqueta tono="info">Baja</Etiqueta>
            </td>
            <td>
              <Etiqueta tono="muted">En espera</Etiqueta>
            </td>
            <td>Espera proveedor · retorno 11/09/2026</td>
            <td>
              <Boton variante="terciario" to="/h5/detalle-atencion">Abrir bitácora</Boton>
            </td>
          </tr>
        </tbody>
      </Tabla>
      <div className="mt-4 grid items-start gap-4 lg:grid-cols-2">
        <Aviso tono="danger">
          1 ticket fuera del tiempo esperado: TCK-2026-00140 lleva 1 h 50 min de
          retraso. Atiéndelo o cámbialo a En espera con motivo.
        </Aviso>
        <Tarjeta><p className="text-[13px] text-muted">Estado vacío de la bandeja: «Sin tickets asignados. Cuando el supervisor te asigne uno aparecerá aquí.»</p></Tarjeta>
      </div>
    </TecnicoLayout>
  );
}
