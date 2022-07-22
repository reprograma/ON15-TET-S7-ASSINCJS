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
                return reject("Produto não encontrado")
              }
        }, 2000)
    })
}

// função que simula busca num banco que retorna o valor das parcelas:

const calcularParcela = (preco, parcelasDesejadas) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(preco / parcelasDesejadas)
        }, 2000)
    })
}
  

const encotrandoValor = async (produto, parcelasDesejadas) => {
    const acharProduto = await buscarPreco(produto)
    const calculandoParcela = await calcularParcela(acharProduto.preco, parcelasDesejadas)

    let valorTotal = acharProduto.preco.toFixed(2)
    let parcelaTotal = calculandoParcela.toFixed(2)

    console.log(`Seu produto custa ${valorTotal} e você pagará em ${parcelasDesejadas}x de ${parcelaTotal}`)
}

encotrandoValor("lace", 10)