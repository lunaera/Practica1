
// // let fruits = ["Apple", "Orange", "Pear", "mango", "Banana", "mango"];
// // console.log(fruits.lastIndexOf("mango")); // 5
// // console.log(fruits.lastIndexOf("uva")); // -1

// // const frutasNameNumber = [45, 34, 67, 87, 34, 23, 56, 44];
// // console.log(frutasNameNumber.lastIndexOf(34)); // 4
// // console.log(frutasNameNumber.lastIndexOf(22)) // -1



// // const prefijos = ["Spider", "Airon", "Batma", "Ant", "Acua"];
// // const sufijo = "man";
// // const superheroe = prefijos.map((prefijo, index, frutasName) => {
// //     return `Index: ${index} frutasName: ${frutasName} superheroe=>${prefijo + sufijo} this => ${this}\n`;
// // }, "Marvel");
// // console.log(superheroe);



// // const bornYear = [1987, 2001, 2000, 1900, 1967, 2001, 1999, 2002];
// // const anioActual = new Date().getFullYear();
// // bornYear.map((anioNacimiento, index) => {
// //     console.log(`índice: ${index} => ${anioActual - anioNacimiento}`)
// // });



// // const cursos = [
// //     { "lenguaje": "JavaScript", "precio": 200.0 },
// //     { "lenguaje": "Java", "precio": 250.0 },
// //     { "lenguaje": "Kotlin", "precio": 300.0 },
// //     { "lenguaje": "Python", "precio": 240.0 }]

// // const cursoActualizado = cursos.map((curso, frutasName) => {
// //     return curso.lenguaje === "Java" ?
// //         { ...curso, "precio": 0.0 } : curso;
// // });

// // cursoActualizado.forEach(element => {
// //     console.log(element);
// // });



// // const personas = [
// //     { nombre: "Adelfo", edad: 23 },
// //     { nombre: "Mateo", edad: 33 },
// //     { nombre: "Carlos", edad: 13 },
// //     { nombre: "Antonio", edad: 3 },
// //     { nombre: "Hernán", edad: 18 },
// // ]

// // const range = {
// //     menor: 12,
// //     mayor: 21
// // };

// // const adolescente = personas.filter(function (persona) {
// //     return persona.edad >= this.menor && persona.edad <= this.mayor;
// // }, range);

// // adolescente.forEach(element => {
// //     console.log(element);
// // });



// // const adultos = personas.filter(persona => persona.edad >= 18);
// // adultos.forEach(element => {
// //     console.log(element);
// // });


// // const ganadores = ["Juan", "María", "karla"];
// // const oro = ganadores.filter((ganador, indice) => indice === 0);
// // const plata = ganadores.filter((ganador, indice) => indice === 1);
// // const bronce = ganadores.filter((ganador, indice) => indice === 2);
// // console.log(`Ganador de oro: ${oro}, ganador de plata: ${plata}, ganador de bronce: ${bronce}`);




// const usuarios = [
//     { id: 1, name: "jaime", age: 23 },
//     { id: 2, name: "Ana", age: 22 },
//     { id: 3, name: "Diana", age: 25 },
// ];

// const converter = usuarios.reduce((objeto, usuario) => {
//     objeto[usuario.id] = usuario;
//     return objeto;
// }, {});
// console.log(converter);
// console.log(converter[2]);


let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 5],
    [4, 8, 2, 5, 6]
];



let matrix2 = [
    ["a", "b", 3],
    [2, 5, 7],
    [function () { console.log("Hola!!") }]
];

matrix2.forEach(arrayUni => {
    arrayUni.forEach(element => {
        console.log(element);
    });
});