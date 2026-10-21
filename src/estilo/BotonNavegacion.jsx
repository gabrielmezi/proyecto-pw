import { Link } from "react-router";

export default function BotonNavegacion({ children, activo = false, to, ...props }) {
  const Componente = to ? Link : "button";

  return (
    <Componente
      type={to ? undefined : "button"}
      to={to}
      {...props}
      data-activo={activo}
      className="hover:bg-gray-200 flex min-h-10 w-full cursor-pointer items-center
      justify-between rounded-sm px-3 py-2 text-left text-[13px]
      text-muted transition-colors duration-150 data-[activo=true]:border-l-2
      data-[activo=true]:border-primary data-[activo=true]:bg-primary-soft
      data-[activo=true]:text-primary hover:text-primary
      focus-visible:bg-blue-50 focus-visible:text-primary
      data-[activo=true]:focus-visible:bg-blue-50 motion-reduce:transition-none">
      {children}
    </Componente>
  );
}
