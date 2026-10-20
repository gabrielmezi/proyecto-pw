export default function FiltroSeleccionado({ children, onQuitar, etiquetaQuitar }) {
  return (
    <span className="inline-flex h-10 shrink-0 items-center gap-1 whitespace-nowrap rounded-sm border border-primary bg-primary-soft px-3 text-[13px] font-medium text-primary">
      <span>{children}</span>
      <button
        type="button"
        className="inline-flex h-5 w-3 shrink-0 items-center justify-center rounded-sm text-[13px] leading-none text-inherit"
        aria-label={etiquetaQuitar}
        onClick={onQuitar}
      >
        <span aria-hidden="true">×</span>
      </button>
    </span>
  );
}
