/**
 * Enum defining typography lint rules.
 */
enum LintRules_typography {
    Typography = 'typography',
    FontFamilies = 'fontFamilies',
    FontWeights = 'fontWeights',
    FontSizes = 'fontSizes'
}

/**
 * Analyzes a given SceneNode to determine if it adheres to typography linting rules.
 * @param node - The SceneNode to be linted for typography.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if typography linting has passed for the given node, otherwise false.
 */
export function lintTypography(node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}}): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryTypoChecks = [LintRules_typography.Typography];
    const secondaryTypoChecks = [LintRules_typography.FontFamilies, LintRules_typography.FontSizes, LintRules_typography.FontWeights];

    // Either check for token 'typography' or ('fontFamilies' && 'fontWeights' && 'fontSizes') tokens
    if (primaryTypoChecks.some(primaryTypoCheck => keys.includes(primaryTypoCheck))) {
        lintCount.passed += primaryTypoChecks.filter(primaryTypoCheck => keys.includes(primaryTypoCheck)).length;
        lintCount.total += primaryTypoChecks.length;
        lintCount.errors.tokenErrors.push(...primaryTypoChecks.filter(primaryTypoCheck => !keys.includes(primaryTypoCheck))); 
    } else if (secondaryTypoChecks.some(secondaryToken => keys.includes(secondaryToken))) {
        // Line height, letterSpacing , textCase linting (TBD)
        lintCount.passed += secondaryTypoChecks.filter(secondaryTypoCheck => keys.includes(secondaryTypoCheck)).length;
        lintCount.total += secondaryTypoChecks.length;
        lintCount.errors.tokenErrors.push(...secondaryTypoChecks.filter(secondaryTypoCheck => !keys.includes(secondaryTypoCheck))); 
    } else {
        lintCount.total += primaryTypoChecks.length;
        lintCount.errors.tokenErrors.push(...primaryTypoChecks.filter(primaryTypoCheck => !keys.includes(primaryTypoCheck))); 
    }

    return lintCount.passed === lintCount.total;
}
