import BaseFormatter from './BaseFormatter';
import Utils from '../Utils';

class CurrencyFormatter extends BaseFormatter {
  static extended({ variable }) {
    const value = variable;
    return `${value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })} (${Utils.number2words(value)})`;
  }

  static date_extended({ variable }) {
    const value = variable;
    return `${value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })} (${Utils.number2words(value)})`;
  }

  static plain({ variable }) {
    return variable.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}

export default CurrencyFormatter;
