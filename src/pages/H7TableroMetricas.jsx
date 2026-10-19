import Boton from "../estilo/Boton";
import Tarjeta from "../estilo/Tarjeta";
import TituloPagina from "../estilo/TituloPagina";
import Metrica from "../estilo/Metrica";
import Barra from "../estilo/Barra";
import SupervisorLayout from "../components/SupervisorLayout";

export default function H7TableroMetricas() {
  return (
    <SupervisorLayout pagina="tablero">
      <TituloPagina
        titulo="Tablero de métricas"
        descripcion="Campus Monterrico · datos al 07/09/2026 09:40"
      >
        <Boton variante="secundario">Rango: 01/08/2026 – 07/09/2026</Boton>
        <Boton variante="secundario">Descargar reporte</Boton>
      </TituloPagina>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metrica
          titulo="TICKETS DEL PERIODO"
          valor="312"
          detalle="+8 % frente al periodo anterior"
        />
        <Metrica titulo="ABIERTOS AHORA" valor="24" detalle="9 sin asignar" />
        <Metrica
          titulo="TIEMPO PROMEDIO DE ATENCIÓN"
          valor="3 h 48 min"
          detalle="−22 min frente al periodo anterior"
        />
        <Metrica
          titulo="FUERA DEL TIEMPO ESPERADO"
          valor="17"
          detalle="5.4 % de los tickets del periodo"
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        <Tarjeta titulo="Tickets por estado">
          <div className="flex flex-wrap items-center gap-5">
            <div
              role="img"
              aria-label="312 tickets: 87 abiertos, 75 en atención, 28 en espera y 122 resueltos o cerrados"
              className="flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#3b6fa8_0%_28%,#b7791f_28%_52%,#5f6c78_52%_61%,#1e7f4d_61%_100%)]"
            >
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
                <strong className="text-2xl">312</strong>
                <span className="text-xs text-muted">tickets</span>
              </div>
            </div>
            <div className="space-y-3 text-[13px]">
              <p className="text-info">■ Abierto · 87</p>
              <p className="text-warning">■ En atención · 75</p>
              <p className="text-muted">■ En espera · 28</p>
              <p className="text-success">■ Resuelto y cerrado · 122</p>
            </div>
          </div>
        </Tarjeta>
        <Tarjeta titulo="Tickets por categoría">
          <Barra
            titulo="Audiovisuales"
            valor="86"
            ancho="w-[100%]"
            tono="primary"
          />
          <Barra
            titulo="Redes y conectividad"
            valor="64"
            ancho="w-[74%]"
            tono="primary"
          />
          <Barra
            titulo="Climatización"
            valor="52"
            ancho="w-[60%]"
            tono="primary"
          />
          <Barra titulo="Eléctrico" valor="41" ancho="w-[48%]" tono="primary" />
          <Barra
            titulo="Mobiliario"
            valor="33"
            ancho="w-[38%]"
            tono="primary"
          />
          <Barra titulo="Limpieza" valor="21" ancho="w-[24%]" tono="primary" />
          <Barra
            titulo="Accesos y cerraduras"
            valor="15"
            ancho="w-[17%]"
            tono="primary"
          />
        </Tarjeta>
        <Tarjeta titulo="Ambientes con más tickets">
          <Barra titulo="H-210" valor="28" ancho="w-[100%]" tono="accent" />
          <Barra titulo="A-201" valor="24" ancho="w-[86%]" tono="accent" />
          <Barra titulo="E-304" valor="19" ancho="w-[68%]" tono="accent" />
          <Barra titulo="Q-101" valor="17" ancho="w-[61%]" tono="accent" />
          <Barra titulo="N-402" valor="14" ancho="w-[50%]" tono="accent" />
          <Barra titulo="BIB-P2" valor="11" ancho="w-[39%]" tono="accent" />
        </Tarjeta>
      </div>
    </SupervisorLayout>
  );
}
