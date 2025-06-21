function promedio() {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  const n3 = parseFloat(document.getElementById("num3").value) || 0;
  
  let prom = (n1+n2+n3)/3;
  
  document.getElementById("prefijo").textContent = 'El Promedio es: ';
  document.getElementById("resultado").textContent = prom.toFixed(2);
}