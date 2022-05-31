import BaseFormatter from "./BaseFormatter";

class PercentageFormatter extends BaseFormatter {
  static plain({ value }) {
    return value.replace(".", ",") + "%";
  }

  static extended({ value }) {
    return Utils.number2words(value) + " porcento";
  }
}

module.exports = PercentageFormatter;
