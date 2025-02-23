
const cliente = {
    nombre: "Pedro",
    id: 3,
    saldo: 0,
    deposito: (importe) => {
        if (importe > 10000) {
            throw new Error("Excedió el límite de depósito!");
        }
        cliente.saldo += importe;
    },
    retirar: (importe) => {
        if (cliente.saldo < importe) {
            throw new Error("saldo insuficiente!!");
        }
        cliente.saldo -= importe;
    }
}

try {
    cliente.deposito(20000);
    console.log("Depósito realizado con éxito, tu nuevo saldo es: ", cliente.saldo);
    cliente.retirar(500);
    console.log("Retiro realizado con éxito, tu saldo es:", cliente.saldo);
} catch (error) {
    console.error(error.message);
}



