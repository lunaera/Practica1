
// Asignación de variable
let numero = 56;

// Expresión aritmética
let multiplicacion = (23 * 32);
let x = 2;
let expresion = 5 * (x) - 3 * (x) + 1;

// Llamada a función
sumar();
//calcularPromedio();

// estructura de una funcion
function sumar(x, y) {

}

// Estructura de una función con valor de retorno
function getPromedio() {

    return promedio, x, y;
}

function getMessage() {
    return "Hola";
}

// Estructura selectiva simple

let condicion, condition = 5 > 2;
if (condicion) {

}

// Estructura selectiva doble
if (condicion) {

} else {

}

// Estructura selectiva anidado
if (condicion) {
    if (condition) {

    } else {

    }
}
else {

}

// Estructura selectiva multiple
if (condicion) {

}
else if (condicion) {

}
else if (condicion) {

}

// Bucles
for (let i = 1; i <= 10; i++) {

}


// Estructura de una clase

class MiClase {
    nombre = "Erahin";
    edad = "26";

    constructor(apellidoP, apellidoM, gender) {
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.gender = "F";
    }
}

// Manipulación de Objetos y propiedades

MiClase.telefono = "9511940403";
//console.log(MiClase.telefono);

// Creación de objeto forma común y sencilla

const objVehiculo = {
    color: "rojo",
    modelo: "Vento",
    marca: "Ferrari",
    km: 345,
    mostrarDatos: function () {
        console.log("Yo muestro los datos!");
    }
};

objVehiculo.mostrarDatos();
console.log(objVehiculo.modelo);

// Creación de objeto usando un constructor new Object()

const electronico = new Object();
electronico.marca = "Iphone";
electronico.modelo = "7789";
electronico.ram = 12;
electronico.dd = 256;
electronico.getModelo = function () {
    console.log("El modelo del celular es: " + this.modelo);
}

console.log(electronico);
electronico.getModelo();
console.log(electronico.marca);

//creación de objeto usando una clase ES6

class Proyecto {
    constructor(nombre, duracion, responsable, costo, tipoProyecto) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.responsable = responsable;
        this.costo = costo;
        this.tipoProyecto = tipoProyecto;
    }

    getNombreProyecto() {
        // return this.nombre; devolver solo el dato
        return `El nombre del proyecto es ${this.nombre}`;
    }
}

const proyecto1 = new Proyecto();
console.log(proyecto1);
const proyecto2 = new Proyecto("Vivienda", 8, "Keyla");
console.log(proyecto2);
console.log(proyecto2.getNombreProyecto());