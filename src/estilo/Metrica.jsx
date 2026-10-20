export default function Metrica({ titulo, valor, detalle }) {
  return (
    <section className="rounded-sm border border-border bg-white p-6">
      <p className="text-xs text-muted">{titulo}</p>
      <p className="my-2 text-[32px] leading-10 font-semibold">{valor}</p>
      <p className="text-xs text-muted">{detalle}</p>
    </section>
  );
}
