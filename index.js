const install = require('./lib/install.js');
const exec = require('./lib/exec.js');

module.exports = function () {
  return {
    install: install,
    exec: exec
  };
};