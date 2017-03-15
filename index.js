var _ = require("lodash");
var logger = require("./lib/logger");
var logs = require("./data/logs");

// `logs` is an array, and `data`
// is an individual object consisting
// of a message and a log level
_.each(logs, function(data) {
  logger.log(data.message, data.level);
});