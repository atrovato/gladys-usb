const exec = require('child_process').exec;

module.exports = function() {
  return new Promise((resolve, reject) => {
    console.log('Cloning uhubctl to ' + __dirname + '...');
    exec('git clone https://github.com/mvp/uhubctl.git ' + __dirname + '/uhubctl', function(error, stdout, stderr) {
      if (error) {
        console.error(stderr);
        return reject(error);
      } else {
        console.log(stdout);
        exec('cd ' + __dirname + '/uhubctl && make', function(error, stdout, stderr) {
          if (error) {
            console.error(stderr);
            return reject(error);
          } else {
            console.log(stdout);
            return resolve();
          }
        });
      }
    });
  });
};