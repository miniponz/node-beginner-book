const http = require('http');

function onRequest(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World');
  res.end();
}

http.createServer(onRequest).listen(8888);


function execute(someFunction, value) {
  someFunction(value);
}

execute(word => console.log(word), 'Hello');
