import { formatters } from "../formatters/Formatter";

class DocumentProcessor {
  execute(template, variables) {
    console.log("estamos criando um documento...");
    return "htmlString";
  }

  variableFormatter(variable) {
    const style = variable.display_style || "plain";
    const type =
      variable.type.substr(0, 2) === "structured_"
        ? "structured"
        : variable.type;
    return formatters[type][style](variable);
  }
}

module.exports = new DocumentProcessor();
