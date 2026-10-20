export default function Tarjeta({ children, titulo }) {
  return (
    <section className="rounded-sm border border-border bg-white p-6 space-y-4">
      <h2 className="text-xl leading-7 font-semibold">{titulo}</h2>
      {children}
    </section>
  );
}
