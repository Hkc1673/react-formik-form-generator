var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from "react";
import * as yup from "yup";
import { createYupSchema } from "./utils/validator";
import { Form, TextField, SelectField, RadioField, TextAreaField, CheckBoxField, } from "./components/FormFields.tsx";
import { SubmitButton, ButtonContainer } from "./style/formStyle";
var fieldMap = {
    text: TextField,
    select: SelectField,
    textarea: TextAreaField,
    radio: RadioField,
    checkbox: CheckBoxField,
};
var App = function (_a) {
    var formData = _a.formData, buttonProp = _a.buttonProp, onSubmit = _a.onSubmit;
    var initialValues = {};
    formData.forEach(function (item) {
        initialValues[item === null || item === void 0 ? void 0 : item.id] = (item === null || item === void 0 ? void 0 : item.value) || "";
    });
    var _b = useState(initialValues), values = _b[0], setValue = _b[1];
    var _onSubmit = function (values) {
        onSubmit(values);
        setValue(initialValues);
    };
    var handleChange = function (e) {
        var _a;
        var _b, _c;
        var id = (_b = e === null || e === void 0 ? void 0 : e.target) === null || _b === void 0 ? void 0 : _b.name;
        var val = (_c = e === null || e === void 0 ? void 0 : e.target) === null || _c === void 0 ? void 0 : _c.value;
        setValue(__assign(__assign({}, values), (_a = {}, _a[id] = val, _a)));
    };
    var handleCheckItem = function (e) {
        var _a, _b, _c;
        var _d, _e;
        var id = (_d = e === null || e === void 0 ? void 0 : e.target) === null || _d === void 0 ? void 0 : _d.name;
        var val = (_e = e === null || e === void 0 ? void 0 : e.target) === null || _e === void 0 ? void 0 : _e.value;
        var idList = [];
        if (!values[id]) {
            idList.push(val);
            setValue(__assign(__assign({}, values), (_a = {}, _a[id] = Array.from(idList).toString(), _a)));
        }
        else if (values[id]) {
            idList = values[id].split(",");
            if (!idList.includes(val)) {
                idList.push(val);
                setValue(__assign(__assign({}, values), (_b = {}, _b[id] = Array.from(idList).toString(), _b)));
            }
            else {
                var index = idList.indexOf(val);
                if (index > -1) {
                    idList.splice(index, 1);
                }
                setValue(__assign(__assign({}, values), (_c = {}, _c[id] = Array.from(idList).toString(), _c)));
            }
        }
    };
    var yupSchema = formData.reduce(createYupSchema, {});
    var validateSchema = yup.object().shape(yupSchema);
    return (React.createElement(Form, { enableReinitialize: true, validationSchema: validateSchema, initialValues: values, onSubmit: _onSubmit },
        formData.map(function (item, index) {
            var _a;
            var FormField = fieldMap[item === null || item === void 0 ? void 0 : item.type];
            if (!(item === null || item === void 0 ? void 0 : item.type)) {
                return null;
            }
            return (React.createElement(FormField, { key: index, name: item === null || item === void 0 ? void 0 : item.id, label: item === null || item === void 0 ? void 0 : item.label, placeholder: item === null || item === void 0 ? void 0 : item.placeholder, description: item === null || item === void 0 ? void 0 : item.description, onChange: (item === null || item === void 0 ? void 0 : item.type) === "checkbox" ? handleCheckItem : handleChange, options: item === null || item === void 0 ? void 0 : item.options, checked: (_a = values[item === null || item === void 0 ? void 0 : item.id]) === null || _a === void 0 ? void 0 : _a.value, required: item === null || item === void 0 ? void 0 : item.required }));
        }),
        React.createElement(ButtonContainer, null,
            React.createElement(SubmitButton, { type: "submit", style: buttonProp === null || buttonProp === void 0 ? void 0 : buttonProp.buttonStyle }, buttonProp ? buttonProp === null || buttonProp === void 0 ? void 0 : buttonProp.buttonTitle : "Submit"))));
};
export default App;
