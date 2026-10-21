import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./estilo/estilo.css";
import App from "./App.jsx";
import DatosProvider from "./context/DatosProvider";

export default function main() {
  return (
    <StrictMode>
      <DatosProvider>
        <App />
      </DatosProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(main());
