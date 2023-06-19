dados:
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

calcularValorEmReal()
async function calcularValorEmReal(precoEmDolar) {
  try {
      const precoEmDolar = 1270
      const cotacao = await buscarPrecoDolar() 
      const valorReal = (cotacao.comercial) * precoEmDolar
      const juros = await buscarJurosImportacao()
      const valorFinal = valorReal + (valorReal * juros.juros1) + (valorReal * juros.juros2)
      console.log(`
      O preço final do seu produto é: R$ ${valorFinal.toFixed(2)}`)

  }catch (error) {
      console.error('Capturamos um erro:', error)
  }
}


