function Cel_a_Fah() {
  const temp = parseFloat(document.getElementById("temp").value) || 0;
  
  let convert = (temp * 9/5)+32;
  
  document.getElementById("prefijo").textContent = `${temp}°C en Grados Fahrenheit es: `;
  document.getElementById("resultado").textContent = `${convert}°F`;
}

function Fah_a_Cel() {
  const temp = parseFloat(document.getElementById("temp").value) || 0;
  
  let convert = (temp-32)* 5/9;
  
  document.getElementById("prefijo").textContent = `${temp}°F en Grados Celsius es: `;
  document.getElementById("resultado").textContent = `${convert}°C`;
}