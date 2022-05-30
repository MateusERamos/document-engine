const BaseFormatter = require("./BaseFormatter");

class DataBaseFormatter extends BaseFormatter {
  static plain({ value, response }) {
    if (Object.values(value).indexOf("test1") > -1) return true;
  }
}

module.exports = DataBaseFormatter;
