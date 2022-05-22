// // Primeiro exercício: original

// function buscarPreco(produto) {
//     setTimeout(() => {
//       if (produto === "hormonios") {
//         return {
//           nome: "Hormônios",
//           preco: 99.00
//         }
//       } else if (produto === "unhas gel") {
//         return {
//           nome: "Unhas em Gel",
//           preco: 190.00
//         }
//       } else if (produto === "lace"){
//         return {
//           nome: "Lace",
//           preco: 3900.00
//         }
//       } else {
//         return "Produto não encontrado"
//       }
//   }, 2000)
// }

// // função que simula busca num banco que retorna o valor das parcelas:
  
// function calcularParcela(preco) {
//   let parcelasDesejadas = 10
//   setTimeout(() => {
//     return preco * parcelasDesejadas
//   }, 2000)
// }

// teste do exercício 1

function buscarPreco(item) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (produto === "hormonios") {
        return resolve ({
          nome: "Hormônios",
          preco: 99.00
        })
      } else if (produto === "unhas gel") {
        return resolve({
          nome: "Unhas em Gel",
          preco: 190.00
        })
      } else if (produto === "lace"){
        return resolve ({
          nome: "Lace",
          preco: 3900.00
        })
      } else {
        return "Produto não encontrado"
      }
    }, 2000)
  })
}
 
// função que simula busca num banco que retorna o valor das parcelas:
  
const calcularParcela = (totalParcelas) => {
  
    return new Promise((resolve, reject) => {
      let parcelasDesejadas = 10
     setTimeout(() => {
         return resolve(
             preco / parcelasDesejadas
            )   
        }, 2000)
    })
}


async function resolverPromises(produto){

    try{
        const produto = await buscarPreco();
        const  valorParcela =  await  calcularParcela();
        console.log ( `Sua Lace custa ${produto}  e você pagará em 10x de ${valorParcela}` );
  
    }catch(error){
        console.error(' capturamos um erro:' , error)
    }
}

resolverPromises("lace")





// Segundo exercício: original (.............................................)

// function buscarPrecoDolar() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         comercial: "5.03",
//         turismo: "5.17",
//       });
//     }, 1000);
//   });
// }

// function buscarJurosImportacao() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         juros1: 0.06,
//         juros2: 0.11,
//         message:
//         "os dois juros são aplicados no valor total do produto em real",
//       });
//     }, 1000);
//   });
// }

// async function calcularValorEmReal(precoEmDolar) {

//   try {
//       const precoDolar = await buscarPrecoDolar();
//       const jurosImportacao = await buscarJurosImportacao();
//       const valorReal = precoDolar. comercial * precoEmDolar;
//       const precoFinal = valorReal + (valorReal * jurosImportacao . juros1) + (valorReal * jurosImportacao .juros2);
//       console.log( `O preço final do seu produto é R$ ${ precoFinal . toFixed ( 2 ) . replace ( "." ,  "," ) } .` ) ;
//   } 
//   catch (error) {
//       console.erro("Capturamos um erro", error);
//   }
// }

// calcularValorEmReal(1270)

