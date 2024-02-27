/*
    === X ==
    !== X !=
    parseInt, parseFloat
    while
    for
*/

let entrada = require('prompt-sync')();  

// let idade = parseInt(entrada('Digite sua idade: ')); 

// let idadeInt = parseInt(idade);

// if (idade < 18) {
//     console.log('Menor');
// } else if (idade === 18) {
//     console.log('Tem 18');
// } else {
//     console.log('Maior');
// }

// console.log(`Sua idade é ${idade}`); 


// let num = parseInt(entrada('Digite um número para visualizar a tabuada!'));

// let cont = 1;

// while (cont <= 10) {
//     let calc = num * cont;
//     console.log(`${num} X ${cont} = ${calc}`);
//     cont++;
// }

// for (let cont = 1; cont <= 10; cont++) {
//     let calc = num * cont;
//     console.log(`${num} X ${cont} = ${calc}`);
// }

const senha = '123456'; 
let cont = 0;
do {    
    if (cont === 3) {
        break;
    }
    cont++;    
    var senhaDig = entrada('Digite a senha para acessar o sitema: ');    
} while (senhaDig !== senha);

if (cont >= 3) {
    console.log('Acesso não autorizado');    
} else {
    console.log('Acesso autorizado');
}

entrada();

// let sn = '123456';
// let snDg = entrada('Digite a senha para acessar o sitema: ');

// while (sn ==! snDg) {
//     snDg = entrada('Digite a senha para acessar o sitema: ');
// }