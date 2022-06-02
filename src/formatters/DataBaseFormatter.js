import BaseFormatter from './BaseFormatter';
import slugify from 'slugify';
class DataBaseFormatter extends BaseFormatter {
  plain({ variable, specs }) {
    const newVariables = {};
    response = specs.database_endpoint;
    let searchResult;

    for (const item in response) {
      if (response[item][specs.search_key] === parseInt(variable)) {
        searchResult = response[item];
        break;
      }
    }

    for (const key in searchResult) {
      newVariables[slugify(key).upper().replace('-', '_')] = searchResult[key];
    }

    return newVariables;
  }
}
export default new DataBaseFormatter();
