export default function Tabla({ children, titulo, prioridades = false }) {
  return (
    <div className="overflow-x-auto rounded-sm border border-border bg-white data-[prioridades=true]:[&_tbody_tr]:border-l-[3px] data-[prioridades=true]:[&_tbody_tr]:border-info data-[prioridades=true]:[&_tr:has([data-tono=warning])]:border-warning data-[prioridades=true]:[&_tr:has([data-tono=accent])]:border-accent data-[prioridades=true]:[&_tr:has([data-tono=danger])]:border-danger" data-prioridades={prioridades}>
      <table className="w-full border-collapse text-left text-[13px] [&_th]:bg-background [&_th]:px-3 [&_th]:py-3 [&_th]:text-[11px] [&_th]:font-medium [&_th]:tracking-wider [&_th]:text-muted [&_td]:h-11 [&_td]:border-t [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td:first-child]:font-medium [&_tr:has([data-subcategoria])_td:first-child]:pl-10 [&_tr:has([data-subcategoria])_td:first-child]:font-normal [&_button[data-variante]]:min-h-7 [&_button[data-variante]]:px-2 [&_button[data-variante]]:py-1 [&_button[data-variante]]:text-xs [&_[data-acciones]]:flex-nowrap [&_[data-acciones]]:gap-1">
        <caption className="sr-only">{titulo}</caption>
        {children}
      </table>
    </div>
  );
}
