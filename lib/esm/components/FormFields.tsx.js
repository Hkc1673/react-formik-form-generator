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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { FormElement, ButtonBox, FormWrapper } from "../style/formStyle";
import { Eye } from "../icons/eye-icon";
import { EyeOff } from "../icons/eye-off-icon";
export var Form = function (props) {
    return (React.createElement(FormWrapper, null,
        React.createElement(Formik, __assign({}, props),
            React.createElement(FormikForm, { noValidate: true }, props.children))));
};
export var TextField = function (props) {
    var name = props.name, label = props.label, placeholder = props.placeholder, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "placeholder", "description", "required"]);
    var _a = useState(false), showHidePassword = _a[0], changeShowHidePassword = _a[1];
    return (React.createElement(FormElement, null,
        label && (React.createElement("div", { className: "form-title" },
            React.createElement("label", { htmlFor: name }, label),
            required && React.createElement("span", null, "*"))),
        description && React.createElement("i", null, description),
        React.createElement("div", { className: "form-text" },
            React.createElement(Field, __assign({ className: "form-control-text", type: !showHidePassword && name === "password" ? "password" : "text", name: name, id: name, placeholder: placeholder || "", autoComplete: "off" }, rest)),
            name === "password" && (React.createElement("i", { className: "form-password", onClick: function () { return changeShowHidePassword(!showHidePassword); } }, showHidePassword ? React.createElement(EyeOff, null) : React.createElement(Eye, null)))),
        React.createElement(ErrorMessage, { name: name, render: function (err) { return React.createElement("div", { className: "form-error" }, err); } })));
};
export var TextAreaField = function (props) {
    var name = props.name, label = props.label, placeholder = props.placeholder, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "placeholder", "description", "required"]);
    return (React.createElement(FormElement, null,
        label && (React.createElement("div", { className: "form-title" },
            React.createElement("label", { htmlFor: name }, label),
            required && React.createElement("span", null, "*"))),
        description && React.createElement("i", null, description),
        React.createElement(Field, __assign({ className: "form-control", as: "textarea", name: name, id: name, placeholder: placeholder || "", autoComplete: "off" }, rest)),
        React.createElement(ErrorMessage, { name: name, render: function (err) { return React.createElement("div", { className: "form-error" }, err); } })));
};
export var SelectField = function (props) {
    var name = props.name, label = props.label, options = props.options, placeholder = props.placeholder, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "options", "placeholder", "description", "required"]);
    return (React.createElement(FormElement, null,
        label && (React.createElement("div", { className: "form-title" },
            React.createElement("label", { htmlFor: name }, label),
            required && React.createElement("span", null, "*"))),
        description && React.createElement("i", null, description),
        React.createElement(Field, __assign({ as: "select", id: name, name: name }, rest, { className: "form-control" }),
            React.createElement("option", { value: "" }, placeholder),
            options.map(function (option, index) { return (React.createElement("option", { key: index, value: option === null || option === void 0 ? void 0 : option.value, label: (option === null || option === void 0 ? void 0 : option.label) || (option === null || option === void 0 ? void 0 : option.value) })); })),
        React.createElement(ErrorMessage, { name: name, render: function (err) { return React.createElement("div", { className: "form-error" }, err); } })));
};
export var RadioField = function (props) {
    var name = props.name, label = props.label, options = props.options, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "options", "description", "required"]);
    return (React.createElement(FormElement, null,
        label && (React.createElement("div", { className: "form-title" },
            React.createElement("label", { htmlFor: name }, label),
            required && React.createElement("span", null, "*"))),
        description && React.createElement("i", null, description),
        options.map(function (option, index) { return (React.createElement("label", { key: index },
            React.createElement(Field, __assign({ type: "radio", name: name, value: option === null || option === void 0 ? void 0 : option.value }, rest)),
            (option === null || option === void 0 ? void 0 : option.label) || (option === null || option === void 0 ? void 0 : option.value))); }),
        React.createElement(ErrorMessage, { name: name, render: function (err) { return React.createElement("div", { className: "form-error" }, err); } })));
};
export var CheckBoxField = function (props) {
    var name = props.name, label = props.label, options = props.options, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "options", "description", "required"]);
    return (React.createElement(FormElement, null,
        label && (React.createElement("div", { className: "form-title" },
            React.createElement("label", { htmlFor: name }, label),
            required && React.createElement("span", null, "*"))),
        description && React.createElement("i", null, description),
        options.map(function (option, index) { return (React.createElement("label", { key: index },
            React.createElement(Field, __assign({ type: "checkbox", name: name, value: option === null || option === void 0 ? void 0 : option.value }, rest)), option === null || option === void 0 ? void 0 :
            option.value)); }),
        React.createElement(ErrorMessage, { name: name, render: function (err) { return React.createElement("div", { className: "form-error" }, err); } })));
};
export var SubmitButton = function (props) {
    var title = props.title, rest = __rest(props, ["title"]);
    return (React.createElement(ButtonBox, null,
        React.createElement("button", __assign({ type: "submit" }, rest), title)));
};
