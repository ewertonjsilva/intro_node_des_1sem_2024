// LISTAGEM DE OBJETOS 

let entrada = require('prompt-sync')();  

let pessoas = [
    {
        nome: 'Efenísio', 
        idade: 25, 
        altura: 1.99, 
        trabalha: false 
    }, 
    {
        nome: 'Bormutio', 
        idade: 85, 
        altura: 1.78, 
        trabalha: true 
    }, 
    {
        nome: 'Eliza Larissa', 
        idade: 19, 
        altura: 1.70, 
        trabalha: false 
    }
];

let opcao;

do {
    console.log('PROGRAMA DE CADASTRO DE PESSOAS');
    console.log('1 - Listar');
    console.log('2 - Visualizar');
    console.log('3 - Cadastrar'); 
    console.log('4 - Editar');
    console.log('5 - Excluir'); 
    console.log('0 - Sair');
    opcao = entrada('Digite uma opção da lista: ');
    
    if (opcao === '1') {
        console.log('-----------------------------');
        console.log('Lista de pessoas cadastradas: '); 
        pessoas.forEach((pessoa, n) => {
            console.log((n+1) + ' - ' + pessoa.nome);
        });
        entrada('Pressione Enter para prosseguir!');
        console.log('-----------------------------');
    }

    if (opcao === '2') {
        console.log('-----------------------------');
        let nPessoa = entrada('Digite o nº da pessoa p/ ver seus dados: ');
        if (nPessoa > pessoas.length) {
            console.log('Não existe ninguém com este código!');
        } else {
            let codigo = parseInt(nPessoa) - 1;
            console.log('Nome: ' + pessoas[codigo].nome);
            console.log('Idade: ' + pessoas[codigo].idade);
            console.log('Altura: ' + pessoas[codigo].altura.toFixed(2));
            console.log('Trabalha: ' + (pessoas[codigo].trabalha === true ? 'Sim' : 'Não'));
        }

        entrada('Pressione Enter para prosseguir!');
        console.log('-----------------------------');
    } 

    if (opcao === '3') {
        console.log('-----------------------------'); 
        console.log('Cadastro de pessoa: ');
        let nm = entrada('Digite o nome: ');
        let id = entrada('Digite a idade: ');
        let alt = entrada('Digite a altura: ');
        let trb = entrada('Digite S se a pessoa trabalha e N se não trabalha: '); 

        const objPess = {
            nome: nm, 
            idade: parseInt(id), 
            altura: parseFloat(alt), 
            trabalha: trb === 'S' || trb === 's' ? true : false
        }

        pessoas.push(objPess);
        console.log('Pessoa cadastrada com sucesso!');
        entrada('Pressione Enter para prosseguir!');
        console.log('-----------------------------');        
    }

    if (opcao === '4') {
        console.log('-----------------------------');
        let nPessoa = entrada('Digite o nº da pessoa que deseja editar: ');
        if (nPessoa > pessoas.length) {
            console.log('Não existe ninguém com este código!');
        } else {
            let codigo = parseInt(nPessoa) - 1;
            console.log('Registro a ser editado nº ' + nPessoa);
            console.log('1- Nome: ' + pessoas[codigo].nome);
            console.log('2- Idade: ' + pessoas[codigo].idade);
            console.log('3- Altura: ' + pessoas[codigo].altura.toFixed(2));
            console.log('4- Trabalha: ' + (pessoas[codigo].trabalha === true ? 'Sim' : 'Não')); 
            let nome = pessoas[codigo].nome; 
            let idade = pessoas[codigo].idade; 
            let altura = pessoas[codigo].altura; 
            let trabalha = (pessoas[codigo].trabalha === 'S' ? 'S' : 'N');
            console.log('-----------------------------');
            const edt = entrada('Digite de 1 a 4 para apontar qual campo será alterado: ');

            if (edt === '1') {
                nome = entrada('Digite o nome correto: ');
            } 
            if (edt === '2') {
                idade = entrada('Digite a idade correta: ');
            } 
            if (edt === '3') {
                altura = entrada('Digite a altura correta: ');
            } 
            if (edt === '4') {
                trabalha = entrada('Corrija com S se a pessoa trabalha e N se não trabalha: ');
            }

            const objPess = {
                nome: nome, 
                idade: parseInt(idade), 
                altura: parseFloat(altura), 
                trabalha: trabalha === 'S' || trabalha === 's' ? true : false
            } 
            pessoas[nPessoa - 1] = objPess;
        }

        console.log('Pessoa atualizada com sucesso!');
        entrada('Pressione Enter para prosseguir!');
        console.log('-----------------------------');
        
    } 

    if (opcao === '5') {
        console.log('-----------------------------'); 
        let nPessoa = entrada('Digite o nº da pessoa que deseja excluir: ');
        if (nPessoa > pessoas.length) {
            console.log('Não existe ninguém com este código!');
        } else {
            pessoas.splice(nPessoa -1, 1);
        }
        console.log('Registro excluído com sucesso!');
        entrada('Pressione Enter para prosseguir!');
        console.log('-----------------------------');        
    }

} while (opcao !== '0');

console.log('Programa encerrado!');


