import Boton from "../estilo/Boton";
import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1Inicio() {
  return (
    <PublicoLayout pagina="">
      <section className="rounded-sm border border-border bg-white grid gap-10 p-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="max-w-xl space-y-6">
          <p className="text-xs text-accent">
            INFRAESTRUCTURA Y SERVICIOS DEL CAMPUS
          </p>
          <h1 className="font-semibold text-4xl leading-tight">
            Reporta una falla del campus y sigue su atención en un solo lugar
          </h1>
          <p className="text-muted">
            Proyectores, aire acondicionado, red, mobiliario, electricidad,
            limpieza y accesos. Registra el ticket con el ambiente y la
            categoría; el supervisor lo prioriza y lo asigna a un técnico el
            mismo día.
          </p>
          <div data-acciones className="flex flex-wrap items-center gap-3">
            <Boton variante="primario">Registrar un ticket</Boton>
            <Boton variante="secundario">Ver cómo reportar</Boton>
          </div>
        </div>
        <div className="bg-[repeating-linear-gradient(45deg,#f4f6f8,#f4f6f8_8px,#eaf0f4_8px,#eaf0f4_16px)] flex min-h-72 items-center justify-center border border-border p-8 text-center font-mono text-[13px] text-muted">
          [ foto: técnico atendiendo un aula ]
        </div>
      </section>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <Tarjeta titulo="Qué se reporta">
          <p>
            Audiovisuales, climatización, redes, mobiliario, eléctrico, limpieza
            y cerraduras.
          </p>
        </Tarjeta>
        <Tarjeta titulo="Cómo se prioriza">
          <p>
            Crítica, alta, media y baja según el impacto en clases y en la
            seguridad.
          </p>
        </Tarjeta>
        <Tarjeta titulo="Tiempo de atención">
          <p>Crítica 2 h · alta 8 h · media 24 h · baja 72 h hábiles.</p>
        </Tarjeta>
        <Aviso tono="info">
          <h3 className="text-base font-semibold">Emergencias</h3>
          <p>
            Fugas de agua o riesgo eléctrico: llama al anexo 30111 y registra el
            ticket después.
          </p>
        </Aviso>
      </div>
    </PublicoLayout>
  );
}
