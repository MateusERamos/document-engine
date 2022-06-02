import StringFormatter from './StringFormatter';
import NumberFormatter from './NumberFormatter';
import PercentageFormatter from './PercentageFormatter';
import ListFormatter from './ListFormatter';
import DateFormatter from './DateFormatter';
import TimeFormatter from './TimeFormatter';
import CurrencyFormatter from './CurrencyFormatter';
import DataBaseFormatter from './DataBaseFormatter';
import StructuredFormatter from './StructuredFormatter';

class Formatter {
  get formatters() {
    return {
      string: StringFormatter,
      number: NumberFormatter,
      percentage: PercentageFormatter,
      list: ListFormatter,
      date: DateFormatter,
      time: TimeFormatter,
      currency: CurrencyFormatter,
      database: DataBaseFormatter,
      structured: StructuredFormatter,
    };
  }
}

export default new Formatter();
