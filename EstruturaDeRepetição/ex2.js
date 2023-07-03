let usuário = prompt(`Digite seu nome de usuário`);
let senha = prompt(`Digite sua senha`);

for (let i = 0; usuário == senha ; i++){
    alert(`senha inválida`)
    alert(`A senha tem que ser difente do usuário`)
    senha = prompt(`Digite uma senha válida`)
}

alert(`Senha Correta\nSeja Bem Vindo`)