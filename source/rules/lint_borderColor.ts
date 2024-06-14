/**
 * Enum defining border color lint rules.
 */
enum LintRules_borderColor {
    BorderColor = 'borderColor'
}

/**
 * Checks if the border stroke is present on node.
 */
export function validBorderColor(node: SceneNode): boolean {
    return Array.isArray((node as FrameNode).strokes) && (node as any).strokes.some((stroke: any) => stroke.visible === true);
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
export function lintBorderColor(node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}}, compTokens : string[]): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryBorderColorChecks = [LintRules_borderColor.BorderColor];
   
    // Check if composition token includes border color or token 'borderColor' is present
    if(compTokens.includes(LintRules_borderColor.BorderColor)){
        lintCount.passed ++;
        lintCount.total ++;
    } else {   
        lintCount.passed += primaryBorderColorChecks.filter(primaryBorderColorCheck => keys.includes(primaryBorderColorCheck)).length; 
        lintCount.total += primaryBorderColorChecks.length;
        lintCount.errors.tokenErrors.push(...primaryBorderColorChecks.filter(primaryBorderColorCheck => !keys.includes(primaryBorderColorCheck))); 
    }

    return lintCount.passed == lintCount.total;
}