export default function AreaTexto({ titulo, valor, ayuda }) {
  return (
    <label className="campo">
      <span>{titulo}</span>
      <textarea className="entrada min-h-28 resize-none" defaultValue={valor} />
      <span className="ayuda">{ayuda}</span>
    </label>
  );
}
