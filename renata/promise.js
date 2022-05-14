/*
PROMISE

Objeto específico - função específica. Assíncrona que diz que é um acerto ou um erro. 

A promessa funciona através de Estados:

Pending - estado inicial, em execução - pendente, esperando o processo assíncrona acontecer
Fulfilled - quando executou todas as operações com sucesso;
Rejected - quando a execução finalizou com erro; Falhou;
Settled - Nome genérico para estado final. 

* then()

Exemplo : 


function promessa(){
    return new  Promisse((resolve, reject) => {
        setTimeout((error) => {
            if(error) {
                return reject(new Error ("deu erro!"))
            }
            return resolve("Sucesso")
        }, 3000)
    })
}



*/

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


const pegarUsuaria = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject(new Error("Retornou erro!"))
            return resolve({
                //   se no lugar do null vier "usuária não existe", irá retornar um erro
                nome: "Luci",
                email: "luci@reprograma.com",
                id: 98568547899658
            })
        }, 1000)

    })
}


const pegarEndereco = (idUsuaria) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: "rua marielle franco",
                numero: "89",
                cidade: "recife",
            })
        }, 2500)

    })
}

const pegarPedidos = (idUsuaria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve ({
                pedido1: "adesivo",
                pedido2: "caneca",
                pedido3: "mouse,"
            })

    }, 2000)

    })
}

// const usuariaPromise = pegarUsuaria()
// console.log(usuariaPromise)

pegarUsuaria()
    .then((usuaria) => {
        return pegarEndereco(usuaria.id)
        .then((endereco) => {
            return {
                usuaria:{
                    id:usuaria.id,
                    nome: usuaria.nome,
                    email: usuaria.email,
                },
                endereco:{
                    rua: endereco.rua,
                    numero: usuaria.nome,
                    cidade:endereco.cidade,
            }
        }
    })})

    .then((resposta) => {
        return pegarPedidos(resposta.usuaria.id)
        .then((pedidos) => {
            console.log(`
            Usuária: ${resposta.usuaria.nome}
            E-mail: ${resposta.usuaria.email}
            Endereço: ${resposta.endereco.rua}, ${resposta.endereco.numero}
            Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}, ${pedidos.pedido3}`)

        })
    })  
    .catch((err) => {
        console.error("Capturamos um erro....", err)
    })
