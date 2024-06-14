/**
 * Enum defining sizing lint rules.
 */
var LintRules_size;
(function (LintRules_size) {
    LintRules_size["Sizing"] = "sizing";
    LintRules_size["Width"] = "width";
    LintRules_size["Height"] = "height";
    LintRules_size["MinWidth"] = "minWidth";
    LintRules_size["MinHeight"] = "minHeight";
})(LintRules_size || (LintRules_size = {}));
/**
 * Checks if a node's layout sizing is fixed in a specified direction.
 */
export function isFixed(node, direction) {
    return direction == 'horizontal' ? node.layoutSizingHorizontal === 'FIXED' && node.width != 0 : node.layoutSizingVertical === 'FIXED' && node.height != 0;
}
/**
 * Analyzes a given SceneNode to determine if it adheres to sizing linting rules.
 * @param node - The SceneNode to be linted for sizing.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if sizing linting has passed for the given node, otherwise false.
 */
export function lintSize(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primarySizeChecks = [LintRules_size.Width, LintRules_size.Height];
    if (isFixed(node, 'horizontal') && isFixed(node, 'vertical')) {
        if (keys.includes(LintRules_size.Sizing) || primarySizeChecks.every(primarySizeCheck => keys.includes(primarySizeCheck))) {
            lintCount.passed++;
            lintCount.total++;
        }
        else {
            lintCount.passed += primarySizeChecks.filter(primarySizeCheck => keys.includes(primarySizeCheck)).length;
            lintCount.errors.tokenErrors.push(...primarySizeChecks.filter(secondarySizeCheck => !keys.includes(secondarySizeCheck)));
            lintCount.total += primarySizeChecks.length;
        }
    }
    else {
        for (const primarySizeCheck of primarySizeChecks) {
            const fixed = isFixed(node, primarySizeCheck == 'width' ? 'horizontal' : 'vertical');
            if (fixed) {
                if (keys.includes(primarySizeCheck)) {
                    lintCount.passed++;
                }
                else {
                    lintCount.errors.tokenErrors.push(primarySizeCheck);
                }
                lintCount.total++;
            }
        }
    }
    return lintCount.passed === lintCount.total;
}
