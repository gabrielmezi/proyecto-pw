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
import H6EncuestaSatisfaccion from "./pages/H6EncuestaSatisfaccion";
import H6MisEncuestas from "./pages/H6MisEncuestas";
import H6SinEncuestas from "./pages/H6SinEncuestas";
import H6SatisfaccionTecnicos from "./pages/H6SatisfaccionTecnicos";
import H7TableroMetricas from "./pages/H7TableroMetricas";
import H7CargaTecnicos from "./pages/H7CargaTecnicos";
import H7Usuarios from "./pages/H7Usuarios";
import H7FichaUsuario from "./pages/H7FichaUsuario";
import H7BloquearCuenta from "./pages/H7BloquearCuenta";
import H7Notificaciones from "./pages/H7Notificaciones";

// Única selección de presentación: cambiar la URL y recargar. Sin router ni estado.
export default function App() {
  switch (window.location.pathname.replace(/\/$/, "") || "/") {
    case "/":
      return <H1Inicio />;
    case "/h1/inicio":
      return <H1Inicio />;
    case "/h1/iniciar-sesion":
      return <H1IniciarSesion />;
    case "/h1/registro":
      return <H1Registro />;
    case "/h1/invitacion":
      return <H1Invitacion />;
    case "/h1/recuperar-contrasena":
      return <H1RecuperarContrasena />;
    case "/h1/enlace-enviado":
      return <H1EnlaceEnviado />;
    case "/h1/nueva-contrasena":
      return <H1NuevaContrasena />;
    case "/h1/mi-cuenta":
      return <H1MiCuenta />;
    case "/h1/acceso-denegado":
      return <H1AccesoDenegado />;
    case "/h1/no-encontrada":
      return <H1PaginaNoEncontrada />;
    case "/h1/mensajes-acceso":
      return <H1MensajesAcceso />;
    case "/h2/categorias":
      return <H2Categorias />;
    case "/h2/editar-categoria":
      return <H2EditarCategoria />;
    case "/h2/ambientes":
      return <H2Ambientes />;
    case "/h2/nuevo-ambiente":
      return <H2NuevoAmbiente />;
    case "/h2/tecnicos-por-categoria":
      return <H2TecnicosPorCategoria />;
    case "/h2/desactivar-categoria":
      return <H2DesactivarCategoria />;
    case "/h2/catalogo-vacio":
      return <H2CatalogoVacio />;
    case "/h3/nuevo-ticket":
      return <H3NuevoTicket />;
    case "/h3/confirmacion":
      return <H3ConfirmacionTicket />;
    case "/h3/mis-tickets":
      return <H3MisTickets />;
    case "/h3/detalle-ticket":
      return <H3DetalleTicket />;
    case "/h3/ticket-cerrado":
      return <H3TicketCerrado />;
    case "/h3/reabrir-ticket":
      return <H3ReabrirTicket />;
    case "/h3/cancelar-ticket":
      return <H3CancelarTicket />;
    case "/h3/sin-tickets":
      return <H3SinTickets />;
    case "/h4/cola":
      return <H4ColaAtencion />;
    case "/h4/asignar-tecnico":
      return <H4AsignarTecnico />;
    case "/h4/cambiar-prioridad":
      return <H4CambiarPrioridad />;
    case "/h4/asignacion-lote":
      return <H4AsignacionLote />;
    case "/h4/devolver-cola":
      return <H4DevolverCola />;
    case "/h4/cola-vacia":
      return <H4ColaVacia />;
    case "/h4/bandeja-tecnico":
      return <H4BandejaTecnico />;
    case "/h4/bandeja-vacia":
      return <H4BandejaVacia />;
    case "/h5/detalle-atencion":
      return <H5DetalleAtencion />;
    case "/h5/cambiar-estado":
      return <H5CambiarEstado />;
    case "/h5/cerrar-ticket":
      return <H5CerrarTicket />;
    case "/h5/historial":
      return <H5HistorialCambios />;
    case "/h6/encuesta":
      return <H6EncuestaSatisfaccion />;
    case "/h6/mis-encuestas":
      return <H6MisEncuestas />;
    case "/h6/sin-encuestas":
      return <H6SinEncuestas />;
    case "/h6/satisfaccion":
      return <H6SatisfaccionTecnicos />;
    case "/h7/tablero":
      return <H7TableroMetricas />;
    case "/h7/carga-tecnicos":
      return <H7CargaTecnicos />;
    case "/h7/usuarios":
      return <H7Usuarios />;
    case "/h7/ficha-usuario":
      return <H7FichaUsuario />;
    case "/h7/bloquear-cuenta":
      return <H7BloquearCuenta />;
    case "/h7/notificaciones":
      return <H7Notificaciones />;
    default:
      return <H1PaginaNoEncontrada />;
  }
}
