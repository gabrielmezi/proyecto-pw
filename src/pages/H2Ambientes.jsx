import { useNavigate } from "react-router";
import SupervisorLayout from "../components/SupervisorLayout"

export default function H2Ambientes() {
  const navigate = useNavigate();
    return (
        <SupervisorLayout pagina="ambientes">
            <div>
                <p className="text-2xl font-bold">Sedes y ambientes</p>
                <div className="flex items-center">
                    <p className="text-sm text-gray-500">48 ambientes registrados en el Campus Monterrico</p>
                    <button type="button" onClick={() => navigate("/h2/nuevo-ambiente")}
                        className="text-sm  ml-[630px] text-white bg-[#163A5A] rounded-md shadow-md py-2 w-[150px] border border-[#3B6FA8] hover:bg-blue-200 hover:text-black" id="NuevoAmbiente">Nuevo ambiente</button>
                </div>

                <div className="mt-2 flex items-center">
                    <input className="bg-white text-gray-500 border border-gray-300 rounded-md text-sm shadow-sm p-2 w-[250px]"
                        type="text" placeholder="Buscar por código o nombre" id="Buscar" />
                    <select
                        className="ml-2 bg-white text-gray-500 border border-gray-300 rounded-md text-sm shadow-sm p-2 w-[150px]">
                        <option value="Sede">Sede: </option>
                    </select>

                    <select
                        className="ml-2 bg-white text-gray-500 border border-gray-300 rounded-md text-sm shadow-sm p-2 w-[150px]">
                        <option value="Pabellón">Pabellón: </option>
                    </select>

                    <button
                        className="ml-2 text-[#163A5A] bg-[#E7EFF6] border border-[#163A5A] rounded-md shadow-md p-[5px] w-[100px]"
                        id="Tipo" type="button">Tipo: </button>
                </div>

                <div className="mt-4 bg-white rounded-md border border-gray-200 w-[1100px]">

                    <div className="flex items-center p-3 border-b border-gray-200 text-xs text-gray-500 font-bold bg-[#F8FAFC]">
                        <p className="w-[120px]">CÓDIGO</p>
                        <p className="w-[200px]">TIPO DE AMBIENTE</p>
                        <p className="w-[120px]">PABELLÓN</p>
                        <p className="w-[80px]">PISO</p>
                        <p className="w-[180px]">SEDE</p>
                        <p className="w-[120px]">CAPACIDAD</p>
                        <p className="w-[150px]">TICKETS ABIERTOS</p>
                    </div>

                    <div className="text-sm">

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">A-201</p>
                            <p className="w-[200px]">Aula</p>
                            <p className="w-[120px]">A</p>
                            <p className="w-[80px]">2</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">68</p>
                            <p className="w-[150px]">2</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">A-305</p>
                            <p className="w-[200px]">Aula</p>
                            <p className="w-[120px]">A</p>
                            <p className="w-[80px]">3</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">54</p>
                            <p className="w-[150px]">0</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">E-304</p>
                            <p className="w-[200px]">Aula magna</p>
                            <p className="w-[120px]">E</p>
                            <p className="w-[80px]">3</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">120</p>
                            <p className="w-[150px]">3</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">H-105</p>
                            <p className="w-[200px]">Laboratorio de cómputo</p>
                            <p className="w-[120px]">H</p>
                            <p className="w-[80px]">1</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">32</p>
                            <p className="w-[150px]">1</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">H-210</p>
                            <p className="w-[200px]">Laboratorio de Redes</p>
                            <p className="w-[120px]">H</p>
                            <p className="w-[80px]">2</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">28</p>
                            <p className="w-[150px]">4</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">N-402</p>
                            <p className="w-[200px]">Aula</p>
                            <p className="w-[120px]">N</p>
                            <p className="w-[80px]">4</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">48</p>
                            <p className="w-[150px]">2</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">Q-101</p>
                            <p className="w-[200px]">Auditorio</p>
                            <p className="w-[120px]">Q</p>
                            <p className="w-[80px]">1</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">180</p>
                            <p className="w-[150px]">2</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">BIB-P2</p>
                            <p className="w-[200px]">Biblioteca piso 2</p>
                            <p className="w-[120px]">Biblioteca</p>
                            <p className="w-[80px]">2</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">210</p>
                            <p className="w-[150px]">1</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">AUD-CEN</p>
                            <p className="w-[200px]">Auditorio Central</p>
                            <p className="w-[120px]">Central</p>
                            <p className="w-[80px]">1</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">420</p>
                            <p className="w-[150px]">1</p>
                        </div>

                        <div className="flex items-center p-3">
                            <p className="w-[120px] font-bold text-[#163A5A]">L-108</p>
                            <p className="w-[200px]">Laboratorio de Física</p>
                            <p className="w-[120px]">L</p>
                            <p className="w-[80px]">1</p>
                            <p className="w-[180px] text-gray-600">Campus Monterrico</p>
                            <p className="w-[120px] font-bold">30</p>
                            <p className="w-[150px]">0</p>
                        </div>
                    </div>

                    <div className="flex items-center p-3 border-t border-gray-200">
                        <p className="text-xs text-gray-500">Mostrando 1-10 de 48 ambientes</p>

                        <div className="ml-[530px] flex items-center">
                            <button className="px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-500">Anterior</button>
                            <button className="ml-2 px-3 py-1 text-xs border border-[#163A5A] bg-[#163A5A] text-white rounded">1</button>
                            <button className="ml-2 px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-500">2</button>
                            <button className="ml-2 px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-500">3</button>
                            <button className="ml-2 px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-500">4</button>
                            <button className="ml-2 px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-500">5</button>
                            <button
                                className="ml-2 px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-600">Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
        </SupervisorLayout>
    );
}
