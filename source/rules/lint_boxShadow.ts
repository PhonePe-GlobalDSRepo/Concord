/**
 * Enum matching require token names to respective figma node properties
 */
enum LintRules_boxShadow {
    boxShadow = 'DROP_SHADOW',
}

/**
 * Checks if a node's effects have a 'DROP_SHADOW' effect.
 */
export function validBoxShadow(node: SceneNode) : boolean { 
    let hasDropShadow = false;
    if ((node as FrameNode).effects) {
        // Iterate through the effects of the FrameNode
        (node as FrameNode).effects.forEach(effect => {
            hasDropShadow =  (effect.type === LintRules_boxShadow.boxShadow)
        });
    }
    return hasDropShadow;
}
  

/**
 * Analyzes a given SceneNode to determine if it is detached.
 * @param node - The SceneNode to be linted for detachment.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if detachment linting has passed for the given node, otherwise false.
 */
export function lintBoxShadow (node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}}, compTokens : string[]): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    const boxShadowKey: string | undefined = Object.keys(LintRules_boxShadow).find((key: string) => LintRules_boxShadow[key as keyof typeof LintRules_boxShadow] === LintRules_boxShadow.boxShadow);
    
    if (boxShadowKey && (keys.includes(boxShadowKey) || compTokens.includes(boxShadowKey))){ 
        lintCount.passed++;
    } else {
        lintCount.errors.tokenErrors.push(boxShadowKey)
    }
    lintCount.total++;
    return lintCount.passed==lintCount.total;
}
  
