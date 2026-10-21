import { useNavigate } from "react-router";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3TicketCerrado() {
  const navigate = useNavigate();
  return (
    <UsuarioLayout pagina="mis-tickets">
      <section className="min-h-[502px] w-full max-w-[380px] border border-border bg-white p-5">
          <h1 className="mb-3 text-sm font-medium text-muted">
            CERRADO CON ENCUESTA PENDIENTE
          </h1>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h2 className="font-mono text-lg font-medium text-primary">TCK-2026-00131</h2>
            <span className="rounded-sm border border-success bg-[#E8F2EB] px-2 py-0.5 text-base text-success">Cerrado</span>
          </div>
          <div className="mb-2.5 rounded-sm border border-success bg-[#E8F2EB] px-4 py-3 text-lg leading-[25px] text-success">
            Resuelto el 03/09/2026 por Rocío Espinoza Farfán. Solución: limpieza
            profunda del ambiente y retiro de residuos del evento.
          </div>
          <div className="mb-3 rounded-sm border border-warning bg-[#FBF3E2] px-4 py-3 text-lg leading-[25px] text-warning">
            Tienes una encuesta pendiente para este ticket. Puedes responderla hasta el 10/09/2026.
          </div>
          <div className="grid grid-cols-[1.38fr_1fr] gap-2.5">
            <button type="button" className="enabled:hover:bg-primary-dark rounded-sm border border-primary bg-primary px-3.5 py-2 text-left text-lg font-medium leading-[25px] text-white transition">
              Responder<br />encuesta
            </button>
            <button type="button" onClick={() => navigate("/h3/reabrir-ticket")} className="enabled:hover:bg-red-50 rounded-sm border border-danger bg-white px-4 py-2 text-left text-lg font-medium leading-[25px] text-danger transition">
              Reabrir<br />ticket
            </button>
          </div>
      </section>
    </UsuarioLayout>
  );
}
