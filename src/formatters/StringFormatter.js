import BaseFormatter from "./BaseFormatter";

class StringFormatter extends BaseFormatter {
  static sentence_case({ variables, variable }) {
    return (
      variables[variable].charAt(0).toUpperCase() +
      variables[variable].toLowerCase().slice(1)
    );
  }

  static uppercase({ variables, variable }) {
    return variables[variable].toUpperCase();
  }

  static lowercase({ variables, variable }) {
    return variables[variable].toLowerCase();
  }
}

module.exports = StringFormatter;
