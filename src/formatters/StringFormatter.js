const BaseFormatter = require("./BaseFormatter");

class StringFormatter extends BaseFormatter {
  static sentence_case(value) {
    return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
  }

  static uppercase(value) {
    return value.toUpperCase();
  }

  static lowercase(value) {
    return value.toLowerCase();
  }
}

module.exports = StringFormatter;
