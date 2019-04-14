const http = require('http');

function start() {
  function onRequest(req, res) {
    console.log('Request Received');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('server has started');
}

// function execute(someFunction, value) {
//   someFunction(value);
// }

// execute(word => console.log(word), 'Hello');

module.exports = start;
