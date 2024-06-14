import * as Constants from "./constants"

/**
 * Returns true if the provided input is an object with a "children" property, indicating that it is a parent node.
 * @param a - The input to check.
 * @returns A boolean indicating whether or not the input is a parent node.
 */
export function isOfTypeParentNode(a: any): a is Constants.ParentNode {
    // Check if the provided input has a "children" property
    return "children" in a;
}

/**
 * Check if the provided node is the top node in the current selection.
 * @param {SceneNode} node - The node to check.
 * @returns {Boolean} - Returns true if the provided node is the top node in the selection, otherwise false.
 */
export function isTopNode(node: SceneNode) : Boolean {
    return (figma.currentPage.selection.findIndex(item => item === node) === 0)
}

/**
 * Returns true if the provided node is a master component.
 * @param node - The node to check.
 * @returns A boolean indicating whether or not the provided node is a master component.
 */
export function isMasterComponent(node: SceneNode): Boolean {
    // Check if the name of the provided node starts with the prefix "M-"
    return node.name.startsWith('M-')
}

/**
 * Returns true if the provided node is a component node.
 * @param node - The node to check.
 * @returns A boolean indicating whether or not the provided node is a component.
 */
export function isComponent(node: SceneNode) : Boolean {
    // Check if node is an instanceNode
    return node.type == 'INSTANCE'
}

/**
 * Finds and returns an unused region of the canvas on the specified page.
 * @param page - The page to search for unused space on.
 * @returns An object with the x, y, width, and height properties representing the dimensions of the unused region.
 */
export function findEmptySpace(page: PageNode): { x: number, y: number, width: number, height: number } {
    // Initialize variables to keep track of the bounding box of all visible and unlocked layers
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let hasVisibleNodes = false;
    let currentY ;

    // Iterate through all layers on the canvas
    page.children.forEach(node => {
        // Exclude locked and hidden layers
        if (node.visible && !node.locked) {
            hasVisibleNodes = true;
            // Update the bounding box with the current layer's position and size
            minX = Math.min(minX, node.x);
            minY = Math.min(minY, node.y);
            maxX = Math.max(maxX, node.x + node.width);
            maxY = Math.max(maxY, node.y + node.height);
            currentY = maxY;
            if ( maxX > 65000){
                maxX = minX;
                minY = maxY + 500
            }
        }
    });

    if (!hasVisibleNodes) {
        return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    }

    // Calculate empty space dimensions
    const emptySpace = {
        x: maxX, // Set the x coordinate to the right edge of the rightmost layer
        y: minY, // Set the y coordinate to the top edge of the highest layer
        width: maxX - minX, // Set the width to the total width of the bounding box
        height: maxY // Set the height to the vertical distance between the top and bottom edges of the bounding box
    };

    // Return the empty space dimensions
    return emptySpace;
}

/**
 * Returns an array of tuples containing the names and values of shared plugin data tokens on the provided node.
 * @param node - The node to retrieve shared plugin data tokens from.
 * @returns An array of tuples containing the names and values of shared plugin data tokens on the provided node.
 */
export function getTokensOnNode(node: BaseNode): [string, string][] {
    // Get all shared plugin data token keys on the node
    const keys = node.getSharedPluginDataKeys("tokens");

    // Initialize an array to store the resulting tuple pairs
    const result: [string, any][] = [];

    // Iterate over each shared plugin data token key
    for (const key of keys) {
        // Get the value of the shared plugin data token with the current key
        let token = node.getSharedPluginData("tokens", key);

        // If the token value is in the format "{tokenName}", add it to the results
        if (token.includes('.')) {
            // Extract the token name from the value, excluding the surrounding braces
            result.push([key, token.slice(1, -1)]);
        }
    }

    // Return the resulting array of tuple pairs
    return result;
}

export function getRoundedDecimal(num: number): number {
    return Math.round((num + Number.EPSILON) * 100) / 100
}