import BaseFormatter from './BaseFormatter';
import Utils from '../Utils';

class NumberFormatter extends BaseFormatter {
  static extended({ variable }) {
    return `${variable} (${Utils.number2words(variable)})`;
  }

  static percent({ variable }) {
    return `${variable}% (${Utils.number2words(variable)} por cento)`;
  }

  static ordinal({ variable }) {
    //TO DO
    return false;
  }
}

export default NumberFormatter;
