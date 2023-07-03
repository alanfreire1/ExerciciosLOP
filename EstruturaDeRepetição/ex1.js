let nota = parseFloat(prompt(`Digite uma nota váilida`));
let notaValida = nota >=0 && nota <= 0;

for (let i = 0 ; !notaValida ; i++){
    alert(`Nota inválida`);
    nota = parseFloat(prompt(`Digite uma nota válida:`));
    notaValida = nota >=0 && nota <=0;

}

alert(`Programa encerrado com a nota ${nota}`); 
