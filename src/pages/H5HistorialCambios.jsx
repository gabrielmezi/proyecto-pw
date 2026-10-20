import Aviso from "../estilo/Aviso";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import TecnicoLayout from "../components/TecnicoLayout";

export default function H5HistorialCambios() {
  return (
    <TecnicoLayout pagina="historial">
      <TituloPagina
        titulo="Historial de cambios"
        descripcion="Extensión eléctrica en mal estado · E-304 · cerrado el 01/09/2026 · tiempo total 1 d 6 h 12 min"
      ></TituloPagina>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
        <div className="space-y-6">
          <div className="border-l-2 border-border pl-6 [&_article]:relative [&_article]:mb-6 [&_article]:rounded-sm [&_article]:border [&_article]:border-border [&_article]:bg-white [&_article]:p-4 [&_article]:before:absolute [&_article]:before:-left-[33px] [&_article]:before:top-5 [&_article]:before:h-3 [&_article]:before:w-3 [&_article]:before:rounded-full [&_article]:before:border-2 [&_article]:before:border-primary [&_article]:before:bg-white [&_article]:before:content-['']">
            <article>
              <h3 className="text-base font-semibold">Abierto</h3>
              <p>
                31/08/2026 09:04 · Sofía Delgado Manrique (usuario) · prioridad
                inicial alta
              </p>
              <p className="mt-2 text-xs text-muted">
                Permaneció 46 min en este estado
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold">Asignado a Iván Zegarra Pinto</h3>
              <p>31/08/2026 09:50 · Lucía Mendoza Ríos (supervisor)</p>
              <p className="mt-2 text-xs text-muted">
                Permaneció 22 min en este estado
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold">En atención</h3>
              <p>31/08/2026 10:12 · Iván Zegarra Pinto (técnico)</p>
              <p className="mt-2 text-xs text-muted">
                Permaneció 5 h 48 min en este estado
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold">En espera · repuesto de canaleta</h3>
              <p>
                31/08/2026 16:00 · Iván Zegarra Pinto · retorno estimado
                01/09/2026
              </p>
              <p className="mt-2 text-xs text-muted">
                Permaneció 18 h 30 min en este estado
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold">Resuelto</h3>
              <p>01/09/2026 10:30 · Iván Zegarra Pinto</p>
              <p className="mt-2 text-xs text-muted">
                Permaneció 4 h 46 min en este estado
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold">Cerrado</h3>
              <p>
                01/09/2026 15:16 · Iván Zegarra Pinto · encuesta enviada al
                usuario
              </p>
              <p className="mt-2 text-xs text-muted"></p>
            </article>
          </div>
        </div>
        <aside className="space-y-6">
          <Tarjeta titulo="Tiempo por etapa">
            <p>
              Abierto <strong>46 min</strong>
            </p>
            <p>
              En atención <strong>5 h 48 min</strong>
            </p>
            <p>
              En espera <strong>18 h 30 min</strong>
            </p>
            <p>
              Resuelto → cerrado <strong>4 h 46 min</strong>
            </p>
          </Tarjeta>
          <Aviso tono="info">
            El 61 % del tiempo se consumió esperando el repuesto. El tiempo en
            espera no cuenta para el tiempo esperado de atención.
          </Aviso>
        </aside>
      </div>
    </TecnicoLayout>
  );
}
