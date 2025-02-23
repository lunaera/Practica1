
let edadP = parseInt(prompt("Ingrese su edad:"));

try {
    if (isNaN(edadP)) {
        throw new Error("Por favor, ingrese una edad válida.");
    }
    if (edadP < 18) {
        throw new Error("Debes ser mayor de 18 años");
    }
    console.log("Bienvenido!");
} catch (error) {
    console.error(error.message);
}
