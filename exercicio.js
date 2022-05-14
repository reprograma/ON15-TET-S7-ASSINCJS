/*
1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: 

`Sua Lace custa R$3900,00 e você pagará em 10x de R$390,00`
*/

// função que simula busca num banco que retorna o preço do produto:
// Adicionando Promisse na função para conseguir usar o await

const buscarPreco = (produto) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (produto === "hormonios") {
        return resolve({
          nome: "Hormônios",
          preco: 99.00
        }
        )
      } else if (produto === "unhas gel") {
        return resolve({
          nome: "Unhas em Gel",
          preco: 190.00
        })
      } else if (produto === "lace") {
        return resolve({
          nome: "Lace",
          preco: 3900.00
        })
      } else {
        return resolve("Produto não encontrado")
      }
    }, 2000)
  })
  }

  // função que simula busca num banco que retorna o valor das parcelas:
// Adicionando Promisse na função para conseguir usar o await
const calcularParcela = (preco) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let parcelasDesejadas = 10
      return resolve(
        preco / parcelasDesejadas
      )
    }, 2000)
  })
}

async function apresentarResultado(produtoDesejado) {
  try {

    const produto = await buscarPreco(produtoDesejado);
    const parcela = await calcularParcela(produto.preco);

    return console.log(`Seu ${produto.nome} custa ${produto.preco} e você pagará em 10x de ${parcela}`)
  }
  catch (error) {
    console.log(error)
  }
}

apresentarResultado("lace")
