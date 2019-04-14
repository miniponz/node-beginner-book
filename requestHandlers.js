const exec = require('child_process').exec;

function start(res) {
  console.log('request handler START was called');

  exec('find /', 
    { timeout: 10000, maxBuffer: 20000 * 1024 },
    function(error, stdout, stderr) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(stdout);
      res.end();  
    });
}

function upload(res) {
  console.log('request handler UPLOAD was called');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Upload');
  res.end(); 
}

exports.start = start;
exports.upload = upload;
