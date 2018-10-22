const exec = require('child_process').exec;

module.exports = function() {
  return new Promise((resolve, reject) => {
    console.log('Cloning uhubctl...');
    exec('git clone https://github.com/mvp/uhubctl.git', function(error, stdout, stderr) {
      if (error) {
        console.error(stderr);
        return reject(error);
      } else {
        console.log(stdout);
        exec('./uhubctl/make', function(error, stdout, stderr) {
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