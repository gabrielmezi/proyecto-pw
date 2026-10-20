export default function Boton({ children, variante = "primario" }) {

  const clasesBase = `
    inline-flex min-h-10 items-center justify-center gap-2
    rounded-sm border py-2 text-[13px] font-medium
  `;

  let clasesVariante = "border-primary bg-primary px-4 text-white";

  if (variante === "secundario") {
    clasesVariante = "border-primary bg-white px-4 text-primary";
  } else if (variante === "terciario") {
    clasesVariante = "border-transparent bg-transparent px-1 text-primary";
  } else if (variante === "peligro") {
    clasesVariante = "border-danger bg-danger px-4 text-white";
  } else if (variante === "heredado") {
    clasesVariante = "border-current bg-transparent px-4 text-inherit";
  }

  return (
    <button
      type="button"
      className={clasesBase + " " + clasesVariante}
      data-variante={variante}
    >
      {children}
    </button>
  );
}
