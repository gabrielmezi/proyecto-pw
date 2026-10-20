export default function BotonNavegacion({ children, activo = false }) {
  return (
    <button
      type="button"
      aria-current={activo ? "page" : undefined}
      className="flex min-h-10 w-full cursor-pointer items-center justify-between rounded-sm px-3 py-2 text-left text-[13px] text-muted transition-colors duration-150 aria-[current=page]:border-l-2 aria-[current=page]:border-primary aria-[current=page]:bg-primary-soft aria-[current=page]:text-primary hover:bg-blue-50 hover:text-primary aria-[current=page]:hover:bg-blue-50 focus-visible:bg-blue-50 focus-visible:text-primary aria-[current=page]:focus-visible:bg-blue-50 motion-reduce:transition-none"
    >
      {children}
    </button>
  );
}
