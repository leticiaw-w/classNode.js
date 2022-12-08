//não estamos criando servidor, para utilizálo, use o prompt
let url = require('url');
let adr ='http://localhost:8080/index.html?ano=2017&mes=dezembro';
let q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns 'index/html'
console.log(q.search); //returns '?year=2017&month=february'
console.log('Brasil 2 x 1 Croácia'); //bolão do jogo - sexta: 09/12
let qdata = q.query; //returns an object: {ano: 2017, mes: 'dezembro'}
console.log(qdata.mes); // 'dezembro'