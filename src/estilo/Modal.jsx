import Boton from "./Boton";
export default function Modal({ titulo, children }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary-dark/20 p-6">
      <section
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        className="w-full max-w-xl space-y-5 rounded-sm border border-border bg-white p-8 shadow-xl"
      >
        <div className="flex items-start justify-between gap-6">
          <h2>{titulo}</h2>
          <Boton variante="terciario">×</Boton>
        </div>
        {children}
      </section>
    </main>
  );
}
