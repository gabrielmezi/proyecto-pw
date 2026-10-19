import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import AreaTexto from "../estilo/AreaTexto";
import Aviso from "../estilo/Aviso";
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
        Ya existe un ticket abierto para A-201 en Audiovisuales: TCK-2026-00147,
        registrado hace 18 minutos. Revísalo antes de crear otro.{" "}
        <Boton variante="secundario">Ver ese ticket</Boton>
      </Aviso>
      <div className="mt-5">
        <div className="dos-columnas">
          <div className="space-y-6">
            <Tarjeta titulo="Datos del ticket">
              <div className="formulario">
                <Selector titulo="CATEGORÍA">
                  <option>Audiovisuales</option>
                  <option>Climatización</option>
                  <option>Redes y conectividad</option>
                  <option>Mobiliario</option>
                  <option>Eléctrico</option>
                  <option>Limpieza</option>
                  <option>Accesos y cerraduras</option>
                </Selector>
                <Selector titulo="SUBCATEGORÍA">
                  <option>Proyector no enciende</option>
                  <option>Imagen distorsionada</option>
                  <option>Audio sin señal</option>
                  <option>Ecran atascado</option>
                </Selector>
                <Campo
                  titulo="AMBIENTE"
                  valor="A-201"
                  ayuda="Aula · Pabellón A · piso 2"
                />
                <Selector titulo="PRIORIDAD SUGERIDA">
                  <option>Crítica</option>
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>
                </Selector>
              </div>
              <Campo
                titulo="ASUNTO"
                valor="Proyector no enciende en aula A-201"
                ayuda=""
              />
              <AreaTexto
                titulo="DESCRIPCIÓN"
                valor="El proyector enciende el foco pero la imagen no llega a la pantalla. Probé con dos laptops y el mismo cable HDMI de la mesa. Hay clase de 10:00 a 13:00."
                ayuda="Indica qué probaste y desde cuándo ocurre. 178 / 600"
              />
              <p className="text-xs text-muted">EVIDENCIA (OPCIONAL)</p>
              <div className="rounded-sm border border-dashed border-border p-6 text-center text-[13px] text-muted">
                Arrastra una foto o pulsa para elegir · JPG o PNG hasta 5 MB
              </div>
              <div className="acciones">
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
            <Aviso tono="info">
              <h3>Tiempo esperado para esta categoría</h3>
              <p>
                Prioridad crítica: atención dentro de 2 horas hábiles desde el
                registro.
              </p>
            </Aviso>
          </aside>
        </div>
      </div>
    </UsuarioLayout>
  );
}
