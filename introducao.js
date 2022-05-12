// function

function somar(numero) {
    console.log(numero + numero)
    return numero + numero
}

// arrow function

let somar = (numero) => {
    console.log(numero + numero)
    return numero + numero
}

// fluxo síncrono/assíncrono

console.log(`Primeiro`)

setTimeout(() => {
    console.log(`Segundo`)
}, 2000)

console.log(`Terceiro`)

// exemplo

let mostrarPrimeiraParte = () => {
    setTimeour (() => {
        return console.log("Esta mensagem deve")
    }, 3000)
}

let mostrarSegundaParte = () => {
    setTimeout (() =>{
        return console.log("completar esta!")
    }, 2000)
}

mostrarPrimeiraParte()
mostrarPrimeiraParte() // esse exemplo vai na verdade mostrar a segunda parte primeiro, porque tem menos milissegundos.