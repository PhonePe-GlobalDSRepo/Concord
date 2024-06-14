import { applyAutoLayout, applyHorizontalAutolayout, applyVerticalAutolayout } from "./layouting"
import * as NodeCreator from "./node_manager"
import * as Constants from "./constants"
import * as Utils from "./utils"
import * as LintManager from "./lint_manager";
import * as LinkManager from "./link_manager"
import * as HandOffManager from "./handoff_manager"
import { validFill } from "./rules/lint_fill";

let ELEMENT_MIN_WIDTH = 360;

/**
 * Configuration options for generating a lint report.
 */
interface ReportConfig {
    skipComponentChildrenTraversal: boolean;
    generateForAll: boolean;
    updatePreviousReport: boolean;
    reportOnNewPage: boolean;
}

// Initialising global static reportConfig and fetching token JSONs 
let reportConfig : ReportConfig;
export let semanticJSON : any;
export let componentJSON : any;
(async () => {
    semanticJSON = await LintManager.NetworkCall.fetchJSON("Semantic");
    componentJSON = await LintManager.NetworkCall.fetchJSON("Component");
})();

/**
 * Recursively traverses a parent node and its children to append
 * them to a provided frame and their respective lint reports.
 *
 * @param parent - The parent node to traverse.
 * @param frame - The frame to append the nodes to.
 * @param reportConfig - Configuration options for generating the lint report.
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
    if ((Utils.isComponent(parent) && reportConfig.skipComponentChildrenTraversal) && !Utils.isTopNode(parent) || !Utils.isOfTypeParentNode(parent) ) {
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

        // Check lint on child
        var generalErrors :string[] = [];
        var tokenErrors : string[] = [];
        var tokenWarnings : string[] = [];
        var lintIndicator = LintManager.lintCheck(child, tokenErrors, generalErrors, tokenWarnings, lintedData)
        
        let dataExists = (lintIndicator > -1 && lintIndicator != 100 )
        let invalidChild = (children.length == 1 && !validFill(child))

        // maxDepth to be used later
        // traverse till max depth if size data is required
        if (dataExists && !invalidChild) {
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
            childContainerFrame.resize(HandOffManager.getOptimalSize("WIDTH", child.width, maxWidth),
                                        HandOffManager.getOptimalSize("HEIGHT", child.height, maxWidth))
            childContainerFrame.resize(Math.max(child.width, 0.01), Math.max(child.height, 0.01))
            childContainerContainerFrame.resize(HandOffManager.getOptimalSize("WIDTH", child.width, maxWidth),
                                                HandOffManager.getOptimalSize("HEIGHT", child.height, maxWidth))
            
            const spacer = NodeCreator.getVSpacer(2)
            spacer.layoutAlign = "STRETCH"
            frame.appendChild(spacer)
            childName.layoutAlign = "STRETCH"
            frame.appendChild(childName)
            
            childFrame.appendChild(childContainerContainerFrame)

            //Add lint frame if needed
            if(lintIndicator > -1){
                    
                // Lint Result Display
                const lintFrame = LintManager.getLintResultFrame(lintIndicator);
                lintFrame.name = "Lint details"
                childName.appendChild(lintFrame)
                lintFrame.layoutSizingHorizontal = "FIXED"
                lintFrame.minWidth = 100
                lintFrame.maxWidth = 200

                let tokenErrorFrame
                // Token Error Handling
                if (tokenErrors.length > 0) {
                    let modifiedLintErrors: [string, string][] = []
                    modifiedLintErrors = tokenErrors.map(error => [error, 'missing'])
                    tokenErrorFrame = NodeCreator.getDataDetailsFrame("Missing Tokens", modifiedLintErrors, { r: 0.46, g: 0, b: 0 });
                    childFrame.appendChild(tokenErrorFrame)
                } 

                // Token Warning Handling
                if(tokenWarnings.length > 0){
                    let modifiedLintWarnings: [string, string][] = []
                    modifiedLintWarnings = tokenWarnings.map(warning => [warning, 'missing'])

                    // If tokenError Frame already exists add to it, else create it for warnings
                    if (tokenErrorFrame) {
                        NodeCreator.appendToDataDetailsFrame(tokenErrorFrame, modifiedLintWarnings, { r: 0.88, g: 0.52, b: 0 });  
                    } else {
                        tokenErrorFrame = NodeCreator.getDataDetailsFrame("Missing Tokens", modifiedLintWarnings, { r: 0.88, g: 0.52, b: 0 });
                        childFrame.appendChild(tokenErrorFrame)
                    }              
                }

                // General Error Handling
                if (generalErrors.length > 0) {
                    const errorFrame = LintManager.getLintErrorFrame(generalErrors);
                    errorFrame.name = "Lint Errors"
                    errorFrame.minWidth = 200
                    errorFrame.maxWidth = 1000
                    childFrame.appendChild(errorFrame)
                }

            }
            
            newParentConatinerNdoe = childContainerFrame
            // Append the child frame to the specified parent frame
            frame.appendChild(childFrame)
            // Apply layout properties to the child frame
            HandOffManager.applyLayoutOnHandoff(
                childFrame, 
                HandOffManager.LayoutOptions.LayoutMode.HORIZONTAL, 
                HandOffManager.LayoutOptions.LayoutAlign.STRETCH,
                HandOffManager.LayoutOptions.counterAxisSizingMode.AUTO , 
                HandOffManager.LayoutOptions.CounterAxisAlignItems.MIN, 
                padding / 2, 
                HandOffManager.LayoutOptions.primaryAxisSizingMode.FIXED
            )
        } else {
            newParentConatinerNdoe = parentContainerNode;
        }
        
        // Recursively call the function on the child node
        getChildrenAndAppend(child as SceneNode, newParentConatinerNdoe, frame, maxWidth, lintedData, depth + 1);        
    });
}

/**
 * Creates a new frame for a given node, including the node's name, copied node (if selected), and a.
 * @param element - The node for which a new frame is to be created.
 * @param reportConfig - Configuration options for generating the lint report.
 * @returns A new frame containing the node's name, copied node (if selected), and child nodes with tokens.
 */
function createReportFrame(element: SceneNode): { frame: FrameNode, returnPercentage: string }  {

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
    HandOffManager.applyLayoutOnHandoff(
        titleFrame, 
        HandOffManager.LayoutOptions.LayoutMode.HORIZONTAL, 
        HandOffManager.LayoutOptions.LayoutAlign.STRETCH,
        HandOffManager.LayoutOptions.counterAxisSizingMode.AUTO , 
        HandOffManager.LayoutOptions.CounterAxisAlignItems.CENTER, 
        Constants.padding1, 
        HandOffManager.LayoutOptions.primaryAxisSizingMode.FIXED
    )

    titleFrame.appendChild(titleNode)
    let sourceButton = LinkManager.createBackToSourceButton(element)
    titleFrame.appendChild(sourceButton)

    frame.appendChild(titleFrame)

    // Append the spacer to the new frame
    const spacer = NodeCreator.getVSpacer(2);
    spacer.layoutAlign = "STRETCH"
    frame.appendChild(spacer)

    // If showSelected is true, append a copy of the selected node to the new frame
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
    elementContainerContainerFrame.minWidth = ELEMENT_MIN_WIDTH;
    applyAutoLayout(elementContainerFrame, 0, "HORIZONTAL")
    parentFrame.appendChild(elementContainerContainerFrame);

    frame.appendChild(parentFrame)

    // Add variables to calculate lint percentage
    const lintedData = { passedLint: 0, totalLint: 0 };

    // Recursively traverse the child nodes of the current node, creating frames for those with tokens
    getChildrenAndAppend(element, elementContainerFrame, frame, element.width, lintedData)

    let linkButton = LinkManager.createBackToSourceButton(element)
    frame.appendChild(linkButton)

    // Add the lint percentage information to the parent node's report frame
    let passedPercentage
    if(lintedData.totalLint > 0){
        passedPercentage = Utils.getRoundedDecimal(lintedData.passedLint*100/lintedData.totalLint);
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
    const returnPercentage = passedPercentage? String(passedPercentage) : "Nan"
    return {frame, returnPercentage};
}

/**
 * Generates a report view for the selected or all top-level frames on the current page.
 * @param reportConfig - Configuration options for generating the lint report.
 * @returns None.
 */
export function generateReport(localReport: ReportConfig) {
    (async () => {

        // Assign the passed configuration to global variable
        reportConfig = localReport;

        // Load the required fonts
        await figma.loadFontAsync({ family: "Inter" , style: "Regular"})
        await figma.loadFontAsync({ family: "Inter" , style: "Bold"})
        
        // Initialize the render list
        let reportRenderList: readonly SceneNode[] = [];

        // Determine which frames to generate report views for
        if (reportConfig.generateForAll) {
            // Generate report views for all top-level frames on the page
            reportRenderList = HandOffManager.filterTopLevelFrames(figma.currentPage.children)
        } else {
            // Generate report views for the selected frames
            reportRenderList = figma.currentPage.selection
        }

        // Notify the user if no elements are selected
        if (reportRenderList.length == 0) {
            figma.notify("Please select an element on the canvas.");
            return;
        }

        let reportPage: PageNode;
        // Check if a report page already exists
        if (reportConfig.reportOnNewPage){
            reportPage = figma.root.findChild(node => node.type === "PAGE" && node.name === `${figma.currentPage.name}-Concord`) as PageNode;

            // If report page doesn't exist, create a new one
            if (reportPage === null) {
                reportPage = figma.createPage();
                reportPage.name = `${figma.currentPage.name}-Concord`;
                reportPage.backgrounds = [{ type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.96 } }];
                const index = figma.root.children.indexOf(figma.currentPage);
                figma.root.insertChild(index + 1, reportPage);
            } else {
                reportPage = reportPage as PageNode;
            }

        } else {
            reportPage = figma.currentPage;
        }

        // Iterate over each selected or top-level frame and generate report
        reportRenderList.forEach((selectedElement, index) => {
            const isLast = index === reportRenderList.length - 1;
            ELEMENT_MIN_WIDTH = selectedElement.width
            let frameNode = selectedElement as FrameNode
            if (frameNode) {
                generateReportForNode(frameNode, isLast, reportPage);
            } else {
                figma.notify(`${selectedElement.name} is not a frame node`)
            }
        });

        // Notify the user that report views have been generated
        figma.notify("Lint Report Generated");
        // Close the plugin
        // figma.closePlugin()
    })()
}

/**
 * Generates lint report for a selected element.
 * 
 * @param selectedElement - The element to generate a lintreport for.
 * @param reportConfig - Configuration options for generating the lint report.
 * @param isLast - Whether or not the selected element is the last one being processed.
 * 
 * @returns None.
 */
function generateReportForNode(
    selectedElement: FrameNode,
    isLast: Boolean,
    reportPage: PageNode
) {
    // If the current node has not already been named for lint purposes
    if (!selectedElement.name.startsWith('CnCd-') && selectedElement as SceneNode) {
        // Generate a new frame containing this node and its child nodes
        let lintResult = createReportFrame(selectedElement)
        let frame = lintResult.frame
        // Set the background color of the frame
        frame.fills = [{type: 'SOLID', color: Constants.backgroundColor}]
        // Try to find an existing lint report view with the same name as this node
        const oldHandOff = HandOffManager.findOldNode(selectedElement, reportPage, "Report");

        // If an existing lint report view was found and we are updating previous report views
        if (reportConfig.updatePreviousReport && oldHandOff) {
            // Move the lint report view to the same position as the previous one, then remove the old one
            frame.x = oldHandOff.x
            frame.y = oldHandOff.y
            oldHandOff.remove()
        } else {
            // Otherwise, create a new name for this report view and adjust its position
            const space = Utils.findEmptySpace(reportPage)
            frame.x = space.x + 50
            frame.y = space.y
        }

        // Set the name of the lint report view to a specific string with the node ID
        frame.name = HandOffManager.getHandoffName(selectedElement.id, "Report")

        // Create link button
        let oldButton = HandOffManager.findOldButton(selectedElement.id, "Report")
        if (oldButton as FrameNode) {
            LinkManager.updateLintReportButton(oldButton as FrameNode, frame)
        } else {
            let button = LinkManager.createLintReportButton(frame, selectedElement.id, lintResult.returnPercentage)
            let x = selectedElement.absoluteBoundingBox?.x ?? 0
            let y =selectedElement.height + 100 + (selectedElement.absoluteBoundingBox?.y ?? 0)
            button.x = x
            button.y = y
        }

        // Append lint report to report page
        reportPage.appendChild(frame)

        // Scroll and zoom into the newly created lint report view if this is the last item in the render list
        if(isLast) {
            figma.currentPage = reportPage; 
            figma.viewport.scrollAndZoomIntoView([frame]);
        }
    }
}