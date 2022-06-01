import VariableProcessor from './VariableProcessor';
import nunjucks from 'nunjucks';

class DocumentProcessor {
  constructor() {}

  execute(documentTemplate, variables) {
    const processedVariables = VariableProcessor.formatter(variables);
    //processedVariables = { ...processedVariables, ...date };
    const document = applyVariables(documentTemplate, processedVariables);
    return encodeURI(document);
  }

  applyVariables(documentTemplate, variables) {
    // const template = nunjucks.compile(decodeURI(documentTemplate));
    // const result = template.render(variables);
    const result = nunjucks.renderString(
      decodeURI(documentTemplate),
      variables,
    );
    return result;
  }
}

export default new DocumentProcessor();
