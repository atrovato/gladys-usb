const exec = require('child_process').exec;

module.exports = function (deviceInfo) {
  return new Promise((resolve, reject) => {
    var port = deviceInfo.deviceType.protocol;
    var type = deviceInfo.deviceType.type;

    if (type !== 'binary') {
      reject('Device type ' + type + ' not managed');
    }

    var value = deviceInfo.state.value;
    var power = value == 1 ? 'on' : 'off';
    exec(__dirname + '/uhubctl/uhubctl -a ' + power + ' -p ' + port, function (error, stdout, stderr) {
      if (error) {
        console.error(stderr);
        return reject(error);
      } else {
        console.log(stdout);
        return resolve(value);
      }
    });
  });
};