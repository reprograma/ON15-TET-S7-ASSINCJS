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
// callback, tem dois argumentos, err e retorno
const pegarUsuaria = (callback) => {

    setTimeout(() => {
        return callback(null, {
            nome: "Lucilania",
            email: "luci@reprograma.com",
            id: 981273981273
        })
    }, 1000)
}
let resolver = (erro, usuaria) => {
    console.log('Usuária:' + usuaria.nome)
}

pegarUsuaria(resolver);
const pegarEndereco = () => {}
const pegarPedidos = () => {}