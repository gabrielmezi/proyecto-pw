import Boton from "../estilo/Boton";
export default function PublicoLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex min-h-[60px] max-w-[1800px] flex-wrap items-center gap-6 px-6 py-3 lg:px-12">
          <span className="h-7 w-7 rounded-sm bg-primary" />
          <strong>
            Mesa de Ayuda{" "}
            <span className="font-normal text-muted">· Campus Ulima</span>
          </strong>
          <nav
            className="flex flex-wrap gap-5 text-[13px]"
          >
            <button className="enabled:hover:bg-gray-200" type="button">Inicio</button>
            <button className="enabled:hover:bg-gray-200" type="button">Cómo reportar</button>
            <button className="enabled:hover:bg-gray-200" type="button">Categorías de servicio</button>
            <button className="enabled:hover:bg-gray-200" type="button">Tiempos de atención</button>
          </nav>
          <div data-acciones className="flex flex-wrap items-center gap-3 ml-auto">
            <Boton variante="secundario">Iniciar sesión</Boton>
            <Boton variante="primario">Registrarme</Boton>
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center px-6 py-10 lg:px-12">
        {children}
      </main>
      <footer className="bg-primary-dark px-6 py-8 text-white lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-8 text-[13px] md:grid-cols-[2fr_1fr_2fr_1fr]">
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Mesa de Ayuda de Servicios</h3>
            <p>
              Universidad de Lima · Dirección de Infraestructura y Servicios
            </p>
            <p>soporte.campus@ulima.edu.pe · anexo 30500</p>
            <p>Atención de lunes a sábado, 07:00 a 21:00</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-slate-300">REPORTAR</p>
            <p>Registrar un ticket</p>
            <p>Seguir un ticket</p>
            <p>Categorías de servicio</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-slate-300">AYUDA</p>
            <p>Preguntas frecuentes</p>
            <p>Tiempos de atención esperados</p>
            <p>Emergencias eléctricas · anexo 30111</p>
          </div>
          <p className="self-end text-xs text-slate-300">
            © 2026 Universidad de Lima
            <br />
            Términos · Privacidad
          </p>
        </div>
      </footer>
    </div>
  );
}
