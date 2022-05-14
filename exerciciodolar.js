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
      const cambioDolarComercial = await buscarPrecoDolar();
      const juros = await buscarJurosImportacao();
      const jurosAplicados =
        precoEmDolar *
        cambioDolarComercial.comercial *
        (juros.juros1 + juros.juros2);
      const valorEmReal =
        precoEmDolar * cambioDolarComercial.comercial + jurosAplicados;
  
      return console.log(
        `O preço final do seu produto é R$${valorEmReal.toFixed(2)}`
      );
    } catch (error) {
      console.log(error);
    }
  }
  
  calcularValorEmReal(1270);