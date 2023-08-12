const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const genero = document.querySelector("#genero-input");

 function saludarSegunGenero(genero){
   switch (genero){
     case "hombre":
       return "Señor ";

     case "mujer":
       return "Señora ";
   }
 }

 form.addEventListener("submit", (event) => {
    let saludarPorGenero = saludarSegunGenero(genero.value);
    alert("Hola " + saludarPorGenero +nombre.value);
 })