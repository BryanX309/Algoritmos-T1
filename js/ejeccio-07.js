function evaluar() {
  const n = String(document.getElementById("num").value) || 0;
  let resultado="";
  
  if(n % 2 == 0){
    resultado = 'Par';
  }else{
    resultado = 'Impar';
  }

  //console.log(text);
  //console.log(text.length);
  
  document.getElementById("prefijo").textContent = 'El Numero ingresado es: ';
  document.getElementById("resultado").textContent = resultado;
}