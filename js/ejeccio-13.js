const dolar = 26.15

document.getElementById("dolar").textContent = dolar;

function dolares() {
  const monto = parseFloat(document.getElementById("monto").value) || 0;
  let convert;

  if(monto != 0){
    convert = monto * dolar;
  }
  
  document.getElementById("prefijo").textContent = `La Conversion de $${monto} a Lempiras es de : `;
  document.getElementById("resultado").textContent = `L. ${convert.toFixed(2)}`;

}