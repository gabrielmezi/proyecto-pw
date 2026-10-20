import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import PublicoLayout from "../components/PublicoLayout";

export default function H1Invitacion() {
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto w-full max-w-[950px]">
        <Aviso tono="info">INVITACIÓN VÁLIDA HASTA EL 12/09/2026</Aviso>
        <TituloPagina
          titulo="Activa tu cuenta de técnico"
          descripcion="Lucía Mendoza Ríos te invitó a la Mesa de Ayuda. Revisa tus datos, define tu contraseña y elige tu especialidad."
        ></TituloPagina>
        <Tarjeta titulo="Datos de la invitación">
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
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex items-center gap-2 text-[13px]">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
              Audiovisuales
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
              Redes y conectividad
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              Climatización
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              Eléctrico
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              Mobiliario
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              Limpieza
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              Accesos y cerraduras
            </label>
          </div>
          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton variante="primario">Activar mi cuenta</Boton>
            <Boton variante="secundario">Rechazar invitación</Boton>
          </div>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
