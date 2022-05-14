/*
1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: `Sua Lace custa R$3900,00
e você pagará em 10x de R$390,00`
*/

// 1ª forma de fazer o exercício usando o if/elseif

// const buscarPreco = (produto) => {
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       if (produto === "hormonios") {
//         return resolve ({
//           nome: "Hormônios",
//           preco: 99.00
//         })
//       } else if (produto === "unhas gel") {
//         return resolve ({
//           nome: "Unhas em Gel",
//           preco: 190.00
//         })
//       } else if (produto === "lace") {
//         return resolve ({
//           nome: "Lace",
//           preco: 3900.00
//         })
//       } else {
//         return reject ("Produto não encontrado")
//       }
//     }, 2000)

//   }
//   )}



// 2ª forma usando o switch, as meninas na monitoria disseram que seria legal apresentar uma outra forma. Não sei se ficou correta.

const buscarPreco = (produto) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (produto) {
        case "hormonios":
          return resolve({
            nome: "Hormônios",
            preco: 99.00
          })
          break
        case "unhas gel":
          return resolve({
            nome: "Unhas em Gel",
            preco: 190.00
          })
          break
        case "lace":
          return resolve({
            nome: "Lace",
            preco: 3900.00
          })
          break
          default:
            return reject("Produto não encontrado")

      }
    },2000)
  })

}

// 3ª Crie essa função para a pessoa colocar a quantidade de parcelas que ela deseja.

const numeroParcelas = (parcelas) =>{
  return new Promise((resolve) => {
    setTimeout (() => {
      return resolve (parcelas)
    })
    // console.log(parcelas)
  }, 1000)
}

// função que simula busca num banco que retorna o valor das parcelas:

const calcularParcela = (preco, parcelas) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log(preco)
      // console.log(parcelas)
      return resolve(preco / parcelas)
    }, 2000)
  })
}

comprarProduto("lace", 10 )
async function comprarProduto(produto, parcelas) {
  try {
    const nome = await buscarPreco(produto)
    const valorFinal = await calcularParcela(nome.preco, parcelas)


    console.log(`O seu ${nome.nome} custa R$ ${nome.preco.toFixed(2).replace(".",",")} e você pagará em ${parcelas} vezes de R$ ${valorFinal.toFixed(2).replace(".",",")}.`)
  }
  catch (error) {
    console.error("Verificamos um erro:", error)
  }
}

