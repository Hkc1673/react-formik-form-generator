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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInput = void 0;
var react_1 = require("react");
var useInput = function (params) {
    var _a = (0, react_1.useState)(params), inputs = _a[0], setInputs = _a[1];
    var handleChange = function (event) {
        var _a;
        setInputs(__assign(__assign({}, inputs), (_a = {}, _a[event.target.name] = event.target.value, _a)));
    };
    console.log(inputs);
    return [inputs, handleChange];
};
exports.useInput = useInput;
