import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import AreaTexto from "../estilo/AreaTexto";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H2EditarCategoria() {
  return (
    <SupervisorLayout pagina="categorias">
      <TituloPagina
        titulo="Nueva subcategoría"
        descripcion="Categorías · Nueva subcategoría"
      ></TituloPagina>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
        <div className="space-y-6">
          <Tarjeta titulo="Datos de la categoría">
            <Aviso tono="danger">
              No se pudo guardar: revisa los 2 campos marcados.
            </Aviso>
            <div className="grid gap-5 sm:grid-cols-2">
              <Campo
                titulo="NOMBRE"
                placeholder="Escribe el nombre"
                error={true}
                ayuda="El nombre es obligatorio."
              />
              <Selector titulo="CATEGORÍA PADRE">
                <option>Audiovisuales</option>
                <option>Climatización</option>
                <option>Redes y conectividad</option>
              </Selector>
              <Selector titulo="PRIORIDAD POR DEFECTO">
                <option>Alta</option>
                <option>Crítica</option>
                <option>Media</option>
                <option>Baja</option>
              </Selector>
              <Campo
                titulo="TIEMPO ESPERADO (HORAS)"
                valor="0"
                tipo="number"
                error={true}
                ayuda="Debe ser un número mayor que cero."
              />
            </div>
            <AreaTexto
              titulo="DESCRIPCIÓN"
              valor="Falla del extensor HDMI que impide proyectar aunque el equipo encienda. Requiere revisión del rack del piso."
              ayuda="Se muestra al usuario al elegir la subcategoría. Máximo 240 caracteres."
            />
            <label className="flex items-center gap-2 text-[13px]">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
              Categoría activa · disponible al registrar tickets
            </label>
            <div data-acciones className="flex flex-wrap items-center gap-3">
              <Boton variante="primario">Guardar categoría</Boton>
              <Boton variante="secundario">Cancelar</Boton>
            </div>
          </Tarjeta>
        </div>
        <aside className="space-y-6">
          <Tarjeta titulo="Efecto del tiempo esperado">
            <p>
              El tiempo esperado define cuándo un ticket aparece como fuera de
              plazo en la cola y en el tablero. Cambiarlo no altera los tickets
              ya abiertos.
            </p>
            <h3 className="text-base font-semibold">REFERENCIA ACTUAL</h3>
            <p>Crítica 2 h · Alta 8 h · Media 24 h · Baja 72 h hábiles</p>
          </Tarjeta>
        </aside>
      </div>
    </SupervisorLayout>
  );
}
