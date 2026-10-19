export default function Boton({ children, variante = "primario" }) {
  return (
    <button type="button" className="boton" data-variante={variante}>
      {children}
    </button>
  );
}
