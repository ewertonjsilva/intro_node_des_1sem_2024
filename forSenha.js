let entrada = require('prompt-sync')();  

let senha = '1598753';
let snCorreta = false;

for (let index = 1; index <= 3; index++) {
    const snDg = entrada('Digite a senha: '); 
    if (senha === snDg) {
        snCorreta = true;
        break;
    }
}

console.log(snCorreta ? 'Acesso autorizado' : 'Acesso negado');
entrada();