import BaseFormatter from './BaseFormatter';
import extenso from 'extenso';

class PercentageFormatter extends BaseFormatter {
  plain({ variable }) {
    return variable.replace('.', ',') + '%';
  }

  extended({ variable }) {
    return extenso(variable) + ' porcento';
  }
}

export default new PercentageFormatter();
