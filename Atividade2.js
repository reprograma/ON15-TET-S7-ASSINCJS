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
    const encontrarPrecoDolar = await buscarPrecoDolar();
    const JurosImportacao = await buscarJurosImportacao();
    const valorEmReal = encontrarPrecoDolar.comercial * precoEmDolar;
    const valorFinal = valorEmReal + (valorEmReal * JurosImportacao.juros1) + (valorEmReal * JurosImportacao.juros2);
    console.log(`O preco final da sua mercadoria é R$${valorFinal.toFixed(2).replace(".", ",")}`);
  }
  catch(error) {console.error(error)}
} 
calcularValorEmReal(1270)
