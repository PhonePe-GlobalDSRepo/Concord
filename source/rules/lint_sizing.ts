/**
 * Enum defining sizing lint rules.
 */
enum LintRules_size {
    Sizing = 'sizing',
    Width = 'width',
    Height = 'height',
    MinWidth = 'minWidth',
    MinHeight = 'minHeight',
    MaxWidth = 'maxWidth',
    MaxHeight = 'maxHeight'
}

/**
 * Checks if a node's layout sizing is fixed in a specified direction.
 */
export function isFixed(node: SceneNode, direction: 'horizontal' | 'vertical') { 
    return direction == 'horizontal' ? (node as FrameNode).layoutSizingHorizontal === 'FIXED' && node.width != 0 : (node as FrameNode).layoutSizingVertical === 'FIXED' && node.height !=0 ;
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
export function lintSize(node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}}): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primarySizeChecks = [LintRules_size.Width,LintRules_size.Height]
    const secondarySizeChecks = [LintRules_size.MinWidth,LintRules_size.MinHeight,LintRules_size.MaxWidth,LintRules_size.MaxHeight]

    /** SIZING LINTING IS MODIFIED TO A WARNING */
    
    // Lint check for 'sizing', 'width' and 'height' tokens
    if (isFixed(node,'horizontal') && isFixed(node,'vertical')){

        if(!keys.includes(LintRules_size.Sizing) && !primarySizeChecks.every(primarySizeCheck=>keys.includes(primarySizeCheck))){
            lintCount.warnings.tokenWarnings.push(...primarySizeChecks.filter(primarySizeCheck => !keys.includes(primarySizeCheck)));
        } 

    } else {
        for (const primarySizeCheck of primarySizeChecks) {
            const fixed = isFixed(node, primarySizeCheck == 'width' ? 'horizontal' : 'vertical');
            if (fixed){
                if(!keys.includes(primarySizeCheck)){
                    lintCount.warnings.tokenWarnings.push(primarySizeCheck);
                }
            }
        }
    } 

    // Lint check for 'minWidth', 'maxWidth' , 'minHeight' and 'maxHeight' tokens
    secondarySizeChecks.forEach(check => {
        const checkValue = (node as any)[check];
        if (checkValue !== null) {
            if (!keys.includes(check)) { 
                lintCount.warnings.tokenWarnings.push(check); 
            } 
        }
    });

    return lintCount.passed === lintCount.total;
}
  
