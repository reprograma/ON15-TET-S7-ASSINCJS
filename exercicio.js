/* 

Prof, desde já peço desculpas por esse código horrendo. Essa semana foi terrível para mim, não me dediquei como queria.
Mil desculpas, foi isso que consegui fazer. 


1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: `Sua Lace custa R$3900,00
e você pagará em 10x de R$390,00`
*/

// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
  return new Promise(resolve => {
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
function calcularParcela(preco, parcelasDesejadas = 10) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(preco / parcelasDesejadas)
        }, 2000)
  })
}

async function exibirNotaFiscal() {
  var produto = await buscarPreco("lace");
  console.log(produto)
  var parcelas = await calcularParcela(produto.preco, 10)

  console.log(`a lace foi divida em 10x de ${parcelas} reais`)
}


exibirNotaFiscal();



/*
2. Resolva usando async/await: 
Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API"
de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular
o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o 
preço em Real e retornar o valor final 

dados:
`const precoEmDolar = 1270  //preço em dólar`
valor de retorno no console: `Ofinal do seu produto é R$*****,**`
dica: valor em real + (valor em re preço al * juros1) + (valor em real * juros2) = valor final
*/

function buscarPrecoDolar() {
return new Promise((resolve) => {
setTimeout(() => {
resolve({
comercial: "5.03",
turismo: "5.17",
});
}, 3000);
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
}, 3000);
});
}

async function calcularValorEmReal(precoEmDolar) {

try {
const pegarPrecoDolar = await buscarPrecoDolar();
const precoReal = await buscarJurosImportacao();
const valorReal = pegarPrecoDolar.comercial * precoEmDolar;
const valorFinal = valorReal + (valorReal * precoReal.juros1) + (valorReal * precoReal.juros2);

return console.log(`O preço final do produto é ${valorFinal.toFixed(2).replace(".",",")} reais.`);
} 
catch (error) {
console.log(error)
}
}

calcularValorEmReal(1270) 