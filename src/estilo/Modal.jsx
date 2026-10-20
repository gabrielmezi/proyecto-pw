import Boton from "./Boton";
export default function Modal({ titulo, children, compacto = false }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-300 p-6">
      <section
        role="dialog"
        className={
          "w-full space-y-5 rounded-sm border border-border bg-white shadow-xl " +
          (compacto ? "max-w-sm p-6" : "max-w-xl p-8")
        }
      >
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-xl font-semibold">{titulo}</h2>
          <Boton variante="terciario">
            <span>×</span>
          </Boton>
        </div>
        {children}
      </section>
    </main>
  );
}
