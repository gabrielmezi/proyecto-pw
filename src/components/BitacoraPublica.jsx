export default function BitacoraPublica() {
  return (
    <div className="bitacora">
      <article>
        <h3>Camila Quispe Ramos</h3>
        <p className="mb-3 text-xs text-muted">
          Usuario · 07/09/2026 08:12 · COMENTARIO PÚBLICO
        </p>
        <p>
          El proyector enciende el foco pero la imagen no llega. Ya probé con
          dos laptops distintas y el mismo cable.
        </p>
      </article>
      <article>
        <h3>Lucía Mendoza Ríos</h3>
        <p className="mb-3 text-xs text-muted">
          Supervisor · 07/09/2026 08:20 · COMENTARIO PÚBLICO
        </p>
        <p>
          Asignamos tu ticket a Julio Paredes. Se atenderá antes del inicio de
          la clase de 10:00.
        </p>
      </article>
      <article>
        <h3>Julio Paredes Soto</h3>
        <p className="mb-3 text-xs text-muted">
          Técnico · 07/09/2026 09:05 · COMENTARIO PÚBLICO
        </p>
        <p>
          Subí al aula con un cable de reemplazo. La imagen vuelve con conexión
          directa; el problema está en el extensor del rack.
        </p>
      </article>
    </div>
  );
}
