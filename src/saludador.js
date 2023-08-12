const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const genero = document.querySelector("#genero-input");
const edad = document.querySelector("#edad-input");

function saludarSegunEdad(edad){
    return (edad>=11 && edad<=25) ? "joven ": (edad>=26) ? "señor(a)" : " ";
}
 
function saludarSegunGenero(genero, tipo){
    switch (tipo){
      case "joven ":
        return (genero == "mujer") ? "señorita " : "joven ";
      case "señor(a)":
        return (genero == "mujer") ? "señora " : "señor ";
    }
}

 form.addEventListener("submit", (event) => {
    let saludarPorEdad = saludarSegunEdad(edad.value);
    let saludarPorGenero = saludarSegunGenero(genero.value, saludarPorEdad);
    alert("Hola " + saludarPorGenero +nombre.value);
 })