function distribuir() {
  const tanque1 = parseFloat(document.getElementById("lts").value) || 0;
  const tanque2 = parseFloat(document.getElementById("yrds").value) * 764.555|| 0; //lo convierte en litros para manejar la misma unidad de medida
  const resultado = tanque1 + tanque2;

  const litros = resultado;
  const metro_cu = resultado * 0.001;
  const pie_cu = resultado * 0.0353147;
  const yarda_cu = resultado * 0.00130795;

  document.getElementById("dom_litros").textContent = (litros * 0.75).toFixed(2)+' lts';
  document.getElementById("dom_metros_cu").textContent = (metro_cu * 0.75).toFixed(2)+ 'm³';
  document.getElementById("dom_pies_cu").textContent = (pie_cu * 0.75).toFixed(2)+' ft³';
  document.getElementById("dom_yarda_cu").textContent = (yarda_cu * 0.75).toFixed(2)+' yrds³';

  document.getElementById("riego_litros").textContent = (litros * 0.25).toFixed(2)+' lts';
  document.getElementById("riego_metros_cu").textContent = (metro_cu * 0.25).toFixed(2)+' m³';
  document.getElementById("riego_pies_cu").textContent = (pie_cu * 0.25).toFixed(2)+' ft³';
  document.getElementById("riego_yarda_cu").textContent = (yarda_cu * 0.25).toFixed(2)+' yrds³';
}

distribuir();