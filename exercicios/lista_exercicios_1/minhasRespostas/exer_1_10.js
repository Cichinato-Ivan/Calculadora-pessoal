// Exercício 1 ________________________

// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores

function calc(num1, num2) {
    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let divisao = num1 / num2

    return console.log(soma, subtracao, multiplicacao, divisao)
}

calc(3, 2)

// ____________________________________________________________
/** 
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
    ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
    triângulo).

*/

function triangulo(l1, l2, l3) {
    if (l1 === l2 && l2 === l3) {
        return 'Equilátero'
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return 'Isósceles'
    } else if (l1 !== l2 !== l3) {
        return 'Escaleno'
    }
}

console.log(triangulo(10, 10 , 10))
console.log(triangulo(9, 10 , 10))
console.log(triangulo(9, 8 , 10))

// ___________________________________________________________________________________

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function expoent(bas, exp) {
    // Método antigo
    let result = Math.pow(bas, exp)
    // Método novo
    result = bas ** exp
    return `${bas} elevado a ${exp} é: ${result}`
}

console.log(expoent(3, 2))

// _______________________________________________________
// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function module(num1, num2) {
    let divisao = num1 / num2
    let resto = num1 % num2
    return `O resultao da divisão entre ${num1} e ${num2} é ${divisao} 
    e o resto dessa divisão é ${resto}`
}

console.log(module(5, 2))

// __________________________________________________________________
/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)
*/

function money(valorDecimal) { // v = valor
   valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace("." , ",")}`
   console.log(valorEmReais)
}
money(0.4 + 1.2)