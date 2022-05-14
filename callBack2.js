const pegarUsuaria = (callback) => {
    setTimeout(() => {
        return callback(
            null, {
                nome: "Elen",
                email: "elenfrancyne@gmail.com",
                id: 35423
            })
    }, 1000)
}
const pegarEndereco = (idUsuaria, callback) => {

    setTimeout(() => {
            return callback(undefined, {
                rua: " Rua Germano Gambaro ",
                numero: "27",
                cidade: "Ibiporã"
            })
        },
        2500)
}
const pegarPedidos = (idUsuaria, callback) => {
    setTimeout(() => {
        return callback(0, {
            pedido1: "caneca",
            pedido2: "garrafa",
            pedido3: " agenda"
        })

    });
}
pegarUsuaria(resolverUsuaria = (error, usuaria) => {
    if (error) {
        return console.log("Retornou erro de usuária, ", error);
    }
    pegarEndereco(usuaria.id, resolverEndereco = (error, endereco) => {
        if (error) {
            return console.error("Retornou erro de endereço, ", error);
        }
        pegarPedidos(usuaria.id, resolverPedidos = (error, pedidos) => {
            if (error) {
                return console.error("Retornou erro de pedido,", error);
            }
            console.log(`Usuária : ${usuaria.nome}
             E-mail: ${usuaria.email}
             Endereço: ${endereco.rua}, ${endereco.numero} 
             Pedidos:  ${pedidos.pedido1}, ${pedidos.pedido2}, ${pedidos.pedido3}.`);

        })
    })
})