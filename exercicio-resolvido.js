/*
1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: 

`Sua Lace custa R$3900,00 e você pagará em 10x de R$390,00`
*/

// função que simula busca num banco que retorna o preço do produto:

const buscarPreco = (produto) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (produto === "hormonios") {
        return resolve ({
          nome: "Hormônios",
          preco: 99.00
        })
      } else if (produto === "unhas gel") {
        return resolve ({
          nome: "Unhas em Gel",
          preco: 190.00
        })
      } else if (produto === "lace"){
        return resolve ({
          nome: "Lace",
          preco: 3900.00
        })
      } else {
        return reject ("Produto não encontrado")
      }
  }, 2000)
}
)}
  
// função que simula busca num banco que retorna o valor das parcelas:
  
const calcularParcela = (preco) => {
  return new Promise((resolve, reject) => {
    let parcelasDesejadas = 10
    setTimeout(() => {
      return resolve (preco / parcelasDesejadas)
    }, 2000)
  })
}

//resposta com promise
const precoProduto = buscarPreco("hormonios")
precoProduto
.then((produto) => {
  const produtoNome = produto.nome
  const produtoPreco = produto.preco

  const acharParcela = calcularParcela(produtoPreco, produtoNome)
  acharParcela
  .then((numeroParcelas) => {
    const parcelas = numeroParcelas
    
    console.log(`Você comprou ${produtoNome}, custa R$ ${produtoPreco.toFixed(2).replace(".",",")}. Parcelando em 10x fica ${parcelas.toFixed(2).replace(".",",")}`)
  })
})
.catch((error) => {
  console.log("Encontramos um erro: ", error)
})


//resposta com async/await
async function realizarCompras(produto){
  try {
    const nomeProduto = await buscarPreco(produto)
    const valorParcela =  await calcularParcela(nomeProduto.preco)

    console.log(`Você comprou ${nomeProduto.nome}, custa R$ ${nomeProduto.preco.toFixed(2).replace(".",",")}. Parcelando em 10x fica ${valorParcela.toFixed(2).replace(".",",")}`)
  }
  catch(err){
    console.log(`Encontramos um erro: `, err)
  }
}
realizarCompras("lace")