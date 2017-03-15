var chalk = require("chalk");
var _ = require("lodash");

var logger = {
  log: function(msg, logLevel) {
    switch (logLevel) {
      case "INFO":
        this.info(msg);
        break;

      case "WARNING":
        this.warning(msg);
        break;

      case "ERROR":
        this.error(msg);
        break;
    
      default:
        console.log("Couldn't find that logging level!");
        break;
    }
  },

  info: function(msg) {
    console.log( chalk.blue(msg) );
  },

  warning: function(msg) {
    console.log( chalk.yellow(msg) );
  },

  error: function(msg) {
    console.log( chalk.red(msg) );
  }
}

module.exports = logger;