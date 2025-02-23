
// Map()

let miMapa = new Map();
miMapa.set('clave1', 'Leon');
miMapa.set('clave2', 'Tigre');
miMapa.set('clave3', 'Jirafa');

let mapaDatosPersona = new Map();
mapaDatosPersona.set('Nombre', "Julian");
mapaDatosPersona.set('Direccion', "Av. 5 de mayo 234");
mapaDatosPersona.set('Genero', 'Masculino');

mapaDatosPersona.forEach((valor, clave) => {
    console.log(`clave: ${clave} Valor: ${valor}`);
});

// Set

let miSet = new Set();
miSet.add("Mesa");
miSet.add("Silla");
miSet.add("Banco");
miSet.add("Sillon");

miSet.forEach(element => {
    console.log(element);
});