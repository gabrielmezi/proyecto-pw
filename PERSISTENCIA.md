# Estado y persistencia

## Qué se guarda en localStorage

Se usan dos claves, con JSON como en el material de persistencia de las semanas 7–8:

| Clave | Contenido | Cuándo se guarda |
| --- | --- | --- |
| `mesa-ayuda.usuario` | Un perfil: nombres, apellidos, correo, teléfono, carrera, vínculo y ambiente habitual. | Al pulsar **Crear cuenta** o **Guardar cambios** en Mi cuenta. |
| `mesa-ayuda.tickets` | Un arreglo con los tickets registrados desde el formulario. | Al pulsar **Registrar ticket**. |

`src/datos/persistencia.js` contiene `leerLocal` y `guardarLocal`.

Al guardar, `JSON.stringify` convierte el objeto o arreglo a texto. Al leer, `JSON.parse` lo convierte nuevamente a datos de JavaScript.

Si los datos no existen o su JSON/estructura no es válido, se usa un perfil inicial de demostración y una lista vacía. Leer no sobrescribe lo que había guardado. Si el navegador rechaza una escritura, se muestra un error y no se continúa a la confirmación.

Los datos permanecen al recargar o cerrar el navegador. Dependen del mismo navegador y origen: cambiar de puerto, dominio o protocolo usa otro almacenamiento.

## Dónde vive el estado y por qué

**Context + useState compartido:** `DatosProvider.jsx` mantiene `usuario` y `tickets`. Registro, Mi cuenta, el encabezado, Mis tickets y el detalle necesitan estos mismos datos. El Context evita tener que pasarlos por varias capas de componentes.

**useState local:** cada formulario mantiene su borrador (`datos`) y sus mensajes. Lo escrito solo se guarda cuando se pulsa el botón correspondiente. Cancelar o salir del formulario descarta el borrador; **Descartar** en Mi cuenta restaura el último perfil guardado.

`localStorage` conserva los datos entre visitas, pero no actualiza por sí solo React. Por eso las funciones del Context primero guardan y después llaman a `setUsuario` o `setTickets`, haciendo que las pantallas se actualicen.

La lectura inicial está en `useState(() => leerLocal(...))`: se ejecuta al montar el proveedor. El guardado se hace explícitamente en las funciones de los botones, sin un efecto que escriba cada vez que se teclea.

Los bloques relevantes del código están separados con líneas en blanco y comentarios como `ESTADO LOCAL`, `ESTADO COMPARTIDO`, `PERSISTENCIA` y `GUARDAR Y NAVEGAR`.

## Forma de los datos: JSON de ejemplo

Valor de `mesa-ayuda.usuario`:

```json
{
  "nombres": "Ana",
  "apellidos": "Pérez",
  "correo": "ana@aloe.ulima.edu.pe",
  "telefono": "987654321",
  "carrera": "Ingeniería de Sistemas",
  "vinculo": "Alumna",
  "ambiente": "A-201"
}
```

Valor de `mesa-ayuda.tickets`:

```json
[
  {
    "id": "e8e42302-7497-4492-a532-ff603f3f6731",
    "codigo": "TCK-2026-00001",
    "asunto": "El proyector no enciende",
    "descripcion": "Probé otro cable y continúa apagado.",
    "categoria": "Audiovisuales",
    "subcategoria": "Proyector no enciende",
    "ambiente": "A-201",
    "prioridad": "Crítica",
    "estado": "Abierto",
    "creadoEn": "2026-10-20T18:00:00.000Z",
    "usuarioCorreo": "ana@aloe.ulima.edu.pe"
  }
]
```

`id` se genera con `crypto.randomUUID()`. `codigo` usa el año y un número consecutivo para que sea más fácil de leer. `creadoEn` es texto en formato ISO. `usuarioCorreo` relaciona cada ticket con el perfil que lo creó; Mis tickets muestra los que coinciden con el correo actual.

## Rutas y navegación

| Ruta | Uso |
| --- | --- |
| `/h1/registro` | Guardar el perfil local. |
| `/h1/iniciar-sesion` | Acceso de demostración usando el correo del perfil. |
| `/h1/mi-cuenta` | Consultar y editar el perfil guardado. |
| `/h3/nuevo-ticket` | Completar un borrador y registrar el ticket. |
| `/h3/mis-tickets` | Listar los tickets del perfil actual. |
| `/h3/confirmacion/:id` | Confirmar el ticket recién guardado. |
| `/h3/detalle-ticket/:id` | Consultar un ticket por su identificador. |

Los botones usan `onClick`. Después de guardar, `useNavigate` lleva a `/h3/confirmacion/` seguido del ID. El botón del código en la lista lleva al detalle del mismo ID.

`H3TicketGuardado.jsx` usa `useParams()` para leer `id` y buscar el ticket en el Context. El mismo componente muestra la confirmación y el detalle. Una URL con un ID inexistente muestra “Ticket no encontrado”. Recargar esa URL funciona porque el Context recupera la lista desde localStorage.

Las rutas anteriores sin `:id` siguen disponibles para las pantallas estáticas de demostración de `links.md`.

## Alcance de esta implementación

Hay un perfil local actual. Registrar otro perfil reemplaza ese perfil, pero conserva la lista de tickets; cada perfil ve los tickets asociados a su correo. No hay una lista de cuentas ni autenticación real. El botón Cerrar sesión sigue siendo una navegación a la pantalla de acceso y no borra el perfil ni los tickets.

Registro mantiene los campos de contraseña y confirmación en useState local: valida al menos 8 caracteres, una mayúscula, un número y que ambos valores coincidan. No los envía al Context ni los persiste; Inicio de sesión pide el correo del perfil y una contraseña no vacía, pero acepta cualquier contraseña: solo vive en useState local y no se compara ni se guarda. No se guardan contraseñas, tokens, imágenes, borradores, mensajes de validación ni datos de otras historias. Las pantallas de cambio de contraseña y las acciones de cancelar, reabrir o atender tickets siguen siendo maquetas; no modifican los tickets persistidos.

Los tickets nuevos comienzan en **Abierto** con la prioridad **Crítica** del formulario existente. No se añadió un motor de prioridades ni validación del catálogo. La lista muestra todos los tickets guardados del perfil; se retiraron sus filtros, números y paginación estáticos para que coincida con los datos reales.

Se trabaja en una pestaña a la vez: otra pestaña recupera los cambios al recargar. No hay servidor, API ni sincronización entre dispositivos.

## Cómo comprobarlo

1. Abre Registro, escribe un nombre, correo y dos contraseñas válidas e iguales y pulsa **Crear cuenta**.
2. Ingresa y abre Mi cuenta. Cambia el teléfono y pulsa **Guardar cambios**.
3. Recarga: los datos guardados deben mantenerse. Si editas y pulsas **Descartar**, deben volver a los valores guardados.
4. Registra un ticket con asunto, descripción y ambiente. Debe abrirse una URL de confirmación con su ID.
5. Abre Mis tickets y pulsa el código. Recarga la URL del detalle: debe mostrar el mismo ticket.
6. En las herramientas del navegador, abre **Application → Local Storage** para ver las dos claves y sus textos JSON.

Para reiniciar solo estos datos desde la consola del navegador:

```js
localStorage.removeItem("mesa-ayuda.usuario");
localStorage.removeItem("mesa-ayuda.tickets");
location.reload();
```

Material de referencia: `7.Persistencia.pdf`, diapositivas 23–25, y la sección JSON/localStorage de `message.txt`. Se aplican como referencia técnica; las partes sobre APIs, cookies y persistencia remota no forman parte de este cambio.
