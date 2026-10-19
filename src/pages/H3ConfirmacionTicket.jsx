import Boton from "../estilo/Boton";
import Etiqueta from "../estilo/Etiqueta";
import Tarjeta from "../estilo/Tarjeta";
import UsuarioLayout from "../components/UsuarioLayout";

export default function H3ConfirmacionTicket() {
  return (
    <UsuarioLayout pagina="mis-tickets">
      <div className="mx-auto max-w-2xl py-12">
        <Tarjeta titulo="✓ Tu ticket quedó registrado">
          <p>
            Guarda el código: con él puedes buscar el ticket desde la cabecera
            en cualquier momento.
          </p>
          <p className="font-mono text-2xl text-primary">
            TCK-2026-00147 <Boton variante="secundario">Copiar</Boton>
          </p>
          <h3>PRIORIDAD ASIGNADA</h3>
          <div className="acciones">
            <Etiqueta tono="danger">Crítica</Etiqueta>
            <Etiqueta tono="info">Abierto</Etiqueta>
          </div>
          <h3>TIEMPO DE ATENCIÓN ESPERADO</h3>
          <p>2 horas hábiles · antes de las 10:12 del 07/09/2026</p>
          <h3>AMBIENTE</h3>
          <p>A-201 · Audiovisuales</p>
          <div className="acciones">
            <Boton variante="primario">Ver el detalle del ticket</Boton>
            <Boton variante="secundario">Ir a mis tickets</Boton>
          </div>
        </Tarjeta>
      </div>
    </UsuarioLayout>
  );
}
