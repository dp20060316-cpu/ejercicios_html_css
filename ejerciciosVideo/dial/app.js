"use strict";

const PASO_GRADOS  = 90;             
const DURACION_MS  = 900;            
const RADIO_REL    = 0.147;          
const DEG_A_RAD    = Math.PI / 180;

const CARACTERISTICAS = [
  { titulo: "Camera",       detalle: "12MP, Wide Angle Lens",       icono: "imagenes/camera.png" },
  { titulo: "Processor",    detalle: "Snapdragon Octa-core 11nm",   icono: "imagenes/processor.png" },
  { titulo: "Display",      detalle: "6.5\" Mini-Drop Fullscreen",  icono: "imagenes/display.png" },
  { titulo: "Battery Life", detalle: "5000mAh, 720Hrs Standby",     icono: "imagenes/battery.png" },
];

const N = CARACTERISTICAS.length;
const estado = {
  tarjetas: [],
  angulo: 0,            
  destino: 0,           
  anim: null,           
};

const escena   = document.getElementById("escena");
const anillo   = document.getElementById("anillo");
const telefono = document.getElementById("telefono");

function suavizar(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function medirGeometria() {
  const e = escena.getBoundingClientRect();
  const t = telefono.getBoundingClientRect();
  return {
    cx: t.left + t.width / 2 - e.left,
    cy: t.top + t.height / 2 - e.top,
    r:  window.innerWidth * RADIO_REL,
  };
}

function dibujar() {
  const g = medirGeometria();

  estado.tarjetas.forEach((el, i) => {
    const theta = (estado.angulo - PASO_GRADOS * i) * DEG_A_RAD;
    const x = g.cx + g.r * Math.cos(theta);
    const y = g.cy + g.r * Math.sin(theta);

    el.style.transform =
      `translate(${x}px, ${y}px) rotate(${theta}rad) translate(0, -50%)`;
  });
}

function cuadro(ahora) {
  const a = estado.anim;
  if (!a) return;

  const t = Math.min(1, (ahora - a.inicio) / DURACION_MS);
  estado.angulo = a.desde + (a.hasta - a.desde) * suavizar(t);
  dibujar();

  if (t < 1) requestAnimationFrame(cuadro);
  else estado.anim = null;
}

function girar(pasos) {
  estado.destino += pasos * PASO_GRADOS;
  const eraNula = estado.anim === null;
  estado.anim = { desde: estado.angulo, hasta: estado.destino, inicio: performance.now() };
  if (eraNula) requestAnimationFrame(cuadro);
}

function crearTarjetas() {
  for (const c of CARACTERISTICAS) {
    const el = document.createElement("div");
    el.className = "tarjeta";
    el.innerHTML = `
      <img src="${c.icono}" alt="">
      <div><h1>${c.titulo}</h1><p>${c.detalle}</p></div>`;
    anillo.appendChild(el);
    estado.tarjetas.push(el);
  }
}

function main() {
  crearTarjetas();
  dibujar();

  document.getElementById("btnArriba").addEventListener("click", () => girar(-1));
  document.getElementById("btnAbajo").addEventListener("click",  () => girar(+1));

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp")   girar(-1);
    if (e.key === "ArrowDown") girar(+1);
  });

  window.addEventListener("resize", dibujar);
  telefono.addEventListener("load", dibujar);
}

main();
