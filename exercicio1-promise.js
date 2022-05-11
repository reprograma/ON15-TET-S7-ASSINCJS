/*
1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: `Sua Lace custa R$3900,00
e você pagará em 10x de R$390,00`
*/

// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (produto === "hormonios") {
        return resolve({
          nome: "Hormônios",
          preco: 99.00
        });
      } else if (produto === "unhas gel") {
        return resolve({
          nome: "Unhas em Gel",
          preco: 190.00
        });
      } else if (produto === "lace") {
        return resolve({
          nome: "Lace",
          preco: 3900.00
        });
      } else {
        return reject("Produto não encontrado");
      }
    }, 2000)
  })
}

// função que simula busca num banco que retorna o valor das parcelas:

function calcularParcela(preco) {
  return new Promise((resolve) => {
    let parcelasDesejadas = 10
    setTimeout(() => {
      return resolve(preco / parcelasDesejadas)
    }, 2000)
  })
}



const encontrarPreco = buscarPreco("lace");
encontrarPreco.then((produto) => {
  const produtoNome = produto.nome;
  const produtoPreco = produto.preco;

  const encontrarParcela = calcularParcela(produtoPreco, produtoNome);
  encontrarParcela.then((valorParcela) => {
    const parcelas = valorParcela;
    const quantidadeParcelas = produtoPreco / valorParcela;

    console.log(`Sua ${produtoNome} custa R$${produtoPreco.toFixed(2).replace(".", ",")} e você pagará em ${quantidadeParcelas}x de R$${parcelas.toFixed(2).replace(".", ",")}.`);
  })

}).catch((err) => {
  console.error("Erro capturado: ", err);
});

