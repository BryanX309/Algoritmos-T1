function sumar() {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  const resultado = n1 + n2;

  document.getElementById("resultado").textContent = resultado;
}