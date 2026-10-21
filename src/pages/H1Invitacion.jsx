import { useNavigate } from "react-router";
import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Etiqueta from "../estilo/Etiqueta";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1Invitacion() {
  const navigate = useNavigate();
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto w-full max-w-[950px]">
        <Tarjeta>
          <Etiqueta tono="accent">INVITACIÓN VÁLIDA HASTA EL 12/09/2026</Etiqueta>
          <div>
            <h1 className="text-xl font-semibold">Activa tu cuenta de técnico</h1>
            <p className="text-[13px] text-muted">
              Lucía Mendoza Ríos te invitó a la Mesa de Ayuda. Revisa tus datos,
              define tu contraseña y elige tu especialidad.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo
              titulo="NOMBRES Y APELLIDOS"
              valor="Julio César Paredes Soto"
              ayuda="Dato de la invitación, no editable."
              soloLectura
            />
            <Campo
              titulo="CORREO INSTITUCIONAL"
              valor="jparedes@ulima.edu.pe"
              soloLectura
              ayuda=""
            />
            <Campo titulo="ROL ASIGNADO" valor="Técnico" soloLectura />
            <Campo titulo="TELÉFONO DE CONTACTO" valor="951 220 874" ayuda="" />
            <Campo titulo="CONTRASEÑA" tipo="password" valor="Contrasena1" />
            <Campo
              titulo="CONFIRMAR CONTRASEÑA"
              tipo="password"
              valor="Contrasena1"
            />
          </div>
          <p className="text-xs text-muted">
            ESPECIALIDAD · ELIGE HASTA TRES CATEGORÍAS
          </p>
          {/* Chips: el checkbox queda oculto y has-checked pinta el chip marcado */}
          <div className="flex flex-wrap gap-2">
            <label className="cursor-pointer rounded-sm border border-border px-3 py-1 text-[13px] text-muted has-checked:border-primary has-checked:bg-primary-soft has-checked:font-medium has-checked:text-primary">
              <input type="checkbox" className="sr-only" defaultChecked />
              Audiovisuales ✓
            </label>
            <label className="cursor-pointer rounded-sm border border-border px-3 py-1 text-[13px] text-muted has-checked:border-primary has-checked:bg-primary-soft has-checked:font-medium has-checked:text-primary">
              <input type="checkbox" className="sr-only" defaultChecked />
              Redes y conectividad ✓
            </label>
            <label className="cursor-pointer rounded-sm border border-border px-3 py-1 text-[13px] text-muted has-checked:border-primary has-checked:bg-primary-soft has-checked:font-medium has-checked:text-primary">
              <input type="checkbox" className="sr-only" />
              Climatización
            </label>
            <label className="cursor-pointer rounded-sm border border-border px-3 py-1 text-[13px] text-muted has-checked:border-primary has-checked:bg-primary-soft has-checked:font-medium has-checked:text-primary">
              <input type="checkbox" className="sr-only" />
              Eléctrico
            </label>
            <label className="cursor-pointer rounded-sm border border-border px-3 py-1 text-[13px] text-muted has-checked:border-primary has-checked:bg-primary-soft has-checked:font-medium has-checked:text-primary">
              <input type="checkbox" className="sr-only" />
              Mobiliario
            </label>
            <label className="cursor-pointer rounded-sm border border-border px-3 py-1 text-[13px] text-muted has-checked:border-primary has-checked:bg-primary-soft has-checked:font-medium has-checked:text-primary">
              <input type="checkbox" className="sr-only" />
              Limpieza
            </label>
            <label className="cursor-pointer rounded-sm border border-border px-3 py-1 text-[13px] text-muted has-checked:border-primary has-checked:bg-primary-soft has-checked:font-medium has-checked:text-primary">
              <input type="checkbox" className="sr-only" />
              Accesos y cerraduras
            </label>
          </div>
          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton onClick={() => navigate("/h1/iniciar-sesion")} variante="primario">Activar mi cuenta</Boton>
            <Boton onClick={() => navigate("/")} variante="terciario">Rechazar invitación</Boton>
          </div>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
