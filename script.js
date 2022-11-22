var retoContenedor = document.querySelectorAll(".retoContenedor");
var borrarButton = document.querySelectorAll(".borrarResultados");
var mostrarButton = document.querySelectorAll(".mostrarResultados");

function borrarResultado(contenedor) {
  retoContenedor[contenedor].innerHTML = "";
}

// Reto #0
mostrarButton[0].addEventListener("click", () => {
  retoContenedor[0].innerHTML = "";
  for(let i = 0; i < 100; i++) {
    if (((i + 1) % 3 == 0) && ((i + 1) % 5 == 0)) {
      retoContenedor[0].innerHTML += "fizzbuzz <br><br>";
    } else if ((i + 1) % 3 == 0) {
      retoContenedor[0].innerHTML += "fizz <br><br>";
    } else if ((i + 1) % 5 == 0) {
      retoContenedor[0].innerHTML += "buzz <br><br>";
    } else {
      retoContenedor[0].innerHTML += (i + 1) + "<br><br>";
    }
  }
});

borrarButton[0].addEventListener("click", () => {
  borrarResultado(0);
});

// Reto #1
function isAnagrama(primerPalabra, segundaPalabra) {
  let primerPalabraArray = primerPalabra.toLowerCase().split("").sort().join("");
  let segundaPalabraArray = segundaPalabra.toLowerCase().split("").sort().join("");

  primerPalabraArray === segundaPalabraArray ? retoContenedor[1].innerHTML = "Es un anagrama" : retoContenedor[1].innerHTML = "No es un anagrama";
}

mostrarButton[1].addEventListener("click", () => {
  retoContenedor[1].innerHTML = "";

  let primerPalabra = document.getElementById("palabra1").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  let segundaPalabra = document.getElementById("palabra2").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  if (primerPalabra.length == 0 && segundaPalabra.length == 0) {
    retoContenedor[1].innerHTML = "Ingresa las palabras";
  } else if(primerPalabra.length == 0 || segundaPalabra.length == 0) {
    retoContenedor[1].innerHTML = "Ingresa otra palabra";
  } else if (primerPalabra.length != segundaPalabra.length) {
    retoContenedor[1].innerHTML = "No es un anagrama";
  } else if(primerPalabra.toLowerCase() === segundaPalabra.toLowerCase()) {
    retoContenedor[1].innerHTML = "No es un anagrama";
  } else {
    isAnagrama(primerPalabra, segundaPalabra);
  }
});

borrarButton[1].addEventListener("click", () => {
  document.getElementById("palabra1").value = "";
  document.getElementById("palabra2").value = "";
  borrarResultado(1);
});


// Reto #2
function fibonacci(numTerminos, inicioSerie) {
  let suma = 0;

  retoContenedor[2].innerHTML = `${inicioSerie[0]}, ${inicioSerie[1]}`;

  for (let i = 0; i < numTerminos - 2; i++) {
    suma = inicioSerie[i] + inicioSerie[i + 1];
    inicioSerie.push(suma);
    retoContenedor[2].innerHTML += `, ${inicioSerie[i + 2]}`;
  }
}

mostrarButton[2].addEventListener("click", () => {
  let numTerminos = document.getElementById("numeroTerminos").value;
  let inicioSerie = [0, 1];

  if (numTerminos < 1) {
    retoContenedor[2].innerHTML = "Ingrese un número mayor a 0";
  } else if (numTerminos == 1) {
    retoContenedor[2].innerHTML = inicioSerie[0];
  } else if (numTerminos == 2) {
    retoContenedor[2].innerHTML = `${inicioSerie[0]}, ${inicioSerie[1]}`;
  } else {
    fibonacci(numTerminos, inicioSerie);
  }
});

borrarButton[2].addEventListener("click", () => {
  document.getElementById("numeroTerminos").value = "";
  borrarResultado(2);
});

// Reto #3
function isPrimo(numero) {
  let divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      divisores.push(i);
    }
  }

  if (divisores.length == 2) {
    if (divisores.includes(1) && divisores.includes(numero)) {
      retoContenedor[3].innerHTML += `${numero}, `;
    }
  }
}

mostrarButton[3].addEventListener("click", () => {
  for (let i = 1; i <= 100; i++) {
    isPrimo(i);
  }
});

borrarButton[3].addEventListener("click", () => {
  borrarResultado(3);
});