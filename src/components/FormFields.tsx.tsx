import React, { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { FormElement, ButtonBox, FormWrapper } from "../style/formStyle";
import { IButtonProps, IFormProps } from "../types/formData";
import { Eye } from "../icons/eye-icon";
import { EyeOff } from "../icons/eye-off-icon";

export const Form = (props: any) => {
  return (
    <FormWrapper>
      <Formik {...props}>
        <FormikForm noValidate>{props.children}</FormikForm>
      </Formik>
    </FormWrapper>
  );
};

export const TextField = (props: IFormProps) => {
  const { name, label, placeholder, description, required, ...rest } = props;
  const [showHidePassword, changeShowHidePassword] = useState(false);
  return (
    <FormElement>
      {label && (
        <div className="form-title">
          <label htmlFor={name}>{label}</label>
          {required && <span>*</span>}
        </div>
      )}
      {description && <i>{description}</i>}
      <div className="form-text">
        <Field
          className="form-control-text"
          type={!showHidePassword && name === "password" ? "password" : "text"}
          name={name}
          id={name}
          placeholder={placeholder || ""}
          autoComplete="off"
          {...rest}
        />
        {name === "password" && (
          <i
            className="form-password"
            onClick={() => changeShowHidePassword(!showHidePassword)}
          >
            {showHidePassword ? <EyeOff /> : <Eye />}
          </i>
        )}
      </div>

      <ErrorMessage
        name={name}
        render={(err) => <div className="form-error">{err}</div>}
      />
    </FormElement>
  );
};

export const TextAreaField = (props: IFormProps) => {
  const { name, label, placeholder, description, required, ...rest } = props;
  return (
    <FormElement>
      {label && (
        <div className="form-title">
          <label htmlFor={name}>{label}</label>
          {required && <span>*</span>}
        </div>
      )}
      {description && <i>{description}</i>}
      <Field
        className="form-control"
        as="textarea"
        name={name}
        id={name}
        placeholder={placeholder || ""}
        autoComplete="off"
        {...rest}
      />
      <ErrorMessage
        name={name}
        render={(err) => <div className="form-error">{err}</div>}
      />
    </FormElement>
  );
};

export const SelectField = (props: IFormProps) => {
  const { name, label, options, placeholder, description, required, ...rest } =
    props;
  return (
    <FormElement>
      {label && (
        <div className="form-title">
          <label htmlFor={name}>{label}</label>
          {required && <span>*</span>}
        </div>
      )}
      {description && <i>{description}</i>}
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="form-control"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option?.value}
            label={option?.label || option?.value}
          />
        ))}
      </Field>
      <ErrorMessage
        name={name}
        render={(err) => <div className="form-error">{err}</div>}
      />
    </FormElement>
  );
};

export const RadioField = (props: IFormProps) => {
  const { name, label, options, description, required, ...rest } = props;
  return (
    <FormElement>
      {label && (
        <div className="form-title">
          <label htmlFor={name}>{label}</label>
          {required && <span>*</span>}
        </div>
      )}
      {description && <i>{description}</i>}
      {options.map((option, index) => (
        <label key={index}>
          <Field type="radio" name={name} value={option?.value} {...rest} />
          {option?.label || option?.value}
        </label>
      ))}
      <ErrorMessage
        name={name}
        render={(err) => <div className="form-error">{err}</div>}
      />
    </FormElement>
  );
};

export const CheckBoxField = (props: IFormProps) => {
  const { name, label, options, description, required, ...rest } = props;
  return (
    <FormElement>
      {label && (
        <div className="form-title">
          <label htmlFor={name}>{label}</label>
          {required && <span>*</span>}
        </div>
      )}
      {description && <i>{description}</i>}
      {options.map((option, index) => (
        <label key={index}>
          <Field type="checkbox" name={name} value={option?.value} {...rest} />
          {option?.value}
        </label>
      ))}
      <ErrorMessage
        name={name}
        render={(err) => <div className="form-error">{err}</div>}
      />
    </FormElement>
  );
};

export const SubmitButton = (props: IButtonProps) => {
  const { title, ...rest } = props;
  return (
    <ButtonBox>
      <button type="submit" {...rest}>
        {title}
      </button>
    </ButtonBox>
  );
};
