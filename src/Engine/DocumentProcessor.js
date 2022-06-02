import VariableProcessor from './VariableProcessor';
import nunjucks from 'nunjucks';

class DocumentProcessor {
  constructor() {}

  execute(documentTemplate, variableData) {
    const formattedVariables = VariableProcessor.formatter(variableData);
    console.log(formattedVariables)
    //processedVariables = { ...processedVariables, ...date };

    const documentTxt = nunjucks.renderString(
      documentTemplate,
      formattedVariables,
    );

    console.log(documentTxt)

    return documentTxt;
  }
}

export default new DocumentProcessor();
