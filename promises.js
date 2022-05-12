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
    //criamos uma promise a partir do Objeto Promisse
        setTimeout(() => {
        //   return reject(new Error('Retornou erro!')) //reject é chamado se a requisição nfoi rejeitada (erro)
          return resolve({
              //resolve é chamada se a requisição foi resolvida (sucesso)
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

// const usuariaPromise = pegarUsuaria()
// console.log(usuariaPromise)

pegarUsuaria()
    .then((usuaria) => {
    //usamos then para tratar a resposta da promise caso ela tenha sido resolvida, seu parametro (que escolhemos chamar de usuaria) é o retorno da funcão resolve()
        return pegarEndereco(usuaria.id)
        .then((endereco) => {
        //podemos encadear vários thens pois seu retorno também é uma promise
            return {
                usuaria: {
                    id: usuaria.id,
                    nome: usuaria.nome,
                    email: usuaria.email,
                }, //precisamos passar no retorno do segundo then os dados de usuaria explicitamente, por esse then retorna por padrão só as informações da última requisição, que seria endereco
                endereco: {
                    rua: endereco.rua,
                    numero: endereco.numero,
                    cidade: endereco.cidade,
                }
            }
        })
    })
    .then((resposta) => {
        return pegarPedidos(resposta.usuaria.id)
        .then((pedidos) => {
                console.log(`
                    Usuária: ${resposta.usuaria.nome}
                    E-mail: ${resposta.usuaria.email}
                    Endereco: ${resposta.endereco.rua}, ${resposta.endereco.numero}
                    Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}
                `)
            })
        })
    .catch((err) => {
        //usamos catch oara capturar o erro caso a requisição tenha falhado, seu parâmetro é o erro retornado do banco de dados
        console.error("Capturamos um erro: ", err)
    })
