import Etiqueta from "../estilo/Etiqueta";
export default function TablaTickets({ prioridades = true }) {
  return (
    <div className="overflow-x-auto rounded-t-sm border border-border bg-white">
      <table className="w-full min-w-[1000px] border-collapse text-left text-[13px]">
        <caption className="sr-only">Mis tickets</caption>
      <thead>
        <tr>
          <th scope="col" className="bg-background px-3 py-2 text-[11px] font-medium tracking-wider text-muted">CÓDIGO</th>
          <th scope="col" className="bg-background px-3 py-2 text-[11px] font-medium tracking-wider text-muted">ASUNTO</th>
          <th scope="col" className="bg-background px-3 py-2 text-[11px] font-medium tracking-wider text-muted">CATEGORÍA</th>
          <th scope="col" className="bg-background px-3 py-2 text-[11px] font-medium tracking-wider text-muted">AMBIENTE</th>
          <th scope="col" className="bg-background px-3 py-2 text-[11px] font-medium tracking-wider text-muted">REGISTRADO</th>
          <th scope="col" className="bg-background px-3 py-2 text-[11px] font-medium tracking-wider text-muted">PRIORIDAD</th>
          <th scope="col" className="bg-background px-3 py-2 text-[11px] font-medium tracking-wider text-muted">ESTADO</th>
        </tr>
      </thead>
      <tbody>
        <tr className={prioridades ? "border-l-[3px] border-danger" : ""}>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap font-medium">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00147
            </span>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 w-[29%]">Proyector no enciende en aula</td>
          <td className="h-10 border-t border-border px-3 py-1 text-xs text-muted">Audiovisuales · Proyector no enciende</td>
          <td className="h-10 border-t border-border px-3 py-1 font-mono font-medium">A-201</td>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap text-muted">07/09/2026</td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="danger">Crítica</Etiqueta>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="info">Abierto</Etiqueta>
          </td>
        </tr>
        <tr className={prioridades ? "border-l-[3px] border-danger" : ""}>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap font-medium">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00146
            </span>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 w-[29%]">Punto de red caído en laboratorio</td>
          <td className="h-10 border-t border-border px-3 py-1 text-xs text-muted">Redes y conectividad · Punto de red caído</td>
          <td className="h-10 border-t border-border px-3 py-1 font-mono font-medium">H-210</td>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap text-muted">07/09/2026</td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="danger">Crítica</Etiqueta>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="info">Abierto</Etiqueta>
          </td>
        </tr>
        <tr className={prioridades ? "border-l-[3px] border-accent" : ""}>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap font-medium">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00145
            </span>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 w-[29%]">Aire acondicionado sin frío</td>
          <td className="h-10 border-t border-border px-3 py-1 text-xs text-muted">Climatización · Aire sin frío</td>
          <td className="h-10 border-t border-border px-3 py-1 font-mono font-medium">E-304</td>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap text-muted">07/09/2026</td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="accent">Alta</Etiqueta>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="warning">En atención</Etiqueta>
          </td>
        </tr>
        <tr className={prioridades ? "border-l-[3px] border-accent" : ""}>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap font-medium">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00144
            </span>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 w-[29%]">Tomacorriente sin energía</td>
          <td className="h-10 border-t border-border px-3 py-1 text-xs text-muted">Eléctrico · Tomacorriente sin energía</td>
          <td className="h-10 border-t border-border px-3 py-1 font-mono font-medium">N-402</td>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap text-muted">07/09/2026</td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="accent">Alta</Etiqueta>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="info">Abierto</Etiqueta>
          </td>
        </tr>
        <tr className={prioridades ? "border-l-[3px] border-warning" : ""}>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap font-medium">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00143
            </span>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 w-[29%]">Imagen distorsionada del proyector</td>
          <td className="h-10 border-t border-border px-3 py-1 text-xs text-muted">Audiovisuales · Imagen distorsionada</td>
          <td className="h-10 border-t border-border px-3 py-1 font-mono font-medium">Q-101</td>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap text-muted">07/09/2026</td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="warning">Media</Etiqueta>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="warning">En atención</Etiqueta>
          </td>
        </tr>
        <tr className={prioridades ? "border-l-[3px] border-accent" : ""}>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap font-medium">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00142
            </span>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 w-[29%]">Chapa de puerta trabada</td>
          <td className="h-10 border-t border-border px-3 py-1 text-xs text-muted">Accesos y cerraduras · Chapa trabada</td>
          <td className="h-10 border-t border-border px-3 py-1 font-mono font-medium">H-105</td>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap text-muted">07/09/2026</td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="accent">Alta</Etiqueta>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="warning">En atención</Etiqueta>
          </td>
        </tr>
        <tr className={prioridades ? "border-l-[3px] border-warning" : ""}>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap font-medium">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00141
            </span>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 w-[29%]">Cinco sillas rotas en aula</td>
          <td className="h-10 border-t border-border px-3 py-1 text-xs text-muted">Mobiliario · Silla rota</td>
          <td className="h-10 border-t border-border px-3 py-1 font-mono font-medium">A-201</td>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap text-muted">07/09/2026</td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="warning">Media</Etiqueta>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="muted">En espera</Etiqueta>
          </td>
        </tr>
        <tr className={prioridades ? "border-l-[3px] border-danger" : ""}>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap font-medium">
            <span className="whitespace-nowrap font-mono text-xs text-primary">
              TCK-2026-00140
            </span>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 w-[29%]">Fuga de agua en baño de damas</td>
          <td className="h-10 border-t border-border px-3 py-1 text-xs text-muted">Limpieza · Fuga de agua</td>
          <td className="h-10 border-t border-border px-3 py-1 font-mono font-medium">Biblioteca piso 2</td>
          <td className="h-10 border-t border-border px-3 py-1 whitespace-nowrap text-muted">07/09/2026</td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="danger">Crítica</Etiqueta>
          </td>
          <td className="h-10 border-t border-border px-3 py-1 ">
            <Etiqueta tono="warning">En atención</Etiqueta>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
