export default function NotaInformativa({ titulo, children }) {
  return (
    <section className="space-y-1 border-l-4 border-primary bg-primary-soft px-4 py-4 text-[13px] leading-[1.47] text-primary">
      <h3 className="text-[13px] font-medium">{titulo}</h3>
      <div>{children}</div>
    </section>
  );
}
