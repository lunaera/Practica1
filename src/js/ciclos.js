
const alturaTriangulo = 5;
let aste = "";
for (let i = 1; i <= alturaTriangulo; i++) {
    aste += "*";
    console.log(aste);

}

let result = "";
let a = "";
for (let i = 1; i <= alturaTriangulo; i++) {
    a += "*";
    result += a + "\n";
}

console.log(result);


let tamTriangulo = 6;
let serie = 1;
let serieFinal = "";
for (let i = 0; i < tamTriangulo; i++) {
    serieFinal = serie + "   " + serieFinal;
    console.log(serieFinal);
    serie += 2;
}


let num = 9;
if (num % 2 == 0) {
    console.log("es par");
} else {
    console.log("es impar");
}




let numero = 8;
let result2 = (numero > 6) ? "si es mayor" : (numero < 4) ? "es menor que 4" : (numero === 5) ? "es igual a 5" : "no es igual";
console.log(result2);
