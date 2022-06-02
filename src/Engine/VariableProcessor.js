import Formatter from '../formatters/Formatter';
const { formatters } = Formatter;

class VariableProcessor {
  static formatter({ variables, variables_specification }) {
    const formatted = {};

    for (const index in variables_specification) {
      const variable = variables[index];
      formatted[index] = VariableProcessor.#variableFormatter({
        specs: variables_specification[index],
        variable,
      });
    }

    return formatted;
  }

  static #variableFormatter(variableData) {
    try {
      const style =
        variableData.specs.doc_display_style &&
        !variableData.specs.doc_display_style.includes('%')
          ? variableData.specs.doc_display_style
          : 'plain';
      const type =
        variableData.specs.type.substr(0, 11) === 'structured_'
          ? 'structured'
          : variableData.specs.type;
      return formatters[type][style](variableData);
    } catch (e) {
      console.log(e.message);
      return variableData.variable;
    }
  }
}

export default VariableProcessor;
