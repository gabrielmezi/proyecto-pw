export default function Campo({
  titulo,
  valor,
  placeholder,
  ayuda,
  error,
  tipo = "text",
  soloLectura = false,
}) {
  return (
    <label className="campo">
      <span>{titulo}</span>
      <input
        className="entrada"
        type={tipo}
        defaultValue={valor}
        placeholder={placeholder}
        aria-invalid={error}
        readOnly={soloLectura}
      />
      <span className="ayuda">{ayuda}</span>
    </label>
  );
}
