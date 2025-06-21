function compra() {
  const precio = parseFloat(document.getElementById("precio").value) || 0;
  
  document.getElementById("subtotal").textContent = (precio).toFixed(2);
  document.getElementById("isv").textContent = (precio*0.15).toFixed(2);
  document.getElementById("total").textContent = (precio*1.15).toFixed(2);
}

compra();