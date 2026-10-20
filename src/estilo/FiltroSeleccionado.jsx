export default function FiltroSeleccionado({ children }) {
  return (
    <span className="inline-flex h-10 shrink-0 items-center gap-1 whitespace-nowrap rounded-sm border border-primary bg-primary-soft px-3 text-[13px] font-medium text-primary">
      <span>{children}</span>
      <button
        type="button"
        className="enabled:hover:bg-gray-200 inline-flex h-5 w-3 shrink-0 items-center justify-center rounded-sm text-[13px] leading-none text-inherit"
      >
        <span>×</span>
      </button>
    </span>
  );
}
