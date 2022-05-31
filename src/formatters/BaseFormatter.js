class BaseFormatter {
  static plain({ variables, variable }) {
    return variables[variable];
  }
}

module.exports = BaseFormatter;
