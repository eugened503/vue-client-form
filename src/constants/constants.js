import { helpers } from "vuelidate/lib/validators";
export const date = helpers.withParams(
  { type: "minDate", min: date },
  (value) => !helpers.req(value) || value >= date
);

export const nameValidation = helpers.regex(
  "nameValidation",
  /^[а-яА-ЯёЁa-zA-Z]+$/
);
export const phoneValidation = helpers.regex(
  "phoneValidation",
  /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
);
export const indexValidation = helpers.regex("indexValidation", /^\d{6}$/);

export const numberValidation = helpers.regex("numberValidation", /^[0-9]+$/);

export const dateValidation = helpers.regex(
  "dateValidation",
  /^\d{4}-\d{2}-\d{2}$/
);

export const addressValidation = helpers.regex(
  "addressValidation",
  /([\d/\d]+|\d+)$/
);

export const seriesValidation = helpers.regex(
  "seriesValidation",
  /^[а-яА-ЯёЁa-zA-Z0-9]+$/
);

export const issuedValidation = helpers.regex(
  "issuedValidation",
  /^[^!@#$%^&*()_+=a-zA-Z]+$/
);
