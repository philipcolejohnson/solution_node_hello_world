var chalk = require("chalk");

var logger = {
  log: function(message, logLevel) {
    switch ( logLevel.toUpperCase() ) {
      case "INFO":
        this.info(message);
        break;

      case "WARNING":
        this.warning(message);
        break;

      case "ERROR":
        this.error(message);
        break;
    
      default:
        // always a good idea to have error-checking
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