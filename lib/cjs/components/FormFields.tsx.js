"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = exports.CheckBoxField = exports.RadioField = exports.SelectField = exports.TextAreaField = exports.TextField = exports.Form = void 0;
var react_1 = __importStar(require("react"));
var formik_1 = require("formik");
var formStyle_1 = require("../style/formStyle");
var eye_icon_1 = require("../icons/eye-icon");
var eye_off_icon_1 = require("../icons/eye-off-icon");
var Form = function (props) {
    return (react_1.default.createElement(formStyle_1.FormWrapper, null,
        react_1.default.createElement(formik_1.Formik, __assign({}, props),
            react_1.default.createElement(formik_1.Form, { noValidate: true }, props.children))));
};
exports.Form = Form;
var TextField = function (props) {
    var name = props.name, label = props.label, placeholder = props.placeholder, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "placeholder", "description", "required"]);
    var _a = (0, react_1.useState)(false), showHidePassword = _a[0], changeShowHidePassword = _a[1];
    return (react_1.default.createElement(formStyle_1.FormElement, null,
        label && (react_1.default.createElement("div", { className: "form-title" },
            react_1.default.createElement("label", { htmlFor: name }, label),
            required && react_1.default.createElement("span", null, "*"))),
        description && react_1.default.createElement("i", null, description),
        react_1.default.createElement("div", { className: "form-text" },
            react_1.default.createElement(formik_1.Field, __assign({ className: "form-control-text", type: !showHidePassword && name === "password" ? "password" : "text", name: name, id: name, placeholder: placeholder || "", autoComplete: "off" }, rest)),
            name === "password" && (react_1.default.createElement("i", { className: "form-password", onClick: function () { return changeShowHidePassword(!showHidePassword); } }, showHidePassword ? react_1.default.createElement(eye_off_icon_1.EyeOff, null) : react_1.default.createElement(eye_icon_1.Eye, null)))),
        react_1.default.createElement(formik_1.ErrorMessage, { name: name, render: function (err) { return react_1.default.createElement("div", { className: "form-error" }, err); } })));
};
exports.TextField = TextField;
var TextAreaField = function (props) {
    var name = props.name, label = props.label, placeholder = props.placeholder, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "placeholder", "description", "required"]);
    return (react_1.default.createElement(formStyle_1.FormElement, null,
        label && (react_1.default.createElement("div", { className: "form-title" },
            react_1.default.createElement("label", { htmlFor: name }, label),
            required && react_1.default.createElement("span", null, "*"))),
        description && react_1.default.createElement("i", null, description),
        react_1.default.createElement(formik_1.Field, __assign({ className: "form-control", as: "textarea", name: name, id: name, placeholder: placeholder || "", autoComplete: "off" }, rest)),
        react_1.default.createElement(formik_1.ErrorMessage, { name: name, render: function (err) { return react_1.default.createElement("div", { className: "form-error" }, err); } })));
};
exports.TextAreaField = TextAreaField;
var SelectField = function (props) {
    var name = props.name, label = props.label, options = props.options, placeholder = props.placeholder, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "options", "placeholder", "description", "required"]);
    return (react_1.default.createElement(formStyle_1.FormElement, null,
        label && (react_1.default.createElement("div", { className: "form-title" },
            react_1.default.createElement("label", { htmlFor: name }, label),
            required && react_1.default.createElement("span", null, "*"))),
        description && react_1.default.createElement("i", null, description),
        react_1.default.createElement(formik_1.Field, __assign({ as: "select", id: name, name: name }, rest, { className: "form-control" }),
            react_1.default.createElement("option", { value: "" }, placeholder),
            options.map(function (option, index) { return (react_1.default.createElement("option", { key: index, value: option === null || option === void 0 ? void 0 : option.value, label: (option === null || option === void 0 ? void 0 : option.label) || (option === null || option === void 0 ? void 0 : option.value) })); })),
        react_1.default.createElement(formik_1.ErrorMessage, { name: name, render: function (err) { return react_1.default.createElement("div", { className: "form-error" }, err); } })));
};
exports.SelectField = SelectField;
var RadioField = function (props) {
    var name = props.name, label = props.label, options = props.options, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "options", "description", "required"]);
    return (react_1.default.createElement(formStyle_1.FormElement, null,
        label && (react_1.default.createElement("div", { className: "form-title" },
            react_1.default.createElement("label", { htmlFor: name }, label),
            required && react_1.default.createElement("span", null, "*"))),
        description && react_1.default.createElement("i", null, description),
        options.map(function (option, index) { return (react_1.default.createElement("label", { key: index },
            react_1.default.createElement(formik_1.Field, __assign({ type: "radio", name: name, value: option === null || option === void 0 ? void 0 : option.value }, rest)),
            (option === null || option === void 0 ? void 0 : option.label) || (option === null || option === void 0 ? void 0 : option.value))); }),
        react_1.default.createElement(formik_1.ErrorMessage, { name: name, render: function (err) { return react_1.default.createElement("div", { className: "form-error" }, err); } })));
};
exports.RadioField = RadioField;
var CheckBoxField = function (props) {
    var name = props.name, label = props.label, options = props.options, description = props.description, required = props.required, rest = __rest(props, ["name", "label", "options", "description", "required"]);
    return (react_1.default.createElement(formStyle_1.FormElement, null,
        label && (react_1.default.createElement("div", { className: "form-title" },
            react_1.default.createElement("label", { htmlFor: name }, label),
            required && react_1.default.createElement("span", null, "*"))),
        description && react_1.default.createElement("i", null, description),
        options.map(function (option, index) { return (react_1.default.createElement("label", { key: index },
            react_1.default.createElement(formik_1.Field, __assign({ type: "checkbox", name: name, value: option === null || option === void 0 ? void 0 : option.value }, rest)), option === null || option === void 0 ? void 0 :
            option.value)); }),
        react_1.default.createElement(formik_1.ErrorMessage, { name: name, render: function (err) { return react_1.default.createElement("div", { className: "form-error" }, err); } })));
};
exports.CheckBoxField = CheckBoxField;
var SubmitButton = function (props) {
    var title = props.title, rest = __rest(props, ["title"]);
    return (react_1.default.createElement(formStyle_1.ButtonBox, null,
        react_1.default.createElement("button", __assign({ type: "submit" }, rest), title)));
};
exports.SubmitButton = SubmitButton;
