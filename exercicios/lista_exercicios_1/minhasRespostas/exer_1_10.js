/* Exercício 1 ________________________

const { functions } = require("lodash")

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

*

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
*

function money(valorDecimal) { // v = valor
   valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace("." , ",")}`
   console.log(valorEmReais)
}
money(0.4 + 1.2)

// __________________________________________________________
/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

// ____________________________________________________________________
/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
*
function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

// ____________________________________________________
/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))

// _______________________________________________
/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado
*

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

/* _______________________________________________

10) ) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível 
por 3 e retorne true
ou false.

*

function multiploX3(number, x) {

    if (number % x == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

multiploX3(13, 3)

 _______________________________________________

11) As regras para o cálculo dos anos bissextos são as seguintes:
    De 4 em 4 anos é ano bissexto;
    De 100 em 100 anos não é ano bissexto;
    De 400 em 400 anos é ano bissexto;
    Prevalecem as últimas regras sobre as primeiras.
    Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
    mensagem e retornando true ou false.

*

function bissexto(ano) {
    if (ano % 4 == 0 && ano % 100 != 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

bissexto(ano = 2028)

_______________________________________________

12) Faça um algoritmo que calcule o fatorial de um número.
 
*

let n = 5
let result = n
for (let i = 1; i < n; i++){
    result *= i
}

console.log(result)

_______________________________________________

13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.


function businessDay(number) {
   switch (number) {
    case 1:
        return "Fim de Semana!"
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        return "Dia útil!"
    case 7:
        return "Fim de Semana!"
    default:
        return "Dia Inválido"
   }
}

console.log(businessDay(1));
console.log(businessDay(2));
console.log(businessDay(3));
console.log(businessDay(4));
console.log(businessDay(5));
console.log(businessDay(6));
console.log(businessDay(7));
console.log(businessDay('a'));


====================================================================================


14)Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.


function quitanda(frutas) {
    switch (frutas) {
        case 'maçã':
            console.log("Não vendemos Maçãs aqui");
            break;
        case 'kiwi':
            console.log("Estamos com escassez de kiwis");
            break;
        case 'melancia':
            console.log("Melancias por apenas R$3,00 o kg");
            break;
        default:
            console.log("Erro, fruta inválida");
            break;
    }
}

quitanda('maçã')
quitanda('kiwi')
quitanda('melancia')
quitanda('tilapia')

=============================================================

15)Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function buyCar(models) {
    switch (models) {
        case 'hatch':
            console.log('Compra efetuada com sucesso');
            break;
        case 'sedan':
        case 'motocicleta':
        case 'camionete':
            console.log('Tem certeza que prefere este modelo?');
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui');
            break;
    }
}

buyCar('sedan')
buyCar('motocicleta')
buyCar('camionete')
buyCar('hatch')
buyCar('barco')