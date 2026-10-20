export default function Etiqueta({ children, tono = "info" }) {
  return (
    <span className="inline-block whitespace-nowrap rounded-sm border border-info bg-blue-50 px-2 py-0.5 text-xs text-info data-[tono=danger]:border-danger data-[tono=danger]:bg-red-50 data-[tono=danger]:text-danger data-[tono=accent]:border-accent data-[tono=accent]:bg-orange-50 data-[tono=accent]:text-accent data-[tono=warning]:border-warning data-[tono=warning]:bg-[#FBF3E2] data-[tono=warning]:text-warning data-[tono=success]:border-success data-[tono=success]:bg-green-50 data-[tono=success]:text-success data-[tono=muted]:border-muted data-[tono=muted]:bg-slate-50 data-[tono=muted]:text-muted" data-tono={tono}>
      {children}
    </span>
  );
}
