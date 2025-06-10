function largo_texto() {
  const text = String(document.getElementById("txt").value) || '';

  //console.log(text);
  //console.log(text.length);
  
  document.getElementById("resultado").textContent = text.trim().length;
}