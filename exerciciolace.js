// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
    return new Promise((resolver) => {
      setTimeout(() => {
        if (produto === "hormonios") {
          return resolver({
            nome: "Hormônios",
            preco: 99.0,
          });
        } else if (produto === "unhas gel") {
          return resolver({
            nome: "Unhas em Gel",
            preco: 190.0,
          });
        } else if (produto === "lace") {
          return resolver({
            nome: "Lace",
            preco: 3900.0,
          });
        } else {
          return resolver("Produto não encontrado");
        }
      }, 2000);
    });
  }
  
  //   função que simula busca num banco que retorna o valor das parcelas:
  
  function calcularParcela(preco) {
    return new Promise((resolve) => {
      let parcelasDesejadas = 10;
      setTimeout(() => {
        return resolve(preco / parcelasDesejadas);
      }, 2000);
    });
  }
  
  // função que calcula o valor das parcelas:
  
  async function valorDasParcelasDoProdutos(produto) {
    try {
      const produtoEscolhido = await buscarPreco(produto);
  
      const valorDaParcela = await calcularParcela(produtoEscolhido.preco);
  
      return console.log(
        `Sua ${produtoEscolhido.nome} custa R$${produtoEscolhido.preco.toFixed(
          2
        )} e você pagará em 10x de R$${valorDaParcela.toFixed(2)}`
      );
    } catch (error) {
      console.log(error);
    }
  }
  
  valorDasParcelasDoProdutos("lace");
  