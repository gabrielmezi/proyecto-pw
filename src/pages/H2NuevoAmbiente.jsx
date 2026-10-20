
export default function H2NuevoAmbiente() {
  return (
    <div className="flex items-center ml-[550px] mt-[200px] bg-[#F4F6F8]">
      <div>
        <p className="text-xs text-gray-500 font-bold">MODAL · NUEVO AMBIENTE</p>
        <div className="mt-4 flex bg-white border-l border-r border-t shadow-md border-[#D6DEE5] p-2 rounded-sm">
          <div>
            <p className="text-xl font-bold">Nuevo ambiente</p>
            <p className="mt-2 text-xs text-gray-500 font-bold">CÓDIGO</p>
            <input className="mt-4 border border-gray-300 p-2 rounded-sm" placeholder="Código" id="Código" type="text" />
            <p className="mt-4 text-xs text-gray-500 font-bold">PABELLÓN · PISO</p>
            <input className="mt-2 border border-gray-300 p-2 rounded-sm" placeholder="Pabellón" id="Pabellón" type="text" />

          </div>

          <div className="ml-4 mt-[32px]">
            <p className="mt-2 text-xs text-gray-500 font-bold">TIPO</p>
            <select className="mt-[11px] text-sm text-gray-500 rounded-sm border border-gray-300 w-[190px] h-[42px]">
              <option value="Aula">Aula</option>
              <option value="Laboratorio">Laboratorio</option>
              <option value="Auditorio">Auditorio</option>
              <option value="Biblioteca">Biblioteca</option>
            </select>
            <p className="mt-4 text-xs text-gray-500 font-bold">CAPACIDAD</p>
            <input className="mt-2 border border-gray-300 p-2 rounded-sm" placeholder="Capacidad" id="Capacidad" type="text" />
          </div>
        </div>

        <div className="flex bg-white border-l border-r border-b border-md border-[#D6DEE5] shadow-md p-2 rounded-sm">
          <button 
          className="ml-[180px] font-bold text-[#22537D] border border-[#22537D] rounded-md px-3 py-[5px] hover:text-[#1A4264] hover:bg-[#F0F4F8] hover:border-[#1A4264]" id="Cancelar" type="button">Cancelar</button>
          <button className="ml-2 text-white bg-[#22537D] border border-[#22537D] rounded-md px-3 py-[5px] hover:text-white hover:bg-[#1A4264] hover:border-[#1A4264]" id="GuardarAmbiente" type="button">Guardar ambiente</button>

        </div>
      </div>
    </div>
  );
}
