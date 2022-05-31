import BaseFormatter from "./BaseFormatter";
import nunjucks from "nunjucks";

class StructuredFormatter extends BaseFormatter {
  static #env = new nunjucks.Environment(
    (loader = nunjucks.PackageLoader("app", "templates")),
    (autoescape = nunjucks.select_autoescape(["html", "xml"]))
  );

  static text({ value }) {
    // row_template = self._specs["extra_style_params"]["row_template"]
    // rows_list = []
    // jinja_template = jinja_env.from_string(row_template)
    // for index, item in enumerate(self._variables):
    //     item["INDEX"] = index + 1
    //     filled_text = jinja_template.render(item)
    //     rows_list.append(filled_text)
    // return self._specs["extra_style_params"]["separator"].join(rows_list)
  }
}

module.exports = StructuredFormatter;
