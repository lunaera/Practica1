

let num = 5;
let contador = 1;
let seri = "";
for (let i = 1; i <= num; i++) {
    serie = contador + seri;
    console.log(seri);
    contador += 2;
}


let edad = 30;

switch (true) {
    case edad < 4: console.log("Tu entras gratis"); break;
    case edad >= 4 && edad <= 18: console.log("Tu pagas $50.00"); break;
    default: if (edad > 18 && edad < 100) {
        console.log("Tu pagas $100.00");
    }
    else {
        console.log("edad no apto para videojuegos!");
    }
}


// Pedir la puntuación al usuario y convertirla a número
let puntuacion = 0.5;
const montoBase = 2000;
let nivel = "";
let bono;;

switch (puntuacion) {
    case 0.0: bono = 0; nivel = "Inaceptable"; break;
    case 0.4: bono = puntuacion * 2000; nivel = "Aceptable"; break;
    default:
        if (puntuacion >= 0.6) {
            bono = puntuacion * 2000;
            nivel = "Meritorio";
        }
        else {
            bono = 0;
            nivel = "Puntuación inválida";
        }
        break;
}

console.log(`
    puntuación: ${puntuacion} 
    bono: ${bono} 
    nivel: ${nivel} 
    total: ${montoBase + bono}`);

let n = 16;
let serie = "";

for (let i = 1; i <= n; i += 2) {
    serie += i;
    if (i < n - 1) {
        serie += ",";
    }
}
console.log(serie);

let serie2 = "";
for (let j = n; j >= 0; j--) {
    serie2 += j;
    if (j > 0) {
        serie2 += ",";
    }
}
console.log(serie2);


// ejercicio en clase 
const word = "Erahin pacheco  luna";
let serieWord = "";
for (let i = word.length; i >= 0; i--) {
    serieWord += word.charAt(i);
}
console.log(serieWord);


// ejercicio 11

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


// ejercicio 12
let suma = 0;

for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`));
    try {
        if (isNaN(calificacion)) {
            throw new Error("Por favor, ingrese una calificación válida.");
        }
        suma += calificacion;
    } catch (error) {
        console.log(error.message);
        i--; // Volver a preguntar la misma calificación
    }
}

try {
    let promedio = suma / 5;
    if (promedio < 7) {
        throw new Error("Reprobado");

    }
    console.log(`El promedio es: ${promedio}`);


} catch (error) {
    console.log(error.message);
}


// ejercicio 13

let contraseña = prompt("Ingrese su contraseña:");

try {
    if (contraseña.length >= 8 && /[A-Z]/.test(contraseña) && /[a-z]/.test(contraseña) && /\d/.test(contraseña)) {
        console.log("Contraseña válida!");
    } else {
        throw new Error("Contraseña inválida!");
    }
} catch (error) {
    console.error(error.message);
}

// ejercicio 14
let figura = prompt("Ingrese el tipo de figura geométrica (cuadrado, rectángulo, triángulo, círculo):");

try {
    switch (figura) {
        case "cuadrado":
            let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
            console.log(`El área del cuadrado es ${lado * lado}`);
            break;
        case "rectángulo":
            let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
            let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
            console.log(`El área del rectángulo es ${base * altura}`);
            break;
        case "triángulo":
            let baseTriangulo = parseFloat(prompt("Ingrese la base del triángulo:"));
            let alturaTriangulo = parseFloat(prompt("Ingrese la altura del triángulo:"));
            console.log(`El área del triángulo es ${(baseTriangulo * alturaTriangulo) / 2}`);
            break;
        case "círculo":
            let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
            console.log(`El área del círculo es ${Math.PI * radio * radio}`);
            break;
        default:
            throw new Error("Tipo de figura inválida!");
    }
} catch (error) {
    console.error(error.message);
}


// ejercicio 15

let correo = prompt("Ingrese su correo electrónico:");

try {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(correo)) {
        throw new Error("Correo electrónico inválido.");
    }
    console.log("Correo electrónico válido.");
} catch (error) {
    console.log(error.message);
}


// ejercicio 16

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

while (true) {
    let numeroUsuario = parseInt(prompt("Adivine el número (entre 1 y 100):"));
    intentos++;

    try {
        if (isNaN(numeroUsuario)) {
            throw new Error("Por favor, ingrese un número válido.");
        }
        if (numeroUsuario < 1 || numeroUsuario > 100) {
            throw new Error("Por favor, ingrese un número entre 1 y 100.");
        }
        if (numeroUsuario === numeroAleatorio) {
            console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
            break;
        } else if (numeroUsuario < numeroAleatorio) {
            console.log("El número es mayor que el que ingresaste.");
        } else {
            console.log("El número es menor que el que ingresaste.");
        }
    } catch (error) {
        console.log(error.message);
    }
}

// ejercicio 17

let temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

try {
    if (isNaN(temperaturaCelsius)) {
        throw new Error("Por favor, ingrese una temperatura válida.");
    }
    let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    console.log(`${temperaturaCelsius}°C es igual a ${temperaturaFahrenheit}°F`);
} catch (error) {
    console.log(error.message);
}

// ejercicio 18

let fecha = prompt("Ingrese una fecha en formato dd/mm/yyyy");

try {
    let partes = fecha.split("/");
    if (partes.length !== 3) {
        throw new Error("Formato de fecha inválido. Debe ser dd/mm/yyyy");
    }

    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let anio = parseInt(partes[2]);

    if (isNaN(dia) || dia < 1 || dia > 31) {
        throw new Error("Día inválido. Debe ser un número entre 1 y 31");
    }

    if (isNaN(mes) || mes < 1 || mes > 12) {
        throw new Error("Mes inválido. Debe ser un número entre 1 y 12");
    }

    if (isNaN(anio) || anio <= 1900) {
        throw new Error("Año inválido. Debe ser un número mayor que 1900");
    }

    console.log("Fecha válida");
} catch (error) {
    console.error("Error:", error.message);
    console.log("Fecha inválida");
}

// ejercicio 18
let num1 = prompt("Ingrese el primer número:");
let operador = prompt("Ingrese el operador (+, -, *, /):");
let num2 = prompt("Ingrese el segundo número:");

try {
    let num1Num = parseFloat(num1);
    let num2Num = parseFloat(num2);
    if (isNaN(num1Num) || isNaN(num2Num)) {
        throw new Error("Los números deben ser válidos");
    }
    switch (operador) {
        case "+":
            console.log(`Resultado: ${num1Num + num2Num}`);
            break;
        case "-":
            console.log(`Resultado: ${num1Num - num2Num}`);
            break;
        case "*":
            console.log(`Resultado: ${num1Num * num2Num}`);
            break;
        case "/":
            if (num2Num === 0) {
                throw new Error("No se puede dividir por cero");
            }
            console.log(`Resultado: ${num1Num / num2Num}`);
            break;
        default:
            throw new Error("Operador inválido");
    }
} catch (error) {
    console.error("Error:", error.message);
}