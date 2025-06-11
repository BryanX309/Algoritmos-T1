function concatenar() {
  const nombre_1 = String(document.getElementById("nom_1").value) || '';
  const nombre_2 = String(document.getElementById("nom_2").value) || '';
  const apellido_1 = String(document.getElementById("ape_1").value) || '';
  const apellido_2 = String(document.getElementById("ape_2").value) || '';

  concatenado = nombre_1.trim() +" "+ nombre_2.trim() +" "+ apellido_1.trim() +" "+ apellido_2.trim();
  //console.log(text);
  //console.log(text.length);
  
  document.getElementById("resultado").textContent = concatenado;
  document.getElementById("prefijo").textContent = 'El Nombre de: ';
  document.getElementById("sufijo").textContent = ' ha sido Ingresado Exitosamente';
}