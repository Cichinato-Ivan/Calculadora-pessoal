function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?')) // pode-se encadear diversas vezes .then()
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // .catch() -> tratamento de erro 