const documentProcessor = require("../../dist/document-engine.min");

var template = {
  deleted: false,
  deleted_at: null,
  favorite: true,
  filename: null,
  form: [
    {
      fields: [
        {
          info: "",
          initialValue: "",
          label: "Meu Radio",
          optional: false,
          options: [
            {
              label: "opt 1",
              value: "opt1",
            },
            {
              label: "opt 2",
              value: "opt2",
            },
            {
              label: "opt 3",
              value: "opt3",
            },
          ],
          type: "radio",
          variable: {
            doc_display_style: "plain",
            name: "RADIO",
            type: "string",
          },
        },
        {
          condition: [
            {
              operator: "=",
              value: "opt1",
              variable: "RADIO",
            },
          ],
          info: "",
          initialValue: 0,
          label: "T\u00edtulo da Moeda",
          optional: false,
          type: "currency",
          variable: {
            doc_display_style: "extended",
            name: "MOEDA",
            type: "currency",
          },
        },
      ],
      title: "T\u00edtulo do Template",
    },
  ],
  id: 193,
  name: "primeiro template supervisionado",
  published: true,
  signers: [],
  text_type: ".txt",
  textfile: null,
  variables: {
    MOEDA: {
      doc_display_style: "extended",
      type: "currency",
    },
    RADIO: {
      doc_display_style: "plain",
      type: "string",
    },
  },
  workflow: {
    created_by: "",
    current_node: "0",
    nodes: {},
  },
};

var templateText =
  '<h2 style="margin-left:0px;">What is Lorem Ipsum?</h2><p style="margin-left:0px;text-align:justify;"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2 style="margin-left:0px;">Where does it come from?</h2><p style="margin-left:0px;text-align:justify;">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p><p style="margin-left:0px;text-align:justify;">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">A moeda usada \u00e9: {{ MOEDA }}</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">O valor do radio \u00e9: {{ RADIO }}</p>';

var variables = {
  MOEDA: 3,
  RADIO: "opt1",
};
var visible = [[true, true]];
var title = "doc title";

// documentProcessor.execute(templateText, variables);

const variablesTest = [
  {
    info: "",
    initialValue: "",
    label: "",
    optional: false,
    placeholder: "",
    type: "text",
    variable: {
      doc_display_style: "plain",
      name: "a",
      type: "string",
    },
  },
  {
    info: "",
    initialValue: "",
    label: "",
    optional: false,
    placeholder: "",
    type: "text_area",
    variable: {
      doc_display_style: "plain",
      name: "b",
      type: "string",
    },
  },
  {
    decimals: "",
    info: "",
    initialValue: "",
    label: "",
    max: "",
    min: "",
    optional: false,
    step: "",
    type: "number",
    variable: {
      doc_display_style: "plain",
      name: "c",
      type: "number",
    },
  },
  {
    info: "",
    initialValue: "",
    label: "",
    optional: false,
    type: "cpf",
    variable: {
      doc_display_style: "plain",
      name: "d",
      type: "string",
    },
  },
  {
    info: "",
    initialValue: "",
    label: "",
    optional: false,
    type: "cnpj",
    variable: {
      doc_display_style: "plain",
      name: "e",
      type: "string",
    },
  },
  {
    info: "",
    initialValue: "",
    label: "",
    optional: false,
    type: "email",
    variable: {
      doc_display_style: "plain",
      name: "f",
      type: "string",
    },
  },
  {
    info: "",
    initialValue: "",
    label: "",
    optional: false,
    type: "date",
    variable: {
      doc_display_style: "%d/%m/%Y",
      name: "g",
      type: "date",
    },
  },
  {
    info: "",
    initialValue: "",
    label: "",
    minute_step: "",
    optional: false,
    type: "time",
    variable: {
      name: "h",
      type: "time",
    },
  },
  {
    info: "",
    initialValue: 0,
    label: "",
    optional: false,
    type: "currency",
    variable: {
      doc_display_style: "plain",
      name: "i",
      type: "currency",
    },
  },
];

console.log("teste");

documentProcessor.variableFormatter(variablesTest);
