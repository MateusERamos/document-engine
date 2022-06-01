import BaseFormatter from './BaseFormatter';

class ListFormatter extends BaseFormatter {
  static commas({ variable }) {
    if (variable.length < 2) return variable[0];
    const last_element = variable.pop();
    variable[variable.length - 1] =
      variable[variable.length - 1] + ' e ' + last_element;
    return variable.join(', ');
  }

  static bullets({ variable, text_type = '.txt' }) {
    if (text_type == '.txt')
      return '<ol><li>' + variable.join('</li><li>') + '</li></ol>';

    if (text_type == '.docx') return variable.join('a');
  }
}

module.exports = ListFormatter;
