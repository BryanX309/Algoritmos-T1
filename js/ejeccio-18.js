function sumar() {
  const medida1 = parseFloat(document.getElementById("pie").value) * 0.3048 || 0;
  const medida2 = parseFloat(document.getElementById("mtrs").value) || 0;
  const resultado = medida1 + medida2;

  const metros = resultado;
  const millas = resultado/1609;
  const pulgadas = resultado*0.0254;
  const yardas = resultado* 1.09361;
  const pies = resultado* 3.28084;

  document.getElementById("metros").textContent = 'La suma en metros es: ';
  document.getElementById("suma_metros").textContent = `${metros.toFixed(2)} mts`;

  document.getElementById("millas").textContent = 'La suma en millas es: ';
  document.getElementById("suma_millas").textContent = `${millas.toFixed(4)} millas`;
  
  document.getElementById("pulgadas").textContent = 'La suma en pulgadas es: ';
  document.getElementById("suma_pulgadas").textContent = `${pulgadas.toFixed(2)} pulg`;
  
  document.getElementById("yardas").textContent = 'La suma en yardas es: ';
  document.getElementById("suma_yardas").textContent = `${yardas.toFixed(2)} yrds`;
  
  document.getElementById("pies").textContent = 'La suma en pies es: ';
  document.getElementById("suma_pies").textContent = `${pies.toFixed(2)} pies`;
}