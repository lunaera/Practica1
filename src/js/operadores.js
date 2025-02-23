
const cliente = {
    nombre: "Jorge",
    edad: null,
    direccion: undefined,
    numeroTelefono: '9518835110'
};
// cliente.edad !== null        v || v || v ||  v   
// cliente.edad !== ""                  V || v || v
// cliente.edad !== " "                 v || v
// cliente.edad !== undefined

const datosClienteFinal = {
    nombre: cliente.nombre ?? "Invitado",
    edad: cliente.edad !== null && cliente.edad !== "" && cliente.edad !== " " && cliente.edad !== undefined ? cliente.edad : 18,
    direccion: cliente.direccion ?? "Gardeñas s/n",
    numeroTelefono: cliente.numeroTelefono ?? '95134554634'
};

console.log(datosClienteFinal);