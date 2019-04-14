function start() {
  console.log('request handler START was called');
  return 'Hello Start';
}

function upload() {
  console.log('request handler UPLOAD was called');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
