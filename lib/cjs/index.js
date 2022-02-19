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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var yup = __importStar(require("yup"));
var validator_1 = require("./utils/validator");
var FormFields_tsx_1 = require("./components/FormFields.tsx");
var formStyle_1 = require("./style/formStyle");
var fieldMap = {
    text: FormFields_tsx_1.TextField,
    select: FormFields_tsx_1.SelectField,
    textarea: FormFields_tsx_1.TextAreaField,
    radio: FormFields_tsx_1.RadioField,
    checkbox: FormFields_tsx_1.CheckBoxField,
};
var App = function (_a) {
    var formData = _a.formData, buttonProp = _a.buttonProp, onSubmit = _a.onSubmit;
    var initialValues = {};
    formData.forEach(function (item) {
        initialValues[item === null || item === void 0 ? void 0 : item.id] = (item === null || item === void 0 ? void 0 : item.value) || "";
    });
    var _b = (0, react_1.useState)(initialValues), values = _b[0], setValue = _b[1];
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
    var yupSchema = formData.reduce(validator_1.createYupSchema, {});
    var validateSchema = yup.object().shape(yupSchema);
    return (react_1.default.createElement(FormFields_tsx_1.Form, { enableReinitialize: true, validationSchema: validateSchema, initialValues: values, onSubmit: _onSubmit },
        formData.map(function (item, index) {
            var _a;
            var FormField = fieldMap[item === null || item === void 0 ? void 0 : item.type];
            if (!(item === null || item === void 0 ? void 0 : item.type)) {
                return null;
            }
            return (react_1.default.createElement(FormField, { key: index, name: item === null || item === void 0 ? void 0 : item.id, label: item === null || item === void 0 ? void 0 : item.label, placeholder: item === null || item === void 0 ? void 0 : item.placeholder, description: item === null || item === void 0 ? void 0 : item.description, onChange: (item === null || item === void 0 ? void 0 : item.type) === "checkbox" ? handleCheckItem : handleChange, options: item === null || item === void 0 ? void 0 : item.options, checked: (_a = values[item === null || item === void 0 ? void 0 : item.id]) === null || _a === void 0 ? void 0 : _a.value, required: item === null || item === void 0 ? void 0 : item.required }));
        }),
        react_1.default.createElement(formStyle_1.ButtonContainer, null,
            react_1.default.createElement(formStyle_1.SubmitButton, { type: "submit", style: buttonProp === null || buttonProp === void 0 ? void 0 : buttonProp.buttonStyle }, buttonProp ? buttonProp === null || buttonProp === void 0 ? void 0 : buttonProp.buttonTitle : "Submit"))));
};
exports.default = App;
