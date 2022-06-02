import BaseFormatter from './BaseFormatter';

class StringFormatter extends BaseFormatter {
  sentence_case({ variable }) {
    return variable.charAt(0).toUpperCase() + variable.toLowerCase().slice(1);
  }

  uppercase({ variables, variable }) {
    return variable.toUpperCase();
  }

  lowercase({ variable }) {
    return variable.toLowerCase();
  }
}

export default new StringFormatter();
