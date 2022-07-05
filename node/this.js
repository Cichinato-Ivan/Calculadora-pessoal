// this dentro de um módulo aponta para o módulo
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports) 

// this dentro de uma função aponta para o global(externo da função)
function logThis() {
    console.log('Dentro de um função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()