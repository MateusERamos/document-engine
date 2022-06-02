import BaseFormatter from './BaseFormatter';
import extenso from 'extenso';

class CurrencyFormatter extends BaseFormatter {
  extended({ variable }) {
    const value = variable;
    return `${value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })} (${extenso(value, { mode: 'currency', currency: { type: 'BRL' } })})`;
  }

  date_extended({ variable }) {
    const value = variable;
    return `${value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })} (${extenso(value, { mode: 'currency', currency: { type: 'BRL' } })})`;
  }

  plain({ variable }) {
    return variable.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}

export default new CurrencyFormatter();
