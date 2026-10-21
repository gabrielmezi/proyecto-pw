import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";

const grupos = [
  {
    "titulo": "H1 Cuenta y acceso",
    "enlaces": [
      {
        "titulo": "H1.1 Inicio público",
        "ruta": "/h1/inicio"
      },
      {
        "titulo": "H1.2 Iniciar sesión",
        "ruta": "/h1/iniciar-sesion"
      },
      {
        "titulo": "H1.3 Registro de usuario",
        "ruta": "/h1/registro"
      },
      {
        "titulo": "H1.4 Activar cuenta por invitación",
        "ruta": "/h1/invitacion"
      },
      {
        "titulo": "H1.5 Recuperar contraseña",
        "ruta": "/h1/recuperar-contrasena"
      },
      {
        "titulo": "H1.6 Enlace enviado al correo",
        "ruta": "/h1/enlace-enviado"
      },
      {
        "titulo": "H1.7 Definir nueva contraseña",
        "ruta": "/h1/nueva-contrasena"
      },
      {
        "titulo": "H1.8 Mi cuenta",
        "ruta": "/h1/mi-cuenta"
      },
      {
        "titulo": "H1.9 Acceso denegado · 403",
        "ruta": "/h1/acceso-denegado"
      },
      {
        "titulo": "H1.10 Página no encontrada · 404",
        "ruta": "/h1/no-encontrada"
      },
      {
        "titulo": "H1.11 Errores y mensajes de acceso",
        "ruta": "/h1/mensajes-acceso"
      }
    ]
  },
  {
    "titulo": "H2 Catálogo de servicios",
    "enlaces": [
      {
        "titulo": "H2.1 Categorías y subcategorías",
        "ruta": "/h2/categorias"
      },
      {
        "titulo": "H2.2 Formulario de categoría",
        "ruta": "/h2/editar-categoria"
      },
      {
        "titulo": "H2.3 Sedes y ambientes",
        "ruta": "/h2/ambientes"
      },
      {
        "titulo": "H2.4 Nuevo ambiente",
        "ruta": "/h2/nuevo-ambiente"
      },
      {
        "titulo": "H2.5 Técnicos por categoría",
        "ruta": "/h2/tecnicos-por-categoria"
      },
      {
        "titulo": "H2.6 Desactivar categoría",
        "ruta": "/h2/desactivar-categoria"
      },
      {
        "titulo": "H2.7 Catálogo sin categorías",
        "ruta": "/h2/catalogo-vacio"
      }
    ]
  },
  {
    "titulo": "H3 Registro y seguimiento de tickets",
    "enlaces": [
      {
        "titulo": "H3.1 Registrar un ticket",
        "ruta": "/h3/nuevo-ticket"
      },
      {
        "titulo": "H3.2 Confirmación con código",
        "ruta": "/h3/confirmacion"
      },
      {
        "titulo": "H3.3 Mis tickets",
        "ruta": "/h3/mis-tickets"
      },
      {
        "titulo": "H3.4 Detalle y bitácora pública",
        "ruta": "/h3/detalle-ticket"
      },
      {
        "titulo": "H3.4.1 Ticket cerrado",
        "ruta": "/h3/ticket-cerrado"
      },
      {
        "titulo": "H3.4.2 Reabrir ticket",
        "ruta": "/h3/reabrir-ticket"
      },
      {
        "titulo": "H3.4.3 Cancelar ticket",
        "ruta": "/h3/cancelar-ticket"
      },
      {
        "titulo": "H3.4.4 Sin tickets registrados",
        "ruta": "/h3/sin-tickets"
      }
    ]
  },
  {
    "titulo": "H4 Cola y asignación",
    "enlaces": [
      {
        "titulo": "H4.1 Cola de atención",
        "ruta": "/h4/cola"
      },
      {
        "titulo": "H4.2 Asignar técnico",
        "ruta": "/h4/asignar-tecnico"
      },
      {
        "titulo": "H4.3 Cambiar prioridad",
        "ruta": "/h4/cambiar-prioridad"
      },
      {
        "titulo": "H4.4 Asignar tickets en lote",
        "ruta": "/h4/asignacion-lote"
      },
      {
        "titulo": "H4.5 Devolver tickets a la cola",
        "ruta": "/h4/devolver-cola"
      },
      {
        "titulo": "H4.6 Cola sin resultados",
        "ruta": "/h4/cola-vacia"
      },
      {
        "titulo": "H4.7 Bandeja del técnico",
        "ruta": "/h4/bandeja-tecnico"
      },
      {
        "titulo": "H4.8 Bandeja sin asignaciones",
        "ruta": "/h4/bandeja-vacia"
      }
    ]
  },
  {
    "titulo": "H5 Atención y cierre",
    "enlaces": [
      {
        "titulo": "H5.1 Detalle de atención y bitácora",
        "ruta": "/h5/detalle-atencion"
      },
      {
        "titulo": "H5.2 Cambiar estado del ticket",
        "ruta": "/h5/cambiar-estado"
      },
      {
        "titulo": "H5.3 Cerrar ticket",
        "ruta": "/h5/cerrar-ticket"
      },
      {
        "titulo": "H5.4 Historial de cambios",
        "ruta": "/h5/historial"
      }
    ]
  }
];

export default function AccesoDemostracion() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-10">
      <h1 className="text-2xl font-semibold">Acceso demostración</h1>
      <Boton variante="secundario" onClick={() => navigate("/")}>
        Volver al inicio
      </Boton>
      {grupos.map((grupo) => (
        <section key={grupo.titulo} className="space-y-3">
          <h2 className="text-lg font-semibold">{grupo.titulo}</h2>
          <div className="flex flex-wrap gap-3">
            {grupo.enlaces.map((enlace) => (
              <Boton
                key={enlace.ruta}
                variante="secundario"
                onClick={() => navigate(enlace.ruta)}
              >
                {enlace.titulo}
              </Boton>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
