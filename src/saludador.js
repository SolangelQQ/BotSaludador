const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const genero = document.querySelector("#genero-input");
const edad = document.querySelector("#edad-input");
const fecha = new Date();
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

function saludarSegunHora(hora){
    return (hora>=4 && hora<=12) ? "buen dia ":
    (hora >= 13 && hora <=18) ? "buenas tardes " :"buenas noches ";
}

 form.addEventListener("submit", (event) => {
    let saludarPorEdad = saludarSegunEdad(edad.value);
    let saludarPorGenero = saludarSegunGenero(genero.value, saludarPorEdad);
    let saludarPorHora = saludarSegunHora(fecha.getHours());
    alert("Hola " + saludarPorHora +saludarPorGenero +nombre.value);
 })

