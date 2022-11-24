var http = require('http');

http.createServer(function(req, res){

res.write("Brasil 4 X 1 Servia \n");

res.end("bom dia!"); //sempre usar para finalizar o programa

}).listen(3000);