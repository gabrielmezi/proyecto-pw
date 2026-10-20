import SupervisorLayout from "../components/SupervisorLayout"

export default function H2TecnicosPorCategoria() {
  return (
    <SupervisorLayout pagina="tecnicos">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center">
          <div>
            <p className="text-2xl font-bold">Técnicos por categoría</p>
            <p className="text-xs text-gray-500 mt-2">Marca las categorías que cada técnico puede atender. La cola solo
              ofrece técnicos habilitados al asignar.</p>
          </div>
          <div>
            <button
              className="text-sm ml-[385px] text-[#3B6FA8] font-bold bg-white rounded-md shadow-md py-2 w-[120px] border border-[#3B6FA8] hover:bg-gray-200 hover:text-black" id="InvitarTécnico" type="button">
              Invitar técnico</button>
            <button
              className="text-sm ml-4 text-white bg-[#163A5A] rounded-md shadow-md py-2 w-[120px] border border-[#3B6FA8] hover:bg-blue-200 hover:text-black" id="Guardar" type="button">Guardar
              matriz</button>
          </div>
        </div>

        <div className="bg-white rounded-md border border-gray-200 shadow-sm mt-4">
          <div
            className="flex items-center text-[10px] bg-[#F8FAFC] border-b border-gray-200 font-bold text-gray-500 p-3">
            <p>TÉCNICO</p>
            <p className="ml-[150px]">ESPECIALIDAD DECLARADA</p>
            <p className="ml-[60px]">CARGA ACTUAL</p>
            <p className="ml-[50px]">AUDIOVISUALES</p>
            <p className="ml-[40px]">CLIMATIZACIÓN</p>
            <p className="ml-[40px]">REDES</p>
            <p className="ml-[40px]">MOBILIARIO</p>
            <p className="ml-[40px]">ELÉCTRICO</p>
            <p className="ml-[40px]">LIMPIEZA</p>
            <p className="ml-[40px]">ACCESOS</p>
          </div>

          <div className="flex items-center text-xs p-3 hover:bg-gray-50">
            <p className="font-bold">Julio Paredes Soto</p>
            <p className="ml-[90px] text-gray-500">Audiovisuales, Redes</p>
            <p className="ml-[80px] font-bold">8tickets</p>
            <div className="flex items-center divide-x divide-gray-200">
              <div className="ml-[70px] bg-[#E7EFF6] text-[#163A5A] font-bold px-9 py-2">✓</div>
              <div className="ml-[60px]"></div>
              <div className="ml-[75px] bg-[#E7EFF6] text-[#163A5A] font-bold px-9 py-2">✓</div>
              <div className="ml-[60px]"></div>
              <div className="ml-[60px]"></div>
              <div className="ml-[60px]"></div>
              <div className="ml-[95px] bg-[#E7EFF6] text-[#163A5A] font-bold px-9 py-2">✓</div>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <div className="bg-[#E7EFF6] border-l-4 border-[#163A5A] p-3 rounded-r-md">
            <p className="text-xs text-[#163A5A]">Climatización tiene solo dos técnicos habilitados y 5
              tickets abiertos. Considera habilitar un tercero.</p>
          </div>

          <div className="ml-12 bg-white border border-gray-200 p-3 rounded-md w-[590px]">
            <p className="text-xs text-gray-600 font-medium">Carga actual = tickets asignados en estado abierto, en
              atención o en espera.</p>
          </div>
        </div>
      </div>
    </SupervisorLayout>
  );
}
