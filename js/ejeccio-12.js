function operar(op) {
  const num_1 = parseFloat(document.getElementById("num_1").value) || 0;
  const num_2 = parseFloat(document.getElementById("num_2").value) || 0;
  let result = 0;
  
  switch(op){
    case '+':
      result = num_1 + num_2;
      break;
      
    case '-':
      result = num_1 - num_2;
      break;
      
    case 'x':
      result = num_1 * num_2;
      break;
      
    case '÷':
      if(num_2 != 0){
        result = num_1 / num_2;
      }else{
        result = 'ERROR';
      }
      break;

    default:
      result = 'ERROR';
      break;
  }

  document.getElementById("num_1").value = ``;
  document.getElementById("num_2").value = ``;
  document.getElementById("prefijo").textContent = `El resultado de ${num_1} ${op} ${num_2} = `;
  document.getElementById("resultado").textContent = result.toFixed(2);
}

function sumar(){
  operar('+');
}


function restar(){
  operar('-');
}


function multi(){
  operar('x');
}


function dividir(){
  operar('÷');
}