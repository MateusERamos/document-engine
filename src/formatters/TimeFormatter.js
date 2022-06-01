import BaseFormatter from './BaseFormatter';
import Utils from '../Utils';

class TimeFormatter extends BaseFormatter {
  static extended({ variable }) {
    const [stringHora, stringMinutos] = [
      Utils.number2words(parseInt(variable.substr(0, 2))),
      Utils.number2words(parseInt(variable.substr(3, 5))),
    ];
    const hora =
      stringHora === 'um' ? stringHora + 'a hora' : stringHora + ' horas';
    const minuto =
      stringMinutos === 'zero'
        ? ''
        : ` e ${stringMinutos} 
        ${stringMinutos === 'um' ? 'minuto' : 'minutos'}`;
    return `${hora}${minuto}`;
  }
}

module.exports = TimeFormatter;
