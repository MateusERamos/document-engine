const stringFormatter = require("../formatters/StringFormatter");
const numberFormatter = require("../formatters/StringFormatter");
const percentageFormatter = require("../formatters/StringFormatter");

class DocumentProcessor {
  execute(template, variables) {
    console.log("estamos criando um documento...");
    return "htmlString";
  }

  variableFormatter(variable) {
    return [`${variable.type}Formatter`][
      `${variable.display_style || "plain"}`
    ](variable);
  }
}

module.exports = DocumentProcessor;
