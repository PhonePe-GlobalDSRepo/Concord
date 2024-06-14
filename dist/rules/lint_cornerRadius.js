/**
 * Enum defining corner radius lint rules.
 */
var LintRules_cornerRadius;
(function (LintRules_cornerRadius) {
    LintRules_cornerRadius["BorderRadius"] = "borderRadius";
    LintRules_cornerRadius["BorderRadiusTopLeft"] = "borderRadiusTopLeft";
    LintRules_cornerRadius["BorderRadiusTopRight"] = "borderRadiusTopRight";
    LintRules_cornerRadius["BorderRadiusBottomLeft"] = "borderRadiusBottomLeft";
    LintRules_cornerRadius["BorderRadiusBottomRight"] = "borderRadiusBottomRight";
})(LintRules_cornerRadius || (LintRules_cornerRadius = {}));
/**
 * Checks if the corner radius of a node is a figma.mixed value.
 */
function mixedCornerRadius(node) {
    return typeof node.cornerRadius === 'symbol';
}
/**
 * Checks if the corner radius of a node is non-zero.
 */
export function nonZeroCornerRadius(node) {
    return node.cornerRadius !== 0;
}
/**
 * Analyzes a given SceneNode to determine if it adheres to corner radius fill rules.
 * @param node - The SceneNode to be linted for corner radius.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if corner radius linting has passed for the given node, otherwise false.
 */
export function lintCornerRadius(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryCornerRadiusChecks = [LintRules_cornerRadius.BorderRadius];
    const secondaryCornerRadiusChecks = [LintRules_cornerRadius.BorderRadiusTopLeft, LintRules_cornerRadius.BorderRadiusTopRight, LintRules_cornerRadius.BorderRadiusBottomLeft, LintRules_cornerRadius.BorderRadiusBottomRight];
    const isNonZero = nonZeroCornerRadius(node);
    const isMixed = mixedCornerRadius(node);
    // If both conditions are met, increase passed count
    if (isMixed) {
        secondaryCornerRadiusChecks.forEach(radiusprop => {
            const radiusValue = node[radiusprop];
            if (radiusValue !== 0 && radiusValue !== undefined) {
                lintCount.total++;
                if (keys.includes(radiusprop)) {
                    lintCount.passed++;
                }
                else {
                    lintCount.errors.tokenErrors.push(radiusprop);
                }
            }
        });
    }
    else if (isNonZero) {
        if (isNonZero && (keys.includes(LintRules_cornerRadius.BorderRadius) || secondaryCornerRadiusChecks.every(secondaryCornerRadiusCheck => keys.includes(secondaryCornerRadiusCheck)))) {
            lintCount.passed++;
        }
        else {
            lintCount.errors.tokenErrors.push(...primaryCornerRadiusChecks);
        }
        lintCount.total++;
    }
    return lintCount.passed == lintCount.total;
}
