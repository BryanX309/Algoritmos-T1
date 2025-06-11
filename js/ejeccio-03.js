function multiplicar() {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  const resultado = n1 * n2;

  document.getElementById("resultado").textContent = 'Multiplicación: '+resultado;
}

function dividir() {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  let resultado;

  if(n2 == 0){
      resultado = 'Error';
  }else{
      resultado = n1 / n2;
  }
  
  //console.log(resultado);
  
  document.getElementById("resultado").textContent = 'Division: ' + resultado;
}