import { ChangeEvent } from "react";
export interface IAppProps {
    formData: IFormData;
    buttonTitle: string;
    onSubmit: (values: {}) => void;
}
export interface IOption {
    value: string;
    label?: string;
}
export interface IValidation {
    type: string;
    params: (string | number)[];
}
export interface IFormData {
    [key: string]: any;
    id?: string;
    label?: string;
    description?: string;
    placeholder?: string;
    type?: string;
    validationType?: string;
    required?: boolean;
    value?: string;
    options?: IOption[];
    validations?: IValidation[];
}
export interface IFormProps {
    key: any;
    name: string;
    label: string;
    placeholder: string;
    defaultValue: string;
    description: string;
    options: IOption[];
    checked: string;
    required: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
export interface IFieldMap {
    [key: string]: any;
    text: (props: IFormProps) => JSX.Element;
    select: (props: IFormProps) => JSX.Element;
    textarea: (props: IFormProps) => JSX.Element;
    radio: (props: IFormProps) => JSX.Element;
    checkbox: (props: IFormProps) => JSX.Element;
}
export interface IButtonProps {
    title: string;
    backgroundColor?: string;
}
export interface IConfig {
    id: string;
    validationType: string;
    validations: IValidation[];
}
