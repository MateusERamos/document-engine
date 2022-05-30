const StringFormatter = require("../formatters/StringFormatter");
const NumberFormatter = require("../formatters/NumberFormatter");
const PercentageFormatter = require("../formatters/PercentageFormatter");

class BaseFormatter {
  static plain({ value }) {
    return value;
  }

  static get formatters() {
    return {
      StringFormatter,
      NumberFormatter,
      PercentageFormatter,
    };
  }
}

module.exports = BaseFormatter;
