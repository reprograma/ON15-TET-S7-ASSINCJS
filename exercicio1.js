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
  
      let parcelasDesejadas = 10;
  
      setTimeout(() => {
        return resolve(
          preco / parcelasDesejadas
        )
      }, 2000);
    })
  }
  
// Só consegui até aqui.