
let edad = 12
    , apellido = "sfsgdfg"
    , grupo = "A";

// scope de var, let y const


let clientData = {
    name: "Erahin",
    age: 45,
    adress: null,
    phoneNumber: "9511940403"
};

let clientDataFinal = {
    name: clientData.name ?? "Invitado",
    // se requiere que por lo menos una condición sea falsa por eso se usa and
    age: clientData.age !== "" && clientData.age !== null && clientData.age !== undefined ? clientData.age : 18,
    adress: clientData.adress ?? "Domicilio conocido",
    phoneNumber: clientData.phoneNumber ?? "951-000-00-00"
};

console.log(clientDataFinal);