const BaseFormatter = require("./BaseFormatter");

class NumberFormatter extends BaseFormatter {
  static extended(value) {
    return `${value} (${Utils.number2words(value)})`;
  }

  static percent(value) {
    return `${value}% (${Utils.number2words(value)} por cento)`;
  }

  static ordinal(value) {
    //TO DO
    return false;
  }

  static plain(value) {
    return value.replace(".", ",") + "%";
  }
}

module.exports = NumberFormatter;