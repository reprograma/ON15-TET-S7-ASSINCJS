// Function Normal

// function somar(numero) {
//     console.log(numero + numero)
//     return numero + numero
// }

// Ou como uma Arrow Function

// somar = () => {
//     console.log(numero + numero)
//     return numero + numero
// }

// fluxo sícrono/assíncrono

// console.log('Esse console vai retornar primeiro')

// setTimeout(() => {
//     console.log('Esse console vai retornar segundo')
// }, 2000)

// console.log('Esse console vai retornar terceiro')

// Exemplo

let mostrarPrimeiraParte = () => {
    setTimeout(() => {
        return console.log("Esta mensagem deve")
    }, 4000)
}

let mostrarSegundaParte = () => {
    setTimeout(() => {
        return console.log("completar esta!")
    }, 6000)
}

mostrarPrimeiraParte()
mostrarSegundaParte()

