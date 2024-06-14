var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { applyAutoLayout } from "./layouting";
import * as NodeCreator from "./node_manager";
import * as Constants from "./constants";
import * as Utils from "./utils";
import * as StyleManager from "./style_manager";
import * as VariablesManager from "./variables_manager";
import * as LintManager from "./lint_manager";
let ELEMENT_MIN_WIDTH = 360;
function getOptimalSize(orientation, value, maxWidth) {
    switch (orientation) {
        case "WIDTH":
            return Math.min(Math.max(0.01, value), maxWidth);
        case "HEIGHT":
            return Math.max(0.01, value);
    }
}
/**
 * Recursively traverses a parent node and its children to append
 * them to a provided frame and their respective handoff reports.
 *
 * @param parent - The parent node to traverse.
 * @param frame - The frame to append the nodes to.
 * @param handoffConfig - Configuration options for generating the handoff report.
 * @param depth - The depth of the recursion.
 *
 * @returns None.
 */
function getChildrenAndAppend(parent, frame, handoffConfig, maxWidth, lintedData, depth = 0) {
    // If the parent node is a master component and the flag is set to skip its children traversal or if it is not compatible with the current node type
    if ((Utils.isComponent(parent) && handoffConfig.skipComponentChildrenTraversal) || !Utils.isOfTypeParentNode(parent)) {
        return;
    }
    // Cast the node as ParentNode and get its children
    const comp = parent;
    const children = comp.children;
    const padding = 20;
    // For each child in the parent node
    children.forEach((child) => {
        // Check if the child node contains tokens
        let tokens = Utils.getTokensOnNode(child);
        let dataExists = (handoffConfig.showTokens && tokens.length > 0)
            || (handoffConfig.showStyles && StyleManager.isStylePresent(child))
            || (handoffConfig.showVariables && VariablesManager.isVariablePresent(child));
        // maxDepth to be used later
        // if (dataExists || (depth < handoffConfig.maxDepth)) {
        // traverse till max depth if size data is required
        let shouldDisplayRawData = (depth < handoffConfig.maxDepth) && (handoffConfig.showRawData);
        if (dataExists || shouldDisplayRawData) {
            // Create a new frame to hold the child node's tokens and name
            const childFrame = figma.createFrame();
            childFrame.name = "Child Details";
            childFrame.backgrounds = [];
            // Create a new TextNode to hold the child node's name
            let childName = NodeCreator.createChildTitleNode(child);
            let childClone = child.clone();
            const childContainerFrame = figma.createFrame();
            childContainerFrame.name = "Child Container";
            const childContainerContainerFrame = figma.createFrame();
            childContainerContainerFrame.name = "Child Wrapper";
            applyAutoLayout(childContainerContainerFrame, 0, "HORIZONTAL");
            childContainerContainerFrame.appendChild(childContainerFrame);
            childContainerFrame.appendChild(childClone);
            childContainerFrame.backgrounds = [];
            childContainerContainerFrame.backgrounds = [];
            childContainerContainerFrame.minWidth = ELEMENT_MIN_WIDTH;
            applyAutoLayout(childContainerFrame, 0, "HORIZONTAL");
            childContainerFrame.resize(getOptimalSize("WIDTH", child.width, maxWidth), getOptimalSize("HEIGHT", child.height, maxWidth));
            childContainerFrame.resize(Math.max(child.width, 0.01), Math.max(child.height, 0.01));
            childContainerContainerFrame.resize(getOptimalSize("WIDTH", child.width, maxWidth), getOptimalSize("HEIGHT", child.height, maxWidth));
            const spacer = NodeCreator.getVSpacer(2);
            spacer.layoutAlign = "STRETCH";
            frame.appendChild(spacer);
            childName.layoutAlign = "STRETCH";
            frame.appendChild(childName);
            spacer.locked = true;
            childName.locked = true;
            childFrame.appendChild(childContainerContainerFrame);
            let tokenFrame = figma.createFrame();
            // Append the child node's token frame to the child frame
            if (handoffConfig.showTokens) {
                tokenFrame = NodeCreator.getDataDetailsFrame("Tokens", tokens);
                tokenFrame.name = "Token details";
                childFrame.appendChild(tokenFrame);
                tokenFrame.layoutSizingHorizontal = "FIXED";
                tokenFrame.minWidth = 200;
                tokenFrame.maxWidth = 1000;
            }
            //Add local styles node if needed
            if (handoffConfig.showStyles) {
                // if(handoffConfig.showStyles && StyleManager.isStylePresent(child)) {
                const styleFrame = StyleManager.getStyleFrame(child);
                styleFrame.name = "Style details";
                styleFrame.minWidth = 200;
                styleFrame.maxWidth = 1000;
                childFrame.appendChild(styleFrame);
            }
            //Add variables node if needed
            if (handoffConfig.showVariables) {
                // if(handoffConfig.showVariables && VariablesManager.isVariablePresent(child)) {
                const varsFrame = VariablesManager.getVariablesFrame(child);
                varsFrame.name = "Variable details";
                varsFrame.minWidth = 200;
                varsFrame.maxWidth = 1000;
                childFrame.appendChild(varsFrame);
            }
            //Add details frame if needed
            if (handoffConfig.showRawData) {
                const sizeFrame = NodeCreator.getSizeFrame(child);
                sizeFrame.name = "Raw data";
                sizeFrame.minWidth = 200;
                sizeFrame.maxWidth = 1000;
                childFrame.appendChild(sizeFrame);
            }
            //Add lint frame if needed
            if (handoffConfig.showLintData) {
                var generalErrors = [];
                var tokenErrors = [];
                var lintIndicator = LintManager.lintCheck(child, tokenErrors, generalErrors);
                if (lintIndicator > -1) {
                    lintedData.totalLint++;
                    if (lintIndicator == 100) {
                        lintedData.passedLint++;
                    }
                    // Lint Result Display
                    const lintFrame = LintManager.getLintResultFrame(lintIndicator);
                    lintFrame.name = "Lint details";
                    childName.appendChild(lintFrame);
                    lintFrame.layoutSizingHorizontal = "FIXED";
                    lintFrame.minWidth = 100;
                    lintFrame.maxWidth = 200;
                    // Token Error Handling
                    if (tokenErrors.length > 0 && handoffConfig.showTokens) {
                        let modifiedLintErrors = [];
                        modifiedLintErrors = tokenErrors.map(error => [error, 'missing']);
                        NodeCreator.appendToDataDetailsFrame(tokenFrame, modifiedLintErrors);
                    }
                    // General Error Handling
                    if (generalErrors.length > 0 && handoffConfig.showTokens) {
                        const errorFrame = LintManager.getLintErrorFrame(generalErrors);
                        errorFrame.name = "Raw data";
                        errorFrame.minWidth = 200;
                        errorFrame.maxWidth = 1000;
                        childFrame.appendChild(errorFrame);
                    }
                }
            }
            // Append the child frame to the specified parent frame
            frame.appendChild(childFrame);
            // Apply layout properties to the child frame
            childFrame.layoutMode = "HORIZONTAL";
            childFrame.layoutAlign = "STRETCH";
            childFrame.counterAxisSizingMode = "AUTO";
            childFrame.counterAxisAlignItems = "MIN";
            childFrame.itemSpacing = padding / 2;
            childFrame.primaryAxisSizingMode = "FIXED";
            childFrame.locked = true;
        }
        // Recursively call the function on the child node
        getChildrenAndAppend(child, frame, handoffConfig, maxWidth, lintedData, depth + 1);
    });
}
/**
 * Creates a new frame for a given node, including the node's name, copied node (if selected), and any child nodes with tokens.
 * @param element - The node for which a new frame is to be created.
 * @param handoffConfig - Configuration options for generating the handoff.
 * @returns A new frame containing the node's name, copied node (if selected), and child nodes with tokens.
 */
function createHandoffFrame(element, handoffConfig) {
    // Set the padding, create a new frame, and set its backgrounds
    const padding = 24;
    const frame = figma.createFrame();
    frame.name = "Hand off";
    frame.backgrounds = [];
    // Set alignment and font settings for the title text node
    // frame.counterAxisAlignItems = "CENTER"
    let fontName = { family: "Inter", style: "Bold" };
    // Create frame for title and append to new frame
    const titleNode = NodeCreator.getNewTextNode(element.name, undefined, fontName);
    titleNode.fontSize = Constants.titleFontSize;
    titleNode.locked = true;
    const titleFrame = figma.createFrame();
    titleFrame.backgrounds = [];
    titleFrame.layoutMode = "HORIZONTAL";
    titleFrame.layoutAlign = "STRETCH";
    titleFrame.counterAxisSizingMode = "AUTO";
    titleFrame.counterAxisAlignItems = "CENTER";
    titleFrame.itemSpacing = Constants.padding1;
    titleFrame.primaryAxisSizingMode = "FIXED";
    titleFrame.appendChild(titleNode);
    frame.appendChild(titleFrame);
    // Append the spacer to the new frame
    const spacer = NodeCreator.getVSpacer(2);
    spacer.layoutAlign = "STRETCH";
    spacer.locked = true;
    frame.appendChild(spacer);
    // If showSelected is true, append a copy of the selected node to the new frame
    let parentFrame = figma.createFrame();
    parentFrame.name = "Parent details";
    parentFrame.backgrounds = [];
    applyAutoLayout(parentFrame, padding, "HORIZONTAL");
    if (handoffConfig.showSelected) {
        const copiedNode = element.clone();
        parentFrame.appendChild(copiedNode);
    }
    // If the current node has tokens, create a new frame to display them
    const parentTokens = Utils.getTokensOnNode(element);
    if (handoffConfig.showTokens && parentTokens.length != 0) {
        const tokenFrame = NodeCreator.getDataDetailsFrame("Tokens", parentTokens);
        tokenFrame.name = "Token details";
        parentFrame.appendChild(tokenFrame);
        tokenFrame.layoutSizingHorizontal = "FIXED";
        tokenFrame.minWidth = 400;
        tokenFrame.maxWidth = 1000;
    }
    //Add local styles node if needed
    if (handoffConfig.showStyles && StyleManager.isStylePresent(element)) {
        const styleFrame = StyleManager.getStyleFrame(element);
        parentFrame.appendChild(styleFrame);
    }
    //Add variables node if needed
    if (handoffConfig.showVariables && VariablesManager.isVariablePresent(element)) {
        const varsFrame = VariablesManager.getVariablesFrame(element);
        parentFrame.appendChild(varsFrame);
    }
    //Add details frame
    if (handoffConfig.showRawData) {
        const sizeFrame = NodeCreator.getSizeFrame(element);
        parentFrame.appendChild(sizeFrame);
    }
    frame.appendChild(parentFrame);
    // Add variables to calculate lint percentage
    const lintedData = { passedLint: 0, totalLint: 0 };
    // Recursively traverse the child nodes of the current node, creating frames for those with tokens
    getChildrenAndAppend(element, frame, handoffConfig, element.width, lintedData);
    // Add the lint percentage information to the parent node's handoff frame
    if (lintedData.totalLint > 0 && handoffConfig.showLintData) {
        const passedPercentage = Utils.getRoundedDecimal(lintedData.passedLint / lintedData.totalLint * 100);
        const lintPercentageText = `${passedPercentage}% Passed`;
        const lintPercentageNode = NodeCreator.getNewTextNode(lintPercentageText);
        titleFrame.appendChild(lintPercentageNode);
        if (passedPercentage == 100) {
            const lintPercentageNode = NodeCreator.getNewTextNode(`READY FOR DEV`, { r: 0, g: 0.38, b: 0 });
            lintPercentageNode.layoutAlign = "MAX";
            titleFrame.appendChild(lintPercentageNode);
        }
    }
    // Apply auto-layout and spacing properties to the newly created frame
    applyAutoLayout(frame, padding, "VERTICAL");
    titleNode.layoutAlign = "STRETCH";
    frame.itemSpacing = padding;
    // Return the newly created frame
    parentFrame.locked = true;
    return frame;
}
/**
 * Filters an array of nodes to return only top-level frame nodes (nodes that are immediate children of a page).
 * @param nodes - An array of nodes to be filtered.
 * @returns An array of top-level frame nodes.
 */
function filterTopLevelFrames(nodes) {
    // Initialize an empty array for the top-level frame nodes
    let topLevelFrames = [];
    // For each node in the input array
    nodes.forEach(node => {
        var _a;
        // If the node's parent is a page, assume it is a top-level frame node and add it to the output array
        if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === "PAGE") {
            topLevelFrames.push(node);
        }
    });
    // Return the output array of top-level frame nodes
    return topLevelFrames;
}
/**
 * Generates a specific name for handoff purposes as a string.
 * @param id - A string that uniquely identifies the object to be named for handoff purposes.
 * @returns A string with the prefix `CnCd` followed by the provided `id`.
 */
function getHandoffName(id) {
    // Return a string consisting of the prefix `CnCd` followed by the provided `id`
    return `Concord: ${id}`;
}
/**
 * Generates a handoff view for the selected or all top-level frames on the current page.
 * @param handoffConfig - Configuration options for generating the handoff.
 * @returns None.
 */
export function generateHandoff(handoffConfig) {
    (() => __awaiter(this, void 0, void 0, function* () {
        // Load the required fonts
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
        // Initialize the render list
        let handOffRenderList = [];
        // Determine which frames to generate handoff views for
        if (handoffConfig.generateForAll) {
            // Generate handoff views for all top-level frames on the page
            handOffRenderList = filterTopLevelFrames(figma.currentPage.children);
        }
        else {
            // Generate handoff views for the selected frames
            handOffRenderList = figma.currentPage.selection;
        }
        // Notify the user if no elements are selected
        if (handOffRenderList.length == 0) {
            figma.notify("Please select an element on the canvas.");
        }
        // Iterate over each selected or top-level frame and generate handoff
        handOffRenderList.forEach((selectedElement, index) => {
            const isLast = index === handOffRenderList.length - 1;
            ELEMENT_MIN_WIDTH = selectedElement.width;
            generateHandoffForNode(selectedElement, handoffConfig, isLast);
        });
        // Notify the user that handoff views have been generated
        figma.notify("HandOff generated");
        // Close the plugin
        // figma.closePlugin()
    }))();
}
/**
 * Generates handoff for a selected element.
 *
 * @param selectedElement - The element to generate a handoff for.
 * @param handoffConfig - Configuration options for generating the handoff.
 * @param isLast - Whether or not the selected element is the last one being processed.
 *
 * @returns None.
 */
function generateHandoffForNode(selectedElement, handoffConfig, isLast) {
    // If the current node has not already been named for handoff purposes
    if (!selectedElement.name.startsWith('CnCd-') && selectedElement) {
        // Generate a new frame containing this node and its child nodes
        let frame = createHandoffFrame(selectedElement, handoffConfig);
        // Set the background color of the frame
        frame.fills = [{ type: 'SOLID', color: Constants.backgroundColor }];
        // Try to find an existing handoff view with the same name as this node
        const oldHandOff = findOldHandOff(selectedElement);
        // If an existing handoff view was found and we are updating previous handoff views
        if (handoffConfig.updatePreviousHandoff && oldHandOff) {
            // Move the handoff view to the same position as the previous one, then remove the old one
            frame.x = oldHandOff.x;
            frame.y = oldHandOff.y;
            oldHandOff.remove();
        }
        else {
            // Otherwise, create a new name for this handoff view and adjust its position
            const space = Utils.findEmptySpace(figma.currentPage);
            frame.x = space.x + 24;
            frame.y = space.height;
        }
        // Set the name of the handoff view to a specific string with the node ID
        frame.name = getHandoffName(selectedElement.id);
        // Scroll and zoom into the newly created handoff view if this is the last item in the render list
        if (isLast) {
            figma.viewport.scrollAndZoomIntoView([frame]);
        }
    }
}
/**
 * Finds and returns an existing handoff view node with the same name as the provided node ID.
 * @param node - The node for which to find an existing handoff view node.
 * @returns The existing handoff view node, or undefined if no such node is found.
 */
function findOldHandOff(node) {
    // Get the name that an existing handoff view would have for the provided node ID
    let handOff = getHandoffName(node.id);
    // Iterate over the children of the current page to find an existing handoff view with the same name
    for (let child of figma.currentPage.children) {
        // If an existing handoff view is found, return it
        if (child.name == handOff) {
            return child;
        }
    }
    // If no existing handoff view is found, return undefined
    return undefined;
}
