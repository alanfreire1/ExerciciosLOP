let NumeroInteiro = (parseInt(prompt`Digite o primeiro número inteiro`))

let NumeroInteiro2 = (parseInt(prompt`Digite o segundo número inteiro`))

let NumeroReal = (parseFloat(prompt`Digite o número real`))

let EntradaInvalida = isNaN(NumeroInteiro, NumeroInteiro2, NumeroReal)


if(EntradaInvalida) {
    alert(`Entrada Invalida, digite novamente.`)
} else{
    alert(`${(NumeroInteiro*2)*(NumeroInteiro2/2)} ; ${(NumeroInteiro*3)+NumeroReal} ; ${NumeroReal**3} `) 
}

