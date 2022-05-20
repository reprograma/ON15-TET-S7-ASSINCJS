/*
##Exercício da aula
  ###Vamos resolver um código assíncrono usando:
  [] Callbacks;
  [] Promises;
  [] Async/await; <~ foco desta aula, por ser o método mais moderno e usado 
##Nosso Algoritmo
  ###Simulação de requisições de dados em uma empresa de e-commerce:
    1. Informações do básicas de uma usuária;
    2. A partir da id da usuária obter o endereço cadastrado;
    3. A partir da id da usuária obter o histórico de pedidos;
*/

// sintaxe

// Estrutura de uma promisse:
// new Promise((resolve, reject) => {
//   resolve(resultado)
//   reject(erro)
// })

const pegarUsuaria = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
            nome: "Lucilania",
            email: "luci@reprograma.com",
            id: 981273981273
            })
        }, 1000)
    })
}

const pegarEndereco = (idUsuaria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
            rua: "rua marielle franco",
            numero: "9",
            cidade: "recife",
            })
        }, 3 * 1000)
    })
}

const pegarPedidos = (idUsuaria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
            pedido1: "adesivo",
            pedido2: "caneca",
            pedido3: "mouse",
            })
        }, 2500)
    })
}


resolverPromises()
async function resolverPromises() {
    try {
        // console.time('dayane')
        const usuaria = await pegarUsuaria()
        const endereco = await pegarEndereco(usuaria.id)
        const pedidos = await pegarPedidos(usuaria.id)
        // const resultados = await Promise.all([
        //     pegarEndereco(usuaria.id),
        //     pegarPedidos(usuaria.id)
        // ])
        // const endereco = resultados[0]
        // const pedidos = resultados[1]
        console.log(`
            Usuária: ${usuaria.nome}
            E-mail: ${usuaria.email}
            Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}
            Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}, ${pedidos.pedido3}
        `)
        // console.timeEnd('dayane')
    } catch(error) {
        console.error('Capturamos um erro: ', error)
    }
}

/* 
1. Ao usarmos o Async automaticamente a função retornará uma Promise;
2. Explicação do try/catch
3. Usamos Await apenas em funções que possuem o Async, e ele aguarda sempre a solução da promisse anterior para executar o código seguinte;
4. Usamos Await apenas quando precisamos tratar o resultado para pegar algum dado, para não paralizar o fluxo
*/











// TRY/CATCH()
// const nome = 'brenda'
// try {
//     nome = "brena"
//     console.log(nome)
// } catch(err) {
//     console.error('erro capturado:', err)
// } finally {

// }

// console.log(nome)

