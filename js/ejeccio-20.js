function consumo() {
  const km = parseFloat(document.getElementById("distancia").value) || 0;
  const litros = parseFloat(document.getElementById("litros").value) || 0;

  const resultado = litros/km
  
  document.getElementById("prefijo").textContent = 'El consumo de Combustible es de :';
  document.getElementById("resultado").textContent = `${resultado} lts/km`;
}