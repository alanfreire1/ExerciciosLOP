let numero1 = (parseFloat(prompt`Digite o primeiro número`));

let numero2 = (parseFloat(prompt`Digite o segundo número`));

let numero1maior = numero1>numero2

let numero2maior = numero2>numero1

if(numero1maior){
    alert(`O número maior é ${numero1}`)
} else {
    alert(`O número maior é ${numero2}`)
}