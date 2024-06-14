/**
 * Enum defining fill lint rules.
 */
var LintRules_fill;
(function (LintRules_fill) {
    LintRules_fill["Fill"] = "fill";
    LintRules_fill["BorderColor"] = "borderColor";
})(LintRules_fill || (LintRules_fill = {}));
/**
 * Analyzes a given SceneNode to determine if it adheres to padding fill rules.
 * @param node - The SceneNode to be linted for fill.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if fill linting has passed for the given node, otherwise false.
 */
export function lintFill(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryFillChecks = [LintRules_fill.Fill];
    const secondaryFillChecks = [LintRules_fill.BorderColor];
    if (primaryFillChecks.some(primaryFillCheck => keys.includes(primaryFillCheck))) {
        lintCount.passed += primaryFillChecks.filter(primaryFillCheck => keys.includes(primaryFillCheck)).length;
        lintCount.errors.tokenErrors.push(...primaryFillChecks.filter(primaryFillCheck => !keys.includes(primaryFillCheck)));
        lintCount.total += primaryFillChecks.length;
    }
    else if (secondaryFillChecks.some(secondaryFillCheck => keys.includes(secondaryFillCheck))) {
        lintCount.passed += secondaryFillChecks.filter(secondaryFillCheck => keys.includes(secondaryFillCheck)).length;
        lintCount.errors.tokenErrors.push(...secondaryFillChecks.filter(secondaryFillCheck => !keys.includes(secondaryFillCheck)));
        lintCount.total += secondaryFillChecks.length;
    }
    else {
        lintCount.total += primaryFillChecks.length;
        lintCount.errors.tokenErrors.push(...primaryFillChecks.filter(primaryFillCheck => !keys.includes(primaryFillCheck)));
    }
    return lintCount.passed == lintCount.total;
}
