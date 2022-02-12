"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var InputText = function (_a) {
    var data = _a.data;
    return (react_1.default.createElement("div", null,
        data.is_required && react_1.default.createElement("span", null, "*"),
        react_1.default.createElement("span", null, data.label),
        data.description && react_1.default.createElement("p", null, data.description),
        react_1.default.createElement("input", { type: data.field, min: data.min_length, max: data.max_length })));
};
exports.default = InputText;
