import base from "../formatters/BaseFormatter";

class DocumentProcessor {
  execute(template, variables) {
    console.log("estamos criando um documento...");
    return "htmlString";
  }

  variableFormatter(variable) {
    const style = variable.display_style || "plain";
    return base.formatters[`${variable.type}Formatter`][style](variable);
  }
}

module.exports = new DocumentProcessor();
