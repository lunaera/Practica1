
// // const number = [23, 5, 7, 8, 12, 3];
// // const restaA = number.reduce((acumulador, element) => acumulador - element);
// // const restaB = number.reduce((acumulador, element) => acumulador - element, 0);
// // console.log(restaA); // -12
// // console.log(restaB); // -58

// // const restaInversa = number.reduceRight((acumulador, element) => acumulador - element, 0);
// // console.log(restaInversa); // -58


// // const words = [
// //     "gato",
// //     "perro",
// //     "ratón",
// //     "elefante",
// //     "tigre",
// //     "león",
// //     "jirafa",
// //     "serpiente",
// //     "águila",
// //     "ballena",
// //     "delfín",
// //     "oso",
// //     "pingüino",
// //     "koala",
// //     "tiburón",
// //     "cocodrilo",
// //     "leopardo",
// //     "pingüino",
// //     "tigre",
// //     "gato",
// //     "serpiente",
// //     "delfín",
// //     "león",
// //     "gato"
// // ];
// // const frequencies =
// //     words.reduce((accumulator, currentValue) => {
// //         // la primera vez busca acumulador[gato] como no lo encuentra devuelve undefined
// //         // entonces: undefined || 0 => devuelve 0 y 0 + 1 =1
// //         // por lo tanto: el valor del acumulador es {gato:1}

// //         // en caso de que el acumulador ya tenga gato, entonces devuelve el valor y le suma 1
// //         accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
// //         return accumulator
// //     }, {})
// // console.log(frequencies)



// // const numbers = [1, 2, 3, 4, 5];
// // // si al menos 1 cumple con el residuo 0, devuelve true
// // const even = numbers.some((element) => element % 2 === 0);
// // console.log(even);


// // const numberArray = [2, 5, 8, 1, 4];
// // // recorre cada elemento validadndo si es >10
// // console.log(numberArray.some((elem) => elem > 10)); // false

// // const numberArray2 = [2, 5, 18, 1, 4];
// // console.log(numberArray2.some((elem) => elem > 10)); // true

// // const fruits = ["apple", "banana", "mango", "guava"];

// // function checarDisponibilidad(arratFruits, nombreFruta) {
// //     return arratFruits.some((element) => element === nombreFruta);
// // }
// // console.log(checarDisponibilidad(fruits, "kiwi")); // false
// // console.log(checarDisponibilidad(fruits, "banana")); // true


// // si cada elemento cumple con la condición devuelve true, en caso contrario false
// // const arrayNumero = [12, 5, 8, 130, 44];
// // const result1 = arrayNumero.every((currentValue) => currentValue >= 10); // false

// // const arrayNumero2 = [12, 54, 18, 130, 44];
// // const result2 = arrayNumero2.every((currentValue) => currentValue >= 10); // true
// // console.log(result1, " , ", result2);


// // const arrayNumero = [12, 54, 18, 130, 44];
// // console.log(arrayNumero.every((element) => element > 0)); // true

// // const arrayNumero2 = [12, 54, 18, 130, -44];
// // console.log(arrayNumero2.every((element) => element > 0)); // false

// const students = ["Javier", "Maria", "Esther", "Martha Andrea", "Jose", "Martha"];
// const result = students.find((item) => item === "Martha");
// console.log(result);





let dogs = [
    {
        raza: "Labrador",
        color: "Blanco"
    },
    {
        raza: "Chihuahua",
        color: "Amarillo"
    },
    {
        raza: "Huski",
        color: "negro/blanco"
    },
]
// console.log(dogs.find(dog => dog.raza === "Huski"));

// function findHuski(dog) {
//     return dog.raza === "Huski"
// }
// const perro = dogs.find(dog => findHuski(dog));
// console.log(perro);


// const arrayNumero = [12, 44, 18, 130, 44];
// console.log(arrayNumero.findIndex(item => item === 44)); //1

// const students = ["Andres", "Maria", "Jaime", "Martha", "Jose"];
// const nomeStudent = students.findIndex((estudiante) => estudiante === "Pedro");
// console.log(nomeStudent); // devuelve -1

// const fruits = ["apple", "banana", "mango", "guayaba"];
// console.log(fruits.findIndex(fruta => fruta.length === 5)); // posición 0


// const students = ["Andres", "Maria", "Jaime", "Martha", "Jose"];
// console.log(`ORIGINAL: ${students}`)
// const orderedAsc = students.sort((a, b) => a > b ? 1 : -1);
// console.log(`ASCENDENTE: ${orderedAsc}`)
// const orderedDesc = students.sort((a, b) => a > b ? -1 : 1);
// console.log(`DESCENDENTE: ${orderedDesc}`)



// console.log(students.sort((a, b) => a > b ? 1 : -1));
// console.log(students.sort());


// const oldLanguages = ["C++", "Cobol", "Fortran"];
// const newLanguages = ["Kotlin", "Rust", "Go", "Julia", "Elixir"];
// const languages = oldLanguages.concat(newLanguages);
// console.log(languages)

// const arrayNumero = [12, 44, 18, 130, 44];
// const num2 = [2, 3, 5, 6];
// const newarray = arrayNumero.concat(num2);
// console.log(newarray);

// const arrayPets = ["perro", "gato", "tortuga", "cotorro", "loro", "capibara"];
// console.log(arrayPets.includes('capibara')); // true
// console.log(arrayPets.includes('hamster')); // false


// const arrayPets = ["perro", "gato", "tortuga", "cotorro", "loro", "capibara"];
// console.log(arrayPets.join(","));
// console.log(arrayPets.join("-"));

// const miArray = [1, 2, 3];

// console.log(miArray.fill("hola")); // [4, 4, 4]
// console.log(miArray.fill(4, 1)); // [1, 4, 4]
// console.log(miArray.fill(4, 1, 2)); // [1, 4, 3]
// console.log(miArray.fill(4, 1, 1)); // [1, 2, 3]
// console.log(miArray.fill(4, 3, 3)); // [1, 2, 3]
// console.log(miArray.fill(4, -3, -2)); // [4, 2, 3]
// console.log(miArray.fill(4, NaN, NaN)); // [1, 2, 3]
// console.log(miArray.fill(4, 3, 5)); // [1, 2, 3]
// console.log(Array(3).fill(4)); // [4, 4, 4]
// // estamos llamando fill() como si { length: 3 } fuera un array.
// console.log([].fill.call({ length: 3 }, 4)); //{0: 4, 1: 4, 2: 4, length: 3}

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// // Cuidado: reverse es destructivo. Afecta al arreglo original
// console.log('array1:', array1);

const edades = [23, 11, 67, 2, 56, 4, 6];
const arrayReverse = edades.reverse();
console.log(arrayReverse);

