/**
 * Enum defining padding lint rules.
 */
enum LintRules_padding {
    PaddingTop = 'paddingTop',
    PaddingBottom = 'paddingBottom',
    PaddingLeft = 'paddingLeft',
    PaddingRight = 'paddingRight'
}

/**
 * Checks if a node's padding values are non-zero.
 */
export function nonZeroPadding(node: SceneNode): boolean {
    const { paddingTop, paddingBottom, paddingLeft, paddingRight } = node as FrameNode;
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
export function lintPadding(node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}}): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    let primaryPaddingChecks = [LintRules_padding.PaddingTop, LintRules_padding.PaddingBottom, LintRules_padding.PaddingLeft, LintRules_padding.PaddingRight];
    
    // If spacing token is present, then don't check for individual padding on all sides.
    if (keys.includes('spacing')) {
        lintCount.passed++;
        lintCount.total++;          
        primaryPaddingChecks = [];
    } else {
        // If spacing token is present, then don't check for individual padding on top and bottom.
        if (keys.includes('horizontalPadding')) {
            lintCount.passed++;
            lintCount.total++;     
            primaryPaddingChecks = primaryPaddingChecks.filter(check => check !== LintRules_padding.PaddingTop && check !== LintRules_padding.PaddingBottom);
        } 
        
        // If spacing token is present, then don't check for individual padding on left and right.
        if (keys.includes('verticalPadding')) {
            lintCount.passed++;
            lintCount.total++;     
            primaryPaddingChecks = primaryPaddingChecks.filter(check => check !== LintRules_padding.PaddingLeft && check !== LintRules_padding.PaddingRight);
        }
    }

    // Check for padding on remaining sides.
    if (primaryPaddingChecks.length > 0) {
        primaryPaddingChecks.forEach(paddingProp => {
            const paddingValue = (node as FrameNode)[paddingProp];
            if (paddingValue !== 0) {
                lintCount.total++;
                if (keys.includes(paddingProp)) {
                    lintCount.passed++;
                } else {
                    lintCount.errors.tokenErrors.push(paddingProp);
                }
            }
        });
    }
    
    return lintCount.passed === lintCount.total;
}