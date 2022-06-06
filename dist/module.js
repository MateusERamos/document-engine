import $5OpyM$nunjucks from "nunjucks";
import $5OpyM$extenso from "extenso";
import "ordinal-pt-br";
import $5OpyM$slugify from "slugify";

class $7f6d791eb2cd11ec$var$BaseFormatter {
    plain({ variable: variable  }) {
        return variable;
    }
}
var $7f6d791eb2cd11ec$export$2e2bcd8739ae039 = $7f6d791eb2cd11ec$var$BaseFormatter;


class $d640a4ca5cfb4e61$var$StringFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    sentence_case({ variable: variable  }) {
        return variable.charAt(0).toUpperCase() + variable.toLowerCase().slice(1);
    }
    uppercase({ variables: variables , variable: variable  }) {
        return variable.toUpperCase();
    }
    lowercase({ variable: variable  }) {
        return variable.toLowerCase();
    }
}
var $d640a4ca5cfb4e61$export$2e2bcd8739ae039 = new $d640a4ca5cfb4e61$var$StringFormatter();





class $cfae6b84c1c6ccdc$var$NumberFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    extended({ variable: variable  }) {
        return `${variable} (${(0, $5OpyM$extenso)(variable)})`;
    }
    percent({ variable: variable  }) {
        return `${variable}% (${(0, $5OpyM$extenso)(variable)} por cento)`;
    }
    ordinal({ variable: variable  }) {
        return variable.toOrdinal();
    }
}
var $cfae6b84c1c6ccdc$export$2e2bcd8739ae039 = new $cfae6b84c1c6ccdc$var$NumberFormatter();




class $573e651b245e089f$var$PercentageFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    plain({ variable: variable  }) {
        return variable.replace(".", ",") + "%";
    }
    extended({ variable: variable  }) {
        return (0, $5OpyM$extenso)(variable) + " porcento";
    }
}
var $573e651b245e089f$export$2e2bcd8739ae039 = new $573e651b245e089f$var$PercentageFormatter();



class $68d18aa09d64ba48$var$ListFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    commas({ variable: variable  }) {
        if (variable.length < 2) return variable[0];
        const last_element = variable.pop();
        variable[variable.length - 1] = variable[variable.length - 1] + " e " + last_element;
        return variable.join(", ");
    }
    bullets({ variable: variable , text_type: text_type = ".txt"  }) {
        if (text_type == ".txt") return "<ol><li>" + variable.join("</li><li>") + "</li></ol>";
        if (text_type == ".docx") return variable.join("a");
    }
}
var $68d18aa09d64ba48$export$2e2bcd8739ae039 = new $68d18aa09d64ba48$var$ListFormatter();



class $984a054ea466c270$var$DateFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    #month = [
        "Janeiro",
        "Fevereiro",
        "Mar\xe7o",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    plain({ variable: variable , doc_display_style: doc_display_style  }) {
        const date = new Date(variable);
        return doc_display_style.includes("%") ? doc_display_style.replace("%d", date.getDate()).replace("%m", date.getMonth() + 1).replace("%Y", date.getFullYear()) : value;
    }
    extended({ variable: variable  }) {
        const date = new Date(variable);
        return `${date.getDate()} de ${this.#month[date.getMonth()]} de ${date.getFullYear()}`;
    }
    date_extended({ variable: variable  }) {
        const date = new Date(variable);
        return `${date.getDate()} de ${this.#month[date.getMonth()]} de ${date.getFullYear()}`;
    }
}
var $984a054ea466c270$export$2e2bcd8739ae039 = new $984a054ea466c270$var$DateFormatter();




class $fc031f07c90d4caf$var$TimeFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    extended({ variable: variable  }) {
        const [stringHora, stringMinutos] = [
            (0, $5OpyM$extenso)(parseInt(variable.substr(0, 2))),
            (0, $5OpyM$extenso)(parseInt(variable.substr(3, 5)))
        ];
        const hora = stringHora === "um" ? stringHora + "a hora" : stringHora + " horas";
        const minuto = stringMinutos === "zero" ? "" : ` e ${stringMinutos} 
        ${stringMinutos === "um" ? "minuto" : "minutos"}`;
        return `${hora}${minuto}`;
    }
}
var $fc031f07c90d4caf$export$2e2bcd8739ae039 = new $fc031f07c90d4caf$var$TimeFormatter();




class $823cb105aa0a4a39$var$CurrencyFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    extended({ variable: variable  }) {
        const value = variable;
        return `${value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })} (${(0, $5OpyM$extenso)(value, {
            mode: "currency",
            currency: {
                type: "BRL"
            }
        })})`;
    }
    date_extended({ variable: variable  }) {
        const value = variable;
        return `${value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })} (${(0, $5OpyM$extenso)(value, {
            mode: "currency",
            currency: {
                type: "BRL"
            }
        })})`;
    }
    plain({ variable: variable  }) {
        return variable.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }
}
var $823cb105aa0a4a39$export$2e2bcd8739ae039 = new $823cb105aa0a4a39$var$CurrencyFormatter();




class $94365fc866fae4fc$var$DataBaseFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    plain({ variable: variable , specs: specs  }) {
        const newVariables = {};
        response = specs.database_endpoint;
        let searchResult;
        for(const item in response)if (response[item][specs.search_key] === parseInt(variable)) {
            searchResult = response[item];
            break;
        }
        for(const key in searchResult)newVariables[(0, $5OpyM$slugify)(key).upper().replace("-", "_")] = searchResult[key];
        return newVariables;
    }
}
var $94365fc866fae4fc$export$2e2bcd8739ae039 = new $94365fc866fae4fc$var$DataBaseFormatter();




class $c9698859e63afe84$var$StructuredFormatter extends (0, $7f6d791eb2cd11ec$export$2e2bcd8739ae039) {
    text({ variable: variable , specs: specs  }) {
        const rowsList = [];
        const template = (0, $5OpyM$nunjucks).renderString(specs.extra_style_params.row_template);
        for(const index in variable){
            variable[index]["INDEX"] = index + 1;
            const filledText = (0, $5OpyM$nunjucks).render(template, variable[index]);
            rowsList.append(filledText);
        }
        return rowsList.join(specs.extra_style_params.separator);
    }
    table({ variable: variable , specs: specs  }) {
        const tableList = [];
        const tableTitle = specs.extra_style_params.title;
        const lines = specs.extra_style_params.lines;
        let i = 0;
        for(const item in variable){
            const tableRows = `<tr><td><p>${tableTitle.replace("/({.*?})/g", i + 1)}</p></td></tr>`;
            i += 1;
            for(const lineSpec in lines){
                const columns = [];
                for(const info in lineSpec)for(const label in info)columns.append(`<td>${label}</td><td>${item[info[label]]}</td>`);
                tableRows.append("<tr>" + columns.join("") + "</tr>");
            }
            tableList.append(tableRows.join(""));
        }
        return `<figure class='table'><table><tbody>
    ${tableList.join("")}
    </tbody></table></figure>`;
    }
    numbering({ variable: variable , specs: specs  }) {
        const result = [];
        if (specs.extra_style_params.row_template != "") {
            const row_template = specs.extra_style_params.row_template;
            template = (0, $5OpyM$nunjucks).renderString(row_template);
            for(const index in variable){
                variable[index]["INDEX"] = index + 1;
                const filledText = (0, $5OpyM$nunjucks).render(template, variable[index]);
                result.append(filledText);
            }
        } else {
            for(const variableIndex in variable)for(const key in variableIndex)result.append(variable[variableIndex][key]);
        }
        return result;
    }
}
var $c9698859e63afe84$export$2e2bcd8739ae039 = new $c9698859e63afe84$var$StructuredFormatter();


class $13d6ad50a25bb11c$var$Formatter {
    get formatters() {
        return {
            string: (0, $d640a4ca5cfb4e61$export$2e2bcd8739ae039),
            number: (0, $cfae6b84c1c6ccdc$export$2e2bcd8739ae039),
            percentage: (0, $573e651b245e089f$export$2e2bcd8739ae039),
            list: (0, $68d18aa09d64ba48$export$2e2bcd8739ae039),
            date: (0, $984a054ea466c270$export$2e2bcd8739ae039),
            time: (0, $fc031f07c90d4caf$export$2e2bcd8739ae039),
            currency: (0, $823cb105aa0a4a39$export$2e2bcd8739ae039),
            database: (0, $94365fc866fae4fc$export$2e2bcd8739ae039),
            structured: (0, $c9698859e63afe84$export$2e2bcd8739ae039)
        };
    }
}
var $13d6ad50a25bb11c$export$2e2bcd8739ae039 = new $13d6ad50a25bb11c$var$Formatter();


const { formatters: $69a71767d44db326$var$formatters  } = (0, $13d6ad50a25bb11c$export$2e2bcd8739ae039);
class $69a71767d44db326$var$VariableProcessor {
    constructor(){}
    formatter({ variables: variables , variables_specification: variables_specification  }) {
        const formatted = {};
        for(const index in variables_specification){
            const variable = variables[index];
            formatted[index] = this._variableFormatter({
                specs: variables_specification[index],
                variable: variable
            });
        }
        return formatted;
    }
    _variableFormatter(variableData) {
        try {
            const style = variableData.specs.doc_display_style && !variableData.specs.doc_display_style.includes("%") ? variableData.specs.doc_display_style : "plain";
            const type = variableData.specs.type.substr(0, 11) === "structured_" ? "structured" : variableData.specs.type;
            return $69a71767d44db326$var$formatters[type][style](variableData);
        } catch (e) {
            console.log(e);
            return variableData.variable;
        }
    }
}
var $69a71767d44db326$export$2e2bcd8739ae039 = new $69a71767d44db326$var$VariableProcessor();



class $9fc802f4a5fd16f3$var$DocumentProcessor {
    constructor(){}
    execute(documentTemplate, variableData) {
        const formattedVariables = (0, $69a71767d44db326$export$2e2bcd8739ae039).formatter(variableData);
        const documentTxt = (0, $5OpyM$nunjucks).renderString(documentTemplate, formattedVariables);
        return documentTxt;
    }
}
var $9fc802f4a5fd16f3$export$2e2bcd8739ae039 = new $9fc802f4a5fd16f3$var$DocumentProcessor();


"use strict";
window.documentProcessor = (0, $9fc802f4a5fd16f3$export$2e2bcd8739ae039);


//# sourceMappingURL=module.js.map
