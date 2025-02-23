
// validación de números

const edad = "22";

if (edad.trim() != "") {
    if (isNaN(edad)) {
        console.log("Debe ingresar un valor numérico!");
    }
    else {
        console.log("Felicidades tu edad es:", parseInt(edad));
    }

}
else {
    console.log("Ingresa un valor");
}