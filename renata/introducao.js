// fluxo síncrono

console.log("Este console vai mostrar o primeiro")
console.log("Este console vai mostrar o segundo")
console.log("Este console vai mostrar o terceiro")

console.log("------------------")

// function

// function somar(numero){
//     console.log(numero + numero)
//     return numero + numero
// }

// arrow function

// let somar = (numero) => {
//     console.log(numero + numero) 
//     return numero + numero
// }


// Fluxo sícrono/Assíncrono

console.log("Este console vai mostrar o primeiro")

setTimeout(() => {
    console.log("Este console vai mostrar o segundo")

}, 2000)

console.log("Este console vai mostrar o terceiro")

// Exemplo - 3 segundos

let mostrarPrimeiraParte = () => {
    setTimeout(() => {
        return console.log("Esta mensagem deve")
    }, 3000)
}

let mostraSegundaParte = () => {
    setTimeout(() => {
        return console.log("completar esta")
    }, 2000)
}

mostrarPrimeiraParte();
mostraSegundaParte();
console.log("__________________")

// Exemplo 2

let somar = (numero) => {
    console.log(numero + numero);
    setTimeout(() => {
        return console.log(numero + numero), 3000}) 
}

let imprimirSoma = (resultadoSoma) => console.log(resultadoSoma)

somar(2);
imprimirSoma(somar(3));