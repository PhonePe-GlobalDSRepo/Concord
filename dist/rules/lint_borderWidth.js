/**
 * Enum defining border width lint rules.
 */
var LintRules_borderWidth;
(function (LintRules_borderWidth) {
    LintRules_borderWidth["BorderWidth"] = "borderWidth";
    LintRules_borderWidth["BorderWidthTop"] = "borderWidthTop";
    LintRules_borderWidth["BorderWidthBottom"] = "borderWidthBottom";
    LintRules_borderWidth["BorderWidthLeft"] = "borderWidthLeft";
    LintRules_borderWidth["BorderWidthRight"] = "borderWidthRight";
})(LintRules_borderWidth || (LintRules_borderWidth = {}));
/**
 * Checks if the border width of a node is valid and non-zero.
 */
export function validBorderWidth(node) {
    const keys = node.getSharedPluginDataKeys("tokens");
    return keys.includes('borderColor') && node.strokeWeight !== 0 && node.strokeWeight !== undefined;
}
/**
 * Checks if the border width of a node is a figma.mixed value.
 */
function mixedBorderWidth(node) {
    return typeof node.strokeWeight === 'symbol';
}
/**
 * Analyzes a given SceneNode to determine if it adheres to border width linting rules.
 * @param node - The SceneNode to be linted for border width.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing lint errors.
 * @returns True if border width linting has passed for the given node, otherwise false.
 */
export function lintBorderWidth(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryBorderWidthChecks = [LintRules_borderWidth.BorderWidth];
    const secondaryBorderWidthChecks = [LintRules_borderWidth.BorderWidthTop, LintRules_borderWidth.BorderWidthBottom, LintRules_borderWidth.BorderWidthLeft, LintRules_borderWidth.BorderWidthRight];
    const hasNonZeroBorderWidth = validBorderWidth(node);
    const isMixedBorderWidth = mixedBorderWidth(node);
    // If both conditions are met, increase passed count
    if (isMixedBorderWidth) {
        secondaryBorderWidthChecks.forEach(borderprop => {
            const borderValue = node[borderprop];
            if (borderValue !== 0 && borderValue !== undefined) {
                lintCount.total++;
                if (keys.includes(borderprop)) {
                    lintCount.passed++;
                }
                else {
                    lintCount.errors.tokenErrors.push(borderprop);
                }
            }
        });
    }
    else if (hasNonZeroBorderWidth) {
        if (hasNonZeroBorderWidth && (primaryBorderWidthChecks.every(primaryBorderWidthCheck => keys.includes(primaryBorderWidthCheck)) || secondaryBorderWidthChecks.every(secondaryBorderWidthCheck => keys.includes(secondaryBorderWidthCheck)))) {
            lintCount.passed++;
        }
        else {
            lintCount.errors.tokenErrors.push(...primaryBorderWidthChecks);
        }
        lintCount.total++;
    }
    return lintCount.passed == lintCount.total;
}
