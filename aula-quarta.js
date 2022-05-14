Exercício da aula### Vamos resolver um código assíncrono usando: [] Retornos de chamada;
[] Promessas;
[] Assíncrono / aguardar; < ~foco desta aula, por ser o método mais moderno e usado## Nosso Algoritmo### Simulação de requisições de dados em uma empresa de e - commerce:
    1. Informações básicas de uma usuária;
2. A partir da identificação da usuária obter o endereço cadastrado;
3. A partir da identificação da usuária obter o histórico de pedidos; *
/



const pegarUsuaria = () => {
    return new Promise((resolve, rejeita) => {
        setTimeout(() => {
            return resolver({
                nome: "Lucilânia",
                e - mail: "luci@reprograma.com",
                id: 981273981273
            })
        }, 1000)
    })
}

const pegarEndereco = (idUsuaria) => {
    return new Promise((resolve, rejeita) => {
        setTimeout(() => {
            return resolver({
                rua: "rua marielle franco",
                numero: "9",
                cidade: "recife",
            })
        }, 3 * 1000)
    })
}

const pegarPedidos = (idUsuaria) => {
    return new Promise((resolve, rejeita) => {
        setTimeout(() => {
            return resolver({
                pedido1: "adesivo",
                pedido2: "caneca",
                pedido3: "mouse",
            })
        }, 2500)
    })
}


resolverpromessas()
função assíncrona resolverPromises() {
    tente {

        const usuaria = aguardar pegarUsuaria()
        const endereco = aguardar pegarEndereco(usuaria.id) _
        const pedidos = aguardar pegarPedidos(usuaria.id) _

        consola.log(`
            Usuária: ${ usuária . nome }
            E-mail: ${ usuária . e-mail }
            Endereco: ${ endereço . rua } , ${ endereço . numero } , ${ endereco . cidade }
            Pedidos: ${ pedidos . pedido1 } , ${ pedidos . pedido2 } , ${ pedidos . pedido3 }
        `)
            // console.timeEnd('dayane')
    }
    pegar(erro) {
        consola.error('Capturamos um erro: ', erro)
    }
}