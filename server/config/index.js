var _ = require("lodash");
var defaults = require("./default.js");
var config = require("./" + defaults.mode + ".js");

module.exports = _.merge({}, defaults, config);