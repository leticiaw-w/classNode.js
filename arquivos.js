//criando arquivos direito do site(com o localhost)
let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res){
    let q = url.parse(req.url, true).query;
    res.write('Arquivo criado com sucesso!');
    fs.appendFile(q.nome+'.txt', q.conteudo, function (err){
        if(err) throw err;
  });
  res.end();
}).listen(80);

//nome: o nome do arquivo
//conteudo: o que vai ter dentro