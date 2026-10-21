import { useNavigate } from "react-router";
export default function H2CatalogoVacio() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center ml-[550px] mt-[200px] bg-[#F4F6F8]">
      <div>
        <p className="text-xs text-gray-500 font-bold">ESTADO VACÍO · CATÁLOGO SIN CATEGORÍAS</p>
        <div className="mt-4 bg-white border border-[#D6DEE5] p-2 w-[500px] h-[250px] rounded-sm">
          <div className="mt-4 w-12 h-12 mx-auto bg-gray-100 border-2 border-gray-200 rounded-xl"></div>
          <p className="mt-2 text-center text-lg font-bold">Aún no hay categorías de servicio</p>
          <p className="mt-2 text-center text-gray-500">Crea la primera categoría para que la comunidad pueda registrar
            tickets. Puedes empezar con Audiovisuales y Redes.</p>
          <button type="button" onClick={() => navigate("/h2/editar-categoria")}
            className="mt-4 block mx-auto text-white bg-[#22537D] border border-[#22537D] rounded-md px-3 py-[5px] hover:text-white hover:bg-[#1A4264] hover:border-[#1A4264]" id="CrearPrimeraCategoría">Crear primera categoría</button>
        </div>

        <div className="mt-4 text-[#1E7F4D] bg-green-50 border border-[#1E7F4D] rounded-md p-2 w-[500px]">
          <p>Notificación de resultado · «Categoría “Audiovisuales” creada correctamente.»</p>
        </div>
      </div>
    </div>
  );
}
