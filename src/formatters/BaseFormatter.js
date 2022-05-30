class BaseFormatter {
  static plain(value) {
    return value;
  }

  static extended(value) {
    return Utils.number2words(value);
  }
}

module.exports = BaseFormatter;
