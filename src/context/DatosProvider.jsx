import { useState } from "react";
import { DatosContext } from "./DatosContext";
import { guardarLocal, leerLocal } from "../datos/persistencia";

const usuarioInicial = {
  nombres: "Camila Alejandra",
  apellidos: "Quispe Ramos",
  correo: "camila.quispe@aloe.ulima.edu.pe",
  telefono: "987 654 321",
  carrera: "Ingeniería de Sistemas",
  vinculo: "Alumna",
  ambiente: "A-201",
};

function esUsuario(datos) {
  return datos !== null && typeof datos === "object"
    && Object.keys(usuarioInicial).every((campo) => typeof datos[campo] === "string");
}

function sonTickets(datos) {
  const campos = ["id", "codigo", "asunto", "descripcion", "categoria", "subcategoria",
    "ambiente", "prioridad", "estado", "creadoEn", "usuarioCorreo"];

  return Array.isArray(datos) && datos.every((ticket) => ticket !== null
    && campos.every((campo) => typeof ticket[campo] === "string"));
}

export default function DatosProvider({ children }) {
  // ESTADO COMPARTIDO: se lee localStorage una vez, al iniciar la aplicación.
  const [usuario, setUsuario] = useState(() =>
    leerLocal("mesa-ayuda.usuario", usuarioInicial, esUsuario));

  const [tickets, setTickets] = useState(() =>
    leerLocal("mesa-ayuda.tickets", [], sonTickets));

  const [error, setError] = useState("");

  // PERSISTENCIA DEL PERFIL: se guarda al registrar o editar los datos.
  function guardarUsuario(datos) {
    // La lista explícita de campos evita guardar contraseñas del formulario.
    const perfil = {
      nombres: datos.nombres.trim(),
      apellidos: datos.apellidos.trim(),
      correo: datos.correo.trim().toLowerCase(),
      telefono: datos.telefono.trim(),
      carrera: datos.carrera,
      vinculo: datos.vinculo,
      ambiente: datos.ambiente,
    };

    try {
      guardarLocal("mesa-ayuda.usuario", perfil);
      setUsuario(perfil);
      setError("");
      return true;
    } catch {
      setError("No se pudieron guardar los datos. Revisa el espacio y los permisos del navegador.");
      return false;
    }
  }

  // PERSISTENCIA DE TICKETS: primero se guarda y luego se actualiza la pantalla.
  function crearTicket(datos) {
    const id = crypto.randomUUID();
    const ticket = {
      id,
      codigo: `TCK-${new Date().getFullYear()}-${String(tickets.length + 1).padStart(5, "0")}`,
      asunto: datos.asunto.trim(),
      descripcion: datos.descripcion.trim(),
      categoria: datos.categoria,
      subcategoria: datos.subcategoria,
      ambiente: datos.ambiente.trim(),
      prioridad: "Crítica",
      estado: "Abierto",
      creadoEn: new Date().toISOString(),
      usuarioCorreo: usuario.correo,
    };

    const nuevosTickets = [ticket, ...tickets];

    try {
      guardarLocal("mesa-ayuda.tickets", nuevosTickets);
      setTickets(nuevosTickets);
      setError("");
      return ticket;
    } catch {
      setError("No se pudo guardar el ticket. Revisa el espacio y los permisos del navegador.");
      return null;
    }
  }

  // Cada perfil ve sus tickets; cambiar el perfil no elimina los anteriores.
  const misTickets = tickets.filter((ticket) => ticket.usuarioCorreo === usuario.correo);

  return (
    <DatosContext.Provider value={{ usuario, misTickets, guardarUsuario, crearTicket }}>
      {error && <p role="alert" className="border border-danger bg-white p-4 text-danger">{error}</p>}
      {children}
    </DatosContext.Provider>
  );
}
