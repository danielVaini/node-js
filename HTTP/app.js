const http = require('http');


http.createServer((req, res) => {
  res.end('Olá');
}).listen(3333);
