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

  static plain({ value, doc_display_style }) {
    const date = new Date(value);
    return doc_display_style.includes("%")
      ? doc_display_style
          .replace("%d", date.getDate())
          .replace("%m", date.getMonth() + 1)
          .replace("%Y", date.getFullYear())
      : value;
  }

  static extended({ value }) {
    const date = new Date(value);
    return `${date.getDate()} de ${
      DateFormatter.#month[data.getMonth()]
    } de ${date.getFullYear()}`;
  }

  static date_extended({ value }) {
    const date = new Date(value);
    return `${date.getDate()} de ${
      DateFormatter.#month[date.getMonth()]
    } de ${date.getFullYear()}`;
  }
}

module.exports = DateFormatter;
