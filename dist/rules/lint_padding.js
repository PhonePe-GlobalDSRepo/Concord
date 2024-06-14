/**
 * Enum defining padding lint rules.
 */
var LintRules_padding;
(function (LintRules_padding) {
    LintRules_padding["PaddingTop"] = "paddingTop";
    LintRules_padding["PaddingBottom"] = "paddingBottom";
    LintRules_padding["PaddingLeft"] = "paddingLeft";
    LintRules_padding["PaddingRight"] = "paddingRight";
})(LintRules_padding || (LintRules_padding = {}));
/**
 * Checks if a node's padding values are non-zero.
 */
export function nonZeroPadding(node) {
    const { paddingTop, paddingBottom, paddingLeft, paddingRight } = node;
    return (paddingTop !== 0 && paddingTop !== undefined) ||
        (paddingBottom !== 0 && paddingBottom !== undefined) ||
        (paddingLeft !== 0 && paddingLeft !== undefined) ||
        (paddingRight !== 0 && paddingRight !== undefined);
}
/**
 * Analyzes a given SceneNode to determine if it adheres to padding linting rules.
 * @param node - The SceneNode to be linted for padding.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if padding linting has passed for the given node, otherwise false.
 */
export function lintPadding(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryPaddingChecks = [LintRules_padding.PaddingTop, LintRules_padding.PaddingBottom, LintRules_padding.PaddingLeft, LintRules_padding.PaddingRight];
    primaryPaddingChecks.forEach(paddingProp => {
        const paddingValue = node[paddingProp];
        if (paddingValue !== 0) {
            lintCount.total++;
            if (keys.includes(paddingProp)) {
                lintCount.passed++;
            }
            else {
                lintCount.errors.tokenErrors.push(paddingProp);
            }
        }
    });
    return lintCount.passed === lintCount.total;
}
