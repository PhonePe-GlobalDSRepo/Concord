import * as NodeManager from "./node_manager";
//check if style exists
export function isStylePresent(node) {
    const fillStyleId = node.fillStyleId;
    const backgroundStyleId = node.backgroundStyleId;
    const strokeStyleId = node.strokeStyleId;
    const effectStyleId = node.effectStyleId;
    const gridStyleId = node.gridStyleId;
    return (fillStyleId != null && fillStyleId != figma.mixed && fillStyleId != "")
        || (backgroundStyleId != null && backgroundStyleId != "")
        || (strokeStyleId != null && strokeStyleId != "")
        || (effectStyleId != null && effectStyleId != "")
        || (gridStyleId != null && gridStyleId != "");
}
// create a frame containing raw data in information
export function getStyleFrame(node) {
    var _a, _b, _c, _d, _e;
    let details = [];
    const fillStyleId = node.fillStyleId;
    if (fillStyleId) {
        const styleObject = figma.getStyleById(fillStyleId);
        details.push(["fill", (_a = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _a !== void 0 ? _a : ""]);
    }
    const backgroundStyleId = node.backgroundStyleId;
    if (backgroundStyleId) {
        const styleObject = figma.getStyleById(backgroundStyleId);
        details.push(["backrgound", (_b = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _b !== void 0 ? _b : ""]);
    }
    const strokeStyleId = node.strokeStyleId;
    if (strokeStyleId) {
        const styleObject = figma.getStyleById(strokeStyleId);
        details.push(["stroke", (_c = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _c !== void 0 ? _c : ""]);
    }
    const effectStyleId = node.effectStyleId;
    if (effectStyleId) {
        const styleObject = figma.getStyleById(effectStyleId);
        details.push(["effect", (_d = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _d !== void 0 ? _d : ""]);
    }
    const gridStyleId = node.gridStyleId;
    if (gridStyleId) {
        const styleObject = figma.getStyleById(gridStyleId);
        details.push(["grid", (_e = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _e !== void 0 ? _e : ""]);
    }
    return NodeManager.getDataDetailsFrame("Styles", details);
}
