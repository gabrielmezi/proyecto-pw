export default function Tarjeta({ children, titulo }) {
  return (
    <section className="rounded-sm border border-border bg-white p-6 space-y-4">
      {titulo && <h2 className="text-xl font-semibold">{titulo}</h2>}
      {children}
    </section>
  );
}
