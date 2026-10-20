
export default function H2DesactivarCategoria() {
  return (
    <div className="flex items-center ml-[550px] mt-[200px] bg-[#F4F6F8]">
      <div className="bg-white p-4">
        <div>
          <p className="text-2xl font-bold">Desactivar Audiovisuales</p>
          <div className="mt-4 bg-yellow-100 border border-[#B7791F] text-[#B7791F] p-2 w-[500px]">
            <p>Esta categoría tiene 9 tickets abiertos. Los tickets en curso continuarán su atención.</p>
          </div>
          <p className="mt-4 w-[500px]">Al desactivarla, la comunidad no podrá registrar nuevos tickets en esta categoría</p>
        </div>

        <button 
          className="mt-4 font-bold text-[#22537D] border border-[#22537D] rounded-sm px-3 py-[10px] hover:text-[#1A4264] hover:bg-[#F0F4F8] hover:border-[#1A4264]" id="Cancelar" type="button">Cancelar</button>

        <button className="ml-4 text-white bg-[#B4322B] px-3 py-[10px] rounded-sm hover:bg-red-800">Desactivar Categoría</button>

      </div>
    </div>
  );
}
