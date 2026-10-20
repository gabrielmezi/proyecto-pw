export default function Boton({ children, variante = "primario" }) {
  return (
    <button
      type="button"
      className={
        variante === "heredado"
          ? "inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-current bg-transparent px-4 py-2 text-[13px] font-medium text-inherit"
          : "inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-primary bg-primary px-4 py-2 text-[13px] font-medium text-white data-[variante=secundario]:bg-white data-[variante=secundario]:text-primary data-[variante=terciario]:border-transparent data-[variante=terciario]:bg-transparent data-[variante=terciario]:px-1 data-[variante=terciario]:text-primary data-[variante=peligro]:border-danger data-[variante=peligro]:bg-danger data-[variante=peligro]:text-white"
      }
      data-variante={variante}
    >
      {children}
    </button>
  );
}
