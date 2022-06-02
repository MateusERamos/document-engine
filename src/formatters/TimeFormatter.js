import BaseFormatter from './BaseFormatter';
import extenso from 'extenso';

class TimeFormatter extends BaseFormatter {
  extended({ variable }) {
    const [stringHora, stringMinutos] = [
      extenso(parseInt(variable.substr(0, 2))),
      extenso(parseInt(variable.substr(3, 5))),
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

export default new TimeFormatter();
