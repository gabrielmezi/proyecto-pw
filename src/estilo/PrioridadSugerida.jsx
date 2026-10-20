export default function PrioridadSugerida({ prioridad = "Crítica" }) {
  return (
    <div className="flex min-w-0 flex-col gap-2 text-[12px] tracking-wide text-muted">
      <span>PRIORIDAD SUGERIDA</span>
      <div className="flex min-h-10 flex-wrap items-center gap-2 rounded-sm border border-border bg-background px-3 py-2 text-[15px] tracking-normal">
        <span className="rounded-sm border border-danger bg-red-50 px-2 py-0.5 text-[13px] font-medium text-danger">
          {prioridad}
        </span>
        <span className="text-muted">Sugerida por la subcategoría</span>
      </div>
    </div>
  );
}
