import BaseFormatter from './BaseFormatter';

class PercentageFormatter extends BaseFormatter {
  static plain({ variable }) {
    return variable.replace('.', ',') + '%';
  }

  static extended({ variable }) {
    return Utils.number2words(variable) + ' porcento';
  }
}

module.exports = PercentageFormatter;
