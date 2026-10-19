export default function Barra({ titulo, valor, ancho, tono = "primary" }) {
  return (
    <div className="mb-4">
      <div className="mb-1 flex justify-between gap-2 text-[13px]">
        <span>{titulo}</span>
        <span className="text-muted">{valor}</span>
      </div>
      <div className="h-2 bg-background">
        <div
          className={`h-2 bg-primary data-[tono=accent]:bg-accent ${ancho}`}
          data-tono={tono}
        />
      </div>
    </div>
  );
}
