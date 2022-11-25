var http = require('http');

http.createServer(function(req, res){

res.writeHead(200, {'content-Type': 'text/html'})

res.write("<h2> Brasil 2 X 0 Servia </h2> <br>");

res.write(Date().substring(16,24)+'<br> <br>'); //essa função pega a data e a hora completa
                                                //substring:retorna caracteres do valor cadeia a partir da posição de caractere especificada por início 
res.end("bom dia!"); //sempre usar para finalizar o programa

}).listen(3000);