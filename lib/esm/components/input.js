import React from "react";
var InputText = function (_a) {
    var data = _a.data;
    return (React.createElement("div", null,
        data.is_required && React.createElement("span", null, "*"),
        React.createElement("span", null, data.label),
        data.description && React.createElement("p", null, data.description),
        React.createElement("input", { type: data.field, min: data.min_length, max: data.max_length })));
};
export default InputText;
