import React, { ChangeEvent, useState } from "react";
import * as yup from "yup";
import { createYupSchema } from "./utils/validator";
import {
  Form,
  TextField,
  SelectField,
  SubmitButton,
  RadioField,
  TextAreaField,
  CheckBoxField,
} from "./components/FormFields.tsx";
import { IFormData, IFieldMap, IAppProps } from "./types/formData";

const fieldMap: IFieldMap = {
  text: TextField,
  select: SelectField,
  textarea: TextAreaField,
  radio: RadioField,
  checkbox: CheckBoxField,
};

const App: React.FC<IAppProps> = ({ formData, buttonTitle, onSubmit }) => {
  const initialValues: any = {};

  formData.forEach((item: IFormData) => {
    initialValues[item?.id!] = item?.value || "";
  });

  const [values, setValue] = useState<any>(initialValues);

  const _onSubmit = (values: {}) => {
    onSubmit(values);
    setValue(initialValues);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    const id = e?.target?.name;
    const val = e?.target?.value;
    setValue({
      ...values,
      [id]: val,
    });
  };

  const handleCheckItem = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e?.target?.name;
    const val = e?.target?.value;
    let idList = [];
    if (!values[id]) {
      idList.push(val);
      setValue({
        ...values,
        [id]: Array.from(idList).toString(),
      });
    } else if (values[id]) {
      idList = values[id].split(",");
      if (!idList.includes(val)) {
        idList.push(val);
        setValue({
          ...values,
          [id]: Array.from(idList).toString(),
        });
      } else {
        const index = idList.indexOf(val);
        if (index > -1) {
          idList.splice(index, 1);
        }
        setValue({
          ...values,
          [id]: Array.from(idList).toString(),
        });
      }
    }
  };

  const yupSchema = formData.reduce(createYupSchema, {});

  const validateSchema = yup.object().shape(yupSchema);

  return (
    <Form
      enableReinitialize
      validationSchema={validateSchema}
      initialValues={values}
      onSubmit={_onSubmit}
    >
      {formData.map((item: IFormData, index: React.Key | null | undefined) => {
        const FormField = fieldMap[item?.type!];
        if (!item?.type) {
          return null;
        }
        return (
          <FormField
            key={index}
            name={item?.id}
            label={item?.label}
            placeholder={item?.placeholder}
            description={item?.description}
            onChange={
              item?.type === "checkbox" ? handleCheckItem : handleChange
            }
            options={item?.options}
            checked={values[item?.id!]?.value}
            required={item?.required}
          />
        );
      })}

      <SubmitButton title={buttonTitle ? buttonTitle : "Submit"} />
    </Form>
  );
};

export default App;
