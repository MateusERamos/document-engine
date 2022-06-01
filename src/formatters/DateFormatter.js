import BaseFormatter from './BaseFormatter';

class DateFormatter extends BaseFormatter {
  static #month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  static plain({ variable, doc_display_style }) {
    const date = new Date(variable);
    return doc_display_style.includes('%')
      ? doc_display_style
          .replace('%d', date.getDate())
          .replace('%m', date.getMonth() + 1)
          .replace('%Y', date.getFullYear())
      : value;
  }

  static extended({ variable }) {
    const date = new Date(variable);
    return `${date.getDate()} de ${
      DateFormatter.#month[date.getMonth()]
    } de ${date.getFullYear()}`;
  }

  static date_extended({ variable }) {
    const date = new Date(variable);
    return `${date.getDate()} de ${
      DateFormatter.#month[date.getMonth()]
    } de ${date.getFullYear()}`;
  }
}

module.exports = DateFormatter;
