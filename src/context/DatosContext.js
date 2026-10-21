import { createContext, useContext } from "react";

export const DatosContext = createContext(null);

export function useDatos() {
  return useContext(DatosContext);
}
