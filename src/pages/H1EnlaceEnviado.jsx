import Boton from "../estilo/Boton";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1EnlaceEnviado() {
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto max-w-xl text-center">
        <Tarjeta titulo="✓ Revisa tu correo">
          <p>
            Enviamos el enlace a camila.quispe@aloe.ulima.edu.pe. Vence en 30
            minutos.
          </p>
          <Boton variante="secundario">
            Reenviar enlace (disponible en 0:45)
          </Boton>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
