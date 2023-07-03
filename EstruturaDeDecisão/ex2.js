let valor = (parseFloat(prompt`Digite um valor`));

let positivo = valor > 0;

let negativo = valor <0;

let nulo = valor == 0 ;

if(positivo){
    alert(`O número é positivo`)
}else if(negativo){
    alert(`O número é negativo`)
}else if(nulo){
    alert(`O número é  nulo`)
}
