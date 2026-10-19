export default function Tabla({ children, titulo, prioridades = false }) {
  return (
    <div className="tabla-contenedor" data-prioridades={prioridades}>
      <table className="tabla">
        <caption className="sr-only">{titulo}</caption>
        {children}
      </table>
    </div>
  );
}
