/*
1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: 

`Sua Lace custa R$3900,00 e você pagará em 10x de R$390,00`
*/


// Eu tentei resolver por promises porque foi o conteúdo que já estava um pouco mais sedimentado na minha cabeça

// função que simula busca num banco que retorna o preço do produto: (EDITADA PARA PROMISES)
function buscarPreco(produto) {
  return new Promise((resolve, reject) => { //o resolve vai permitir o acesso desses valores em OUTRA FUNÇÃO
    setTimeout(() => {
      if (produto === "hormonios") {
        return resolve({
          nome: "Hormônios",
          preco: 99.00
        })
      } else if (produto === "unhas gel") {
        return resolve({
          nome: "Unhas em Gel",
          preco: 190.00
        })
      } else if (produto === "lace"){
        return resolve ({
          nome: "Lace",
          preco: 3900.00
        })
      } else {
        return reject("Produto não encontrado") //o "deu errado"
      }
  }, 2000)
})
}
  
// função que simula busca num banco que retorna o valor das parcelas (EDITADA PARA PROMISE)
  
function calcularParcela(preco) {
  return new Promise((resolve) => {
  let parcelasDesejadas = 10
  setTimeout(() => {
    return resolve(
      preco / parcelasDesejadas ) 
  }, 2000)
}) // não tem reject nesse, ta tudo bem isso?
}


  
const price = buscarPreco("lace")
price.then((produto) => {   //pegando o retorno resolve da funcion produto
  const productName = produto.nome
  const productPrice = produto.preco
  const payments = calcularParcela(productPrice, productName); //parametros que vou usar na função
  payments.then((valuePayments) => {
    const payments = valuePayments;
    const amountPayments = productPrice / valuePayments;
    const singlePaymentValue = productPrice / amountPayments

    console.log(`Sua ${productName} custa R$${productPrice},00 e você pagará em ${amountPayments} parcelas de R$${singlePaymentValue},00!`)

  })
})


