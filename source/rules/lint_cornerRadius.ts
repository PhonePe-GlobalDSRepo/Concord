/**
 * Enum matching corner radius tokens to figma node properties
 */
enum LintRules_cornerRadius {
    borderRadius = 'borderRadius',
    borderRadiusTopLeft = 'topLeftRadius',
    borderRadiusTopRight = 'topRightRadius',
    borderRadiusBottomLeft = 'bottomLeftRadius',
    borderRadiusBottomRight = 'bottomRightRadius'
}

/**
 * Checks if the corner radius of a node is a figma.mixed value.
 */
function mixedCornerRadius(node: SceneNode): boolean {
    return typeof (node as FrameNode).cornerRadius === 'symbol';
}

/**
 * Checks if the corner radius of a node is non-zero.
 */
export function nonZeroCornerRadius(node: SceneNode): boolean {
    return (node as FrameNode).cornerRadius !== 0 && (node as FrameNode).cornerRadius !== undefined;
}

/**
 * Analyzes a given SceneNode to determine if it adheres to corner radius fill rules.
 * @param node - The SceneNode to be linted for corner radius.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if corner radius linting has passed for the given node, otherwise false.
 */
export function lintCornerRadius(node: SceneNode, lintCount: { passed: number, total: number, errors: {tokenErrors: any[] ,generalErrors: any[]}, warnings : {tokenWarnings : any[]}}, compTokens : string[]): boolean {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryCornerRadiusChecks = [LintRules_cornerRadius.borderRadius];
    const secondaryCornerRadiusChecks = [LintRules_cornerRadius.borderRadiusTopLeft,LintRules_cornerRadius.borderRadiusTopRight,LintRules_cornerRadius.borderRadiusBottomLeft,LintRules_cornerRadius.borderRadiusBottomRight];

    const isNonZero = nonZeroCornerRadius(node);
    const isMixed = mixedCornerRadius(node);

    if (isMixed){
        secondaryCornerRadiusChecks.forEach(radiusprop => {
            const radiusValue = (node as any)[radiusprop];
            if (radiusValue !== 0 && radiusValue !== undefined) {
                // Check if keys of enum are present as token keys
                const secondaryRadiusKey: string | undefined = Object.keys(LintRules_cornerRadius).find((key: string) => LintRules_cornerRadius[key as keyof typeof LintRules_cornerRadius] === radiusprop);
                lintCount.total++;
                if (secondaryRadiusKey && (keys.includes(secondaryRadiusKey) || compTokens.includes(secondaryRadiusKey))) {
                    lintCount.passed++;
                } else {
                    lintCount.errors.tokenErrors.push(secondaryRadiusKey)
                }
            }
        });
    } else {
        // Check if keys of enum are present as token keys
        const primaryRadiusKey: string | undefined = Object.keys(LintRules_cornerRadius).find((key: string) => LintRules_cornerRadius[key as keyof typeof LintRules_cornerRadius] === 'borderRadius');
        const secondaryRadiusKeys = Object.keys(LintRules_cornerRadius).filter((key: string) => LintRules_cornerRadius[key as keyof typeof LintRules_cornerRadius] !== 'borderRadius');
        if ((primaryRadiusKey && keys.includes(primaryRadiusKey) || (secondaryRadiusKeys && secondaryRadiusKeys.every(secondaryRadiusKey=>keys.includes(secondaryRadiusKey))) || compTokens.includes(LintRules_cornerRadius.borderRadius))) {
            lintCount.passed++;
        } else {
            if (primaryRadiusKey) { lintCount.errors.tokenErrors.push(primaryRadiusKey); }
        }

        lintCount.total++;
    } 
    
    return lintCount.passed == lintCount.total;
}