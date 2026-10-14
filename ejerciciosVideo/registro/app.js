"use strict";
 // ---------------------------------------------------
const PASOS = [
  {
    titulo: "Paso 1: Datos personales",
    campos: [
      { id: "nombre",   etiqueta: "Nombre",   tipo: "text" },
      { id: "apellido", etiqueta: "Apellido", tipo: "text" },
    ],
  },
  {
    titulo: "Paso 2: Contacto",
    campos: [
      { id: "correo",   etiqueta: "Correo",   tipo: "email" },
      { id: "telefono", etiqueta: "Teléfono", tipo: "tel" },
    ],
  },
  {
    titulo: "Paso 3: Tu cuenta",
    campos: [
      { id: "clave",  etiqueta: "Contraseña (mín. 8)",  tipo: "password" },
      { id: "clave2", etiqueta: "Repite la contraseña", tipo: "password" },
    ],
  },
];

const ULTIMO   = PASOS.length - 1;
const MARGEN   = 22;

const estado = {
  actual: 0,
  datos: {},        
  puntos: [],       
};

const $ = (id) => document.getElementById(id);
const el = {
  form:      $("registro"),
  titulo:    $("titulo"),
  campos:    $("campos"),
  error:     $("error"),
  indicador: $("indicador"),
  btnAtras:  $("btnAtras"),
  btnSig:    $("btnSiguiente"),
  resumen:   $("resumen"),
  relleno:   null,   
};
// --------
function validarCampo(campo, valor) {
  if (valor === "") return `${campo.etiqueta} es obligatorio.`;

  if (campo.tipo === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor))
    return "El correo no tiene un formato válido.";

  if (campo.tipo === "tel" && !/^[0-9+\-\s()]{7,}$/.test(valor))
    return "El teléfono no es válido.";

  if (campo.id === "clave" && valor.length < 8)
    return "La contraseña debe tener al menos 8 caracteres.";

  if (campo.id === "clave2" && valor !== estado.datos.clave)
    return "Las contraseñas no coinciden.";

  return "";
}

function guardarPaso() {
  for (const c of PASOS[estado.actual].campos)
    estado.datos[c.id] = $(c.id).value.trim();
}

function validarPaso() {
  guardarPaso();   

  let mensaje = "";
  for (const campo of PASOS[estado.actual].campos) {
    const err = validarCampo(campo, estado.datos[campo.id]);
    $(campo.id).classList.toggle("malo", err !== "");
    if (err && !mensaje) mensaje = err;    
  }

  el.error.textContent = mensaje;
  return mensaje === "";
}

function construirIndicador() {
  el.relleno = document.createElement("div");
  el.relleno.className = "relleno";
  el.indicador.appendChild(el.relleno);

  PASOS.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "punto";
    b.setAttribute("aria-label", `Ir al paso ${i + 1}`);
    b.addEventListener("click", () => irA(i));
    el.indicador.appendChild(b);
    estado.puntos.push(b);
  });
}

function actualizarIndicador() {
  estado.puntos.forEach((p, i) => p.classList.toggle("activo", i <= estado.actual));

  const anchoUtil = el.indicador.clientWidth - MARGEN;
  el.relleno.style.width = (estado.actual / ULTIMO) * anchoUtil + "px";
}

function dibujarPaso() {
  const paso = PASOS[estado.actual];
  el.titulo.textContent = paso.titulo;
  el.campos.innerHTML = "";

  for (const c of paso.campos) {
    const input = document.createElement("input");
    input.id = c.id;
    input.type = c.tipo;
    input.placeholder = c.etiqueta;
    input.setAttribute("aria-label", c.etiqueta);
    input.value = estado.datos[c.id] ?? "";
    el.campos.appendChild(input);
  }

  el.error.textContent = "";
  el.btnAtras.classList.toggle("oculto", estado.actual === 0);
  el.btnSig.textContent = estado.actual === ULTIMO ? "Crear cuenta" : "Siguiente";
  actualizarIndicador();
  el.campos.querySelector("input").focus();
}

function mostrarResumen() {
  el.form.hidden = true;
  el.indicador.hidden = true;
  el.resumen.hidden = false;

  const d = estado.datos;
  el.resumen.innerHTML = `
    <h2>¡Listo, ${d.nombre}!</h2>
    <dl>
      <dt>Nombre completo</dt><dd>${d.nombre} ${d.apellido}</dd>
      <dt>Correo</dt><dd>${d.correo}</dd>
      <dt>Teléfono</dt><dd>${d.telefono}</dd>
    </dl>`;
}

function irA(destino) {
  if (destino === estado.actual) return;

  if (destino < estado.actual) {
    guardarPaso();
    estado.actual = destino;
    dibujarPaso();
    return;
  }

  while (estado.actual < destino) {
    if (!validarPaso()) return;
    estado.actual++;
    dibujarPaso();
  }
}

function alEnviar(e) {
  e.preventDefault();

  if (estado.actual === ULTIMO) {
    if (validarPaso()) mostrarResumen();
  } else {
    irA(estado.actual + 1);
  }
}

function main() {
  construirIndicador();
  el.form.addEventListener("submit", alEnviar);
  el.btnAtras.addEventListener("click", () => irA(estado.actual - 1));
  window.addEventListener("resize", actualizarIndicador);
  dibujarPaso();
}

main();
