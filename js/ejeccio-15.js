let count = 0;
const correcta = '1234567890';

function ingresar() {
  const password = String(document.getElementById("psw").value).trim() || '';
  let resultado;

  if(password == correcta){
    resultado = 'Correcta';
    count = 0;
  }else{
    resultado = 'Incorrecta';
    count++;
  }

  if(count == 5){
    document.getElementById("pista").textContent = 'pista: del 1 al 0';
  }
  
  document.getElementById("psw").value = '';
  document.getElementById("prefijo").textContent = 'La contraseña ingresada es: ';
  document.getElementById("resultado").textContent = resultado;
}