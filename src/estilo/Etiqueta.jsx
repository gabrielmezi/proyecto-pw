export default function Etiqueta({ children, tono = "info" }) {
  return (
    <span className="etiqueta" data-tono={tono}>
      {children}
    </span>
  );
}
