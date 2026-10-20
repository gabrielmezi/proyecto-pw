import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Etiqueta from "../estilo/Etiqueta";
import Tabla from "../estilo/Tabla";
import TituloPagina from "../estilo/TituloPagina";
import Paginacion from "../estilo/Paginacion";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H2Categorias() {
  return (
    <SupervisorLayout pagina="categorias">
      <TituloPagina
        titulo="Categorías de servicio"
        descripcion="7 categorías activas · 19 subcategorías · la prioridad por defecto se aplica a cada ticket nuevo."
      >
        <Boton variante="secundario">Exportar catálogo</Boton>
        <Boton variante="primario">Nueva categoría</Boton>
      </TituloPagina>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Campo titulo="BUSCAR" valor="" ayuda="Categoría o subcategoría" />
        <Boton variante="secundario">Solo activas ×</Boton>
        <Selector titulo="PRIORIDAD">
          <option>Todas</option>
          <option>Crítica</option>
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </Selector>
        <Boton variante="terciario">Limpiar</Boton>
      </div>
      <Tabla titulo="Listado">
        <thead>
          <tr>
            <th scope="col">CATEGORÍA · SUBCATEGORÍA</th>
            <th scope="col">PRIORIDAD</th>
            <th scope="col">TIEMPO ESPERADO</th>
            <th scope="col">TICKETS ABIERTOS</th>
            <th scope="col">ESTADO</th>
            <th scope="col">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Audiovisuales</td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>4 h hábiles</td>
            <td>9</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Proyector no enciende</span>
            </td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>2 h hábiles</td>
            <td>3</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Imagen distorsionada</span>
            </td>
            <td>
              <Etiqueta tono="warning">Media</Etiqueta>
            </td>
            <td>8 h hábiles</td>
            <td>2</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Audio sin señal</span>
            </td>
            <td>
              <Etiqueta tono="warning">Media</Etiqueta>
            </td>
            <td>8 h hábiles</td>
            <td>1</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Ecran atascado</span>
            </td>
            <td>
              <Etiqueta tono="info">Baja</Etiqueta>
            </td>
            <td>24 h hábiles</td>
            <td>3</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>Climatización</td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>8 h hábiles</td>
            <td>5</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Aire sin frío</span>
            </td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>8 h hábiles</td>
            <td>3</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Fuga de condensado</span>
            </td>
            <td>
              <Etiqueta tono="accent">Alta</Etiqueta>
            </td>
            <td>8 h hábiles</td>
            <td>2</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>Redes y conectividad</td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>2 h hábiles</td>
            <td>6</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Punto de red caído</span>
            </td>
            <td>
              <Etiqueta tono="danger">Crítica</Etiqueta>
            </td>
            <td>2 h hábiles</td>
            <td>4</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Señal intermitente</span>
            </td>
            <td>
              <Etiqueta tono="warning">Media</Etiqueta>
            </td>
            <td>12 h hábiles</td>
            <td>2</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>Mobiliario</td>
            <td>
              <Etiqueta tono="info">Baja</Etiqueta>
            </td>
            <td>48 h hábiles</td>
            <td>2</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
          <tr>
            <td>
              <span data-subcategoria>Silla rota</span>
            </td>
            <td>
              <Etiqueta tono="info">Baja</Etiqueta>
            </td>
            <td>48 h hábiles</td>
            <td>2</td>
            <td>
              <Etiqueta tono="success">Activa</Etiqueta>
            </td>
            <td>
              <Boton variante="terciario">Editar</Boton>{" "}
              <Boton variante="terciario">Desactivar</Boton>
            </td>
          </tr>
        </tbody>
      </Tabla>
      <Paginacion>
        Mostrando 13 de 26 filas · 7 categorías y 19 subcategorías
      </Paginacion>
    </SupervisorLayout>
  );
}
