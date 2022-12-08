let http = require('http');
let url = require('url');

http.createServer(function (req, res){
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(req.url);
    let q = url.parse(req.url, true).query;
    let txt = "<br>dia:" +q.dia+ "<br>mês:" +q.mes+ "<br> ano:" +q.ano;
    res.end(txt);

}).listen(80);  

//passando informação direto do site: http://localhost/?dia=2&mes=jan&ano=2021