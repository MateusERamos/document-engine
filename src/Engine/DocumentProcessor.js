import { formatters } from "../formatters/Formatter";

class DocumentProcessor {
  execute(template, variables) {
    console.log("estamos criando um documento...");
    return "htmlString";
  }

  variableFormatter(variable) {
    console.log(variable);
    const style =
      variable.display_style && !variable.display_style.includes("%")
        ? variable.display_style
        : "plain";
    const type =
      variable.type.substr(0, 11) === "structured_"
        ? "structured"
        : variable.type;
    try {
      return formatters[type][style](variable);
    } catch {
      console.log("");
      return variable.value;
    }
  }
}

module.exports = new DocumentProcessor();
