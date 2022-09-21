let inputNome = document.getElementById('nome')

let primeiroSemestre = document.getElementById('primeiroSemestre')
let segundoSemestre = document.getElementById('segundoSemestre')
let terceiroSemestre = document.getElementById('terceiroSemestre')
let quartoSemestre = document.getElementById('quartoSemestre')
let res = document.getElementById('resultado')

function calcular() {

    let nome = inputNome.value
    
    let pSemestre = Number(primeiroSemestre.value)
    
    let sSemestre = Number(segundoSemestre.value)
    
    let tSemestre = Number(terceiroSemestre.value)
    
    let qSemestre = Number(quartoSemestre.value)
    
    let somaSemestres = pSemestre + sSemestre + tSemestre + qSemestre
    let notaFinal = somaSemestres / 4

    res.innerHTML = `Olá ${nome}. Sua média final é ${notaFinal.toFixed(1)}`
    console.log(`Olá ${nome}. Sua média final é ${notaFinal.toFixed(1)}`)
}

