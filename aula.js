var http = require('http');

const dia = require('./biblioteca');

http.createServer(function(req, res){

res.writeHead(200, {'content-Type': 'text/html'});

res.write("<h2> Brasil 2 X 0 Servia </h2> <br>");

res.write("<h2> Brasil 2 X 1 Suíça </h2> <br>");
                                                //substring:retorna caracteres do valor cadeia a partir da posição de caractere especificada por início 
res.write('<p style=color:green>' + Date().substring(16,24)+'<br>'); //essa função pega a data e a hora completa
                                                
res.write(dia.diaDaSemana()+'</p> <br>')

res.end("bom dia!"); //sempre usar para finalizar o programa

}).listen(3000);