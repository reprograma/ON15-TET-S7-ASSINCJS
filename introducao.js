/* //function

function somar(numero) {
    console.log(numero + numero)
    return numero + numero
}

//arrow function

let somar = (numero) => {
    console.log(numero + numero)
    return numero + numero
} */

// fluxo síncrono/assíncrono    

console.log('Esse console vai retornar primeiro')

setTimeout(() => {
    console.log('Esse console vai retornar segundo')
}, 2000)

setTimeout(() => {
    console.log('Esse console vai retornar terceiro')
}, 3000)


//exemplo

let mostrarPrimeiraParte = () => {
    setTimeout(() => {
        return console.log("Esta mensagem deve ")
    }, 2000)
}

let mostrarSegundaParte = () => {
    setTimeout(() => {
        return console.log("completar esta!")
    }, 4000)
}

mostrarPrimeiraParte()
mostrarSegundaParte()

//exemplo

let somar = (numero) => {
    console.log("primeiro print: " + (numero + numero))
    setTimeout(() => {
        console.log("segundo print: " + (numero + numero))
        return numero + numero}), 6000
}

let imprimirSoma = async (resultadoSoma) => await console.log("print: " + resultadoSoma)

imprimirSoma(somar(3))