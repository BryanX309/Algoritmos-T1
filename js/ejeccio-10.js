function area() {
  const r = parseFloat(document.getElementById("radio").value) || 0;
  
  const area = Math.round(r*r*Math.PI*100)/100;
  
  document.getElementById("prefijo").textContent = `el Area del circulo es: `;
  document.getElementById("resultado").textContent = `${area}`;
  document.getElementById("sufijo").textContent = ` cm²`;
}