console.log("Hola mundo!!")
console.log("mensaje 2")
let companyName = "New yotk";



function multiplicacion(i, numero) {
    return (numero * i)
}

function ejecutaTabla(multiplicacionCallBack, num) {
    let tabla = "";
    for (let i = 0; i <= 10; i++) {
        tabla += `${num} * ${i} = ${multiplicacionCallBack(i, num)} ` + "\n"
    }
    console.log(tabla);
}

ejecutaTabla(multiplicacion, 5);

// sin callback

function TablaM(num) {
    let tabla = ""
    for (let i = 0; i <= 10; i++) {
        tabla += `${num} * ${i} = ${num * i} ` + "\n"
    }
    console.log(tabla)
}

TablaM(5)

function suma(i, numero) {
    return (numero + i);
}

ejecutaTabla(suma, 5);