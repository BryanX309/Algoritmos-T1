function area_triangulo() {
  const n1 = parseFloat(document.getElementById("base").value) || 0;
  const n2 = parseFloat(document.getElementById("altura").value) || 0;
  const resultado = n1 * n2 / 2;

  document.getElementById("resultado").textContent = resultado;
}