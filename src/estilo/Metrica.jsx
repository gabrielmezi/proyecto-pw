export default function Metrica({ titulo, valor, detalle }) {
  return (
    <section className="tarjeta">
      <p className="text-xs tracking-wide text-muted">{titulo}</p>
      <p className="my-2 text-[32px] leading-10 font-semibold">{valor}</p>
      <p className="text-xs text-muted">{detalle}</p>
    </section>
  );
}
