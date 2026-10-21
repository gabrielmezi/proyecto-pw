# Mesa de Ayuda · Campus Ulima

Primera entrega: maquetas estáticas en React y Tailwind CSS 4, basadas en los documentos de indicaciones.

## Ejecutar

```sh
npm install
npm run dev
```

Abre la dirección que imprime Vite (http://localhost:6767) y escribe uno de los caminos siguientes en el navegador. Ejemplo: http://localhost:6767/h3/nuevo-ticket. Cambiar la dirección carga otra pantalla; los controles de las maquetas no navegan ni ejecutan operaciones.

El servidor de desarrollo usa el puerto 6767. Vite muestra un error en lugar de cambiar de puerto, para mantener validos los enlaces de `links.md`.

## Pantallas

| Archivo                    | Camino                     |
| -------------------------- | -------------------------- |
| H1Inicio.jsx               | /h1/inicio                 |
| H1IniciarSesion.jsx        | /h1/iniciar-sesion         |
| H1Registro.jsx             | /h1/registro               |
| H1Invitacion.jsx           | /h1/invitacion             |
| H1RecuperarContrasena.jsx  | /h1/recuperar-contrasena   |
| H1EnlaceEnviado.jsx        | /h1/enlace-enviado         |
| H1NuevaContrasena.jsx      | /h1/nueva-contrasena       |
| H1MiCuenta.jsx             | /h1/mi-cuenta              |
| H1AccesoDenegado.jsx       | /h1/acceso-denegado        |
| H1PaginaNoEncontrada.jsx   | /h1/no-encontrada          |
| H1MensajesAcceso.jsx       | /h1/mensajes-acceso        |
| H2Categorias.jsx           | /h2/categorias             |
| H2EditarCategoria.jsx      | /h2/editar-categoria       |
| H2Ambientes.jsx            | /h2/ambientes              |
| H2NuevoAmbiente.jsx        | /h2/nuevo-ambiente         |
| H2TecnicosPorCategoria.jsx | /h2/tecnicos-por-categoria |
| H2DesactivarCategoria.jsx  | /h2/desactivar-categoria   |
| H2CatalogoVacio.jsx        | /h2/catalogo-vacio         |
| H3NuevoTicket.jsx          | /h3/nuevo-ticket           |
| H3ConfirmacionTicket.jsx   | /h3/confirmacion           |
| H3MisTickets.jsx           | /h3/mis-tickets            |
| H3DetalleTicket.jsx        | /h3/detalle-ticket         |
| H3TicketCerrado.jsx        | /h3/ticket-cerrado         |
| H3ReabrirTicket.jsx        | /h3/reabrir-ticket         |
| H3CancelarTicket.jsx       | /h3/cancelar-ticket        |
| H3SinTickets.jsx           | /h3/sin-tickets            |
| H4ColaAtencion.jsx         | /h4/cola                   |
| H4AsignarTecnico.jsx       | /h4/asignar-tecnico        |
| H4CambiarPrioridad.jsx     | /h4/cambiar-prioridad      |
| H4AsignacionLote.jsx       | /h4/asignacion-lote        |
| H4DevolverCola.jsx         | /h4/devolver-cola          |
| H4ColaVacia.jsx            | /h4/cola-vacia             |
| H4BandejaTecnico.jsx       | /h4/bandeja-tecnico        |
| H4BandejaVacia.jsx         | /h4/bandeja-vacia          |
| H5DetalleAtencion.jsx      | /h5/detalle-atencion       |
| H5CambiarEstado.jsx        | /h5/cambiar-estado         |
| H5CerrarTicket.jsx         | /h5/cerrar-ticket          |
| H5HistorialCambios.jsx     | /h5/historial              |

La dirección / muestra el inicio. Una dirección desconocida muestra la maqueta 404. Los modales tienen su propia dirección y aparecen abiertos para revisarlos. Se incluyen H1 a H5.

## Organización

- src/pages: pantallas separadas, prefijadas por historia.
- src/estilo: fuente, colores, estilos Tailwind y controles visuales reutilizables.
- src/components: estructuras por rol, tabla de tickets y bitácora compartida.
- src/App.jsx: selección mínima por URL, sin React Router.
- src/main.jsx: punto de entrada de React.

Cada archivo JSX contiene una única función export default con el mismo nombre del archivo. No hay hooks, eventos, APIs, almacenamiento, datos en arreglos o diccionarios ni opciones generadas: todo está escrito directamente en JSX. Los campos permiten edición nativa del navegador para representar formularios, sin validación ni procesamiento. Los errores, contadores, gráficos, estados y fechas son ejemplos fijos del PDF. Los botones no tienen acciones.

La tipografía IBM Plex se sirve localmente. La fotografía de inicio se conserva como marcador visual, tal como aparece en el mockup. Para ver otros estados se escribe su dirección; no dependen de ninguna interacción.

## Verificación

La aplicación incluye 39 direcciones (incluido el inicio) y una vista 404. Sin errores de consola ni desbordamiento horizontal de la página; las tablas anchas tienen desplazamiento propio.
