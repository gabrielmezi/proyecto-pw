import { useNavigate } from "react-router";
import SupervisorLayout from "../components/SupervisorLayout"

export default function H2EditarCategoria() {
  const navigate = useNavigate();
  return (
    <SupervisorLayout pagina="categorias">
      <div className="flex items-center">
        <div>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">Categorias ·</p>
            <p className="ml-2 text-sm">Nueva subcategoría</p>
          </div>

          <h1 className="mt-4 text-2xl font-bold">Nueva subcategoría</h1>

          <div className="flex mt-8 w-[800px] p-4 bg-white border-x border-t border-gray-300 rounded-sm shadow-md">
            <div>
              <p className="text-xs text-gray-500">NOMBRE</p>
              <input
                className="mt-2 text-sm border border-gray-300 focus:outline-none focus:placeholder-transparent w-[300px] p-2"
                type="text" placeholder="Escriba su nombre" id="Nombre" />
              <p className="mt-2 text-xs text-[#B4322B] ">El nombre es obligatorio.</p>
              <p className="mt-4 text-xs text-gray-500">PRIORIDAD POR DEFECTO</p>
              <button
                className="mt-2 text-sm text-gray-500 border border-gray-300 rounded-md shadow-md px-3 py-2" id="Crítica
                    " type="button">Crítica</button>
              <button
                className="mt-2 ml-2 text-sm text-gray-500 border border-gray-300 rounded-sm shadow-md px-3 py-2" id="Alta" type="button">Alta</button>
              <button
                className="mt-2 ml-2 text-sm text-gray-500 border border-gray-300 rounded-sm shadow-md px-3 py-2" id="Media" type="button">Media</button>
              <button
                className="mt-2 ml-2 text-sm text-gray-500 border border-gray-300 rounded-sm shadow-md px-3 py-2" id="Baja" type="button">Baja</button>
            </div>

            <div className="ml-[50px]">
              <p className="text-xs text-gray-500">CATEGORÍA PADRE</p>
              <select
                className="mt-2 bg-white text-gray-500 border border-gray-300 rounded-md text-sm shadow-sm p-2 w-[400px]">
                <option value="Categoría 1">Categoría 1</option>
                <option value="Categoría 2">Categoría 2</option>
              </select>
              <p className="mt-2 text-xs text-gray-500">Déjalo vacío para crear una categoría de primer nivel</p>
              <p className="mt-4 text-xs text-gray-500">TIEMPO ESPERADO (HORAS)</p>
              <input
                className="mt-2 text-sm border border-gray-300 focus:outline-none focus:placeholder-transparent w-[400px] p-2"
                type="text" placeholder="Escriba el número de horas" id="Horas" />
              <p className="mt-2 text-xs text-[#B4322B] ">Debe ser un número mayor que cero</p>

            </div>

          </div>

          <div className="bg-white border-x border-b border-gray-300 shadow-md rounded-sm p-4">
            <p className="text-xs text-gray-500">DESCRIPCIÓN</p>
            <input
              className="mt-2 text-sm border border-gray-300 focus:outline-none focus:placeholder-transparent w-[750px] h-[100px]"
              type="text" placeholder="Descripción" id="Descripción" />
            <p className="mt-2 text-xs text-gray-500">Se muestra al usuario al elegir la subcategoría. Máximo 240 caracteres
            </p>

            <div className="mt-4 flex items-center">
              <input className="border border-gray-500 rounded-sm w-[15px] h-[15px]" id="CategoríaActiva" type="checkbox" />
              <p className="ml-2 text-xs">Categoría activa · disponible al registrar tickets</p>
            </div>
            <button type="button" onClick={() => navigate("/h2/categorias")}
              className="mt-4 text-sm text-white bg-[#163A5A] rounded-md shadow-md py-2 w-[150px] border border-[#3B6FA8] hover:bg-blue-200 hover:text-black"
              id="GuardarCategoría">Guardar Categoría</button>
            <button type="button" onClick={() => navigate("/h2/categorias")}
              className="text-sm ml-2 text-[#3B6FA8] font-bold bg-white rounded-md shadow-md py-2 w-[100px] border border-[#3B6FA8] hover:bg-gray-200 hover:text-black"
              id="Cancelar">Cancelar</button>
          </div>
        </div>

        <div className="mb-[182px] ml-4 bg-white border border-gray-300 shadow-md p-4 w-[400px]">
          <p className="mt-2 text-xl font-bold">Efecto del tiempo esperado</p>
          <p className="mt-2 text-sm text-gray-500">El tiempo esperado define cuándo un ticket aparece como fuera de plazo en
            la cola y en el tablero. Cambiarlo no altera los tickets ya abiertos.</p>
          <p className="mt-4 border-b border-gray-300"></p>
          <p className="mt-2 text-xs text-gray-500">REFERENCIA ACTUAL</p>
          <p>Crítica 2 h · Alta 8 h · Media 24 h · Baja 72 hhábiles</p>
        </div>
      </div>
    </SupervisorLayout>

  );
}
