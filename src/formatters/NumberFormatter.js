import BaseFormatter from "./BaseFormatter";
import Utils from "../Utils";

class NumberFormatter extends BaseFormatter {
  static extended({ variables, variable }) {
    return `${variables[variable]} (${Utils.number2words(
      variables[variable]
    )})`;
  }

  static percent({ variables, variable }) {
    return `${variables[variable]}% (${Utils.number2words(
      variables[variable]
    )} por cento)`;
  }

  static ordinal({ variables, variable }) {
    //TO DO
    return false;
  }
}

module.exports = NumberFormatter;
