export default function Selector({ titulo, children, ayuda }) {
  return (
    <label className="campo">
      <span>{titulo}</span>
      <select className="entrada">{children}</select>
      <span className="ayuda">{ayuda}</span>
    </label>
  );
}
