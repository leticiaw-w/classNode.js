let fs = require('fs');

fs.appendFile('novoArquivo.txt', 'Arquivo criado com sucesso!', function (err){ //criando arquivos
    if (err) throw err;
    console.log('arquivo criado...');
});
//novoAquivo.txt: o documento que será criado
//Arquvi criado com sucesso: o que vai aparecer lá dentro