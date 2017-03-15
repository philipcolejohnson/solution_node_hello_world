var chalk = require("chalk");

var logger = {
  log: function(msg, logLevel) {
    switch ( logLevel.toUpperCase() ) {
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
        // always a good idea to have error-checking!
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