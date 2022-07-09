const { reject } = require("lodash")

function funcionarOuNao(valor, chanceErro) {
    return new Promise ((resolve, rejct) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => console.log(v),
        err => console.log(`Erro esp.: ${err}`)
    )
    .then(() => console.log('Qase Fim'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim'))