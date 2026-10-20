import SupervisorLayout from "../components/SupervisorLayout"

export default function H2Categorias() {
  return (
    <SupervisorLayout pagina="categorias">
      <div>
        <h1 className="text-2xl font-bold">Categorías de servicio</h1>
        <div className="flex">
          <p className="text-gray-500">1 categorías activas · 1 subcategorías · la prioridad por defecto se aplica a cada
            ticket nuevo</p>
          <button
            className="text-sm ml-[270px] text-[#3B6FA8] font-bold bg-white rounded-md shadow-md py-2 w-[150px] border border-[#3B6FA8] hover:bg-gray-200 hover:text-black" id="ExportarCatálogo" type="button">Exportar catálogo</button>
          <button
            className="text-sm ml-4 text-white bg-[#163A5A] rounded-md shadow-md py-2 w-[150px] border border-[#3B6FA8] hover:bg-blue-200 hover:text-black"
            id="NuevaCategoría" type="button">Nueva Categoría</button>
        </div>

        <div className="flex items-center mt-4">
          <input
            className="border border-gray-300 rounded-sm shadow-md w-[400px] p-2 focus:placeholder-transparent focus:outline-none"
            type="text" placeholder="Buscar categoría o subcategoría" id="BuscarCategoría" />
          <button className="ml-4 text-[#163A5A] bg-[#E7EFF6] border border-[#163A5A] rounded-md shadow-md w-[130px] p-2"
            id="SoloActivas" type="button">Solo Activas x</button>
          <select className="ml-4 bg-white text-gray-500 border border-gray-300 rounded-md text-sm shadow-sm p-2">
            <option value="todas">Prioridad: todas</option>
            <option value="alta">Prioridad: alta</option>
            <option value="alta">Prioridad: media</option>
            <option value="alta">Prioridad: baja</option>
          </select>

          <p className="ml-[350px] text-xs text-gray-500">Filtros activos: 1 ·</p>
          <button className="ml-2 text-xs text-[#3B6FA8] font-bold hover:text-blue-900" id="Limpiar" type="button">Limpiar</button>

        </div>

        <div className="flex items-center mt-4 border border-gray-300 rounded-sm shadow-md p-2 w-[1200px]">
          <p className="text-xs text-gray-500 font-bold">CATEGORÍA · SUBCATEGORÍA</p>
          <p className="ml-[350px] text-xs text-gray-500 font-bold">PRIORIDAD</p>
          <p className="ml-12 text-xs text-gray-500 font-bold">TIEMPO ESPERADO</p>
          <p className="ml-12 text-xs text-gray-500 font-bold">TICKETS ABIERTOS</p>
          <p className="ml-12 text-xs text-gray-500 font-bold">ESTADO</p>
          <p className="ml-12 text-xs text-gray-500 font-bold">ACCIONES</p>

        </div>

        <div className="bg-white border border-gray-300 w-[1200px] p-2">
          <div className="flex items-center">
            <p className="font-bold">Audiovisuales</p>
            <p className="ml-[420px] text-orange-500 bg-orange-100 border-orange-500 rounded-sm border px-[5px]">Alta</p>
            <p className="ml-[80px]">4 hhábiles</p>
            <p className="ml-[85px]">9</p>
            <p className="ml-[150px] text-[#1E7F4D] bg-green-50 border border-[#1E7F4D] rounded-sm border px-[5px]">Activa</p>
            <button className="ml-[40px] text-[#163A5A] text-xs font-bold hover:text-blue-500" type="button">Editar</button>
            <button className="ml-[20px] text-[#B4322B] text-xs font-bold hover:text-red-500" type="button">Desactivar</button>
          </div>

          <div className="mt-4 flex items-center">
            <p>Proyector no enciende</p>
            <p className="ml-[365px] text-[#B4322B] bg-red-100 border-[#B4322B] rounded-sm border px-[5px]">Crítica</p>
            <p className="ml-[65px]">2 hhábiles</p>
            <p className="ml-[85px]">3</p>
            <p className="ml-[150px] text-[#1E7F4D] bg-green-50 border border-[#1E7F4D] rounded-sm border px-[5px]">Activa</p>
            <button className="ml-[40px] text-[#163A5A] text-xs font-bold hover:text-blue-500" type="button">Editar</button>
            <button className="ml-[20px] text-[#B4322B] text-xs font-bold hover:text-red-500" type="button">Desactivar</button>
          </div>
        </div>

        <div className="flex items-center bg-white border border-gray-300 w-[1200px] p-2">
          <p className="text-xs text-gray-500">Mostrando 1 de 1 filas · 1 categorías y 1 subcategorías</p>
          <button className="ml-[640px] px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-500">Anterior</button>
          <button className="ml-[10px] px-3 py-1 text-xs border border-[#163A5A] bg-[#163A5A] text-white rounded">1</button>
          <button className="ml-[10px] px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-500">2</button>
          <button
            className="ml-[10px] px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-600">Siguiente</button>
        </div>
      </div>
    </SupervisorLayout>
  );
}
