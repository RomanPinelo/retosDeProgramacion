var reto1Button = document.getElementById("reto1Button");
var retoContenedor = document.querySelectorAll(".retoContenedor");
var borrarButton = document.querySelectorAll(".borrarResultados");

function borrarResultado(contenedor) {
  retoContenedor[contenedor].innerHTML = "";
}

reto1Button.addEventListener("click", () => {
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