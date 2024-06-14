import { applyAutoLayout, applyHorizontalAutolayout, applyVerticalAutolayout } from "./layouting"
import * as NodeCreator from "./node_manager"
import * as Constants from "./constants"
import * as Utils from "./utils"
import * as StyleManager from "./style_manager"
import * as VariablesManager from "./variables_manager"
import * as LintManager from "./lint_manager";
import * as LinkManager from "./link_manager"

let ELEMENT_MIN_WIDTH = 360;

/**
 * Configuration options for generating a handoff report.
 */
interface HandOffConfig {
    skipComponentChildrenTraversal: boolean;
    generateForAll: boolean;
    updatePreviousHandoff: boolean;
    handOffOnNewPage: boolean;
    showTokens: boolean;
    showStyles: boolean;
    showVariables: boolean;
    maxDepth: number;
    showRawData: boolean;
    showLintData: boolean;
}

// Initialising global static handOffConfig and fetching token JSONs 
let handoffConfig : HandOffConfig;
export let semanticJSON : any;
export let componentJSON : any;
(async () => {
    semanticJSON = await LintManager.NetworkCall.fetchJSON("Semantic");
    componentJSON = await LintManager.NetworkCall.fetchJSON("Component");
})();


/** Initialising all Helper functions */ 

/**
 * Calculates the optimal size based on the given orientation and constraints.
 *
 * @param orientation - The orientation to consider for the size calculation ("WIDTH" or "HEIGHT").
 * @param value - The value to be adjusted.
 * @param maxWidth - The maximum allowed width, applicable when the orientation is "WIDTH".
 * @returns The optimal size, constrained by the orientation and the given limits.
 */
export function getOptimalSize(orientation: "WIDTH" | "HEIGHT", value: number, maxWidth: number): number {
    switch (orientation) {
        case "WIDTH":
            return Math.min(Math.max(0.01, value), maxWidth)
        case "HEIGHT":
            return Math.max(0.01, value)
    }
}

/**
 * Filters an array of nodes to return only top-level frame nodes (nodes that are immediate children of a page).
 * @param nodes - An array of nodes to be filtered.
 * @returns An array of top-level frame nodes.
 */
export function filterTopLevelFrames(nodes: readonly SceneNode[]): SceneNode[] {
    // Initialize an empty array for the top-level frame nodes
    let topLevelFrames: SceneNode[] = []
    // For each node in the input array
    nodes.forEach(node => {
        // If the node's parent is a page, assume it is a top-level frame node and add it to the output array
        if (node.parent?.type === "PAGE") {
            topLevelFrames.push(node as FrameNode);
        }
    });
    // Return the output array of top-level frame nodes
    return topLevelFrames
}

/**
 * Generates a specific name for handoff purposes as a string.
 * @param id - A string that uniquely identifies the object to be named for handoff purposes.
 * @returns A string with the prefix `CnCd` followed by the provided `id`.
 */
export function getHandoffName(id: string, type : string): string {
    // Return a string consisting of the prefix `CnCd` followed by the provided `id`
    return `Concord ${type}: ${id}`
}

/**
 * Finds and returns an existing handoff view node with the same name as the provided node ID.
 * @param node - The node for which to find an existing handoff view node.
 * @returns The existing handoff view node, or undefined if no such node is found.
 */
export function findOldNode(node: SceneNode, handoffPage : PageNode, type : string): SceneNode | undefined {
    // Get the name that an existing handoff / lint report handoff view would have for the provided node ID
    let handOff = getHandoffName(node.id, type)
    // Iterate over the children of the current page to find an existing handoff view with the same name
    for(let child of handoffPage.children) {
        // If an existing handoff view is found, return it
        if (child.name == handOff) {
            return child
        }
    }
    // If no existing handoff view is found, return undefined
    return undefined
}

/**
 * Searches for a button with a specific name in the current page's children.
 *
 * @param nodeId - The ID of the node to include in the button's name.
 * @param typeOfBtn - The type of the button to include in the button's name.
 * @returns The found SceneNode if a matching button is found, otherwise undefined.
 */
export function findOldButton(nodeId: string, typeOfBtn : string): SceneNode | undefined {
    const buttonName = `${typeOfBtn} button: ${nodeId}`
    for(let child of figma.currentPage.children) {
        if (child.name == buttonName) {
            return child
        }
    }

    return undefined
}

export namespace LayoutOptions {
    export enum LayoutMode {
      NONE = 'NONE',
      HORIZONTAL = 'HORIZONTAL',
      VERTICAL = 'VERTICAL'
    }
  
    export enum LayoutAlign {
      MIN = 'MIN',
      CENTER = 'CENTER',
      MAX = 'MAX',
      STRETCH = 'STRETCH',
      INHERIT = 'INHERIT'
    }
  
    export enum counterAxisSizingMode {
      FIXED = 'FIXED',
      AUTO = 'AUTO'
    }
  
    export enum CounterAxisAlignItems {
      MIN = 'MIN',
      MAX = 'MAX',
      CENTER = 'CENTER',
      BASELINE = 'BASELINE'
    }

    export enum primaryAxisSizingMode {
        FIXED = 'FIXED',
        AUTO = 'AUTO'
    }
}

export function applyLayoutOnHandoff(
    node : FrameNode, 
    layoutMode: LayoutOptions.LayoutMode,
    layoutAlign: LayoutOptions.LayoutAlign,
    counterAxisSizingMode: LayoutOptions.counterAxisSizingMode,
    counterAxisAlignItems: LayoutOptions.CounterAxisAlignItems,
    padding: number,
    primaryAxisSizingMode: LayoutOptions.primaryAxisSizingMode
){
    node.layoutMode = layoutMode
    node.layoutAlign = layoutAlign
    node.counterAxisSizingMode = counterAxisSizingMode
    node.counterAxisAlignItems = counterAxisAlignItems
    node.itemSpacing = padding
    node.primaryAxisSizingMode = primaryAxisSizingMode
}

export function createChildContainer(node: FrameNode, maxWidth: number){

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
function getChildrenAndAppend(
    parent: SceneNode,
    parentContainerNode: FrameNode,
    frame: FrameNode,
    maxWidth: number, 
    lintedData: { passedLint: number, totalLint: number},
    depth: number = 0) {

    // If the parent node is a component and the flag is set to skip its children traversal and is not the top node of selected frame or if it is not compatible with the current node type
    if ((Utils.isComponent(parent) && handoffConfig.skipComponentChildrenTraversal) && !Utils.isTopNode(parent) || !Utils.isOfTypeParentNode(parent)) {
        return 
    }

    // Cast the node as ParentNode and get its children
    const comp = parent as Constants.ParentNode;
    const children = comp.children;
    const padding = 20;

    let newParentConatinerNdoe = parentContainerNode
    // For each child in the parent node
    children.forEach((child) => {
        if (!child.visible) {
            return
        }

        // Check if the child node contains tokens
        let tokens = Utils.getTokensOnNode(child);

        // Check if the child node contains variant properties
        let variantProperties = ((child as any).variantProperties !== null) ? (child as any).variantProperties : undefined;

        // Check lint on child
        var generalErrors :string[] = [];
        var tokenErrors :string[] = [];
        var tokenWarnings : string[] = [];
        var lintIndicator = LintManager.lintCheck(child, tokenErrors, generalErrors, tokenWarnings, lintedData)

        let shouldShowStyles: Boolean = handoffConfig.showStyles
        if (shouldShowStyles) {
            shouldShowStyles = shouldShowStyles && StyleManager.isStylePresent(child)
        }

        let shouldShowVariables: Boolean = handoffConfig.showVariables
        if (shouldShowVariables) {
            shouldShowVariables = shouldShowVariables && VariablesManager.isVariablePresent(child)
        }

        let dataExists = (handoffConfig.showTokens && tokens.length > 0) 
                        || shouldShowStyles
                        || shouldShowVariables
                        // || (handoffConfig.showLintData && lintIndicator > -1)
                        || (variantProperties !== undefined)
        
        // maxDepth to be used later
        // if (dataExists || (depth < handoffConfig.maxDepth)) {
        // traverse till max depth if size data is required
        let shouldDisplayRawData = (depth < handoffConfig.maxDepth) && (handoffConfig.showRawData)

        if (dataExists || shouldDisplayRawData) {
            // Create a new frame to hold the child node's tokens and name
            const childFrame: FrameNode = figma.createFrame();
            childFrame.name = "Child Details"
            childFrame.backgrounds = []

            // Create a new TextNode to hold the child node's name
            let childName = NodeCreator.createChildTitleNode(child)
            let linkNode = LinkManager.createParentButton(parentContainerNode)
            childName.appendChild(linkNode)

            let childClone = child.clone()
            const childContainerFrame = figma.createFrame()
            childContainerFrame.name = "Child Container"
            const childContainerContainerFrame = figma.createFrame()
            childContainerContainerFrame.name = "Child Wrapper"
            applyAutoLayout(childContainerContainerFrame, 0, "HORIZONTAL")
            childContainerContainerFrame.appendChild(childContainerFrame)
            childContainerFrame.appendChild(childClone)
            childContainerFrame.backgrounds = []
            childContainerContainerFrame.backgrounds = []
            
            childContainerContainerFrame.minWidth = ELEMENT_MIN_WIDTH;

            applyAutoLayout(childContainerFrame, 0, "HORIZONTAL")
            childContainerFrame.resize(getOptimalSize("WIDTH", child.width, maxWidth),
                                        getOptimalSize("HEIGHT", child.height, maxWidth))
            childContainerFrame.resize(Math.max(child.width, 0.01), Math.max(child.height, 0.01))
            childContainerContainerFrame.resize(getOptimalSize("WIDTH", child.width, maxWidth),
                                                getOptimalSize("HEIGHT", child.height, maxWidth))
            
            const spacer = NodeCreator.getVSpacer(2)
            spacer.layoutAlign = "STRETCH"
            frame.appendChild(spacer)
            childName.layoutAlign = "STRETCH"
            frame.appendChild(childName)

            childFrame.appendChild(childContainerContainerFrame)

            // Append the child node's token frame to the child frame
            let tokenFrame
            if(handoffConfig.showTokens) {
                tokenFrame = NodeCreator.getDataDetailsFrame("Tokens", tokens)
                tokenFrame.name = "Token details"
                childFrame.appendChild(tokenFrame)
                tokenFrame.layoutSizingHorizontal = "FIXED"
                tokenFrame.minWidth = 200
                tokenFrame.maxWidth = 1000
            }

            //Add local styles node if needed
            if(handoffConfig.showStyles) {
            // if(handoffConfig.showStyles && StyleManager.isStylePresent(child)) {
                const styleFrame = StyleManager.getStyleFrame(child);
                styleFrame.name = "Style details"
                styleFrame.minWidth = 200
                styleFrame.maxWidth = 1000
                childFrame.appendChild(styleFrame)
            }

            //Add variables node if needed
            if(handoffConfig.showVariables) {
            // if(handoffConfig.showVariables && VariablesManager.isVariablePresent(child)) {
                const varsFrame = VariablesManager.getVariablesFrame(child);
                varsFrame.name = "Variable details"
                varsFrame.minWidth = 200
                varsFrame.maxWidth = 1000
                childFrame.appendChild(varsFrame)
            }

            //Add details frame if needed
            if(handoffConfig.showRawData) {
                const sizeFrame = NodeCreator.getSizeFrame(child);
                sizeFrame.name = "Raw data"
                sizeFrame.minWidth = 200
                sizeFrame.maxWidth = 1000
                childFrame.appendChild(sizeFrame)
            }

            //Add details frame if needed
            if(Utils.isComponent(child) && variantProperties !== undefined) {
                let propertiesList: [any, any][] = Object.entries(variantProperties || {}).map(([key, value]) => [key, value]);
                const propertiesFrame = NodeCreator.getDataDetailsFrame("Component handoff", propertiesList)
                propertiesFrame.name = "properties details"
                childFrame.appendChild(propertiesFrame)
                propertiesFrame.layoutSizingHorizontal = "FIXED"
                propertiesFrame.minWidth = 200
                propertiesFrame.maxWidth = 1000
            }

            //Add lint frame if needed
            if (handoffConfig.showLintData) {
                if(lintIndicator > -1){

                    // Lint Result Display
                    const lintFrame = LintManager.getLintResultFrame(lintIndicator);
                    lintFrame.name = "Lint details"
                    childName.appendChild(lintFrame)
                    lintFrame.layoutSizingHorizontal = "FIXED"
                    lintFrame.minWidth = 100
                    lintFrame.maxWidth = 200

                    // Token Error Handling
                    if (tokenErrors.length > 0 && handoffConfig.showTokens && tokenFrame) {
                        let modifiedLintErrors: [string, string][] = []
                        modifiedLintErrors = tokenErrors.map(error => [error, 'missing'])
                        NodeCreator.appendToDataDetailsFrame(tokenFrame, modifiedLintErrors);
                    } 

                    // Token Warning Handling
                    if(tokenFrame && tokenWarnings.length > 0){
                        let modifiedLintWarnings: [string, string][] = []
                        modifiedLintWarnings = tokenWarnings.map(warning => [warning, 'missing'])
                        NodeCreator.appendToDataDetailsFrame(tokenFrame, modifiedLintWarnings, { r: 0.53, g: 0.21, b: 0 });          
                    }

                    // General Error Handling
                    if (generalErrors.length > 0 && handoffConfig.showTokens) {
                        const errorFrame = LintManager.getLintErrorFrame(generalErrors);
                        errorFrame.name = "Lint Errors"
                        errorFrame.minWidth = 200
                        errorFrame.maxWidth = 1000
                        childFrame.appendChild(errorFrame)
                    }

                }
            } 

            newParentConatinerNdoe = childContainerFrame
            // Append the child frame to the specified parent frame
            frame.appendChild(childFrame)
            // Apply layout properties to the child frame
            applyLayoutOnHandoff(
                childFrame, 
                LayoutOptions.LayoutMode.HORIZONTAL, 
                LayoutOptions.LayoutAlign.STRETCH,
                LayoutOptions.counterAxisSizingMode.AUTO , 
                LayoutOptions.CounterAxisAlignItems.MIN, 
                padding / 2, 
                LayoutOptions.primaryAxisSizingMode.FIXED
            )
        }

        // Recursively call the function on the child node
        getChildrenAndAppend(child as SceneNode, newParentConatinerNdoe, frame, maxWidth, lintedData, depth + 1);        
    });
}

/**
 * Creates a new frame for a given node, including the node's name, copied node (if selected), and any child nodes with tokens.
 * @param element - The node for which a new frame is to be created.
 * @param handoffConfig - Configuration options for generating the handoff.
 * @returns A new frame containing the node's name, copied node (if selected), and child nodes with tokens.
 */
function createHandoffFrame(element: SceneNode): FrameNode {

    // Set the padding, create a new frame, and set its backgrounds
    const padding = 24;
    const frame: FrameNode = figma.createFrame();
    frame.name = "Hand off"
    frame.backgrounds = []

    // Set alignment and font settings for the title text node
    // frame.counterAxisAlignItems = "CENTER"
    let fontName = { family: "Inter", style: "Bold" };


    // Create frame for title and append to new frame
    const titleNode = NodeCreator.getNewTextNode(element.name, undefined, fontName)
    titleNode.fontSize = Constants.titleFontSize;

    const titleFrame = figma.createFrame();
    titleFrame.backgrounds = []
    applyLayoutOnHandoff(
        titleFrame, 
        LayoutOptions.LayoutMode.HORIZONTAL, 
        LayoutOptions.LayoutAlign.STRETCH,
        LayoutOptions.counterAxisSizingMode.AUTO , 
        LayoutOptions.CounterAxisAlignItems.CENTER, 
        Constants.padding1, 
        LayoutOptions.primaryAxisSizingMode.FIXED
    )

    titleFrame.appendChild(titleNode)
    let sourceButton = LinkManager.createBackToSourceButton(element)
    titleFrame.appendChild(sourceButton)

    frame.appendChild(titleFrame)

    // Append the spacer to the new frame
    const spacer = NodeCreator.getVSpacer(2);
    spacer.layoutAlign = "STRETCH"
    frame.appendChild(spacer)

    let parentFrame = figma.createFrame()
    parentFrame.name = "Parent details"
    parentFrame.backgrounds = []
    applyAutoLayout(parentFrame, padding, "HORIZONTAL");

    const copiedNode = element.clone();
    const elementContainerFrame = figma.createFrame()
    elementContainerFrame.name = "Parent Container"
    const elementContainerContainerFrame = figma.createFrame()
    elementContainerContainerFrame.name = "Parent Wrapper"
    applyAutoLayout(elementContainerContainerFrame, 0, "HORIZONTAL")
    elementContainerContainerFrame.appendChild(elementContainerFrame)
    elementContainerFrame.appendChild(copiedNode)
    elementContainerFrame.backgrounds = []
    elementContainerContainerFrame.backgrounds = []
    applyAutoLayout(elementContainerFrame, 0, "HORIZONTAL")
    elementContainerContainerFrame.minWidth = ELEMENT_MIN_WIDTH;
    parentFrame.appendChild(elementContainerContainerFrame);

    // If the current node has tokens, create a new frame to display them
    const parentTokens = Utils.getTokensOnNode(element);
    if (handoffConfig.showTokens && parentTokens.length != 0) {
        const tokenFrame = NodeCreator.getDataDetailsFrame("Tokens", parentTokens)
        tokenFrame.name = "Token details"
        parentFrame.appendChild(tokenFrame)
        tokenFrame.layoutSizingHorizontal = "FIXED"
        tokenFrame.minWidth = 400
        tokenFrame.maxWidth = 1000
    }
    

    //Add local styles node if needed
    if(handoffConfig.showStyles && StyleManager.isStylePresent(element)) {
        const styleFrame = StyleManager.getStyleFrame(element);
        parentFrame.appendChild(styleFrame)
    }

    //Add variables node if needed
    if(handoffConfig.showVariables && VariablesManager.isVariablePresent(element)) {
        const varsFrame = VariablesManager.getVariablesFrame(element);
        parentFrame.appendChild(varsFrame)
    }

    //Add details frame
    if(handoffConfig.showRawData) {
        const sizeFrame = NodeCreator.getSizeFrame(element);
        parentFrame.appendChild(sizeFrame)
    }

    frame.appendChild(parentFrame)


    // Add variables to calculate lint percentage
    const lintedData = { passedLint: 0, totalLint: 0 };

    // Recursively traverse the child nodes of the current node, creating frames for those with tokens
    getChildrenAndAppend(element, elementContainerFrame, frame, element.width, lintedData)

    let linkButton = LinkManager.createBackToSourceButton(element)
    frame.appendChild(linkButton)

    // Add the lint percentage information to the parent node's handoff frame
    if(lintedData.totalLint > 0 && handoffConfig.showLintData){
        const passedPercentage = Utils.getRoundedDecimal(lintedData.passedLint*100/lintedData.totalLint);
        const lintPercentageText = `${passedPercentage}% Passed`;
        const lintPercentageNode = NodeCreator.getNewTextNode(lintPercentageText);
        titleFrame.appendChild(lintPercentageNode);

        if (passedPercentage == 100){
            const lintPercentageNode = NodeCreator.getNewTextNode(`READY FOR DEV`, { r: 0, g: 0.38, b: 0 });
            lintPercentageNode.layoutAlign = "MAX";
            titleFrame.appendChild(lintPercentageNode);
        }
    }

    // Apply auto-layout and spacing properties to the newly created frame
    applyAutoLayout(frame as FrameNode, padding, "VERTICAL");
    titleNode.layoutAlign = "STRETCH"
    frame.itemSpacing = padding;

    // Return the newly created frame
    return frame
}

/**
 * Generates a handoff view for the selected or all top-level frames on the current page.
 * @param handoffConfig - Configuration options for generating the handoff.
 * @returns None.
 */
export function generateHandoff(localHandffConfig: HandOffConfig) {
    (async () => {

        // Assign the passed configuration to global variable
        handoffConfig = localHandffConfig;

        // Load the required fonts
        await figma.loadFontAsync({ family: "Inter" , style: "Regular"})
        await figma.loadFontAsync({ family: "Inter" , style: "Bold"})
        
        // Initialize the render list
        let handOffRenderList: readonly SceneNode[] = [];

        // Determine which frames to generate handoff views for
        if (handoffConfig.generateForAll) {
            // Generate handoff views for all top-level frames on the page
            handOffRenderList = filterTopLevelFrames(figma.currentPage.children)
        } else {
            // Generate handoff views for the selected frames
            handOffRenderList = figma.currentPage.selection
        }

        // Notify the user if no elements are selected
        if (handOffRenderList.length == 0) {
            figma.notify("Please select an element on the canvas.");
            return;
        }

        let handoffPage: PageNode;
        // Check if a handoff page already exists
        if (handoffConfig.handOffOnNewPage){
            handoffPage = figma.root.findChild(node => node.type === "PAGE" && node.name === `${figma.currentPage.name}-Concord`) as PageNode;

            // If handoff page doesn't exist, create a new one
            if (handoffPage === null) {
                handoffPage = figma.createPage();
                handoffPage.name = `${figma.currentPage.name}-Concord`;
                handoffPage.backgrounds = [{ type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.96 } }];
                const index = figma.root.children.indexOf(figma.currentPage);
                figma.root.insertChild(index + 1, handoffPage);
            } else {
                handoffPage = handoffPage as PageNode;
            }

        } else {
            handoffPage = figma.currentPage;
        }

        // Iterate over each selected or top-level frame and generate handoff
        handOffRenderList.forEach((selectedElement, index) => {
            const isLast = index === handOffRenderList.length - 1;
            ELEMENT_MIN_WIDTH = selectedElement.width
            let frameNode = selectedElement as FrameNode
            if (frameNode) {
                generateHandoffForNode(frameNode, isLast, handoffPage);
            } else {
                figma.notify(`${selectedElement.name} is not a frame node`)
            }
        });

        // Notify the user that handoff views have been generated
        figma.notify("HandOff generated");
        // Close the plugin
        // figma.closePlugin()
    })()
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
function generateHandoffForNode(
    selectedElement: FrameNode,
    isLast: Boolean,
    handoffPage: PageNode
) {
    // If the current node has not already been named for handoff purposes
    if (!selectedElement.name.startsWith('CnCd-') && selectedElement as SceneNode) {
        // Generate a new frame containing this node and its child nodes
        let frame = createHandoffFrame(selectedElement)
        // Set the background color of the frame
        frame.fills = [{type: 'SOLID', color: Constants.backgroundColor}]
        // Try to find an existing handoff view with the same name as this node
        const oldHandOff = findOldNode(selectedElement, handoffPage, "Handoff");

        // If an existing handoff view was found and we are updating previous handoff views
        if (handoffConfig.updatePreviousHandoff && oldHandOff) {
            // Move the handoff view to the same position as the previous one, then remove the old one
            frame.x = oldHandOff.x
            frame.y = oldHandOff.y
            oldHandOff.remove()
        } else {
            // Otherwise, create a new name for this handoff view and adjust its position
            const space = Utils.findEmptySpace(handoffPage)
            frame.x = space.x + 50
            frame.y = space.y
        }

        // Set the name of the handoff view to a specific string with the node ID
        frame.name = getHandoffName(selectedElement.id, "Handoff")

        // Create link button
        let oldButton = findOldButton(selectedElement.id, "Handoff")
        if (oldButton as FrameNode) {
            LinkManager.updateHandoffButton(oldButton as FrameNode, frame)
        } else {
            let button = LinkManager.createHandoffButton(frame, selectedElement.id)
            let x = selectedElement.absoluteBoundingBox?.x ?? 0
            let y =selectedElement.height + 40 + (selectedElement.absoluteBoundingBox?.y ?? 0)
            button.x = x
            button.y = y
        }

        // Append handoff to handoff page
        handoffPage.appendChild(frame)

        // Scroll and zoom into the newly created handoff view if this is the last item in the render list
        if(isLast) {
            figma.currentPage = handoffPage; 
            figma.viewport.scrollAndZoomIntoView([frame]);
        }
    }
}
