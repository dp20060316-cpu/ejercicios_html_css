// Listado 6-83: Creando números con un constructor
function ejemplo_6_83() {
  var valor = new Number(5);
  alert(valor);   // 5
}

// Listado 6-84: Números a partir de texto
function ejemplo_6_84() {
  var valor = new Number("5");
  alert(valor);   // 5
}

// Listado 6-85: Operaciones con objetos
function ejemplo_6_85() {
  var valor = new Number("5");
  var total = valor * 35;
  alert(total);   // 175
}

// Listado 6-86: Array con constructor
function ejemplo_6_86() {
  var lista = new Array(12, 35, 57, 8);
  alert(lista);   // 12,35,57,8
}

// Listado 6-87: Array vacío con constructor
function ejemplo_6_87() {
  var lista = new Array(2);
  alert(lista[0] + " - " + lista[1]);   // undefined - undefined
}

// Listado 6-88: length: cantidad de caracteres
function ejemplo_6_88() {
  var texto = "Hola Mundo";
  var mensaje = "El texto tiene " + texto.length + " caracteres";
  alert(mensaje);   // "El texto tiene 10 caracteres"
}

// Listado 6-89: Iterando sobre los caracteres
function ejemplo_6_89() {
  var texto = "Hola Mundo";
  var mensaje = "";
  for (var f = 0; f < texto.length; f++) {
    mensaje += texto[f] + " ";
  }
  alert(mensaje);   // "H o l a   M u n d o "
}

// Listado 6-90: trim(): quitar espacios
function ejemplo_6_90() {
  var texto = "Hola Mundo";
  var mensaje = "";
  for (var f = 0; f < texto.length; f++) {
    mensaje += texto[f] + " ";
  }
  mensaje = mensaje.trim();
  alert("[" + mensaje + "]");   // sin espacio al final
}

// Listado 6-91: Procesando una cadena
function ejemplo_6_91() {
  var texto = "Hola Mundo";
  var mensaje = "";
  var anterior = "";
  for (var f = 0; f < texto.length; f++) {
    if (mensaje != "") {
      anterior = texto[f - 1];
      if (anterior != " " && texto[f] != " ") {
        mensaje += ".";
      }
    }
    mensaje += texto[f];
  }
  alert(mensaje);   // "H.o.l.a M.u.n.d.o"
}

// Listado 6-92: toUpperCase(): a mayúsculas
function ejemplo_6_92() {
  var texto = "Hola Mundo";
  var mensaje = texto.toUpperCase();
  alert(mensaje);   // "HOLA MUNDO"
}

// Listado 6-93: substr(): copiar caracteres
function ejemplo_6_93() {
  var texto = "Hola Mundo";
  var palabra = texto.substr(0, 4);
  alert(palabra);   // "Hola"
}

// Listado 6-94: substr() hasta el final
function ejemplo_6_94() {
  var texto = "Hola Mundo";
  var palabra = texto.substr(5);
  alert(palabra);   // "Mundo"
}

// Listado 6-95: Índices negativos
function ejemplo_6_95() {
  var texto = "Hola Mundo";
  var palabra = texto.substr(-5);
  alert(palabra);   // "Mundo"
}

// Listado 6-96: substring(): entre dos índices
function ejemplo_6_96() {
  var texto = "Hola Mundo";
  var palabra = texto.substring(5, 7);
  alert(palabra);   // "Mu"
}

// Listado 6-97: split(): obtener las palabras
function ejemplo_6_97() {
  var texto = "Hola Mundo";
  var palabras = texto.split(" ");
  alert(palabras[0] + " / " + palabras[1]);   // "Hola / Mundo"
}

// Listado 6-98: startsWith(): buscar al comienzo
function ejemplo_6_98() {
  var texto = "Hola Mundo";
  if (texto.startsWith("Ho")) {
    alert("El texto comienza con 'Ho'");
  }
}

// Listado 6-99: includes(): buscar en todo el texto
function ejemplo_6_99() {
  var texto = "Hola Mundo";
  if (texto.includes("l")) {
    alert("El texto incluye la letra L");
  }
}

// Listado 6-100: indexOf(): ubicación de un texto
function ejemplo_6_100() {
  var texto = "Hola Mundo";
  var indice = texto.indexOf("Mundo");
  alert("La palabra comienza en el índice " + indice);   // 5
}

// Listado 6-101: replace(): reemplazar texto
function ejemplo_6_101() {
  var texto = "Hola Mundo";
  var textonuevo = texto.replace("Mundo", "Planeta");
  alert(textonuevo);   // "Hola Planeta"
}

// Ejemplo A-1: push(), pop(), unshift(), shift()
function ejemplo_A_1() {
  var lista = [12, 35, 57];
  lista.push(8);          // agrega al final
  lista.unshift(1);       // agrega al comienzo
  alert(lista);           // 1,12,35,57,8
  var ultimo = lista.pop();     // quita el último
  var primero = lista.shift();  // quita el primero
  alert("Quitados: " + primero + " y " + ultimo + " → " + lista);
}

// Ejemplo A-2: concat(), splice() y slice()
function ejemplo_A_2() {
  var a = [1, 2, 3];
  var b = [4, 5];
  var unidos = a.concat(b);
  alert(unidos);                           // 1,2,3,4,5
  var quitados = unidos.splice(1, 2, "x"); // desde índice 1 quita 2 y agrega "x"
  alert(unidos + "  (quitados: " + quitados + ")");
  var copia = unidos.slice(0, 2);          // índices 0 y 1
  alert(copia);
}

// Ejemplo A-3: indexOf(), filter() y every()
function ejemplo_A_3() {
  var notas = [70, 45, 90, 82, 58];
  alert("El 90 está en el índice " + notas.indexOf(90));
  var aprobadas = notas.filter(function(valor) {
    return valor >= 60;
  });
  alert("Aprobadas: " + aprobadas);
  var todas = notas.every(function(valor) { return valor >= 60; });
  var alguna = notas.some(function(valor) { return valor < 50; });
  alert("¿Todas aprobadas? " + todas + " | ¿Alguna menor a 50? " + alguna);
}

// Ejemplo A-4: map(), sort(), reverse() y join()
function ejemplo_A_4() {
  var precios = [30, 5, 120, 18];
  var conImpuesto = precios.map(function(valor) {
    return valor * 1.18;
  });
  alert(conImpuesto.join(" | "));
  precios.sort(function(a, b) { return a - b; });
  alert("Ordenados: " + precios.join(", "));
  alert("Invertidos: " + precios.reverse().join(", "));
}

// Ejemplo D-1: Fecha actual y sus partes
function ejemplo_D_1() {
  var hoy = new Date();
  var dia = hoy.getDate();
  var mes = hoy.getMonth() + 1;   // los meses van de 0 a 11
  var anio = hoy.getFullYear();
  alert("Hoy es " + dia + "/" + mes + "/" + anio);
  alert("Hora: " + hoy.getHours() + ":" + hoy.getMinutes());
}

// Ejemplo D-2: Diferencia entre fechas
function ejemplo_D_2() {
  var inicio = new Date(2026, 9, 13);   // 13 de octubre de 2026
  var fin = new Date(2026, 11, 25);     // 25 de diciembre de 2026
  var ms = fin - inicio;
  var dias = Math.round(ms / (1000 * 60 * 60 * 24));
  alert("Faltan " + dias + " días para Navidad");
}

// Ejemplo M-1: Redondeo, máximo y potencias
function ejemplo_M_1() {
  alert(Math.round(4.6) + " " + Math.floor(4.6) + " " + Math.ceil(4.1)); // 5 4 5
  alert("Máximo: " + Math.max(12, 35, 8) + " | Mínimo: " + Math.min(12, 35, 8));
  alert("2 elevado a 8 = " + Math.pow(2, 8) + " | raíz de 81 = " + Math.sqrt(81));
  alert("Área de un círculo de radio 3: " + (Math.PI * 3 * 3).toFixed(2));
}

// Ejemplo M-2: Número aleatorio (dado)
function ejemplo_M_2() {
  var dado = Math.floor(Math.random() * 6) + 1;
  alert("Salió el " + dado);
}

// Ejemplo W-1: Datos de la ventana y temporizadores
function ejemplo_W_1() {
  alert("La ventana mide " + window.innerWidth + " x " + window.innerHeight + " px");
  window.setTimeout(function() {
    alert("Esto aparece 2 segundos después");
  }, 2000);
}

// Ejemplo W-2: Contador con setInterval()
function ejemplo_W_2() {
  var cuenta = 0;
  var reloj = setInterval(function() {
    cuenta++;
    alert("Segundo " + cuenta);
    if (cuenta == 3) {
      clearInterval(reloj);
      alert("Detenido");
    }
  }, 1000);
}

// Ejemplo DOC-1: getElementById() y querySelector()
function ejemplo_DOC_1() {
  var parrafo = document.getElementById("parrafo-doc1");
  alert(parrafo.textContent);
  var primera = document.querySelector(".nota-doc1");
  alert("querySelector: " + primera.textContent);
  var todas = document.querySelectorAll(".nota-doc1");
  alert("Hay " + todas.length + " notas");
}

// Ejemplo E-1: Modificar contenido y estilos
function ejemplo_E_1() {
  var elemento = document.getElementById("parrafo-e1");
  elemento.innerHTML = "Contenido <strong>cambiado</strong> desde JavaScript";
  elemento.style.color = "white";
  elemento.style.background = "#1d5fb8";
  elemento.style.padding = "6px 10px";
  alert("Nuevo texto: " + elemento.textContent);
}

// Ejemplo E-2: Leer y cambiar atributos
function ejemplo_E_2() {
  var campo = document.getElementById("campo-e2");
  alert("Valor actual: " + campo.value);
  campo.setAttribute("placeholder", "Escribe tu nombre");
  campo.value = "";
  alert("placeholder: " + campo.getAttribute("placeholder"));
}

// Ejemplo E-3: createElement() y appendChild()
function ejemplo_E_3() {
  var frutas = ["Mango", "Piña", "Guineo"];
  var contenedor = document.getElementById("contenedor-e3");
  var lista = document.createElement("ul");
  for (var f = 0; f < frutas.length; f++) {
    var item = document.createElement("li");
    item.textContent = frutas[f];
    lista.appendChild(item);
  }
  contenedor.appendChild(lista);
  alert("Se crearon " + lista.children.length + " elementos <li>");
}
