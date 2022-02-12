import * as yup from "yup";
import { IConfig } from "../types/formData";

export function createYupSchema(schema: { [key: string]: any; }, config:IConfig) {
  const { id, validationType, validations = [] } = config;
  // @ts-ignore
  if (!yup[validationType]) {
    return schema;
  }
  // @ts-ignore
  let validator = yup[validationType]();
  validations.forEach(({ params, type }) => {
    if (!validator[type] || !params) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[id] = validator;
  return schema;
}
