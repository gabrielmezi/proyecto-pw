import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./estilo/estilo.css";
import App from "./App.jsx";

export default function main() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(main());
