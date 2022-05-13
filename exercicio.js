/*
1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: 

`Sua Lace custa R$3900,00 e você pagará em 10x de R$390,00`
*/

// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
  return new Promise((resolver, reject ) => {
    setTimeout(() => {
      if (produto === "hormonios") {
        return {
          nome: "Hormônios",
          preco: 99.00
          }
      }
      } else if (produto === "unhas gel") {
        return {
        return resolver ({
          nome: "Unhas em Gel",
          preco: 190.00
        })
      }
      } else if (produto === "lace"){
        return {
        return resolver ({
          nome: "Lace",
          preco: 3900.00
        })
      }
      } else {
        return "Produto não encontrado"
      }
  }, 2000)
}

// função que simula busca num banco que retorna o valor das parcelas:

function calcularParcela(preco) {
  let parcelasDesejadas = 10
  return new Promise((resolve) => {
  setTimeout(() => {
    return preco * parcelasDesejadas
    return resolve (preco/parcelasDesejadas)
  }, 2000)
})}

let parcelasDesejadas = 10

async function realizarCompra(produto) {
  try {

    const item = await buscarPreco(produto)
    const valorParcela = await calcularParcela(item.preco)

      console.log(
      `Sua ${item.nome} custa R$ ${item.preco.toFixed(2)} e você pagará em ${parcelasDesejadas}x de R$ ${valorParcela.toFixed(2)}`
      )

  } catch(error) {
      console.error('Encontramos um erro: ', error)
  }
}


realizarCompra("lace")

// comentário: Professora, me sinti muito perdida na construção desse exercício!!
// Na aula parecia fácil apenas fazendo a substituição dos callbacks pelo await, mas quando fui tentar na prática nossa...
// to com muita raiva de não ter conseguido entregar da maneira que eu pensei "_"

                       // eu tentei fazer dessa maneira, mas no terminal falava: 'Cannot convert undefined or null to object' 
                       // e tbm não estava conseguindo visualizar o retorno da frase ' parcelar em 10x '
/*const PreçoDoProduto = (produto) => {
    setTimeout (() => {
      return produto ({
          "gel": [8.00],
          "Lace": [3900.00],
          "Shampo": [25.00],
          "base": [15.00]
      })
  }, 1000)
}

let Prod = PreçoDoProduto[0]
let valor = Object.values(Prod)
let string = Object.keys(Prod)

for(let total =0; total < strings.length; total++){
  console.log(`${strings[total]} : ${valor[total]}`)}*/



/*2. Resolva usando async/await: 
Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API"
de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular
o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o 
preço em Real e retornar o valor final 

dados:
`const precoEmDolar = 1270  //preço em dólar`
valor de retorno no console: `O preço final do seu produto é R$7474,08`
dica: valor em real + (valor em real * juros1) + (valor em real * juros2) = valorFinal
*/


async function calcularValorEmReal(precoEmDolar) {
  try {} 
  catch (error) {}
}
async function calcularValorEmReal(precoEmDolar)  {
    try {

      const valorDolar = await buscarPrecoDolar()

      const valorJuros = await buscarJurosImportacao()

      const valorConvertido = precoEmDolar*valorDolar.comercial

      const valorFinal = valorConvertido + (valorConvertido * valorJuros.juros1) + (valorConvertido * valorJuros.juros2)

      console.log(`O preço final do seu produto é R$ ${valorFinal.toFixed(2)}`)
    } 
    catch (error) {
      console.error('Encontramos um erro: ', error)
    }
  }

 calcularValorEmReal(1270) 