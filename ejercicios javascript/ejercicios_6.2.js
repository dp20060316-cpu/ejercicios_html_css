 // Listado 6-50: Declarando funciones
    function ejemplo_6_50() {
      function mostrarMensaje() {
        alert("Soy una función");
      }
      mostrarMensaje();
    }

    // Listado 6-51: Procesando datos con funciones
    function ejemplo_6_51() {
      var total = 5;
      function calcularValores() {
        total = total * 2;
      }
      for (var f = 0; f < 10; f++) {
        calcularValores();
      }
      alert("El total es: " + total);   // "El total es: 5120"
    }

    // Listado 6-52: Variables globales y locales
    function ejemplo_6_52() {
      var variableGlobal = 5;
      function mifuncion() {
        var variableLocal = "El valor es ";
        alert(variableLocal + variableGlobal);   // "El valor es 5"
      }
      mifuncion();
      alert(variableLocal);   // Error: no existe fuera de la función
    }

    // Listado 6-53: Dos variables con el mismo nombre
    function ejemplo_6_53() {
      var mivariable = 5;
      function mifuncion() {
        var mivariable = "Esta es una variable local";
        alert(mivariable);
      }
      mifuncion();
      alert(mivariable);
    }

    // Listado 6-54: Enviando un valor a una función
    function ejemplo_6_54() {
      function mifuncion(valor) {
        alert(valor);
      }
      mifuncion(5);
    }

    // Listado 6-55: Misma función, diferentes valores
    function ejemplo_6_55() {
      function mifuncion(valor) {
        alert(valor);
      }
      mifuncion(5);
      mifuncion(25);
    }

    // Listado 6-56: Enviando el valor de una variable
    function ejemplo_6_56() {
      var contador = 100;
      function mifuncion(valor) {
        alert(valor);
      }
      mifuncion(contador);
    }

    // Listado 6-57: Enviando múltiples valores
    function ejemplo_6_57() {
      var contador = 100;
      var items = 5;
      function mifuncion(valor1, valor2) {
        var total = valor1 + valor2;
        alert(total);   // 105
      }
      mifuncion(contador, items);
    }

    // Listado 6-58: Devolviendo valores con return
    function ejemplo_6_58() {
      var contador = 100;
      var items = 5;
      function mifuncion(valor1, valor2) {
        var total = valor1 + valor2;
        return total;
      }
      var resultado = mifuncion(contador, items);
      alert(resultado);   // 105
    }

    // Listado 6-59: Devolviendo diferentes valores
    function ejemplo_6_59() {
      var contador = 100;
      var items = 5;
      function mifuncion(valor1, valor2) {
        var total = valor1 + valor2;
        if (total > 100) {
          return total;
        } else {
          return 0;
        }
      }
      var resultado = mifuncion(contador, items);
      alert(resultado);   // 105
    }

    // Listado 6-60: Declarando funciones anónimas
    function ejemplo_6_60() {
      var mifuncion = function(valor) {
        valor = valor * 2;
        return valor;
      };
      var total = 2;
      for (var f = 0; f < 10; f++) {
        total = mifuncion(total);
      }
      alert("El total es " + total);   // "El total es 2048"
    }

    // Listado 6-61: Ejecutando funciones anónimas al instante
    function ejemplo_6_61() {
      var mivalor = function(valor) {
        valor = valor * 2;
        return valor;
      }(35);
      alert("El valor es " + mivalor);   // "El valor es 70"
    }

    // Listado 6-62: isNaN(): ¿es un número?
    function ejemplo_6_62() {
      var mivalor = "Hola";
      if (isNaN(mivalor)) {
        alert(mivalor + " no es un número");
      } else {
        alert(mivalor + " es un número");
      }
    }

    // Listado 6-63: parseInt(): texto a número
    function ejemplo_6_63() {
      var mivalor = "32";
      if (isNaN(mivalor)) {
        alert(mivalor + " no es un número");
      } else {
        var numero = parseInt(mivalor);
        numero = numero * 10;
        alert("El número es: " + numero);   // "El número es: 320"
      }
    }

    // Listado 6-64: encodeURIComponent() para URLs
    function ejemplo_6_64() {
      var nombre = "Juan Perez";
      var codificado = encodeURIComponent(nombre);
      var miURL = "http://www.ejemplo.com/contacto.html?nombre=" + codificado;
      alert(miURL);
    }