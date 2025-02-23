
// Convertir cadena JSON en un objeto

let jsonString = '{"Nombre":"Bulbasor", "poder":"Hoja afilada","habilidad":"Absorver"}';
let objPokemon = JSON.parse(jsonString);

//console.log(objPokemon.Nombre);

// parseInt
let edad = parseFloat("45.56");
//console.log(edad);

// Fecha en milisegundos

const birthday = "2001-05-22";
let fecha = Date.parse(birthday);
// console.log(fecha);

let msg = "F";
if (msg != null && msg.length === 1 && msg != " ") {
    let caracter = msg.charAt(0);
    console.log("Tu caracter es: ", caracter);
}

else {
    console.log("Ingresa un valor válido");
}
