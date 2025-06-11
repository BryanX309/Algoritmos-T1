function primo() {
  const n = parseFloat(document.getElementById("num").value) || 0;
  let c = 0;
  let resultado
  for(let i = 1; i<=Math.abs(n); i++){
    if(n%i==0){
      c++;
    }
  }

  if(c <= 2){
    resultado = "es Primo";
  }else{
    resultado = "no es Primo";
  }
  
  document.getElementById("prefijo").textContent = `El Número ${n} `;
  document.getElementById("resultado").textContent = resultado;
  //document.getElementById("sufijo").textContent = ` cm²`;
}