import BaseFormatter from "./BaseFormatter";
import Utils from "../Utils";

class StructuredFormatter extends BaseFormatter {
  static text({ variables, specs }) {
    const rows_list = [];
    jinja_template = Utils.envNunjucks.from_string(
      specs.extra_style_params.row_template
    );
    for (const index in variables) {
      variables[index]["INDEX"] = index + 1;
      filled_text = jinja_template.render(variables[index]);
      rows_list.append(filled_text);
    }
    return rows_list.join(specs.extra_style_params.separator);
  }

  static table({ variables, specs }) {
    const table_list = [];
    const table_title = specs.extra_style_params.title;
    const lines = specs.extra_style_params.lines;
    const i = 0;
    for (const item in variables) {
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
        table_rows.append("<tr>" + columns.join("") + "</tr>");
      }
      table_list.append(table_rows.join(""));
    }
    return `<figure class='table'><table><tbody>
    ${table_list.join("")}
    </tbody></table></figure>`;
  }

  static numbering({ variables, specs }) {
    const return_variables = [];
    if (specs.extra_style_params.row_template != "") {
      const row_template = specs.extra_style_params.row_template;
      nunjucks_template = Utils.envNunjucks.from_string(row_template);
      for (const index in variables) {
        variables[index]["INDEX"] = index + 1;
        filled_text = nunjucks_template.render(variables[index]);
        return_variables.append(filled_text);
      }
    } else {
      for (const variable in variables) {
        for (var_key in variable) {
          return_variables.append(variable[var_key]);
        }
      }
    }
    return return_variables;
  }
}

module.exports = StructuredFormatter;
