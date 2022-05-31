import VariableProcessor from "./VariableProcessor";
class DocumentProcessor {
  execute(template, variables) {
    console.log("estamos criando um documento...");
    const processedVariables = VariableProcessor.formatter(variables);
    return "htmlString";
  }
}

module.exports = new DocumentProcessor();
