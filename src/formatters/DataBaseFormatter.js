import BaseFormatter from './BaseFormatter';
import slugify from 'slugify';
class DataBaseFormatter extends BaseFormatter {
  static plain({ variable, specs }) {
    const new_variables = {};
    response = specs.database_endpoint;
    let search_result;

    for (const item in response) {
      if (response[item][specs.search_key] === parseInt(variable)) {
        search_result = response[item];
        break;
      }
    }

    for (const key in search_result) {
      new_variables[slugify(key).upper().replace('-', '_')] =
        search_result[key];
    }

    return new_variables;
  }
}
export default DataBaseFormatter;
