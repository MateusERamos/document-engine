import BaseFormatter from "./BaseFormatter";

class ListFormatter extends BaseFormatter {
  static commas({ variables, variable }) {
    const value = variables[variable];
    if (value.length < 2) return value[0];
    last_element = value.pop();
    value[value.length - 1] = value[value.length - 1] + " e " + last_element;
    return value.join(", ");
  }

  static bullets({ variables, variable, text_type }) {
    if (text_type == ".txt") return variables[variable].join("</li><p>");

    if (text_type == ".docx") return variables[variable].join("\a");
  }
}

module.exports = ListFormatter;
