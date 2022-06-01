import VariableProcessor from "./VariableProcessor";
import Utils from "../Utils";

class DocumentProcessor {
  execute(document_template, variables) {
    let processedVariables = VariableProcessor.formatter(variables);
    processedVariables = { ...processedVariables, ...date };

    document = applyVariables(document_template, variables);

    return encodeURI(document);
  }

  applyVariables(document_template, variables) {
    nunjucks_template = Utils.envNunjucks.from_string(
      decodeURI(document_template)
    );
    filled_text = nunjucks_template.render(variables);

    return filled_text;
  }
}

module.exports = new DocumentProcessor();
