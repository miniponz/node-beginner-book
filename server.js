const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(req, res) {
    const pathname = url.parse(req.url).pathname;  
    console.log(`Request for ${pathname} received`);

    const content = route(handle, pathname);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(content);
    res.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('server has started');
}

exports.start = start;
