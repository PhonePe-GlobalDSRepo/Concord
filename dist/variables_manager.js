import * as NodeManager from "./node_manager";
//check if style exists
export function isVariablePresent(node) {
    let boundVariables = node.boundVariables;
    let fillVars = boundVariables === null || boundVariables === void 0 ? void 0 : boundVariables.fills;
    let strokeVars = boundVariables === null || boundVariables === void 0 ? void 0 : boundVariables.strokes;
    let effectVars = boundVariables === null || boundVariables === void 0 ? void 0 : boundVariables.effects;
    return (fillVars != null) || (strokeVars != null) || (effectVars != null);
}
// create a frame containing raw data in information
export function getVariablesFrame(node) {
    var _a, _b, _c, _d, _e, _f;
    let details = [];
    const fills = (_a = node.boundVariables) === null || _a === void 0 ? void 0 : _a.fills;
    if (fills && fills.length > 0) {
        const firstFill = fills[0];
        if (firstFill.type == "VARIABLE_ALIAS") {
            const fillId = firstFill.id;
            const variableValue = (_b = figma.variables.getVariableById(fillId)) === null || _b === void 0 ? void 0 : _b.name;
            details.push(["fill", variableValue !== null && variableValue !== void 0 ? variableValue : ""]);
        }
    }
    const strokes = (_c = node.boundVariables) === null || _c === void 0 ? void 0 : _c.strokes;
    if (strokes && strokes.length > 0) {
        const firstStroke = strokes[0];
        if (firstStroke.type == "VARIABLE_ALIAS") {
            const strokeId = firstStroke.id;
            const variableValue = (_d = figma.variables.getVariableById(strokeId)) === null || _d === void 0 ? void 0 : _d.name;
            details.push(["stroke", variableValue !== null && variableValue !== void 0 ? variableValue : ""]);
        }
    }
    const effects = (_e = node.boundVariables) === null || _e === void 0 ? void 0 : _e.effects;
    if (effects && effects.length > 0) {
        const firstEffect = effects[0];
        if (firstEffect.type == "VARIABLE_ALIAS") {
            const effectId = firstEffect.id;
            const variableValue = (_f = figma.variables.getVariableById(effectId)) === null || _f === void 0 ? void 0 : _f.name;
            details.push(["effect", variableValue !== null && variableValue !== void 0 ? variableValue : ""]);
        }
    }
    return NodeManager.getDataDetailsFrame("Variables", details);
}
