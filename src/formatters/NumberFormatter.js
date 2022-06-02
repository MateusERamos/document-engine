import BaseFormatter from './BaseFormatter';
import extenso from 'extenso';
import 'ordinal-pt-br';

class NumberFormatter extends BaseFormatter {
  extended({ variable }) {
    return `${variable} (${extenso(variable)})`;
  }

  percent({ variable }) {
    return `${variable}% (${extenso(variable)} por cento)`;
  }

  ordinal({ variable }) {
    return variable.toOrdinal();
  }
}

export default new NumberFormatter();
