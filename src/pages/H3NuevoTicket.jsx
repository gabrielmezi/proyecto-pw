import { useState } from "react";
import { useDatos } from "../context/DatosContext";
import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import BuscadorAmbiente from "../estilo/BuscadorAmbiente";
import Selector from "../estilo/Selector";
import PrioridadSugerida from "../estilo/PrioridadSugerida";
import AreaTexto from "../estilo/AreaTexto";
import NotaInformativa from "../estilo/NotaInformativa";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3NuevoTicket() {
  const navigate = useNavigate();

  const { usuario, crearTicket } = useDatos();

  // ESTADO LOCAL: borrador del formulario, todavía no persistido.
  const [datos, setDatos] = useState({
    asunto: "",
    descripcion: "",
    categoria: "Audiovisuales",
    subcategoria: "Proyector no enciende",
    ambiente: usuario.ambiente,
  });

  const [mensaje, setMensaje] = useState("");

  function cambiarCampo(event) {
    const { name, value } = event.target;
    setDatos((anterior) => ({ ...anterior, [name]: value }));
  }

  // GUARDAR Y NAVEGAR: el ID del ticket queda en la URL.
  function registrarTicket() {
    if (!datos.asunto.trim() || !datos.descripcion.trim() || !datos.ambiente.trim()) {
      setMensaje("Completa el asunto, la descripción y el ambiente.");
      return;
    }

    const ticket = crearTicket(datos);

    if (ticket) navigate(`/h3/confirmacion/${ticket.id}`);
  }

  return (
    <UsuarioLayout pagina="nuevo-ticket">
      <TituloPagina
        titulo="Registrar un ticket"
        descripcion="Indica qué falla y dónde. La prioridad se sugiere según la categoría y el supervisor puede ajustarla."
      ></TituloPagina>

      <div className="mt-5">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
          <div className="space-y-6">
            <Tarjeta titulo="Datos del ticket">
              <div className="grid gap-5 sm:grid-cols-2">
                <Selector name="categoria" value={datos.categoria} onChange={cambiarCampo} titulo="CATEGORÍA" flechaInterior>
                  <option>Audiovisuales</option>
                  <option>Climatización</option>
                  <option>Redes y conectividad</option>
                  <option>Mobiliario</option>
                  <option>Eléctrico</option>
                  <option>Limpieza</option>
                  <option>Accesos y cerraduras</option>
                </Selector>
                <Selector name="subcategoria" value={datos.subcategoria} onChange={cambiarCampo} titulo="SUBCATEGORÍA" flechaInterior>
                  <option>Proyector no enciende</option>
                  <option>Imagen distorsionada</option>
                  <option>Audio sin señal</option>
                  <option>Ecran atascado</option>
                </Selector>
                <BuscadorAmbiente
                  value={datos.ambiente}
                  onChange={(event) => setDatos((anterior) => ({ ...anterior, ambiente: event.target.value }))}
                  ayuda="Aula · Pabellón A · piso 2"
                />
                <PrioridadSugerida
                  prioridad= "Crítica"
                />
              </div>
              <Campo
                titulo="ASUNTO"
                name="asunto" value={datos.asunto} onChange={cambiarCampo}
                ayuda=""
              />
              <AreaTexto
                titulo="DESCRIPCIÓN"
                name="descripcion" value={datos.descripcion} onChange={cambiarCampo} maxLength={600}
                ayuda="Indica qué probaste y desde cuándo ocurre."
                contador={`${datos.descripcion.length} / 600`}
              />
              <p className="text-xs text-muted">EVIDENCIA (OPCIONAL)</p>
              <div className="rounded-sm border border-dashed border-border p-6 text-center text-[13px] text-muted">
                Arrastra una foto o pulsa para elegir · JPG o PNG hasta 5 MB
              </div>
              {mensaje && <p role="alert">{mensaje}</p>}

              <div data-acciones className="flex flex-wrap items-center gap-3">
                <Boton onClick={registrarTicket} variante="primario">Registrar ticket</Boton>
                <Boton onClick={() => navigate("/h3/mis-tickets")} variante="secundario">Cancelar</Boton>
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


