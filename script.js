document.getElementById("primerHola").textContent = "Adiós";

document.getElementById("naranja").style.color = "orange";

document.getElementById("clic").addEventListener("click", function() {
    this.style.color = "brown";
});

const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    boton.textContent = "¡Hiciste clic!";
    boton.style.backgroundColor = "blue";
    boton.style.color = "white";
});