setTimeout(() => {
    console.log('retorno primeira callback')
  }, 5000)
  
setTimeout(() => {
console.log('retorno segunda callback')
})

console.log('console direto 1')

setTimeout(() => {
console.log('retorno terceira callback')
}, 3000)

console.log('console direto 2')