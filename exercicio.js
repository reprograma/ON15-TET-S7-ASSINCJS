/*
1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: 

`Sua Lace custa R$3900,00 e você pagará em 10x de R$390,00`
*/

// função que simula busca num banco que retorna o preço do produto:

// function buscarPreco(produto) {
//     setTimeout(() => {
//       if (produto === "hormonios") {
//         return {
//           nome: "Hormônios",
//           preco: 99.00
//         }
//       } else if (produto === "unhas gel") {
//         return {
//           nome: "Unhas em Gel",
//           preco: 190.00
//         }
//       } else if (produto === "lace"){
//         return {
//           nome: "Lace",
//           preco: 3900.00
//         }
//       } else {
//         return "Produto não encontrado"
//       }
//   }, 2000)
// }
  
// função que simula busca num banco que retorna o valor das parcelas:
// function calcularParcela(preco) {
//   let parcelasDesejadas = 10
//   setTimeout(() => {
//     return preco * parcelasDesejadas
//   }, 2000)
// }
  
//transformando a função em promise 

const calcularParcela = (preco) => {
  return new Promise ((resolve,reject) => {
    let parcelasDesejadas = 10
    setTimeout(() => {
      return resolve(preco / parcelasDesejadas)
    }, 2000)
  })

}

// RESPOSTA

// transformando if e else em PROMISE

const promise = (produto) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      let res = {} // Para não repetir o return resolve em todas as linhas, criando um objeto. 
      if (produto === "hormonios") {
        res = {
          nome: "Hormônios",
          preco: 99.00
        }
      } else if (produto === "unhas gel") {
        res = {
          nome: "Unhas em Gel",
          preco: 190.00
        }
      } else if (produto === "lace"){
        res = {
          nome: "Lace",
          preco: 3900.00
        }
      } else {
        res = "Produto não encontrado"
      }
      return resolve(res) // Resolve obrigatório da Promise 
    }, 2000)
  })
}
calcularPromise()
async function calcularPromise(){
  try{
    const produto = await promise('lace')
    const parcela = await calcularParcela(produto.preco)
    console.log(`Sua lace custa ${produto.preco} e você pagará em 10x de ${parcela}.`)

  }catch(error) {
    console.error('Capturamos um erro: ', error)
  }
}

/*
2. Resolva usando async/await: 
Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API"
de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular
o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o 
preço em Real e retornar o valor final 

dados:
`const precoEmDolar = 1270  //preço em dólar`
valor de retorno no console: `O preço final do seu produto é R$7474,08`
dica: valor em real + (valor em real * juros1) + (valor em real * juros2) = valor final
*/

function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.03",
        turismo: "5.17",
      });
    }, 1000);
  });
}

function buscarJurosImportacao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        juros1: 0.06,
        juros2: 0.11,
        message:
        "os dois juros são aplicados no valor total do produto em real",
      });
    }, 1000);
  });
}

async function calcularValorEmReal(precoEmDolar) {
  try {
    const precoEmDolar = 1270
    const valorDoDolar = await buscarPrecoDolar()
    const valorEmReal = parseFloat(valorDoDolar.comercial)*precoEmDolar //pesquisei no google como transformar string em numero e achei o parsefloat
    const Juros = await buscarJurosImportacao()
    const valorFinal = valorEmReal+(valorEmReal*Juros.juros1)+(valorEmReal*Juros.juros2) 
    console.log(`O preço final do seu produto é ${valorFinal}`)
       // achei muita constante, está certo?
  } 
  catch (error) {
    console.error('Capturamos um erro, não foi possível realizar o cálculo: ', error)
  }
}
calcularValorEmReal() // não esquecer de chamar a função após a construção da mesma