var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(301, {Location: 'http://awagent.com/Home/Welcome'});
  res.end();
}).listen(1300, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1300/');
