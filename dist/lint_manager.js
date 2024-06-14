import { applyAutoLayout } from "./layouting";
import * as Constants from "./constants";
import * as Utils from "./utils";
import * as NodeCreator from "./node_manager";
import { lintTypography } from "./rules/lint_typography";
import { lintFill } from "./rules/lint_fill";
import { lintSize, isFixed } from "./rules/lint_sizing";
import { lintCornerRadius, nonZeroCornerRadius } from "./rules/lint_cornerRadius";
import { lintPadding, nonZeroPadding } from "./rules/lint_padding";
import { lintBorderWidth, validBorderWidth } from "./rules/lint_borderWidth";
import { lintDetach } from "./rules/lint_detach";
/** Namespace for linting utilities */
var LintUtilities;
(function (LintUtilities) {
    /** List of Lintable Nodes */
    let LintNodes;
    (function (LintNodes) {
        LintNodes["text"] = "TEXT";
        LintNodes["rectangle"] = "RECTANGLE";
        LintNodes["vector"] = "VECTOR";
        LintNodes["frame"] = "FRAME";
        LintNodes["instance"] = "INSTANCE";
    })(LintNodes || (LintNodes = {}));
    /** List of Lint Rules */
    let LintRules;
    (function (LintRules) {
        LintRules[LintRules["Fill"] = 0] = "Fill";
        LintRules[LintRules["Typography"] = 1] = "Typography";
        LintRules[LintRules["Size"] = 2] = "Size";
        LintRules[LintRules["CornerRadius"] = 3] = "CornerRadius";
        LintRules[LintRules["Padding"] = 4] = "Padding";
        LintRules[LintRules["BorderWidth"] = 5] = "BorderWidth";
        LintRules[LintRules["Detach"] = 6] = "Detach";
    })(LintRules || (LintRules = {}));
    /** Method to check if a node is lintable */
    function isLintableNode(type) {
        return Object.values(LintNodes).includes(type);
    }
    LintUtilities.isLintableNode = isLintableNode;
    /** Method to fetch rules of a node */
    function getRules(node) {
        switch (node.type) {
            case LintNodes.text:
                return [LintRules.Fill, LintRules.Typography, LintRules.Padding];
            case LintNodes.vector:
                return [LintRules.Fill, LintRules.Padding, LintRules.CornerRadius, LintRules.BorderWidth];
            case LintNodes.rectangle:
                return [LintRules.Size, LintRules.CornerRadius, LintRules.Padding];
            case LintNodes.frame:
                return [LintRules.Detach, LintRules.Size, LintRules.CornerRadius, LintRules.Padding, LintRules.BorderWidth];
            case LintNodes.instance:
                return [LintRules.Size, LintRules.CornerRadius, LintRules.Padding, LintRules.BorderWidth,];
            default:
                return [];
        }
    }
    LintUtilities.getRules = getRules;
    /** Method to execute linting rules */
    function executeRules(node, rules, lintCount) {
        var lintPassed = false;
        rules.forEach(rule => {
            switch (rule) {
                case LintRules.Fill:
                    lintPassed = lintFill(node, lintCount);
                    break;
                case LintRules.Typography:
                    lintPassed = lintTypography(node, lintCount);
                    break;
                case LintRules.Size:
                    if (isFixed(node, 'horizontal') || isFixed(node, 'vertical')) {
                        lintPassed = lintSize(node, lintCount);
                    }
                    break;
                case LintRules.CornerRadius:
                    if (nonZeroCornerRadius(node)) {
                        lintPassed = lintCornerRadius(node, lintCount);
                    }
                    break;
                case LintRules.Padding:
                    if (nonZeroPadding(node)) {
                        lintPassed = lintPadding(node, lintCount);
                    }
                    break;
                case LintRules.BorderWidth:
                    if (validBorderWidth(node)) {
                        lintPassed = lintBorderWidth(node, lintCount);
                    }
                    break;
                case LintRules.Detach:
                    lintPassed = lintDetach(node, lintCount);
                    console.log(node.name, " -> Detach list ", lintCount.errors.generalErrors);
                    break;
            }
        });
        return lintPassed;
    }
    LintUtilities.executeRules = executeRules;
})(LintUtilities || (LintUtilities = {}));
/** Function to display lint data
*/
function displayLintData(data) {
    return (data == 100) ? `✅` : `${data}% Passed`;
}
/** Function to create lint frame
 */
export function getLintResultFrame(data) {
    const lintFrame = figma.createFrame();
    applyAutoLayout(lintFrame, Constants.padding3, "HORIZONTAL");
    lintFrame.fills = [];
    const displayData = displayLintData(data);
    let fontName = { family: "Inter", style: "Regular" };
    let checkNode = NodeCreator.getNewTextNode(displayData, { r: 0.46, g: 0, b: 0 }, fontName = fontName);
    lintFrame.appendChild(checkNode);
    return lintFrame;
}
/** Function to display general node errors */
export function getLintErrorFrame(generalErrors) {
    const lintErrorFrame = figma.createFrame();
    applyAutoLayout(lintErrorFrame, Constants.padding2, "VERTICAL");
    lintErrorFrame.fills = [{ type: 'SOLID', color: Constants.white }];
    lintErrorFrame.cornerRadius = 6;
    let fontName = { family: "Inter", style: "Regular" };
    let newNode = NodeCreator.getNewTextNode(`Errors`);
    lintErrorFrame.appendChild(newNode);
    let line = NodeCreator.getVSpacer(1, Constants.separatorColor);
    line.layoutAlign = "STRETCH";
    lintErrorFrame.appendChild(line);
    let datumNodes = [];
    generalErrors.forEach((error) => {
        const errorNode = NodeCreator.getNewTextNode(error, { r: 0.36, g: 0, b: 0 }, fontName = fontName);
        lintErrorFrame.appendChild(errorNode);
    });
    return lintErrorFrame;
}
/**
 * This function performs lint checking on a given Figma node.
 * If the node is lintable, it calculates the percentage of passed lint checks.
 * If the node is not lintable, the function returns -1 to indicate that lint checking is not applicable.
 * @param node The Figma node to perform lint checking on.
 * @returns A percentage value representing the ratio of passed lint checks to total lint checks.
 * If lint checking is not applicable for the node, returns -1.
 */
export function lintCheck(node, tokenErrors, generalErrors) {
    if (LintUtilities.isLintableNode(node.type)) {
        const nodeRules = LintUtilities.getRules(node);
        const lintCount = {
            passed: 0,
            total: 0,
            errors: {
                tokenErrors: [],
                generalErrors: []
            }
        };
        const check = LintUtilities.executeRules(node, nodeRules, lintCount);
        const percentage = Utils.getRoundedDecimal((lintCount.passed / lintCount.total * 100));
        tokenErrors.push(...lintCount.errors.tokenErrors);
        generalErrors.push(...lintCount.errors.generalErrors);
        return percentage;
    }
    else {
        return -1;
    }
}
