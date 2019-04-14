function start() {
  console.log('request handler START was called');
}

function upload() {
  console.log('request handler UPLOAD was called');
}

exports.start = start;
exports.upload = upload;
