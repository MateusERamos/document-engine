import BaseFormatter from "./BaseFormatter";
import Utils from "../Utils";

class CurrencyFormatter extends BaseFormatter {
  static extended({ value }) {
    return `${value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} (${Utils.number2words(value)})`;
  }

  static date_extended({ value }) {
    return `${value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} (${Utils.number2words(value)})`;
  }

  static plain({ value }) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

module.exports = CurrencyFormatter;
