import StringFormatter from "./StringFormatter";
import NumberFormatter from "./NumberFormatter";
import PercentageFormatter from "./PercentageFormatter";
import ListFormatter from "./ListFormatter";
import DateFormatter from "./DateFormatter";
import TimeFormatter from "./TimeFormatter";

class Formatter {
  static get formatters() {
    return {
      string: StringFormatter,
      number: NumberFormatter,
      percentage: PercentageFormatter,
      list: ListFormatter,
      date: DateFormatter,
      time: TimeFormatter,
    };
  }
}

module.exports = Formatter;
