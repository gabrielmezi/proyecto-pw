export default function Tarjeta({ children, titulo }) {
  return (
    <section className="tarjeta space-y-4">
      <h2>{titulo}</h2>
      {children}
    </section>
  );
}
