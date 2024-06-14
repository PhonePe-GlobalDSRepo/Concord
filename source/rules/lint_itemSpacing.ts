/**
 * Enum defining item spacing lint rules.
 */
enum LintRules_itemSpacing {
    ItemSpacing = 'itemSpacing'
}

/**
 * Checks if a node's item spacing values are non-zero.
 */
export function validItemSpacing(node: SceneNode): boolean {
    return (node as FrameNode).itemSpacing !==undefined && (node as FrameNode).itemSpacing > 0;
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
export function lintItemSpacing(node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}}): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryItemSpacingChecks = [LintRules_itemSpacing.ItemSpacing];

    // Check if item spacing token is present
    lintCount.passed += primaryItemSpacingChecks.filter(primaryItemSpacingCheck => keys.includes(primaryItemSpacingCheck)).length;
    lintCount.errors.tokenErrors.push(...primaryItemSpacingChecks.filter(primaryItemSpacingCheck => !keys.includes(primaryItemSpacingCheck)));
    lintCount.total += primaryItemSpacingChecks.length; 
    
    return lintCount.passed === lintCount.total;
}
