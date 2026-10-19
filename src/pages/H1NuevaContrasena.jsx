import Boton from "../estilo/Boton";
import Campo from "../estilo/Campo";
import Tarjeta from "../estilo/Tarjeta";
import PublicoLayout from "../components/PublicoLayout";

export default function H1NuevaContrasena() {
  return (
    <PublicoLayout pagina="">
      <div className="mx-auto w-full max-w-xl">
        <Tarjeta titulo="Nueva contraseña">
          <Campo
            titulo="NUEVA CONTRASEÑA"
            tipo="password"
            valor="Contrasena1"
            ayuda="Segura"
          />
          <Campo titulo="CONFIRMAR" tipo="password" valor="Contrasena1" />
          <Boton variante="primario">Guardar contraseña</Boton>
        </Tarjeta>
      </div>
    </PublicoLayout>
  );
}
