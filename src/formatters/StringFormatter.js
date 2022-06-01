import BaseFormatter from './BaseFormatter';

class StringFormatter extends BaseFormatter {
  static sentence_case({ variable }) {
    return variable.charAt(0).toUpperCase() + variable.toLowerCase().slice(1);
  }

  static uppercase({ variables, variable }) {
    return variable.toUpperCase();
  }

  static lowercase({ variable }) {
    return variable.toLowerCase();
  }
}

module.exports = StringFormatter;
