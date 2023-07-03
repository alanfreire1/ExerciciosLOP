let turno = prompt(`Qual o turno que você estuda?\nM-Matutino, V-Vespertino ou N-Noturno`)

turno = turno[0].toLowerCase();

switch (turno) {
    case `M`:
        alert(`Bom Dia!`)
        break;
    case `V`:
        alert(`Boa Tarde!`)
        break;
    case `N`:
        alert(`Boa Noite!`)
        break;
    default:
        alert(`Valor Inválido`);
}