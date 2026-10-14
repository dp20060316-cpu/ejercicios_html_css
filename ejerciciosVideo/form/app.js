"use strict";

const form      = document.getElementById("wizard");
const pasos     = Array.from(form.querySelectorAll(".paso"));
const puntos    = Array.from(document.querySelectorAll(".punto"));
const relleno   = document.getElementById("relleno");
const exito     = document.getElementById("exito");
const barra     = document.getElementById("progreso");

const TOTAL = pasos.length;

const estado = { actual: 0 };

function validarPaso(idx) {
  const paso   = pasos[idx];
  const inputs = paso.querySelectorAll("input[required]");
  let ok = true;

  inputs.forEach((inp) => {
    const vacio = inp.value.trim() === "";
    inp.classList.toggle("invalido", vacio);
    if (vacio) ok = false;
  });

  let msg = paso.querySelector(".mensaje-error");
  if (!ok && !msg) {
    msg = document.createElement("p");
    msg.className = "mensaje-error";
    msg.textContent = "Please fill out all required fields.";
    paso.prepend(msg);
  } else if (ok && msg) {
    msg.remove();
  }
  return ok;
}

function dibujar() {
  pasos.forEach((p, i) => p.classList.toggle("activo", i === estado.actual));
  puntos.forEach((p, i) => p.classList.toggle("activo", i <= estado.actual));

  const anchoUtil = barra.clientWidth - 22;
  relleno.style.width = (estado.actual / (TOTAL - 1)) * anchoUtil + "px";
}

function irA(destino) {
  if (destino === estado.actual) return;
  if (destino > estado.actual && !validarPaso(estado.actual)) return;
  estado.actual = Math.max(0, Math.min(TOTAL - 1, destino));
  dibujar();
}

form.addEventListener("click", (e) => {
  const accion = e.target.dataset.accion;
  if (accion === "siguiente") irA(estado.actual + 1);
  if (accion === "atras")     irA(estado.actual - 1);
});

puntos.forEach((p) =>
  p.addEventListener("click", () => irA(Number(p.dataset.ir)))
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validarPaso(estado.actual)) return;
  exito.hidden = false;
});

window.addEventListener("resize", dibujar);

dibujar();
