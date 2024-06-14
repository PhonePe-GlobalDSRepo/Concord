/**
 * Enum defining fill lint rules.
 */
enum LintRules_fill {
    Fill = 'fill'
}

/**
 * Checks if a node's padding values are non-zero.
 */
export function validFill(node: SceneNode): boolean {
    return Array.isArray((node as FrameNode).fills) && (node as any).fills.some((fill: any) => fill.type === 'SOLID' && fill.visible === true);
}

/**
 * Analyzes a given SceneNode to determine if it adheres to padding fill rules.
 * @param node - The SceneNode to be linted for fill.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if fill linting has passed for the given node, otherwise false.
 */
export function lintFill(node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}}, compTokens : string[]): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryFillChecks = [LintRules_fill.Fill];
   
    // Check if either 'fill' in either composition token or applied tokens is present
    if(compTokens.includes(LintRules_fill.Fill)){
        lintCount.passed ++;
        lintCount.total ++;
    } else {    
        lintCount.passed += primaryFillChecks.filter(primaryFillCheck => keys.includes(primaryFillCheck)).length;
        lintCount.errors.tokenErrors.push(...primaryFillChecks.filter(primaryFillCheck => !keys.includes(primaryFillCheck))); 
        lintCount.total += primaryFillChecks.length;
    }

    return lintCount.passed == lintCount.total;
}