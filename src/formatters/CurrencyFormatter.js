import BaseFormatter from "./BaseFormatter";
import Utils from "../Utils";

class CurrencyFormatter extends BaseFormatter {
  static extended({ variables, variable }) {
    const value = variables[variable];
    return `${value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} ${Utils.number2words(value)}`;
  }

  static date_extended({ variables, variable }) {
    const value = variables[variable];
    return `${value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} ${Utils.number2words(value)}`;
  }

  static plain({ variables, variable }) {
    return variables[variable].toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

module.exports = CurrencyFormatter;
