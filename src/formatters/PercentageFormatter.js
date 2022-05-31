import BaseFormatter from "./BaseFormatter";

class PercentageFormatter extends BaseFormatter {
  static plain({ variables, variable }) {
    return variables[variable].replace(".", ",") + "%";
  }

  static extended({ value }) {
    return Utils.number2words(variables[variable]) + " porcento";
  }
}

module.exports = PercentageFormatter;
