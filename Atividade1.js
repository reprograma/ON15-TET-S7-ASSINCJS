function buscarPreco(produto) {
  return new Promise (( resolve, reject) => {
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
    } else if (produto === "lace") {
      return resolve ({
        nome: "Lace",
        preco: 3900.00
      })
    } else {
      return reject ("Produto não encontrado")
    }
  }, 2000)
  })
}


// função que simula busca num banco que retorna o valor das parcelas:

function calcularParcela(preco) { 
  return new Promise ((resolve) => {
  let parcelasDesejadas = 10
  setTimeout(() => {
    return resolve (preco / parcelasDesejadas)
  }, 2000)

})
} 
 

//Tentativa com Promises

// const encontrarPreco = buscarPreco("lace")
// encontrarPreco.then((produto)=> {
//   const produtoNome = produto.nome;
//     console.error("Erro encontrado", err);
//   })


// Tentativa com async/await

async function realizarCompras(produto) {
  try {
    const mercadoria = await buscarPreco(produto);
    const valorParcela = await calcularParcela(mercadoria.preco);
    const quantidadeParcelas = mercadoria.preco / valorParcela;
    return console.log(`Sua ${mercadoria.nome} custa R$${mercadoria.preco.toFixed(2).replace(".", ",")} e voce pagara em ${quantidadeParcelas} parcelas de R$${valorParcela.toFixed(2).replace(".", ",")}`)
  }
 catch (error) {
  console.error(error)
}
}



realizarCompras("lace");



// Esta atividade foi feita com muito sacrifio e ajuda das outras meninas do grupo, pois nao consegui
//entender o conteudo, mesmo assistindo as aulas por varias e varias vezes. 