// const exec = require('child_process').exec;

function start(res) {
  console.log('request handler START was called');

  const body = `
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
        <form action="/upload" method="post">
        <textarea name="text" rows="20" cols="60"></textarea>
        <input type="submit" value="Submit text" />
        </form>
    </body>
  </html>`;

  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write(body);
  res.end();  

}

function upload(res) {
  console.log('request handler UPLOAD was called');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Upload');
  res.end(); 
}

exports.start = start;
exports.upload = upload;
