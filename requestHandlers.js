function start() {
  console.log('request handler START was called');

  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);
  return 'Hello Start';
}

function upload() {
  console.log('request handler UPLOAD was called');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
