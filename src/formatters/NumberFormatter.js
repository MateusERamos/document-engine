const BaseFormatter = require("./BaseFormatter");
const Utils = require("../Utils");

class NumberFormatter extends BaseFormatter {
  static extended({ value }) {
    return `${value} (${Utils.number2words(value)})`;
  }

  static percent({ value }) {
    return `${value}% (${Utils.number2words(value)} por cento)`;
  }

  static ordinal({ value }) {
    //TO DO
    return false;
  }
}

module.exports = NumberFormatter;
