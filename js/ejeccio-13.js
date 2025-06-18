let previo = '';
let op = '';

function operar() {
  const n = parseFloat(document.getElementById("num").value) || 0;
  
  if(previo != ''){

    let resultado;
    switch(op){
      case '+':
        resultado = previo + n;
        break;

      case '-':
        resultado = previo - n;
        break;
        
      case 'x':
        resultado = previo * n;
        break; 
        
      case '/':
        resultado = previo / n;
        break;

      default:
        resultado = previo;
        break;
    }

    document.getElementById("previo").textContent = previo+op+n+'='+resultado;
    previo = resultado;
  }else{
    previo = n;
    document.getElementById("previo").textContent = previo+op;
  }
  document.getElementById("num").value = '';
  
  
  //document.getElementById("prefijo").textContent = `El Número ${n} `;
  //document.getElementById("resultado").textContent = resultado;

}

function sumar(){
  operar();
  op = '+';
}


function restar(){
  operar();
  op = '-';
}


function multi(){
  operar();
  op = 'x';
}


function dividir(){
  operar();
  op = '/';
}

function igual(){
  operar();
  op = '';
}