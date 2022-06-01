import BaseFormatter from './BaseFormatter';
import Utils from '../Utils';

class StructuredFormatter extends BaseFormatter {
  static text({ variable, specs }) {
    const rows_list = [];
    jinja_template = Utils.envNunjucks.from_string(
      specs.extra_style_params.row_template,
    );
    for (const index in variable) {
      variable[index]['INDEX'] = index + 1;
      filled_text = jinja_template.render(variable[index]);
      rows_list.append(filled_text);
    }
    return rows_list.join(specs.extra_style_params.separator);
  }

  static table({ variable, specs }) {
    const table_list = [];
    const table_title = specs.extra_style_params.title;
    const lines = specs.extra_style_params.lines;
    const i = 0;
    for (const item in variable) {
      //TODO tentar entender oq está sendo substituido pelo format
      table_rows = `<tr><td><p>${table_title.format(i + 1)}</p></td></tr>`;
      i += 1;
      for (const lineSpec in lines) {
        const columns = [];
        for (const info in lineSpec) {
          for (const label in info) {
            columns.append(`<td>${label}</td><td>${item[info[label]]}</td>`);
          }
        }
        table_rows.append('<tr>' + columns.join('') + '</tr>');
      }
      table_list.append(table_rows.join(''));
    }
    return `<figure class='table'><table><tbody>
    ${table_list.join('')}
    </tbody></table></figure>`;
  }

  static numbering({ variable, specs }) {
    const return_variables = [];
    if (specs.extra_style_params.row_template != '') {
      const row_template = specs.extra_style_params.row_template;
      nunjucks_template = Utils.envNunjucks.from_string(row_template);
      for (const index in variable) {
        variable[index]['INDEX'] = index + 1;
        filled_text = nunjucks_template.render(variable[index]);
        return_variables.append(filled_text);
      }
    } else {
      for (const variableIndex in variable) {
        for (var_key in variableIndex) {
          return_variables.append(variable[variableIndex][var_key]);
        }
      }
    }
    return return_variables;
  }
}

module.exports = StructuredFormatter;
