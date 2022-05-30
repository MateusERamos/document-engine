const stringFormatter = require("../formatters/StringFormatter");
const numberFormatter = require("../formatters/StringFormatter");
const percentageFormatter = require("../formatters/StringFormatter");

class DocumentProcessor {
  execute(template, variables) {
    console.log("estamos criando um documento...");
    return "htmlString";
  }

  variableFormatter(value, variable_type, display_style) {
    return [`${variable_type}Formatter`][display_style](value);
  }
}

module.exports = DocumentProcessor;
