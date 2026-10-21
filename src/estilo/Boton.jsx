import { Link } from "react-router";

export default function Boton({ children, variante = "primario", to, ...props }) {

  const clasesBase = `
    inline-flex min-h-10 items-center justify-center gap-2
    rounded-sm border py-2 text-[13px] font-medium transition-colors
  `;

  let clasesVariante = "border-primary bg-primary px-4 text-white hover:bg-primary-dark";

  if (variante === "secundario") {
    clasesVariante = "border-primary bg-white px-4 text-primary hover:bg-gray-200";
  } else if (variante === "terciario") {
    clasesVariante = "border-transparent bg-transparent px-1 text-primary hover:bg-gray-200";
  } else if (variante === "peligro") {
    clasesVariante = "border-danger bg-danger px-4 text-white hover:bg-red-800";
  } else if (variante === "heredado") {
    clasesVariante = "border-current bg-transparent px-4 text-inherit hover:bg-gray-200";
  }

  const Componente = to ? Link : "button";

  return (
    <Componente
      type={to ? undefined : "button"}
      to={to}
      {...props}
      className={clasesBase + " " + clasesVariante}
      data-variante={variante}
    >
      {children}
    </Componente>
  );
}
