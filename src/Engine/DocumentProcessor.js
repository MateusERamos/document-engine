import VariableProcessor from './VariableProcessor';
import nunjucks from 'nunjucks';

class DocumentProcessor {
  constructor() {}

  execute(documentTemplate, variables) {
    const formattedVariables = VariableProcessor.formatter(variables);
    //processedVariables = { ...processedVariables, ...date };

    const documentTxt = nunjucks.renderString(
      decodeURI(documentTemplate),
      formattedVariables,
    );

    return encodeURI(documentTxt);
  }
}

export default new DocumentProcessor();
