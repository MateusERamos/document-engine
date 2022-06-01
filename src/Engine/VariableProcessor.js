import formatters from '../formatters/Formatter';

class VariableProcessor {
  static formatter({ variables, variables_specification }) {
    // const extra_variables = {};
    // for (const variable in variables) {
    //   if (variables_specification[variable]) {
    //     console.log(variable);
    //     continue;
    //   }
    //   if (variables[variable].type.substr(0, 11) === 'structured_') {
    //     //This first loop formats the variables from the structure
    //     for (const index in variables[variable]) {
    //       for (const variable_name in variables_specification[variable]
    //         .structure) {
    //         const formatted = VariableProcessor.#variableFormatter({
    //           specs: variables_specification[variable].structure[variable_name],
    //           variable: variable_name,
    //           variables: variables[variable][index],
    //           struct_name: undefined,
    //         });
    //         variables[variable][index][variable_name] = formatted;
    //       }
    //     }
    //     //The second loop formats the main variables
    //     for (const variable_name in variables_specification[variable].main) {
    //       formatted = VariableProcessor.#variableFormatter({
    //         specs: variables_specification[variable].main[variable_name],
    //         variable: variable_name,
    //         variables,
    //         struct_name: variable,
    //       });
    //       extra_variables[variable_name] = formatted;
    //     }
    //   } else if (variables_specification[variable].type === 'person') {
    //     variables[variable]['TEXT'] = create_text_variable(
    //       variables[variable],
    //       'person',
    //     );
    //   } else if (variables_specification[variable].type === 'address') {
    //     continue;
    //   } else {
    //     formatted = VariableProcessor.#variableFormatter({
    //       specs: variables_specification[variable],
    //       variable,
    //       variables,
    //       struct_name: undefined,
    //     });
    //     variables[variable] = formatted;
    //   }
    // }
    // variables = { ...variables, ...extra_variables };

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
      console.log(type, style);
      return formatters[type][style](variableData);
    } catch (e) {
      console.log(e);
      return variableData;
    }
  }
}

export default VariableProcessor;
