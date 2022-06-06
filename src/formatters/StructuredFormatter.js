import BaseFormatter from './BaseFormatter';
import nunjucks from 'nunjucks';

class StructuredFormatter extends BaseFormatter {
  text({ variable, specs }) {
    const rowsList = [];
    const template = nunjucks.renderString(
      specs.extra_style_params.row_template,
    );
    for (const index in variable) {
      variable[index]['INDEX'] = index + 1;
      const filledText = nunjucks.render(template, variable[index]);
      rowsList.append(filledText);
    }
    return rowsList.join(specs.extra_style_params.separator);
  }

  table({ variable, specs }) {
    const tableList = [];
    const tableTitle = specs.extra_style_params.title;
    const lines = specs.extra_style_params.lines;
    let i = 0;
    for (const item in variable) {
      const tableRows = `<tr><td><p>${tableTitle.replace(
        '/({.*?})/g',
        i + 1,
      )}</p></td></tr>`;
      i += 1;
      for (const lineSpec in lines) {
        const columns = [];
        for (const info in lineSpec) {
          for (const label in info) {
            columns.append(`<td>${label}</td><td>${item[info[label]]}</td>`);
          }
        }
        tableRows.append('<tr>' + columns.join('') + '</tr>');
      }
      tableList.append(tableRows.join(''));
    }
    return `<figure class='table'><table><tbody>
    ${tableList.join('')}
    </tbody></table></figure>`;
  }

  numbering({ variable, specs }) {
    const result = [];
    if (specs.extra_style_params.row_template != '') {
      const row_template = specs.extra_style_params.row_template;
      template = nunjucks.renderString(row_template);
      for (const index in variable) {
        variable[index]['INDEX'] = index + 1;
        const filledText = nunjucks.render(template, variable[index]);
        result.append(filledText);
      }
    } else {
      for (const variableIndex in variable) {
        for (const key in variableIndex) {
          result.append(variable[variableIndex][key]);
        }
      }
    }
    return result;
  }
}

export default new StructuredFormatter();
