import VariableProcessor from './VariableProcessor';
import nunjucks from 'nunjucks';

class DocumentProcessor {
  constructor() {}

  execute(documentTemplate, variableData) {
    const formattedVariables = VariableProcessor.formatter(variableData);

    const documentTxt = nunjucks.renderString(
      documentTemplate,
      formattedVariables,
    );

    return documentTxt;
  }
}

export default new DocumentProcessor();
