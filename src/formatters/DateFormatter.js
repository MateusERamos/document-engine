import BaseFormatter from "./BaseFormatter";

class DateFormatter extends BaseFormatter {
  static #month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  static extended({ value }) {
    const date = new Date(value);
    return `${date.getDate()} de ${
      DateFormatter.#month[data.getMonth()]
    } de ${date.getFullYear()}`;
  }

  static date_extended({ value }) {
    const date = new Date(value);
    return `${date.getDate()} de ${
      DateFormatter.#month[data.getMonth()]
    } de ${date.getFullYear()}`;
  }
}

module.exports = DateFormatter;
