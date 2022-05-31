import BaseFormatter from "./BaseFormatter";

class ListFormatter extends BaseFormatter {
  static commas({ value }) {
    if (value.length < 2) return value[0];
    last_element = value.pop();
    value[value.length - 1] = value[value.length - 1] + " e " + last_element;
    return value.join(", ");
  }

  static bullets({ value, text_type }) {
    if (text_type == ".txt") return value.join("</li><p>");

    if (text_type == ".docx") return value.join("a");
  }
}

module.exports = ListFormatter;
