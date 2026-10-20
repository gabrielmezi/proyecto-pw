import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import Paginacion from "../estilo/Paginacion";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H2Ambientes() {
  return (
    <SupervisorLayout pagina="ambientes">
      <TituloPagina
        titulo="Sedes y ambientes"
        descripcion="48 ambientes registrados en el Campus Monterrico."
      >
        <Boton variante="primario">Nuevo ambiente</Boton>
      </TituloPagina>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Campo titulo="BUSCAR POR CÓDIGO O NOMBRE" valor="" ayuda="" />
        <Selector titulo="SEDE">
          <option>Monterrico</option>
        </Selector>
        <Selector titulo="PABELLÓN">
          <option>Todos</option>
          <option>A</option>
          <option>H</option>
          <option>E</option>
        </Selector>
        <Boton variante="secundario">Tipo: aula ×</Boton>
      </div>
      <Tabla titulo="Listado">
        <thead>
          <tr>
            <th scope="col">CÓDIGO</th>
            <th scope="col">TIPO DE AMBIENTE</th>
            <th scope="col">PABELLÓN</th>
            <th scope="col">PISO</th>
            <th scope="col">SEDE</th>
            <th scope="col">CAPACIDAD</th>
            <th scope="col">TICKETS ABIERTOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A-201</td>
            <td>Aula</td>
            <td>A</td>
            <td>2</td>
            <td>Campus Monterrico</td>
            <td>68</td>
            <td>2</td>
          </tr>
          <tr>
            <td>A-305</td>
            <td>Aula</td>
            <td>A</td>
            <td>3</td>
            <td>Campus Monterrico</td>
            <td>54</td>
            <td>0</td>
          </tr>
          <tr>
            <td>E-304</td>
            <td>Aula magna</td>
            <td>E</td>
            <td>3</td>
            <td>Campus Monterrico</td>
            <td>120</td>
            <td>3</td>
          </tr>
          <tr>
            <td>H-105</td>
            <td>Laboratorio de cómputo</td>
            <td>H</td>
            <td>1</td>
            <td>Campus Monterrico</td>
            <td>32</td>
            <td>1</td>
          </tr>
          <tr>
            <td>H-210</td>
            <td>Laboratorio de Redes</td>
            <td>H</td>
            <td>2</td>
            <td>Campus Monterrico</td>
            <td>28</td>
            <td>4</td>
          </tr>
          <tr>
            <td>N-402</td>
            <td>Aula</td>
            <td>N</td>
            <td>4</td>
            <td>Campus Monterrico</td>
            <td>48</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Q-101</td>
            <td>Auditorio</td>
            <td>Q</td>
            <td>1</td>
            <td>Campus Monterrico</td>
            <td>180</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BIB-P2</td>
            <td>Biblioteca piso 2</td>
            <td>Biblioteca</td>
            <td>2</td>
            <td>Campus Monterrico</td>
            <td>210</td>
            <td>1</td>
          </tr>
          <tr>
            <td>AUD-CEN</td>
            <td>Auditorio Central</td>
            <td>Central</td>
            <td>1</td>
            <td>Campus Monterrico</td>
            <td>420</td>
            <td>1</td>
          </tr>
          <tr>
            <td>L-108</td>
            <td>Laboratorio de Física</td>
            <td>L</td>
            <td>1</td>
            <td>Campus Monterrico</td>
            <td>30</td>
            <td>0</td>
          </tr>
        </tbody>
      </Tabla>
      <Paginacion>Mostrando 1–10 de 48 ambientes</Paginacion>
    </SupervisorLayout>
  );
}
