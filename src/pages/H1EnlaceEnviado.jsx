import Boton from "../estilo/Boton";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1EnlaceEnviado() {
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto w-full max-w-md">
        <Tarjeta>
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-success bg-success/10 text-2xl font-semibold text-success">✓</div>
          <h1 className="text-xl font-semibold">Revisa tu correo</h1>
          <p className="text-muted">
            Enviamos el enlace a camila.quispe@aloe.ulima.edu.pe. Vence en 30
            minutos.
          </p>
          <Boton variante="terciario">
            Reenviar enlace (disponible en 0:45)
          </Boton>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
