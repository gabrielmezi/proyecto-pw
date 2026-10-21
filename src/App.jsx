import H3TicketGuardado from "./pages/H3TicketGuardado";
import AccesoDemostracion from "./pages/AccesoDemostracion";
import { BrowserRouter, Routes, Route } from "react-router";
import H1Inicio from "./pages/H1Inicio";
import H1IniciarSesion from "./pages/H1IniciarSesion";
import H1Registro from "./pages/H1Registro";
import H1Invitacion from "./pages/H1Invitacion";
import H1RecuperarContrasena from "./pages/H1RecuperarContrasena";
import H1EnlaceEnviado from "./pages/H1EnlaceEnviado";
import H1NuevaContrasena from "./pages/H1NuevaContrasena";
import H1MiCuenta from "./pages/H1MiCuenta";
import H1AccesoDenegado from "./pages/H1AccesoDenegado";
import H1PaginaNoEncontrada from "./pages/H1PaginaNoEncontrada";
import H1MensajesAcceso from "./pages/H1MensajesAcceso";
import H2Categorias from "./pages/H2Categorias";
import H2EditarCategoria from "./pages/H2EditarCategoria";
import H2Ambientes from "./pages/H2Ambientes";
import H2NuevoAmbiente from "./pages/H2NuevoAmbiente";
import H2TecnicosPorCategoria from "./pages/H2TecnicosPorCategoria";
import H2DesactivarCategoria from "./pages/H2DesactivarCategoria";
import H2CatalogoVacio from "./pages/H2CatalogoVacio";
import H3NuevoTicket from "./pages/H3NuevoTicket";
import H3ConfirmacionTicket from "./pages/H3ConfirmacionTicket";
import H3MisTickets from "./pages/H3MisTickets";
import H3DetalleTicket from "./pages/H3DetalleTicket";
import H3TicketCerrado from "./pages/H3TicketCerrado";
import H3ReabrirTicket from "./pages/H3ReabrirTicket";
import H3CancelarTicket from "./pages/H3CancelarTicket";
import H3SinTickets from "./pages/H3SinTickets";
import H4ColaAtencion from "./pages/H4ColaAtencion";
import H4AsignarTecnico from "./pages/H4AsignarTecnico";
import H4CambiarPrioridad from "./pages/H4CambiarPrioridad";
import H4AsignacionLote from "./pages/H4AsignacionLote";
import H4DevolverCola from "./pages/H4DevolverCola";
import H4ColaVacia from "./pages/H4ColaVacia";
import H4BandejaTecnico from "./pages/H4BandejaTecnico";
import H4BandejaVacia from "./pages/H4BandejaVacia";
import H5DetalleAtencion from "./pages/H5DetalleAtencion";
import H5CambiarEstado from "./pages/H5CambiarEstado";
import H5CerrarTicket from "./pages/H5CerrarTicket";
import H5HistorialCambios from "./pages/H5HistorialCambios";

// Se conservan todas las URL de las pantallas y estados de demostración.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demostracion" element={<AccesoDemostracion />} />
        <Route path="/" element={<H1Inicio />} />
        <Route path="/h1/inicio" element={<H1Inicio />} />
        <Route path="/h1/iniciar-sesion" element={<H1IniciarSesion />} />
        <Route path="/h1/registro" element={<H1Registro />} />
        <Route path="/h1/invitacion" element={<H1Invitacion />} />
        <Route path="/h1/recuperar-contrasena" element={<H1RecuperarContrasena />} />
        <Route path="/h1/enlace-enviado" element={<H1EnlaceEnviado />} />
        <Route path="/h1/nueva-contrasena" element={<H1NuevaContrasena />} />
        <Route path="/h1/mi-cuenta" element={<H1MiCuenta />} />
        <Route path="/h1/acceso-denegado" element={<H1AccesoDenegado />} />
        <Route path="/h1/no-encontrada" element={<H1PaginaNoEncontrada />} />
        <Route path="/h1/mensajes-acceso" element={<H1MensajesAcceso />} />
        <Route path="/h2/categorias" element={<H2Categorias />} />
        <Route path="/h2/editar-categoria" element={<H2EditarCategoria />} />
        <Route path="/h2/ambientes" element={<H2Ambientes />} />
        <Route path="/h2/nuevo-ambiente" element={<H2NuevoAmbiente />} />
        <Route path="/h2/tecnicos-por-categoria" element={<H2TecnicosPorCategoria />} />
        <Route path="/h2/desactivar-categoria" element={<H2DesactivarCategoria />} />
        <Route path="/h2/catalogo-vacio" element={<H2CatalogoVacio />} />
        <Route path="/h3/nuevo-ticket" element={<H3NuevoTicket />} />
        <Route path="/h3/confirmacion/:id" element={<H3TicketGuardado confirmacion />} />
        <Route path="/h3/detalle-ticket/:id" element={<H3TicketGuardado />} />
        <Route path="/h3/confirmacion" element={<H3ConfirmacionTicket />} />
        <Route path="/h3/mis-tickets" element={<H3MisTickets />} />
        <Route path="/h3/detalle-ticket" element={<H3DetalleTicket />} />
        <Route path="/h3/ticket-cerrado" element={<H3TicketCerrado />} />
        <Route path="/h3/reabrir-ticket" element={<H3ReabrirTicket />} />
        <Route path="/h3/cancelar-ticket" element={<H3CancelarTicket />} />
        <Route path="/h3/sin-tickets" element={<H3SinTickets />} />
        <Route path="/h4/cola" element={<H4ColaAtencion />} />
        <Route path="/h4/asignar-tecnico" element={<H4AsignarTecnico />} />
        <Route path="/h4/cambiar-prioridad" element={<H4CambiarPrioridad />} />
        <Route path="/h4/asignacion-lote" element={<H4AsignacionLote />} />
        <Route path="/h4/devolver-cola" element={<H4DevolverCola />} />
        <Route path="/h4/cola-vacia" element={<H4ColaVacia />} />
        <Route path="/h4/bandeja-tecnico" element={<H4BandejaTecnico />} />
        <Route path="/h4/bandeja-vacia" element={<H4BandejaVacia />} />
        <Route path="/h5/detalle-atencion" element={<H5DetalleAtencion />} />
        <Route path="/h5/cambiar-estado" element={<H5CambiarEstado />} />
        <Route path="/h5/cerrar-ticket" element={<H5CerrarTicket />} />
        <Route path="/h5/historial" element={<H5HistorialCambios />} />
        <Route path="*" element={<H1PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
