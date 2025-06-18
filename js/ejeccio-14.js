function concatenar() {
  const text1 = String(document.getElementById("txt1").value) || '';
  const text2 = String(document.getElementById("txt2").value) || '';
  let resultado;

  if(text1 == text2){
    resultado = 'Iguales';
  }else{
    resultado = 'Diferentes';
  }
  
  document.getElementById("prefijo").textContent = 'Las Cadenas de texto son ';
  document.getElementById("resultado").textContent = resultado;
}