import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import BuscadorAmbiente from "../estilo/BuscadorAmbiente";
import Selector from "../estilo/Selector";
import PrioridadSugerida from "../estilo/PrioridadSugerida";
import AreaTexto from "../estilo/AreaTexto";
import Aviso from "../estilo/Aviso";
import NotaInformativa from "../estilo/NotaInformativa";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3NuevoTicket() {
  return (
    <UsuarioLayout pagina="nuevo-ticket">
      <TituloPagina
        titulo="Registrar un ticket"
        descripcion="Indica qué falla y dónde. La prioridad se sugiere según la categoría y el supervisor puede ajustarla."
      ></TituloPagina>
      <Aviso tono="warning">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="min-w-0 flex-1">
            Ya existe un ticket abierto para A-201 en Audiovisuales: TCK-2026-00147,
            registrado hace 18 minutos. Revísalo antes de crear otro.
          </p>
          <div className="ml-auto shrink-0">
            <Boton variante="heredado">Ver ese ticket</Boton>
          </div>
        </div>
      </Aviso>
      <div className="mt-5">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
          <div className="space-y-6">
            <Tarjeta titulo="Datos del ticket">
              <div className="grid gap-5 sm:grid-cols-2">
                <Selector titulo="CATEGORÍA" flechaInterior>
                  <option>Audiovisuales</option>
                  <option>Climatización</option>
                  <option>Redes y conectividad</option>
                  <option>Mobiliario</option>
                  <option>Eléctrico</option>
                  <option>Limpieza</option>
                  <option>Accesos y cerraduras</option>
                </Selector>
                <Selector titulo="SUBCATEGORÍA" flechaInterior>
                  <option>Proyector no enciende</option>
                  <option>Imagen distorsionada</option>
                  <option>Audio sin señal</option>
                  <option>Ecran atascado</option>
                </Selector>
                <BuscadorAmbiente
                  valor="A-201"
                  ayuda="Aula · Pabellón A · piso 2"
                />
                <PrioridadSugerida 
                  prioridad= "Crítica"
                />
              </div>
              <Campo
                titulo="ASUNTO"
                valor="Proyector no enciende en aula A-201"
                ayuda=""
              />
              <AreaTexto
                titulo="DESCRIPCIÓN"
                valor="El proyector enciende el foco pero la imagen no llega a la pantalla. Probé con dos laptops y el mismo cable HDMI de la mesa. Hay clase de 10:00 a 13:00."
                ayuda="Indica qué probaste y desde cuándo ocurre."
                contador="178 / 600"
              />
              <p className="text-xs text-muted">EVIDENCIA (OPCIONAL)</p>
              <div className="rounded-sm border border-dashed border-border p-6 text-center text-[13px] text-muted">
                Arrastra una foto o pulsa para elegir · JPG o PNG hasta 5 MB
              </div>
              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton variante="primario">Registrar ticket</Boton>
                <Boton variante="secundario">Cancelar</Boton>
              </div>
            </Tarjeta>
          </div>
          <aside className="space-y-6">
            <Tarjeta titulo="Qué conviene incluir">
              <ul className="list-disc space-y-3 pl-4 text-[13px]">
                <li>El código del ambiente tal como aparece en la puerta.</li>
                <li>Desde cuándo ocurre la falla y si es intermitente.</li>
                <li>Qué ya intentaste (cambiar cable, reiniciar equipo).</li>
                <li>Si hay clase o evento en las próximas horas.</li>
                <li>Un teléfono de contacto si hay que coordinar el acceso.</li>
              </ul>
            </Tarjeta>
            <NotaInformativa titulo="Tiempo esperado para esta categoría">
              <p>
                Prioridad crítica: atención dentro de 2 horas hábiles desde el
                registro.
              </p>
            </NotaInformativa>
          </aside>
        </div>
      </div>
    </UsuarioLayout>
  );
}


