export default function Aviso({ children, tono = "info" }) {
  return (
    <div className="aviso" data-tono={tono}>
      {children}
    </div>
  );
}
