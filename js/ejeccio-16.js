function sumarTiempos() {
  const t1 = String(document.getElementById('tiempo1').value);
  const t2 = String(document.getElementById('tiempo2').value);

  //division de los tiempos
  const [h1, m1, s1] = t1.split(":").map(Number);
  const [h2, m2, s2] = t2.split(":").map(Number);
  
  //segundos totales
  const st = (h1+h2)*3600+(m1+m2)*60+(s1+s2);

  h_resultado = Math.floor(st/3600);
  m_resultado = Math.floor((st-h_resultado*3600)/60);
  s_resultado = (st-h_resultado*3600-m_resultado*60);

  //console.log(`${h_resultado}:${m_resultado}:${s_resultado}`);
  
  const resultado = `${parseInt(h_resultado).toString().padStart(2,0)}:${parseInt(m_resultado).toString().padStart(2,0)}:${parseInt(s_resultado).toString().padStart(2,0)}`;
  
  document.getElementById("prefijo").textContent = 'Los dos corredores sumaron: ';
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("sufijo").textContent = ' con sus tiempos ';
}