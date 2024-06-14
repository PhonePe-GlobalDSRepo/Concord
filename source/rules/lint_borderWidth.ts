/**
 * Enum matching border width tokens to figma node properties 
 */
enum LintRules_borderWidth {
    borderWidth = 'strokeWeight',
    borderWidthTop = 'strokeTopWeight',
    borderWidthBottom = 'strokeBottomWeight',
    borderWidthLeft = 'strokeLeftWeight',
    borderWidthRight = 'strokeRightWeight'
}

/**
 * Checks if the border stroke is present on node.
 */
export function validBorderWidth(node: SceneNode): boolean {
    return Array.isArray((node as FrameNode).strokes) && (node as any).strokes.some((stroke: any) => stroke.visible === true);
}

/**
 * Checks if the border width of a node is a figma.mixed value.
 */
function mixedBorderWidth(node: SceneNode): boolean {
    return typeof (node as FrameNode).strokeWeight === 'symbol';
}

/**
 * Analyzes a given SceneNode to determine if it adheres to border width linting rules.
 * @param node - The SceneNode to be linted for border width.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing lint errors.
 * @returns True if border width linting has passed for the given node, otherwise false.
 */
export function lintBorderWidth(node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}} , compTokens : string[]): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryBorderWidthChecks = [LintRules_borderWidth.borderWidth];
    const secondaryBorderWidthChecks = [LintRules_borderWidth.borderWidthTop,LintRules_borderWidth.borderWidthBottom,LintRules_borderWidth.borderWidthLeft,LintRules_borderWidth.borderWidthRight];
    const hasNonZeroBorderWidth = validBorderWidth(node);
    const isMixedBorderWidth = mixedBorderWidth(node); 

    // If border width is mixed, check border width of all sides individually or if tokens border width of sides are preseent in composition token. 
    // Else check if either token for border width or border width of all sides is present.
    if (isMixedBorderWidth){
        secondaryBorderWidthChecks.forEach(widthprop => {
            const widthValue = (node as any)[widthprop];
            if (widthValue !== 0 && widthValue !== undefined) {
                // Check if keys of enum are present as token keys
                const secondaryWidthKey: string | undefined = Object.keys(LintRules_borderWidth).find((key: string) => LintRules_borderWidth[key as keyof typeof LintRules_borderWidth] === widthprop);
                lintCount.total++;
                if (secondaryWidthKey && (keys.includes(secondaryWidthKey) || compTokens.includes(secondaryWidthKey))) {
                    lintCount.passed++;
                } else {
                    lintCount.errors.tokenErrors.push(secondaryWidthKey)
                }
            }
        });
    } else {
        const primaryWidthKey: string | undefined = Object.keys(LintRules_borderWidth).find((key: string) => LintRules_borderWidth[key as keyof typeof LintRules_borderWidth] === 'strokeWeight');
        const secondaryWidthKeys = Object.keys(LintRules_borderWidth).filter((key: string) => LintRules_borderWidth[key as keyof typeof LintRules_borderWidth] !== 'strokeWeight');
        if ((primaryWidthKey && (keys.includes(primaryWidthKey) || compTokens.includes(primaryWidthKey)))|| (secondaryWidthKeys && (secondaryWidthKeys.every(secondaryWidthKey=>keys.includes(secondaryWidthKey)) || secondaryWidthKeys.every(secondaryWidthKey=>compTokens.includes(secondaryWidthKey))))){
            lintCount.passed++;
        } else {
            if (primaryWidthKey) { lintCount.errors.tokenErrors.push(primaryWidthKey); }
        }
        lintCount.total++;
    } 
    
    return lintCount.passed == lintCount.total;
}