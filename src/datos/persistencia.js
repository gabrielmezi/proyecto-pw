// localStorage guarda texto: convertimos los objetos a JSON y viceversa.
export function leerLocal(clave, valorInicial, esValido) {
  try {
    const texto = localStorage.getItem(clave);

    if (texto === null) return valorInicial;

    const datos = JSON.parse(texto);

    return esValido(datos) ? datos : valorInicial;
  } catch {
    // Un JSON dañado no debe impedir que se abra la aplicación.
    return valorInicial;
  }
}

export function guardarLocal(clave, datos) {
  // El Context captura el error si el navegador no permite guardar.
  localStorage.setItem(clave, JSON.stringify(datos));
}
