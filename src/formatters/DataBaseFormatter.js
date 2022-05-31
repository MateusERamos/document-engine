import BaseFormatter from "./BaseFormatter";
import slugify from "slugify";
class DataBaseFormatter extends BaseFormatter {
  static plain({ value, database_endpoint, specs }) {
    const new_variables = {};

    for (const item in response) {
      if (item[specs["search_key"]] == parseInt(value)) search_result = item;
      break;
    }

    for (const key in search_result) {
      new_variables[slugify(key).upper().replace("-", "_")] =
        search_result[key];
    }

    return new_variables;
  }
}

module.exports = DataBaseFormatter;
