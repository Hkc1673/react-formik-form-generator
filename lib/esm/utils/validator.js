import * as yup from "yup";
export function createYupSchema(schema, config) {
    var id = config.id, validationType = config.validationType, _a = config.validations, validations = _a === void 0 ? [] : _a;
    // @ts-ignore
    if (!yup[validationType]) {
        return schema;
    }
    // @ts-ignore
    var validator = yup[validationType]();
    validations.forEach(function (_a) {
        var params = _a.params, type = _a.type;
        if (!validator[type] || !params) {
            return;
        }
        validator = validator[type].apply(validator, params);
    });
    schema[id] = validator;
    return schema;
}
