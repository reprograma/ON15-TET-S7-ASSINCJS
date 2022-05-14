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

// callback (erro/retorno) = sempre vem com o retorno ou um erro

const pegarUsuaria = (callback) => {
    setTimeout(() => {
      return callback(null,  {
        //   se no lugar do null vier "usuária não existe", irá retornar um erro
        nome: "Luci",
        email: "luci@reprograma.com",
        id: 98568547899658
      })
    }, 1000)
  }
  
  let resolver = (erro, usuaria) => console.log("usuária: " + usuaria.id);
  // object.entries - values ou keys
  
  pegarUsuaria(resolver)
  
  const pegarEndereco = (idUsuaria, callback) => {
    setTimeout(() => {
      return callback(null, {
        rua: "rua marielle franco",
        numero: "89",
        cidade: "recife",
      })
    }, 2500)
  }
  
  const pegarPedidos = (idUsuaria, callback) => {
    setTimeout (() => {
      return callback(null, {
        pedido1: "adesivo",
        pedido2: "caneca",
        pedido3: "mouse,"
      })
    })
  }
  
  // const usuaria = pegarUsuaria()
  // console.log("usuária: " + usuaria)
  
  pegarUsuaria(resolverUsuaria = (error, usuaria) => {
    if(error) {
      return console.error("Retornou erro para usuária", error);
    }
    pegarEndereco(usuaria.id, resolverEndereco = (error, endereco) => {
      if(error) {
        return console.error("Retornou erro para endereco", error);
      }
      pegarPedidos(usuaria.id, resolverPedidos = (error, pedidos) => {
        if(error) {
          return console.error("Retornou erro para pedidos", error);
        }
        console.log(`
        Usuária: ${usuaria.nome}
        E-mail: ${usuaria.email}
        Endereço: ${endereco.rua}, ${endereco.numero}
        Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}, ${pedidos.pedido3}
        `)
      })
    })
  })