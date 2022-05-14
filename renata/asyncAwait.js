/*

Toda função que recebe async se torna assincrona e passa a retornar uma promise e passa a esperar a possibilidade de a palavra chave await ser usada para invocar códigos assíncronos;


O await indica ao JS que ele deve esperar o retorno, pq há uma promise sendo resolvida, para continuar a execução e só funciona dentro de funções assíncronas.

O await é colocado na frente de qualquer função assíncrona para pausar o código até que a promise seja resolvida, retornando o valor resultante.

(o await é opcional, porque ele pára o código, tornando o código lento.)

Por que usar Async/Await?

* Torna a leitura do código assíncrono mais próxima do código sícrono;
* Não precisa de funções para sincronizar os resultados;
* Facilita o tratamento de erros, seja com menor encadeamento de then() ou com o uso de trey/catch())


TRY() - cria um bloco de código protegido, que caso ocorra algum erro neste bloco, a execução é desviada para o catch(), desta forma a aplicação não quebra e o erro poderá ser tratado e o código segue sua execução;

CATCH() -  é executado somente quando há alguma exceção no bloco try, caso contrário ele será ignorado, o argumento recebido pelo catch é a exceção ocorrida no bloco try e costuma ser chamada de err/error;

*/


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

  async function resolverPromises() {
      try {
          console.time('medida-promise')
          const usuaria = await pegarUsuaria()
        //   const endereco = await pegarEndereco()
        //   const pedidos = await pegarPedidos(usuaria.id)
        const resultados = await Promise.all([
            pegarEndereco(usuaria.id), 
            pegarPedidos(usuaria.id)
        ])
        const endereco = resultados[0]
        const pedidos = resultados[1]
          console.log(
              `
              Usuária: ${usuaria.nome}
              E-mail: ${usuaria.email}
              Endereco: ${endereco.rua}, ${endereco.numero}
              Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}, ${pedidos.pedido3}
              `)
              console.timeEnd('medida-promise')
            }
            catch(error){
                console.error('Capturamos um erro:', error)
                
            }
        }
        
        
resolverPromises()



// Promise.all - executa todas ao mesmo tempo pq elas não dependem uma da outra. lá em cima ele executa em sequencia.
// console. (são métodos de depuração, não são códigos de execução, não vão para produção)