/**
 * Checks if a node's layout sizing is fixed in a specified direction.
 */
export function isDetached(node) {
    console.log(node.name, " check detach ", node.detachedInfo);
    return (node.detachedInfo !== null);
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
export function lintDetach(node, lintCount) {
    if (!isDetached(node)) {
        lintCount.passed++;
    }
    else {
        lintCount.errors.generalErrors.push(`${node.name}  is detached`);
    }
    lintCount.total++;
    return lintCount.passed == lintCount.total;
}
