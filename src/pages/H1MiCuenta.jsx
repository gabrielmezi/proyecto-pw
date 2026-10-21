import { useState } from "react";
import { useDatos } from "../context/DatosContext";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Selector from "../estilo/Selector";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H1MiCuenta() {

  // ESTADO LOCAL: el borrador cambia mientras se escribe; aún no se guarda.
  const { usuario, misTickets, guardarUsuario } = useDatos();
  const [datos, setDatos] = useState({ ...usuario });
  const [mensaje, setMensaje] = useState("");

  function cambiarCampo(event) {
    const { name, value } = event.target;
    setDatos((anterior) => ({ ...anterior, [name]: value }));
  }

  // Al pulsar Guardar, el Context escribe el perfil en localStorage.
  function guardarPerfil() {
    if (!datos.nombres.trim() || !datos.apellidos.trim()
      || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo.trim())) {
      setMensaje("Completa nombres, apellidos y un correo válido.");
      return;
    }

    if (guardarUsuario(datos)) {
      setMensaje("Datos guardados.");
    }
  }

  return (
    <UsuarioLayout pagina="cuenta">
      <TituloPagina
        titulo="Mi cuenta"
        descripcion="Tus datos se usan para contactarte durante la atención de un ticket."
      ></TituloPagina>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
        <Tarjeta titulo="Datos personales">
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo name="nombres" value={datos.nombres} onChange={cambiarCampo} titulo="NOMBRES" ayuda="" />
            <Campo name="apellidos" value={datos.apellidos} onChange={cambiarCampo} titulo="APELLIDOS" ayuda="" />
            <Campo name="correo" value={datos.correo} onChange={cambiarCampo}
              titulo="CORREO INSTITUCIONAL"
              ayuda="No editable."
              soloLectura
            />
            <Campo name="telefono" value={datos.telefono} onChange={cambiarCampo} titulo="TELÉFONO" ayuda="" />
            <Selector name="carrera" value={datos.carrera} onChange={cambiarCampo} titulo="UNIDAD O CARRERA" flechaInterior>
              <option>Ingeniería de Sistemas</option>
              <option>Ingeniería Industrial</option>
              <option>Derecho</option>
            </Selector>
            <Selector name="ambiente" value={datos.ambiente} onChange={cambiarCampo} titulo="AMBIENTE HABITUAL" flechaInterior>
              <option>A-201</option>
              <option>H-210</option>
              <option>E-304</option>
            </Selector>
          </div>
          {mensaje && <p role="status" className="text-sm">{mensaje}</p>}

          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton onClick={guardarPerfil} variante="primario">Guardar cambios</Boton>
            <Boton onClick={() => { setDatos({ ...usuario }); setMensaje(""); }} variante="terciario">Descartar</Boton>
          </div>
          <div className="space-y-4 border-t border-border pt-6">
            <h2 className="text-xl font-semibold">Cambiar contraseña</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              <Campo titulo="ACTUAL" tipo="password" valor="Contrasena1" />
              <Campo titulo="NUEVA" tipo="password" valor="Contrasena2" />
              <Campo titulo="CONFIRMAR" tipo="password" valor="Contrasena2" />
            </div>
            <Boton variante="primario">Actualizar contraseña</Boton>
          </div>
        </Tarjeta>
        <aside className="space-y-6">
          <Tarjeta>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-sm font-semibold text-white">{usuario.nombres[0]}{usuario.apellidos[0]}</span>
              <div>
                <p className="font-semibold">{usuario.nombres} {usuario.apellidos}</p>
                <p className="text-[13px] text-muted">Usuario · {usuario.vinculo}</p>
              </div>
            </div>
            <dl className="divide-y divide-border text-[13px]">
              <div className="flex justify-between py-2">
                <dt className="text-muted">Tickets reportados</dt>
                <dd className="font-semibold">{misTickets.length}</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-muted">Abiertos ahora</dt>
                <dd className="font-semibold">{misTickets.filter((ticket) => ticket.estado === "Abierto").length}</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-muted">Cuenta creada</dt>
                <dd className="font-semibold">14/03/2026</dd>
              </div>
            </dl>
          </Tarjeta>
          <Aviso tono="warning">
            <h3 className="text-base font-semibold">Encuesta pendiente</h3>
            <p className="mb-3">
              El ticket TCK-2026-00131 se cerró el 03/09/2026. Califica la
              atención antes del 10/09/2026.
            </p>
            <Boton variante="heredado">Responder encuesta</Boton>
          </Aviso>
        </aside>
      </div>
    </UsuarioLayout>
  );
}
