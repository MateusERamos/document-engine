import BaseFormatter from "./BaseFormatter";
import Utils from "../Utils";

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
