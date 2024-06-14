/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/constants.ts":
/*!*****************************!*\
  !*** ./source/constants.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrimaryDataValues: () => (/* binding */ PrimaryDataValues),
/* harmony export */   SecondaryDataValues: () => (/* binding */ SecondaryDataValues),
/* harmony export */   backgroundColor: () => (/* binding */ backgroundColor),
/* harmony export */   bodyFontSize: () => (/* binding */ bodyFontSize),
/* harmony export */   darkBackgroundColor: () => (/* binding */ darkBackgroundColor),
/* harmony export */   green1: () => (/* binding */ green1),
/* harmony export */   padding1: () => (/* binding */ padding1),
/* harmony export */   padding2: () => (/* binding */ padding2),
/* harmony export */   padding3: () => (/* binding */ padding3),
/* harmony export */   separatorColor: () => (/* binding */ separatorColor),
/* harmony export */   title2FontSize: () => (/* binding */ title2FontSize),
/* harmony export */   title3FontSize: () => (/* binding */ title3FontSize),
/* harmony export */   titleFontSize: () => (/* binding */ titleFontSize),
/* harmony export */   white: () => (/* binding */ white)
/* harmony export */ });
const titleFontSize = 28;
const title2FontSize = 20;
const title3FontSize = 16;
const bodyFontSize = 12;
const backgroundColor = { r: 0.92, g: 0.92, b: 0.92 };
const darkBackgroundColor = { r: 0.86, g: 0.86, b: 0.86 };
const green1 = { r: 0.82, g: 0.92, b: 0.82 };
const padding1 = 24;
const padding2 = 12;
const padding3 = 4;
const separatorColor = { r: 0.84, g: 0.84, b: 0.84 };
const white = { r: 0.99, g: 0.99, b: 0.99 };
var PrimaryDataValues;
(function (PrimaryDataValues) {
    PrimaryDataValues[PrimaryDataValues["Width"] = 0] = "Width";
    PrimaryDataValues[PrimaryDataValues["Height"] = 1] = "Height";
    PrimaryDataValues[PrimaryDataValues["Radius"] = 2] = "Radius";
    PrimaryDataValues[PrimaryDataValues["Fill"] = 3] = "Fill";
})(PrimaryDataValues || (PrimaryDataValues = {}));
var SecondaryDataValues;
(function (SecondaryDataValues) {
    SecondaryDataValues[SecondaryDataValues["FontWeight"] = 0] = "FontWeight";
    SecondaryDataValues[SecondaryDataValues["FontSize"] = 1] = "FontSize";
    SecondaryDataValues[SecondaryDataValues["Opacity"] = 2] = "Opacity";
    SecondaryDataValues[SecondaryDataValues["BorderColor"] = 3] = "BorderColor";
    SecondaryDataValues[SecondaryDataValues["BorderWidth"] = 4] = "BorderWidth";
})(SecondaryDataValues || (SecondaryDataValues = {}));


/***/ }),

/***/ "./source/frame_generator.ts":
/*!***********************************!*\
  !*** ./source/frame_generator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyAutoLayoutHorizontal: () => (/* binding */ applyAutoLayoutHorizontal),
/* harmony export */   applyAutoLayoutVertical: () => (/* binding */ applyAutoLayoutVertical)
/* harmony export */ });
function applyAutoLayoutHorizontal(frame, padding, frameName) {
    frame.layoutMode = "HORIZONTAL"; // Set layout mode to VERTICAL or HORIZONTAL
    frame.name = frameName;
    frame.paddingTop = padding;
    frame.paddingRight = padding;
    frame.paddingBottom = padding;
    frame.paddingLeft = padding;
    frame.itemSpacing = padding / 4;
    frame.cornerRadius = padding / 8;
    frame.fills = [{ type: 'SOLID', color: { r: 0.92, g: 0.92, b: 0.92 } }];
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO"; // Set primary axis sizing mode to AUTO
}
function applyAutoLayoutVertical(frame, padding, frameName) {
    frame.layoutMode = "VERTICAL"; // Set layout mode to VERTICAL or HORIZONTAL
    frame.name = frameName;
    frame.paddingTop = padding;
    frame.paddingRight = padding;
    frame.paddingBottom = padding;
    frame.paddingLeft = padding;
    frame.itemSpacing = padding / 4;
    frame.cornerRadius = padding / 8;
    frame.fills = [{ type: 'SOLID', color: { r: 0.92, g: 0.92, b: 0.92 } }];
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO"; // Set primary axis sizing mode to AUTO
}


/***/ }),

/***/ "./source/handoff_manager.ts":
/*!***********************************!*\
  !*** ./source/handoff_manager.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutOptions: () => (/* binding */ LayoutOptions),
/* harmony export */   applyLayoutOnHandoff: () => (/* binding */ applyLayoutOnHandoff),
/* harmony export */   componentJSON: () => (/* binding */ componentJSON),
/* harmony export */   createChildContainer: () => (/* binding */ createChildContainer),
/* harmony export */   filterTopLevelFrames: () => (/* binding */ filterTopLevelFrames),
/* harmony export */   findOldButton: () => (/* binding */ findOldButton),
/* harmony export */   findOldNode: () => (/* binding */ findOldNode),
/* harmony export */   generateHandoff: () => (/* binding */ generateHandoff),
/* harmony export */   getHandoffName: () => (/* binding */ getHandoffName),
/* harmony export */   getOptimalSize: () => (/* binding */ getOptimalSize),
/* harmony export */   semanticJSON: () => (/* binding */ semanticJSON)
/* harmony export */ });
/* harmony import */ var _layouting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouting */ "./source/layouting.ts");
/* harmony import */ var _node_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_manager */ "./source/node_manager.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./source/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./source/utils.ts");
/* harmony import */ var _style_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style_manager */ "./source/style_manager.ts");
/* harmony import */ var _variables_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variables_manager */ "./source/variables_manager.ts");
/* harmony import */ var _lint_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lint_manager */ "./source/lint_manager.ts");
/* harmony import */ var _link_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link_manager */ "./source/link_manager.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let ELEMENT_MIN_WIDTH = 360;
// Initialising global static handOffConfig and fetching token JSONs 
let handoffConfig;
let semanticJSON;
let componentJSON;
(() => __awaiter(void 0, void 0, void 0, function* () {
    semanticJSON = yield _lint_manager__WEBPACK_IMPORTED_MODULE_6__.NetworkCall.fetchJSON("Semantic");
    componentJSON = yield _lint_manager__WEBPACK_IMPORTED_MODULE_6__.NetworkCall.fetchJSON("Component");
}))();
/** Initialising all Helper functions */
/**
 * Calculates the optimal size based on the given orientation and constraints.
 *
 * @param orientation - The orientation to consider for the size calculation ("WIDTH" or "HEIGHT").
 * @param value - The value to be adjusted.
 * @param maxWidth - The maximum allowed width, applicable when the orientation is "WIDTH".
 * @returns The optimal size, constrained by the orientation and the given limits.
 */
function getOptimalSize(orientation, value, maxWidth) {
    switch (orientation) {
        case "WIDTH":
            return Math.min(Math.max(0.01, value), maxWidth);
        case "HEIGHT":
            return Math.max(0.01, value);
    }
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
function getHandoffName(id, type) {
    // Return a string consisting of the prefix `CnCd` followed by the provided `id`
    return `Concord ${type}: ${id}`;
}
/**
 * Finds and returns an existing handoff view node with the same name as the provided node ID.
 * @param node - The node for which to find an existing handoff view node.
 * @returns The existing handoff view node, or undefined if no such node is found.
 */
function findOldNode(node, handoffPage, type) {
    // Get the name that an existing handoff / lint report handoff view would have for the provided node ID
    let handOff = getHandoffName(node.id, type);
    // Iterate over the children of the current page to find an existing handoff view with the same name
    for (let child of handoffPage.children) {
        // If an existing handoff view is found, return it
        if (child.name == handOff) {
            return child;
        }
    }
    // If no existing handoff view is found, return undefined
    return undefined;
}
/**
 * Searches for a button with a specific name in the current page's children.
 *
 * @param nodeId - The ID of the node to include in the button's name.
 * @param typeOfBtn - The type of the button to include in the button's name.
 * @returns The found SceneNode if a matching button is found, otherwise undefined.
 */
function findOldButton(nodeId, typeOfBtn) {
    const buttonName = `${typeOfBtn} button: ${nodeId}`;
    for (let child of figma.currentPage.children) {
        if (child.name == buttonName) {
            return child;
        }
    }
    return undefined;
}
var LayoutOptions;
(function (LayoutOptions) {
    let LayoutMode;
    (function (LayoutMode) {
        LayoutMode["NONE"] = "NONE";
        LayoutMode["HORIZONTAL"] = "HORIZONTAL";
        LayoutMode["VERTICAL"] = "VERTICAL";
    })(LayoutMode = LayoutOptions.LayoutMode || (LayoutOptions.LayoutMode = {}));
    let LayoutAlign;
    (function (LayoutAlign) {
        LayoutAlign["MIN"] = "MIN";
        LayoutAlign["CENTER"] = "CENTER";
        LayoutAlign["MAX"] = "MAX";
        LayoutAlign["STRETCH"] = "STRETCH";
        LayoutAlign["INHERIT"] = "INHERIT";
    })(LayoutAlign = LayoutOptions.LayoutAlign || (LayoutOptions.LayoutAlign = {}));
    let counterAxisSizingMode;
    (function (counterAxisSizingMode) {
        counterAxisSizingMode["FIXED"] = "FIXED";
        counterAxisSizingMode["AUTO"] = "AUTO";
    })(counterAxisSizingMode = LayoutOptions.counterAxisSizingMode || (LayoutOptions.counterAxisSizingMode = {}));
    let CounterAxisAlignItems;
    (function (CounterAxisAlignItems) {
        CounterAxisAlignItems["MIN"] = "MIN";
        CounterAxisAlignItems["MAX"] = "MAX";
        CounterAxisAlignItems["CENTER"] = "CENTER";
        CounterAxisAlignItems["BASELINE"] = "BASELINE";
    })(CounterAxisAlignItems = LayoutOptions.CounterAxisAlignItems || (LayoutOptions.CounterAxisAlignItems = {}));
    let primaryAxisSizingMode;
    (function (primaryAxisSizingMode) {
        primaryAxisSizingMode["FIXED"] = "FIXED";
        primaryAxisSizingMode["AUTO"] = "AUTO";
    })(primaryAxisSizingMode = LayoutOptions.primaryAxisSizingMode || (LayoutOptions.primaryAxisSizingMode = {}));
})(LayoutOptions || (LayoutOptions = {}));
function applyLayoutOnHandoff(node, layoutMode, layoutAlign, counterAxisSizingMode, counterAxisAlignItems, padding, primaryAxisSizingMode) {
    node.layoutMode = layoutMode;
    node.layoutAlign = layoutAlign;
    node.counterAxisSizingMode = counterAxisSizingMode;
    node.counterAxisAlignItems = counterAxisAlignItems;
    node.itemSpacing = padding;
    node.primaryAxisSizingMode = primaryAxisSizingMode;
}
function createChildContainer(node, maxWidth) {
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
function getChildrenAndAppend(parent, parentContainerNode, frame, maxWidth, lintedData, depth = 0) {
    // If the parent node is a component and the flag is set to skip its children traversal and is not the top node of selected frame or if it is not compatible with the current node type
    if ((_utils__WEBPACK_IMPORTED_MODULE_3__.isComponent(parent) && handoffConfig.skipComponentChildrenTraversal) && !_utils__WEBPACK_IMPORTED_MODULE_3__.isTopNode(parent) || !_utils__WEBPACK_IMPORTED_MODULE_3__.isOfTypeParentNode(parent)) {
        return;
    }
    // Cast the node as ParentNode and get its children
    const comp = parent;
    const children = comp.children;
    const padding = 20;
    let newParentConatinerNdoe = parentContainerNode;
    // For each child in the parent node
    children.forEach((child) => {
        if (!child.visible) {
            return;
        }
        // Check if the child node contains tokens
        let tokens = _utils__WEBPACK_IMPORTED_MODULE_3__.getTokensOnNode(child);
        // Check if the child node contains variant properties
        let variantProperties = (child.variantProperties !== null) ? child.variantProperties : undefined;
        // Check lint on child
        var generalErrors = [];
        var tokenErrors = [];
        var tokenWarnings = [];
        var lintIndicator = _lint_manager__WEBPACK_IMPORTED_MODULE_6__.lintCheck(child, tokenErrors, generalErrors, tokenWarnings, lintedData);
        let shouldShowStyles = handoffConfig.showStyles;
        if (shouldShowStyles) {
            shouldShowStyles = shouldShowStyles && _style_manager__WEBPACK_IMPORTED_MODULE_4__.isStylePresent(child);
        }
        let shouldShowVariables = handoffConfig.showVariables;
        if (shouldShowVariables) {
            shouldShowVariables = shouldShowVariables && _variables_manager__WEBPACK_IMPORTED_MODULE_5__.isVariablePresent(child);
        }
        let dataExists = (handoffConfig.showTokens && tokens.length > 0)
            || shouldShowStyles
            || shouldShowVariables
            // || (handoffConfig.showLintData && lintIndicator > -1)
            || (variantProperties !== undefined);
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
            let childName = _node_manager__WEBPACK_IMPORTED_MODULE_1__.createChildTitleNode(child);
            let linkNode = _link_manager__WEBPACK_IMPORTED_MODULE_7__.createParentButton(parentContainerNode);
            childName.appendChild(linkNode);
            let childClone = child.clone();
            const childContainerFrame = figma.createFrame();
            childContainerFrame.name = "Child Container";
            const childContainerContainerFrame = figma.createFrame();
            childContainerContainerFrame.name = "Child Wrapper";
            (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(childContainerContainerFrame, 0, "HORIZONTAL");
            childContainerContainerFrame.appendChild(childContainerFrame);
            childContainerFrame.appendChild(childClone);
            childContainerFrame.backgrounds = [];
            childContainerContainerFrame.backgrounds = [];
            childContainerContainerFrame.minWidth = ELEMENT_MIN_WIDTH;
            (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(childContainerFrame, 0, "HORIZONTAL");
            childContainerFrame.resize(getOptimalSize("WIDTH", child.width, maxWidth), getOptimalSize("HEIGHT", child.height, maxWidth));
            childContainerFrame.resize(Math.max(child.width, 0.01), Math.max(child.height, 0.01));
            childContainerContainerFrame.resize(getOptimalSize("WIDTH", child.width, maxWidth), getOptimalSize("HEIGHT", child.height, maxWidth));
            const spacer = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getVSpacer(2);
            spacer.layoutAlign = "STRETCH";
            frame.appendChild(spacer);
            childName.layoutAlign = "STRETCH";
            frame.appendChild(childName);
            childFrame.appendChild(childContainerContainerFrame);
            // Append the child node's token frame to the child frame
            let tokenFrame;
            if (handoffConfig.showTokens) {
                tokenFrame = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getDataDetailsFrame("Tokens", tokens);
                tokenFrame.name = "Token details";
                childFrame.appendChild(tokenFrame);
                tokenFrame.layoutSizingHorizontal = "FIXED";
                tokenFrame.minWidth = 200;
                tokenFrame.maxWidth = 1000;
            }
            //Add local styles node if needed
            if (handoffConfig.showStyles) {
                // if(handoffConfig.showStyles && StyleManager.isStylePresent(child)) {
                const styleFrame = _style_manager__WEBPACK_IMPORTED_MODULE_4__.getStyleFrame(child);
                styleFrame.name = "Style details";
                styleFrame.minWidth = 200;
                styleFrame.maxWidth = 1000;
                childFrame.appendChild(styleFrame);
            }
            //Add variables node if needed
            if (handoffConfig.showVariables) {
                // if(handoffConfig.showVariables && VariablesManager.isVariablePresent(child)) {
                const varsFrame = _variables_manager__WEBPACK_IMPORTED_MODULE_5__.getVariablesFrame(child);
                varsFrame.name = "Variable details";
                varsFrame.minWidth = 200;
                varsFrame.maxWidth = 1000;
                childFrame.appendChild(varsFrame);
            }
            //Add details frame if needed
            if (handoffConfig.showRawData) {
                const sizeFrame = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getSizeFrame(child);
                sizeFrame.name = "Raw data";
                sizeFrame.minWidth = 200;
                sizeFrame.maxWidth = 1000;
                childFrame.appendChild(sizeFrame);
            }
            //Add details frame if needed
            if (_utils__WEBPACK_IMPORTED_MODULE_3__.isComponent(child) && variantProperties !== undefined) {
                let propertiesList = Object.entries(variantProperties || {}).map(([key, value]) => [key, value]);
                const propertiesFrame = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getDataDetailsFrame("Component handoff", propertiesList);
                propertiesFrame.name = "properties details";
                childFrame.appendChild(propertiesFrame);
                propertiesFrame.layoutSizingHorizontal = "FIXED";
                propertiesFrame.minWidth = 200;
                propertiesFrame.maxWidth = 1000;
            }
            //Add lint frame if needed
            if (handoffConfig.showLintData) {
                if (lintIndicator > -1) {
                    // Lint Result Display
                    const lintFrame = _lint_manager__WEBPACK_IMPORTED_MODULE_6__.getLintResultFrame(lintIndicator);
                    lintFrame.name = "Lint details";
                    childName.appendChild(lintFrame);
                    lintFrame.layoutSizingHorizontal = "FIXED";
                    lintFrame.minWidth = 100;
                    lintFrame.maxWidth = 200;
                    // Token Error Handling
                    if (tokenErrors.length > 0 && handoffConfig.showTokens && tokenFrame) {
                        let modifiedLintErrors = [];
                        modifiedLintErrors = tokenErrors.map(error => [error, 'missing']);
                        _node_manager__WEBPACK_IMPORTED_MODULE_1__.appendToDataDetailsFrame(tokenFrame, modifiedLintErrors);
                    }
                    // Token Warning Handling
                    if (tokenFrame && tokenWarnings.length > 0) {
                        let modifiedLintWarnings = [];
                        modifiedLintWarnings = tokenWarnings.map(warning => [warning, 'missing']);
                        _node_manager__WEBPACK_IMPORTED_MODULE_1__.appendToDataDetailsFrame(tokenFrame, modifiedLintWarnings, { r: 0.53, g: 0.21, b: 0 });
                    }
                    // General Error Handling
                    if (generalErrors.length > 0 && handoffConfig.showTokens) {
                        const errorFrame = _lint_manager__WEBPACK_IMPORTED_MODULE_6__.getLintErrorFrame(generalErrors);
                        errorFrame.name = "Lint Errors";
                        errorFrame.minWidth = 200;
                        errorFrame.maxWidth = 1000;
                        childFrame.appendChild(errorFrame);
                    }
                }
            }
            newParentConatinerNdoe = childContainerFrame;
            // Append the child frame to the specified parent frame
            frame.appendChild(childFrame);
            // Apply layout properties to the child frame
            applyLayoutOnHandoff(childFrame, LayoutOptions.LayoutMode.HORIZONTAL, LayoutOptions.LayoutAlign.STRETCH, LayoutOptions.counterAxisSizingMode.AUTO, LayoutOptions.CounterAxisAlignItems.MIN, padding / 2, LayoutOptions.primaryAxisSizingMode.FIXED);
        }
        // Recursively call the function on the child node
        getChildrenAndAppend(child, newParentConatinerNdoe, frame, maxWidth, lintedData, depth + 1);
    });
}
/**
 * Creates a new frame for a given node, including the node's name, copied node (if selected), and any child nodes with tokens.
 * @param element - The node for which a new frame is to be created.
 * @param handoffConfig - Configuration options for generating the handoff.
 * @returns A new frame containing the node's name, copied node (if selected), and child nodes with tokens.
 */
function createHandoffFrame(element) {
    // Set the padding, create a new frame, and set its backgrounds
    const padding = 24;
    const frame = figma.createFrame();
    frame.name = "Hand off";
    frame.backgrounds = [];
    // Set alignment and font settings for the title text node
    // frame.counterAxisAlignItems = "CENTER"
    let fontName = { family: "Inter", style: "Bold" };
    // Create frame for title and append to new frame
    const titleNode = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getNewTextNode(element.name, undefined, fontName);
    titleNode.fontSize = _constants__WEBPACK_IMPORTED_MODULE_2__.titleFontSize;
    const titleFrame = figma.createFrame();
    titleFrame.backgrounds = [];
    applyLayoutOnHandoff(titleFrame, LayoutOptions.LayoutMode.HORIZONTAL, LayoutOptions.LayoutAlign.STRETCH, LayoutOptions.counterAxisSizingMode.AUTO, LayoutOptions.CounterAxisAlignItems.CENTER, _constants__WEBPACK_IMPORTED_MODULE_2__.padding1, LayoutOptions.primaryAxisSizingMode.FIXED);
    titleFrame.appendChild(titleNode);
    let sourceButton = _link_manager__WEBPACK_IMPORTED_MODULE_7__.createBackToSourceButton(element);
    titleFrame.appendChild(sourceButton);
    frame.appendChild(titleFrame);
    // Append the spacer to the new frame
    const spacer = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getVSpacer(2);
    spacer.layoutAlign = "STRETCH";
    frame.appendChild(spacer);
    let parentFrame = figma.createFrame();
    parentFrame.name = "Parent details";
    parentFrame.backgrounds = [];
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(parentFrame, padding, "HORIZONTAL");
    const copiedNode = element.clone();
    const elementContainerFrame = figma.createFrame();
    elementContainerFrame.name = "Parent Container";
    const elementContainerContainerFrame = figma.createFrame();
    elementContainerContainerFrame.name = "Parent Wrapper";
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(elementContainerContainerFrame, 0, "HORIZONTAL");
    elementContainerContainerFrame.appendChild(elementContainerFrame);
    elementContainerFrame.appendChild(copiedNode);
    elementContainerFrame.backgrounds = [];
    elementContainerContainerFrame.backgrounds = [];
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(elementContainerFrame, 0, "HORIZONTAL");
    elementContainerContainerFrame.minWidth = ELEMENT_MIN_WIDTH;
    parentFrame.appendChild(elementContainerContainerFrame);
    // If the current node has tokens, create a new frame to display them
    const parentTokens = _utils__WEBPACK_IMPORTED_MODULE_3__.getTokensOnNode(element);
    if (handoffConfig.showTokens && parentTokens.length != 0) {
        const tokenFrame = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getDataDetailsFrame("Tokens", parentTokens);
        tokenFrame.name = "Token details";
        parentFrame.appendChild(tokenFrame);
        tokenFrame.layoutSizingHorizontal = "FIXED";
        tokenFrame.minWidth = 400;
        tokenFrame.maxWidth = 1000;
    }
    //Add local styles node if needed
    if (handoffConfig.showStyles && _style_manager__WEBPACK_IMPORTED_MODULE_4__.isStylePresent(element)) {
        const styleFrame = _style_manager__WEBPACK_IMPORTED_MODULE_4__.getStyleFrame(element);
        parentFrame.appendChild(styleFrame);
    }
    //Add variables node if needed
    if (handoffConfig.showVariables && _variables_manager__WEBPACK_IMPORTED_MODULE_5__.isVariablePresent(element)) {
        const varsFrame = _variables_manager__WEBPACK_IMPORTED_MODULE_5__.getVariablesFrame(element);
        parentFrame.appendChild(varsFrame);
    }
    //Add details frame
    if (handoffConfig.showRawData) {
        const sizeFrame = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getSizeFrame(element);
        parentFrame.appendChild(sizeFrame);
    }
    frame.appendChild(parentFrame);
    // Add variables to calculate lint percentage
    const lintedData = { passedLint: 0, totalLint: 0 };
    // Recursively traverse the child nodes of the current node, creating frames for those with tokens
    getChildrenAndAppend(element, elementContainerFrame, frame, element.width, lintedData);
    let linkButton = _link_manager__WEBPACK_IMPORTED_MODULE_7__.createBackToSourceButton(element);
    frame.appendChild(linkButton);
    // Add the lint percentage information to the parent node's handoff frame
    if (lintedData.totalLint > 0 && handoffConfig.showLintData) {
        const passedPercentage = _utils__WEBPACK_IMPORTED_MODULE_3__.getRoundedDecimal(lintedData.passedLint * 100 / lintedData.totalLint);
        const lintPercentageText = `${passedPercentage}% Passed`;
        const lintPercentageNode = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getNewTextNode(lintPercentageText);
        titleFrame.appendChild(lintPercentageNode);
        if (passedPercentage == 100) {
            const lintPercentageNode = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getNewTextNode(`READY FOR DEV`, { r: 0, g: 0.38, b: 0 });
            lintPercentageNode.layoutAlign = "MAX";
            titleFrame.appendChild(lintPercentageNode);
        }
    }
    // Apply auto-layout and spacing properties to the newly created frame
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(frame, padding, "VERTICAL");
    titleNode.layoutAlign = "STRETCH";
    frame.itemSpacing = padding;
    // Return the newly created frame
    return frame;
}
/**
 * Generates a handoff view for the selected or all top-level frames on the current page.
 * @param handoffConfig - Configuration options for generating the handoff.
 * @returns None.
 */
function generateHandoff(localHandffConfig) {
    (() => __awaiter(this, void 0, void 0, function* () {
        // Assign the passed configuration to global variable
        handoffConfig = localHandffConfig;
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
            return;
        }
        let handoffPage;
        // Check if a handoff page already exists
        if (handoffConfig.handOffOnNewPage) {
            handoffPage = figma.root.findChild(node => node.type === "PAGE" && node.name === `${figma.currentPage.name}-Concord`);
            // If handoff page doesn't exist, create a new one
            if (handoffPage === null) {
                handoffPage = figma.createPage();
                handoffPage.name = `${figma.currentPage.name}-Concord`;
                handoffPage.backgrounds = [{ type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.96 } }];
                const index = figma.root.children.indexOf(figma.currentPage);
                figma.root.insertChild(index + 1, handoffPage);
            }
            else {
                handoffPage = handoffPage;
            }
        }
        else {
            handoffPage = figma.currentPage;
        }
        // Iterate over each selected or top-level frame and generate handoff
        handOffRenderList.forEach((selectedElement, index) => {
            const isLast = index === handOffRenderList.length - 1;
            ELEMENT_MIN_WIDTH = selectedElement.width;
            let frameNode = selectedElement;
            if (frameNode) {
                generateHandoffForNode(frameNode, isLast, handoffPage);
            }
            else {
                figma.notify(`${selectedElement.name} is not a frame node`);
            }
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
function generateHandoffForNode(selectedElement, isLast, handoffPage) {
    var _a, _b, _c, _d;
    // If the current node has not already been named for handoff purposes
    if (!selectedElement.name.startsWith('CnCd-') && selectedElement) {
        // Generate a new frame containing this node and its child nodes
        let frame = createHandoffFrame(selectedElement);
        // Set the background color of the frame
        frame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_2__.backgroundColor }];
        // Try to find an existing handoff view with the same name as this node
        const oldHandOff = findOldNode(selectedElement, handoffPage, "Handoff");
        // If an existing handoff view was found and we are updating previous handoff views
        if (handoffConfig.updatePreviousHandoff && oldHandOff) {
            // Move the handoff view to the same position as the previous one, then remove the old one
            frame.x = oldHandOff.x;
            frame.y = oldHandOff.y;
            oldHandOff.remove();
        }
        else {
            // Otherwise, create a new name for this handoff view and adjust its position
            const space = _utils__WEBPACK_IMPORTED_MODULE_3__.findEmptySpace(handoffPage);
            frame.x = space.x + 50;
            frame.y = space.y;
        }
        // Set the name of the handoff view to a specific string with the node ID
        frame.name = getHandoffName(selectedElement.id, "Handoff");
        // Create link button
        let oldButton = findOldButton(selectedElement.id, "Handoff");
        if (oldButton) {
            _link_manager__WEBPACK_IMPORTED_MODULE_7__.updateHandoffButton(oldButton, frame);
        }
        else {
            let button = _link_manager__WEBPACK_IMPORTED_MODULE_7__.createHandoffButton(frame, selectedElement.id);
            let x = (_b = (_a = selectedElement.absoluteBoundingBox) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0;
            let y = selectedElement.height + 40 + ((_d = (_c = selectedElement.absoluteBoundingBox) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            button.x = x;
            button.y = y;
        }
        // Append handoff to handoff page
        handoffPage.appendChild(frame);
        // Scroll and zoom into the newly created handoff view if this is the last item in the render list
        if (isLast) {
            figma.currentPage = handoffPage;
            figma.viewport.scrollAndZoomIntoView([frame]);
        }
    }
}


/***/ }),

/***/ "./source/layouting.ts":
/*!*****************************!*\
  !*** ./source/layouting.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyAutoLayout: () => (/* binding */ applyAutoLayout),
/* harmony export */   applyHorizontalAutolayout: () => (/* binding */ applyHorizontalAutolayout),
/* harmony export */   applyVerticalAutolayout: () => (/* binding */ applyVerticalAutolayout)
/* harmony export */ });
/**
 * Applies auto layout to a given frame node with the specified padding and layout type.
 * @param frame - The frame node to apply auto layout to.
 * @param padding - The padding value for the auto layout.
 * @param layout - The layout type, either "VERTICAL" or "HORIZONTAL".
 * @returns None.
 */
function applyAutoLayout(frame, padding, layout) {
    // Set the layout mode, padding, item spacing, and counter axis sizing mode for the frame
    frame.layoutMode = layout; // Set layout mode to VERTICAL or HORIZONTAL
    frame.paddingTop = padding;
    frame.paddingRight = padding;
    frame.paddingBottom = padding;
    frame.paddingLeft = padding;
    frame.itemSpacing = padding / 2;
    frame.counterAxisSizingMode = "AUTO";
}
function applyHorizontalAutolayout(frame, primaryAxisSizingMode = "AUTO", counterAxisSizingMode = "AUTO", layoutWrap = "NO_WRAP", primaryAxisAlignItems = "CENTER", counterAxisAlignItems = "CENTER", counterAxisAlignContent = "AUTO", paddingTop = 10, paddingBottom = 10, paddingLeft = 10, paddingRight = 10, itemSpacing = 10, counterAxisSpacing = 10, itemReverseZIndex = false) {
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisSizingMode = primaryAxisSizingMode;
    frame.counterAxisSizingMode = counterAxisSizingMode;
    frame.layoutWrap = layoutWrap;
    frame.primaryAxisAlignItems = primaryAxisAlignItems;
    frame.counterAxisAlignItems = counterAxisAlignItems;
    frame.counterAxisAlignContent = counterAxisAlignContent;
    frame.paddingTop = paddingTop;
    frame.paddingBottom = paddingBottom;
    frame.paddingLeft = paddingLeft;
    frame.paddingRight = paddingRight;
    frame.itemSpacing = itemSpacing;
    frame.counterAxisSpacing = counterAxisSpacing;
    frame.itemReverseZIndex = itemReverseZIndex;
}
function applyVerticalAutolayout(frame, primaryAxisSizingMode = "AUTO", counterAxisSizingMode = "AUTO", layoutWrap = "NO_WRAP", primaryAxisAlignItems = "CENTER", counterAxisAlignItems = "CENTER", counterAxisAlignContent = "AUTO", paddingTop = 10, paddingBottom = 10, paddingLeft = 10, paddingRight = 10, itemSpacing = 10, counterAxisSpacing = 10, itemReverseZIndex = false) {
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = primaryAxisSizingMode;
    frame.counterAxisSizingMode = counterAxisSizingMode;
    frame.layoutWrap = layoutWrap;
    frame.primaryAxisAlignItems = primaryAxisAlignItems;
    frame.counterAxisAlignItems = counterAxisAlignItems;
    frame.counterAxisAlignContent = counterAxisAlignContent;
    frame.paddingTop = paddingTop;
    frame.paddingBottom = paddingBottom;
    frame.paddingLeft = paddingLeft;
    frame.paddingRight = paddingRight;
    frame.itemSpacing = itemSpacing;
    frame.counterAxisSpacing = counterAxisSpacing;
    frame.itemReverseZIndex = itemReverseZIndex;
}


/***/ }),

/***/ "./source/link_manager.ts":
/*!********************************!*\
  !*** ./source/link_manager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBackToSourceButton: () => (/* binding */ createBackToSourceButton),
/* harmony export */   createHandoffButton: () => (/* binding */ createHandoffButton),
/* harmony export */   createLintReportButton: () => (/* binding */ createLintReportButton),
/* harmony export */   createParentButton: () => (/* binding */ createParentButton),
/* harmony export */   updateHandoffButton: () => (/* binding */ updateHandoffButton),
/* harmony export */   updateLintReportButton: () => (/* binding */ updateLintReportButton)
/* harmony export */ });
/* harmony import */ var _node_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_manager */ "./source/node_manager.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./source/constants.ts");
/* harmony import */ var _layouting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouting */ "./source/layouting.ts");
/* harmony import */ var _frame_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frame_generator */ "./source/frame_generator.ts");




function createLinkButton(text, fontSize, destination) {
    let button = _node_manager__WEBPACK_IMPORTED_MODULE_0__.getNewTextNode(text);
    button.fontSize = fontSize;
    button.hyperlink = { type: "NODE", value: destination.id };
    let buttonFrame = figma.createFrame();
    buttonFrame.appendChild(button);
    return buttonFrame;
}
function createHandoffButton(handOffNode, sourceNodeId) {
    let frame = createLinkButton("Go to Handoff →", _constants__WEBPACK_IMPORTED_MODULE_1__.titleFontSize, handOffNode);
    frame.name = `Handoff button: ${sourceNodeId}`;
    (0,_layouting__WEBPACK_IMPORTED_MODULE_2__.applyAutoLayout)(frame, 2, "HORIZONTAL");
    frame.cornerRadius = 4;
    frame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_1__.darkBackgroundColor }];
    return frame;
}
function updateHandoffButton(oldButton, newHandOff) {
    let button = oldButton.children[0];
    button.hyperlink = { type: "NODE", value: newHandOff.id };
}
function createLintReportButton(reportNode, sourceNodeId, passedPercentage) {
    let frame = createLinkButton("Go to Lint Report →", _constants__WEBPACK_IMPORTED_MODULE_1__.titleFontSize, reportNode);
    const percentage = _node_manager__WEBPACK_IMPORTED_MODULE_0__.getNewTextNode(`${passedPercentage}%`, { r: 0.46, g: 0.38, b: 0 }, undefined, _constants__WEBPACK_IMPORTED_MODULE_1__.titleFontSize);
    frame.appendChild(percentage);
    (0,_frame_generator__WEBPACK_IMPORTED_MODULE_3__.applyAutoLayoutHorizontal)(frame, 10, "HORIZONTAL");
    frame.name = `Lint Report button: ${sourceNodeId}`;
    (0,_layouting__WEBPACK_IMPORTED_MODULE_2__.applyAutoLayout)(frame, 2, "HORIZONTAL");
    frame.cornerRadius = 4;
    frame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_1__.darkBackgroundColor }];
    return frame;
}
function updateLintReportButton(oldButton, newReport) {
    let button = oldButton.children[0];
    button.hyperlink = { type: "NODE", value: newReport.id };
}
function createBackToSourceButton(sourceNode) {
    let frame = createLinkButton("← Back to Souce", _constants__WEBPACK_IMPORTED_MODULE_1__.titleFontSize, sourceNode);
    frame.name = "Source button";
    (0,_layouting__WEBPACK_IMPORTED_MODULE_2__.applyAutoLayout)(frame, 2, "HORIZONTAL");
    frame.cornerRadius = 4;
    frame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_1__.darkBackgroundColor }];
    return frame;
}
function createParentButton(parentContainerNode) {
    let frame = createLinkButton("↑", _constants__WEBPACK_IMPORTED_MODULE_1__.title3FontSize, parentContainerNode);
    frame.name = "Parent button";
    (0,_layouting__WEBPACK_IMPORTED_MODULE_2__.applyAutoLayout)(frame, 0, "HORIZONTAL");
    frame.cornerRadius = 4;
    frame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_1__.darkBackgroundColor }];
    return frame;
}


/***/ }),

/***/ "./source/lintReport_manager.ts":
/*!**************************************!*\
  !*** ./source/lintReport_manager.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   componentJSON: () => (/* binding */ componentJSON),
/* harmony export */   generateReport: () => (/* binding */ generateReport),
/* harmony export */   semanticJSON: () => (/* binding */ semanticJSON)
/* harmony export */ });
/* harmony import */ var _layouting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouting */ "./source/layouting.ts");
/* harmony import */ var _node_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_manager */ "./source/node_manager.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./source/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./source/utils.ts");
/* harmony import */ var _lint_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lint_manager */ "./source/lint_manager.ts");
/* harmony import */ var _link_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link_manager */ "./source/link_manager.ts");
/* harmony import */ var _handoff_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handoff_manager */ "./source/handoff_manager.ts");
/* harmony import */ var _rules_lint_fill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/lint_fill */ "./source/rules/lint_fill.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let ELEMENT_MIN_WIDTH = 360;
// Initialising global static reportConfig and fetching token JSONs 
let reportConfig;
let semanticJSON;
let componentJSON;
(() => __awaiter(void 0, void 0, void 0, function* () {
    semanticJSON = yield _lint_manager__WEBPACK_IMPORTED_MODULE_4__.NetworkCall.fetchJSON("Semantic");
    componentJSON = yield _lint_manager__WEBPACK_IMPORTED_MODULE_4__.NetworkCall.fetchJSON("Component");
}))();
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
function getChildrenAndAppend(parent, parentContainerNode, frame, maxWidth, lintedData, depth = 0) {
    // If the parent node is a component and the flag is set to skip its children traversal and is not the top node of selected frame or if it is not compatible with the current node type
    if ((_utils__WEBPACK_IMPORTED_MODULE_3__.isComponent(parent) && reportConfig.skipComponentChildrenTraversal) && !_utils__WEBPACK_IMPORTED_MODULE_3__.isTopNode(parent) || !_utils__WEBPACK_IMPORTED_MODULE_3__.isOfTypeParentNode(parent)) {
        return;
    }
    // Cast the node as ParentNode and get its children
    const comp = parent;
    const children = comp.children;
    const padding = 20;
    let newParentConatinerNdoe = parentContainerNode;
    // For each child in the parent node
    children.forEach((child) => {
        if (!child.visible) {
            return;
        }
        // Check lint on child
        var generalErrors = [];
        var tokenErrors = [];
        var tokenWarnings = [];
        var lintIndicator = _lint_manager__WEBPACK_IMPORTED_MODULE_4__.lintCheck(child, tokenErrors, generalErrors, tokenWarnings, lintedData);
        let dataExists = (lintIndicator > -1 && lintIndicator != 100);
        let invalidChild = (children.length == 1 && !(0,_rules_lint_fill__WEBPACK_IMPORTED_MODULE_7__.validFill)(child));
        // maxDepth to be used later
        // traverse till max depth if size data is required
        if (dataExists && !invalidChild) {
            // Create a new frame to hold the child node's tokens and name
            const childFrame = figma.createFrame();
            childFrame.name = "Child Details";
            childFrame.backgrounds = [];
            // Create a new TextNode to hold the child node's name
            let childName = _node_manager__WEBPACK_IMPORTED_MODULE_1__.createChildTitleNode(child);
            let linkNode = _link_manager__WEBPACK_IMPORTED_MODULE_5__.createParentButton(parentContainerNode);
            childName.appendChild(linkNode);
            let childClone = child.clone();
            const childContainerFrame = figma.createFrame();
            childContainerFrame.name = "Child Container";
            const childContainerContainerFrame = figma.createFrame();
            childContainerContainerFrame.name = "Child Wrapper";
            (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(childContainerContainerFrame, 0, "HORIZONTAL");
            childContainerContainerFrame.appendChild(childContainerFrame);
            childContainerFrame.appendChild(childClone);
            childContainerFrame.backgrounds = [];
            childContainerContainerFrame.backgrounds = [];
            childContainerContainerFrame.minWidth = ELEMENT_MIN_WIDTH;
            (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(childContainerFrame, 0, "HORIZONTAL");
            childContainerFrame.resize(_handoff_manager__WEBPACK_IMPORTED_MODULE_6__.getOptimalSize("WIDTH", child.width, maxWidth), _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.getOptimalSize("HEIGHT", child.height, maxWidth));
            childContainerFrame.resize(Math.max(child.width, 0.01), Math.max(child.height, 0.01));
            childContainerContainerFrame.resize(_handoff_manager__WEBPACK_IMPORTED_MODULE_6__.getOptimalSize("WIDTH", child.width, maxWidth), _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.getOptimalSize("HEIGHT", child.height, maxWidth));
            const spacer = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getVSpacer(2);
            spacer.layoutAlign = "STRETCH";
            frame.appendChild(spacer);
            childName.layoutAlign = "STRETCH";
            frame.appendChild(childName);
            childFrame.appendChild(childContainerContainerFrame);
            //Add lint frame if needed
            if (lintIndicator > -1) {
                // Lint Result Display
                const lintFrame = _lint_manager__WEBPACK_IMPORTED_MODULE_4__.getLintResultFrame(lintIndicator);
                lintFrame.name = "Lint details";
                childName.appendChild(lintFrame);
                lintFrame.layoutSizingHorizontal = "FIXED";
                lintFrame.minWidth = 100;
                lintFrame.maxWidth = 200;
                let tokenErrorFrame;
                // Token Error Handling
                if (tokenErrors.length > 0) {
                    let modifiedLintErrors = [];
                    modifiedLintErrors = tokenErrors.map(error => [error, 'missing']);
                    tokenErrorFrame = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getDataDetailsFrame("Missing Tokens", modifiedLintErrors, { r: 0.46, g: 0, b: 0 });
                    childFrame.appendChild(tokenErrorFrame);
                }
                // Token Warning Handling
                if (tokenWarnings.length > 0) {
                    let modifiedLintWarnings = [];
                    modifiedLintWarnings = tokenWarnings.map(warning => [warning, 'missing']);
                    // If tokenError Frame already exists add to it, else create it for warnings
                    if (tokenErrorFrame) {
                        _node_manager__WEBPACK_IMPORTED_MODULE_1__.appendToDataDetailsFrame(tokenErrorFrame, modifiedLintWarnings, { r: 0.88, g: 0.52, b: 0 });
                    }
                    else {
                        tokenErrorFrame = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getDataDetailsFrame("Missing Tokens", modifiedLintWarnings, { r: 0.88, g: 0.52, b: 0 });
                        childFrame.appendChild(tokenErrorFrame);
                    }
                }
                // General Error Handling
                if (generalErrors.length > 0) {
                    const errorFrame = _lint_manager__WEBPACK_IMPORTED_MODULE_4__.getLintErrorFrame(generalErrors);
                    errorFrame.name = "Lint Errors";
                    errorFrame.minWidth = 200;
                    errorFrame.maxWidth = 1000;
                    childFrame.appendChild(errorFrame);
                }
            }
            newParentConatinerNdoe = childContainerFrame;
            // Append the child frame to the specified parent frame
            frame.appendChild(childFrame);
            // Apply layout properties to the child frame
            _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.applyLayoutOnHandoff(childFrame, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.LayoutMode.HORIZONTAL, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.LayoutAlign.STRETCH, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.counterAxisSizingMode.AUTO, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.CounterAxisAlignItems.MIN, padding / 2, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.primaryAxisSizingMode.FIXED);
        }
        else {
            newParentConatinerNdoe = parentContainerNode;
        }
        // Recursively call the function on the child node
        getChildrenAndAppend(child, newParentConatinerNdoe, frame, maxWidth, lintedData, depth + 1);
    });
}
/**
 * Creates a new frame for a given node, including the node's name, copied node (if selected), and a.
 * @param element - The node for which a new frame is to be created.
 * @param reportConfig - Configuration options for generating the lint report.
 * @returns A new frame containing the node's name, copied node (if selected), and child nodes with tokens.
 */
function createReportFrame(element) {
    // Set the padding, create a new frame, and set its backgrounds
    const padding = 24;
    const frame = figma.createFrame();
    frame.name = "Hand off";
    frame.backgrounds = [];
    // Set alignment and font settings for the title text node
    // frame.counterAxisAlignItems = "CENTER"
    let fontName = { family: "Inter", style: "Bold" };
    // Create frame for title and append to new frame
    const titleNode = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getNewTextNode(element.name, undefined, fontName);
    titleNode.fontSize = _constants__WEBPACK_IMPORTED_MODULE_2__.titleFontSize;
    const titleFrame = figma.createFrame();
    titleFrame.backgrounds = [];
    _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.applyLayoutOnHandoff(titleFrame, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.LayoutMode.HORIZONTAL, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.LayoutAlign.STRETCH, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.counterAxisSizingMode.AUTO, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.CounterAxisAlignItems.CENTER, _constants__WEBPACK_IMPORTED_MODULE_2__.padding1, _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.LayoutOptions.primaryAxisSizingMode.FIXED);
    titleFrame.appendChild(titleNode);
    let sourceButton = _link_manager__WEBPACK_IMPORTED_MODULE_5__.createBackToSourceButton(element);
    titleFrame.appendChild(sourceButton);
    frame.appendChild(titleFrame);
    // Append the spacer to the new frame
    const spacer = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getVSpacer(2);
    spacer.layoutAlign = "STRETCH";
    frame.appendChild(spacer);
    // If showSelected is true, append a copy of the selected node to the new frame
    let parentFrame = figma.createFrame();
    parentFrame.name = "Parent details";
    parentFrame.backgrounds = [];
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(parentFrame, padding, "HORIZONTAL");
    const copiedNode = element.clone();
    const elementContainerFrame = figma.createFrame();
    elementContainerFrame.name = "Parent Container";
    const elementContainerContainerFrame = figma.createFrame();
    elementContainerContainerFrame.name = "Parent Wrapper";
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(elementContainerContainerFrame, 0, "HORIZONTAL");
    elementContainerContainerFrame.appendChild(elementContainerFrame);
    elementContainerFrame.appendChild(copiedNode);
    elementContainerFrame.backgrounds = [];
    elementContainerContainerFrame.backgrounds = [];
    elementContainerContainerFrame.minWidth = ELEMENT_MIN_WIDTH;
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(elementContainerFrame, 0, "HORIZONTAL");
    parentFrame.appendChild(elementContainerContainerFrame);
    frame.appendChild(parentFrame);
    // Add variables to calculate lint percentage
    const lintedData = { passedLint: 0, totalLint: 0 };
    // Recursively traverse the child nodes of the current node, creating frames for those with tokens
    getChildrenAndAppend(element, elementContainerFrame, frame, element.width, lintedData);
    let linkButton = _link_manager__WEBPACK_IMPORTED_MODULE_5__.createBackToSourceButton(element);
    frame.appendChild(linkButton);
    // Add the lint percentage information to the parent node's report frame
    let passedPercentage;
    if (lintedData.totalLint > 0) {
        passedPercentage = _utils__WEBPACK_IMPORTED_MODULE_3__.getRoundedDecimal(lintedData.passedLint * 100 / lintedData.totalLint);
        const lintPercentageText = `${passedPercentage}% Passed`;
        const lintPercentageNode = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getNewTextNode(lintPercentageText);
        titleFrame.appendChild(lintPercentageNode);
        if (passedPercentage == 100) {
            const lintPercentageNode = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getNewTextNode(`READY FOR DEV`, { r: 0, g: 0.38, b: 0 });
            lintPercentageNode.layoutAlign = "MAX";
            titleFrame.appendChild(lintPercentageNode);
        }
    }
    // Apply auto-layout and spacing properties to the newly created frame
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(frame, padding, "VERTICAL");
    titleNode.layoutAlign = "STRETCH";
    frame.itemSpacing = padding;
    // Return the newly created frame
    const returnPercentage = passedPercentage ? String(passedPercentage) : "Nan";
    return { frame, returnPercentage };
}
/**
 * Generates a report view for the selected or all top-level frames on the current page.
 * @param reportConfig - Configuration options for generating the lint report.
 * @returns None.
 */
function generateReport(localReport) {
    (() => __awaiter(this, void 0, void 0, function* () {
        // Assign the passed configuration to global variable
        reportConfig = localReport;
        // Load the required fonts
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
        // Initialize the render list
        let reportRenderList = [];
        // Determine which frames to generate report views for
        if (reportConfig.generateForAll) {
            // Generate report views for all top-level frames on the page
            reportRenderList = _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.filterTopLevelFrames(figma.currentPage.children);
        }
        else {
            // Generate report views for the selected frames
            reportRenderList = figma.currentPage.selection;
        }
        // Notify the user if no elements are selected
        if (reportRenderList.length == 0) {
            figma.notify("Please select an element on the canvas.");
            return;
        }
        let reportPage;
        // Check if a report page already exists
        if (reportConfig.reportOnNewPage) {
            reportPage = figma.root.findChild(node => node.type === "PAGE" && node.name === `${figma.currentPage.name}-Concord`);
            // If report page doesn't exist, create a new one
            if (reportPage === null) {
                reportPage = figma.createPage();
                reportPage.name = `${figma.currentPage.name}-Concord`;
                reportPage.backgrounds = [{ type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.96 } }];
                const index = figma.root.children.indexOf(figma.currentPage);
                figma.root.insertChild(index + 1, reportPage);
            }
            else {
                reportPage = reportPage;
            }
        }
        else {
            reportPage = figma.currentPage;
        }
        // Iterate over each selected or top-level frame and generate report
        reportRenderList.forEach((selectedElement, index) => {
            const isLast = index === reportRenderList.length - 1;
            ELEMENT_MIN_WIDTH = selectedElement.width;
            let frameNode = selectedElement;
            if (frameNode) {
                generateReportForNode(frameNode, isLast, reportPage);
            }
            else {
                figma.notify(`${selectedElement.name} is not a frame node`);
            }
        });
        // Notify the user that report views have been generated
        figma.notify("Lint Report Generated");
        // Close the plugin
        // figma.closePlugin()
    }))();
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
function generateReportForNode(selectedElement, isLast, reportPage) {
    var _a, _b, _c, _d;
    // If the current node has not already been named for lint purposes
    if (!selectedElement.name.startsWith('CnCd-') && selectedElement) {
        // Generate a new frame containing this node and its child nodes
        let lintResult = createReportFrame(selectedElement);
        let frame = lintResult.frame;
        // Set the background color of the frame
        frame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_2__.backgroundColor }];
        // Try to find an existing lint report view with the same name as this node
        const oldHandOff = _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.findOldNode(selectedElement, reportPage, "Report");
        // If an existing lint report view was found and we are updating previous report views
        if (reportConfig.updatePreviousReport && oldHandOff) {
            // Move the lint report view to the same position as the previous one, then remove the old one
            frame.x = oldHandOff.x;
            frame.y = oldHandOff.y;
            oldHandOff.remove();
        }
        else {
            // Otherwise, create a new name for this report view and adjust its position
            const space = _utils__WEBPACK_IMPORTED_MODULE_3__.findEmptySpace(reportPage);
            frame.x = space.x + 50;
            frame.y = space.y;
        }
        // Set the name of the lint report view to a specific string with the node ID
        frame.name = _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.getHandoffName(selectedElement.id, "Report");
        // Create link button
        let oldButton = _handoff_manager__WEBPACK_IMPORTED_MODULE_6__.findOldButton(selectedElement.id, "Report");
        if (oldButton) {
            _link_manager__WEBPACK_IMPORTED_MODULE_5__.updateLintReportButton(oldButton, frame);
        }
        else {
            let button = _link_manager__WEBPACK_IMPORTED_MODULE_5__.createLintReportButton(frame, selectedElement.id, lintResult.returnPercentage);
            let x = (_b = (_a = selectedElement.absoluteBoundingBox) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0;
            let y = selectedElement.height + 100 + ((_d = (_c = selectedElement.absoluteBoundingBox) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            button.x = x;
            button.y = y;
        }
        // Append lint report to report page
        reportPage.appendChild(frame);
        // Scroll and zoom into the newly created lint report view if this is the last item in the render list
        if (isLast) {
            figma.currentPage = reportPage;
            figma.viewport.scrollAndZoomIntoView([frame]);
        }
    }
}


/***/ }),

/***/ "./source/lint_manager.ts":
/*!********************************!*\
  !*** ./source/lint_manager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkCall: () => (/* binding */ NetworkCall),
/* harmony export */   getLintErrorFrame: () => (/* binding */ getLintErrorFrame),
/* harmony export */   getLintResultFrame: () => (/* binding */ getLintResultFrame),
/* harmony export */   lintCheck: () => (/* binding */ lintCheck)
/* harmony export */ });
/* harmony import */ var _layouting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouting */ "./source/layouting.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./source/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./source/utils.ts");
/* harmony import */ var _handoff_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handoff_manager */ "./source/handoff_manager.ts");
/* harmony import */ var _lintReport_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lintReport_manager */ "./source/lintReport_manager.ts");
/* harmony import */ var _node_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_manager */ "./source/node_manager.ts");
/* harmony import */ var _rules_lint_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/lint_typography */ "./source/rules/lint_typography.ts");
/* harmony import */ var _rules_lint_fill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/lint_fill */ "./source/rules/lint_fill.ts");
/* harmony import */ var _rules_lint_sizing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/lint_sizing */ "./source/rules/lint_sizing.ts");
/* harmony import */ var _rules_lint_cornerRadius__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/lint_cornerRadius */ "./source/rules/lint_cornerRadius.ts");
/* harmony import */ var _rules_lint_padding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/lint_padding */ "./source/rules/lint_padding.ts");
/* harmony import */ var _rules_lint_borderWidth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/lint_borderWidth */ "./source/rules/lint_borderWidth.ts");
/* harmony import */ var _rules_lint_detach__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/lint_detach */ "./source/rules/lint_detach.ts");
/* harmony import */ var _rules_lint_itemSpacing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/lint_itemSpacing */ "./source/rules/lint_itemSpacing.ts");
/* harmony import */ var _rules_lint_boxShadow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/lint_boxShadow */ "./source/rules/lint_boxShadow.ts");
/* harmony import */ var _rules_lint_borderColor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/lint_borderColor */ "./source/rules/lint_borderColor.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















// Initialising instances of token JSONs for lint
let semanticJSON;
let componentJSON;
/** Namespace for linting utilities */
var LintUtilities;
(function (LintUtilities) {
    /** List of Lintable Nodes */
    let LintNodes;
    (function (LintNodes) {
        LintNodes["text"] = "TEXT";
        LintNodes["rectangle"] = "RECTANGLE";
        LintNodes["vector"] = "VECTOR";
        LintNodes["frame"] = "FRAME";
        LintNodes["instance"] = "INSTANCE";
        LintNodes["line"] = "LINE";
    })(LintNodes || (LintNodes = {}));
    /** List of Lint Rules */
    let LintRules;
    (function (LintRules) {
        LintRules[LintRules["Fill"] = 0] = "Fill";
        LintRules[LintRules["Typography"] = 1] = "Typography";
        LintRules[LintRules["Size"] = 2] = "Size";
        LintRules[LintRules["CornerRadius"] = 3] = "CornerRadius";
        LintRules[LintRules["Padding"] = 4] = "Padding";
        LintRules[LintRules["BorderWidth"] = 5] = "BorderWidth";
        LintRules[LintRules["Detach"] = 6] = "Detach";
        LintRules[LintRules["ItemSpacing"] = 7] = "ItemSpacing";
        LintRules[LintRules["BoxShadow"] = 8] = "BoxShadow";
        LintRules[LintRules["BorderColor"] = 9] = "BorderColor";
    })(LintRules || (LintRules = {}));
    /** Method to check if a node is lintable */
    function isLintableNode(type) {
        return Object.values(LintNodes).includes(type);
    }
    LintUtilities.isLintableNode = isLintableNode;
    /** Method to fetch tokens inside composition token (if applicable) */
    function fetchCompositionTokens(node, semanticJSON, componentJSON) {
        // Initialize an empty array to store sub tokens
        let sub_tokens = [];
        // Check if "composition" token exists
        const compositionExists = node.getSharedPluginDataKeys("tokens").includes("composition");
        if (compositionExists) {
            // Get the value of "composition" token
            let compToken = node.getSharedPluginData("tokens", "composition");
            // Remove surrounding quotes if present
            compToken = compToken.replace(/^"|"$/g, '');
            let value;
            // Split the token into path segments
            let tokenPath = compToken.split('.');
            if (tokenPath[0] === `semantic`) {
                value = semanticJSON;
            }
            else if (tokenPath[0] === `component`) {
                value = componentJSON;
            }
            // Traverse through the token path to find the corresponding value in semantic JSON
            tokenPath.forEach(key => {
                value = value[key];
            });
            // Push keys of the nested value object into sub_tokens array
            sub_tokens.push(...Object.keys(value.value));
        }
        return sub_tokens;
    }
    /** Method to fetch rules of a node */
    function getRules(node) {
        switch (node.type) {
            case LintNodes.text:
                return [LintRules.Fill, LintRules.Typography, LintRules.Padding];
            case LintNodes.vector:
                return [LintRules.Fill, LintRules.Padding, LintRules.CornerRadius, LintRules.BorderWidth];
            case LintNodes.rectangle:
                return [LintRules.Size, LintRules.CornerRadius, LintRules.Padding, LintRules.Fill];
            case LintNodes.frame:
                return [LintRules.Detach, LintRules.Size, LintRules.CornerRadius, LintRules.Padding, LintRules.BorderWidth, LintRules.ItemSpacing, LintRules.Fill, LintRules.BorderColor];
            case LintNodes.instance:
                return [LintRules.CornerRadius, LintRules.Size, LintRules.Padding, LintRules.BorderWidth, LintRules.ItemSpacing, LintRules.BoxShadow, LintRules.Fill, LintRules.BorderColor];
            case LintNodes.line:
                return [LintRules.Size, LintRules.BorderWidth, LintRules.BoxShadow, LintRules.Fill, LintRules.BorderColor];
            default:
                return [];
        }
    }
    LintUtilities.getRules = getRules;
    /** Method to execute linting rules */
    function executeRules(node, rules, lintCount) {
        const compTokens = fetchCompositionTokens(node, semanticJSON, componentJSON);
        var lintPassed = false;
        rules.forEach(rule => {
            switch (rule) {
                case LintRules.Fill:
                    if ((0,_rules_lint_fill__WEBPACK_IMPORTED_MODULE_7__.validFill)(node)) {
                        lintPassed = (0,_rules_lint_fill__WEBPACK_IMPORTED_MODULE_7__.lintFill)(node, lintCount, compTokens);
                    }
                    break;
                case LintRules.Typography:
                    lintPassed = (0,_rules_lint_typography__WEBPACK_IMPORTED_MODULE_6__.lintTypography)(node, lintCount);
                    break;
                case LintRules.Size:
                    if ((0,_rules_lint_sizing__WEBPACK_IMPORTED_MODULE_8__.isFixed)(node, 'horizontal') || (0,_rules_lint_sizing__WEBPACK_IMPORTED_MODULE_8__.isFixed)(node, 'vertical')) {
                        lintPassed = (0,_rules_lint_sizing__WEBPACK_IMPORTED_MODULE_8__.lintSize)(node, lintCount);
                    }
                    break;
                case LintRules.CornerRadius:
                    if ((0,_rules_lint_cornerRadius__WEBPACK_IMPORTED_MODULE_9__.nonZeroCornerRadius)(node)) {
                        lintPassed = (0,_rules_lint_cornerRadius__WEBPACK_IMPORTED_MODULE_9__.lintCornerRadius)(node, lintCount, compTokens);
                    }
                    break;
                case LintRules.Padding:
                    if ((0,_rules_lint_padding__WEBPACK_IMPORTED_MODULE_10__.nonZeroPadding)(node)) {
                        lintPassed = (0,_rules_lint_padding__WEBPACK_IMPORTED_MODULE_10__.lintPadding)(node, lintCount);
                    }
                    break;
                case LintRules.BorderWidth:
                    if ((0,_rules_lint_borderWidth__WEBPACK_IMPORTED_MODULE_11__.validBorderWidth)(node)) {
                        lintPassed = (0,_rules_lint_borderWidth__WEBPACK_IMPORTED_MODULE_11__.lintBorderWidth)(node, lintCount, compTokens);
                    }
                    break;
                case LintRules.Detach:
                    if ((0,_rules_lint_detach__WEBPACK_IMPORTED_MODULE_12__.isDetached)(node)) {
                        lintPassed = (0,_rules_lint_detach__WEBPACK_IMPORTED_MODULE_12__.lintDetach)(node, lintCount);
                    }
                    break;
                case LintRules.ItemSpacing:
                    if ((0,_rules_lint_itemSpacing__WEBPACK_IMPORTED_MODULE_13__.validItemSpacing)(node)) {
                        lintPassed = (0,_rules_lint_itemSpacing__WEBPACK_IMPORTED_MODULE_13__.lintItemSpacing)(node, lintCount);
                    }
                    break;
                case LintRules.BoxShadow:
                    if ((0,_rules_lint_boxShadow__WEBPACK_IMPORTED_MODULE_14__.validBoxShadow)(node)) {
                        lintPassed = (0,_rules_lint_boxShadow__WEBPACK_IMPORTED_MODULE_14__.lintBoxShadow)(node, lintCount, compTokens);
                    }
                    break;
                case LintRules.BorderColor:
                    if ((0,_rules_lint_borderColor__WEBPACK_IMPORTED_MODULE_15__.validBorderColor)(node)) {
                        lintPassed = (0,_rules_lint_borderColor__WEBPACK_IMPORTED_MODULE_15__.lintBorderColor)(node, lintCount, compTokens);
                    }
                    break;
            }
        });
        return lintPassed;
    }
    LintUtilities.executeRules = executeRules;
    /** Calculation of cumulative passed percentage of node as parent (includes calculation of success percentage of children) */
    function cumulativePercentage(cumulativeLintData, node) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_2__.isOfTypeParentNode(node)) {
            return;
        }
        const comp = node;
        const children = comp.children;
        // For each child in the parent node
        children.forEach((child) => {
            let selfValue = selfPercentage(child, undefined, undefined, undefined, cumulativeLintData);
            cumulativePercentage(cumulativeLintData, child);
        });
    }
    LintUtilities.cumulativePercentage = cumulativePercentage;
    /** Calculation of self pass percentage of node (does not include calculation of success percentage of children) */
    function selfPercentage(node, tokenErrors, generalErrors, tokenWarnings, lintedData) {
        if (isLintableNode(node.type)) {
            const nodeRules = getRules(node);
            const lintCount = {
                passed: 0,
                total: 0,
                errors: {
                    tokenErrors: [],
                    generalErrors: []
                },
                warnings: {
                    tokenWarnings: []
                }
            };
            const check = executeRules(node, nodeRules, lintCount);
            const percentage = _utils__WEBPACK_IMPORTED_MODULE_2__.getRoundedDecimal((lintCount.passed / lintCount.total * 100));
            lintedData.passedLint += lintCount.passed;
            lintedData.totalLint += lintCount.total;
            if (tokenWarnings) {
                tokenWarnings.push(...lintCount.warnings.tokenWarnings);
            }
            if (tokenErrors) {
                tokenErrors.push(...lintCount.errors.tokenErrors);
            }
            if (generalErrors) {
                generalErrors.push(...lintCount.errors.generalErrors);
                if (tokenErrors && tokenErrors.length > 0) {
                    generalErrors.push(`Missing tokens : ${tokenErrors.length}`);
                }
                if (tokenWarnings && tokenWarnings.length > 0) {
                    generalErrors.push(`Lint warnings : ${tokenWarnings.length}`);
                }
            }
            return percentage;
        }
        else {
            return -1;
        }
    }
    LintUtilities.selfPercentage = selfPercentage;
})(LintUtilities || (LintUtilities = {}));
/** Namespace for network call to fetch tokens JSON */
var NetworkCall;
(function (NetworkCall) {
    /** List of token files */
    let TokenFiles;
    (function (TokenFiles) {
        TokenFiles["Component"] = "Component";
        TokenFiles["Semantic"] = "Semantic";
    })(TokenFiles || (TokenFiles = {}));
    /** List of URLs of token files */
    let fileURL;
    (function (fileURL) {
        fileURL["Component"] = "https://api.github.com/repos/PhonePe-GlobalDSRepo/LEGO/contents/tokens/%F0%9F%94%92%20Component.json?ref=Production";
        fileURL["Semantic"] = "https://api.github.com/repos/PhonePe-GlobalDSRepo/LEGO/contents/tokens/Semantic.json?ref=Production";
    })(fileURL || (fileURL = {}));
    /** Method to fetch URLs of token files */
    function getUrl(tokenType) {
        switch (tokenType) {
            case TokenFiles.Component:
                return fileURL.Component;
            case TokenFiles.Semantic:
                return fileURL.Semantic;
            default:
                throw new Error(`Invalid URL type: ${tokenType}`);
        }
    }
    /** Method to decode content of response */
    function decodeBase64(input) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
        input = input.replace(new RegExp('[^' + chars + ']', 'g'), '');
        let buffer = 0;
        let bufferLength = 0;
        for (let i = 0; i < input.length; i++) {
            buffer = (buffer << 6) | chars.indexOf(input.charAt(i));
            bufferLength += 6;
            if (bufferLength >= 8) {
                output += String.fromCharCode((buffer >> (bufferLength - 8)) & 255);
                bufferLength -= 8;
            }
        }
        return output;
    }
    /** Method to decode content of response */
    function fetchJSON(tokenType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let url = getUrl(tokenType);
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch json: ${response.statusText}`);
                }
                const data = yield response.json();
                const content = data.content.replace(/\n/g, '');
                const decodedContent = decodeBase64(content);
                try {
                    // Trim any extra trailing characters that might affect JSON parsing
                    let trimmedContent = decodedContent;
                    while (trimmedContent.charAt(trimmedContent.length - 1) !== '}') {
                        trimmedContent = trimmedContent.slice(0, -1);
                    }
                    const jsonContent = JSON.parse(trimmedContent);
                    return jsonContent;
                }
                catch (error) {
                    if (error instanceof SyntaxError) {
                        console.error("Error parsing JSON: Unexpected data at the end. The content might not be properly formatted.");
                    }
                    else {
                        console.error("Error parsing JSON:", error);
                    }
                }
            }
            catch (error) {
                console.error("An error occurred:", error);
                throw error;
            }
        });
    }
    NetworkCall.fetchJSON = fetchJSON;
})(NetworkCall || (NetworkCall = {}));
/** Function to display lint data */
function displayLintData(data) {
    return (data == 100) ? `✅` : `${data}% Passed`;
}
/** Function to create lint frame */
function getLintResultFrame(data) {
    const lintFrame = figma.createFrame();
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(lintFrame, _constants__WEBPACK_IMPORTED_MODULE_1__.padding3, "HORIZONTAL");
    lintFrame.fills = [];
    const displayData = displayLintData(data);
    let fontName = { family: "Inter", style: "Regular" };
    let checkNode = _node_manager__WEBPACK_IMPORTED_MODULE_5__.getNewTextNode(displayData, { r: 0.46, g: 0, b: 0 }, fontName = fontName);
    lintFrame.appendChild(checkNode);
    return lintFrame;
}
/** Function to display general node errors */
function getLintErrorFrame(generalErrors) {
    const lintErrorFrame = figma.createFrame();
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(lintErrorFrame, _constants__WEBPACK_IMPORTED_MODULE_1__.padding2, "VERTICAL");
    lintErrorFrame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_1__.white }];
    lintErrorFrame.cornerRadius = 6;
    let fontName = { family: "Inter", style: "Regular" };
    let newNode = _node_manager__WEBPACK_IMPORTED_MODULE_5__.getNewTextNode(`Errors`);
    lintErrorFrame.appendChild(newNode);
    let line = _node_manager__WEBPACK_IMPORTED_MODULE_5__.getVSpacer(1, _constants__WEBPACK_IMPORTED_MODULE_1__.separatorColor);
    line.layoutAlign = "STRETCH";
    lintErrorFrame.appendChild(line);
    let datumNodes = [];
    generalErrors.forEach((error) => {
        const errorNode = _node_manager__WEBPACK_IMPORTED_MODULE_5__.getNewTextNode(error, { r: 0.36, g: 0, b: 0 }, fontName = fontName);
        lintErrorFrame.appendChild(errorNode);
    });
    return lintErrorFrame;
}
/**
 * This function performs lint checking on a given Figma node.
 * If the node is lintable, it calculates the percentage of passed lint checks.
 * If the node is not lintable, the function returns -1 to indicate that lint checking is not applicable.
 * @param node The Figma node to perform lint checking on.
 * @returns A percentage value representing the ratio of passed lint checks to total lint checks.
 * If lint checking is not applicable for the node, returns -1.
 */
function lintCheck(node, tokenErrors, generalErrors, tokenWarnings, lintedData) {
    // Assign the fetched JSON to global variables
    semanticJSON = _lintReport_manager__WEBPACK_IMPORTED_MODULE_4__.semanticJSON ? _lintReport_manager__WEBPACK_IMPORTED_MODULE_4__.semanticJSON : _handoff_manager__WEBPACK_IMPORTED_MODULE_3__.semanticJSON;
    componentJSON = _lintReport_manager__WEBPACK_IMPORTED_MODULE_4__.componentJSON ? _lintReport_manager__WEBPACK_IMPORTED_MODULE_4__.componentJSON : _handoff_manager__WEBPACK_IMPORTED_MODULE_3__.componentJSON;
    // Calculation of passed percentage of node as parent (includes success percentage of children)
    const cumulativeLintData = { passedLint: 0, totalLint: 0 };
    LintUtilities.cumulativePercentage(cumulativeLintData, node);
    const cumulativePassPercentage = cumulativeLintData.passedLint * 100 / cumulativeLintData.totalLint;
    // Calculation of self pass percentage of node (does not include success percentage of children)
    const selfPassPercentage = LintUtilities.selfPercentage(node, tokenErrors, generalErrors, tokenWarnings, lintedData);
    return selfPassPercentage;
}


/***/ }),

/***/ "./source/node_manager.ts":
/*!********************************!*\
  !*** ./source/node_manager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendToDataDetailsFrame: () => (/* binding */ appendToDataDetailsFrame),
/* harmony export */   createChildTitleNode: () => (/* binding */ createChildTitleNode),
/* harmony export */   createContainerWithFrames: () => (/* binding */ createContainerWithFrames),
/* harmony export */   getDataDetailsFrame: () => (/* binding */ getDataDetailsFrame),
/* harmony export */   getNewTextNode: () => (/* binding */ getNewTextNode),
/* harmony export */   getSeparator: () => (/* binding */ getSeparator),
/* harmony export */   getSizeDatum: () => (/* binding */ getSizeDatum),
/* harmony export */   getSizeFrame: () => (/* binding */ getSizeFrame),
/* harmony export */   getTokenFrame: () => (/* binding */ getTokenFrame),
/* harmony export */   getTokenNode: () => (/* binding */ getTokenNode),
/* harmony export */   getVSpacer: () => (/* binding */ getVSpacer)
/* harmony export */ });
/* harmony import */ var _layouting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouting */ "./source/layouting.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./source/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./source/utils.ts");



/**
 * Creates a new TextNode with the specified text, color and font style.
 * @param text - The text to be displayed by the TextNode.
 * @param color - The color of the TextNode's fill. The default value is { r: 0.1, g: 0.1, b: 0.1 }.
 * @param fontName - The font family and style of the TextNode. The default value is { family: "Inter", style: "Regular" }.
 * @returns A new TextNode with the specified text, color and font style.
 */
function getNewTextNode(text, color = { r: 0.1, g: 0.1, b: 0.1 }, fontName = { family: "Inter", style: "Regular" }, fontSize = _constants__WEBPACK_IMPORTED_MODULE_1__.bodyFontSize) {
    // Create a new TextNode
    const textNode = figma.createText();
    // Set the TextNode's text, fill color, font family and size
    textNode.characters = text;
    textNode.fills = [{ type: 'SOLID', color: color }];
    textNode.fontName = fontName;
    textNode.fontSize = fontSize;
    // Return the newly created TextNode
    return textNode;
}
/**
 * Creates a vertical spacer with the specified height.
 * @param height - The desired height of the spacer.
 * @returns A frame containing the vertical spacer, with a gray background color.
 */
function getVSpacer(height, color = { r: 0.8, g: 0.8, b: 0.8 }) {
    // Create a new frame to contain the spacer
    const spacer = figma.createFrame();
    // Set the fill of the spacer to a gray color
    spacer.fills = [{ type: 'SOLID', color: color }];
    // Set the size of the spacer to 1 pixel wide and the specified height
    spacer.resize(1, height);
    // Return the newly created frame containing the vertical spacer
    return spacer;
}
/**
 * Creates a new frame containing two TextNodes as its child elements.
 * @param node1 - The first TextNode to be added.
 * @param node2 - The second TextNode to be added.
 * @returns A frame containing the two TextNodes, laid out horizontally with 4px spacing.
 */
function createContainerWithFrames(node1, node2) {
    let container = figma.createFrame();
    container.name = "text info container";
    container.fills = [];
    // Compute the necessary size of the frame based on the size of the TextNodes
    // container.resize(node1.width + node2.width + 16, Math.max(node1.height, node2.height));
    figma.currentPage.appendChild(container);
    // Set the layout and alignment of the frame
    // container.layoutSizingHorizontal = "FILL"
    container.layoutMode = "HORIZONTAL";
    container.layoutSizingVertical = "HUG";
    // container.layoutSizingHorizontal = "FILL"
    container.primaryAxisAlignItems = "SPACE_BETWEEN";
    // container.layoutSizingHorizontal = "FIXED";
    // container.itemSpacing = 4;
    // Append the TextNodes as child elements of the frame
    container.appendChild(node1);
    container.appendChild(node2);
    // Position the TextNodes horizontally within the frame
    node1.x = 8;
    node2.x = node1.width + 24;
    // Return the newly created frame containing both TextNodes
    return container;
}
/**
 * Creates a token node with the key and value passed as arguments.
 * @param key - The key to be displayed as the label of the token.
 * @param value - The value to be displayed as the content of the token.
 * @returns A frame containing a token node, with the key and value laid out horizontally using a 4px spacing.
 */
function getTokenNode(key, value) {
    // Set the font family and style
    let fontName = { family: "Inter", style: "Regular" };
    // Create a frame containing two text nodes, one for the key and one for the value
    return createContainerWithFrames(getNewTextNode(key, undefined, fontName = fontName), getNewTextNode(value, { r: 0.46, g: 0.38, b: 0 }, fontName = fontName));
}
/**
 * Creates a frame containing one or more token nodes, each representing a key-value pair.
 * @param tokens - An array of key-value pairs to be displayed as tokens.
 * @param padding - The amount of padding to apply to the frame and the token nodes.
 * @returns A frame containing one or more token nodes, laid out vertically.
 */
function getTokenFrame(tokens, padding) {
    // Create a new empty frame
    const tokenFrame = figma.createFrame();
    // Remove the frame's background
    tokenFrame.backgrounds = [];
    // Apply vertical auto-layout with the specified padding
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(tokenFrame, padding, "VERTICAL");
    // Add a new token node to the frame for each key-value pair in the `tokens` array
    tokens.forEach((token) => {
        let newNode = getTokenNode(`${token[0]}:`, token[1]);
        tokenFrame.appendChild(newNode);
    });
    // Return the newly created frame containing the token nodes
    return tokenFrame;
}
/**
 * Creates a horizontal line separator, with a solid black stroke and a thickness of 1 pixel.
 * @returns A LineNode representing the horizontal line separator.
 */
function getSeparator() {
    // Create a new line
    const separator = figma.createLine();
    // Set the line's stroke color to black and its thickness to 1 pixel
    separator.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    separator.strokeWeight = 1;
    // Rotate the line 0 degrees and align it to the center of the parent container
    separator.rotation = 0;
    separator.constraints = { horizontal: "STRETCH", vertical: "CENTER" };
    // Return the newly created line representing the separator
    return separator;
}
function getFirstFillHexCode(node) {
    // Type assertion to tell TypeScript that node.fills is an array of Paint objects
    const fills = node.fills;
    if (!fills || fills.length === 0) {
        return null;
    }
    const fill = fills[0];
    if (fill == undefined) {
        return null;
    }
    if (fill.type != "SOLID") {
        return null;
    }
    // Type guard to ensure that fill has a color property
    if ('color' in fill && fill.color) {
        const { r, g, b } = fill.color;
        const hex = ((r * 255 << 16) | (g * 255 << 8) | b * 255).toString(16);
        return '#' + hex.padStart(6, '0');
    }
    return null;
}
// create a frame containing raw data information
function getSizeFrame(node) {
    let details = [];
    const allValues = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__.PrimaryDataValues)
        .filter(key => isNaN(Number(key)))
        .map(key => _constants__WEBPACK_IMPORTED_MODULE_1__.PrimaryDataValues[key]);
    allValues.forEach(value => {
        const sizeDatum = getSizeDatum(node, value);
        if (sizeDatum != null) {
            details.push(sizeDatum);
        }
    });
    return getDataDetailsFrame("Raw Data", details);
}
function getSizeDatum(node, dataValueType) {
    let primaryDataValue = dataValueType;
    let secondaryDataValue = dataValueType;
    if (primaryDataValue != null) {
        switch (primaryDataValue) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__.PrimaryDataValues.Width:
                const width = _utils__WEBPACK_IMPORTED_MODULE_2__.getRoundedDecimal(node.width);
                return ["Width", String(width)];
            case _constants__WEBPACK_IMPORTED_MODULE_1__.PrimaryDataValues.Height:
                const height = _utils__WEBPACK_IMPORTED_MODULE_2__.getRoundedDecimal(node.height);
                return ["Height", String(height)];
            case _constants__WEBPACK_IMPORTED_MODULE_1__.PrimaryDataValues.Radius:
                if ('cornerRadius' in node) {
                    return ["CornerRadius", `${String(node.cornerRadius)}`];
                }
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__.PrimaryDataValues.Fill:
                let color = getFirstFillHexCode(node);
                if (color != null) {
                    return ["Fill", `${String(color)}`];
                }
                break;
            default:
                break;
        }
    }
    if (secondaryDataValue != null) {
    }
    return null;
}
function appendToDataDetailsFrame(Node, data, color = { r: 0.46, g: 0, b: 0 }) {
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(Node, _constants__WEBPACK_IMPORTED_MODULE_1__.padding2, "VERTICAL");
    let fontName = { family: "Inter", style: "Regular" };
    let datumNodes = [];
    data.forEach((datum) => {
        const datumNode = createContainerWithFrames(getNewTextNode(datum[0], undefined, fontName = fontName), getNewTextNode(datum[1], color, fontName = fontName));
        Node.appendChild(datumNode);
        datumNodes.push(datumNode);
    });
    var maxWidth = 0;
    var maxWidth2 = 0;
    datumNodes.forEach((node) => {
        const text1Width = node.children[0].width;
        const text2Width = node.children[1].width;
        maxWidth = Math.max(text1Width, maxWidth);
        maxWidth2 = Math.max(text2Width, maxWidth2);
    });
    datumNodes.forEach((node) => {
        node.resize(Math.max(maxWidth + maxWidth2 + _constants__WEBPACK_IMPORTED_MODULE_1__.padding3, 200), node.height);
    });
}
function getDataDetailsFrame(title, data, color = { r: 0.46, g: 0.38, b: 0 }) {
    const detailsFrame = figma.createFrame();
    (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(detailsFrame, _constants__WEBPACK_IMPORTED_MODULE_1__.padding2, "VERTICAL");
    detailsFrame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_1__.white }];
    detailsFrame.cornerRadius = 6;
    let fontName = { family: "Inter", style: "Regular" };
    let newNode = getNewTextNode(title);
    detailsFrame.appendChild(newNode);
    let line = getVSpacer(1, _constants__WEBPACK_IMPORTED_MODULE_1__.separatorColor);
    line.layoutAlign = "STRETCH";
    detailsFrame.appendChild(line);
    let datumNodes = [];
    data.forEach((datum) => {
        const datumNode = createContainerWithFrames(getNewTextNode(datum[0], undefined, fontName = fontName), getNewTextNode(datum[1], color, fontName = fontName));
        detailsFrame.appendChild(datumNode);
        datumNodes.push(datumNode);
    });
    var maxWidth = 0;
    var maxWidth2 = 0;
    datumNodes.forEach((node) => {
        const text1Width = node.children[0].width;
        const text2Width = node.children[1].width;
        maxWidth = Math.max(text1Width, maxWidth);
        maxWidth2 = Math.max(text2Width, maxWidth2);
    });
    datumNodes.forEach((node) => {
        node.resize(Math.max(maxWidth + maxWidth2 + 4, 200), node.height);
    });
    return detailsFrame;
}
function createChildTitleNode(child) {
    let fontName = { family: "Inter", style: "Bold" };
    let childName = figma.createFrame();
    childName.name = "Child name";
    const childNameNode = getNewTextNode(child.name, { r: 0, g: 0, b: 0 }, fontName);
    childNameNode.fontSize = _constants__WEBPACK_IMPORTED_MODULE_1__.title2FontSize;
    const childTypeNode = getNewTextNode(`<${child.type}>`, { r: 0, g: 0, b: 0 });
    childTypeNode.fontSize = _constants__WEBPACK_IMPORTED_MODULE_1__.title3FontSize;
    childName.appendChild(childTypeNode);
    childName.appendChild(childNameNode);
    childName.backgrounds = [];
    childName.layoutMode = "HORIZONTAL";
    childName.layoutAlign = "STRETCH";
    childName.counterAxisSizingMode = "AUTO";
    childName.counterAxisAlignItems = "CENTER";
    childName.itemSpacing = _constants__WEBPACK_IMPORTED_MODULE_1__.padding1;
    childName.primaryAxisSizingMode = "FIXED";
    return childName;
}


/***/ }),

/***/ "./source/rules/lint_borderColor.ts":
/*!******************************************!*\
  !*** ./source/rules/lint_borderColor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lintBorderColor: () => (/* binding */ lintBorderColor),
/* harmony export */   validBorderColor: () => (/* binding */ validBorderColor)
/* harmony export */ });
/**
 * Enum defining border color lint rules.
 */
var LintRules_borderColor;
(function (LintRules_borderColor) {
    LintRules_borderColor["BorderColor"] = "borderColor";
})(LintRules_borderColor || (LintRules_borderColor = {}));
/**
 * Checks if the border stroke is present on node.
 */
function validBorderColor(node) {
    return Array.isArray(node.strokes) && node.strokes.some((stroke) => stroke.visible === true);
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
function lintBorderColor(node, lintCount, compTokens) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryBorderColorChecks = [LintRules_borderColor.BorderColor];
    // Check if composition token includes border color or token 'borderColor' is present
    if (compTokens.includes(LintRules_borderColor.BorderColor)) {
        lintCount.passed++;
        lintCount.total++;
    }
    else {
        lintCount.passed += primaryBorderColorChecks.filter(primaryBorderColorCheck => keys.includes(primaryBorderColorCheck)).length;
        lintCount.total += primaryBorderColorChecks.length;
        lintCount.errors.tokenErrors.push(...primaryBorderColorChecks.filter(primaryBorderColorCheck => !keys.includes(primaryBorderColorCheck)));
    }
    return lintCount.passed == lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_borderWidth.ts":
/*!******************************************!*\
  !*** ./source/rules/lint_borderWidth.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lintBorderWidth: () => (/* binding */ lintBorderWidth),
/* harmony export */   validBorderWidth: () => (/* binding */ validBorderWidth)
/* harmony export */ });
/**
 * Enum matching border width tokens to figma node properties
 */
var LintRules_borderWidth;
(function (LintRules_borderWidth) {
    LintRules_borderWidth["borderWidth"] = "strokeWeight";
    LintRules_borderWidth["borderWidthTop"] = "strokeTopWeight";
    LintRules_borderWidth["borderWidthBottom"] = "strokeBottomWeight";
    LintRules_borderWidth["borderWidthLeft"] = "strokeLeftWeight";
    LintRules_borderWidth["borderWidthRight"] = "strokeRightWeight";
})(LintRules_borderWidth || (LintRules_borderWidth = {}));
/**
 * Checks if the border stroke is present on node.
 */
function validBorderWidth(node) {
    return Array.isArray(node.strokes) && node.strokes.some((stroke) => stroke.visible === true);
}
/**
 * Checks if the border width of a node is a figma.mixed value.
 */
function mixedBorderWidth(node) {
    return typeof node.strokeWeight === 'symbol';
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
function lintBorderWidth(node, lintCount, compTokens) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryBorderWidthChecks = [LintRules_borderWidth.borderWidth];
    const secondaryBorderWidthChecks = [LintRules_borderWidth.borderWidthTop, LintRules_borderWidth.borderWidthBottom, LintRules_borderWidth.borderWidthLeft, LintRules_borderWidth.borderWidthRight];
    const hasNonZeroBorderWidth = validBorderWidth(node);
    const isMixedBorderWidth = mixedBorderWidth(node);
    // If border width is mixed, check border width of all sides individually or if tokens border width of sides are preseent in composition token. 
    // Else check if either token for border width or border width of all sides is present.
    if (isMixedBorderWidth) {
        secondaryBorderWidthChecks.forEach(widthprop => {
            const widthValue = node[widthprop];
            if (widthValue !== 0 && widthValue !== undefined) {
                // Check if keys of enum are present as token keys
                const secondaryWidthKey = Object.keys(LintRules_borderWidth).find((key) => LintRules_borderWidth[key] === widthprop);
                lintCount.total++;
                if (secondaryWidthKey && (keys.includes(secondaryWidthKey) || compTokens.includes(secondaryWidthKey))) {
                    lintCount.passed++;
                }
                else {
                    lintCount.errors.tokenErrors.push(secondaryWidthKey);
                }
            }
        });
    }
    else {
        const primaryWidthKey = Object.keys(LintRules_borderWidth).find((key) => LintRules_borderWidth[key] === 'strokeWeight');
        const secondaryWidthKeys = Object.keys(LintRules_borderWidth).filter((key) => LintRules_borderWidth[key] !== 'strokeWeight');
        if ((primaryWidthKey && (keys.includes(primaryWidthKey) || compTokens.includes(primaryWidthKey))) || (secondaryWidthKeys && (secondaryWidthKeys.every(secondaryWidthKey => keys.includes(secondaryWidthKey)) || secondaryWidthKeys.every(secondaryWidthKey => compTokens.includes(secondaryWidthKey))))) {
            lintCount.passed++;
        }
        else {
            if (primaryWidthKey) {
                lintCount.errors.tokenErrors.push(primaryWidthKey);
            }
        }
        lintCount.total++;
    }
    return lintCount.passed == lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_boxShadow.ts":
/*!****************************************!*\
  !*** ./source/rules/lint_boxShadow.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lintBoxShadow: () => (/* binding */ lintBoxShadow),
/* harmony export */   validBoxShadow: () => (/* binding */ validBoxShadow)
/* harmony export */ });
/**
 * Enum matching require token names to respective figma node properties
 */
var LintRules_boxShadow;
(function (LintRules_boxShadow) {
    LintRules_boxShadow["boxShadow"] = "DROP_SHADOW";
})(LintRules_boxShadow || (LintRules_boxShadow = {}));
/**
 * Checks if a node's effects have a 'DROP_SHADOW' effect.
 */
function validBoxShadow(node) {
    let hasDropShadow = false;
    if (node.effects) {
        // Iterate through the effects of the FrameNode
        node.effects.forEach(effect => {
            hasDropShadow = (effect.type === LintRules_boxShadow.boxShadow);
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
function lintBoxShadow(node, lintCount, compTokens) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const boxShadowKey = Object.keys(LintRules_boxShadow).find((key) => LintRules_boxShadow[key] === LintRules_boxShadow.boxShadow);
    if (boxShadowKey && (keys.includes(boxShadowKey) || compTokens.includes(boxShadowKey))) {
        lintCount.passed++;
    }
    else {
        lintCount.errors.tokenErrors.push(boxShadowKey);
    }
    lintCount.total++;
    return lintCount.passed == lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_cornerRadius.ts":
/*!*******************************************!*\
  !*** ./source/rules/lint_cornerRadius.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lintCornerRadius: () => (/* binding */ lintCornerRadius),
/* harmony export */   nonZeroCornerRadius: () => (/* binding */ nonZeroCornerRadius)
/* harmony export */ });
/**
 * Enum matching corner radius tokens to figma node properties
 */
var LintRules_cornerRadius;
(function (LintRules_cornerRadius) {
    LintRules_cornerRadius["borderRadius"] = "borderRadius";
    LintRules_cornerRadius["borderRadiusTopLeft"] = "topLeftRadius";
    LintRules_cornerRadius["borderRadiusTopRight"] = "topRightRadius";
    LintRules_cornerRadius["borderRadiusBottomLeft"] = "bottomLeftRadius";
    LintRules_cornerRadius["borderRadiusBottomRight"] = "bottomRightRadius";
})(LintRules_cornerRadius || (LintRules_cornerRadius = {}));
/**
 * Checks if the corner radius of a node is a figma.mixed value.
 */
function mixedCornerRadius(node) {
    return typeof node.cornerRadius === 'symbol';
}
/**
 * Checks if the corner radius of a node is non-zero.
 */
function nonZeroCornerRadius(node) {
    return node.cornerRadius !== 0 && node.cornerRadius !== undefined;
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
function lintCornerRadius(node, lintCount, compTokens) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryCornerRadiusChecks = [LintRules_cornerRadius.borderRadius];
    const secondaryCornerRadiusChecks = [LintRules_cornerRadius.borderRadiusTopLeft, LintRules_cornerRadius.borderRadiusTopRight, LintRules_cornerRadius.borderRadiusBottomLeft, LintRules_cornerRadius.borderRadiusBottomRight];
    const isNonZero = nonZeroCornerRadius(node);
    const isMixed = mixedCornerRadius(node);
    if (isMixed) {
        secondaryCornerRadiusChecks.forEach(radiusprop => {
            const radiusValue = node[radiusprop];
            if (radiusValue !== 0 && radiusValue !== undefined) {
                // Check if keys of enum are present as token keys
                const secondaryRadiusKey = Object.keys(LintRules_cornerRadius).find((key) => LintRules_cornerRadius[key] === radiusprop);
                lintCount.total++;
                if (secondaryRadiusKey && (keys.includes(secondaryRadiusKey) || compTokens.includes(secondaryRadiusKey))) {
                    lintCount.passed++;
                }
                else {
                    lintCount.errors.tokenErrors.push(secondaryRadiusKey);
                }
            }
        });
    }
    else {
        // Check if keys of enum are present as token keys
        const primaryRadiusKey = Object.keys(LintRules_cornerRadius).find((key) => LintRules_cornerRadius[key] === 'borderRadius');
        const secondaryRadiusKeys = Object.keys(LintRules_cornerRadius).filter((key) => LintRules_cornerRadius[key] !== 'borderRadius');
        if ((primaryRadiusKey && keys.includes(primaryRadiusKey) || (secondaryRadiusKeys && secondaryRadiusKeys.every(secondaryRadiusKey => keys.includes(secondaryRadiusKey))) || compTokens.includes(LintRules_cornerRadius.borderRadius))) {
            lintCount.passed++;
        }
        else {
            if (primaryRadiusKey) {
                lintCount.errors.tokenErrors.push(primaryRadiusKey);
            }
        }
        lintCount.total++;
    }
    return lintCount.passed == lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_detach.ts":
/*!*************************************!*\
  !*** ./source/rules/lint_detach.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDetached: () => (/* binding */ isDetached),
/* harmony export */   lintDetach: () => (/* binding */ lintDetach)
/* harmony export */ });
/**
 * Checks if a node's detach info is not null.
 */
function isDetached(node) {
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
function lintDetach(node, lintCount) {
    if (!isDetached(node)) {
        lintCount.passed++;
    }
    else {
        lintCount.errors.generalErrors.push(`${node.name}  is detached`);
    }
    lintCount.total++;
    return lintCount.passed == lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_fill.ts":
/*!***********************************!*\
  !*** ./source/rules/lint_fill.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lintFill: () => (/* binding */ lintFill),
/* harmony export */   validFill: () => (/* binding */ validFill)
/* harmony export */ });
/**
 * Enum defining fill lint rules.
 */
var LintRules_fill;
(function (LintRules_fill) {
    LintRules_fill["Fill"] = "fill";
})(LintRules_fill || (LintRules_fill = {}));
/**
 * Checks if a node's padding values are non-zero.
 */
function validFill(node) {
    return Array.isArray(node.fills) && node.fills.some((fill) => fill.type === 'SOLID' && fill.visible === true);
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
function lintFill(node, lintCount, compTokens) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryFillChecks = [LintRules_fill.Fill];
    // Check if either 'fill' in either composition token or applied tokens is present
    if (compTokens.includes(LintRules_fill.Fill)) {
        lintCount.passed++;
        lintCount.total++;
    }
    else {
        lintCount.passed += primaryFillChecks.filter(primaryFillCheck => keys.includes(primaryFillCheck)).length;
        lintCount.errors.tokenErrors.push(...primaryFillChecks.filter(primaryFillCheck => !keys.includes(primaryFillCheck)));
        lintCount.total += primaryFillChecks.length;
    }
    return lintCount.passed == lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_itemSpacing.ts":
/*!******************************************!*\
  !*** ./source/rules/lint_itemSpacing.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lintItemSpacing: () => (/* binding */ lintItemSpacing),
/* harmony export */   validItemSpacing: () => (/* binding */ validItemSpacing)
/* harmony export */ });
/**
 * Enum defining item spacing lint rules.
 */
var LintRules_itemSpacing;
(function (LintRules_itemSpacing) {
    LintRules_itemSpacing["ItemSpacing"] = "itemSpacing";
})(LintRules_itemSpacing || (LintRules_itemSpacing = {}));
/**
 * Checks if a node's item spacing values are non-zero.
 */
function validItemSpacing(node) {
    return node.itemSpacing !== undefined && node.itemSpacing > 0;
}
/**
 * Analyzes a given SceneNode to determine if it adheres to padding linting rules.
 * @param node - The SceneNode to be linted for padding.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if padding linting has passed for the given node, otherwise false.
 */
function lintItemSpacing(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryItemSpacingChecks = [LintRules_itemSpacing.ItemSpacing];
    // Check if item spacing token is present
    lintCount.passed += primaryItemSpacingChecks.filter(primaryItemSpacingCheck => keys.includes(primaryItemSpacingCheck)).length;
    lintCount.errors.tokenErrors.push(...primaryItemSpacingChecks.filter(primaryItemSpacingCheck => !keys.includes(primaryItemSpacingCheck)));
    lintCount.total += primaryItemSpacingChecks.length;
    return lintCount.passed === lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_padding.ts":
/*!**************************************!*\
  !*** ./source/rules/lint_padding.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lintPadding: () => (/* binding */ lintPadding),
/* harmony export */   nonZeroPadding: () => (/* binding */ nonZeroPadding)
/* harmony export */ });
/**
 * Enum defining padding lint rules.
 */
var LintRules_padding;
(function (LintRules_padding) {
    LintRules_padding["PaddingTop"] = "paddingTop";
    LintRules_padding["PaddingBottom"] = "paddingBottom";
    LintRules_padding["PaddingLeft"] = "paddingLeft";
    LintRules_padding["PaddingRight"] = "paddingRight";
})(LintRules_padding || (LintRules_padding = {}));
/**
 * Checks if a node's padding values are non-zero.
 */
function nonZeroPadding(node) {
    const { paddingTop, paddingBottom, paddingLeft, paddingRight } = node;
    return (paddingTop !== 0 && paddingTop !== undefined) ||
        (paddingBottom !== 0 && paddingBottom !== undefined) ||
        (paddingLeft !== 0 && paddingLeft !== undefined) ||
        (paddingRight !== 0 && paddingRight !== undefined);
}
/**
 * Analyzes a given SceneNode to determine if it adheres to padding linting rules.
 * @param node - The SceneNode to be linted for padding.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if padding linting has passed for the given node, otherwise false.
 */
function lintPadding(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    let primaryPaddingChecks = [LintRules_padding.PaddingTop, LintRules_padding.PaddingBottom, LintRules_padding.PaddingLeft, LintRules_padding.PaddingRight];
    // If spacing token is present, then don't check for individual padding on all sides.
    if (keys.includes('spacing')) {
        lintCount.passed++;
        lintCount.total++;
        primaryPaddingChecks = [];
    }
    else {
        // If spacing token is present, then don't check for individual padding on top and bottom.
        if (keys.includes('horizontalPadding')) {
            lintCount.passed++;
            lintCount.total++;
            primaryPaddingChecks = primaryPaddingChecks.filter(check => check !== LintRules_padding.PaddingTop && check !== LintRules_padding.PaddingBottom);
        }
        // If spacing token is present, then don't check for individual padding on left and right.
        if (keys.includes('verticalPadding')) {
            lintCount.passed++;
            lintCount.total++;
            primaryPaddingChecks = primaryPaddingChecks.filter(check => check !== LintRules_padding.PaddingLeft && check !== LintRules_padding.PaddingRight);
        }
    }
    // Check for padding on remaining sides.
    if (primaryPaddingChecks.length > 0) {
        primaryPaddingChecks.forEach(paddingProp => {
            const paddingValue = node[paddingProp];
            if (paddingValue !== 0) {
                lintCount.total++;
                if (keys.includes(paddingProp)) {
                    lintCount.passed++;
                }
                else {
                    lintCount.errors.tokenErrors.push(paddingProp);
                }
            }
        });
    }
    return lintCount.passed === lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_sizing.ts":
/*!*************************************!*\
  !*** ./source/rules/lint_sizing.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFixed: () => (/* binding */ isFixed),
/* harmony export */   lintSize: () => (/* binding */ lintSize)
/* harmony export */ });
/**
 * Enum defining sizing lint rules.
 */
var LintRules_size;
(function (LintRules_size) {
    LintRules_size["Sizing"] = "sizing";
    LintRules_size["Width"] = "width";
    LintRules_size["Height"] = "height";
    LintRules_size["MinWidth"] = "minWidth";
    LintRules_size["MinHeight"] = "minHeight";
    LintRules_size["MaxWidth"] = "maxWidth";
    LintRules_size["MaxHeight"] = "maxHeight";
})(LintRules_size || (LintRules_size = {}));
/**
 * Checks if a node's layout sizing is fixed in a specified direction.
 */
function isFixed(node, direction) {
    return direction == 'horizontal' ? node.layoutSizingHorizontal === 'FIXED' && node.width != 0 : node.layoutSizingVertical === 'FIXED' && node.height != 0;
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
function lintSize(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primarySizeChecks = [LintRules_size.Width, LintRules_size.Height];
    const secondarySizeChecks = [LintRules_size.MinWidth, LintRules_size.MinHeight, LintRules_size.MaxWidth, LintRules_size.MaxHeight];
    /** SIZING LINTING IS MODIFIED TO A WARNING */
    // Lint check for 'sizing', 'width' and 'height' tokens
    if (isFixed(node, 'horizontal') && isFixed(node, 'vertical')) {
        if (!keys.includes(LintRules_size.Sizing) && !primarySizeChecks.every(primarySizeCheck => keys.includes(primarySizeCheck))) {
            lintCount.warnings.tokenWarnings.push(...primarySizeChecks.filter(primarySizeCheck => !keys.includes(primarySizeCheck)));
        }
    }
    else {
        for (const primarySizeCheck of primarySizeChecks) {
            const fixed = isFixed(node, primarySizeCheck == 'width' ? 'horizontal' : 'vertical');
            if (fixed) {
                if (!keys.includes(primarySizeCheck)) {
                    lintCount.warnings.tokenWarnings.push(primarySizeCheck);
                }
            }
        }
    }
    // Lint check for 'minWidth', 'maxWidth' , 'minHeight' and 'maxHeight' tokens
    secondarySizeChecks.forEach(check => {
        const checkValue = node[check];
        if (checkValue !== null) {
            if (!keys.includes(check)) {
                lintCount.warnings.tokenWarnings.push(check);
            }
        }
    });
    return lintCount.passed === lintCount.total;
}


/***/ }),

/***/ "./source/rules/lint_typography.ts":
/*!*****************************************!*\
  !*** ./source/rules/lint_typography.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lintTypography: () => (/* binding */ lintTypography)
/* harmony export */ });
/**
 * Enum defining typography lint rules.
 */
var LintRules_typography;
(function (LintRules_typography) {
    LintRules_typography["Typography"] = "typography";
    LintRules_typography["FontFamilies"] = "fontFamilies";
    LintRules_typography["FontWeights"] = "fontWeights";
    LintRules_typography["FontSizes"] = "fontSizes";
})(LintRules_typography || (LintRules_typography = {}));
/**
 * Analyzes a given SceneNode to determine if it adheres to typography linting rules.
 * @param node - The SceneNode to be linted for typography.
 * @param lintCount - An object containing counts of passed and total linting checks.
 * @param lintCount.passed - The count of typography fill checks that have passed.
 * @param lintCount.total - The total count of linting checks.
 * @param lintCount.errors - Array for storing failed lint checks.
 * @returns True if typography linting has passed for the given node, otherwise false.
 */
function lintTypography(node, lintCount) {
    const keys = node.getSharedPluginDataKeys("tokens");
    const primaryTypoChecks = [LintRules_typography.Typography];
    const secondaryTypoChecks = [LintRules_typography.FontFamilies, LintRules_typography.FontSizes, LintRules_typography.FontWeights];
    // Either check for token 'typography' or ('fontFamilies' && 'fontWeights' && 'fontSizes') tokens
    if (primaryTypoChecks.some(primaryTypoCheck => keys.includes(primaryTypoCheck))) {
        lintCount.passed += primaryTypoChecks.filter(primaryTypoCheck => keys.includes(primaryTypoCheck)).length;
        lintCount.total += primaryTypoChecks.length;
        lintCount.errors.tokenErrors.push(...primaryTypoChecks.filter(primaryTypoCheck => !keys.includes(primaryTypoCheck)));
    }
    else if (secondaryTypoChecks.some(secondaryToken => keys.includes(secondaryToken))) {
        // Line height, letterSpacing , textCase linting (TBD)
        lintCount.passed += secondaryTypoChecks.filter(secondaryTypoCheck => keys.includes(secondaryTypoCheck)).length;
        lintCount.total += secondaryTypoChecks.length;
        lintCount.errors.tokenErrors.push(...secondaryTypoChecks.filter(secondaryTypoCheck => !keys.includes(secondaryTypoCheck)));
    }
    else {
        lintCount.total += primaryTypoChecks.length;
        lintCount.errors.tokenErrors.push(...primaryTypoChecks.filter(primaryTypoCheck => !keys.includes(primaryTypoCheck)));
    }
    return lintCount.passed === lintCount.total;
}


/***/ }),

/***/ "./source/style_manager.ts":
/*!*********************************!*\
  !*** ./source/style_manager.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyleFrame: () => (/* binding */ getStyleFrame),
/* harmony export */   isStylePresent: () => (/* binding */ isStylePresent)
/* harmony export */ });
/* harmony import */ var _node_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_manager */ "./source/node_manager.ts");

//check if style exists
function isStylePresent(node) {
    const fillStyleId = node.fillStyleId;
    const backgroundStyleId = node.backgroundStyleId;
    const strokeStyleId = node.strokeStyleId;
    const effectStyleId = node.effectStyleId;
    const gridStyleId = node.gridStyleId;
    return (fillStyleId != null && fillStyleId != figma.mixed && fillStyleId != "")
        || (backgroundStyleId != null && backgroundStyleId != "")
        || (strokeStyleId != null && strokeStyleId != "")
        || (effectStyleId != null && effectStyleId != "")
        || (gridStyleId != null && gridStyleId != "");
}
// create a frame containing raw data in information
function getStyleFrame(node) {
    var _a, _b, _c, _d, _e;
    let details = [];
    const fillStyleId = node.fillStyleId;
    if (fillStyleId) {
        const styleObject = figma.getStyleById(fillStyleId);
        details.push(["fill", (_a = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _a !== void 0 ? _a : ""]);
    }
    const backgroundStyleId = node.backgroundStyleId;
    if (backgroundStyleId) {
        const styleObject = figma.getStyleById(backgroundStyleId);
        details.push(["backrgound", (_b = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _b !== void 0 ? _b : ""]);
    }
    const strokeStyleId = node.strokeStyleId;
    if (strokeStyleId) {
        const styleObject = figma.getStyleById(strokeStyleId);
        details.push(["stroke", (_c = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _c !== void 0 ? _c : ""]);
    }
    const effectStyleId = node.effectStyleId;
    if (effectStyleId) {
        const styleObject = figma.getStyleById(effectStyleId);
        details.push(["effect", (_d = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _d !== void 0 ? _d : ""]);
    }
    const gridStyleId = node.gridStyleId;
    if (gridStyleId) {
        const styleObject = figma.getStyleById(gridStyleId);
        details.push(["grid", (_e = styleObject === null || styleObject === void 0 ? void 0 : styleObject.name) !== null && _e !== void 0 ? _e : ""]);
    }
    return _node_manager__WEBPACK_IMPORTED_MODULE_0__.getDataDetailsFrame("Styles", details);
}


/***/ }),

/***/ "./source/utils.ts":
/*!*************************!*\
  !*** ./source/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findEmptySpace: () => (/* binding */ findEmptySpace),
/* harmony export */   getRoundedDecimal: () => (/* binding */ getRoundedDecimal),
/* harmony export */   getTokensOnNode: () => (/* binding */ getTokensOnNode),
/* harmony export */   isComponent: () => (/* binding */ isComponent),
/* harmony export */   isMasterComponent: () => (/* binding */ isMasterComponent),
/* harmony export */   isOfTypeParentNode: () => (/* binding */ isOfTypeParentNode),
/* harmony export */   isTopNode: () => (/* binding */ isTopNode)
/* harmony export */ });
/**
 * Returns true if the provided input is an object with a "children" property, indicating that it is a parent node.
 * @param a - The input to check.
 * @returns A boolean indicating whether or not the input is a parent node.
 */
function isOfTypeParentNode(a) {
    // Check if the provided input has a "children" property
    return "children" in a;
}
/**
 * Check if the provided node is the top node in the current selection.
 * @param {SceneNode} node - The node to check.
 * @returns {Boolean} - Returns true if the provided node is the top node in the selection, otherwise false.
 */
function isTopNode(node) {
    return (figma.currentPage.selection.findIndex(item => item === node) === 0);
}
/**
 * Returns true if the provided node is a master component.
 * @param node - The node to check.
 * @returns A boolean indicating whether or not the provided node is a master component.
 */
function isMasterComponent(node) {
    // Check if the name of the provided node starts with the prefix "M-"
    return node.name.startsWith('M-');
}
/**
 * Returns true if the provided node is a component node.
 * @param node - The node to check.
 * @returns A boolean indicating whether or not the provided node is a component.
 */
function isComponent(node) {
    // Check if node is an instanceNode
    return node.type == 'INSTANCE';
}
/**
 * Finds and returns an unused region of the canvas on the specified page.
 * @param page - The page to search for unused space on.
 * @returns An object with the x, y, width, and height properties representing the dimensions of the unused region.
 */
function findEmptySpace(page) {
    // Initialize variables to keep track of the bounding box of all visible and unlocked layers
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let hasVisibleNodes = false;
    let currentY;
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
            if (maxX > 65000) {
                maxX = minX;
                minY = maxY + 500;
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
function getTokensOnNode(node) {
    // Get all shared plugin data token keys on the node
    const keys = node.getSharedPluginDataKeys("tokens");
    // Initialize an array to store the resulting tuple pairs
    const result = [];
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
function getRoundedDecimal(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}


/***/ }),

/***/ "./source/variables_manager.ts":
/*!*************************************!*\
  !*** ./source/variables_manager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVariablesFrame: () => (/* binding */ getVariablesFrame),
/* harmony export */   isVariablePresent: () => (/* binding */ isVariablePresent)
/* harmony export */ });
/* harmony import */ var _node_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_manager */ "./source/node_manager.ts");

//check if style exists
function isVariablePresent(node) {
    let boundVariables = node.boundVariables;
    let fillVars = boundVariables === null || boundVariables === void 0 ? void 0 : boundVariables.fills;
    let strokeVars = boundVariables === null || boundVariables === void 0 ? void 0 : boundVariables.strokes;
    let effectVars = boundVariables === null || boundVariables === void 0 ? void 0 : boundVariables.effects;
    return (fillVars != null) || (strokeVars != null) || (effectVars != null);
}
// create a frame containing raw data in information
function getVariablesFrame(node) {
    var _a, _b, _c, _d, _e, _f;
    let details = [];
    const fills = (_a = node.boundVariables) === null || _a === void 0 ? void 0 : _a.fills;
    if (fills && fills.length > 0) {
        const firstFill = fills[0];
        if (firstFill.type == "VARIABLE_ALIAS") {
            const fillId = firstFill.id;
            const variableValue = (_b = figma.variables.getVariableById(fillId)) === null || _b === void 0 ? void 0 : _b.name;
            details.push(["fill", variableValue !== null && variableValue !== void 0 ? variableValue : ""]);
        }
    }
    const strokes = (_c = node.boundVariables) === null || _c === void 0 ? void 0 : _c.strokes;
    if (strokes && strokes.length > 0) {
        const firstStroke = strokes[0];
        if (firstStroke.type == "VARIABLE_ALIAS") {
            const strokeId = firstStroke.id;
            const variableValue = (_d = figma.variables.getVariableById(strokeId)) === null || _d === void 0 ? void 0 : _d.name;
            details.push(["stroke", variableValue !== null && variableValue !== void 0 ? variableValue : ""]);
        }
    }
    const effects = (_e = node.boundVariables) === null || _e === void 0 ? void 0 : _e.effects;
    if (effects && effects.length > 0) {
        const firstEffect = effects[0];
        if (firstEffect.type == "VARIABLE_ALIAS") {
            const effectId = firstEffect.id;
            const variableValue = (_f = figma.variables.getVariableById(effectId)) === null || _f === void 0 ? void 0 : _f.name;
            details.push(["effect", variableValue !== null && variableValue !== void 0 ? variableValue : ""]);
        }
    }
    return _node_manager__WEBPACK_IMPORTED_MODULE_0__.getDataDetailsFrame("Variables", details);
}


/***/ }),

/***/ "./source/variant_manager.ts":
/*!***********************************!*\
  !*** ./source/variant_manager.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateVariants: () => (/* binding */ generateVariants)
/* harmony export */ });
/* harmony import */ var _layouting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouting */ "./source/layouting.ts");
/* harmony import */ var _node_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_manager */ "./source/node_manager.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./source/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./source/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * Returns an array of instances representing each variant of the provided element,
 * from the same component set as the element's main component.
 * @param element - The element to retrieve variants for.
 * @returns An array of instances representing each variant of the provided element.
 */
function getVariants(element) {
    // If the provided element does not have a main component, return an empty array
    if (element.mainComponent == null) {
        return [];
    }
    // Get the component set node that contains the provided element's main component
    const setNode = element.mainComponent.parent;
    // If the set node is null, return an empty array
    if (!setNode) {
        return [];
    }
    // Create an array to store the resulting instances
    const instances = [];
    // Iterate over each child component node in the component set
    const children = setNode.children;
    children.forEach(child => {
        // Create an instance of the child component node
        const compNode = child;
        const instance = compNode.createInstance();
        // Get the main component of the newly created instance
        const mainComponent = instance.mainComponent;
        // Push the new instance to the array of instances
        instances.push(instance);
    });
    // Return the resulting array of instances
    return instances;
}
function parseKeyValuePairs(input) {
    // Split the input string into an array of strings, separated by commas
    const parts = input.split(',');
    // Map each part to a tuple of key-value pairs, separated by the '=' sign
    const pairs = parts.map(part => {
        // Split the part string into an array of strings, separated by the '=' sign
        const [key, value] = part.trim().split('=');
        // Return a tuple of the key-value pair, with the values not separated by a character
        return [key, value];
    });
    // Return the array of key-value pairs
    return pairs;
}
/**
 * Generates a frame containing a title and instances of each variant of the currently selected element.
 * @returns None.
 */
function generateVariants() {
    // Define an async function to ensure that font loading and frame creation occur in the correct sequence
    (() => __awaiter(this, void 0, void 0, function* () {
        var _a;
        // Load necessary fonts
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
        // Get the selected element
        const selectedElement = figma.currentPage.selection[0];
        // If an element is selected
        if (selectedElement) {
            // Get all variants of the element
            const variants = getVariants(selectedElement);
            if (variants.length == 0) {
                // If the selected element has no variants, display a message and exit the plugin
                figma.notify("Selected item has no variants");
                return;
            }
            // Create a new frame for the variant display
            const space = _utils__WEBPACK_IMPORTED_MODULE_3__.findEmptySpace(figma.currentPage);
            let frame = figma.createFrame();
            // Apply auto layout and styling to the frame
            (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(frame, 24, "VERTICAL");
            frame.fills = [{ type: 'SOLID', color: _constants__WEBPACK_IMPORTED_MODULE_2__.backgroundColor }];
            frame.x = space.x + 24;
            frame.y = space.height;
            // Create a title for the frame based on the component set name
            let fontName = { family: "Inter", style: "Bold" };
            const instanceNode = selectedElement;
            const setNode = (_a = instanceNode.mainComponent) === null || _a === void 0 ? void 0 : _a.parent;
            const titleNode = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getNewTextNode(setNode.name, undefined, fontName);
            titleNode.fontSize = _constants__WEBPACK_IMPORTED_MODULE_2__.titleFontSize;
            frame.appendChild(titleNode);
            // Add spacing and alignment attributes to the title and frame
            const spacer = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getVSpacer(2);
            spacer.layoutAlign = "STRETCH";
            frame.layoutAlign = "STRETCH";
            frame.counterAxisSizingMode = "AUTO";
            frame.counterAxisAlignItems = "CENTER";
            frame.appendChild(spacer);
            // Add a variant instance and its name to the frame for each variant in the set
            variants.forEach(variant => {
                var _a, _b;
                let childFrame = figma.createFrame();
                (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(childFrame, 12, "HORIZONTAL");
                childFrame.appendChild(variant);
                let dataFrame = figma.createFrame();
                (0,_layouting__WEBPACK_IMPORTED_MODULE_0__.applyAutoLayout)(dataFrame, 12, "VERTICAL");
                let propInfo = parseKeyValuePairs((_b = (_a = variant.mainComponent) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "");
                propInfo.forEach(prop => {
                    let datumNode = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getNewTextNode(`${prop[0]}: ${prop[1]}`);
                    dataFrame.appendChild(datumNode);
                });
                childFrame.appendChild(dataFrame);
                childFrame.counterAxisAlignItems = "CENTER";
                frame.appendChild(childFrame);
                const spacer = _node_manager__WEBPACK_IMPORTED_MODULE_1__.getVSpacer(2);
                spacer.layoutAlign = "STRETCH";
                frame.appendChild(spacer);
            });
            // Scroll to and zoom in on the new frame to ensure it is visible in the viewport
            figma.viewport.scrollAndZoomIntoView([frame]);
            // Display a confirmation message and close the plugin
            figma.notify("Variants generated");
        }
        else {
            // Display an error message if no element is selected
            figma.notify("Please select an element on the canvas.");
        }
    }))();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./source/code.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variant_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant_manager */ "./source/variant_manager.ts");
/* harmony import */ var _handoff_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handoff_manager */ "./source/handoff_manager.ts");
/* harmony import */ var _lintReport_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lintReport_manager */ "./source/lintReport_manager.ts");



figma.showUI(__html__, { width: 320, height: 600 });
figma.ui.onmessage = msg => {
    if (msg.type == "handoff") {
        figma.notify("Generating Handoff ...");
        const shouldSkipComponentChildrenTraversal = msg.skipComponent;
        const generateForAll = msg.generateHOffForAll;
        const updatePreviousHandoff = msg.updatePreviousHandoff;
        const handOffOnNewPage = msg.handOffOnNewPage;
        const showTokens = msg.showTokens;
        const showStyles = msg.showStyles;
        const showVariables = msg.showVariables;
        const showRawData = msg.showRawData;
        const showLintData = msg.showLintData;
        // const maxDepth = msg.maxDepth;
        _handoff_manager__WEBPACK_IMPORTED_MODULE_1__.generateHandoff({
            skipComponentChildrenTraversal: shouldSkipComponentChildrenTraversal,
            generateForAll: generateForAll,
            updatePreviousHandoff: updatePreviousHandoff,
            handOffOnNewPage: handOffOnNewPage,
            showTokens: showTokens,
            showStyles: showStyles,
            showVariables: showVariables,
            maxDepth: 2,
            showRawData: showRawData,
            showLintData: showLintData
        });
    }
    else if (msg.type == "variants") {
        figma.notify("Generating Variants ...");
        _variant_manager__WEBPACK_IMPORTED_MODULE_0__.generateVariants();
    }
    else if (msg.type == "lintCheck") {
        figma.notify("Generating Lint Report ...");
        const shouldSkipComponentChildrenTraversal = msg.skipComponent;
        const generateForAll = msg.generateReportForAll;
        const updatePreviousReport = msg.updatePreviousReport;
        const reportOnNewPage = msg.reportOnNewPage;
        _lintReport_manager__WEBPACK_IMPORTED_MODULE_2__.generateReport({
            skipComponentChildrenTraversal: shouldSkipComponentChildrenTraversal,
            generateForAll: generateForAll,
            updatePreviousReport: updatePreviousReport,
            reportOnNewPage: reportOnNewPage
        });
    }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0RBQXdEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDekM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0RBQXNEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDTztBQUNQLFlBQVksdURBQXVEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0RBQW9EO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDOEM7QUFDOUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBK0I7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBK0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9mcmFtZV9nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9oYW5kb2ZmX21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9sYXlvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9saW5rX21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9saW50UmVwb3J0X21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9saW50X21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9ub2RlX21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9ydWxlcy9saW50X2JvcmRlckNvbG9yLnRzIiwid2VicGFjazovL2NvbmNvcmQvLi9zb3VyY2UvcnVsZXMvbGludF9ib3JkZXJXaWR0aC50cyIsIndlYnBhY2s6Ly9jb25jb3JkLy4vc291cmNlL3J1bGVzL2xpbnRfYm94U2hhZG93LnRzIiwid2VicGFjazovL2NvbmNvcmQvLi9zb3VyY2UvcnVsZXMvbGludF9jb3JuZXJSYWRpdXMudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9ydWxlcy9saW50X2RldGFjaC50cyIsIndlYnBhY2s6Ly9jb25jb3JkLy4vc291cmNlL3J1bGVzL2xpbnRfZmlsbC50cyIsIndlYnBhY2s6Ly9jb25jb3JkLy4vc291cmNlL3J1bGVzL2xpbnRfaXRlbVNwYWNpbmcudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9ydWxlcy9saW50X3BhZGRpbmcudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS9ydWxlcy9saW50X3NpemluZy50cyIsIndlYnBhY2s6Ly9jb25jb3JkLy4vc291cmNlL3J1bGVzL2xpbnRfdHlwb2dyYXBoeS50cyIsIndlYnBhY2s6Ly9jb25jb3JkLy4vc291cmNlL3N0eWxlX21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vY29uY29yZC8uL3NvdXJjZS91dGlscy50cyIsIndlYnBhY2s6Ly9jb25jb3JkLy4vc291cmNlL3ZhcmlhYmxlc19tYW5hZ2VyLnRzIiwid2VicGFjazovL2NvbmNvcmQvLi9zb3VyY2UvdmFyaWFudF9tYW5hZ2VyLnRzIiwid2VicGFjazovL2NvbmNvcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29uY29yZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29uY29yZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbmNvcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb25jb3JkLy4vc291cmNlL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRpdGxlRm9udFNpemUgPSAyODtcbmV4cG9ydCBjb25zdCB0aXRsZTJGb250U2l6ZSA9IDIwO1xuZXhwb3J0IGNvbnN0IHRpdGxlM0ZvbnRTaXplID0gMTY7XG5leHBvcnQgY29uc3QgYm9keUZvbnRTaXplID0gMTI7XG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG9yID0geyByOiAwLjkyLCBnOiAwLjkyLCBiOiAwLjkyIH07XG5leHBvcnQgY29uc3QgZGFya0JhY2tncm91bmRDb2xvciA9IHsgcjogMC44NiwgZzogMC44NiwgYjogMC44NiB9O1xuZXhwb3J0IGNvbnN0IGdyZWVuMSA9IHsgcjogMC44MiwgZzogMC45MiwgYjogMC44MiB9O1xuZXhwb3J0IGNvbnN0IHBhZGRpbmcxID0gMjQ7XG5leHBvcnQgY29uc3QgcGFkZGluZzIgPSAxMjtcbmV4cG9ydCBjb25zdCBwYWRkaW5nMyA9IDQ7XG5leHBvcnQgY29uc3Qgc2VwYXJhdG9yQ29sb3IgPSB7IHI6IDAuODQsIGc6IDAuODQsIGI6IDAuODQgfTtcbmV4cG9ydCBjb25zdCB3aGl0ZSA9IHsgcjogMC45OSwgZzogMC45OSwgYjogMC45OSB9O1xuZXhwb3J0IHZhciBQcmltYXJ5RGF0YVZhbHVlcztcbihmdW5jdGlvbiAoUHJpbWFyeURhdGFWYWx1ZXMpIHtcbiAgICBQcmltYXJ5RGF0YVZhbHVlc1tQcmltYXJ5RGF0YVZhbHVlc1tcIldpZHRoXCJdID0gMF0gPSBcIldpZHRoXCI7XG4gICAgUHJpbWFyeURhdGFWYWx1ZXNbUHJpbWFyeURhdGFWYWx1ZXNbXCJIZWlnaHRcIl0gPSAxXSA9IFwiSGVpZ2h0XCI7XG4gICAgUHJpbWFyeURhdGFWYWx1ZXNbUHJpbWFyeURhdGFWYWx1ZXNbXCJSYWRpdXNcIl0gPSAyXSA9IFwiUmFkaXVzXCI7XG4gICAgUHJpbWFyeURhdGFWYWx1ZXNbUHJpbWFyeURhdGFWYWx1ZXNbXCJGaWxsXCJdID0gM10gPSBcIkZpbGxcIjtcbn0pKFByaW1hcnlEYXRhVmFsdWVzIHx8IChQcmltYXJ5RGF0YVZhbHVlcyA9IHt9KSk7XG5leHBvcnQgdmFyIFNlY29uZGFyeURhdGFWYWx1ZXM7XG4oZnVuY3Rpb24gKFNlY29uZGFyeURhdGFWYWx1ZXMpIHtcbiAgICBTZWNvbmRhcnlEYXRhVmFsdWVzW1NlY29uZGFyeURhdGFWYWx1ZXNbXCJGb250V2VpZ2h0XCJdID0gMF0gPSBcIkZvbnRXZWlnaHRcIjtcbiAgICBTZWNvbmRhcnlEYXRhVmFsdWVzW1NlY29uZGFyeURhdGFWYWx1ZXNbXCJGb250U2l6ZVwiXSA9IDFdID0gXCJGb250U2l6ZVwiO1xuICAgIFNlY29uZGFyeURhdGFWYWx1ZXNbU2Vjb25kYXJ5RGF0YVZhbHVlc1tcIk9wYWNpdHlcIl0gPSAyXSA9IFwiT3BhY2l0eVwiO1xuICAgIFNlY29uZGFyeURhdGFWYWx1ZXNbU2Vjb25kYXJ5RGF0YVZhbHVlc1tcIkJvcmRlckNvbG9yXCJdID0gM10gPSBcIkJvcmRlckNvbG9yXCI7XG4gICAgU2Vjb25kYXJ5RGF0YVZhbHVlc1tTZWNvbmRhcnlEYXRhVmFsdWVzW1wiQm9yZGVyV2lkdGhcIl0gPSA0XSA9IFwiQm9yZGVyV2lkdGhcIjtcbn0pKFNlY29uZGFyeURhdGFWYWx1ZXMgfHwgKFNlY29uZGFyeURhdGFWYWx1ZXMgPSB7fSkpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5QXV0b0xheW91dEhvcml6b250YWwoZnJhbWUsIHBhZGRpbmcsIGZyYW1lTmFtZSkge1xuICAgIGZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjsgLy8gU2V0IGxheW91dCBtb2RlIHRvIFZFUlRJQ0FMIG9yIEhPUklaT05UQUxcbiAgICBmcmFtZS5uYW1lID0gZnJhbWVOYW1lO1xuICAgIGZyYW1lLnBhZGRpbmdUb3AgPSBwYWRkaW5nO1xuICAgIGZyYW1lLnBhZGRpbmdSaWdodCA9IHBhZGRpbmc7XG4gICAgZnJhbWUucGFkZGluZ0JvdHRvbSA9IHBhZGRpbmc7XG4gICAgZnJhbWUucGFkZGluZ0xlZnQgPSBwYWRkaW5nO1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gcGFkZGluZyAvIDQ7XG4gICAgZnJhbWUuY29ybmVyUmFkaXVzID0gcGFkZGluZyAvIDg7XG4gICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjkyLCBnOiAwLjkyLCBiOiAwLjkyIH0gfV07XG4gICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7IC8vIFNldCBwcmltYXJ5IGF4aXMgc2l6aW5nIG1vZGUgdG8gQVVUT1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5QXV0b0xheW91dFZlcnRpY2FsKGZyYW1lLCBwYWRkaW5nLCBmcmFtZU5hbWUpIHtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiOyAvLyBTZXQgbGF5b3V0IG1vZGUgdG8gVkVSVElDQUwgb3IgSE9SSVpPTlRBTFxuICAgIGZyYW1lLm5hbWUgPSBmcmFtZU5hbWU7XG4gICAgZnJhbWUucGFkZGluZ1RvcCA9IHBhZGRpbmc7XG4gICAgZnJhbWUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZztcbiAgICBmcmFtZS5wYWRkaW5nQm90dG9tID0gcGFkZGluZztcbiAgICBmcmFtZS5wYWRkaW5nTGVmdCA9IHBhZGRpbmc7XG4gICAgZnJhbWUuaXRlbVNwYWNpbmcgPSBwYWRkaW5nIC8gNDtcbiAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSBwYWRkaW5nIC8gODtcbiAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuOTIsIGc6IDAuOTIsIGI6IDAuOTIgfSB9XTtcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjsgLy8gU2V0IHByaW1hcnkgYXhpcyBzaXppbmcgbW9kZSB0byBBVVRPXG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGFwcGx5QXV0b0xheW91dCB9IGZyb20gXCIuL2xheW91dGluZ1wiO1xuaW1wb3J0ICogYXMgTm9kZUNyZWF0b3IgZnJvbSBcIi4vbm9kZV9tYW5hZ2VyXCI7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0ICogYXMgU3R5bGVNYW5hZ2VyIGZyb20gXCIuL3N0eWxlX21hbmFnZXJcIjtcbmltcG9ydCAqIGFzIFZhcmlhYmxlc01hbmFnZXIgZnJvbSBcIi4vdmFyaWFibGVzX21hbmFnZXJcIjtcbmltcG9ydCAqIGFzIExpbnRNYW5hZ2VyIGZyb20gXCIuL2xpbnRfbWFuYWdlclwiO1xuaW1wb3J0ICogYXMgTGlua01hbmFnZXIgZnJvbSBcIi4vbGlua19tYW5hZ2VyXCI7XG5sZXQgRUxFTUVOVF9NSU5fV0lEVEggPSAzNjA7XG4vLyBJbml0aWFsaXNpbmcgZ2xvYmFsIHN0YXRpYyBoYW5kT2ZmQ29uZmlnIGFuZCBmZXRjaGluZyB0b2tlbiBKU09OcyBcbmxldCBoYW5kb2ZmQ29uZmlnO1xuZXhwb3J0IGxldCBzZW1hbnRpY0pTT047XG5leHBvcnQgbGV0IGNvbXBvbmVudEpTT047XG4oKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgc2VtYW50aWNKU09OID0geWllbGQgTGludE1hbmFnZXIuTmV0d29ya0NhbGwuZmV0Y2hKU09OKFwiU2VtYW50aWNcIik7XG4gICAgY29tcG9uZW50SlNPTiA9IHlpZWxkIExpbnRNYW5hZ2VyLk5ldHdvcmtDYWxsLmZldGNoSlNPTihcIkNvbXBvbmVudFwiKTtcbn0pKSgpO1xuLyoqIEluaXRpYWxpc2luZyBhbGwgSGVscGVyIGZ1bmN0aW9ucyAqL1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBvcHRpbWFsIHNpemUgYmFzZWQgb24gdGhlIGdpdmVuIG9yaWVudGF0aW9uIGFuZCBjb25zdHJhaW50cy5cbiAqXG4gKiBAcGFyYW0gb3JpZW50YXRpb24gLSBUaGUgb3JpZW50YXRpb24gdG8gY29uc2lkZXIgZm9yIHRoZSBzaXplIGNhbGN1bGF0aW9uIChcIldJRFRIXCIgb3IgXCJIRUlHSFRcIikuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgYWRqdXN0ZWQuXG4gKiBAcGFyYW0gbWF4V2lkdGggLSBUaGUgbWF4aW11bSBhbGxvd2VkIHdpZHRoLCBhcHBsaWNhYmxlIHdoZW4gdGhlIG9yaWVudGF0aW9uIGlzIFwiV0lEVEhcIi5cbiAqIEByZXR1cm5zIFRoZSBvcHRpbWFsIHNpemUsIGNvbnN0cmFpbmVkIGJ5IHRoZSBvcmllbnRhdGlvbiBhbmQgdGhlIGdpdmVuIGxpbWl0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9wdGltYWxTaXplKG9yaWVudGF0aW9uLCB2YWx1ZSwgbWF4V2lkdGgpIHtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJXSURUSFwiOlxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KDAuMDEsIHZhbHVlKSwgbWF4V2lkdGgpO1xuICAgICAgICBjYXNlIFwiSEVJR0hUXCI6XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMC4wMSwgdmFsdWUpO1xuICAgIH1cbn1cbi8qKlxuICogRmlsdGVycyBhbiBhcnJheSBvZiBub2RlcyB0byByZXR1cm4gb25seSB0b3AtbGV2ZWwgZnJhbWUgbm9kZXMgKG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiBhIHBhZ2UpLlxuICogQHBhcmFtIG5vZGVzIC0gQW4gYXJyYXkgb2Ygbm9kZXMgdG8gYmUgZmlsdGVyZWQuXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0b3AtbGV2ZWwgZnJhbWUgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJUb3BMZXZlbEZyYW1lcyhub2Rlcykge1xuICAgIC8vIEluaXRpYWxpemUgYW4gZW1wdHkgYXJyYXkgZm9yIHRoZSB0b3AtbGV2ZWwgZnJhbWUgbm9kZXNcbiAgICBsZXQgdG9wTGV2ZWxGcmFtZXMgPSBbXTtcbiAgICAvLyBGb3IgZWFjaCBub2RlIGluIHRoZSBpbnB1dCBhcnJheVxuICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gSWYgdGhlIG5vZGUncyBwYXJlbnQgaXMgYSBwYWdlLCBhc3N1bWUgaXQgaXMgYSB0b3AtbGV2ZWwgZnJhbWUgbm9kZSBhbmQgYWRkIGl0IHRvIHRoZSBvdXRwdXQgYXJyYXlcbiAgICAgICAgaWYgKCgoX2EgPSBub2RlLnBhcmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUpID09PSBcIlBBR0VcIikge1xuICAgICAgICAgICAgdG9wTGV2ZWxGcmFtZXMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFJldHVybiB0aGUgb3V0cHV0IGFycmF5IG9mIHRvcC1sZXZlbCBmcmFtZSBub2Rlc1xuICAgIHJldHVybiB0b3BMZXZlbEZyYW1lcztcbn1cbi8qKlxuICogR2VuZXJhdGVzIGEgc3BlY2lmaWMgbmFtZSBmb3IgaGFuZG9mZiBwdXJwb3NlcyBhcyBhIHN0cmluZy5cbiAqIEBwYXJhbSBpZCAtIEEgc3RyaW5nIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgb2JqZWN0IHRvIGJlIG5hbWVkIGZvciBoYW5kb2ZmIHB1cnBvc2VzLlxuICogQHJldHVybnMgQSBzdHJpbmcgd2l0aCB0aGUgcHJlZml4IGBDbkNkYCBmb2xsb3dlZCBieSB0aGUgcHJvdmlkZWQgYGlkYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhhbmRvZmZOYW1lKGlkLCB0eXBlKSB7XG4gICAgLy8gUmV0dXJuIGEgc3RyaW5nIGNvbnNpc3Rpbmcgb2YgdGhlIHByZWZpeCBgQ25DZGAgZm9sbG93ZWQgYnkgdGhlIHByb3ZpZGVkIGBpZGBcbiAgICByZXR1cm4gYENvbmNvcmQgJHt0eXBlfTogJHtpZH1gO1xufVxuLyoqXG4gKiBGaW5kcyBhbmQgcmV0dXJucyBhbiBleGlzdGluZyBoYW5kb2ZmIHZpZXcgbm9kZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIHByb3ZpZGVkIG5vZGUgSUQuXG4gKiBAcGFyYW0gbm9kZSAtIFRoZSBub2RlIGZvciB3aGljaCB0byBmaW5kIGFuIGV4aXN0aW5nIGhhbmRvZmYgdmlldyBub2RlLlxuICogQHJldHVybnMgVGhlIGV4aXN0aW5nIGhhbmRvZmYgdmlldyBub2RlLCBvciB1bmRlZmluZWQgaWYgbm8gc3VjaCBub2RlIGlzIGZvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZE9sZE5vZGUobm9kZSwgaGFuZG9mZlBhZ2UsIHR5cGUpIHtcbiAgICAvLyBHZXQgdGhlIG5hbWUgdGhhdCBhbiBleGlzdGluZyBoYW5kb2ZmIC8gbGludCByZXBvcnQgaGFuZG9mZiB2aWV3IHdvdWxkIGhhdmUgZm9yIHRoZSBwcm92aWRlZCBub2RlIElEXG4gICAgbGV0IGhhbmRPZmYgPSBnZXRIYW5kb2ZmTmFtZShub2RlLmlkLCB0eXBlKTtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGNoaWxkcmVuIG9mIHRoZSBjdXJyZW50IHBhZ2UgdG8gZmluZCBhbiBleGlzdGluZyBoYW5kb2ZmIHZpZXcgd2l0aCB0aGUgc2FtZSBuYW1lXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgaGFuZG9mZlBhZ2UuY2hpbGRyZW4pIHtcbiAgICAgICAgLy8gSWYgYW4gZXhpc3RpbmcgaGFuZG9mZiB2aWV3IGlzIGZvdW5kLCByZXR1cm4gaXRcbiAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gaGFuZE9mZikge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIG5vIGV4aXN0aW5nIGhhbmRvZmYgdmlldyBpcyBmb3VuZCwgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG4vKipcbiAqIFNlYXJjaGVzIGZvciBhIGJ1dHRvbiB3aXRoIGEgc3BlY2lmaWMgbmFtZSBpbiB0aGUgY3VycmVudCBwYWdlJ3MgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIG5vZGVJZCAtIFRoZSBJRCBvZiB0aGUgbm9kZSB0byBpbmNsdWRlIGluIHRoZSBidXR0b24ncyBuYW1lLlxuICogQHBhcmFtIHR5cGVPZkJ0biAtIFRoZSB0eXBlIG9mIHRoZSBidXR0b24gdG8gaW5jbHVkZSBpbiB0aGUgYnV0dG9uJ3MgbmFtZS5cbiAqIEByZXR1cm5zIFRoZSBmb3VuZCBTY2VuZU5vZGUgaWYgYSBtYXRjaGluZyBidXR0b24gaXMgZm91bmQsIG90aGVyd2lzZSB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kT2xkQnV0dG9uKG5vZGVJZCwgdHlwZU9mQnRuKSB7XG4gICAgY29uc3QgYnV0dG9uTmFtZSA9IGAke3R5cGVPZkJ0bn0gYnV0dG9uOiAke25vZGVJZH1gO1xuICAgIGZvciAobGV0IGNoaWxkIG9mIGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjaGlsZC5uYW1lID09IGJ1dHRvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IHZhciBMYXlvdXRPcHRpb25zO1xuKGZ1bmN0aW9uIChMYXlvdXRPcHRpb25zKSB7XG4gICAgbGV0IExheW91dE1vZGU7XG4gICAgKGZ1bmN0aW9uIChMYXlvdXRNb2RlKSB7XG4gICAgICAgIExheW91dE1vZGVbXCJOT05FXCJdID0gXCJOT05FXCI7XG4gICAgICAgIExheW91dE1vZGVbXCJIT1JJWk9OVEFMXCJdID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIExheW91dE1vZGVbXCJWRVJUSUNBTFwiXSA9IFwiVkVSVElDQUxcIjtcbiAgICB9KShMYXlvdXRNb2RlID0gTGF5b3V0T3B0aW9ucy5MYXlvdXRNb2RlIHx8IChMYXlvdXRPcHRpb25zLkxheW91dE1vZGUgPSB7fSkpO1xuICAgIGxldCBMYXlvdXRBbGlnbjtcbiAgICAoZnVuY3Rpb24gKExheW91dEFsaWduKSB7XG4gICAgICAgIExheW91dEFsaWduW1wiTUlOXCJdID0gXCJNSU5cIjtcbiAgICAgICAgTGF5b3V0QWxpZ25bXCJDRU5URVJcIl0gPSBcIkNFTlRFUlwiO1xuICAgICAgICBMYXlvdXRBbGlnbltcIk1BWFwiXSA9IFwiTUFYXCI7XG4gICAgICAgIExheW91dEFsaWduW1wiU1RSRVRDSFwiXSA9IFwiU1RSRVRDSFwiO1xuICAgICAgICBMYXlvdXRBbGlnbltcIklOSEVSSVRcIl0gPSBcIklOSEVSSVRcIjtcbiAgICB9KShMYXlvdXRBbGlnbiA9IExheW91dE9wdGlvbnMuTGF5b3V0QWxpZ24gfHwgKExheW91dE9wdGlvbnMuTGF5b3V0QWxpZ24gPSB7fSkpO1xuICAgIGxldCBjb3VudGVyQXhpc1NpemluZ01vZGU7XG4gICAgKGZ1bmN0aW9uIChjb3VudGVyQXhpc1NpemluZ01vZGUpIHtcbiAgICAgICAgY291bnRlckF4aXNTaXppbmdNb2RlW1wiRklYRURcIl0gPSBcIkZJWEVEXCI7XG4gICAgICAgIGNvdW50ZXJBeGlzU2l6aW5nTW9kZVtcIkFVVE9cIl0gPSBcIkFVVE9cIjtcbiAgICB9KShjb3VudGVyQXhpc1NpemluZ01vZGUgPSBMYXlvdXRPcHRpb25zLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSB8fCAoTGF5b3V0T3B0aW9ucy5jb3VudGVyQXhpc1NpemluZ01vZGUgPSB7fSkpO1xuICAgIGxldCBDb3VudGVyQXhpc0FsaWduSXRlbXM7XG4gICAgKGZ1bmN0aW9uIChDb3VudGVyQXhpc0FsaWduSXRlbXMpIHtcbiAgICAgICAgQ291bnRlckF4aXNBbGlnbkl0ZW1zW1wiTUlOXCJdID0gXCJNSU5cIjtcbiAgICAgICAgQ291bnRlckF4aXNBbGlnbkl0ZW1zW1wiTUFYXCJdID0gXCJNQVhcIjtcbiAgICAgICAgQ291bnRlckF4aXNBbGlnbkl0ZW1zW1wiQ0VOVEVSXCJdID0gXCJDRU5URVJcIjtcbiAgICAgICAgQ291bnRlckF4aXNBbGlnbkl0ZW1zW1wiQkFTRUxJTkVcIl0gPSBcIkJBU0VMSU5FXCI7XG4gICAgfSkoQ291bnRlckF4aXNBbGlnbkl0ZW1zID0gTGF5b3V0T3B0aW9ucy5Db3VudGVyQXhpc0FsaWduSXRlbXMgfHwgKExheW91dE9wdGlvbnMuQ291bnRlckF4aXNBbGlnbkl0ZW1zID0ge30pKTtcbiAgICBsZXQgcHJpbWFyeUF4aXNTaXppbmdNb2RlO1xuICAgIChmdW5jdGlvbiAocHJpbWFyeUF4aXNTaXppbmdNb2RlKSB7XG4gICAgICAgIHByaW1hcnlBeGlzU2l6aW5nTW9kZVtcIkZJWEVEXCJdID0gXCJGSVhFRFwiO1xuICAgICAgICBwcmltYXJ5QXhpc1NpemluZ01vZGVbXCJBVVRPXCJdID0gXCJBVVRPXCI7XG4gICAgfSkocHJpbWFyeUF4aXNTaXppbmdNb2RlID0gTGF5b3V0T3B0aW9ucy5wcmltYXJ5QXhpc1NpemluZ01vZGUgfHwgKExheW91dE9wdGlvbnMucHJpbWFyeUF4aXNTaXppbmdNb2RlID0ge30pKTtcbn0pKExheW91dE9wdGlvbnMgfHwgKExheW91dE9wdGlvbnMgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TGF5b3V0T25IYW5kb2ZmKG5vZGUsIGxheW91dE1vZGUsIGxheW91dEFsaWduLCBjb3VudGVyQXhpc1NpemluZ01vZGUsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcywgcGFkZGluZywgcHJpbWFyeUF4aXNTaXppbmdNb2RlKSB7XG4gICAgbm9kZS5sYXlvdXRNb2RlID0gbGF5b3V0TW9kZTtcbiAgICBub2RlLmxheW91dEFsaWduID0gbGF5b3V0QWxpZ247XG4gICAgbm9kZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBjb3VudGVyQXhpc1NpemluZ01vZGU7XG4gICAgbm9kZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBjb3VudGVyQXhpc0FsaWduSXRlbXM7XG4gICAgbm9kZS5pdGVtU3BhY2luZyA9IHBhZGRpbmc7XG4gICAgbm9kZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBwcmltYXJ5QXhpc1NpemluZ01vZGU7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hpbGRDb250YWluZXIobm9kZSwgbWF4V2lkdGgpIHtcbn1cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2VzIGEgcGFyZW50IG5vZGUgYW5kIGl0cyBjaGlsZHJlbiB0byBhcHBlbmRcbiAqIHRoZW0gdG8gYSBwcm92aWRlZCBmcmFtZSBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBoYW5kb2ZmIHJlcG9ydHMuXG4gKlxuICogQHBhcmFtIHBhcmVudCAtIFRoZSBwYXJlbnQgbm9kZSB0byB0cmF2ZXJzZS5cbiAqIEBwYXJhbSBmcmFtZSAtIFRoZSBmcmFtZSB0byBhcHBlbmQgdGhlIG5vZGVzIHRvLlxuICogQHBhcmFtIGhhbmRvZmZDb25maWcgLSBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgdGhlIGhhbmRvZmYgcmVwb3J0LlxuICogQHBhcmFtIGRlcHRoIC0gVGhlIGRlcHRoIG9mIHRoZSByZWN1cnNpb24uXG4gKlxuICogQHJldHVybnMgTm9uZS5cbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRyZW5BbmRBcHBlbmQocGFyZW50LCBwYXJlbnRDb250YWluZXJOb2RlLCBmcmFtZSwgbWF4V2lkdGgsIGxpbnRlZERhdGEsIGRlcHRoID0gMCkge1xuICAgIC8vIElmIHRoZSBwYXJlbnQgbm9kZSBpcyBhIGNvbXBvbmVudCBhbmQgdGhlIGZsYWcgaXMgc2V0IHRvIHNraXAgaXRzIGNoaWxkcmVuIHRyYXZlcnNhbCBhbmQgaXMgbm90IHRoZSB0b3Agbm9kZSBvZiBzZWxlY3RlZCBmcmFtZSBvciBpZiBpdCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBjdXJyZW50IG5vZGUgdHlwZVxuICAgIGlmICgoVXRpbHMuaXNDb21wb25lbnQocGFyZW50KSAmJiBoYW5kb2ZmQ29uZmlnLnNraXBDb21wb25lbnRDaGlsZHJlblRyYXZlcnNhbCkgJiYgIVV0aWxzLmlzVG9wTm9kZShwYXJlbnQpIHx8ICFVdGlscy5pc09mVHlwZVBhcmVudE5vZGUocGFyZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENhc3QgdGhlIG5vZGUgYXMgUGFyZW50Tm9kZSBhbmQgZ2V0IGl0cyBjaGlsZHJlblxuICAgIGNvbnN0IGNvbXAgPSBwYXJlbnQ7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjb21wLmNoaWxkcmVuO1xuICAgIGNvbnN0IHBhZGRpbmcgPSAyMDtcbiAgICBsZXQgbmV3UGFyZW50Q29uYXRpbmVyTmRvZSA9IHBhcmVudENvbnRhaW5lck5vZGU7XG4gICAgLy8gRm9yIGVhY2ggY2hpbGQgaW4gdGhlIHBhcmVudCBub2RlXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKCFjaGlsZC52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNoaWxkIG5vZGUgY29udGFpbnMgdG9rZW5zXG4gICAgICAgIGxldCB0b2tlbnMgPSBVdGlscy5nZXRUb2tlbnNPbk5vZGUoY2hpbGQpO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2hpbGQgbm9kZSBjb250YWlucyB2YXJpYW50IHByb3BlcnRpZXNcbiAgICAgICAgbGV0IHZhcmlhbnRQcm9wZXJ0aWVzID0gKGNoaWxkLnZhcmlhbnRQcm9wZXJ0aWVzICE9PSBudWxsKSA/IGNoaWxkLnZhcmlhbnRQcm9wZXJ0aWVzIDogdW5kZWZpbmVkO1xuICAgICAgICAvLyBDaGVjayBsaW50IG9uIGNoaWxkXG4gICAgICAgIHZhciBnZW5lcmFsRXJyb3JzID0gW107XG4gICAgICAgIHZhciB0b2tlbkVycm9ycyA9IFtdO1xuICAgICAgICB2YXIgdG9rZW5XYXJuaW5ncyA9IFtdO1xuICAgICAgICB2YXIgbGludEluZGljYXRvciA9IExpbnRNYW5hZ2VyLmxpbnRDaGVjayhjaGlsZCwgdG9rZW5FcnJvcnMsIGdlbmVyYWxFcnJvcnMsIHRva2VuV2FybmluZ3MsIGxpbnRlZERhdGEpO1xuICAgICAgICBsZXQgc2hvdWxkU2hvd1N0eWxlcyA9IGhhbmRvZmZDb25maWcuc2hvd1N0eWxlcztcbiAgICAgICAgaWYgKHNob3VsZFNob3dTdHlsZXMpIHtcbiAgICAgICAgICAgIHNob3VsZFNob3dTdHlsZXMgPSBzaG91bGRTaG93U3R5bGVzICYmIFN0eWxlTWFuYWdlci5pc1N0eWxlUHJlc2VudChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3VsZFNob3dWYXJpYWJsZXMgPSBoYW5kb2ZmQ29uZmlnLnNob3dWYXJpYWJsZXM7XG4gICAgICAgIGlmIChzaG91bGRTaG93VmFyaWFibGVzKSB7XG4gICAgICAgICAgICBzaG91bGRTaG93VmFyaWFibGVzID0gc2hvdWxkU2hvd1ZhcmlhYmxlcyAmJiBWYXJpYWJsZXNNYW5hZ2VyLmlzVmFyaWFibGVQcmVzZW50KGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YUV4aXN0cyA9IChoYW5kb2ZmQ29uZmlnLnNob3dUb2tlbnMgJiYgdG9rZW5zLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB8fCBzaG91bGRTaG93U3R5bGVzXG4gICAgICAgICAgICB8fCBzaG91bGRTaG93VmFyaWFibGVzXG4gICAgICAgICAgICAvLyB8fCAoaGFuZG9mZkNvbmZpZy5zaG93TGludERhdGEgJiYgbGludEluZGljYXRvciA+IC0xKVxuICAgICAgICAgICAgfHwgKHZhcmlhbnRQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAvLyBtYXhEZXB0aCB0byBiZSB1c2VkIGxhdGVyXG4gICAgICAgIC8vIGlmIChkYXRhRXhpc3RzIHx8IChkZXB0aCA8IGhhbmRvZmZDb25maWcubWF4RGVwdGgpKSB7XG4gICAgICAgIC8vIHRyYXZlcnNlIHRpbGwgbWF4IGRlcHRoIGlmIHNpemUgZGF0YSBpcyByZXF1aXJlZFxuICAgICAgICBsZXQgc2hvdWxkRGlzcGxheVJhd0RhdGEgPSAoZGVwdGggPCBoYW5kb2ZmQ29uZmlnLm1heERlcHRoKSAmJiAoaGFuZG9mZkNvbmZpZy5zaG93UmF3RGF0YSk7XG4gICAgICAgIGlmIChkYXRhRXhpc3RzIHx8IHNob3VsZERpc3BsYXlSYXdEYXRhKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZnJhbWUgdG8gaG9sZCB0aGUgY2hpbGQgbm9kZSdzIHRva2VucyBhbmQgbmFtZVxuICAgICAgICAgICAgY29uc3QgY2hpbGRGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBjaGlsZEZyYW1lLm5hbWUgPSBcIkNoaWxkIERldGFpbHNcIjtcbiAgICAgICAgICAgIGNoaWxkRnJhbWUuYmFja2dyb3VuZHMgPSBbXTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBUZXh0Tm9kZSB0byBob2xkIHRoZSBjaGlsZCBub2RlJ3MgbmFtZVxuICAgICAgICAgICAgbGV0IGNoaWxkTmFtZSA9IE5vZGVDcmVhdG9yLmNyZWF0ZUNoaWxkVGl0bGVOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgIGxldCBsaW5rTm9kZSA9IExpbmtNYW5hZ2VyLmNyZWF0ZVBhcmVudEJ1dHRvbihwYXJlbnRDb250YWluZXJOb2RlKTtcbiAgICAgICAgICAgIGNoaWxkTmFtZS5hcHBlbmRDaGlsZChsaW5rTm9kZSk7XG4gICAgICAgICAgICBsZXQgY2hpbGRDbG9uZSA9IGNoaWxkLmNsb25lKCk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZENvbnRhaW5lckZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyRnJhbWUubmFtZSA9IFwiQ2hpbGQgQ29udGFpbmVyXCI7XG4gICAgICAgICAgICBjb25zdCBjaGlsZENvbnRhaW5lckNvbnRhaW5lckZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyQ29udGFpbmVyRnJhbWUubmFtZSA9IFwiQ2hpbGQgV3JhcHBlclwiO1xuICAgICAgICAgICAgYXBwbHlBdXRvTGF5b3V0KGNoaWxkQ29udGFpbmVyQ29udGFpbmVyRnJhbWUsIDAsIFwiSE9SSVpPTlRBTFwiKTtcbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyQ29udGFpbmVyRnJhbWUuYXBwZW5kQ2hpbGQoY2hpbGRDb250YWluZXJGcmFtZSk7XG4gICAgICAgICAgICBjaGlsZENvbnRhaW5lckZyYW1lLmFwcGVuZENoaWxkKGNoaWxkQ2xvbmUpO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJGcmFtZS5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJDb250YWluZXJGcmFtZS5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJDb250YWluZXJGcmFtZS5taW5XaWR0aCA9IEVMRU1FTlRfTUlOX1dJRFRIO1xuICAgICAgICAgICAgYXBwbHlBdXRvTGF5b3V0KGNoaWxkQ29udGFpbmVyRnJhbWUsIDAsIFwiSE9SSVpPTlRBTFwiKTtcbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyRnJhbWUucmVzaXplKGdldE9wdGltYWxTaXplKFwiV0lEVEhcIiwgY2hpbGQud2lkdGgsIG1heFdpZHRoKSwgZ2V0T3B0aW1hbFNpemUoXCJIRUlHSFRcIiwgY2hpbGQuaGVpZ2h0LCBtYXhXaWR0aCkpO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJGcmFtZS5yZXNpemUoTWF0aC5tYXgoY2hpbGQud2lkdGgsIDAuMDEpLCBNYXRoLm1heChjaGlsZC5oZWlnaHQsIDAuMDEpKTtcbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyQ29udGFpbmVyRnJhbWUucmVzaXplKGdldE9wdGltYWxTaXplKFwiV0lEVEhcIiwgY2hpbGQud2lkdGgsIG1heFdpZHRoKSwgZ2V0T3B0aW1hbFNpemUoXCJIRUlHSFRcIiwgY2hpbGQuaGVpZ2h0LCBtYXhXaWR0aCkpO1xuICAgICAgICAgICAgY29uc3Qgc3BhY2VyID0gTm9kZUNyZWF0b3IuZ2V0VlNwYWNlcigyKTtcbiAgICAgICAgICAgIHNwYWNlci5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcbiAgICAgICAgICAgIGNoaWxkTmFtZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoY2hpbGROYW1lKTtcbiAgICAgICAgICAgIGNoaWxkRnJhbWUuYXBwZW5kQ2hpbGQoY2hpbGRDb250YWluZXJDb250YWluZXJGcmFtZSk7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGNoaWxkIG5vZGUncyB0b2tlbiBmcmFtZSB0byB0aGUgY2hpbGQgZnJhbWVcbiAgICAgICAgICAgIGxldCB0b2tlbkZyYW1lO1xuICAgICAgICAgICAgaWYgKGhhbmRvZmZDb25maWcuc2hvd1Rva2Vucykge1xuICAgICAgICAgICAgICAgIHRva2VuRnJhbWUgPSBOb2RlQ3JlYXRvci5nZXREYXRhRGV0YWlsc0ZyYW1lKFwiVG9rZW5zXCIsIHRva2Vucyk7XG4gICAgICAgICAgICAgICAgdG9rZW5GcmFtZS5uYW1lID0gXCJUb2tlbiBkZXRhaWxzXCI7XG4gICAgICAgICAgICAgICAgY2hpbGRGcmFtZS5hcHBlbmRDaGlsZCh0b2tlbkZyYW1lKTtcbiAgICAgICAgICAgICAgICB0b2tlbkZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgdG9rZW5GcmFtZS5taW5XaWR0aCA9IDIwMDtcbiAgICAgICAgICAgICAgICB0b2tlbkZyYW1lLm1heFdpZHRoID0gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQWRkIGxvY2FsIHN0eWxlcyBub2RlIGlmIG5lZWRlZFxuICAgICAgICAgICAgaWYgKGhhbmRvZmZDb25maWcuc2hvd1N0eWxlcykge1xuICAgICAgICAgICAgICAgIC8vIGlmKGhhbmRvZmZDb25maWcuc2hvd1N0eWxlcyAmJiBTdHlsZU1hbmFnZXIuaXNTdHlsZVByZXNlbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVGcmFtZSA9IFN0eWxlTWFuYWdlci5nZXRTdHlsZUZyYW1lKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBzdHlsZUZyYW1lLm5hbWUgPSBcIlN0eWxlIGRldGFpbHNcIjtcbiAgICAgICAgICAgICAgICBzdHlsZUZyYW1lLm1pbldpZHRoID0gMjAwO1xuICAgICAgICAgICAgICAgIHN0eWxlRnJhbWUubWF4V2lkdGggPSAxMDAwO1xuICAgICAgICAgICAgICAgIGNoaWxkRnJhbWUuYXBwZW5kQ2hpbGQoc3R5bGVGcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0FkZCB2YXJpYWJsZXMgbm9kZSBpZiBuZWVkZWRcbiAgICAgICAgICAgIGlmIChoYW5kb2ZmQ29uZmlnLnNob3dWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBpZihoYW5kb2ZmQ29uZmlnLnNob3dWYXJpYWJsZXMgJiYgVmFyaWFibGVzTWFuYWdlci5pc1ZhcmlhYmxlUHJlc2VudChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJzRnJhbWUgPSBWYXJpYWJsZXNNYW5hZ2VyLmdldFZhcmlhYmxlc0ZyYW1lKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB2YXJzRnJhbWUubmFtZSA9IFwiVmFyaWFibGUgZGV0YWlsc1wiO1xuICAgICAgICAgICAgICAgIHZhcnNGcmFtZS5taW5XaWR0aCA9IDIwMDtcbiAgICAgICAgICAgICAgICB2YXJzRnJhbWUubWF4V2lkdGggPSAxMDAwO1xuICAgICAgICAgICAgICAgIGNoaWxkRnJhbWUuYXBwZW5kQ2hpbGQodmFyc0ZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQWRkIGRldGFpbHMgZnJhbWUgaWYgbmVlZGVkXG4gICAgICAgICAgICBpZiAoaGFuZG9mZkNvbmZpZy5zaG93UmF3RGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemVGcmFtZSA9IE5vZGVDcmVhdG9yLmdldFNpemVGcmFtZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgc2l6ZUZyYW1lLm5hbWUgPSBcIlJhdyBkYXRhXCI7XG4gICAgICAgICAgICAgICAgc2l6ZUZyYW1lLm1pbldpZHRoID0gMjAwO1xuICAgICAgICAgICAgICAgIHNpemVGcmFtZS5tYXhXaWR0aCA9IDEwMDA7XG4gICAgICAgICAgICAgICAgY2hpbGRGcmFtZS5hcHBlbmRDaGlsZChzaXplRnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9BZGQgZGV0YWlscyBmcmFtZSBpZiBuZWVkZWRcbiAgICAgICAgICAgIGlmIChVdGlscy5pc0NvbXBvbmVudChjaGlsZCkgJiYgdmFyaWFudFByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzTGlzdCA9IE9iamVjdC5lbnRyaWVzKHZhcmlhbnRQcm9wZXJ0aWVzIHx8IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgdmFsdWVdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzRnJhbWUgPSBOb2RlQ3JlYXRvci5nZXREYXRhRGV0YWlsc0ZyYW1lKFwiQ29tcG9uZW50IGhhbmRvZmZcIiwgcHJvcGVydGllc0xpc3QpO1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNGcmFtZS5uYW1lID0gXCJwcm9wZXJ0aWVzIGRldGFpbHNcIjtcbiAgICAgICAgICAgICAgICBjaGlsZEZyYW1lLmFwcGVuZENoaWxkKHByb3BlcnRpZXNGcmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0ZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0ZyYW1lLm1pbldpZHRoID0gMjAwO1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNGcmFtZS5tYXhXaWR0aCA9IDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0FkZCBsaW50IGZyYW1lIGlmIG5lZWRlZFxuICAgICAgICAgICAgaWYgKGhhbmRvZmZDb25maWcuc2hvd0xpbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpbnRJbmRpY2F0b3IgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW50IFJlc3VsdCBEaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbnRGcmFtZSA9IExpbnRNYW5hZ2VyLmdldExpbnRSZXN1bHRGcmFtZShsaW50SW5kaWNhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgbGludEZyYW1lLm5hbWUgPSBcIkxpbnQgZGV0YWlsc1wiO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZE5hbWUuYXBwZW5kQ2hpbGQobGludEZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgbGludEZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGxpbnRGcmFtZS5taW5XaWR0aCA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgbGludEZyYW1lLm1heFdpZHRoID0gMjAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBUb2tlbiBFcnJvciBIYW5kbGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5FcnJvcnMubGVuZ3RoID4gMCAmJiBoYW5kb2ZmQ29uZmlnLnNob3dUb2tlbnMgJiYgdG9rZW5GcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGlmaWVkTGludEVycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRMaW50RXJyb3JzID0gdG9rZW5FcnJvcnMubWFwKGVycm9yID0+IFtlcnJvciwgJ21pc3NpbmcnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBOb2RlQ3JlYXRvci5hcHBlbmRUb0RhdGFEZXRhaWxzRnJhbWUodG9rZW5GcmFtZSwgbW9kaWZpZWRMaW50RXJyb3JzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUb2tlbiBXYXJuaW5nIEhhbmRsaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbkZyYW1lICYmIHRva2VuV2FybmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGlmaWVkTGludFdhcm5pbmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZExpbnRXYXJuaW5ncyA9IHRva2VuV2FybmluZ3MubWFwKHdhcm5pbmcgPT4gW3dhcm5pbmcsICdtaXNzaW5nJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgTm9kZUNyZWF0b3IuYXBwZW5kVG9EYXRhRGV0YWlsc0ZyYW1lKHRva2VuRnJhbWUsIG1vZGlmaWVkTGludFdhcm5pbmdzLCB7IHI6IDAuNTMsIGc6IDAuMjEsIGI6IDAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhbCBFcnJvciBIYW5kbGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhbEVycm9ycy5sZW5ndGggPiAwICYmIGhhbmRvZmZDb25maWcuc2hvd1Rva2Vucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JGcmFtZSA9IExpbnRNYW5hZ2VyLmdldExpbnRFcnJvckZyYW1lKGdlbmVyYWxFcnJvcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGcmFtZS5uYW1lID0gXCJMaW50IEVycm9yc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGcmFtZS5taW5XaWR0aCA9IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRnJhbWUubWF4V2lkdGggPSAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRGcmFtZS5hcHBlbmRDaGlsZChlcnJvckZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1BhcmVudENvbmF0aW5lck5kb2UgPSBjaGlsZENvbnRhaW5lckZyYW1lO1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBjaGlsZCBmcmFtZSB0byB0aGUgc3BlY2lmaWVkIHBhcmVudCBmcmFtZVxuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoY2hpbGRGcmFtZSk7XG4gICAgICAgICAgICAvLyBBcHBseSBsYXlvdXQgcHJvcGVydGllcyB0byB0aGUgY2hpbGQgZnJhbWVcbiAgICAgICAgICAgIGFwcGx5TGF5b3V0T25IYW5kb2ZmKGNoaWxkRnJhbWUsIExheW91dE9wdGlvbnMuTGF5b3V0TW9kZS5IT1JJWk9OVEFMLCBMYXlvdXRPcHRpb25zLkxheW91dEFsaWduLlNUUkVUQ0gsIExheW91dE9wdGlvbnMuY291bnRlckF4aXNTaXppbmdNb2RlLkFVVE8sIExheW91dE9wdGlvbnMuQ291bnRlckF4aXNBbGlnbkl0ZW1zLk1JTiwgcGFkZGluZyAvIDIsIExheW91dE9wdGlvbnMucHJpbWFyeUF4aXNTaXppbmdNb2RlLkZJWEVEKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWN1cnNpdmVseSBjYWxsIHRoZSBmdW5jdGlvbiBvbiB0aGUgY2hpbGQgbm9kZVxuICAgICAgICBnZXRDaGlsZHJlbkFuZEFwcGVuZChjaGlsZCwgbmV3UGFyZW50Q29uYXRpbmVyTmRvZSwgZnJhbWUsIG1heFdpZHRoLCBsaW50ZWREYXRhLCBkZXB0aCArIDEpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZyYW1lIGZvciBhIGdpdmVuIG5vZGUsIGluY2x1ZGluZyB0aGUgbm9kZSdzIG5hbWUsIGNvcGllZCBub2RlIChpZiBzZWxlY3RlZCksIGFuZCBhbnkgY2hpbGQgbm9kZXMgd2l0aCB0b2tlbnMuXG4gKiBAcGFyYW0gZWxlbWVudCAtIFRoZSBub2RlIGZvciB3aGljaCBhIG5ldyBmcmFtZSBpcyB0byBiZSBjcmVhdGVkLlxuICogQHBhcmFtIGhhbmRvZmZDb25maWcgLSBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgdGhlIGhhbmRvZmYuXG4gKiBAcmV0dXJucyBBIG5ldyBmcmFtZSBjb250YWluaW5nIHRoZSBub2RlJ3MgbmFtZSwgY29waWVkIG5vZGUgKGlmIHNlbGVjdGVkKSwgYW5kIGNoaWxkIG5vZGVzIHdpdGggdG9rZW5zLlxuICovXG5mdW5jdGlvbiBjcmVhdGVIYW5kb2ZmRnJhbWUoZWxlbWVudCkge1xuICAgIC8vIFNldCB0aGUgcGFkZGluZywgY3JlYXRlIGEgbmV3IGZyYW1lLCBhbmQgc2V0IGl0cyBiYWNrZ3JvdW5kc1xuICAgIGNvbnN0IHBhZGRpbmcgPSAyNDtcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubmFtZSA9IFwiSGFuZCBvZmZcIjtcbiAgICBmcmFtZS5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgIC8vIFNldCBhbGlnbm1lbnQgYW5kIGZvbnQgc2V0dGluZ3MgZm9yIHRoZSB0aXRsZSB0ZXh0IG5vZGVcbiAgICAvLyBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiXG4gICAgbGV0IGZvbnROYW1lID0geyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH07XG4gICAgLy8gQ3JlYXRlIGZyYW1lIGZvciB0aXRsZSBhbmQgYXBwZW5kIHRvIG5ldyBmcmFtZVxuICAgIGNvbnN0IHRpdGxlTm9kZSA9IE5vZGVDcmVhdG9yLmdldE5ld1RleHROb2RlKGVsZW1lbnQubmFtZSwgdW5kZWZpbmVkLCBmb250TmFtZSk7XG4gICAgdGl0bGVOb2RlLmZvbnRTaXplID0gQ29uc3RhbnRzLnRpdGxlRm9udFNpemU7XG4gICAgY29uc3QgdGl0bGVGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgdGl0bGVGcmFtZS5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgIGFwcGx5TGF5b3V0T25IYW5kb2ZmKHRpdGxlRnJhbWUsIExheW91dE9wdGlvbnMuTGF5b3V0TW9kZS5IT1JJWk9OVEFMLCBMYXlvdXRPcHRpb25zLkxheW91dEFsaWduLlNUUkVUQ0gsIExheW91dE9wdGlvbnMuY291bnRlckF4aXNTaXppbmdNb2RlLkFVVE8sIExheW91dE9wdGlvbnMuQ291bnRlckF4aXNBbGlnbkl0ZW1zLkNFTlRFUiwgQ29uc3RhbnRzLnBhZGRpbmcxLCBMYXlvdXRPcHRpb25zLnByaW1hcnlBeGlzU2l6aW5nTW9kZS5GSVhFRCk7XG4gICAgdGl0bGVGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZU5vZGUpO1xuICAgIGxldCBzb3VyY2VCdXR0b24gPSBMaW5rTWFuYWdlci5jcmVhdGVCYWNrVG9Tb3VyY2VCdXR0b24oZWxlbWVudCk7XG4gICAgdGl0bGVGcmFtZS5hcHBlbmRDaGlsZChzb3VyY2VCdXR0b24pO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHRpdGxlRnJhbWUpO1xuICAgIC8vIEFwcGVuZCB0aGUgc3BhY2VyIHRvIHRoZSBuZXcgZnJhbWVcbiAgICBjb25zdCBzcGFjZXIgPSBOb2RlQ3JlYXRvci5nZXRWU3BhY2VyKDIpO1xuICAgIHNwYWNlci5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHNwYWNlcik7XG4gICAgbGV0IHBhcmVudEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBwYXJlbnRGcmFtZS5uYW1lID0gXCJQYXJlbnQgZGV0YWlsc1wiO1xuICAgIHBhcmVudEZyYW1lLmJhY2tncm91bmRzID0gW107XG4gICAgYXBwbHlBdXRvTGF5b3V0KHBhcmVudEZyYW1lLCBwYWRkaW5nLCBcIkhPUklaT05UQUxcIik7XG4gICAgY29uc3QgY29waWVkTm9kZSA9IGVsZW1lbnQuY2xvbmUoKTtcbiAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGVsZW1lbnRDb250YWluZXJGcmFtZS5uYW1lID0gXCJQYXJlbnQgQ29udGFpbmVyXCI7XG4gICAgY29uc3QgZWxlbWVudENvbnRhaW5lckNvbnRhaW5lckZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBlbGVtZW50Q29udGFpbmVyQ29udGFpbmVyRnJhbWUubmFtZSA9IFwiUGFyZW50IFdyYXBwZXJcIjtcbiAgICBhcHBseUF1dG9MYXlvdXQoZWxlbWVudENvbnRhaW5lckNvbnRhaW5lckZyYW1lLCAwLCBcIkhPUklaT05UQUxcIik7XG4gICAgZWxlbWVudENvbnRhaW5lckNvbnRhaW5lckZyYW1lLmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXJGcmFtZSk7XG4gICAgZWxlbWVudENvbnRhaW5lckZyYW1lLmFwcGVuZENoaWxkKGNvcGllZE5vZGUpO1xuICAgIGVsZW1lbnRDb250YWluZXJGcmFtZS5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgIGVsZW1lbnRDb250YWluZXJDb250YWluZXJGcmFtZS5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgIGFwcGx5QXV0b0xheW91dChlbGVtZW50Q29udGFpbmVyRnJhbWUsIDAsIFwiSE9SSVpPTlRBTFwiKTtcbiAgICBlbGVtZW50Q29udGFpbmVyQ29udGFpbmVyRnJhbWUubWluV2lkdGggPSBFTEVNRU5UX01JTl9XSURUSDtcbiAgICBwYXJlbnRGcmFtZS5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyQ29udGFpbmVyRnJhbWUpO1xuICAgIC8vIElmIHRoZSBjdXJyZW50IG5vZGUgaGFzIHRva2VucywgY3JlYXRlIGEgbmV3IGZyYW1lIHRvIGRpc3BsYXkgdGhlbVxuICAgIGNvbnN0IHBhcmVudFRva2VucyA9IFV0aWxzLmdldFRva2Vuc09uTm9kZShlbGVtZW50KTtcbiAgICBpZiAoaGFuZG9mZkNvbmZpZy5zaG93VG9rZW5zICYmIHBhcmVudFRva2Vucy5sZW5ndGggIT0gMCkge1xuICAgICAgICBjb25zdCB0b2tlbkZyYW1lID0gTm9kZUNyZWF0b3IuZ2V0RGF0YURldGFpbHNGcmFtZShcIlRva2Vuc1wiLCBwYXJlbnRUb2tlbnMpO1xuICAgICAgICB0b2tlbkZyYW1lLm5hbWUgPSBcIlRva2VuIGRldGFpbHNcIjtcbiAgICAgICAgcGFyZW50RnJhbWUuYXBwZW5kQ2hpbGQodG9rZW5GcmFtZSk7XG4gICAgICAgIHRva2VuRnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgdG9rZW5GcmFtZS5taW5XaWR0aCA9IDQwMDtcbiAgICAgICAgdG9rZW5GcmFtZS5tYXhXaWR0aCA9IDEwMDA7XG4gICAgfVxuICAgIC8vQWRkIGxvY2FsIHN0eWxlcyBub2RlIGlmIG5lZWRlZFxuICAgIGlmIChoYW5kb2ZmQ29uZmlnLnNob3dTdHlsZXMgJiYgU3R5bGVNYW5hZ2VyLmlzU3R5bGVQcmVzZW50KGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlRnJhbWUgPSBTdHlsZU1hbmFnZXIuZ2V0U3R5bGVGcmFtZShlbGVtZW50KTtcbiAgICAgICAgcGFyZW50RnJhbWUuYXBwZW5kQ2hpbGQoc3R5bGVGcmFtZSk7XG4gICAgfVxuICAgIC8vQWRkIHZhcmlhYmxlcyBub2RlIGlmIG5lZWRlZFxuICAgIGlmIChoYW5kb2ZmQ29uZmlnLnNob3dWYXJpYWJsZXMgJiYgVmFyaWFibGVzTWFuYWdlci5pc1ZhcmlhYmxlUHJlc2VudChlbGVtZW50KSkge1xuICAgICAgICBjb25zdCB2YXJzRnJhbWUgPSBWYXJpYWJsZXNNYW5hZ2VyLmdldFZhcmlhYmxlc0ZyYW1lKGVsZW1lbnQpO1xuICAgICAgICBwYXJlbnRGcmFtZS5hcHBlbmRDaGlsZCh2YXJzRnJhbWUpO1xuICAgIH1cbiAgICAvL0FkZCBkZXRhaWxzIGZyYW1lXG4gICAgaWYgKGhhbmRvZmZDb25maWcuc2hvd1Jhd0RhdGEpIHtcbiAgICAgICAgY29uc3Qgc2l6ZUZyYW1lID0gTm9kZUNyZWF0b3IuZ2V0U2l6ZUZyYW1lKGVsZW1lbnQpO1xuICAgICAgICBwYXJlbnRGcmFtZS5hcHBlbmRDaGlsZChzaXplRnJhbWUpO1xuICAgIH1cbiAgICBmcmFtZS5hcHBlbmRDaGlsZChwYXJlbnRGcmFtZSk7XG4gICAgLy8gQWRkIHZhcmlhYmxlcyB0byBjYWxjdWxhdGUgbGludCBwZXJjZW50YWdlXG4gICAgY29uc3QgbGludGVkRGF0YSA9IHsgcGFzc2VkTGludDogMCwgdG90YWxMaW50OiAwIH07XG4gICAgLy8gUmVjdXJzaXZlbHkgdHJhdmVyc2UgdGhlIGNoaWxkIG5vZGVzIG9mIHRoZSBjdXJyZW50IG5vZGUsIGNyZWF0aW5nIGZyYW1lcyBmb3IgdGhvc2Ugd2l0aCB0b2tlbnNcbiAgICBnZXRDaGlsZHJlbkFuZEFwcGVuZChlbGVtZW50LCBlbGVtZW50Q29udGFpbmVyRnJhbWUsIGZyYW1lLCBlbGVtZW50LndpZHRoLCBsaW50ZWREYXRhKTtcbiAgICBsZXQgbGlua0J1dHRvbiA9IExpbmtNYW5hZ2VyLmNyZWF0ZUJhY2tUb1NvdXJjZUJ1dHRvbihlbGVtZW50KTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChsaW5rQnV0dG9uKTtcbiAgICAvLyBBZGQgdGhlIGxpbnQgcGVyY2VudGFnZSBpbmZvcm1hdGlvbiB0byB0aGUgcGFyZW50IG5vZGUncyBoYW5kb2ZmIGZyYW1lXG4gICAgaWYgKGxpbnRlZERhdGEudG90YWxMaW50ID4gMCAmJiBoYW5kb2ZmQ29uZmlnLnNob3dMaW50RGF0YSkge1xuICAgICAgICBjb25zdCBwYXNzZWRQZXJjZW50YWdlID0gVXRpbHMuZ2V0Um91bmRlZERlY2ltYWwobGludGVkRGF0YS5wYXNzZWRMaW50ICogMTAwIC8gbGludGVkRGF0YS50b3RhbExpbnQpO1xuICAgICAgICBjb25zdCBsaW50UGVyY2VudGFnZVRleHQgPSBgJHtwYXNzZWRQZXJjZW50YWdlfSUgUGFzc2VkYDtcbiAgICAgICAgY29uc3QgbGludFBlcmNlbnRhZ2VOb2RlID0gTm9kZUNyZWF0b3IuZ2V0TmV3VGV4dE5vZGUobGludFBlcmNlbnRhZ2VUZXh0KTtcbiAgICAgICAgdGl0bGVGcmFtZS5hcHBlbmRDaGlsZChsaW50UGVyY2VudGFnZU5vZGUpO1xuICAgICAgICBpZiAocGFzc2VkUGVyY2VudGFnZSA9PSAxMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbnRQZXJjZW50YWdlTm9kZSA9IE5vZGVDcmVhdG9yLmdldE5ld1RleHROb2RlKGBSRUFEWSBGT1IgREVWYCwgeyByOiAwLCBnOiAwLjM4LCBiOiAwIH0pO1xuICAgICAgICAgICAgbGludFBlcmNlbnRhZ2VOb2RlLmxheW91dEFsaWduID0gXCJNQVhcIjtcbiAgICAgICAgICAgIHRpdGxlRnJhbWUuYXBwZW5kQ2hpbGQobGludFBlcmNlbnRhZ2VOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBcHBseSBhdXRvLWxheW91dCBhbmQgc3BhY2luZyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGZyYW1lXG4gICAgYXBwbHlBdXRvTGF5b3V0KGZyYW1lLCBwYWRkaW5nLCBcIlZFUlRJQ0FMXCIpO1xuICAgIHRpdGxlTm9kZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gcGFkZGluZztcbiAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IGNyZWF0ZWQgZnJhbWVcbiAgICByZXR1cm4gZnJhbWU7XG59XG4vKipcbiAqIEdlbmVyYXRlcyBhIGhhbmRvZmYgdmlldyBmb3IgdGhlIHNlbGVjdGVkIG9yIGFsbCB0b3AtbGV2ZWwgZnJhbWVzIG9uIHRoZSBjdXJyZW50IHBhZ2UuXG4gKiBAcGFyYW0gaGFuZG9mZkNvbmZpZyAtIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgaGFuZG9mZi5cbiAqIEByZXR1cm5zIE5vbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUhhbmRvZmYobG9jYWxIYW5kZmZDb25maWcpIHtcbiAgICAoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBBc3NpZ24gdGhlIHBhc3NlZCBjb25maWd1cmF0aW9uIHRvIGdsb2JhbCB2YXJpYWJsZVxuICAgICAgICBoYW5kb2ZmQ29uZmlnID0gbG9jYWxIYW5kZmZDb25maWc7XG4gICAgICAgIC8vIExvYWQgdGhlIHJlcXVpcmVkIGZvbnRzXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIkJvbGRcIiB9KTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgcmVuZGVyIGxpc3RcbiAgICAgICAgbGV0IGhhbmRPZmZSZW5kZXJMaXN0ID0gW107XG4gICAgICAgIC8vIERldGVybWluZSB3aGljaCBmcmFtZXMgdG8gZ2VuZXJhdGUgaGFuZG9mZiB2aWV3cyBmb3JcbiAgICAgICAgaWYgKGhhbmRvZmZDb25maWcuZ2VuZXJhdGVGb3JBbGwpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGhhbmRvZmYgdmlld3MgZm9yIGFsbCB0b3AtbGV2ZWwgZnJhbWVzIG9uIHRoZSBwYWdlXG4gICAgICAgICAgICBoYW5kT2ZmUmVuZGVyTGlzdCA9IGZpbHRlclRvcExldmVsRnJhbWVzKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGhhbmRvZmYgdmlld3MgZm9yIHRoZSBzZWxlY3RlZCBmcmFtZXNcbiAgICAgICAgICAgIGhhbmRPZmZSZW5kZXJMaXN0ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGlmeSB0aGUgdXNlciBpZiBubyBlbGVtZW50cyBhcmUgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGhhbmRPZmZSZW5kZXJMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJQbGVhc2Ugc2VsZWN0IGFuIGVsZW1lbnQgb24gdGhlIGNhbnZhcy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhhbmRvZmZQYWdlO1xuICAgICAgICAvLyBDaGVjayBpZiBhIGhhbmRvZmYgcGFnZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBpZiAoaGFuZG9mZkNvbmZpZy5oYW5kT2ZmT25OZXdQYWdlKSB7XG4gICAgICAgICAgICBoYW5kb2ZmUGFnZSA9IGZpZ21hLnJvb3QuZmluZENoaWxkKG5vZGUgPT4gbm9kZS50eXBlID09PSBcIlBBR0VcIiAmJiBub2RlLm5hbWUgPT09IGAke2ZpZ21hLmN1cnJlbnRQYWdlLm5hbWV9LUNvbmNvcmRgKTtcbiAgICAgICAgICAgIC8vIElmIGhhbmRvZmYgcGFnZSBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICBpZiAoaGFuZG9mZlBhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBoYW5kb2ZmUGFnZSA9IGZpZ21hLmNyZWF0ZVBhZ2UoKTtcbiAgICAgICAgICAgICAgICBoYW5kb2ZmUGFnZS5uYW1lID0gYCR7ZmlnbWEuY3VycmVudFBhZ2UubmFtZX0tQ29uY29yZGA7XG4gICAgICAgICAgICAgICAgaGFuZG9mZlBhZ2UuYmFja2dyb3VuZHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjk2LCBnOiAwLjk2LCBiOiAwLjk2IH0gfV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmaWdtYS5yb290LmNoaWxkcmVuLmluZGV4T2YoZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnJvb3QuaW5zZXJ0Q2hpbGQoaW5kZXggKyAxLCBoYW5kb2ZmUGFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kb2ZmUGFnZSA9IGhhbmRvZmZQYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFuZG9mZlBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBzZWxlY3RlZCBvciB0b3AtbGV2ZWwgZnJhbWUgYW5kIGdlbmVyYXRlIGhhbmRvZmZcbiAgICAgICAgaGFuZE9mZlJlbmRlckxpc3QuZm9yRWFjaCgoc2VsZWN0ZWRFbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNMYXN0ID0gaW5kZXggPT09IGhhbmRPZmZSZW5kZXJMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBFTEVNRU5UX01JTl9XSURUSCA9IHNlbGVjdGVkRWxlbWVudC53aWR0aDtcbiAgICAgICAgICAgIGxldCBmcmFtZU5vZGUgPSBzZWxlY3RlZEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoZnJhbWVOb2RlKSB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVIYW5kb2ZmRm9yTm9kZShmcmFtZU5vZGUsIGlzTGFzdCwgaGFuZG9mZlBhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEubm90aWZ5KGAke3NlbGVjdGVkRWxlbWVudC5uYW1lfSBpcyBub3QgYSBmcmFtZSBub2RlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBOb3RpZnkgdGhlIHVzZXIgdGhhdCBoYW5kb2ZmIHZpZXdzIGhhdmUgYmVlbiBnZW5lcmF0ZWRcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiSGFuZE9mZiBnZW5lcmF0ZWRcIik7XG4gICAgICAgIC8vIENsb3NlIHRoZSBwbHVnaW5cbiAgICAgICAgLy8gZmlnbWEuY2xvc2VQbHVnaW4oKVxuICAgIH0pKSgpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZXMgaGFuZG9mZiBmb3IgYSBzZWxlY3RlZCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RlZEVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBnZW5lcmF0ZSBhIGhhbmRvZmYgZm9yLlxuICogQHBhcmFtIGhhbmRvZmZDb25maWcgLSBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgdGhlIGhhbmRvZmYuXG4gKiBAcGFyYW0gaXNMYXN0IC0gV2hldGhlciBvciBub3QgdGhlIHNlbGVjdGVkIGVsZW1lbnQgaXMgdGhlIGxhc3Qgb25lIGJlaW5nIHByb2Nlc3NlZC5cbiAqXG4gKiBAcmV0dXJucyBOb25lLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUhhbmRvZmZGb3JOb2RlKHNlbGVjdGVkRWxlbWVudCwgaXNMYXN0LCBoYW5kb2ZmUGFnZSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAvLyBJZiB0aGUgY3VycmVudCBub2RlIGhhcyBub3QgYWxyZWFkeSBiZWVuIG5hbWVkIGZvciBoYW5kb2ZmIHB1cnBvc2VzXG4gICAgaWYgKCFzZWxlY3RlZEVsZW1lbnQubmFtZS5zdGFydHNXaXRoKCdDbkNkLScpICYmIHNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBmcmFtZSBjb250YWluaW5nIHRoaXMgbm9kZSBhbmQgaXRzIGNoaWxkIG5vZGVzXG4gICAgICAgIGxldCBmcmFtZSA9IGNyZWF0ZUhhbmRvZmZGcmFtZShzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgICAvLyBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGZyYW1lXG4gICAgICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IENvbnN0YW50cy5iYWNrZ3JvdW5kQ29sb3IgfV07XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGFuIGV4aXN0aW5nIGhhbmRvZmYgdmlldyB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhpcyBub2RlXG4gICAgICAgIGNvbnN0IG9sZEhhbmRPZmYgPSBmaW5kT2xkTm9kZShzZWxlY3RlZEVsZW1lbnQsIGhhbmRvZmZQYWdlLCBcIkhhbmRvZmZcIik7XG4gICAgICAgIC8vIElmIGFuIGV4aXN0aW5nIGhhbmRvZmYgdmlldyB3YXMgZm91bmQgYW5kIHdlIGFyZSB1cGRhdGluZyBwcmV2aW91cyBoYW5kb2ZmIHZpZXdzXG4gICAgICAgIGlmIChoYW5kb2ZmQ29uZmlnLnVwZGF0ZVByZXZpb3VzSGFuZG9mZiAmJiBvbGRIYW5kT2ZmKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRoZSBoYW5kb2ZmIHZpZXcgdG8gdGhlIHNhbWUgcG9zaXRpb24gYXMgdGhlIHByZXZpb3VzIG9uZSwgdGhlbiByZW1vdmUgdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGZyYW1lLnggPSBvbGRIYW5kT2ZmLng7XG4gICAgICAgICAgICBmcmFtZS55ID0gb2xkSGFuZE9mZi55O1xuICAgICAgICAgICAgb2xkSGFuZE9mZi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY3JlYXRlIGEgbmV3IG5hbWUgZm9yIHRoaXMgaGFuZG9mZiB2aWV3IGFuZCBhZGp1c3QgaXRzIHBvc2l0aW9uXG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IFV0aWxzLmZpbmRFbXB0eVNwYWNlKGhhbmRvZmZQYWdlKTtcbiAgICAgICAgICAgIGZyYW1lLnggPSBzcGFjZS54ICsgNTA7XG4gICAgICAgICAgICBmcmFtZS55ID0gc3BhY2UueTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIG5hbWUgb2YgdGhlIGhhbmRvZmYgdmlldyB0byBhIHNwZWNpZmljIHN0cmluZyB3aXRoIHRoZSBub2RlIElEXG4gICAgICAgIGZyYW1lLm5hbWUgPSBnZXRIYW5kb2ZmTmFtZShzZWxlY3RlZEVsZW1lbnQuaWQsIFwiSGFuZG9mZlwiKTtcbiAgICAgICAgLy8gQ3JlYXRlIGxpbmsgYnV0dG9uXG4gICAgICAgIGxldCBvbGRCdXR0b24gPSBmaW5kT2xkQnV0dG9uKHNlbGVjdGVkRWxlbWVudC5pZCwgXCJIYW5kb2ZmXCIpO1xuICAgICAgICBpZiAob2xkQnV0dG9uKSB7XG4gICAgICAgICAgICBMaW5rTWFuYWdlci51cGRhdGVIYW5kb2ZmQnV0dG9uKG9sZEJ1dHRvbiwgZnJhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IExpbmtNYW5hZ2VyLmNyZWF0ZUhhbmRvZmZCdXR0b24oZnJhbWUsIHNlbGVjdGVkRWxlbWVudC5pZCk7XG4gICAgICAgICAgICBsZXQgeCA9IChfYiA9IChfYSA9IHNlbGVjdGVkRWxlbWVudC5hYnNvbHV0ZUJvdW5kaW5nQm94KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EueCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMDtcbiAgICAgICAgICAgIGxldCB5ID0gc2VsZWN0ZWRFbGVtZW50LmhlaWdodCArIDQwICsgKChfZCA9IChfYyA9IHNlbGVjdGVkRWxlbWVudC5hYnNvbHV0ZUJvdW5kaW5nQm94KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MueSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMCk7XG4gICAgICAgICAgICBidXR0b24ueCA9IHg7XG4gICAgICAgICAgICBidXR0b24ueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGhhbmRvZmYgdG8gaGFuZG9mZiBwYWdlXG4gICAgICAgIGhhbmRvZmZQYWdlLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAgICAgLy8gU2Nyb2xsIGFuZCB6b29tIGludG8gdGhlIG5ld2x5IGNyZWF0ZWQgaGFuZG9mZiB2aWV3IGlmIHRoaXMgaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgcmVuZGVyIGxpc3RcbiAgICAgICAgaWYgKGlzTGFzdCkge1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBoYW5kb2ZmUGFnZTtcbiAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbZnJhbWVdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxuICogQXBwbGllcyBhdXRvIGxheW91dCB0byBhIGdpdmVuIGZyYW1lIG5vZGUgd2l0aCB0aGUgc3BlY2lmaWVkIHBhZGRpbmcgYW5kIGxheW91dCB0eXBlLlxuICogQHBhcmFtIGZyYW1lIC0gVGhlIGZyYW1lIG5vZGUgdG8gYXBwbHkgYXV0byBsYXlvdXQgdG8uXG4gKiBAcGFyYW0gcGFkZGluZyAtIFRoZSBwYWRkaW5nIHZhbHVlIGZvciB0aGUgYXV0byBsYXlvdXQuXG4gKiBAcGFyYW0gbGF5b3V0IC0gVGhlIGxheW91dCB0eXBlLCBlaXRoZXIgXCJWRVJUSUNBTFwiIG9yIFwiSE9SSVpPTlRBTFwiLlxuICogQHJldHVybnMgTm9uZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5QXV0b0xheW91dChmcmFtZSwgcGFkZGluZywgbGF5b3V0KSB7XG4gICAgLy8gU2V0IHRoZSBsYXlvdXQgbW9kZSwgcGFkZGluZywgaXRlbSBzcGFjaW5nLCBhbmQgY291bnRlciBheGlzIHNpemluZyBtb2RlIGZvciB0aGUgZnJhbWVcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gbGF5b3V0OyAvLyBTZXQgbGF5b3V0IG1vZGUgdG8gVkVSVElDQUwgb3IgSE9SSVpPTlRBTFxuICAgIGZyYW1lLnBhZGRpbmdUb3AgPSBwYWRkaW5nO1xuICAgIGZyYW1lLnBhZGRpbmdSaWdodCA9IHBhZGRpbmc7XG4gICAgZnJhbWUucGFkZGluZ0JvdHRvbSA9IHBhZGRpbmc7XG4gICAgZnJhbWUucGFkZGluZ0xlZnQgPSBwYWRkaW5nO1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gcGFkZGluZyAvIDI7XG4gICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlIb3Jpem9udGFsQXV0b2xheW91dChmcmFtZSwgcHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCIsIGNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiLCBsYXlvdXRXcmFwID0gXCJOT19XUkFQXCIsIHByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCIsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCIsIGNvdW50ZXJBeGlzQWxpZ25Db250ZW50ID0gXCJBVVRPXCIsIHBhZGRpbmdUb3AgPSAxMCwgcGFkZGluZ0JvdHRvbSA9IDEwLCBwYWRkaW5nTGVmdCA9IDEwLCBwYWRkaW5nUmlnaHQgPSAxMCwgaXRlbVNwYWNpbmcgPSAxMCwgY291bnRlckF4aXNTcGFjaW5nID0gMTAsIGl0ZW1SZXZlcnNlWkluZGV4ID0gZmFsc2UpIHtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gcHJpbWFyeUF4aXNTaXppbmdNb2RlO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IGNvdW50ZXJBeGlzU2l6aW5nTW9kZTtcbiAgICBmcmFtZS5sYXlvdXRXcmFwID0gbGF5b3V0V3JhcDtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBwcmltYXJ5QXhpc0FsaWduSXRlbXM7XG4gICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gY291bnRlckF4aXNBbGlnbkl0ZW1zO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25Db250ZW50ID0gY291bnRlckF4aXNBbGlnbkNvbnRlbnQ7XG4gICAgZnJhbWUucGFkZGluZ1RvcCA9IHBhZGRpbmdUb3A7XG4gICAgZnJhbWUucGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdCb3R0b207XG4gICAgZnJhbWUucGFkZGluZ0xlZnQgPSBwYWRkaW5nTGVmdDtcbiAgICBmcmFtZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nUmlnaHQ7XG4gICAgZnJhbWUuaXRlbVNwYWNpbmcgPSBpdGVtU3BhY2luZztcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NwYWNpbmcgPSBjb3VudGVyQXhpc1NwYWNpbmc7XG4gICAgZnJhbWUuaXRlbVJldmVyc2VaSW5kZXggPSBpdGVtUmV2ZXJzZVpJbmRleDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVZlcnRpY2FsQXV0b2xheW91dChmcmFtZSwgcHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCIsIGNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiLCBsYXlvdXRXcmFwID0gXCJOT19XUkFQXCIsIHByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCIsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCIsIGNvdW50ZXJBeGlzQWxpZ25Db250ZW50ID0gXCJBVVRPXCIsIHBhZGRpbmdUb3AgPSAxMCwgcGFkZGluZ0JvdHRvbSA9IDEwLCBwYWRkaW5nTGVmdCA9IDEwLCBwYWRkaW5nUmlnaHQgPSAxMCwgaXRlbVNwYWNpbmcgPSAxMCwgY291bnRlckF4aXNTcGFjaW5nID0gMTAsIGl0ZW1SZXZlcnNlWkluZGV4ID0gZmFsc2UpIHtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IHByaW1hcnlBeGlzU2l6aW5nTW9kZTtcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBjb3VudGVyQXhpc1NpemluZ01vZGU7XG4gICAgZnJhbWUubGF5b3V0V3JhcCA9IGxheW91dFdyYXA7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gcHJpbWFyeUF4aXNBbGlnbkl0ZW1zO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IGNvdW50ZXJBeGlzQWxpZ25JdGVtcztcbiAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduQ29udGVudCA9IGNvdW50ZXJBeGlzQWxpZ25Db250ZW50O1xuICAgIGZyYW1lLnBhZGRpbmdUb3AgPSBwYWRkaW5nVG9wO1xuICAgIGZyYW1lLnBhZGRpbmdCb3R0b20gPSBwYWRkaW5nQm90dG9tO1xuICAgIGZyYW1lLnBhZGRpbmdMZWZ0ID0gcGFkZGluZ0xlZnQ7XG4gICAgZnJhbWUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZ1JpZ2h0O1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gaXRlbVNwYWNpbmc7XG4gICAgZnJhbWUuY291bnRlckF4aXNTcGFjaW5nID0gY291bnRlckF4aXNTcGFjaW5nO1xuICAgIGZyYW1lLml0ZW1SZXZlcnNlWkluZGV4ID0gaXRlbVJldmVyc2VaSW5kZXg7XG59XG4iLCJpbXBvcnQgKiBhcyBOb2RlQ3JlYXRvciBmcm9tIFwiLi9ub2RlX21hbmFnZXJcIjtcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFwcGx5QXV0b0xheW91dCB9IGZyb20gXCIuL2xheW91dGluZ1wiO1xuaW1wb3J0IHsgYXBwbHlBdXRvTGF5b3V0SG9yaXpvbnRhbCB9IGZyb20gXCIuL2ZyYW1lX2dlbmVyYXRvclwiO1xuZnVuY3Rpb24gY3JlYXRlTGlua0J1dHRvbih0ZXh0LCBmb250U2l6ZSwgZGVzdGluYXRpb24pIHtcbiAgICBsZXQgYnV0dG9uID0gTm9kZUNyZWF0b3IuZ2V0TmV3VGV4dE5vZGUodGV4dCk7XG4gICAgYnV0dG9uLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgYnV0dG9uLmh5cGVybGluayA9IHsgdHlwZTogXCJOT0RFXCIsIHZhbHVlOiBkZXN0aW5hdGlvbi5pZCB9O1xuICAgIGxldCBidXR0b25GcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgYnV0dG9uRnJhbWUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICByZXR1cm4gYnV0dG9uRnJhbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGFuZG9mZkJ1dHRvbihoYW5kT2ZmTm9kZSwgc291cmNlTm9kZUlkKSB7XG4gICAgbGV0IGZyYW1lID0gY3JlYXRlTGlua0J1dHRvbihcIkdvIHRvIEhhbmRvZmYg4oaSXCIsIENvbnN0YW50cy50aXRsZUZvbnRTaXplLCBoYW5kT2ZmTm9kZSk7XG4gICAgZnJhbWUubmFtZSA9IGBIYW5kb2ZmIGJ1dHRvbjogJHtzb3VyY2VOb2RlSWR9YDtcbiAgICBhcHBseUF1dG9MYXlvdXQoZnJhbWUsIDIsIFwiSE9SSVpPTlRBTFwiKTtcbiAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSA0O1xuICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IENvbnN0YW50cy5kYXJrQmFja2dyb3VuZENvbG9yIH1dO1xuICAgIHJldHVybiBmcmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIYW5kb2ZmQnV0dG9uKG9sZEJ1dHRvbiwgbmV3SGFuZE9mZikge1xuICAgIGxldCBidXR0b24gPSBvbGRCdXR0b24uY2hpbGRyZW5bMF07XG4gICAgYnV0dG9uLmh5cGVybGluayA9IHsgdHlwZTogXCJOT0RFXCIsIHZhbHVlOiBuZXdIYW5kT2ZmLmlkIH07XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGludFJlcG9ydEJ1dHRvbihyZXBvcnROb2RlLCBzb3VyY2VOb2RlSWQsIHBhc3NlZFBlcmNlbnRhZ2UpIHtcbiAgICBsZXQgZnJhbWUgPSBjcmVhdGVMaW5rQnV0dG9uKFwiR28gdG8gTGludCBSZXBvcnQg4oaSXCIsIENvbnN0YW50cy50aXRsZUZvbnRTaXplLCByZXBvcnROb2RlKTtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gTm9kZUNyZWF0b3IuZ2V0TmV3VGV4dE5vZGUoYCR7cGFzc2VkUGVyY2VudGFnZX0lYCwgeyByOiAwLjQ2LCBnOiAwLjM4LCBiOiAwIH0sIHVuZGVmaW5lZCwgQ29uc3RhbnRzLnRpdGxlRm9udFNpemUpO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2UpO1xuICAgIGFwcGx5QXV0b0xheW91dEhvcml6b250YWwoZnJhbWUsIDEwLCBcIkhPUklaT05UQUxcIik7XG4gICAgZnJhbWUubmFtZSA9IGBMaW50IFJlcG9ydCBidXR0b246ICR7c291cmNlTm9kZUlkfWA7XG4gICAgYXBwbHlBdXRvTGF5b3V0KGZyYW1lLCAyLCBcIkhPUklaT05UQUxcIik7XG4gICAgZnJhbWUuY29ybmVyUmFkaXVzID0gNDtcbiAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiBDb25zdGFudHMuZGFya0JhY2tncm91bmRDb2xvciB9XTtcbiAgICByZXR1cm4gZnJhbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGludFJlcG9ydEJ1dHRvbihvbGRCdXR0b24sIG5ld1JlcG9ydCkge1xuICAgIGxldCBidXR0b24gPSBvbGRCdXR0b24uY2hpbGRyZW5bMF07XG4gICAgYnV0dG9uLmh5cGVybGluayA9IHsgdHlwZTogXCJOT0RFXCIsIHZhbHVlOiBuZXdSZXBvcnQuaWQgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYWNrVG9Tb3VyY2VCdXR0b24oc291cmNlTm9kZSkge1xuICAgIGxldCBmcmFtZSA9IGNyZWF0ZUxpbmtCdXR0b24oXCLihpAgQmFjayB0byBTb3VjZVwiLCBDb25zdGFudHMudGl0bGVGb250U2l6ZSwgc291cmNlTm9kZSk7XG4gICAgZnJhbWUubmFtZSA9IFwiU291cmNlIGJ1dHRvblwiO1xuICAgIGFwcGx5QXV0b0xheW91dChmcmFtZSwgMiwgXCJIT1JJWk9OVEFMXCIpO1xuICAgIGZyYW1lLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogQ29uc3RhbnRzLmRhcmtCYWNrZ3JvdW5kQ29sb3IgfV07XG4gICAgcmV0dXJuIGZyYW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcmVudEJ1dHRvbihwYXJlbnRDb250YWluZXJOb2RlKSB7XG4gICAgbGV0IGZyYW1lID0gY3JlYXRlTGlua0J1dHRvbihcIuKGkVwiLCBDb25zdGFudHMudGl0bGUzRm9udFNpemUsIHBhcmVudENvbnRhaW5lck5vZGUpO1xuICAgIGZyYW1lLm5hbWUgPSBcIlBhcmVudCBidXR0b25cIjtcbiAgICBhcHBseUF1dG9MYXlvdXQoZnJhbWUsIDAsIFwiSE9SSVpPTlRBTFwiKTtcbiAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSA0O1xuICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IENvbnN0YW50cy5kYXJrQmFja2dyb3VuZENvbG9yIH1dO1xuICAgIHJldHVybiBmcmFtZTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYXBwbHlBdXRvTGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0aW5nXCI7XG5pbXBvcnQgKiBhcyBOb2RlQ3JlYXRvciBmcm9tIFwiLi9ub2RlX21hbmFnZXJcIjtcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBMaW50TWFuYWdlciBmcm9tIFwiLi9saW50X21hbmFnZXJcIjtcbmltcG9ydCAqIGFzIExpbmtNYW5hZ2VyIGZyb20gXCIuL2xpbmtfbWFuYWdlclwiO1xuaW1wb3J0ICogYXMgSGFuZE9mZk1hbmFnZXIgZnJvbSBcIi4vaGFuZG9mZl9tYW5hZ2VyXCI7XG5pbXBvcnQgeyB2YWxpZEZpbGwgfSBmcm9tIFwiLi9ydWxlcy9saW50X2ZpbGxcIjtcbmxldCBFTEVNRU5UX01JTl9XSURUSCA9IDM2MDtcbi8vIEluaXRpYWxpc2luZyBnbG9iYWwgc3RhdGljIHJlcG9ydENvbmZpZyBhbmQgZmV0Y2hpbmcgdG9rZW4gSlNPTnMgXG5sZXQgcmVwb3J0Q29uZmlnO1xuZXhwb3J0IGxldCBzZW1hbnRpY0pTT047XG5leHBvcnQgbGV0IGNvbXBvbmVudEpTT047XG4oKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgc2VtYW50aWNKU09OID0geWllbGQgTGludE1hbmFnZXIuTmV0d29ya0NhbGwuZmV0Y2hKU09OKFwiU2VtYW50aWNcIik7XG4gICAgY29tcG9uZW50SlNPTiA9IHlpZWxkIExpbnRNYW5hZ2VyLk5ldHdvcmtDYWxsLmZldGNoSlNPTihcIkNvbXBvbmVudFwiKTtcbn0pKSgpO1xuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZXMgYSBwYXJlbnQgbm9kZSBhbmQgaXRzIGNoaWxkcmVuIHRvIGFwcGVuZFxuICogdGhlbSB0byBhIHByb3ZpZGVkIGZyYW1lIGFuZCB0aGVpciByZXNwZWN0aXZlIGxpbnQgcmVwb3J0cy5cbiAqXG4gKiBAcGFyYW0gcGFyZW50IC0gVGhlIHBhcmVudCBub2RlIHRvIHRyYXZlcnNlLlxuICogQHBhcmFtIGZyYW1lIC0gVGhlIGZyYW1lIHRvIGFwcGVuZCB0aGUgbm9kZXMgdG8uXG4gKiBAcGFyYW0gcmVwb3J0Q29uZmlnIC0gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBsaW50IHJlcG9ydC5cbiAqIEBwYXJhbSBkZXB0aCAtIFRoZSBkZXB0aCBvZiB0aGUgcmVjdXJzaW9uLlxuICpcbiAqIEByZXR1cm5zIE5vbmUuXG4gKi9cbmZ1bmN0aW9uIGdldENoaWxkcmVuQW5kQXBwZW5kKHBhcmVudCwgcGFyZW50Q29udGFpbmVyTm9kZSwgZnJhbWUsIG1heFdpZHRoLCBsaW50ZWREYXRhLCBkZXB0aCA9IDApIHtcbiAgICAvLyBJZiB0aGUgcGFyZW50IG5vZGUgaXMgYSBjb21wb25lbnQgYW5kIHRoZSBmbGFnIGlzIHNldCB0byBza2lwIGl0cyBjaGlsZHJlbiB0cmF2ZXJzYWwgYW5kIGlzIG5vdCB0aGUgdG9wIG5vZGUgb2Ygc2VsZWN0ZWQgZnJhbWUgb3IgaWYgaXQgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgY3VycmVudCBub2RlIHR5cGVcbiAgICBpZiAoKFV0aWxzLmlzQ29tcG9uZW50KHBhcmVudCkgJiYgcmVwb3J0Q29uZmlnLnNraXBDb21wb25lbnRDaGlsZHJlblRyYXZlcnNhbCkgJiYgIVV0aWxzLmlzVG9wTm9kZShwYXJlbnQpIHx8ICFVdGlscy5pc09mVHlwZVBhcmVudE5vZGUocGFyZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENhc3QgdGhlIG5vZGUgYXMgUGFyZW50Tm9kZSBhbmQgZ2V0IGl0cyBjaGlsZHJlblxuICAgIGNvbnN0IGNvbXAgPSBwYXJlbnQ7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjb21wLmNoaWxkcmVuO1xuICAgIGNvbnN0IHBhZGRpbmcgPSAyMDtcbiAgICBsZXQgbmV3UGFyZW50Q29uYXRpbmVyTmRvZSA9IHBhcmVudENvbnRhaW5lck5vZGU7XG4gICAgLy8gRm9yIGVhY2ggY2hpbGQgaW4gdGhlIHBhcmVudCBub2RlXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKCFjaGlsZC52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgbGludCBvbiBjaGlsZFxuICAgICAgICB2YXIgZ2VuZXJhbEVycm9ycyA9IFtdO1xuICAgICAgICB2YXIgdG9rZW5FcnJvcnMgPSBbXTtcbiAgICAgICAgdmFyIHRva2VuV2FybmluZ3MgPSBbXTtcbiAgICAgICAgdmFyIGxpbnRJbmRpY2F0b3IgPSBMaW50TWFuYWdlci5saW50Q2hlY2soY2hpbGQsIHRva2VuRXJyb3JzLCBnZW5lcmFsRXJyb3JzLCB0b2tlbldhcm5pbmdzLCBsaW50ZWREYXRhKTtcbiAgICAgICAgbGV0IGRhdGFFeGlzdHMgPSAobGludEluZGljYXRvciA+IC0xICYmIGxpbnRJbmRpY2F0b3IgIT0gMTAwKTtcbiAgICAgICAgbGV0IGludmFsaWRDaGlsZCA9IChjaGlsZHJlbi5sZW5ndGggPT0gMSAmJiAhdmFsaWRGaWxsKGNoaWxkKSk7XG4gICAgICAgIC8vIG1heERlcHRoIHRvIGJlIHVzZWQgbGF0ZXJcbiAgICAgICAgLy8gdHJhdmVyc2UgdGlsbCBtYXggZGVwdGggaWYgc2l6ZSBkYXRhIGlzIHJlcXVpcmVkXG4gICAgICAgIGlmIChkYXRhRXhpc3RzICYmICFpbnZhbGlkQ2hpbGQpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBmcmFtZSB0byBob2xkIHRoZSBjaGlsZCBub2RlJ3MgdG9rZW5zIGFuZCBuYW1lXG4gICAgICAgICAgICBjb25zdCBjaGlsZEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGNoaWxkRnJhbWUubmFtZSA9IFwiQ2hpbGQgRGV0YWlsc1wiO1xuICAgICAgICAgICAgY2hpbGRGcmFtZS5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFRleHROb2RlIHRvIGhvbGQgdGhlIGNoaWxkIG5vZGUncyBuYW1lXG4gICAgICAgICAgICBsZXQgY2hpbGROYW1lID0gTm9kZUNyZWF0b3IuY3JlYXRlQ2hpbGRUaXRsZU5vZGUoY2hpbGQpO1xuICAgICAgICAgICAgbGV0IGxpbmtOb2RlID0gTGlua01hbmFnZXIuY3JlYXRlUGFyZW50QnV0dG9uKHBhcmVudENvbnRhaW5lck5vZGUpO1xuICAgICAgICAgICAgY2hpbGROYW1lLmFwcGVuZENoaWxkKGxpbmtOb2RlKTtcbiAgICAgICAgICAgIGxldCBjaGlsZENsb25lID0gY2hpbGQuY2xvbmUoKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29udGFpbmVyRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJGcmFtZS5uYW1lID0gXCJDaGlsZCBDb250YWluZXJcIjtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29udGFpbmVyQ29udGFpbmVyRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJDb250YWluZXJGcmFtZS5uYW1lID0gXCJDaGlsZCBXcmFwcGVyXCI7XG4gICAgICAgICAgICBhcHBseUF1dG9MYXlvdXQoY2hpbGRDb250YWluZXJDb250YWluZXJGcmFtZSwgMCwgXCJIT1JJWk9OVEFMXCIpO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJDb250YWluZXJGcmFtZS5hcHBlbmRDaGlsZChjaGlsZENvbnRhaW5lckZyYW1lKTtcbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyRnJhbWUuYXBwZW5kQ2hpbGQoY2hpbGRDbG9uZSk7XG4gICAgICAgICAgICBjaGlsZENvbnRhaW5lckZyYW1lLmJhY2tncm91bmRzID0gW107XG4gICAgICAgICAgICBjaGlsZENvbnRhaW5lckNvbnRhaW5lckZyYW1lLmJhY2tncm91bmRzID0gW107XG4gICAgICAgICAgICBjaGlsZENvbnRhaW5lckNvbnRhaW5lckZyYW1lLm1pbldpZHRoID0gRUxFTUVOVF9NSU5fV0lEVEg7XG4gICAgICAgICAgICBhcHBseUF1dG9MYXlvdXQoY2hpbGRDb250YWluZXJGcmFtZSwgMCwgXCJIT1JJWk9OVEFMXCIpO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJGcmFtZS5yZXNpemUoSGFuZE9mZk1hbmFnZXIuZ2V0T3B0aW1hbFNpemUoXCJXSURUSFwiLCBjaGlsZC53aWR0aCwgbWF4V2lkdGgpLCBIYW5kT2ZmTWFuYWdlci5nZXRPcHRpbWFsU2l6ZShcIkhFSUdIVFwiLCBjaGlsZC5oZWlnaHQsIG1heFdpZHRoKSk7XG4gICAgICAgICAgICBjaGlsZENvbnRhaW5lckZyYW1lLnJlc2l6ZShNYXRoLm1heChjaGlsZC53aWR0aCwgMC4wMSksIE1hdGgubWF4KGNoaWxkLmhlaWdodCwgMC4wMSkpO1xuICAgICAgICAgICAgY2hpbGRDb250YWluZXJDb250YWluZXJGcmFtZS5yZXNpemUoSGFuZE9mZk1hbmFnZXIuZ2V0T3B0aW1hbFNpemUoXCJXSURUSFwiLCBjaGlsZC53aWR0aCwgbWF4V2lkdGgpLCBIYW5kT2ZmTWFuYWdlci5nZXRPcHRpbWFsU2l6ZShcIkhFSUdIVFwiLCBjaGlsZC5oZWlnaHQsIG1heFdpZHRoKSk7XG4gICAgICAgICAgICBjb25zdCBzcGFjZXIgPSBOb2RlQ3JlYXRvci5nZXRWU3BhY2VyKDIpO1xuICAgICAgICAgICAgc3BhY2VyLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICAgICAgY2hpbGROYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjaGlsZE5hbWUpO1xuICAgICAgICAgICAgY2hpbGRGcmFtZS5hcHBlbmRDaGlsZChjaGlsZENvbnRhaW5lckNvbnRhaW5lckZyYW1lKTtcbiAgICAgICAgICAgIC8vQWRkIGxpbnQgZnJhbWUgaWYgbmVlZGVkXG4gICAgICAgICAgICBpZiAobGludEluZGljYXRvciA+IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gTGludCBSZXN1bHQgRGlzcGxheVxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbnRGcmFtZSA9IExpbnRNYW5hZ2VyLmdldExpbnRSZXN1bHRGcmFtZShsaW50SW5kaWNhdG9yKTtcbiAgICAgICAgICAgICAgICBsaW50RnJhbWUubmFtZSA9IFwiTGludCBkZXRhaWxzXCI7XG4gICAgICAgICAgICAgICAgY2hpbGROYW1lLmFwcGVuZENoaWxkKGxpbnRGcmFtZSk7XG4gICAgICAgICAgICAgICAgbGludEZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgbGludEZyYW1lLm1pbldpZHRoID0gMTAwO1xuICAgICAgICAgICAgICAgIGxpbnRGcmFtZS5tYXhXaWR0aCA9IDIwMDtcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW5FcnJvckZyYW1lO1xuICAgICAgICAgICAgICAgIC8vIFRva2VuIEVycm9yIEhhbmRsaW5nXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGlmaWVkTGludEVycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZExpbnRFcnJvcnMgPSB0b2tlbkVycm9ycy5tYXAoZXJyb3IgPT4gW2Vycm9yLCAnbWlzc2luZyddKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5FcnJvckZyYW1lID0gTm9kZUNyZWF0b3IuZ2V0RGF0YURldGFpbHNGcmFtZShcIk1pc3NpbmcgVG9rZW5zXCIsIG1vZGlmaWVkTGludEVycm9ycywgeyByOiAwLjQ2LCBnOiAwLCBiOiAwIH0pO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZEZyYW1lLmFwcGVuZENoaWxkKHRva2VuRXJyb3JGcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRva2VuIFdhcm5pbmcgSGFuZGxpbmdcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5XYXJuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RpZmllZExpbnRXYXJuaW5ncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZExpbnRXYXJuaW5ncyA9IHRva2VuV2FybmluZ3MubWFwKHdhcm5pbmcgPT4gW3dhcm5pbmcsICdtaXNzaW5nJ10pO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0b2tlbkVycm9yIEZyYW1lIGFscmVhZHkgZXhpc3RzIGFkZCB0byBpdCwgZWxzZSBjcmVhdGUgaXQgZm9yIHdhcm5pbmdzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbkVycm9yRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vZGVDcmVhdG9yLmFwcGVuZFRvRGF0YURldGFpbHNGcmFtZSh0b2tlbkVycm9yRnJhbWUsIG1vZGlmaWVkTGludFdhcm5pbmdzLCB7IHI6IDAuODgsIGc6IDAuNTIsIGI6IDAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkVycm9yRnJhbWUgPSBOb2RlQ3JlYXRvci5nZXREYXRhRGV0YWlsc0ZyYW1lKFwiTWlzc2luZyBUb2tlbnNcIiwgbW9kaWZpZWRMaW50V2FybmluZ3MsIHsgcjogMC44OCwgZzogMC41MiwgYjogMCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRnJhbWUuYXBwZW5kQ2hpbGQodG9rZW5FcnJvckZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBHZW5lcmFsIEVycm9yIEhhbmRsaW5nXG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYWxFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvckZyYW1lID0gTGludE1hbmFnZXIuZ2V0TGludEVycm9yRnJhbWUoZ2VuZXJhbEVycm9ycyk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yRnJhbWUubmFtZSA9IFwiTGludCBFcnJvcnNcIjtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JGcmFtZS5taW5XaWR0aCA9IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JGcmFtZS5tYXhXaWR0aCA9IDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRnJhbWUuYXBwZW5kQ2hpbGQoZXJyb3JGcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3UGFyZW50Q29uYXRpbmVyTmRvZSA9IGNoaWxkQ29udGFpbmVyRnJhbWU7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGNoaWxkIGZyYW1lIHRvIHRoZSBzcGVjaWZpZWQgcGFyZW50IGZyYW1lXG4gICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjaGlsZEZyYW1lKTtcbiAgICAgICAgICAgIC8vIEFwcGx5IGxheW91dCBwcm9wZXJ0aWVzIHRvIHRoZSBjaGlsZCBmcmFtZVxuICAgICAgICAgICAgSGFuZE9mZk1hbmFnZXIuYXBwbHlMYXlvdXRPbkhhbmRvZmYoY2hpbGRGcmFtZSwgSGFuZE9mZk1hbmFnZXIuTGF5b3V0T3B0aW9ucy5MYXlvdXRNb2RlLkhPUklaT05UQUwsIEhhbmRPZmZNYW5hZ2VyLkxheW91dE9wdGlvbnMuTGF5b3V0QWxpZ24uU1RSRVRDSCwgSGFuZE9mZk1hbmFnZXIuTGF5b3V0T3B0aW9ucy5jb3VudGVyQXhpc1NpemluZ01vZGUuQVVUTywgSGFuZE9mZk1hbmFnZXIuTGF5b3V0T3B0aW9ucy5Db3VudGVyQXhpc0FsaWduSXRlbXMuTUlOLCBwYWRkaW5nIC8gMiwgSGFuZE9mZk1hbmFnZXIuTGF5b3V0T3B0aW9ucy5wcmltYXJ5QXhpc1NpemluZ01vZGUuRklYRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3UGFyZW50Q29uYXRpbmVyTmRvZSA9IHBhcmVudENvbnRhaW5lck5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgY2FsbCB0aGUgZnVuY3Rpb24gb24gdGhlIGNoaWxkIG5vZGVcbiAgICAgICAgZ2V0Q2hpbGRyZW5BbmRBcHBlbmQoY2hpbGQsIG5ld1BhcmVudENvbmF0aW5lck5kb2UsIGZyYW1lLCBtYXhXaWR0aCwgbGludGVkRGF0YSwgZGVwdGggKyAxKTtcbiAgICB9KTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmcmFtZSBmb3IgYSBnaXZlbiBub2RlLCBpbmNsdWRpbmcgdGhlIG5vZGUncyBuYW1lLCBjb3BpZWQgbm9kZSAoaWYgc2VsZWN0ZWQpLCBhbmQgYS5cbiAqIEBwYXJhbSBlbGVtZW50IC0gVGhlIG5vZGUgZm9yIHdoaWNoIGEgbmV3IGZyYW1lIGlzIHRvIGJlIGNyZWF0ZWQuXG4gKiBAcGFyYW0gcmVwb3J0Q29uZmlnIC0gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBsaW50IHJlcG9ydC5cbiAqIEByZXR1cm5zIEEgbmV3IGZyYW1lIGNvbnRhaW5pbmcgdGhlIG5vZGUncyBuYW1lLCBjb3BpZWQgbm9kZSAoaWYgc2VsZWN0ZWQpLCBhbmQgY2hpbGQgbm9kZXMgd2l0aCB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlcG9ydEZyYW1lKGVsZW1lbnQpIHtcbiAgICAvLyBTZXQgdGhlIHBhZGRpbmcsIGNyZWF0ZSBhIG5ldyBmcmFtZSwgYW5kIHNldCBpdHMgYmFja2dyb3VuZHNcbiAgICBjb25zdCBwYWRkaW5nID0gMjQ7XG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGZyYW1lLm5hbWUgPSBcIkhhbmQgb2ZmXCI7XG4gICAgZnJhbWUuYmFja2dyb3VuZHMgPSBbXTtcbiAgICAvLyBTZXQgYWxpZ25tZW50IGFuZCBmb250IHNldHRpbmdzIGZvciB0aGUgdGl0bGUgdGV4dCBub2RlXG4gICAgLy8gZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIlxuICAgIGxldCBmb250TmFtZSA9IHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIkJvbGRcIiB9O1xuICAgIC8vIENyZWF0ZSBmcmFtZSBmb3IgdGl0bGUgYW5kIGFwcGVuZCB0byBuZXcgZnJhbWVcbiAgICBjb25zdCB0aXRsZU5vZGUgPSBOb2RlQ3JlYXRvci5nZXROZXdUZXh0Tm9kZShlbGVtZW50Lm5hbWUsIHVuZGVmaW5lZCwgZm9udE5hbWUpO1xuICAgIHRpdGxlTm9kZS5mb250U2l6ZSA9IENvbnN0YW50cy50aXRsZUZvbnRTaXplO1xuICAgIGNvbnN0IHRpdGxlRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIHRpdGxlRnJhbWUuYmFja2dyb3VuZHMgPSBbXTtcbiAgICBIYW5kT2ZmTWFuYWdlci5hcHBseUxheW91dE9uSGFuZG9mZih0aXRsZUZyYW1lLCBIYW5kT2ZmTWFuYWdlci5MYXlvdXRPcHRpb25zLkxheW91dE1vZGUuSE9SSVpPTlRBTCwgSGFuZE9mZk1hbmFnZXIuTGF5b3V0T3B0aW9ucy5MYXlvdXRBbGlnbi5TVFJFVENILCBIYW5kT2ZmTWFuYWdlci5MYXlvdXRPcHRpb25zLmNvdW50ZXJBeGlzU2l6aW5nTW9kZS5BVVRPLCBIYW5kT2ZmTWFuYWdlci5MYXlvdXRPcHRpb25zLkNvdW50ZXJBeGlzQWxpZ25JdGVtcy5DRU5URVIsIENvbnN0YW50cy5wYWRkaW5nMSwgSGFuZE9mZk1hbmFnZXIuTGF5b3V0T3B0aW9ucy5wcmltYXJ5QXhpc1NpemluZ01vZGUuRklYRUQpO1xuICAgIHRpdGxlRnJhbWUuYXBwZW5kQ2hpbGQodGl0bGVOb2RlKTtcbiAgICBsZXQgc291cmNlQnV0dG9uID0gTGlua01hbmFnZXIuY3JlYXRlQmFja1RvU291cmNlQnV0dG9uKGVsZW1lbnQpO1xuICAgIHRpdGxlRnJhbWUuYXBwZW5kQ2hpbGQoc291cmNlQnV0dG9uKTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZCh0aXRsZUZyYW1lKTtcbiAgICAvLyBBcHBlbmQgdGhlIHNwYWNlciB0byB0aGUgbmV3IGZyYW1lXG4gICAgY29uc3Qgc3BhY2VyID0gTm9kZUNyZWF0b3IuZ2V0VlNwYWNlcigyKTtcbiAgICBzcGFjZXIubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgIC8vIElmIHNob3dTZWxlY3RlZCBpcyB0cnVlLCBhcHBlbmQgYSBjb3B5IG9mIHRoZSBzZWxlY3RlZCBub2RlIHRvIHRoZSBuZXcgZnJhbWVcbiAgICBsZXQgcGFyZW50RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIHBhcmVudEZyYW1lLm5hbWUgPSBcIlBhcmVudCBkZXRhaWxzXCI7XG4gICAgcGFyZW50RnJhbWUuYmFja2dyb3VuZHMgPSBbXTtcbiAgICBhcHBseUF1dG9MYXlvdXQocGFyZW50RnJhbWUsIHBhZGRpbmcsIFwiSE9SSVpPTlRBTFwiKTtcbiAgICBjb25zdCBjb3BpZWROb2RlID0gZWxlbWVudC5jbG9uZSgpO1xuICAgIGNvbnN0IGVsZW1lbnRDb250YWluZXJGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZWxlbWVudENvbnRhaW5lckZyYW1lLm5hbWUgPSBcIlBhcmVudCBDb250YWluZXJcIjtcbiAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyQ29udGFpbmVyRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGVsZW1lbnRDb250YWluZXJDb250YWluZXJGcmFtZS5uYW1lID0gXCJQYXJlbnQgV3JhcHBlclwiO1xuICAgIGFwcGx5QXV0b0xheW91dChlbGVtZW50Q29udGFpbmVyQ29udGFpbmVyRnJhbWUsIDAsIFwiSE9SSVpPTlRBTFwiKTtcbiAgICBlbGVtZW50Q29udGFpbmVyQ29udGFpbmVyRnJhbWUuYXBwZW5kQ2hpbGQoZWxlbWVudENvbnRhaW5lckZyYW1lKTtcbiAgICBlbGVtZW50Q29udGFpbmVyRnJhbWUuYXBwZW5kQ2hpbGQoY29waWVkTm9kZSk7XG4gICAgZWxlbWVudENvbnRhaW5lckZyYW1lLmJhY2tncm91bmRzID0gW107XG4gICAgZWxlbWVudENvbnRhaW5lckNvbnRhaW5lckZyYW1lLmJhY2tncm91bmRzID0gW107XG4gICAgZWxlbWVudENvbnRhaW5lckNvbnRhaW5lckZyYW1lLm1pbldpZHRoID0gRUxFTUVOVF9NSU5fV0lEVEg7XG4gICAgYXBwbHlBdXRvTGF5b3V0KGVsZW1lbnRDb250YWluZXJGcmFtZSwgMCwgXCJIT1JJWk9OVEFMXCIpO1xuICAgIHBhcmVudEZyYW1lLmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXJDb250YWluZXJGcmFtZSk7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQocGFyZW50RnJhbWUpO1xuICAgIC8vIEFkZCB2YXJpYWJsZXMgdG8gY2FsY3VsYXRlIGxpbnQgcGVyY2VudGFnZVxuICAgIGNvbnN0IGxpbnRlZERhdGEgPSB7IHBhc3NlZExpbnQ6IDAsIHRvdGFsTGludDogMCB9O1xuICAgIC8vIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgY3VycmVudCBub2RlLCBjcmVhdGluZyBmcmFtZXMgZm9yIHRob3NlIHdpdGggdG9rZW5zXG4gICAgZ2V0Q2hpbGRyZW5BbmRBcHBlbmQoZWxlbWVudCwgZWxlbWVudENvbnRhaW5lckZyYW1lLCBmcmFtZSwgZWxlbWVudC53aWR0aCwgbGludGVkRGF0YSk7XG4gICAgbGV0IGxpbmtCdXR0b24gPSBMaW5rTWFuYWdlci5jcmVhdGVCYWNrVG9Tb3VyY2VCdXR0b24oZWxlbWVudCk7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQobGlua0J1dHRvbik7XG4gICAgLy8gQWRkIHRoZSBsaW50IHBlcmNlbnRhZ2UgaW5mb3JtYXRpb24gdG8gdGhlIHBhcmVudCBub2RlJ3MgcmVwb3J0IGZyYW1lXG4gICAgbGV0IHBhc3NlZFBlcmNlbnRhZ2U7XG4gICAgaWYgKGxpbnRlZERhdGEudG90YWxMaW50ID4gMCkge1xuICAgICAgICBwYXNzZWRQZXJjZW50YWdlID0gVXRpbHMuZ2V0Um91bmRlZERlY2ltYWwobGludGVkRGF0YS5wYXNzZWRMaW50ICogMTAwIC8gbGludGVkRGF0YS50b3RhbExpbnQpO1xuICAgICAgICBjb25zdCBsaW50UGVyY2VudGFnZVRleHQgPSBgJHtwYXNzZWRQZXJjZW50YWdlfSUgUGFzc2VkYDtcbiAgICAgICAgY29uc3QgbGludFBlcmNlbnRhZ2VOb2RlID0gTm9kZUNyZWF0b3IuZ2V0TmV3VGV4dE5vZGUobGludFBlcmNlbnRhZ2VUZXh0KTtcbiAgICAgICAgdGl0bGVGcmFtZS5hcHBlbmRDaGlsZChsaW50UGVyY2VudGFnZU5vZGUpO1xuICAgICAgICBpZiAocGFzc2VkUGVyY2VudGFnZSA9PSAxMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbnRQZXJjZW50YWdlTm9kZSA9IE5vZGVDcmVhdG9yLmdldE5ld1RleHROb2RlKGBSRUFEWSBGT1IgREVWYCwgeyByOiAwLCBnOiAwLjM4LCBiOiAwIH0pO1xuICAgICAgICAgICAgbGludFBlcmNlbnRhZ2VOb2RlLmxheW91dEFsaWduID0gXCJNQVhcIjtcbiAgICAgICAgICAgIHRpdGxlRnJhbWUuYXBwZW5kQ2hpbGQobGludFBlcmNlbnRhZ2VOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBcHBseSBhdXRvLWxheW91dCBhbmQgc3BhY2luZyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGZyYW1lXG4gICAgYXBwbHlBdXRvTGF5b3V0KGZyYW1lLCBwYWRkaW5nLCBcIlZFUlRJQ0FMXCIpO1xuICAgIHRpdGxlTm9kZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gcGFkZGluZztcbiAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IGNyZWF0ZWQgZnJhbWVcbiAgICBjb25zdCByZXR1cm5QZXJjZW50YWdlID0gcGFzc2VkUGVyY2VudGFnZSA/IFN0cmluZyhwYXNzZWRQZXJjZW50YWdlKSA6IFwiTmFuXCI7XG4gICAgcmV0dXJuIHsgZnJhbWUsIHJldHVyblBlcmNlbnRhZ2UgfTtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGEgcmVwb3J0IHZpZXcgZm9yIHRoZSBzZWxlY3RlZCBvciBhbGwgdG9wLWxldmVsIGZyYW1lcyBvbiB0aGUgY3VycmVudCBwYWdlLlxuICogQHBhcmFtIHJlcG9ydENvbmZpZyAtIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgbGludCByZXBvcnQuXG4gKiBAcmV0dXJucyBOb25lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZXBvcnQobG9jYWxSZXBvcnQpIHtcbiAgICAoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBBc3NpZ24gdGhlIHBhc3NlZCBjb25maWd1cmF0aW9uIHRvIGdsb2JhbCB2YXJpYWJsZVxuICAgICAgICByZXBvcnRDb25maWcgPSBsb2NhbFJlcG9ydDtcbiAgICAgICAgLy8gTG9hZCB0aGUgcmVxdWlyZWQgZm9udHNcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH0pO1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSByZW5kZXIgbGlzdFxuICAgICAgICBsZXQgcmVwb3J0UmVuZGVyTGlzdCA9IFtdO1xuICAgICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggZnJhbWVzIHRvIGdlbmVyYXRlIHJlcG9ydCB2aWV3cyBmb3JcbiAgICAgICAgaWYgKHJlcG9ydENvbmZpZy5nZW5lcmF0ZUZvckFsbCkge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgcmVwb3J0IHZpZXdzIGZvciBhbGwgdG9wLWxldmVsIGZyYW1lcyBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgcmVwb3J0UmVuZGVyTGlzdCA9IEhhbmRPZmZNYW5hZ2VyLmZpbHRlclRvcExldmVsRnJhbWVzKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIHJlcG9ydCB2aWV3cyBmb3IgdGhlIHNlbGVjdGVkIGZyYW1lc1xuICAgICAgICAgICAgcmVwb3J0UmVuZGVyTGlzdCA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RpZnkgdGhlIHVzZXIgaWYgbm8gZWxlbWVudHMgYXJlIHNlbGVjdGVkXG4gICAgICAgIGlmIChyZXBvcnRSZW5kZXJMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJQbGVhc2Ugc2VsZWN0IGFuIGVsZW1lbnQgb24gdGhlIGNhbnZhcy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlcG9ydFBhZ2U7XG4gICAgICAgIC8vIENoZWNrIGlmIGEgcmVwb3J0IHBhZ2UgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgaWYgKHJlcG9ydENvbmZpZy5yZXBvcnRPbk5ld1BhZ2UpIHtcbiAgICAgICAgICAgIHJlcG9ydFBhZ2UgPSBmaWdtYS5yb290LmZpbmRDaGlsZChub2RlID0+IG5vZGUudHlwZSA9PT0gXCJQQUdFXCIgJiYgbm9kZS5uYW1lID09PSBgJHtmaWdtYS5jdXJyZW50UGFnZS5uYW1lfS1Db25jb3JkYCk7XG4gICAgICAgICAgICAvLyBJZiByZXBvcnQgcGFnZSBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICBpZiAocmVwb3J0UGFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlcG9ydFBhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgICAgICAgICAgICAgcmVwb3J0UGFnZS5uYW1lID0gYCR7ZmlnbWEuY3VycmVudFBhZ2UubmFtZX0tQ29uY29yZGA7XG4gICAgICAgICAgICAgICAgcmVwb3J0UGFnZS5iYWNrZ3JvdW5kcyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuOTYsIGc6IDAuOTYsIGI6IDAuOTYgfSB9XTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGZpZ21hLnJvb3QuY2hpbGRyZW4uaW5kZXhPZihmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgZmlnbWEucm9vdC5pbnNlcnRDaGlsZChpbmRleCArIDEsIHJlcG9ydFBhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwb3J0UGFnZSA9IHJlcG9ydFBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXBvcnRQYWdlID0gZmlnbWEuY3VycmVudFBhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGVhY2ggc2VsZWN0ZWQgb3IgdG9wLWxldmVsIGZyYW1lIGFuZCBnZW5lcmF0ZSByZXBvcnRcbiAgICAgICAgcmVwb3J0UmVuZGVyTGlzdC5mb3JFYWNoKChzZWxlY3RlZEVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0xhc3QgPSBpbmRleCA9PT0gcmVwb3J0UmVuZGVyTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgRUxFTUVOVF9NSU5fV0lEVEggPSBzZWxlY3RlZEVsZW1lbnQud2lkdGg7XG4gICAgICAgICAgICBsZXQgZnJhbWVOb2RlID0gc2VsZWN0ZWRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZSkge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlUmVwb3J0Rm9yTm9kZShmcmFtZU5vZGUsIGlzTGFzdCwgcmVwb3J0UGFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoYCR7c2VsZWN0ZWRFbGVtZW50Lm5hbWV9IGlzIG5vdCBhIGZyYW1lIG5vZGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE5vdGlmeSB0aGUgdXNlciB0aGF0IHJlcG9ydCB2aWV3cyBoYXZlIGJlZW4gZ2VuZXJhdGVkXG4gICAgICAgIGZpZ21hLm5vdGlmeShcIkxpbnQgUmVwb3J0IEdlbmVyYXRlZFwiKTtcbiAgICAgICAgLy8gQ2xvc2UgdGhlIHBsdWdpblxuICAgICAgICAvLyBmaWdtYS5jbG9zZVBsdWdpbigpXG4gICAgfSkpKCk7XG59XG4vKipcbiAqIEdlbmVyYXRlcyBsaW50IHJlcG9ydCBmb3IgYSBzZWxlY3RlZCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RlZEVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBnZW5lcmF0ZSBhIGxpbnRyZXBvcnQgZm9yLlxuICogQHBhcmFtIHJlcG9ydENvbmZpZyAtIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgbGludCByZXBvcnQuXG4gKiBAcGFyYW0gaXNMYXN0IC0gV2hldGhlciBvciBub3QgdGhlIHNlbGVjdGVkIGVsZW1lbnQgaXMgdGhlIGxhc3Qgb25lIGJlaW5nIHByb2Nlc3NlZC5cbiAqXG4gKiBAcmV0dXJucyBOb25lLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVJlcG9ydEZvck5vZGUoc2VsZWN0ZWRFbGVtZW50LCBpc0xhc3QsIHJlcG9ydFBhZ2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgLy8gSWYgdGhlIGN1cnJlbnQgbm9kZSBoYXMgbm90IGFscmVhZHkgYmVlbiBuYW1lZCBmb3IgbGludCBwdXJwb3Nlc1xuICAgIGlmICghc2VsZWN0ZWRFbGVtZW50Lm5hbWUuc3RhcnRzV2l0aCgnQ25DZC0nKSAmJiBzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgZnJhbWUgY29udGFpbmluZyB0aGlzIG5vZGUgYW5kIGl0cyBjaGlsZCBub2Rlc1xuICAgICAgICBsZXQgbGludFJlc3VsdCA9IGNyZWF0ZVJlcG9ydEZyYW1lKHNlbGVjdGVkRWxlbWVudCk7XG4gICAgICAgIGxldCBmcmFtZSA9IGxpbnRSZXN1bHQuZnJhbWU7XG4gICAgICAgIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZnJhbWVcbiAgICAgICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogQ29uc3RhbnRzLmJhY2tncm91bmRDb2xvciB9XTtcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgYW4gZXhpc3RpbmcgbGludCByZXBvcnQgdmlldyB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhpcyBub2RlXG4gICAgICAgIGNvbnN0IG9sZEhhbmRPZmYgPSBIYW5kT2ZmTWFuYWdlci5maW5kT2xkTm9kZShzZWxlY3RlZEVsZW1lbnQsIHJlcG9ydFBhZ2UsIFwiUmVwb3J0XCIpO1xuICAgICAgICAvLyBJZiBhbiBleGlzdGluZyBsaW50IHJlcG9ydCB2aWV3IHdhcyBmb3VuZCBhbmQgd2UgYXJlIHVwZGF0aW5nIHByZXZpb3VzIHJlcG9ydCB2aWV3c1xuICAgICAgICBpZiAocmVwb3J0Q29uZmlnLnVwZGF0ZVByZXZpb3VzUmVwb3J0ICYmIG9sZEhhbmRPZmYpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGxpbnQgcmVwb3J0IHZpZXcgdG8gdGhlIHNhbWUgcG9zaXRpb24gYXMgdGhlIHByZXZpb3VzIG9uZSwgdGhlbiByZW1vdmUgdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGZyYW1lLnggPSBvbGRIYW5kT2ZmLng7XG4gICAgICAgICAgICBmcmFtZS55ID0gb2xkSGFuZE9mZi55O1xuICAgICAgICAgICAgb2xkSGFuZE9mZi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY3JlYXRlIGEgbmV3IG5hbWUgZm9yIHRoaXMgcmVwb3J0IHZpZXcgYW5kIGFkanVzdCBpdHMgcG9zaXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gVXRpbHMuZmluZEVtcHR5U3BhY2UocmVwb3J0UGFnZSk7XG4gICAgICAgICAgICBmcmFtZS54ID0gc3BhY2UueCArIDUwO1xuICAgICAgICAgICAgZnJhbWUueSA9IHNwYWNlLnk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBuYW1lIG9mIHRoZSBsaW50IHJlcG9ydCB2aWV3IHRvIGEgc3BlY2lmaWMgc3RyaW5nIHdpdGggdGhlIG5vZGUgSURcbiAgICAgICAgZnJhbWUubmFtZSA9IEhhbmRPZmZNYW5hZ2VyLmdldEhhbmRvZmZOYW1lKHNlbGVjdGVkRWxlbWVudC5pZCwgXCJSZXBvcnRcIik7XG4gICAgICAgIC8vIENyZWF0ZSBsaW5rIGJ1dHRvblxuICAgICAgICBsZXQgb2xkQnV0dG9uID0gSGFuZE9mZk1hbmFnZXIuZmluZE9sZEJ1dHRvbihzZWxlY3RlZEVsZW1lbnQuaWQsIFwiUmVwb3J0XCIpO1xuICAgICAgICBpZiAob2xkQnV0dG9uKSB7XG4gICAgICAgICAgICBMaW5rTWFuYWdlci51cGRhdGVMaW50UmVwb3J0QnV0dG9uKG9sZEJ1dHRvbiwgZnJhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IExpbmtNYW5hZ2VyLmNyZWF0ZUxpbnRSZXBvcnRCdXR0b24oZnJhbWUsIHNlbGVjdGVkRWxlbWVudC5pZCwgbGludFJlc3VsdC5yZXR1cm5QZXJjZW50YWdlKTtcbiAgICAgICAgICAgIGxldCB4ID0gKF9iID0gKF9hID0gc2VsZWN0ZWRFbGVtZW50LmFic29sdXRlQm91bmRpbmdCb3gpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS54KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAwO1xuICAgICAgICAgICAgbGV0IHkgPSBzZWxlY3RlZEVsZW1lbnQuaGVpZ2h0ICsgMTAwICsgKChfZCA9IChfYyA9IHNlbGVjdGVkRWxlbWVudC5hYnNvbHV0ZUJvdW5kaW5nQm94KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MueSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMCk7XG4gICAgICAgICAgICBidXR0b24ueCA9IHg7XG4gICAgICAgICAgICBidXR0b24ueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGxpbnQgcmVwb3J0IHRvIHJlcG9ydCBwYWdlXG4gICAgICAgIHJlcG9ydFBhZ2UuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgICAgICAvLyBTY3JvbGwgYW5kIHpvb20gaW50byB0aGUgbmV3bHkgY3JlYXRlZCBsaW50IHJlcG9ydCB2aWV3IGlmIHRoaXMgaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgcmVuZGVyIGxpc3RcbiAgICAgICAgaWYgKGlzTGFzdCkge1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSByZXBvcnRQYWdlO1xuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtmcmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBhcHBseUF1dG9MYXlvdXQgfSBmcm9tIFwiLi9sYXlvdXRpbmdcIjtcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBIYW5kb2ZmTWFuYWdlciBmcm9tIFwiLi9oYW5kb2ZmX21hbmFnZXJcIjtcbmltcG9ydCAqIGFzIExpbnRSZXBvcnRNYW5hZ2VyIGZyb20gXCIuL2xpbnRSZXBvcnRfbWFuYWdlclwiO1xuaW1wb3J0ICogYXMgTm9kZUNyZWF0b3IgZnJvbSBcIi4vbm9kZV9tYW5hZ2VyXCI7XG5pbXBvcnQgeyBsaW50VHlwb2dyYXBoeSB9IGZyb20gXCIuL3J1bGVzL2xpbnRfdHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgdmFsaWRGaWxsLCBsaW50RmlsbCB9IGZyb20gXCIuL3J1bGVzL2xpbnRfZmlsbFwiO1xuaW1wb3J0IHsgbGludFNpemUsIGlzRml4ZWQgfSBmcm9tIFwiLi9ydWxlcy9saW50X3NpemluZ1wiO1xuaW1wb3J0IHsgbGludENvcm5lclJhZGl1cywgbm9uWmVyb0Nvcm5lclJhZGl1cyB9IGZyb20gXCIuL3J1bGVzL2xpbnRfY29ybmVyUmFkaXVzXCI7XG5pbXBvcnQgeyBsaW50UGFkZGluZywgbm9uWmVyb1BhZGRpbmcgfSBmcm9tIFwiLi9ydWxlcy9saW50X3BhZGRpbmdcIjtcbmltcG9ydCB7IGxpbnRCb3JkZXJXaWR0aCwgdmFsaWRCb3JkZXJXaWR0aCB9IGZyb20gXCIuL3J1bGVzL2xpbnRfYm9yZGVyV2lkdGhcIjtcbmltcG9ydCB7IGlzRGV0YWNoZWQsIGxpbnREZXRhY2ggfSBmcm9tIFwiLi9ydWxlcy9saW50X2RldGFjaFwiO1xuaW1wb3J0IHsgdmFsaWRJdGVtU3BhY2luZywgbGludEl0ZW1TcGFjaW5nIH0gZnJvbSBcIi4vcnVsZXMvbGludF9pdGVtU3BhY2luZ1wiO1xuaW1wb3J0IHsgdmFsaWRCb3hTaGFkb3csIGxpbnRCb3hTaGFkb3cgfSBmcm9tIFwiLi9ydWxlcy9saW50X2JveFNoYWRvd1wiO1xuaW1wb3J0IHsgdmFsaWRCb3JkZXJDb2xvciwgbGludEJvcmRlckNvbG9yIH0gZnJvbSBcIi4vcnVsZXMvbGludF9ib3JkZXJDb2xvclwiO1xuLy8gSW5pdGlhbGlzaW5nIGluc3RhbmNlcyBvZiB0b2tlbiBKU09OcyBmb3IgbGludFxubGV0IHNlbWFudGljSlNPTjtcbmxldCBjb21wb25lbnRKU09OO1xuLyoqIE5hbWVzcGFjZSBmb3IgbGludGluZyB1dGlsaXRpZXMgKi9cbnZhciBMaW50VXRpbGl0aWVzO1xuKGZ1bmN0aW9uIChMaW50VXRpbGl0aWVzKSB7XG4gICAgLyoqIExpc3Qgb2YgTGludGFibGUgTm9kZXMgKi9cbiAgICBsZXQgTGludE5vZGVzO1xuICAgIChmdW5jdGlvbiAoTGludE5vZGVzKSB7XG4gICAgICAgIExpbnROb2Rlc1tcInRleHRcIl0gPSBcIlRFWFRcIjtcbiAgICAgICAgTGludE5vZGVzW1wicmVjdGFuZ2xlXCJdID0gXCJSRUNUQU5HTEVcIjtcbiAgICAgICAgTGludE5vZGVzW1widmVjdG9yXCJdID0gXCJWRUNUT1JcIjtcbiAgICAgICAgTGludE5vZGVzW1wiZnJhbWVcIl0gPSBcIkZSQU1FXCI7XG4gICAgICAgIExpbnROb2Rlc1tcImluc3RhbmNlXCJdID0gXCJJTlNUQU5DRVwiO1xuICAgICAgICBMaW50Tm9kZXNbXCJsaW5lXCJdID0gXCJMSU5FXCI7XG4gICAgfSkoTGludE5vZGVzIHx8IChMaW50Tm9kZXMgPSB7fSkpO1xuICAgIC8qKiBMaXN0IG9mIExpbnQgUnVsZXMgKi9cbiAgICBsZXQgTGludFJ1bGVzO1xuICAgIChmdW5jdGlvbiAoTGludFJ1bGVzKSB7XG4gICAgICAgIExpbnRSdWxlc1tMaW50UnVsZXNbXCJGaWxsXCJdID0gMF0gPSBcIkZpbGxcIjtcbiAgICAgICAgTGludFJ1bGVzW0xpbnRSdWxlc1tcIlR5cG9ncmFwaHlcIl0gPSAxXSA9IFwiVHlwb2dyYXBoeVwiO1xuICAgICAgICBMaW50UnVsZXNbTGludFJ1bGVzW1wiU2l6ZVwiXSA9IDJdID0gXCJTaXplXCI7XG4gICAgICAgIExpbnRSdWxlc1tMaW50UnVsZXNbXCJDb3JuZXJSYWRpdXNcIl0gPSAzXSA9IFwiQ29ybmVyUmFkaXVzXCI7XG4gICAgICAgIExpbnRSdWxlc1tMaW50UnVsZXNbXCJQYWRkaW5nXCJdID0gNF0gPSBcIlBhZGRpbmdcIjtcbiAgICAgICAgTGludFJ1bGVzW0xpbnRSdWxlc1tcIkJvcmRlcldpZHRoXCJdID0gNV0gPSBcIkJvcmRlcldpZHRoXCI7XG4gICAgICAgIExpbnRSdWxlc1tMaW50UnVsZXNbXCJEZXRhY2hcIl0gPSA2XSA9IFwiRGV0YWNoXCI7XG4gICAgICAgIExpbnRSdWxlc1tMaW50UnVsZXNbXCJJdGVtU3BhY2luZ1wiXSA9IDddID0gXCJJdGVtU3BhY2luZ1wiO1xuICAgICAgICBMaW50UnVsZXNbTGludFJ1bGVzW1wiQm94U2hhZG93XCJdID0gOF0gPSBcIkJveFNoYWRvd1wiO1xuICAgICAgICBMaW50UnVsZXNbTGludFJ1bGVzW1wiQm9yZGVyQ29sb3JcIl0gPSA5XSA9IFwiQm9yZGVyQ29sb3JcIjtcbiAgICB9KShMaW50UnVsZXMgfHwgKExpbnRSdWxlcyA9IHt9KSk7XG4gICAgLyoqIE1ldGhvZCB0byBjaGVjayBpZiBhIG5vZGUgaXMgbGludGFibGUgKi9cbiAgICBmdW5jdGlvbiBpc0xpbnRhYmxlTm9kZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKExpbnROb2RlcykuaW5jbHVkZXModHlwZSk7XG4gICAgfVxuICAgIExpbnRVdGlsaXRpZXMuaXNMaW50YWJsZU5vZGUgPSBpc0xpbnRhYmxlTm9kZTtcbiAgICAvKiogTWV0aG9kIHRvIGZldGNoIHRva2VucyBpbnNpZGUgY29tcG9zaXRpb24gdG9rZW4gKGlmIGFwcGxpY2FibGUpICovXG4gICAgZnVuY3Rpb24gZmV0Y2hDb21wb3NpdGlvblRva2Vucyhub2RlLCBzZW1hbnRpY0pTT04sIGNvbXBvbmVudEpTT04pIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhbiBlbXB0eSBhcnJheSB0byBzdG9yZSBzdWIgdG9rZW5zXG4gICAgICAgIGxldCBzdWJfdG9rZW5zID0gW107XG4gICAgICAgIC8vIENoZWNrIGlmIFwiY29tcG9zaXRpb25cIiB0b2tlbiBleGlzdHNcbiAgICAgICAgY29uc3QgY29tcG9zaXRpb25FeGlzdHMgPSBub2RlLmdldFNoYXJlZFBsdWdpbkRhdGFLZXlzKFwidG9rZW5zXCIpLmluY2x1ZGVzKFwiY29tcG9zaXRpb25cIik7XG4gICAgICAgIGlmIChjb21wb3NpdGlvbkV4aXN0cykge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBvZiBcImNvbXBvc2l0aW9uXCIgdG9rZW5cbiAgICAgICAgICAgIGxldCBjb21wVG9rZW4gPSBub2RlLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJ0b2tlbnNcIiwgXCJjb21wb3NpdGlvblwiKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBzdXJyb3VuZGluZyBxdW90ZXMgaWYgcHJlc2VudFxuICAgICAgICAgICAgY29tcFRva2VuID0gY29tcFRva2VuLnJlcGxhY2UoL15cInxcIiQvZywgJycpO1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgLy8gU3BsaXQgdGhlIHRva2VuIGludG8gcGF0aCBzZWdtZW50c1xuICAgICAgICAgICAgbGV0IHRva2VuUGF0aCA9IGNvbXBUb2tlbi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgaWYgKHRva2VuUGF0aFswXSA9PT0gYHNlbWFudGljYCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VtYW50aWNKU09OO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW5QYXRoWzBdID09PSBgY29tcG9uZW50YCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY29tcG9uZW50SlNPTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyYXZlcnNlIHRocm91Z2ggdGhlIHRva2VuIHBhdGggdG8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSBpbiBzZW1hbnRpYyBKU09OXG4gICAgICAgICAgICB0b2tlblBhdGguZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gUHVzaCBrZXlzIG9mIHRoZSBuZXN0ZWQgdmFsdWUgb2JqZWN0IGludG8gc3ViX3Rva2VucyBhcnJheVxuICAgICAgICAgICAgc3ViX3Rva2Vucy5wdXNoKC4uLk9iamVjdC5rZXlzKHZhbHVlLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1Yl90b2tlbnM7XG4gICAgfVxuICAgIC8qKiBNZXRob2QgdG8gZmV0Y2ggcnVsZXMgb2YgYSBub2RlICovXG4gICAgZnVuY3Rpb24gZ2V0UnVsZXMobm9kZSkge1xuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBMaW50Tm9kZXMudGV4dDpcbiAgICAgICAgICAgICAgICByZXR1cm4gW0xpbnRSdWxlcy5GaWxsLCBMaW50UnVsZXMuVHlwb2dyYXBoeSwgTGludFJ1bGVzLlBhZGRpbmddO1xuICAgICAgICAgICAgY2FzZSBMaW50Tm9kZXMudmVjdG9yOlxuICAgICAgICAgICAgICAgIHJldHVybiBbTGludFJ1bGVzLkZpbGwsIExpbnRSdWxlcy5QYWRkaW5nLCBMaW50UnVsZXMuQ29ybmVyUmFkaXVzLCBMaW50UnVsZXMuQm9yZGVyV2lkdGhdO1xuICAgICAgICAgICAgY2FzZSBMaW50Tm9kZXMucmVjdGFuZ2xlOlxuICAgICAgICAgICAgICAgIHJldHVybiBbTGludFJ1bGVzLlNpemUsIExpbnRSdWxlcy5Db3JuZXJSYWRpdXMsIExpbnRSdWxlcy5QYWRkaW5nLCBMaW50UnVsZXMuRmlsbF07XG4gICAgICAgICAgICBjYXNlIExpbnROb2Rlcy5mcmFtZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gW0xpbnRSdWxlcy5EZXRhY2gsIExpbnRSdWxlcy5TaXplLCBMaW50UnVsZXMuQ29ybmVyUmFkaXVzLCBMaW50UnVsZXMuUGFkZGluZywgTGludFJ1bGVzLkJvcmRlcldpZHRoLCBMaW50UnVsZXMuSXRlbVNwYWNpbmcsIExpbnRSdWxlcy5GaWxsLCBMaW50UnVsZXMuQm9yZGVyQ29sb3JdO1xuICAgICAgICAgICAgY2FzZSBMaW50Tm9kZXMuaW5zdGFuY2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtMaW50UnVsZXMuQ29ybmVyUmFkaXVzLCBMaW50UnVsZXMuU2l6ZSwgTGludFJ1bGVzLlBhZGRpbmcsIExpbnRSdWxlcy5Cb3JkZXJXaWR0aCwgTGludFJ1bGVzLkl0ZW1TcGFjaW5nLCBMaW50UnVsZXMuQm94U2hhZG93LCBMaW50UnVsZXMuRmlsbCwgTGludFJ1bGVzLkJvcmRlckNvbG9yXTtcbiAgICAgICAgICAgIGNhc2UgTGludE5vZGVzLmxpbmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtMaW50UnVsZXMuU2l6ZSwgTGludFJ1bGVzLkJvcmRlcldpZHRoLCBMaW50UnVsZXMuQm94U2hhZG93LCBMaW50UnVsZXMuRmlsbCwgTGludFJ1bGVzLkJvcmRlckNvbG9yXTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIExpbnRVdGlsaXRpZXMuZ2V0UnVsZXMgPSBnZXRSdWxlcztcbiAgICAvKiogTWV0aG9kIHRvIGV4ZWN1dGUgbGludGluZyBydWxlcyAqL1xuICAgIGZ1bmN0aW9uIGV4ZWN1dGVSdWxlcyhub2RlLCBydWxlcywgbGludENvdW50KSB7XG4gICAgICAgIGNvbnN0IGNvbXBUb2tlbnMgPSBmZXRjaENvbXBvc2l0aW9uVG9rZW5zKG5vZGUsIHNlbWFudGljSlNPTiwgY29tcG9uZW50SlNPTik7XG4gICAgICAgIHZhciBsaW50UGFzc2VkID0gZmFsc2U7XG4gICAgICAgIHJ1bGVzLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIExpbnRSdWxlcy5GaWxsOlxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRGaWxsKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW50UGFzc2VkID0gbGludEZpbGwobm9kZSwgbGludENvdW50LCBjb21wVG9rZW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExpbnRSdWxlcy5UeXBvZ3JhcGh5OlxuICAgICAgICAgICAgICAgICAgICBsaW50UGFzc2VkID0gbGludFR5cG9ncmFwaHkobm9kZSwgbGludENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMaW50UnVsZXMuU2l6ZTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRml4ZWQobm9kZSwgJ2hvcml6b250YWwnKSB8fCBpc0ZpeGVkKG5vZGUsICd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW50UGFzc2VkID0gbGludFNpemUobm9kZSwgbGludENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExpbnRSdWxlcy5Db3JuZXJSYWRpdXM6XG4gICAgICAgICAgICAgICAgICAgIGlmIChub25aZXJvQ29ybmVyUmFkaXVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW50UGFzc2VkID0gbGludENvcm5lclJhZGl1cyhub2RlLCBsaW50Q291bnQsIGNvbXBUb2tlbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTGludFJ1bGVzLlBhZGRpbmc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChub25aZXJvUGFkZGluZyhub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGludFBhc3NlZCA9IGxpbnRQYWRkaW5nKG5vZGUsIGxpbnRDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMaW50UnVsZXMuQm9yZGVyV2lkdGg6XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZEJvcmRlcldpZHRoKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW50UGFzc2VkID0gbGludEJvcmRlcldpZHRoKG5vZGUsIGxpbnRDb3VudCwgY29tcFRva2Vucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMaW50UnVsZXMuRGV0YWNoOlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNEZXRhY2hlZChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGludFBhc3NlZCA9IGxpbnREZXRhY2gobm9kZSwgbGludENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExpbnRSdWxlcy5JdGVtU3BhY2luZzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkSXRlbVNwYWNpbmcobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbnRQYXNzZWQgPSBsaW50SXRlbVNwYWNpbmcobm9kZSwgbGludENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExpbnRSdWxlcy5Cb3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZEJveFNoYWRvdyhub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGludFBhc3NlZCA9IGxpbnRCb3hTaGFkb3cobm9kZSwgbGludENvdW50LCBjb21wVG9rZW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExpbnRSdWxlcy5Cb3JkZXJDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkQm9yZGVyQ29sb3Iobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbnRQYXNzZWQgPSBsaW50Qm9yZGVyQ29sb3Iobm9kZSwgbGludENvdW50LCBjb21wVG9rZW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaW50UGFzc2VkO1xuICAgIH1cbiAgICBMaW50VXRpbGl0aWVzLmV4ZWN1dGVSdWxlcyA9IGV4ZWN1dGVSdWxlcztcbiAgICAvKiogQ2FsY3VsYXRpb24gb2YgY3VtdWxhdGl2ZSBwYXNzZWQgcGVyY2VudGFnZSBvZiBub2RlIGFzIHBhcmVudCAoaW5jbHVkZXMgY2FsY3VsYXRpb24gb2Ygc3VjY2VzcyBwZXJjZW50YWdlIG9mIGNoaWxkcmVuKSAqL1xuICAgIGZ1bmN0aW9uIGN1bXVsYXRpdmVQZXJjZW50YWdlKGN1bXVsYXRpdmVMaW50RGF0YSwgbm9kZSkge1xuICAgICAgICBpZiAoIVV0aWxzLmlzT2ZUeXBlUGFyZW50Tm9kZShub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXAgPSBub2RlO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGNvbXAuY2hpbGRyZW47XG4gICAgICAgIC8vIEZvciBlYWNoIGNoaWxkIGluIHRoZSBwYXJlbnQgbm9kZVxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGZWYWx1ZSA9IHNlbGZQZXJjZW50YWdlKGNoaWxkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjdW11bGF0aXZlTGludERhdGEpO1xuICAgICAgICAgICAgY3VtdWxhdGl2ZVBlcmNlbnRhZ2UoY3VtdWxhdGl2ZUxpbnREYXRhLCBjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBMaW50VXRpbGl0aWVzLmN1bXVsYXRpdmVQZXJjZW50YWdlID0gY3VtdWxhdGl2ZVBlcmNlbnRhZ2U7XG4gICAgLyoqIENhbGN1bGF0aW9uIG9mIHNlbGYgcGFzcyBwZXJjZW50YWdlIG9mIG5vZGUgKGRvZXMgbm90IGluY2x1ZGUgY2FsY3VsYXRpb24gb2Ygc3VjY2VzcyBwZXJjZW50YWdlIG9mIGNoaWxkcmVuKSAqL1xuICAgIGZ1bmN0aW9uIHNlbGZQZXJjZW50YWdlKG5vZGUsIHRva2VuRXJyb3JzLCBnZW5lcmFsRXJyb3JzLCB0b2tlbldhcm5pbmdzLCBsaW50ZWREYXRhKSB7XG4gICAgICAgIGlmIChpc0xpbnRhYmxlTm9kZShub2RlLnR5cGUpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlUnVsZXMgPSBnZXRSdWxlcyhub2RlKTtcbiAgICAgICAgICAgIGNvbnN0IGxpbnRDb3VudCA9IHtcbiAgICAgICAgICAgICAgICBwYXNzZWQ6IDAsXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuRXJyb3JzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhbEVycm9yczogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdhcm5pbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuV2FybmluZ3M6IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gZXhlY3V0ZVJ1bGVzKG5vZGUsIG5vZGVSdWxlcywgbGludENvdW50KTtcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBVdGlscy5nZXRSb3VuZGVkRGVjaW1hbCgobGludENvdW50LnBhc3NlZCAvIGxpbnRDb3VudC50b3RhbCAqIDEwMCkpO1xuICAgICAgICAgICAgbGludGVkRGF0YS5wYXNzZWRMaW50ICs9IGxpbnRDb3VudC5wYXNzZWQ7XG4gICAgICAgICAgICBsaW50ZWREYXRhLnRvdGFsTGludCArPSBsaW50Q291bnQudG90YWw7XG4gICAgICAgICAgICBpZiAodG9rZW5XYXJuaW5ncykge1xuICAgICAgICAgICAgICAgIHRva2VuV2FybmluZ3MucHVzaCguLi5saW50Q291bnQud2FybmluZ3MudG9rZW5XYXJuaW5ncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9rZW5FcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0b2tlbkVycm9ycy5wdXNoKC4uLmxpbnRDb3VudC5lcnJvcnMudG9rZW5FcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdlbmVyYWxFcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBnZW5lcmFsRXJyb3JzLnB1c2goLi4ubGludENvdW50LmVycm9ycy5nZW5lcmFsRXJyb3JzKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5FcnJvcnMgJiYgdG9rZW5FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBnZW5lcmFsRXJyb3JzLnB1c2goYE1pc3NpbmcgdG9rZW5zIDogJHt0b2tlbkVycm9ycy5sZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0b2tlbldhcm5pbmdzICYmIHRva2VuV2FybmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBnZW5lcmFsRXJyb3JzLnB1c2goYExpbnQgd2FybmluZ3MgOiAke3Rva2VuV2FybmluZ3MubGVuZ3RofWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwZXJjZW50YWdlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIExpbnRVdGlsaXRpZXMuc2VsZlBlcmNlbnRhZ2UgPSBzZWxmUGVyY2VudGFnZTtcbn0pKExpbnRVdGlsaXRpZXMgfHwgKExpbnRVdGlsaXRpZXMgPSB7fSkpO1xuLyoqIE5hbWVzcGFjZSBmb3IgbmV0d29yayBjYWxsIHRvIGZldGNoIHRva2VucyBKU09OICovXG5leHBvcnQgdmFyIE5ldHdvcmtDYWxsO1xuKGZ1bmN0aW9uIChOZXR3b3JrQ2FsbCkge1xuICAgIC8qKiBMaXN0IG9mIHRva2VuIGZpbGVzICovXG4gICAgbGV0IFRva2VuRmlsZXM7XG4gICAgKGZ1bmN0aW9uIChUb2tlbkZpbGVzKSB7XG4gICAgICAgIFRva2VuRmlsZXNbXCJDb21wb25lbnRcIl0gPSBcIkNvbXBvbmVudFwiO1xuICAgICAgICBUb2tlbkZpbGVzW1wiU2VtYW50aWNcIl0gPSBcIlNlbWFudGljXCI7XG4gICAgfSkoVG9rZW5GaWxlcyB8fCAoVG9rZW5GaWxlcyA9IHt9KSk7XG4gICAgLyoqIExpc3Qgb2YgVVJMcyBvZiB0b2tlbiBmaWxlcyAqL1xuICAgIGxldCBmaWxlVVJMO1xuICAgIChmdW5jdGlvbiAoZmlsZVVSTCkge1xuICAgICAgICBmaWxlVVJMW1wiQ29tcG9uZW50XCJdID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1Bob25lUGUtR2xvYmFsRFNSZXBvL0xFR08vY29udGVudHMvdG9rZW5zLyVGMCU5RiU5NCU5MiUyMENvbXBvbmVudC5qc29uP3JlZj1Qcm9kdWN0aW9uXCI7XG4gICAgICAgIGZpbGVVUkxbXCJTZW1hbnRpY1wiXSA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9QaG9uZVBlLUdsb2JhbERTUmVwby9MRUdPL2NvbnRlbnRzL3Rva2Vucy9TZW1hbnRpYy5qc29uP3JlZj1Qcm9kdWN0aW9uXCI7XG4gICAgfSkoZmlsZVVSTCB8fCAoZmlsZVVSTCA9IHt9KSk7XG4gICAgLyoqIE1ldGhvZCB0byBmZXRjaCBVUkxzIG9mIHRva2VuIGZpbGVzICovXG4gICAgZnVuY3Rpb24gZ2V0VXJsKHRva2VuVHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHRva2VuVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUb2tlbkZpbGVzLkNvbXBvbmVudDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZVVSTC5Db21wb25lbnQ7XG4gICAgICAgICAgICBjYXNlIFRva2VuRmlsZXMuU2VtYW50aWM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVVUkwuU2VtYW50aWM7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVUkwgdHlwZTogJHt0b2tlblR5cGV9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIE1ldGhvZCB0byBkZWNvZGUgY29udGVudCBvZiByZXNwb25zZSAqL1xuICAgIGZ1bmN0aW9uIGRlY29kZUJhc2U2NChpbnB1dCkge1xuICAgICAgICBjb25zdCBjaGFycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbiAgICAgICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKCdbXicgKyBjaGFycyArICddJywgJ2cnKSwgJycpO1xuICAgICAgICBsZXQgYnVmZmVyID0gMDtcbiAgICAgICAgbGV0IGJ1ZmZlckxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IChidWZmZXIgPDwgNikgfCBjaGFycy5pbmRleE9mKGlucHV0LmNoYXJBdChpKSk7XG4gICAgICAgICAgICBidWZmZXJMZW5ndGggKz0gNjtcbiAgICAgICAgICAgIGlmIChidWZmZXJMZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChidWZmZXIgPj4gKGJ1ZmZlckxlbmd0aCAtIDgpKSAmIDI1NSk7XG4gICAgICAgICAgICAgICAgYnVmZmVyTGVuZ3RoIC09IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgLyoqIE1ldGhvZCB0byBkZWNvZGUgY29udGVudCBvZiByZXNwb25zZSAqL1xuICAgIGZ1bmN0aW9uIGZldGNoSlNPTih0b2tlblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldFVybCh0b2tlblR5cGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2godXJsKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGpzb246ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZGF0YS5jb250ZW50LnJlcGxhY2UoL1xcbi9nLCAnJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZENvbnRlbnQgPSBkZWNvZGVCYXNlNjQoY29udGVudCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJpbSBhbnkgZXh0cmEgdHJhaWxpbmcgY2hhcmFjdGVycyB0aGF0IG1pZ2h0IGFmZmVjdCBKU09OIHBhcnNpbmdcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyaW1tZWRDb250ZW50ID0gZGVjb2RlZENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0cmltbWVkQ29udGVudC5jaGFyQXQodHJpbW1lZENvbnRlbnQubGVuZ3RoIC0gMSkgIT09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJpbW1lZENvbnRlbnQgPSB0cmltbWVkQ29udGVudC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkNvbnRlbnQgPSBKU09OLnBhcnNlKHRyaW1tZWRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb25Db250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIEpTT046IFVuZXhwZWN0ZWQgZGF0YSBhdCB0aGUgZW5kLiBUaGUgY29udGVudCBtaWdodCBub3QgYmUgcHJvcGVybHkgZm9ybWF0dGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIEpTT046XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgTmV0d29ya0NhbGwuZmV0Y2hKU09OID0gZmV0Y2hKU09OO1xufSkoTmV0d29ya0NhbGwgfHwgKE5ldHdvcmtDYWxsID0ge30pKTtcbi8qKiBGdW5jdGlvbiB0byBkaXNwbGF5IGxpbnQgZGF0YSAqL1xuZnVuY3Rpb24gZGlzcGxheUxpbnREYXRhKGRhdGEpIHtcbiAgICByZXR1cm4gKGRhdGEgPT0gMTAwKSA/IGDinIVgIDogYCR7ZGF0YX0lIFBhc3NlZGA7XG59XG4vKiogRnVuY3Rpb24gdG8gY3JlYXRlIGxpbnQgZnJhbWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW50UmVzdWx0RnJhbWUoZGF0YSkge1xuICAgIGNvbnN0IGxpbnRGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgYXBwbHlBdXRvTGF5b3V0KGxpbnRGcmFtZSwgQ29uc3RhbnRzLnBhZGRpbmczLCBcIkhPUklaT05UQUxcIik7XG4gICAgbGludEZyYW1lLmZpbGxzID0gW107XG4gICAgY29uc3QgZGlzcGxheURhdGEgPSBkaXNwbGF5TGludERhdGEoZGF0YSk7XG4gICAgbGV0IGZvbnROYW1lID0geyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgbGV0IGNoZWNrTm9kZSA9IE5vZGVDcmVhdG9yLmdldE5ld1RleHROb2RlKGRpc3BsYXlEYXRhLCB7IHI6IDAuNDYsIGc6IDAsIGI6IDAgfSwgZm9udE5hbWUgPSBmb250TmFtZSk7XG4gICAgbGludEZyYW1lLmFwcGVuZENoaWxkKGNoZWNrTm9kZSk7XG4gICAgcmV0dXJuIGxpbnRGcmFtZTtcbn1cbi8qKiBGdW5jdGlvbiB0byBkaXNwbGF5IGdlbmVyYWwgbm9kZSBlcnJvcnMgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW50RXJyb3JGcmFtZShnZW5lcmFsRXJyb3JzKSB7XG4gICAgY29uc3QgbGludEVycm9yRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGFwcGx5QXV0b0xheW91dChsaW50RXJyb3JGcmFtZSwgQ29uc3RhbnRzLnBhZGRpbmcyLCBcIlZFUlRJQ0FMXCIpO1xuICAgIGxpbnRFcnJvckZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IENvbnN0YW50cy53aGl0ZSB9XTtcbiAgICBsaW50RXJyb3JGcmFtZS5jb3JuZXJSYWRpdXMgPSA2O1xuICAgIGxldCBmb250TmFtZSA9IHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgIGxldCBuZXdOb2RlID0gTm9kZUNyZWF0b3IuZ2V0TmV3VGV4dE5vZGUoYEVycm9yc2ApO1xuICAgIGxpbnRFcnJvckZyYW1lLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIGxldCBsaW5lID0gTm9kZUNyZWF0b3IuZ2V0VlNwYWNlcigxLCBDb25zdGFudHMuc2VwYXJhdG9yQ29sb3IpO1xuICAgIGxpbmUubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBsaW50RXJyb3JGcmFtZS5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICBsZXQgZGF0dW1Ob2RlcyA9IFtdO1xuICAgIGdlbmVyYWxFcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JOb2RlID0gTm9kZUNyZWF0b3IuZ2V0TmV3VGV4dE5vZGUoZXJyb3IsIHsgcjogMC4zNiwgZzogMCwgYjogMCB9LCBmb250TmFtZSA9IGZvbnROYW1lKTtcbiAgICAgICAgbGludEVycm9yRnJhbWUuYXBwZW5kQ2hpbGQoZXJyb3JOb2RlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGludEVycm9yRnJhbWU7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcGVyZm9ybXMgbGludCBjaGVja2luZyBvbiBhIGdpdmVuIEZpZ21hIG5vZGUuXG4gKiBJZiB0aGUgbm9kZSBpcyBsaW50YWJsZSwgaXQgY2FsY3VsYXRlcyB0aGUgcGVyY2VudGFnZSBvZiBwYXNzZWQgbGludCBjaGVja3MuXG4gKiBJZiB0aGUgbm9kZSBpcyBub3QgbGludGFibGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIC0xIHRvIGluZGljYXRlIHRoYXQgbGludCBjaGVja2luZyBpcyBub3QgYXBwbGljYWJsZS5cbiAqIEBwYXJhbSBub2RlIFRoZSBGaWdtYSBub2RlIHRvIHBlcmZvcm0gbGludCBjaGVja2luZyBvbi5cbiAqIEByZXR1cm5zIEEgcGVyY2VudGFnZSB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIHJhdGlvIG9mIHBhc3NlZCBsaW50IGNoZWNrcyB0byB0b3RhbCBsaW50IGNoZWNrcy5cbiAqIElmIGxpbnQgY2hlY2tpbmcgaXMgbm90IGFwcGxpY2FibGUgZm9yIHRoZSBub2RlLCByZXR1cm5zIC0xLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGludENoZWNrKG5vZGUsIHRva2VuRXJyb3JzLCBnZW5lcmFsRXJyb3JzLCB0b2tlbldhcm5pbmdzLCBsaW50ZWREYXRhKSB7XG4gICAgLy8gQXNzaWduIHRoZSBmZXRjaGVkIEpTT04gdG8gZ2xvYmFsIHZhcmlhYmxlc1xuICAgIHNlbWFudGljSlNPTiA9IExpbnRSZXBvcnRNYW5hZ2VyLnNlbWFudGljSlNPTiA/IExpbnRSZXBvcnRNYW5hZ2VyLnNlbWFudGljSlNPTiA6IEhhbmRvZmZNYW5hZ2VyLnNlbWFudGljSlNPTjtcbiAgICBjb21wb25lbnRKU09OID0gTGludFJlcG9ydE1hbmFnZXIuY29tcG9uZW50SlNPTiA/IExpbnRSZXBvcnRNYW5hZ2VyLmNvbXBvbmVudEpTT04gOiBIYW5kb2ZmTWFuYWdlci5jb21wb25lbnRKU09OO1xuICAgIC8vIENhbGN1bGF0aW9uIG9mIHBhc3NlZCBwZXJjZW50YWdlIG9mIG5vZGUgYXMgcGFyZW50IChpbmNsdWRlcyBzdWNjZXNzIHBlcmNlbnRhZ2Ugb2YgY2hpbGRyZW4pXG4gICAgY29uc3QgY3VtdWxhdGl2ZUxpbnREYXRhID0geyBwYXNzZWRMaW50OiAwLCB0b3RhbExpbnQ6IDAgfTtcbiAgICBMaW50VXRpbGl0aWVzLmN1bXVsYXRpdmVQZXJjZW50YWdlKGN1bXVsYXRpdmVMaW50RGF0YSwgbm9kZSk7XG4gICAgY29uc3QgY3VtdWxhdGl2ZVBhc3NQZXJjZW50YWdlID0gY3VtdWxhdGl2ZUxpbnREYXRhLnBhc3NlZExpbnQgKiAxMDAgLyBjdW11bGF0aXZlTGludERhdGEudG90YWxMaW50O1xuICAgIC8vIENhbGN1bGF0aW9uIG9mIHNlbGYgcGFzcyBwZXJjZW50YWdlIG9mIG5vZGUgKGRvZXMgbm90IGluY2x1ZGUgc3VjY2VzcyBwZXJjZW50YWdlIG9mIGNoaWxkcmVuKVxuICAgIGNvbnN0IHNlbGZQYXNzUGVyY2VudGFnZSA9IExpbnRVdGlsaXRpZXMuc2VsZlBlcmNlbnRhZ2Uobm9kZSwgdG9rZW5FcnJvcnMsIGdlbmVyYWxFcnJvcnMsIHRva2VuV2FybmluZ3MsIGxpbnRlZERhdGEpO1xuICAgIHJldHVybiBzZWxmUGFzc1BlcmNlbnRhZ2U7XG59XG4iLCJpbXBvcnQgeyBhcHBseUF1dG9MYXlvdXQgfSBmcm9tIFwiLi9sYXlvdXRpbmdcIjtcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVGV4dE5vZGUgd2l0aCB0aGUgc3BlY2lmaWVkIHRleHQsIGNvbG9yIGFuZCBmb250IHN0eWxlLlxuICogQHBhcmFtIHRleHQgLSBUaGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIFRleHROb2RlLlxuICogQHBhcmFtIGNvbG9yIC0gVGhlIGNvbG9yIG9mIHRoZSBUZXh0Tm9kZSdzIGZpbGwuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHsgcjogMC4xLCBnOiAwLjEsIGI6IDAuMSB9LlxuICogQHBhcmFtIGZvbnROYW1lIC0gVGhlIGZvbnQgZmFtaWx5IGFuZCBzdHlsZSBvZiB0aGUgVGV4dE5vZGUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9LlxuICogQHJldHVybnMgQSBuZXcgVGV4dE5vZGUgd2l0aCB0aGUgc3BlY2lmaWVkIHRleHQsIGNvbG9yIGFuZCBmb250IHN0eWxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3VGV4dE5vZGUodGV4dCwgY29sb3IgPSB7IHI6IDAuMSwgZzogMC4xLCBiOiAwLjEgfSwgZm9udE5hbWUgPSB7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSwgZm9udFNpemUgPSBDb25zdGFudHMuYm9keUZvbnRTaXplKSB7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IFRleHROb2RlXG4gICAgY29uc3QgdGV4dE5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgLy8gU2V0IHRoZSBUZXh0Tm9kZSdzIHRleHQsIGZpbGwgY29sb3IsIGZvbnQgZmFtaWx5IGFuZCBzaXplXG4gICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgdGV4dE5vZGUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogY29sb3IgfV07XG4gICAgdGV4dE5vZGUuZm9udE5hbWUgPSBmb250TmFtZTtcbiAgICB0ZXh0Tm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIC8vIFJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCBUZXh0Tm9kZVxuICAgIHJldHVybiB0ZXh0Tm9kZTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHZlcnRpY2FsIHNwYWNlciB3aXRoIHRoZSBzcGVjaWZpZWQgaGVpZ2h0LlxuICogQHBhcmFtIGhlaWdodCAtIFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgc3BhY2VyLlxuICogQHJldHVybnMgQSBmcmFtZSBjb250YWluaW5nIHRoZSB2ZXJ0aWNhbCBzcGFjZXIsIHdpdGggYSBncmF5IGJhY2tncm91bmQgY29sb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWU3BhY2VyKGhlaWdodCwgY29sb3IgPSB7IHI6IDAuOCwgZzogMC44LCBiOiAwLjggfSkge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBmcmFtZSB0byBjb250YWluIHRoZSBzcGFjZXJcbiAgICBjb25zdCBzcGFjZXIgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIC8vIFNldCB0aGUgZmlsbCBvZiB0aGUgc3BhY2VyIHRvIGEgZ3JheSBjb2xvclxuICAgIHNwYWNlci5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiBjb2xvciB9XTtcbiAgICAvLyBTZXQgdGhlIHNpemUgb2YgdGhlIHNwYWNlciB0byAxIHBpeGVsIHdpZGUgYW5kIHRoZSBzcGVjaWZpZWQgaGVpZ2h0XG4gICAgc3BhY2VyLnJlc2l6ZSgxLCBoZWlnaHQpO1xuICAgIC8vIFJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCBmcmFtZSBjb250YWluaW5nIHRoZSB2ZXJ0aWNhbCBzcGFjZXJcbiAgICByZXR1cm4gc3BhY2VyO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZyYW1lIGNvbnRhaW5pbmcgdHdvIFRleHROb2RlcyBhcyBpdHMgY2hpbGQgZWxlbWVudHMuXG4gKiBAcGFyYW0gbm9kZTEgLSBUaGUgZmlyc3QgVGV4dE5vZGUgdG8gYmUgYWRkZWQuXG4gKiBAcGFyYW0gbm9kZTIgLSBUaGUgc2Vjb25kIFRleHROb2RlIHRvIGJlIGFkZGVkLlxuICogQHJldHVybnMgQSBmcmFtZSBjb250YWluaW5nIHRoZSB0d28gVGV4dE5vZGVzLCBsYWlkIG91dCBob3Jpem9udGFsbHkgd2l0aCA0cHggc3BhY2luZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcldpdGhGcmFtZXMobm9kZTEsIG5vZGUyKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgY29udGFpbmVyLm5hbWUgPSBcInRleHQgaW5mbyBjb250YWluZXJcIjtcbiAgICBjb250YWluZXIuZmlsbHMgPSBbXTtcbiAgICAvLyBDb21wdXRlIHRoZSBuZWNlc3Nhcnkgc2l6ZSBvZiB0aGUgZnJhbWUgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIFRleHROb2Rlc1xuICAgIC8vIGNvbnRhaW5lci5yZXNpemUobm9kZTEud2lkdGggKyBub2RlMi53aWR0aCArIDE2LCBNYXRoLm1heChub2RlMS5oZWlnaHQsIG5vZGUyLmhlaWdodCkpO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgLy8gU2V0IHRoZSBsYXlvdXQgYW5kIGFsaWdubWVudCBvZiB0aGUgZnJhbWVcbiAgICAvLyBjb250YWluZXIubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklMTFwiXG4gICAgY29udGFpbmVyLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICBjb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgIC8vIGNvbnRhaW5lci5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSUxMXCJcbiAgICBjb250YWluZXIucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJTUEFDRV9CRVRXRUVOXCI7XG4gICAgLy8gY29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgLy8gY29udGFpbmVyLml0ZW1TcGFjaW5nID0gNDtcbiAgICAvLyBBcHBlbmQgdGhlIFRleHROb2RlcyBhcyBjaGlsZCBlbGVtZW50cyBvZiB0aGUgZnJhbWVcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZTEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlMik7XG4gICAgLy8gUG9zaXRpb24gdGhlIFRleHROb2RlcyBob3Jpem9udGFsbHkgd2l0aGluIHRoZSBmcmFtZVxuICAgIG5vZGUxLnggPSA4O1xuICAgIG5vZGUyLnggPSBub2RlMS53aWR0aCArIDI0O1xuICAgIC8vIFJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCBmcmFtZSBjb250YWluaW5nIGJvdGggVGV4dE5vZGVzXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIG5vZGUgd2l0aCB0aGUga2V5IGFuZCB2YWx1ZSBwYXNzZWQgYXMgYXJndW1lbnRzLlxuICogQHBhcmFtIGtleSAtIFRoZSBrZXkgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSBsYWJlbCBvZiB0aGUgdG9rZW4uXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSBjb250ZW50IG9mIHRoZSB0b2tlbi5cbiAqIEByZXR1cm5zIEEgZnJhbWUgY29udGFpbmluZyBhIHRva2VuIG5vZGUsIHdpdGggdGhlIGtleSBhbmQgdmFsdWUgbGFpZCBvdXQgaG9yaXpvbnRhbGx5IHVzaW5nIGEgNHB4IHNwYWNpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbk5vZGUoa2V5LCB2YWx1ZSkge1xuICAgIC8vIFNldCB0aGUgZm9udCBmYW1pbHkgYW5kIHN0eWxlXG4gICAgbGV0IGZvbnROYW1lID0geyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgLy8gQ3JlYXRlIGEgZnJhbWUgY29udGFpbmluZyB0d28gdGV4dCBub2Rlcywgb25lIGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZVxuICAgIHJldHVybiBjcmVhdGVDb250YWluZXJXaXRoRnJhbWVzKGdldE5ld1RleHROb2RlKGtleSwgdW5kZWZpbmVkLCBmb250TmFtZSA9IGZvbnROYW1lKSwgZ2V0TmV3VGV4dE5vZGUodmFsdWUsIHsgcjogMC40NiwgZzogMC4zOCwgYjogMCB9LCBmb250TmFtZSA9IGZvbnROYW1lKSk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBmcmFtZSBjb250YWluaW5nIG9uZSBvciBtb3JlIHRva2VuIG5vZGVzLCBlYWNoIHJlcHJlc2VudGluZyBhIGtleS12YWx1ZSBwYWlyLlxuICogQHBhcmFtIHRva2VucyAtIEFuIGFycmF5IG9mIGtleS12YWx1ZSBwYWlycyB0byBiZSBkaXNwbGF5ZWQgYXMgdG9rZW5zLlxuICogQHBhcmFtIHBhZGRpbmcgLSBUaGUgYW1vdW50IG9mIHBhZGRpbmcgdG8gYXBwbHkgdG8gdGhlIGZyYW1lIGFuZCB0aGUgdG9rZW4gbm9kZXMuXG4gKiBAcmV0dXJucyBBIGZyYW1lIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgdG9rZW4gbm9kZXMsIGxhaWQgb3V0IHZlcnRpY2FsbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbkZyYW1lKHRva2VucywgcGFkZGluZykge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBlbXB0eSBmcmFtZVxuICAgIGNvbnN0IHRva2VuRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIC8vIFJlbW92ZSB0aGUgZnJhbWUncyBiYWNrZ3JvdW5kXG4gICAgdG9rZW5GcmFtZS5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgIC8vIEFwcGx5IHZlcnRpY2FsIGF1dG8tbGF5b3V0IHdpdGggdGhlIHNwZWNpZmllZCBwYWRkaW5nXG4gICAgYXBwbHlBdXRvTGF5b3V0KHRva2VuRnJhbWUsIHBhZGRpbmcsIFwiVkVSVElDQUxcIik7XG4gICAgLy8gQWRkIGEgbmV3IHRva2VuIG5vZGUgdG8gdGhlIGZyYW1lIGZvciBlYWNoIGtleS12YWx1ZSBwYWlyIGluIHRoZSBgdG9rZW5zYCBhcnJheVxuICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IGdldFRva2VuTm9kZShgJHt0b2tlblswXX06YCwgdG9rZW5bMV0pO1xuICAgICAgICB0b2tlbkZyYW1lLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIH0pO1xuICAgIC8vIFJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCBmcmFtZSBjb250YWluaW5nIHRoZSB0b2tlbiBub2Rlc1xuICAgIHJldHVybiB0b2tlbkZyYW1lO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgaG9yaXpvbnRhbCBsaW5lIHNlcGFyYXRvciwgd2l0aCBhIHNvbGlkIGJsYWNrIHN0cm9rZSBhbmQgYSB0aGlja25lc3Mgb2YgMSBwaXhlbC5cbiAqIEByZXR1cm5zIEEgTGluZU5vZGUgcmVwcmVzZW50aW5nIHRoZSBob3Jpem9udGFsIGxpbmUgc2VwYXJhdG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VwYXJhdG9yKCkge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBsaW5lXG4gICAgY29uc3Qgc2VwYXJhdG9yID0gZmlnbWEuY3JlYXRlTGluZSgpO1xuICAgIC8vIFNldCB0aGUgbGluZSdzIHN0cm9rZSBjb2xvciB0byBibGFjayBhbmQgaXRzIHRoaWNrbmVzcyB0byAxIHBpeGVsXG4gICAgc2VwYXJhdG9yLnN0cm9rZXMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICBzZXBhcmF0b3Iuc3Ryb2tlV2VpZ2h0ID0gMTtcbiAgICAvLyBSb3RhdGUgdGhlIGxpbmUgMCBkZWdyZWVzIGFuZCBhbGlnbiBpdCB0byB0aGUgY2VudGVyIG9mIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgc2VwYXJhdG9yLnJvdGF0aW9uID0gMDtcbiAgICBzZXBhcmF0b3IuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJDRU5URVJcIiB9O1xuICAgIC8vIFJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCBsaW5lIHJlcHJlc2VudGluZyB0aGUgc2VwYXJhdG9yXG4gICAgcmV0dXJuIHNlcGFyYXRvcjtcbn1cbmZ1bmN0aW9uIGdldEZpcnN0RmlsbEhleENvZGUobm9kZSkge1xuICAgIC8vIFR5cGUgYXNzZXJ0aW9uIHRvIHRlbGwgVHlwZVNjcmlwdCB0aGF0IG5vZGUuZmlsbHMgaXMgYW4gYXJyYXkgb2YgUGFpbnQgb2JqZWN0c1xuICAgIGNvbnN0IGZpbGxzID0gbm9kZS5maWxscztcbiAgICBpZiAoIWZpbGxzIHx8IGZpbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZmlsbCA9IGZpbGxzWzBdO1xuICAgIGlmIChmaWxsID09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGZpbGwudHlwZSAhPSBcIlNPTElEXCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIFR5cGUgZ3VhcmQgdG8gZW5zdXJlIHRoYXQgZmlsbCBoYXMgYSBjb2xvciBwcm9wZXJ0eVxuICAgIGlmICgnY29sb3InIGluIGZpbGwgJiYgZmlsbC5jb2xvcikge1xuICAgICAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGZpbGwuY29sb3I7XG4gICAgICAgIGNvbnN0IGhleCA9ICgociAqIDI1NSA8PCAxNikgfCAoZyAqIDI1NSA8PCA4KSB8IGIgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuICcjJyArIGhleC5wYWRTdGFydCg2LCAnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8vIGNyZWF0ZSBhIGZyYW1lIGNvbnRhaW5pbmcgcmF3IGRhdGEgaW5mb3JtYXRpb25cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplRnJhbWUobm9kZSkge1xuICAgIGxldCBkZXRhaWxzID0gW107XG4gICAgY29uc3QgYWxsVmFsdWVzID0gT2JqZWN0LmtleXMoQ29uc3RhbnRzLlByaW1hcnlEYXRhVmFsdWVzKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBpc05hTihOdW1iZXIoa2V5KSkpXG4gICAgICAgIC5tYXAoa2V5ID0+IENvbnN0YW50cy5QcmltYXJ5RGF0YVZhbHVlc1trZXldKTtcbiAgICBhbGxWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IHNpemVEYXR1bSA9IGdldFNpemVEYXR1bShub2RlLCB2YWx1ZSk7XG4gICAgICAgIGlmIChzaXplRGF0dW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZGV0YWlscy5wdXNoKHNpemVEYXR1bSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZ2V0RGF0YURldGFpbHNGcmFtZShcIlJhdyBEYXRhXCIsIGRldGFpbHMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpemVEYXR1bShub2RlLCBkYXRhVmFsdWVUeXBlKSB7XG4gICAgbGV0IHByaW1hcnlEYXRhVmFsdWUgPSBkYXRhVmFsdWVUeXBlO1xuICAgIGxldCBzZWNvbmRhcnlEYXRhVmFsdWUgPSBkYXRhVmFsdWVUeXBlO1xuICAgIGlmIChwcmltYXJ5RGF0YVZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgc3dpdGNoIChwcmltYXJ5RGF0YVZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0YW50cy5QcmltYXJ5RGF0YVZhbHVlcy5XaWR0aDpcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IFV0aWxzLmdldFJvdW5kZWREZWNpbWFsKG5vZGUud2lkdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbXCJXaWR0aFwiLCBTdHJpbmcod2lkdGgpXTtcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnRzLlByaW1hcnlEYXRhVmFsdWVzLkhlaWdodDpcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBVdGlscy5nZXRSb3VuZGVkRGVjaW1hbChub2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcIkhlaWdodFwiLCBTdHJpbmcoaGVpZ2h0KV07XG4gICAgICAgICAgICBjYXNlIENvbnN0YW50cy5QcmltYXJ5RGF0YVZhbHVlcy5SYWRpdXM6XG4gICAgICAgICAgICAgICAgaWYgKCdjb3JuZXJSYWRpdXMnIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcIkNvcm5lclJhZGl1c1wiLCBgJHtTdHJpbmcobm9kZS5jb3JuZXJSYWRpdXMpfWBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnRzLlByaW1hcnlEYXRhVmFsdWVzLkZpbGw6XG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gZ2V0Rmlyc3RGaWxsSGV4Q29kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1wiRmlsbFwiLCBgJHtTdHJpbmcoY29sb3IpfWBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlY29uZGFyeURhdGFWYWx1ZSAhPSBudWxsKSB7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRGF0YURldGFpbHNGcmFtZShOb2RlLCBkYXRhLCBjb2xvciA9IHsgcjogMC40NiwgZzogMCwgYjogMCB9KSB7XG4gICAgYXBwbHlBdXRvTGF5b3V0KE5vZGUsIENvbnN0YW50cy5wYWRkaW5nMiwgXCJWRVJUSUNBTFwiKTtcbiAgICBsZXQgZm9udE5hbWUgPSB7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICBsZXQgZGF0dW1Ob2RlcyA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCgoZGF0dW0pID0+IHtcbiAgICAgICAgY29uc3QgZGF0dW1Ob2RlID0gY3JlYXRlQ29udGFpbmVyV2l0aEZyYW1lcyhnZXROZXdUZXh0Tm9kZShkYXR1bVswXSwgdW5kZWZpbmVkLCBmb250TmFtZSA9IGZvbnROYW1lKSwgZ2V0TmV3VGV4dE5vZGUoZGF0dW1bMV0sIGNvbG9yLCBmb250TmFtZSA9IGZvbnROYW1lKSk7XG4gICAgICAgIE5vZGUuYXBwZW5kQ2hpbGQoZGF0dW1Ob2RlKTtcbiAgICAgICAgZGF0dW1Ob2Rlcy5wdXNoKGRhdHVtTm9kZSk7XG4gICAgfSk7XG4gICAgdmFyIG1heFdpZHRoID0gMDtcbiAgICB2YXIgbWF4V2lkdGgyID0gMDtcbiAgICBkYXR1bU5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dDFXaWR0aCA9IG5vZGUuY2hpbGRyZW5bMF0ud2lkdGg7XG4gICAgICAgIGNvbnN0IHRleHQyV2lkdGggPSBub2RlLmNoaWxkcmVuWzFdLndpZHRoO1xuICAgICAgICBtYXhXaWR0aCA9IE1hdGgubWF4KHRleHQxV2lkdGgsIG1heFdpZHRoKTtcbiAgICAgICAgbWF4V2lkdGgyID0gTWF0aC5tYXgodGV4dDJXaWR0aCwgbWF4V2lkdGgyKTtcbiAgICB9KTtcbiAgICBkYXR1bU5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5yZXNpemUoTWF0aC5tYXgobWF4V2lkdGggKyBtYXhXaWR0aDIgKyBDb25zdGFudHMucGFkZGluZzMsIDIwMCksIG5vZGUuaGVpZ2h0KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRGV0YWlsc0ZyYW1lKHRpdGxlLCBkYXRhLCBjb2xvciA9IHsgcjogMC40NiwgZzogMC4zOCwgYjogMCB9KSB7XG4gICAgY29uc3QgZGV0YWlsc0ZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBhcHBseUF1dG9MYXlvdXQoZGV0YWlsc0ZyYW1lLCBDb25zdGFudHMucGFkZGluZzIsIFwiVkVSVElDQUxcIik7XG4gICAgZGV0YWlsc0ZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IENvbnN0YW50cy53aGl0ZSB9XTtcbiAgICBkZXRhaWxzRnJhbWUuY29ybmVyUmFkaXVzID0gNjtcbiAgICBsZXQgZm9udE5hbWUgPSB7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICBsZXQgbmV3Tm9kZSA9IGdldE5ld1RleHROb2RlKHRpdGxlKTtcbiAgICBkZXRhaWxzRnJhbWUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgbGV0IGxpbmUgPSBnZXRWU3BhY2VyKDEsIENvbnN0YW50cy5zZXBhcmF0b3JDb2xvcik7XG4gICAgbGluZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGRldGFpbHNGcmFtZS5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICBsZXQgZGF0dW1Ob2RlcyA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCgoZGF0dW0pID0+IHtcbiAgICAgICAgY29uc3QgZGF0dW1Ob2RlID0gY3JlYXRlQ29udGFpbmVyV2l0aEZyYW1lcyhnZXROZXdUZXh0Tm9kZShkYXR1bVswXSwgdW5kZWZpbmVkLCBmb250TmFtZSA9IGZvbnROYW1lKSwgZ2V0TmV3VGV4dE5vZGUoZGF0dW1bMV0sIGNvbG9yLCBmb250TmFtZSA9IGZvbnROYW1lKSk7XG4gICAgICAgIGRldGFpbHNGcmFtZS5hcHBlbmRDaGlsZChkYXR1bU5vZGUpO1xuICAgICAgICBkYXR1bU5vZGVzLnB1c2goZGF0dW1Ob2RlKTtcbiAgICB9KTtcbiAgICB2YXIgbWF4V2lkdGggPSAwO1xuICAgIHZhciBtYXhXaWR0aDIgPSAwO1xuICAgIGRhdHVtTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0MVdpZHRoID0gbm9kZS5jaGlsZHJlblswXS53aWR0aDtcbiAgICAgICAgY29uc3QgdGV4dDJXaWR0aCA9IG5vZGUuY2hpbGRyZW5bMV0ud2lkdGg7XG4gICAgICAgIG1heFdpZHRoID0gTWF0aC5tYXgodGV4dDFXaWR0aCwgbWF4V2lkdGgpO1xuICAgICAgICBtYXhXaWR0aDIgPSBNYXRoLm1heCh0ZXh0MldpZHRoLCBtYXhXaWR0aDIpO1xuICAgIH0pO1xuICAgIGRhdHVtTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLnJlc2l6ZShNYXRoLm1heChtYXhXaWR0aCArIG1heFdpZHRoMiArIDQsIDIwMCksIG5vZGUuaGVpZ2h0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGV0YWlsc0ZyYW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoaWxkVGl0bGVOb2RlKGNoaWxkKSB7XG4gICAgbGV0IGZvbnROYW1lID0geyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH07XG4gICAgbGV0IGNoaWxkTmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgY2hpbGROYW1lLm5hbWUgPSBcIkNoaWxkIG5hbWVcIjtcbiAgICBjb25zdCBjaGlsZE5hbWVOb2RlID0gZ2V0TmV3VGV4dE5vZGUoY2hpbGQubmFtZSwgeyByOiAwLCBnOiAwLCBiOiAwIH0sIGZvbnROYW1lKTtcbiAgICBjaGlsZE5hbWVOb2RlLmZvbnRTaXplID0gQ29uc3RhbnRzLnRpdGxlMkZvbnRTaXplO1xuICAgIGNvbnN0IGNoaWxkVHlwZU5vZGUgPSBnZXROZXdUZXh0Tm9kZShgPCR7Y2hpbGQudHlwZX0+YCwgeyByOiAwLCBnOiAwLCBiOiAwIH0pO1xuICAgIGNoaWxkVHlwZU5vZGUuZm9udFNpemUgPSBDb25zdGFudHMudGl0bGUzRm9udFNpemU7XG4gICAgY2hpbGROYW1lLmFwcGVuZENoaWxkKGNoaWxkVHlwZU5vZGUpO1xuICAgIGNoaWxkTmFtZS5hcHBlbmRDaGlsZChjaGlsZE5hbWVOb2RlKTtcbiAgICBjaGlsZE5hbWUuYmFja2dyb3VuZHMgPSBbXTtcbiAgICBjaGlsZE5hbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgIGNoaWxkTmFtZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGNoaWxkTmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBjaGlsZE5hbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICBjaGlsZE5hbWUuaXRlbVNwYWNpbmcgPSBDb25zdGFudHMucGFkZGluZzE7XG4gICAgY2hpbGROYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICByZXR1cm4gY2hpbGROYW1lO1xufVxuIiwiLyoqXG4gKiBFbnVtIGRlZmluaW5nIGJvcmRlciBjb2xvciBsaW50IHJ1bGVzLlxuICovXG52YXIgTGludFJ1bGVzX2JvcmRlckNvbG9yO1xuKGZ1bmN0aW9uIChMaW50UnVsZXNfYm9yZGVyQ29sb3IpIHtcbiAgICBMaW50UnVsZXNfYm9yZGVyQ29sb3JbXCJCb3JkZXJDb2xvclwiXSA9IFwiYm9yZGVyQ29sb3JcIjtcbn0pKExpbnRSdWxlc19ib3JkZXJDb2xvciB8fCAoTGludFJ1bGVzX2JvcmRlckNvbG9yID0ge30pKTtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBib3JkZXIgc3Ryb2tlIGlzIHByZXNlbnQgb24gbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQm9yZGVyQ29sb3Iobm9kZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG5vZGUuc3Ryb2tlcykgJiYgbm9kZS5zdHJva2VzLnNvbWUoKHN0cm9rZSkgPT4gc3Ryb2tlLnZpc2libGUgPT09IHRydWUpO1xufVxuLyoqXG4gKiBBbmFseXplcyBhIGdpdmVuIFNjZW5lTm9kZSB0byBkZXRlcm1pbmUgaWYgaXQgYWRoZXJlcyB0byBwYWRkaW5nIGZpbGwgcnVsZXMuXG4gKiBAcGFyYW0gbm9kZSAtIFRoZSBTY2VuZU5vZGUgdG8gYmUgbGludGVkIGZvciBmaWxsLlxuICogQHBhcmFtIGxpbnRDb3VudCAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvdW50cyBvZiBwYXNzZWQgYW5kIHRvdGFsIGxpbnRpbmcgY2hlY2tzLlxuICogQHBhcmFtIGxpbnRDb3VudC5wYXNzZWQgLSBUaGUgY291bnQgb2YgdHlwb2dyYXBoeSBmaWxsIGNoZWNrcyB0aGF0IGhhdmUgcGFzc2VkLlxuICogQHBhcmFtIGxpbnRDb3VudC50b3RhbCAtIFRoZSB0b3RhbCBjb3VudCBvZiBsaW50aW5nIGNoZWNrcy5cbiAqIEBwYXJhbSBsaW50Q291bnQuZXJyb3JzIC0gQXJyYXkgZm9yIHN0b3JpbmcgZmFpbGVkIGxpbnQgY2hlY2tzLlxuICogQHJldHVybnMgVHJ1ZSBpZiBmaWxsIGxpbnRpbmcgaGFzIHBhc3NlZCBmb3IgdGhlIGdpdmVuIG5vZGUsIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbnRCb3JkZXJDb2xvcihub2RlLCBsaW50Q291bnQsIGNvbXBUb2tlbnMpIHtcbiAgICBjb25zdCBrZXlzID0gbm9kZS5nZXRTaGFyZWRQbHVnaW5EYXRhS2V5cyhcInRva2Vuc1wiKTtcbiAgICBjb25zdCBwcmltYXJ5Qm9yZGVyQ29sb3JDaGVja3MgPSBbTGludFJ1bGVzX2JvcmRlckNvbG9yLkJvcmRlckNvbG9yXTtcbiAgICAvLyBDaGVjayBpZiBjb21wb3NpdGlvbiB0b2tlbiBpbmNsdWRlcyBib3JkZXIgY29sb3Igb3IgdG9rZW4gJ2JvcmRlckNvbG9yJyBpcyBwcmVzZW50XG4gICAgaWYgKGNvbXBUb2tlbnMuaW5jbHVkZXMoTGludFJ1bGVzX2JvcmRlckNvbG9yLkJvcmRlckNvbG9yKSkge1xuICAgICAgICBsaW50Q291bnQucGFzc2VkKys7XG4gICAgICAgIGxpbnRDb3VudC50b3RhbCsrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGludENvdW50LnBhc3NlZCArPSBwcmltYXJ5Qm9yZGVyQ29sb3JDaGVja3MuZmlsdGVyKHByaW1hcnlCb3JkZXJDb2xvckNoZWNrID0+IGtleXMuaW5jbHVkZXMocHJpbWFyeUJvcmRlckNvbG9yQ2hlY2spKS5sZW5ndGg7XG4gICAgICAgIGxpbnRDb3VudC50b3RhbCArPSBwcmltYXJ5Qm9yZGVyQ29sb3JDaGVja3MubGVuZ3RoO1xuICAgICAgICBsaW50Q291bnQuZXJyb3JzLnRva2VuRXJyb3JzLnB1c2goLi4ucHJpbWFyeUJvcmRlckNvbG9yQ2hlY2tzLmZpbHRlcihwcmltYXJ5Qm9yZGVyQ29sb3JDaGVjayA9PiAha2V5cy5pbmNsdWRlcyhwcmltYXJ5Qm9yZGVyQ29sb3JDaGVjaykpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbnRDb3VudC5wYXNzZWQgPT0gbGludENvdW50LnRvdGFsO1xufVxuIiwiLyoqXG4gKiBFbnVtIG1hdGNoaW5nIGJvcmRlciB3aWR0aCB0b2tlbnMgdG8gZmlnbWEgbm9kZSBwcm9wZXJ0aWVzXG4gKi9cbnZhciBMaW50UnVsZXNfYm9yZGVyV2lkdGg7XG4oZnVuY3Rpb24gKExpbnRSdWxlc19ib3JkZXJXaWR0aCkge1xuICAgIExpbnRSdWxlc19ib3JkZXJXaWR0aFtcImJvcmRlcldpZHRoXCJdID0gXCJzdHJva2VXZWlnaHRcIjtcbiAgICBMaW50UnVsZXNfYm9yZGVyV2lkdGhbXCJib3JkZXJXaWR0aFRvcFwiXSA9IFwic3Ryb2tlVG9wV2VpZ2h0XCI7XG4gICAgTGludFJ1bGVzX2JvcmRlcldpZHRoW1wiYm9yZGVyV2lkdGhCb3R0b21cIl0gPSBcInN0cm9rZUJvdHRvbVdlaWdodFwiO1xuICAgIExpbnRSdWxlc19ib3JkZXJXaWR0aFtcImJvcmRlcldpZHRoTGVmdFwiXSA9IFwic3Ryb2tlTGVmdFdlaWdodFwiO1xuICAgIExpbnRSdWxlc19ib3JkZXJXaWR0aFtcImJvcmRlcldpZHRoUmlnaHRcIl0gPSBcInN0cm9rZVJpZ2h0V2VpZ2h0XCI7XG59KShMaW50UnVsZXNfYm9yZGVyV2lkdGggfHwgKExpbnRSdWxlc19ib3JkZXJXaWR0aCA9IHt9KSk7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgYm9yZGVyIHN0cm9rZSBpcyBwcmVzZW50IG9uIG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZEJvcmRlcldpZHRoKG5vZGUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShub2RlLnN0cm9rZXMpICYmIG5vZGUuc3Ryb2tlcy5zb21lKChzdHJva2UpID0+IHN0cm9rZS52aXNpYmxlID09PSB0cnVlKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBib3JkZXIgd2lkdGggb2YgYSBub2RlIGlzIGEgZmlnbWEubWl4ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1peGVkQm9yZGVyV2lkdGgobm9kZSkge1xuICAgIHJldHVybiB0eXBlb2Ygbm9kZS5zdHJva2VXZWlnaHQgPT09ICdzeW1ib2wnO1xufVxuLyoqXG4gKiBBbmFseXplcyBhIGdpdmVuIFNjZW5lTm9kZSB0byBkZXRlcm1pbmUgaWYgaXQgYWRoZXJlcyB0byBib3JkZXIgd2lkdGggbGludGluZyBydWxlcy5cbiAqIEBwYXJhbSBub2RlIC0gVGhlIFNjZW5lTm9kZSB0byBiZSBsaW50ZWQgZm9yIGJvcmRlciB3aWR0aC5cbiAqIEBwYXJhbSBsaW50Q291bnQgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb3VudHMgb2YgcGFzc2VkIGFuZCB0b3RhbCBsaW50aW5nIGNoZWNrcy5cbiAqIEBwYXJhbSBsaW50Q291bnQucGFzc2VkIC0gVGhlIGNvdW50IG9mIHR5cG9ncmFwaHkgZmlsbCBjaGVja3MgdGhhdCBoYXZlIHBhc3NlZC5cbiAqIEBwYXJhbSBsaW50Q291bnQudG90YWwgLSBUaGUgdG90YWwgY291bnQgb2YgbGludGluZyBjaGVja3MuXG4gKiBAcGFyYW0gbGludENvdW50LmVycm9ycyAtIEFycmF5IGZvciBzdG9yaW5nIGxpbnQgZXJyb3JzLlxuICogQHJldHVybnMgVHJ1ZSBpZiBib3JkZXIgd2lkdGggbGludGluZyBoYXMgcGFzc2VkIGZvciB0aGUgZ2l2ZW4gbm9kZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGludEJvcmRlcldpZHRoKG5vZGUsIGxpbnRDb3VudCwgY29tcFRva2Vucykge1xuICAgIGNvbnN0IGtleXMgPSBub2RlLmdldFNoYXJlZFBsdWdpbkRhdGFLZXlzKFwidG9rZW5zXCIpO1xuICAgIGNvbnN0IHByaW1hcnlCb3JkZXJXaWR0aENoZWNrcyA9IFtMaW50UnVsZXNfYm9yZGVyV2lkdGguYm9yZGVyV2lkdGhdO1xuICAgIGNvbnN0IHNlY29uZGFyeUJvcmRlcldpZHRoQ2hlY2tzID0gW0xpbnRSdWxlc19ib3JkZXJXaWR0aC5ib3JkZXJXaWR0aFRvcCwgTGludFJ1bGVzX2JvcmRlcldpZHRoLmJvcmRlcldpZHRoQm90dG9tLCBMaW50UnVsZXNfYm9yZGVyV2lkdGguYm9yZGVyV2lkdGhMZWZ0LCBMaW50UnVsZXNfYm9yZGVyV2lkdGguYm9yZGVyV2lkdGhSaWdodF07XG4gICAgY29uc3QgaGFzTm9uWmVyb0JvcmRlcldpZHRoID0gdmFsaWRCb3JkZXJXaWR0aChub2RlKTtcbiAgICBjb25zdCBpc01peGVkQm9yZGVyV2lkdGggPSBtaXhlZEJvcmRlcldpZHRoKG5vZGUpO1xuICAgIC8vIElmIGJvcmRlciB3aWR0aCBpcyBtaXhlZCwgY2hlY2sgYm9yZGVyIHdpZHRoIG9mIGFsbCBzaWRlcyBpbmRpdmlkdWFsbHkgb3IgaWYgdG9rZW5zIGJvcmRlciB3aWR0aCBvZiBzaWRlcyBhcmUgcHJlc2VlbnQgaW4gY29tcG9zaXRpb24gdG9rZW4uIFxuICAgIC8vIEVsc2UgY2hlY2sgaWYgZWl0aGVyIHRva2VuIGZvciBib3JkZXIgd2lkdGggb3IgYm9yZGVyIHdpZHRoIG9mIGFsbCBzaWRlcyBpcyBwcmVzZW50LlxuICAgIGlmIChpc01peGVkQm9yZGVyV2lkdGgpIHtcbiAgICAgICAgc2Vjb25kYXJ5Qm9yZGVyV2lkdGhDaGVja3MuZm9yRWFjaCh3aWR0aHByb3AgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhWYWx1ZSA9IG5vZGVbd2lkdGhwcm9wXTtcbiAgICAgICAgICAgIGlmICh3aWR0aFZhbHVlICE9PSAwICYmIHdpZHRoVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGtleXMgb2YgZW51bSBhcmUgcHJlc2VudCBhcyB0b2tlbiBrZXlzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kYXJ5V2lkdGhLZXkgPSBPYmplY3Qua2V5cyhMaW50UnVsZXNfYm9yZGVyV2lkdGgpLmZpbmQoKGtleSkgPT4gTGludFJ1bGVzX2JvcmRlcldpZHRoW2tleV0gPT09IHdpZHRocHJvcCk7XG4gICAgICAgICAgICAgICAgbGludENvdW50LnRvdGFsKys7XG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZGFyeVdpZHRoS2V5ICYmIChrZXlzLmluY2x1ZGVzKHNlY29uZGFyeVdpZHRoS2V5KSB8fCBjb21wVG9rZW5zLmluY2x1ZGVzKHNlY29uZGFyeVdpZHRoS2V5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGludENvdW50LnBhc3NlZCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGludENvdW50LmVycm9ycy50b2tlbkVycm9ycy5wdXNoKHNlY29uZGFyeVdpZHRoS2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeVdpZHRoS2V5ID0gT2JqZWN0LmtleXMoTGludFJ1bGVzX2JvcmRlcldpZHRoKS5maW5kKChrZXkpID0+IExpbnRSdWxlc19ib3JkZXJXaWR0aFtrZXldID09PSAnc3Ryb2tlV2VpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVdpZHRoS2V5cyA9IE9iamVjdC5rZXlzKExpbnRSdWxlc19ib3JkZXJXaWR0aCkuZmlsdGVyKChrZXkpID0+IExpbnRSdWxlc19ib3JkZXJXaWR0aFtrZXldICE9PSAnc3Ryb2tlV2VpZ2h0Jyk7XG4gICAgICAgIGlmICgocHJpbWFyeVdpZHRoS2V5ICYmIChrZXlzLmluY2x1ZGVzKHByaW1hcnlXaWR0aEtleSkgfHwgY29tcFRva2Vucy5pbmNsdWRlcyhwcmltYXJ5V2lkdGhLZXkpKSkgfHwgKHNlY29uZGFyeVdpZHRoS2V5cyAmJiAoc2Vjb25kYXJ5V2lkdGhLZXlzLmV2ZXJ5KHNlY29uZGFyeVdpZHRoS2V5ID0+IGtleXMuaW5jbHVkZXMoc2Vjb25kYXJ5V2lkdGhLZXkpKSB8fCBzZWNvbmRhcnlXaWR0aEtleXMuZXZlcnkoc2Vjb25kYXJ5V2lkdGhLZXkgPT4gY29tcFRva2Vucy5pbmNsdWRlcyhzZWNvbmRhcnlXaWR0aEtleSkpKSkpIHtcbiAgICAgICAgICAgIGxpbnRDb3VudC5wYXNzZWQrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcmltYXJ5V2lkdGhLZXkpIHtcbiAgICAgICAgICAgICAgICBsaW50Q291bnQuZXJyb3JzLnRva2VuRXJyb3JzLnB1c2gocHJpbWFyeVdpZHRoS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW50Q291bnQudG90YWwrKztcbiAgICB9XG4gICAgcmV0dXJuIGxpbnRDb3VudC5wYXNzZWQgPT0gbGludENvdW50LnRvdGFsO1xufVxuIiwiLyoqXG4gKiBFbnVtIG1hdGNoaW5nIHJlcXVpcmUgdG9rZW4gbmFtZXMgdG8gcmVzcGVjdGl2ZSBmaWdtYSBub2RlIHByb3BlcnRpZXNcbiAqL1xudmFyIExpbnRSdWxlc19ib3hTaGFkb3c7XG4oZnVuY3Rpb24gKExpbnRSdWxlc19ib3hTaGFkb3cpIHtcbiAgICBMaW50UnVsZXNfYm94U2hhZG93W1wiYm94U2hhZG93XCJdID0gXCJEUk9QX1NIQURPV1wiO1xufSkoTGludFJ1bGVzX2JveFNoYWRvdyB8fCAoTGludFJ1bGVzX2JveFNoYWRvdyA9IHt9KSk7XG4vKipcbiAqIENoZWNrcyBpZiBhIG5vZGUncyBlZmZlY3RzIGhhdmUgYSAnRFJPUF9TSEFET1cnIGVmZmVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQm94U2hhZG93KG5vZGUpIHtcbiAgICBsZXQgaGFzRHJvcFNoYWRvdyA9IGZhbHNlO1xuICAgIGlmIChub2RlLmVmZmVjdHMpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBlZmZlY3RzIG9mIHRoZSBGcmFtZU5vZGVcbiAgICAgICAgbm9kZS5lZmZlY3RzLmZvckVhY2goZWZmZWN0ID0+IHtcbiAgICAgICAgICAgIGhhc0Ryb3BTaGFkb3cgPSAoZWZmZWN0LnR5cGUgPT09IExpbnRSdWxlc19ib3hTaGFkb3cuYm94U2hhZG93KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNEcm9wU2hhZG93O1xufVxuLyoqXG4gKiBBbmFseXplcyBhIGdpdmVuIFNjZW5lTm9kZSB0byBkZXRlcm1pbmUgaWYgaXQgaXMgZGV0YWNoZWQuXG4gKiBAcGFyYW0gbm9kZSAtIFRoZSBTY2VuZU5vZGUgdG8gYmUgbGludGVkIGZvciBkZXRhY2htZW50LlxuICogQHBhcmFtIGxpbnRDb3VudCAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvdW50cyBvZiBwYXNzZWQgYW5kIHRvdGFsIGxpbnRpbmcgY2hlY2tzLlxuICogQHBhcmFtIGxpbnRDb3VudC5wYXNzZWQgLSBUaGUgY291bnQgb2YgdHlwb2dyYXBoeSBmaWxsIGNoZWNrcyB0aGF0IGhhdmUgcGFzc2VkLlxuICogQHBhcmFtIGxpbnRDb3VudC50b3RhbCAtIFRoZSB0b3RhbCBjb3VudCBvZiBsaW50aW5nIGNoZWNrcy5cbiAqIEBwYXJhbSBsaW50Q291bnQuZXJyb3JzIC0gQXJyYXkgZm9yIHN0b3JpbmcgZmFpbGVkIGxpbnQgY2hlY2tzLlxuICogQHJldHVybnMgVHJ1ZSBpZiBkZXRhY2htZW50IGxpbnRpbmcgaGFzIHBhc3NlZCBmb3IgdGhlIGdpdmVuIG5vZGUsIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbnRCb3hTaGFkb3cobm9kZSwgbGludENvdW50LCBjb21wVG9rZW5zKSB7XG4gICAgY29uc3Qga2V5cyA9IG5vZGUuZ2V0U2hhcmVkUGx1Z2luRGF0YUtleXMoXCJ0b2tlbnNcIik7XG4gICAgY29uc3QgYm94U2hhZG93S2V5ID0gT2JqZWN0LmtleXMoTGludFJ1bGVzX2JveFNoYWRvdykuZmluZCgoa2V5KSA9PiBMaW50UnVsZXNfYm94U2hhZG93W2tleV0gPT09IExpbnRSdWxlc19ib3hTaGFkb3cuYm94U2hhZG93KTtcbiAgICBpZiAoYm94U2hhZG93S2V5ICYmIChrZXlzLmluY2x1ZGVzKGJveFNoYWRvd0tleSkgfHwgY29tcFRva2Vucy5pbmNsdWRlcyhib3hTaGFkb3dLZXkpKSkge1xuICAgICAgICBsaW50Q291bnQucGFzc2VkKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsaW50Q291bnQuZXJyb3JzLnRva2VuRXJyb3JzLnB1c2goYm94U2hhZG93S2V5KTtcbiAgICB9XG4gICAgbGludENvdW50LnRvdGFsKys7XG4gICAgcmV0dXJuIGxpbnRDb3VudC5wYXNzZWQgPT0gbGludENvdW50LnRvdGFsO1xufVxuIiwiLyoqXG4gKiBFbnVtIG1hdGNoaW5nIGNvcm5lciByYWRpdXMgdG9rZW5zIHRvIGZpZ21hIG5vZGUgcHJvcGVydGllc1xuICovXG52YXIgTGludFJ1bGVzX2Nvcm5lclJhZGl1cztcbihmdW5jdGlvbiAoTGludFJ1bGVzX2Nvcm5lclJhZGl1cykge1xuICAgIExpbnRSdWxlc19jb3JuZXJSYWRpdXNbXCJib3JkZXJSYWRpdXNcIl0gPSBcImJvcmRlclJhZGl1c1wiO1xuICAgIExpbnRSdWxlc19jb3JuZXJSYWRpdXNbXCJib3JkZXJSYWRpdXNUb3BMZWZ0XCJdID0gXCJ0b3BMZWZ0UmFkaXVzXCI7XG4gICAgTGludFJ1bGVzX2Nvcm5lclJhZGl1c1tcImJvcmRlclJhZGl1c1RvcFJpZ2h0XCJdID0gXCJ0b3BSaWdodFJhZGl1c1wiO1xuICAgIExpbnRSdWxlc19jb3JuZXJSYWRpdXNbXCJib3JkZXJSYWRpdXNCb3R0b21MZWZ0XCJdID0gXCJib3R0b21MZWZ0UmFkaXVzXCI7XG4gICAgTGludFJ1bGVzX2Nvcm5lclJhZGl1c1tcImJvcmRlclJhZGl1c0JvdHRvbVJpZ2h0XCJdID0gXCJib3R0b21SaWdodFJhZGl1c1wiO1xufSkoTGludFJ1bGVzX2Nvcm5lclJhZGl1cyB8fCAoTGludFJ1bGVzX2Nvcm5lclJhZGl1cyA9IHt9KSk7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY29ybmVyIHJhZGl1cyBvZiBhIG5vZGUgaXMgYSBmaWdtYS5taXhlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWl4ZWRDb3JuZXJSYWRpdXMobm9kZSkge1xuICAgIHJldHVybiB0eXBlb2Ygbm9kZS5jb3JuZXJSYWRpdXMgPT09ICdzeW1ib2wnO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGNvcm5lciByYWRpdXMgb2YgYSBub2RlIGlzIG5vbi16ZXJvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9uWmVyb0Nvcm5lclJhZGl1cyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuY29ybmVyUmFkaXVzICE9PSAwICYmIG5vZGUuY29ybmVyUmFkaXVzICE9PSB1bmRlZmluZWQ7XG59XG4vKipcbiAqIEFuYWx5emVzIGEgZ2l2ZW4gU2NlbmVOb2RlIHRvIGRldGVybWluZSBpZiBpdCBhZGhlcmVzIHRvIGNvcm5lciByYWRpdXMgZmlsbCBydWxlcy5cbiAqIEBwYXJhbSBub2RlIC0gVGhlIFNjZW5lTm9kZSB0byBiZSBsaW50ZWQgZm9yIGNvcm5lciByYWRpdXMuXG4gKiBAcGFyYW0gbGludENvdW50IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY291bnRzIG9mIHBhc3NlZCBhbmQgdG90YWwgbGludGluZyBjaGVja3MuXG4gKiBAcGFyYW0gbGludENvdW50LnBhc3NlZCAtIFRoZSBjb3VudCBvZiB0eXBvZ3JhcGh5IGZpbGwgY2hlY2tzIHRoYXQgaGF2ZSBwYXNzZWQuXG4gKiBAcGFyYW0gbGludENvdW50LnRvdGFsIC0gVGhlIHRvdGFsIGNvdW50IG9mIGxpbnRpbmcgY2hlY2tzLlxuICogQHBhcmFtIGxpbnRDb3VudC5lcnJvcnMgLSBBcnJheSBmb3Igc3RvcmluZyBmYWlsZWQgbGludCBjaGVja3MuXG4gKiBAcmV0dXJucyBUcnVlIGlmIGNvcm5lciByYWRpdXMgbGludGluZyBoYXMgcGFzc2VkIGZvciB0aGUgZ2l2ZW4gbm9kZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGludENvcm5lclJhZGl1cyhub2RlLCBsaW50Q291bnQsIGNvbXBUb2tlbnMpIHtcbiAgICBjb25zdCBrZXlzID0gbm9kZS5nZXRTaGFyZWRQbHVnaW5EYXRhS2V5cyhcInRva2Vuc1wiKTtcbiAgICBjb25zdCBwcmltYXJ5Q29ybmVyUmFkaXVzQ2hlY2tzID0gW0xpbnRSdWxlc19jb3JuZXJSYWRpdXMuYm9yZGVyUmFkaXVzXTtcbiAgICBjb25zdCBzZWNvbmRhcnlDb3JuZXJSYWRpdXNDaGVja3MgPSBbTGludFJ1bGVzX2Nvcm5lclJhZGl1cy5ib3JkZXJSYWRpdXNUb3BMZWZ0LCBMaW50UnVsZXNfY29ybmVyUmFkaXVzLmJvcmRlclJhZGl1c1RvcFJpZ2h0LCBMaW50UnVsZXNfY29ybmVyUmFkaXVzLmJvcmRlclJhZGl1c0JvdHRvbUxlZnQsIExpbnRSdWxlc19jb3JuZXJSYWRpdXMuYm9yZGVyUmFkaXVzQm90dG9tUmlnaHRdO1xuICAgIGNvbnN0IGlzTm9uWmVybyA9IG5vblplcm9Db3JuZXJSYWRpdXMobm9kZSk7XG4gICAgY29uc3QgaXNNaXhlZCA9IG1peGVkQ29ybmVyUmFkaXVzKG5vZGUpO1xuICAgIGlmIChpc01peGVkKSB7XG4gICAgICAgIHNlY29uZGFyeUNvcm5lclJhZGl1c0NoZWNrcy5mb3JFYWNoKHJhZGl1c3Byb3AgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzVmFsdWUgPSBub2RlW3JhZGl1c3Byb3BdO1xuICAgICAgICAgICAgaWYgKHJhZGl1c1ZhbHVlICE9PSAwICYmIHJhZGl1c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBrZXlzIG9mIGVudW0gYXJlIHByZXNlbnQgYXMgdG9rZW4ga2V5c1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZGFyeVJhZGl1c0tleSA9IE9iamVjdC5rZXlzKExpbnRSdWxlc19jb3JuZXJSYWRpdXMpLmZpbmQoKGtleSkgPT4gTGludFJ1bGVzX2Nvcm5lclJhZGl1c1trZXldID09PSByYWRpdXNwcm9wKTtcbiAgICAgICAgICAgICAgICBsaW50Q291bnQudG90YWwrKztcbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kYXJ5UmFkaXVzS2V5ICYmIChrZXlzLmluY2x1ZGVzKHNlY29uZGFyeVJhZGl1c0tleSkgfHwgY29tcFRva2Vucy5pbmNsdWRlcyhzZWNvbmRhcnlSYWRpdXNLZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW50Q291bnQucGFzc2VkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW50Q291bnQuZXJyb3JzLnRva2VuRXJyb3JzLnB1c2goc2Vjb25kYXJ5UmFkaXVzS2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYga2V5cyBvZiBlbnVtIGFyZSBwcmVzZW50IGFzIHRva2VuIGtleXNcbiAgICAgICAgY29uc3QgcHJpbWFyeVJhZGl1c0tleSA9IE9iamVjdC5rZXlzKExpbnRSdWxlc19jb3JuZXJSYWRpdXMpLmZpbmQoKGtleSkgPT4gTGludFJ1bGVzX2Nvcm5lclJhZGl1c1trZXldID09PSAnYm9yZGVyUmFkaXVzJyk7XG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVJhZGl1c0tleXMgPSBPYmplY3Qua2V5cyhMaW50UnVsZXNfY29ybmVyUmFkaXVzKS5maWx0ZXIoKGtleSkgPT4gTGludFJ1bGVzX2Nvcm5lclJhZGl1c1trZXldICE9PSAnYm9yZGVyUmFkaXVzJyk7XG4gICAgICAgIGlmICgocHJpbWFyeVJhZGl1c0tleSAmJiBrZXlzLmluY2x1ZGVzKHByaW1hcnlSYWRpdXNLZXkpIHx8IChzZWNvbmRhcnlSYWRpdXNLZXlzICYmIHNlY29uZGFyeVJhZGl1c0tleXMuZXZlcnkoc2Vjb25kYXJ5UmFkaXVzS2V5ID0+IGtleXMuaW5jbHVkZXMoc2Vjb25kYXJ5UmFkaXVzS2V5KSkpIHx8IGNvbXBUb2tlbnMuaW5jbHVkZXMoTGludFJ1bGVzX2Nvcm5lclJhZGl1cy5ib3JkZXJSYWRpdXMpKSkge1xuICAgICAgICAgICAgbGludENvdW50LnBhc3NlZCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByaW1hcnlSYWRpdXNLZXkpIHtcbiAgICAgICAgICAgICAgICBsaW50Q291bnQuZXJyb3JzLnRva2VuRXJyb3JzLnB1c2gocHJpbWFyeVJhZGl1c0tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGludENvdW50LnRvdGFsKys7XG4gICAgfVxuICAgIHJldHVybiBsaW50Q291bnQucGFzc2VkID09IGxpbnRDb3VudC50b3RhbDtcbn1cbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgbm9kZSdzIGRldGFjaCBpbmZvIGlzIG5vdCBudWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZXRhY2hlZChub2RlKSB7XG4gICAgcmV0dXJuIChub2RlLmRldGFjaGVkSW5mbyAhPT0gbnVsbCk7XG59XG4vKipcbiAqIEFuYWx5emVzIGEgZ2l2ZW4gU2NlbmVOb2RlIHRvIGRldGVybWluZSBpZiBpdCBpcyBkZXRhY2hlZC5cbiAqIEBwYXJhbSBub2RlIC0gVGhlIFNjZW5lTm9kZSB0byBiZSBsaW50ZWQgZm9yIGRldGFjaG1lbnQuXG4gKiBAcGFyYW0gbGludENvdW50IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY291bnRzIG9mIHBhc3NlZCBhbmQgdG90YWwgbGludGluZyBjaGVja3MuXG4gKiBAcGFyYW0gbGludENvdW50LnBhc3NlZCAtIFRoZSBjb3VudCBvZiB0eXBvZ3JhcGh5IGZpbGwgY2hlY2tzIHRoYXQgaGF2ZSBwYXNzZWQuXG4gKiBAcGFyYW0gbGludENvdW50LnRvdGFsIC0gVGhlIHRvdGFsIGNvdW50IG9mIGxpbnRpbmcgY2hlY2tzLlxuICogQHBhcmFtIGxpbnRDb3VudC5lcnJvcnMgLSBBcnJheSBmb3Igc3RvcmluZyBmYWlsZWQgbGludCBjaGVja3MuXG4gKiBAcmV0dXJucyBUcnVlIGlmIGRldGFjaG1lbnQgbGludGluZyBoYXMgcGFzc2VkIGZvciB0aGUgZ2l2ZW4gbm9kZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGludERldGFjaChub2RlLCBsaW50Q291bnQpIHtcbiAgICBpZiAoIWlzRGV0YWNoZWQobm9kZSkpIHtcbiAgICAgICAgbGludENvdW50LnBhc3NlZCsrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGludENvdW50LmVycm9ycy5nZW5lcmFsRXJyb3JzLnB1c2goYCR7bm9kZS5uYW1lfSAgaXMgZGV0YWNoZWRgKTtcbiAgICB9XG4gICAgbGludENvdW50LnRvdGFsKys7XG4gICAgcmV0dXJuIGxpbnRDb3VudC5wYXNzZWQgPT0gbGludENvdW50LnRvdGFsO1xufVxuIiwiLyoqXG4gKiBFbnVtIGRlZmluaW5nIGZpbGwgbGludCBydWxlcy5cbiAqL1xudmFyIExpbnRSdWxlc19maWxsO1xuKGZ1bmN0aW9uIChMaW50UnVsZXNfZmlsbCkge1xuICAgIExpbnRSdWxlc19maWxsW1wiRmlsbFwiXSA9IFwiZmlsbFwiO1xufSkoTGludFJ1bGVzX2ZpbGwgfHwgKExpbnRSdWxlc19maWxsID0ge30pKTtcbi8qKlxuICogQ2hlY2tzIGlmIGEgbm9kZSdzIHBhZGRpbmcgdmFsdWVzIGFyZSBub24temVyby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkRmlsbChub2RlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobm9kZS5maWxscykgJiYgbm9kZS5maWxscy5zb21lKChmaWxsKSA9PiBmaWxsLnR5cGUgPT09ICdTT0xJRCcgJiYgZmlsbC52aXNpYmxlID09PSB0cnVlKTtcbn1cbi8qKlxuICogQW5hbHl6ZXMgYSBnaXZlbiBTY2VuZU5vZGUgdG8gZGV0ZXJtaW5lIGlmIGl0IGFkaGVyZXMgdG8gcGFkZGluZyBmaWxsIHJ1bGVzLlxuICogQHBhcmFtIG5vZGUgLSBUaGUgU2NlbmVOb2RlIHRvIGJlIGxpbnRlZCBmb3IgZmlsbC5cbiAqIEBwYXJhbSBsaW50Q291bnQgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb3VudHMgb2YgcGFzc2VkIGFuZCB0b3RhbCBsaW50aW5nIGNoZWNrcy5cbiAqIEBwYXJhbSBsaW50Q291bnQucGFzc2VkIC0gVGhlIGNvdW50IG9mIHR5cG9ncmFwaHkgZmlsbCBjaGVja3MgdGhhdCBoYXZlIHBhc3NlZC5cbiAqIEBwYXJhbSBsaW50Q291bnQudG90YWwgLSBUaGUgdG90YWwgY291bnQgb2YgbGludGluZyBjaGVja3MuXG4gKiBAcGFyYW0gbGludENvdW50LmVycm9ycyAtIEFycmF5IGZvciBzdG9yaW5nIGZhaWxlZCBsaW50IGNoZWNrcy5cbiAqIEByZXR1cm5zIFRydWUgaWYgZmlsbCBsaW50aW5nIGhhcyBwYXNzZWQgZm9yIHRoZSBnaXZlbiBub2RlLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW50RmlsbChub2RlLCBsaW50Q291bnQsIGNvbXBUb2tlbnMpIHtcbiAgICBjb25zdCBrZXlzID0gbm9kZS5nZXRTaGFyZWRQbHVnaW5EYXRhS2V5cyhcInRva2Vuc1wiKTtcbiAgICBjb25zdCBwcmltYXJ5RmlsbENoZWNrcyA9IFtMaW50UnVsZXNfZmlsbC5GaWxsXTtcbiAgICAvLyBDaGVjayBpZiBlaXRoZXIgJ2ZpbGwnIGluIGVpdGhlciBjb21wb3NpdGlvbiB0b2tlbiBvciBhcHBsaWVkIHRva2VucyBpcyBwcmVzZW50XG4gICAgaWYgKGNvbXBUb2tlbnMuaW5jbHVkZXMoTGludFJ1bGVzX2ZpbGwuRmlsbCkpIHtcbiAgICAgICAgbGludENvdW50LnBhc3NlZCsrO1xuICAgICAgICBsaW50Q291bnQudG90YWwrKztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxpbnRDb3VudC5wYXNzZWQgKz0gcHJpbWFyeUZpbGxDaGVja3MuZmlsdGVyKHByaW1hcnlGaWxsQ2hlY2sgPT4ga2V5cy5pbmNsdWRlcyhwcmltYXJ5RmlsbENoZWNrKSkubGVuZ3RoO1xuICAgICAgICBsaW50Q291bnQuZXJyb3JzLnRva2VuRXJyb3JzLnB1c2goLi4ucHJpbWFyeUZpbGxDaGVja3MuZmlsdGVyKHByaW1hcnlGaWxsQ2hlY2sgPT4gIWtleXMuaW5jbHVkZXMocHJpbWFyeUZpbGxDaGVjaykpKTtcbiAgICAgICAgbGludENvdW50LnRvdGFsICs9IHByaW1hcnlGaWxsQ2hlY2tzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGxpbnRDb3VudC5wYXNzZWQgPT0gbGludENvdW50LnRvdGFsO1xufVxuIiwiLyoqXG4gKiBFbnVtIGRlZmluaW5nIGl0ZW0gc3BhY2luZyBsaW50IHJ1bGVzLlxuICovXG52YXIgTGludFJ1bGVzX2l0ZW1TcGFjaW5nO1xuKGZ1bmN0aW9uIChMaW50UnVsZXNfaXRlbVNwYWNpbmcpIHtcbiAgICBMaW50UnVsZXNfaXRlbVNwYWNpbmdbXCJJdGVtU3BhY2luZ1wiXSA9IFwiaXRlbVNwYWNpbmdcIjtcbn0pKExpbnRSdWxlc19pdGVtU3BhY2luZyB8fCAoTGludFJ1bGVzX2l0ZW1TcGFjaW5nID0ge30pKTtcbi8qKlxuICogQ2hlY2tzIGlmIGEgbm9kZSdzIGl0ZW0gc3BhY2luZyB2YWx1ZXMgYXJlIG5vbi16ZXJvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRJdGVtU3BhY2luZyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuaXRlbVNwYWNpbmcgIT09IHVuZGVmaW5lZCAmJiBub2RlLml0ZW1TcGFjaW5nID4gMDtcbn1cbi8qKlxuICogQW5hbHl6ZXMgYSBnaXZlbiBTY2VuZU5vZGUgdG8gZGV0ZXJtaW5lIGlmIGl0IGFkaGVyZXMgdG8gcGFkZGluZyBsaW50aW5nIHJ1bGVzLlxuICogQHBhcmFtIG5vZGUgLSBUaGUgU2NlbmVOb2RlIHRvIGJlIGxpbnRlZCBmb3IgcGFkZGluZy5cbiAqIEBwYXJhbSBsaW50Q291bnQgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb3VudHMgb2YgcGFzc2VkIGFuZCB0b3RhbCBsaW50aW5nIGNoZWNrcy5cbiAqIEBwYXJhbSBsaW50Q291bnQucGFzc2VkIC0gVGhlIGNvdW50IG9mIHR5cG9ncmFwaHkgZmlsbCBjaGVja3MgdGhhdCBoYXZlIHBhc3NlZC5cbiAqIEBwYXJhbSBsaW50Q291bnQudG90YWwgLSBUaGUgdG90YWwgY291bnQgb2YgbGludGluZyBjaGVja3MuXG4gKiBAcGFyYW0gbGludENvdW50LmVycm9ycyAtIEFycmF5IGZvciBzdG9yaW5nIGZhaWxlZCBsaW50IGNoZWNrcy5cbiAqIEByZXR1cm5zIFRydWUgaWYgcGFkZGluZyBsaW50aW5nIGhhcyBwYXNzZWQgZm9yIHRoZSBnaXZlbiBub2RlLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW50SXRlbVNwYWNpbmcobm9kZSwgbGludENvdW50KSB7XG4gICAgY29uc3Qga2V5cyA9IG5vZGUuZ2V0U2hhcmVkUGx1Z2luRGF0YUtleXMoXCJ0b2tlbnNcIik7XG4gICAgY29uc3QgcHJpbWFyeUl0ZW1TcGFjaW5nQ2hlY2tzID0gW0xpbnRSdWxlc19pdGVtU3BhY2luZy5JdGVtU3BhY2luZ107XG4gICAgLy8gQ2hlY2sgaWYgaXRlbSBzcGFjaW5nIHRva2VuIGlzIHByZXNlbnRcbiAgICBsaW50Q291bnQucGFzc2VkICs9IHByaW1hcnlJdGVtU3BhY2luZ0NoZWNrcy5maWx0ZXIocHJpbWFyeUl0ZW1TcGFjaW5nQ2hlY2sgPT4ga2V5cy5pbmNsdWRlcyhwcmltYXJ5SXRlbVNwYWNpbmdDaGVjaykpLmxlbmd0aDtcbiAgICBsaW50Q291bnQuZXJyb3JzLnRva2VuRXJyb3JzLnB1c2goLi4ucHJpbWFyeUl0ZW1TcGFjaW5nQ2hlY2tzLmZpbHRlcihwcmltYXJ5SXRlbVNwYWNpbmdDaGVjayA9PiAha2V5cy5pbmNsdWRlcyhwcmltYXJ5SXRlbVNwYWNpbmdDaGVjaykpKTtcbiAgICBsaW50Q291bnQudG90YWwgKz0gcHJpbWFyeUl0ZW1TcGFjaW5nQ2hlY2tzLmxlbmd0aDtcbiAgICByZXR1cm4gbGludENvdW50LnBhc3NlZCA9PT0gbGludENvdW50LnRvdGFsO1xufVxuIiwiLyoqXG4gKiBFbnVtIGRlZmluaW5nIHBhZGRpbmcgbGludCBydWxlcy5cbiAqL1xudmFyIExpbnRSdWxlc19wYWRkaW5nO1xuKGZ1bmN0aW9uIChMaW50UnVsZXNfcGFkZGluZykge1xuICAgIExpbnRSdWxlc19wYWRkaW5nW1wiUGFkZGluZ1RvcFwiXSA9IFwicGFkZGluZ1RvcFwiO1xuICAgIExpbnRSdWxlc19wYWRkaW5nW1wiUGFkZGluZ0JvdHRvbVwiXSA9IFwicGFkZGluZ0JvdHRvbVwiO1xuICAgIExpbnRSdWxlc19wYWRkaW5nW1wiUGFkZGluZ0xlZnRcIl0gPSBcInBhZGRpbmdMZWZ0XCI7XG4gICAgTGludFJ1bGVzX3BhZGRpbmdbXCJQYWRkaW5nUmlnaHRcIl0gPSBcInBhZGRpbmdSaWdodFwiO1xufSkoTGludFJ1bGVzX3BhZGRpbmcgfHwgKExpbnRSdWxlc19wYWRkaW5nID0ge30pKTtcbi8qKlxuICogQ2hlY2tzIGlmIGEgbm9kZSdzIHBhZGRpbmcgdmFsdWVzIGFyZSBub24temVyby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vblplcm9QYWRkaW5nKG5vZGUpIHtcbiAgICBjb25zdCB7IHBhZGRpbmdUb3AsIHBhZGRpbmdCb3R0b20sIHBhZGRpbmdMZWZ0LCBwYWRkaW5nUmlnaHQgfSA9IG5vZGU7XG4gICAgcmV0dXJuIChwYWRkaW5nVG9wICE9PSAwICYmIHBhZGRpbmdUb3AgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgKHBhZGRpbmdCb3R0b20gIT09IDAgJiYgcGFkZGluZ0JvdHRvbSAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAocGFkZGluZ0xlZnQgIT09IDAgJiYgcGFkZGluZ0xlZnQgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgKHBhZGRpbmdSaWdodCAhPT0gMCAmJiBwYWRkaW5nUmlnaHQgIT09IHVuZGVmaW5lZCk7XG59XG4vKipcbiAqIEFuYWx5emVzIGEgZ2l2ZW4gU2NlbmVOb2RlIHRvIGRldGVybWluZSBpZiBpdCBhZGhlcmVzIHRvIHBhZGRpbmcgbGludGluZyBydWxlcy5cbiAqIEBwYXJhbSBub2RlIC0gVGhlIFNjZW5lTm9kZSB0byBiZSBsaW50ZWQgZm9yIHBhZGRpbmcuXG4gKiBAcGFyYW0gbGludENvdW50IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY291bnRzIG9mIHBhc3NlZCBhbmQgdG90YWwgbGludGluZyBjaGVja3MuXG4gKiBAcGFyYW0gbGludENvdW50LnBhc3NlZCAtIFRoZSBjb3VudCBvZiB0eXBvZ3JhcGh5IGZpbGwgY2hlY2tzIHRoYXQgaGF2ZSBwYXNzZWQuXG4gKiBAcGFyYW0gbGludENvdW50LnRvdGFsIC0gVGhlIHRvdGFsIGNvdW50IG9mIGxpbnRpbmcgY2hlY2tzLlxuICogQHBhcmFtIGxpbnRDb3VudC5lcnJvcnMgLSBBcnJheSBmb3Igc3RvcmluZyBmYWlsZWQgbGludCBjaGVja3MuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHBhZGRpbmcgbGludGluZyBoYXMgcGFzc2VkIGZvciB0aGUgZ2l2ZW4gbm9kZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGludFBhZGRpbmcobm9kZSwgbGludENvdW50KSB7XG4gICAgY29uc3Qga2V5cyA9IG5vZGUuZ2V0U2hhcmVkUGx1Z2luRGF0YUtleXMoXCJ0b2tlbnNcIik7XG4gICAgbGV0IHByaW1hcnlQYWRkaW5nQ2hlY2tzID0gW0xpbnRSdWxlc19wYWRkaW5nLlBhZGRpbmdUb3AsIExpbnRSdWxlc19wYWRkaW5nLlBhZGRpbmdCb3R0b20sIExpbnRSdWxlc19wYWRkaW5nLlBhZGRpbmdMZWZ0LCBMaW50UnVsZXNfcGFkZGluZy5QYWRkaW5nUmlnaHRdO1xuICAgIC8vIElmIHNwYWNpbmcgdG9rZW4gaXMgcHJlc2VudCwgdGhlbiBkb24ndCBjaGVjayBmb3IgaW5kaXZpZHVhbCBwYWRkaW5nIG9uIGFsbCBzaWRlcy5cbiAgICBpZiAoa2V5cy5pbmNsdWRlcygnc3BhY2luZycpKSB7XG4gICAgICAgIGxpbnRDb3VudC5wYXNzZWQrKztcbiAgICAgICAgbGludENvdW50LnRvdGFsKys7XG4gICAgICAgIHByaW1hcnlQYWRkaW5nQ2hlY2tzID0gW107XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzcGFjaW5nIHRva2VuIGlzIHByZXNlbnQsIHRoZW4gZG9uJ3QgY2hlY2sgZm9yIGluZGl2aWR1YWwgcGFkZGluZyBvbiB0b3AgYW5kIGJvdHRvbS5cbiAgICAgICAgaWYgKGtleXMuaW5jbHVkZXMoJ2hvcml6b250YWxQYWRkaW5nJykpIHtcbiAgICAgICAgICAgIGxpbnRDb3VudC5wYXNzZWQrKztcbiAgICAgICAgICAgIGxpbnRDb3VudC50b3RhbCsrO1xuICAgICAgICAgICAgcHJpbWFyeVBhZGRpbmdDaGVja3MgPSBwcmltYXJ5UGFkZGluZ0NoZWNrcy5maWx0ZXIoY2hlY2sgPT4gY2hlY2sgIT09IExpbnRSdWxlc19wYWRkaW5nLlBhZGRpbmdUb3AgJiYgY2hlY2sgIT09IExpbnRSdWxlc19wYWRkaW5nLlBhZGRpbmdCb3R0b20pO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHNwYWNpbmcgdG9rZW4gaXMgcHJlc2VudCwgdGhlbiBkb24ndCBjaGVjayBmb3IgaW5kaXZpZHVhbCBwYWRkaW5nIG9uIGxlZnQgYW5kIHJpZ2h0LlxuICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcygndmVydGljYWxQYWRkaW5nJykpIHtcbiAgICAgICAgICAgIGxpbnRDb3VudC5wYXNzZWQrKztcbiAgICAgICAgICAgIGxpbnRDb3VudC50b3RhbCsrO1xuICAgICAgICAgICAgcHJpbWFyeVBhZGRpbmdDaGVja3MgPSBwcmltYXJ5UGFkZGluZ0NoZWNrcy5maWx0ZXIoY2hlY2sgPT4gY2hlY2sgIT09IExpbnRSdWxlc19wYWRkaW5nLlBhZGRpbmdMZWZ0ICYmIGNoZWNrICE9PSBMaW50UnVsZXNfcGFkZGluZy5QYWRkaW5nUmlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciBwYWRkaW5nIG9uIHJlbWFpbmluZyBzaWRlcy5cbiAgICBpZiAocHJpbWFyeVBhZGRpbmdDaGVja3MubGVuZ3RoID4gMCkge1xuICAgICAgICBwcmltYXJ5UGFkZGluZ0NoZWNrcy5mb3JFYWNoKHBhZGRpbmdQcm9wID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdWYWx1ZSA9IG5vZGVbcGFkZGluZ1Byb3BdO1xuICAgICAgICAgICAgaWYgKHBhZGRpbmdWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpbnRDb3VudC50b3RhbCsrO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzLmluY2x1ZGVzKHBhZGRpbmdQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW50Q291bnQucGFzc2VkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW50Q291bnQuZXJyb3JzLnRva2VuRXJyb3JzLnB1c2gocGFkZGluZ1Byb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaW50Q291bnQucGFzc2VkID09PSBsaW50Q291bnQudG90YWw7XG59XG4iLCIvKipcbiAqIEVudW0gZGVmaW5pbmcgc2l6aW5nIGxpbnQgcnVsZXMuXG4gKi9cbnZhciBMaW50UnVsZXNfc2l6ZTtcbihmdW5jdGlvbiAoTGludFJ1bGVzX3NpemUpIHtcbiAgICBMaW50UnVsZXNfc2l6ZVtcIlNpemluZ1wiXSA9IFwic2l6aW5nXCI7XG4gICAgTGludFJ1bGVzX3NpemVbXCJXaWR0aFwiXSA9IFwid2lkdGhcIjtcbiAgICBMaW50UnVsZXNfc2l6ZVtcIkhlaWdodFwiXSA9IFwiaGVpZ2h0XCI7XG4gICAgTGludFJ1bGVzX3NpemVbXCJNaW5XaWR0aFwiXSA9IFwibWluV2lkdGhcIjtcbiAgICBMaW50UnVsZXNfc2l6ZVtcIk1pbkhlaWdodFwiXSA9IFwibWluSGVpZ2h0XCI7XG4gICAgTGludFJ1bGVzX3NpemVbXCJNYXhXaWR0aFwiXSA9IFwibWF4V2lkdGhcIjtcbiAgICBMaW50UnVsZXNfc2l6ZVtcIk1heEhlaWdodFwiXSA9IFwibWF4SGVpZ2h0XCI7XG59KShMaW50UnVsZXNfc2l6ZSB8fCAoTGludFJ1bGVzX3NpemUgPSB7fSkpO1xuLyoqXG4gKiBDaGVja3MgaWYgYSBub2RlJ3MgbGF5b3V0IHNpemluZyBpcyBmaXhlZCBpbiBhIHNwZWNpZmllZCBkaXJlY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpeGVkKG5vZGUsIGRpcmVjdGlvbikge1xuICAgIHJldHVybiBkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnID8gbm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID09PSAnRklYRUQnICYmIG5vZGUud2lkdGggIT0gMCA6IG5vZGUubGF5b3V0U2l6aW5nVmVydGljYWwgPT09ICdGSVhFRCcgJiYgbm9kZS5oZWlnaHQgIT0gMDtcbn1cbi8qKlxuICogQW5hbHl6ZXMgYSBnaXZlbiBTY2VuZU5vZGUgdG8gZGV0ZXJtaW5lIGlmIGl0IGFkaGVyZXMgdG8gc2l6aW5nIGxpbnRpbmcgcnVsZXMuXG4gKiBAcGFyYW0gbm9kZSAtIFRoZSBTY2VuZU5vZGUgdG8gYmUgbGludGVkIGZvciBzaXppbmcuXG4gKiBAcGFyYW0gbGludENvdW50IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY291bnRzIG9mIHBhc3NlZCBhbmQgdG90YWwgbGludGluZyBjaGVja3MuXG4gKiBAcGFyYW0gbGludENvdW50LnBhc3NlZCAtIFRoZSBjb3VudCBvZiB0eXBvZ3JhcGh5IGZpbGwgY2hlY2tzIHRoYXQgaGF2ZSBwYXNzZWQuXG4gKiBAcGFyYW0gbGludENvdW50LnRvdGFsIC0gVGhlIHRvdGFsIGNvdW50IG9mIGxpbnRpbmcgY2hlY2tzLlxuICogQHBhcmFtIGxpbnRDb3VudC5lcnJvcnMgLSBBcnJheSBmb3Igc3RvcmluZyBmYWlsZWQgbGludCBjaGVja3MuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHNpemluZyBsaW50aW5nIGhhcyBwYXNzZWQgZm9yIHRoZSBnaXZlbiBub2RlLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW50U2l6ZShub2RlLCBsaW50Q291bnQpIHtcbiAgICBjb25zdCBrZXlzID0gbm9kZS5nZXRTaGFyZWRQbHVnaW5EYXRhS2V5cyhcInRva2Vuc1wiKTtcbiAgICBjb25zdCBwcmltYXJ5U2l6ZUNoZWNrcyA9IFtMaW50UnVsZXNfc2l6ZS5XaWR0aCwgTGludFJ1bGVzX3NpemUuSGVpZ2h0XTtcbiAgICBjb25zdCBzZWNvbmRhcnlTaXplQ2hlY2tzID0gW0xpbnRSdWxlc19zaXplLk1pbldpZHRoLCBMaW50UnVsZXNfc2l6ZS5NaW5IZWlnaHQsIExpbnRSdWxlc19zaXplLk1heFdpZHRoLCBMaW50UnVsZXNfc2l6ZS5NYXhIZWlnaHRdO1xuICAgIC8qKiBTSVpJTkcgTElOVElORyBJUyBNT0RJRklFRCBUTyBBIFdBUk5JTkcgKi9cbiAgICAvLyBMaW50IGNoZWNrIGZvciAnc2l6aW5nJywgJ3dpZHRoJyBhbmQgJ2hlaWdodCcgdG9rZW5zXG4gICAgaWYgKGlzRml4ZWQobm9kZSwgJ2hvcml6b250YWwnKSAmJiBpc0ZpeGVkKG5vZGUsICd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhMaW50UnVsZXNfc2l6ZS5TaXppbmcpICYmICFwcmltYXJ5U2l6ZUNoZWNrcy5ldmVyeShwcmltYXJ5U2l6ZUNoZWNrID0+IGtleXMuaW5jbHVkZXMocHJpbWFyeVNpemVDaGVjaykpKSB7XG4gICAgICAgICAgICBsaW50Q291bnQud2FybmluZ3MudG9rZW5XYXJuaW5ncy5wdXNoKC4uLnByaW1hcnlTaXplQ2hlY2tzLmZpbHRlcihwcmltYXJ5U2l6ZUNoZWNrID0+ICFrZXlzLmluY2x1ZGVzKHByaW1hcnlTaXplQ2hlY2spKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJpbWFyeVNpemVDaGVjayBvZiBwcmltYXJ5U2l6ZUNoZWNrcykge1xuICAgICAgICAgICAgY29uc3QgZml4ZWQgPSBpc0ZpeGVkKG5vZGUsIHByaW1hcnlTaXplQ2hlY2sgPT0gJ3dpZHRoJyA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgaWYgKGZpeGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKHByaW1hcnlTaXplQ2hlY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbnRDb3VudC53YXJuaW5ncy50b2tlbldhcm5pbmdzLnB1c2gocHJpbWFyeVNpemVDaGVjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIExpbnQgY2hlY2sgZm9yICdtaW5XaWR0aCcsICdtYXhXaWR0aCcgLCAnbWluSGVpZ2h0JyBhbmQgJ21heEhlaWdodCcgdG9rZW5zXG4gICAgc2Vjb25kYXJ5U2l6ZUNoZWNrcy5mb3JFYWNoKGNoZWNrID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tWYWx1ZSA9IG5vZGVbY2hlY2tdO1xuICAgICAgICBpZiAoY2hlY2tWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGNoZWNrKSkge1xuICAgICAgICAgICAgICAgIGxpbnRDb3VudC53YXJuaW5ncy50b2tlbldhcm5pbmdzLnB1c2goY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpbnRDb3VudC5wYXNzZWQgPT09IGxpbnRDb3VudC50b3RhbDtcbn1cbiIsIi8qKlxuICogRW51bSBkZWZpbmluZyB0eXBvZ3JhcGh5IGxpbnQgcnVsZXMuXG4gKi9cbnZhciBMaW50UnVsZXNfdHlwb2dyYXBoeTtcbihmdW5jdGlvbiAoTGludFJ1bGVzX3R5cG9ncmFwaHkpIHtcbiAgICBMaW50UnVsZXNfdHlwb2dyYXBoeVtcIlR5cG9ncmFwaHlcIl0gPSBcInR5cG9ncmFwaHlcIjtcbiAgICBMaW50UnVsZXNfdHlwb2dyYXBoeVtcIkZvbnRGYW1pbGllc1wiXSA9IFwiZm9udEZhbWlsaWVzXCI7XG4gICAgTGludFJ1bGVzX3R5cG9ncmFwaHlbXCJGb250V2VpZ2h0c1wiXSA9IFwiZm9udFdlaWdodHNcIjtcbiAgICBMaW50UnVsZXNfdHlwb2dyYXBoeVtcIkZvbnRTaXplc1wiXSA9IFwiZm9udFNpemVzXCI7XG59KShMaW50UnVsZXNfdHlwb2dyYXBoeSB8fCAoTGludFJ1bGVzX3R5cG9ncmFwaHkgPSB7fSkpO1xuLyoqXG4gKiBBbmFseXplcyBhIGdpdmVuIFNjZW5lTm9kZSB0byBkZXRlcm1pbmUgaWYgaXQgYWRoZXJlcyB0byB0eXBvZ3JhcGh5IGxpbnRpbmcgcnVsZXMuXG4gKiBAcGFyYW0gbm9kZSAtIFRoZSBTY2VuZU5vZGUgdG8gYmUgbGludGVkIGZvciB0eXBvZ3JhcGh5LlxuICogQHBhcmFtIGxpbnRDb3VudCAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvdW50cyBvZiBwYXNzZWQgYW5kIHRvdGFsIGxpbnRpbmcgY2hlY2tzLlxuICogQHBhcmFtIGxpbnRDb3VudC5wYXNzZWQgLSBUaGUgY291bnQgb2YgdHlwb2dyYXBoeSBmaWxsIGNoZWNrcyB0aGF0IGhhdmUgcGFzc2VkLlxuICogQHBhcmFtIGxpbnRDb3VudC50b3RhbCAtIFRoZSB0b3RhbCBjb3VudCBvZiBsaW50aW5nIGNoZWNrcy5cbiAqIEBwYXJhbSBsaW50Q291bnQuZXJyb3JzIC0gQXJyYXkgZm9yIHN0b3JpbmcgZmFpbGVkIGxpbnQgY2hlY2tzLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0eXBvZ3JhcGh5IGxpbnRpbmcgaGFzIHBhc3NlZCBmb3IgdGhlIGdpdmVuIG5vZGUsIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbnRUeXBvZ3JhcGh5KG5vZGUsIGxpbnRDb3VudCkge1xuICAgIGNvbnN0IGtleXMgPSBub2RlLmdldFNoYXJlZFBsdWdpbkRhdGFLZXlzKFwidG9rZW5zXCIpO1xuICAgIGNvbnN0IHByaW1hcnlUeXBvQ2hlY2tzID0gW0xpbnRSdWxlc190eXBvZ3JhcGh5LlR5cG9ncmFwaHldO1xuICAgIGNvbnN0IHNlY29uZGFyeVR5cG9DaGVja3MgPSBbTGludFJ1bGVzX3R5cG9ncmFwaHkuRm9udEZhbWlsaWVzLCBMaW50UnVsZXNfdHlwb2dyYXBoeS5Gb250U2l6ZXMsIExpbnRSdWxlc190eXBvZ3JhcGh5LkZvbnRXZWlnaHRzXTtcbiAgICAvLyBFaXRoZXIgY2hlY2sgZm9yIHRva2VuICd0eXBvZ3JhcGh5JyBvciAoJ2ZvbnRGYW1pbGllcycgJiYgJ2ZvbnRXZWlnaHRzJyAmJiAnZm9udFNpemVzJykgdG9rZW5zXG4gICAgaWYgKHByaW1hcnlUeXBvQ2hlY2tzLnNvbWUocHJpbWFyeVR5cG9DaGVjayA9PiBrZXlzLmluY2x1ZGVzKHByaW1hcnlUeXBvQ2hlY2spKSkge1xuICAgICAgICBsaW50Q291bnQucGFzc2VkICs9IHByaW1hcnlUeXBvQ2hlY2tzLmZpbHRlcihwcmltYXJ5VHlwb0NoZWNrID0+IGtleXMuaW5jbHVkZXMocHJpbWFyeVR5cG9DaGVjaykpLmxlbmd0aDtcbiAgICAgICAgbGludENvdW50LnRvdGFsICs9IHByaW1hcnlUeXBvQ2hlY2tzLmxlbmd0aDtcbiAgICAgICAgbGludENvdW50LmVycm9ycy50b2tlbkVycm9ycy5wdXNoKC4uLnByaW1hcnlUeXBvQ2hlY2tzLmZpbHRlcihwcmltYXJ5VHlwb0NoZWNrID0+ICFrZXlzLmluY2x1ZGVzKHByaW1hcnlUeXBvQ2hlY2spKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNlY29uZGFyeVR5cG9DaGVja3Muc29tZShzZWNvbmRhcnlUb2tlbiA9PiBrZXlzLmluY2x1ZGVzKHNlY29uZGFyeVRva2VuKSkpIHtcbiAgICAgICAgLy8gTGluZSBoZWlnaHQsIGxldHRlclNwYWNpbmcgLCB0ZXh0Q2FzZSBsaW50aW5nIChUQkQpXG4gICAgICAgIGxpbnRDb3VudC5wYXNzZWQgKz0gc2Vjb25kYXJ5VHlwb0NoZWNrcy5maWx0ZXIoc2Vjb25kYXJ5VHlwb0NoZWNrID0+IGtleXMuaW5jbHVkZXMoc2Vjb25kYXJ5VHlwb0NoZWNrKSkubGVuZ3RoO1xuICAgICAgICBsaW50Q291bnQudG90YWwgKz0gc2Vjb25kYXJ5VHlwb0NoZWNrcy5sZW5ndGg7XG4gICAgICAgIGxpbnRDb3VudC5lcnJvcnMudG9rZW5FcnJvcnMucHVzaCguLi5zZWNvbmRhcnlUeXBvQ2hlY2tzLmZpbHRlcihzZWNvbmRhcnlUeXBvQ2hlY2sgPT4gIWtleXMuaW5jbHVkZXMoc2Vjb25kYXJ5VHlwb0NoZWNrKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGludENvdW50LnRvdGFsICs9IHByaW1hcnlUeXBvQ2hlY2tzLmxlbmd0aDtcbiAgICAgICAgbGludENvdW50LmVycm9ycy50b2tlbkVycm9ycy5wdXNoKC4uLnByaW1hcnlUeXBvQ2hlY2tzLmZpbHRlcihwcmltYXJ5VHlwb0NoZWNrID0+ICFrZXlzLmluY2x1ZGVzKHByaW1hcnlUeXBvQ2hlY2spKSk7XG4gICAgfVxuICAgIHJldHVybiBsaW50Q291bnQucGFzc2VkID09PSBsaW50Q291bnQudG90YWw7XG59XG4iLCJpbXBvcnQgKiBhcyBOb2RlTWFuYWdlciBmcm9tIFwiLi9ub2RlX21hbmFnZXJcIjtcbi8vY2hlY2sgaWYgc3R5bGUgZXhpc3RzXG5leHBvcnQgZnVuY3Rpb24gaXNTdHlsZVByZXNlbnQobm9kZSkge1xuICAgIGNvbnN0IGZpbGxTdHlsZUlkID0gbm9kZS5maWxsU3R5bGVJZDtcbiAgICBjb25zdCBiYWNrZ3JvdW5kU3R5bGVJZCA9IG5vZGUuYmFja2dyb3VuZFN0eWxlSWQ7XG4gICAgY29uc3Qgc3Ryb2tlU3R5bGVJZCA9IG5vZGUuc3Ryb2tlU3R5bGVJZDtcbiAgICBjb25zdCBlZmZlY3RTdHlsZUlkID0gbm9kZS5lZmZlY3RTdHlsZUlkO1xuICAgIGNvbnN0IGdyaWRTdHlsZUlkID0gbm9kZS5ncmlkU3R5bGVJZDtcbiAgICByZXR1cm4gKGZpbGxTdHlsZUlkICE9IG51bGwgJiYgZmlsbFN0eWxlSWQgIT0gZmlnbWEubWl4ZWQgJiYgZmlsbFN0eWxlSWQgIT0gXCJcIilcbiAgICAgICAgfHwgKGJhY2tncm91bmRTdHlsZUlkICE9IG51bGwgJiYgYmFja2dyb3VuZFN0eWxlSWQgIT0gXCJcIilcbiAgICAgICAgfHwgKHN0cm9rZVN0eWxlSWQgIT0gbnVsbCAmJiBzdHJva2VTdHlsZUlkICE9IFwiXCIpXG4gICAgICAgIHx8IChlZmZlY3RTdHlsZUlkICE9IG51bGwgJiYgZWZmZWN0U3R5bGVJZCAhPSBcIlwiKVxuICAgICAgICB8fCAoZ3JpZFN0eWxlSWQgIT0gbnVsbCAmJiBncmlkU3R5bGVJZCAhPSBcIlwiKTtcbn1cbi8vIGNyZWF0ZSBhIGZyYW1lIGNvbnRhaW5pbmcgcmF3IGRhdGEgaW4gaW5mb3JtYXRpb25cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZUZyYW1lKG5vZGUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgIGxldCBkZXRhaWxzID0gW107XG4gICAgY29uc3QgZmlsbFN0eWxlSWQgPSBub2RlLmZpbGxTdHlsZUlkO1xuICAgIGlmIChmaWxsU3R5bGVJZCkge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IGZpZ21hLmdldFN0eWxlQnlJZChmaWxsU3R5bGVJZCk7XG4gICAgICAgIGRldGFpbHMucHVzaChbXCJmaWxsXCIsIChfYSA9IHN0eWxlT2JqZWN0ID09PSBudWxsIHx8IHN0eWxlT2JqZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZU9iamVjdC5uYW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIlwiXSk7XG4gICAgfVxuICAgIGNvbnN0IGJhY2tncm91bmRTdHlsZUlkID0gbm9kZS5iYWNrZ3JvdW5kU3R5bGVJZDtcbiAgICBpZiAoYmFja2dyb3VuZFN0eWxlSWQpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVPYmplY3QgPSBmaWdtYS5nZXRTdHlsZUJ5SWQoYmFja2dyb3VuZFN0eWxlSWQpO1xuICAgICAgICBkZXRhaWxzLnB1c2goW1wiYmFja3Jnb3VuZFwiLCAoX2IgPSBzdHlsZU9iamVjdCA9PT0gbnVsbCB8fCBzdHlsZU9iamVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGVPYmplY3QubmFtZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIl0pO1xuICAgIH1cbiAgICBjb25zdCBzdHJva2VTdHlsZUlkID0gbm9kZS5zdHJva2VTdHlsZUlkO1xuICAgIGlmIChzdHJva2VTdHlsZUlkKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0gZmlnbWEuZ2V0U3R5bGVCeUlkKHN0cm9rZVN0eWxlSWQpO1xuICAgICAgICBkZXRhaWxzLnB1c2goW1wic3Ryb2tlXCIsIChfYyA9IHN0eWxlT2JqZWN0ID09PSBudWxsIHx8IHN0eWxlT2JqZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZU9iamVjdC5uYW1lKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBcIlwiXSk7XG4gICAgfVxuICAgIGNvbnN0IGVmZmVjdFN0eWxlSWQgPSBub2RlLmVmZmVjdFN0eWxlSWQ7XG4gICAgaWYgKGVmZmVjdFN0eWxlSWQpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVPYmplY3QgPSBmaWdtYS5nZXRTdHlsZUJ5SWQoZWZmZWN0U3R5bGVJZCk7XG4gICAgICAgIGRldGFpbHMucHVzaChbXCJlZmZlY3RcIiwgKF9kID0gc3R5bGVPYmplY3QgPT09IG51bGwgfHwgc3R5bGVPYmplY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0eWxlT2JqZWN0Lm5hbWUpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IFwiXCJdKTtcbiAgICB9XG4gICAgY29uc3QgZ3JpZFN0eWxlSWQgPSBub2RlLmdyaWRTdHlsZUlkO1xuICAgIGlmIChncmlkU3R5bGVJZCkge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IGZpZ21hLmdldFN0eWxlQnlJZChncmlkU3R5bGVJZCk7XG4gICAgICAgIGRldGFpbHMucHVzaChbXCJncmlkXCIsIChfZSA9IHN0eWxlT2JqZWN0ID09PSBudWxsIHx8IHN0eWxlT2JqZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZU9iamVjdC5uYW1lKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiBcIlwiXSk7XG4gICAgfVxuICAgIHJldHVybiBOb2RlTWFuYWdlci5nZXREYXRhRGV0YWlsc0ZyYW1lKFwiU3R5bGVzXCIsIGRldGFpbHMpO1xufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGlucHV0IGlzIGFuIG9iamVjdCB3aXRoIGEgXCJjaGlsZHJlblwiIHByb3BlcnR5LCBpbmRpY2F0aW5nIHRoYXQgaXQgaXMgYSBwYXJlbnQgbm9kZS5cbiAqIEBwYXJhbSBhIC0gVGhlIGlucHV0IHRvIGNoZWNrLlxuICogQHJldHVybnMgQSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGlucHV0IGlzIGEgcGFyZW50IG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09mVHlwZVBhcmVudE5vZGUoYSkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBwcm92aWRlZCBpbnB1dCBoYXMgYSBcImNoaWxkcmVuXCIgcHJvcGVydHlcbiAgICByZXR1cm4gXCJjaGlsZHJlblwiIGluIGE7XG59XG4vKipcbiAqIENoZWNrIGlmIHRoZSBwcm92aWRlZCBub2RlIGlzIHRoZSB0b3Agbm9kZSBpbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uXG4gKiBAcGFyYW0ge1NjZW5lTm9kZX0gbm9kZSAtIFRoZSBub2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBub2RlIGlzIHRoZSB0b3Agbm9kZSBpbiB0aGUgc2VsZWN0aW9uLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvcE5vZGUobm9kZSkge1xuICAgIHJldHVybiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IG5vZGUpID09PSAwKTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBub2RlIGlzIGEgbWFzdGVyIGNvbXBvbmVudC5cbiAqIEBwYXJhbSBub2RlIC0gVGhlIG5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgbm9kZSBpcyBhIG1hc3RlciBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01hc3RlckNvbXBvbmVudChub2RlKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIG5hbWUgb2YgdGhlIHByb3ZpZGVkIG5vZGUgc3RhcnRzIHdpdGggdGhlIHByZWZpeCBcIk0tXCJcbiAgICByZXR1cm4gbm9kZS5uYW1lLnN0YXJ0c1dpdGgoJ00tJyk7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgbm9kZSBpcyBhIGNvbXBvbmVudCBub2RlLlxuICogQHBhcmFtIG5vZGUgLSBUaGUgbm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBub2RlIGlzIGEgY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnQobm9kZSkge1xuICAgIC8vIENoZWNrIGlmIG5vZGUgaXMgYW4gaW5zdGFuY2VOb2RlXG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PSAnSU5TVEFOQ0UnO1xufVxuLyoqXG4gKiBGaW5kcyBhbmQgcmV0dXJucyBhbiB1bnVzZWQgcmVnaW9uIG9mIHRoZSBjYW52YXMgb24gdGhlIHNwZWNpZmllZCBwYWdlLlxuICogQHBhcmFtIHBhZ2UgLSBUaGUgcGFnZSB0byBzZWFyY2ggZm9yIHVudXNlZCBzcGFjZSBvbi5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSB4LCB5LCB3aWR0aCwgYW5kIGhlaWdodCBwcm9wZXJ0aWVzIHJlcHJlc2VudGluZyB0aGUgZGltZW5zaW9ucyBvZiB0aGUgdW51c2VkIHJlZ2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFbXB0eVNwYWNlKHBhZ2UpIHtcbiAgICAvLyBJbml0aWFsaXplIHZhcmlhYmxlcyB0byBrZWVwIHRyYWNrIG9mIHRoZSBib3VuZGluZyBib3ggb2YgYWxsIHZpc2libGUgYW5kIHVubG9ja2VkIGxheWVyc1xuICAgIGxldCBtaW5YID0gSW5maW5pdHk7XG4gICAgbGV0IG1pblkgPSBJbmZpbml0eTtcbiAgICBsZXQgbWF4WCA9IC1JbmZpbml0eTtcbiAgICBsZXQgbWF4WSA9IC1JbmZpbml0eTtcbiAgICBsZXQgaGFzVmlzaWJsZU5vZGVzID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRZO1xuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhbGwgbGF5ZXJzIG9uIHRoZSBjYW52YXNcbiAgICBwYWdlLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIC8vIEV4Y2x1ZGUgbG9ja2VkIGFuZCBoaWRkZW4gbGF5ZXJzXG4gICAgICAgIGlmIChub2RlLnZpc2libGUgJiYgIW5vZGUubG9ja2VkKSB7XG4gICAgICAgICAgICBoYXNWaXNpYmxlTm9kZXMgPSB0cnVlO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBib3VuZGluZyBib3ggd2l0aCB0aGUgY3VycmVudCBsYXllcidzIHBvc2l0aW9uIGFuZCBzaXplXG4gICAgICAgICAgICBtaW5YID0gTWF0aC5taW4obWluWCwgbm9kZS54KTtcbiAgICAgICAgICAgIG1pblkgPSBNYXRoLm1pbihtaW5ZLCBub2RlLnkpO1xuICAgICAgICAgICAgbWF4WCA9IE1hdGgubWF4KG1heFgsIG5vZGUueCArIG5vZGUud2lkdGgpO1xuICAgICAgICAgICAgbWF4WSA9IE1hdGgubWF4KG1heFksIG5vZGUueSArIG5vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN1cnJlbnRZID0gbWF4WTtcbiAgICAgICAgICAgIGlmIChtYXhYID4gNjUwMDApIHtcbiAgICAgICAgICAgICAgICBtYXhYID0gbWluWDtcbiAgICAgICAgICAgICAgICBtaW5ZID0gbWF4WSArIDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaGFzVmlzaWJsZU5vZGVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIENhbGN1bGF0ZSBlbXB0eSBzcGFjZSBkaW1lbnNpb25zXG4gICAgY29uc3QgZW1wdHlTcGFjZSA9IHtcbiAgICAgICAgeDogbWF4WCwgLy8gU2V0IHRoZSB4IGNvb3JkaW5hdGUgdG8gdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHJpZ2h0bW9zdCBsYXllclxuICAgICAgICB5OiBtaW5ZLCAvLyBTZXQgdGhlIHkgY29vcmRpbmF0ZSB0byB0aGUgdG9wIGVkZ2Ugb2YgdGhlIGhpZ2hlc3QgbGF5ZXJcbiAgICAgICAgd2lkdGg6IG1heFggLSBtaW5YLCAvLyBTZXQgdGhlIHdpZHRoIHRvIHRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgYm91bmRpbmcgYm94XG4gICAgICAgIGhlaWdodDogbWF4WSAvLyBTZXQgdGhlIGhlaWdodCB0byB0aGUgdmVydGljYWwgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdG9wIGFuZCBib3R0b20gZWRnZXMgb2YgdGhlIGJvdW5kaW5nIGJveFxuICAgIH07XG4gICAgLy8gUmV0dXJuIHRoZSBlbXB0eSBzcGFjZSBkaW1lbnNpb25zXG4gICAgcmV0dXJuIGVtcHR5U3BhY2U7XG59XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2YgdHVwbGVzIGNvbnRhaW5pbmcgdGhlIG5hbWVzIGFuZCB2YWx1ZXMgb2Ygc2hhcmVkIHBsdWdpbiBkYXRhIHRva2VucyBvbiB0aGUgcHJvdmlkZWQgbm9kZS5cbiAqIEBwYXJhbSBub2RlIC0gVGhlIG5vZGUgdG8gcmV0cmlldmUgc2hhcmVkIHBsdWdpbiBkYXRhIHRva2VucyBmcm9tLlxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgdHVwbGVzIGNvbnRhaW5pbmcgdGhlIG5hbWVzIGFuZCB2YWx1ZXMgb2Ygc2hhcmVkIHBsdWdpbiBkYXRhIHRva2VucyBvbiB0aGUgcHJvdmlkZWQgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2Vuc09uTm9kZShub2RlKSB7XG4gICAgLy8gR2V0IGFsbCBzaGFyZWQgcGx1Z2luIGRhdGEgdG9rZW4ga2V5cyBvbiB0aGUgbm9kZVxuICAgIGNvbnN0IGtleXMgPSBub2RlLmdldFNoYXJlZFBsdWdpbkRhdGFLZXlzKFwidG9rZW5zXCIpO1xuICAgIC8vIEluaXRpYWxpemUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIHJlc3VsdGluZyB0dXBsZSBwYWlyc1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBlYWNoIHNoYXJlZCBwbHVnaW4gZGF0YSB0b2tlbiBrZXlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIHNoYXJlZCBwbHVnaW4gZGF0YSB0b2tlbiB3aXRoIHRoZSBjdXJyZW50IGtleVxuICAgICAgICBsZXQgdG9rZW4gPSBub2RlLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJ0b2tlbnNcIiwga2V5KTtcbiAgICAgICAgLy8gSWYgdGhlIHRva2VuIHZhbHVlIGlzIGluIHRoZSBmb3JtYXQgXCJ7dG9rZW5OYW1lfVwiLCBhZGQgaXQgdG8gdGhlIHJlc3VsdHNcbiAgICAgICAgaWYgKHRva2VuLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHRva2VuIG5hbWUgZnJvbSB0aGUgdmFsdWUsIGV4Y2x1ZGluZyB0aGUgc3Vycm91bmRpbmcgYnJhY2VzXG4gICAgICAgICAgICByZXN1bHQucHVzaChba2V5LCB0b2tlbi5zbGljZSgxLCAtMSldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBhcnJheSBvZiB0dXBsZSBwYWlyc1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRlZERlY2ltYWwobnVtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG51bSArIE51bWJlci5FUFNJTE9OKSAqIDEwMCkgLyAxMDA7XG59XG4iLCJpbXBvcnQgKiBhcyBOb2RlTWFuYWdlciBmcm9tIFwiLi9ub2RlX21hbmFnZXJcIjtcbi8vY2hlY2sgaWYgc3R5bGUgZXhpc3RzXG5leHBvcnQgZnVuY3Rpb24gaXNWYXJpYWJsZVByZXNlbnQobm9kZSkge1xuICAgIGxldCBib3VuZFZhcmlhYmxlcyA9IG5vZGUuYm91bmRWYXJpYWJsZXM7XG4gICAgbGV0IGZpbGxWYXJzID0gYm91bmRWYXJpYWJsZXMgPT09IG51bGwgfHwgYm91bmRWYXJpYWJsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJvdW5kVmFyaWFibGVzLmZpbGxzO1xuICAgIGxldCBzdHJva2VWYXJzID0gYm91bmRWYXJpYWJsZXMgPT09IG51bGwgfHwgYm91bmRWYXJpYWJsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJvdW5kVmFyaWFibGVzLnN0cm9rZXM7XG4gICAgbGV0IGVmZmVjdFZhcnMgPSBib3VuZFZhcmlhYmxlcyA9PT0gbnVsbCB8fCBib3VuZFZhcmlhYmxlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm91bmRWYXJpYWJsZXMuZWZmZWN0cztcbiAgICByZXR1cm4gKGZpbGxWYXJzICE9IG51bGwpIHx8IChzdHJva2VWYXJzICE9IG51bGwpIHx8IChlZmZlY3RWYXJzICE9IG51bGwpO1xufVxuLy8gY3JlYXRlIGEgZnJhbWUgY29udGFpbmluZyByYXcgZGF0YSBpbiBpbmZvcm1hdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlc0ZyYW1lKG5vZGUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICBsZXQgZGV0YWlscyA9IFtdO1xuICAgIGNvbnN0IGZpbGxzID0gKF9hID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbGxzO1xuICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0RmlsbCA9IGZpbGxzWzBdO1xuICAgICAgICBpZiAoZmlyc3RGaWxsLnR5cGUgPT0gXCJWQVJJQUJMRV9BTElBU1wiKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxsSWQgPSBmaXJzdEZpbGwuaWQ7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZVZhbHVlID0gKF9iID0gZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZChmaWxsSWQpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubmFtZTtcbiAgICAgICAgICAgIGRldGFpbHMucHVzaChbXCJmaWxsXCIsIHZhcmlhYmxlVmFsdWUgIT09IG51bGwgJiYgdmFyaWFibGVWYWx1ZSAhPT0gdm9pZCAwID8gdmFyaWFibGVWYWx1ZSA6IFwiXCJdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzdHJva2VzID0gKF9jID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnN0cm9rZXM7XG4gICAgaWYgKHN0cm9rZXMgJiYgc3Ryb2tlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0U3Ryb2tlID0gc3Ryb2tlc1swXTtcbiAgICAgICAgaWYgKGZpcnN0U3Ryb2tlLnR5cGUgPT0gXCJWQVJJQUJMRV9BTElBU1wiKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJva2VJZCA9IGZpcnN0U3Ryb2tlLmlkO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVWYWx1ZSA9IChfZCA9IGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWQoc3Ryb2tlSWQpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QubmFtZTtcbiAgICAgICAgICAgIGRldGFpbHMucHVzaChbXCJzdHJva2VcIiwgdmFyaWFibGVWYWx1ZSAhPT0gbnVsbCAmJiB2YXJpYWJsZVZhbHVlICE9PSB2b2lkIDAgPyB2YXJpYWJsZVZhbHVlIDogXCJcIl0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGVmZmVjdHMgPSAoX2UgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuZWZmZWN0cztcbiAgICBpZiAoZWZmZWN0cyAmJiBlZmZlY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RFZmZlY3QgPSBlZmZlY3RzWzBdO1xuICAgICAgICBpZiAoZmlyc3RFZmZlY3QudHlwZSA9PSBcIlZBUklBQkxFX0FMSUFTXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVmZmVjdElkID0gZmlyc3RFZmZlY3QuaWQ7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZVZhbHVlID0gKF9mID0gZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZChlZmZlY3RJZCkpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5uYW1lO1xuICAgICAgICAgICAgZGV0YWlscy5wdXNoKFtcImVmZmVjdFwiLCB2YXJpYWJsZVZhbHVlICE9PSBudWxsICYmIHZhcmlhYmxlVmFsdWUgIT09IHZvaWQgMCA/IHZhcmlhYmxlVmFsdWUgOiBcIlwiXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE5vZGVNYW5hZ2VyLmdldERhdGFEZXRhaWxzRnJhbWUoXCJWYXJpYWJsZXNcIiwgZGV0YWlscyk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGFwcGx5QXV0b0xheW91dCB9IGZyb20gXCIuL2xheW91dGluZ1wiO1xuaW1wb3J0ICogYXMgTm9kZUNyZWF0b3IgZnJvbSBcIi4vbm9kZV9tYW5hZ2VyXCI7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi91dGlsc1wiO1xuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGluc3RhbmNlcyByZXByZXNlbnRpbmcgZWFjaCB2YXJpYW50IG9mIHRoZSBwcm92aWRlZCBlbGVtZW50LFxuICogZnJvbSB0aGUgc2FtZSBjb21wb25lbnQgc2V0IGFzIHRoZSBlbGVtZW50J3MgbWFpbiBjb21wb25lbnQuXG4gKiBAcGFyYW0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIHJldHJpZXZlIHZhcmlhbnRzIGZvci5cbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGluc3RhbmNlcyByZXByZXNlbnRpbmcgZWFjaCB2YXJpYW50IG9mIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRWYXJpYW50cyhlbGVtZW50KSB7XG4gICAgLy8gSWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhIG1haW4gY29tcG9uZW50LCByZXR1cm4gYW4gZW1wdHkgYXJyYXlcbiAgICBpZiAoZWxlbWVudC5tYWluQ29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICAvLyBHZXQgdGhlIGNvbXBvbmVudCBzZXQgbm9kZSB0aGF0IGNvbnRhaW5zIHRoZSBwcm92aWRlZCBlbGVtZW50J3MgbWFpbiBjb21wb25lbnRcbiAgICBjb25zdCBzZXROb2RlID0gZWxlbWVudC5tYWluQ29tcG9uZW50LnBhcmVudDtcbiAgICAvLyBJZiB0aGUgc2V0IG5vZGUgaXMgbnVsbCwgcmV0dXJuIGFuIGVtcHR5IGFycmF5XG4gICAgaWYgKCFzZXROb2RlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSByZXN1bHRpbmcgaW5zdGFuY2VzXG4gICAgY29uc3QgaW5zdGFuY2VzID0gW107XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGVhY2ggY2hpbGQgY29tcG9uZW50IG5vZGUgaW4gdGhlIGNvbXBvbmVudCBzZXRcbiAgICBjb25zdCBjaGlsZHJlbiA9IHNldE5vZGUuY2hpbGRyZW47XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2hpbGQgY29tcG9uZW50IG5vZGVcbiAgICAgICAgY29uc3QgY29tcE5vZGUgPSBjaGlsZDtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBjb21wTm9kZS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAvLyBHZXQgdGhlIG1haW4gY29tcG9uZW50IG9mIHRoZSBuZXdseSBjcmVhdGVkIGluc3RhbmNlXG4gICAgICAgIGNvbnN0IG1haW5Db21wb25lbnQgPSBpbnN0YW5jZS5tYWluQ29tcG9uZW50O1xuICAgICAgICAvLyBQdXNoIHRoZSBuZXcgaW5zdGFuY2UgdG8gdGhlIGFycmF5IG9mIGluc3RhbmNlc1xuICAgICAgICBpbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgfSk7XG4gICAgLy8gUmV0dXJuIHRoZSByZXN1bHRpbmcgYXJyYXkgb2YgaW5zdGFuY2VzXG4gICAgcmV0dXJuIGluc3RhbmNlcztcbn1cbmZ1bmN0aW9uIHBhcnNlS2V5VmFsdWVQYWlycyhpbnB1dCkge1xuICAgIC8vIFNwbGl0IHRoZSBpbnB1dCBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzLCBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdCgnLCcpO1xuICAgIC8vIE1hcCBlYWNoIHBhcnQgdG8gYSB0dXBsZSBvZiBrZXktdmFsdWUgcGFpcnMsIHNlcGFyYXRlZCBieSB0aGUgJz0nIHNpZ25cbiAgICBjb25zdCBwYWlycyA9IHBhcnRzLm1hcChwYXJ0ID0+IHtcbiAgICAgICAgLy8gU3BsaXQgdGhlIHBhcnQgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncywgc2VwYXJhdGVkIGJ5IHRoZSAnPScgc2lnblxuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYXJ0LnRyaW0oKS5zcGxpdCgnPScpO1xuICAgICAgICAvLyBSZXR1cm4gYSB0dXBsZSBvZiB0aGUga2V5LXZhbHVlIHBhaXIsIHdpdGggdGhlIHZhbHVlcyBub3Qgc2VwYXJhdGVkIGJ5IGEgY2hhcmFjdGVyXG4gICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV07XG4gICAgfSk7XG4gICAgLy8gUmV0dXJuIHRoZSBhcnJheSBvZiBrZXktdmFsdWUgcGFpcnNcbiAgICByZXR1cm4gcGFpcnM7XG59XG4vKipcbiAqIEdlbmVyYXRlcyBhIGZyYW1lIGNvbnRhaW5pbmcgYSB0aXRsZSBhbmQgaW5zdGFuY2VzIG9mIGVhY2ggdmFyaWFudCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQuXG4gKiBAcmV0dXJucyBOb25lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVWYXJpYW50cygpIHtcbiAgICAvLyBEZWZpbmUgYW4gYXN5bmMgZnVuY3Rpb24gdG8gZW5zdXJlIHRoYXQgZm9udCBsb2FkaW5nIGFuZCBmcmFtZSBjcmVhdGlvbiBvY2N1ciBpbiB0aGUgY29ycmVjdCBzZXF1ZW5jZVxuICAgICgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gTG9hZCBuZWNlc3NhcnkgZm9udHNcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH0pO1xuICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdGVkIGVsZW1lbnRcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgICAgICAvLyBJZiBhbiBlbGVtZW50IGlzIHNlbGVjdGVkXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgdmFyaWFudHMgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRzID0gZ2V0VmFyaWFudHMoc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh2YXJpYW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZWxlY3RlZCBlbGVtZW50IGhhcyBubyB2YXJpYW50cywgZGlzcGxheSBhIG1lc3NhZ2UgYW5kIGV4aXQgdGhlIHBsdWdpblxuICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlNlbGVjdGVkIGl0ZW0gaGFzIG5vIHZhcmlhbnRzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBmcmFtZSBmb3IgdGhlIHZhcmlhbnQgZGlzcGxheVxuICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBVdGlscy5maW5kRW1wdHlTcGFjZShmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgLy8gQXBwbHkgYXV0byBsYXlvdXQgYW5kIHN0eWxpbmcgdG8gdGhlIGZyYW1lXG4gICAgICAgICAgICBhcHBseUF1dG9MYXlvdXQoZnJhbWUsIDI0LCBcIlZFUlRJQ0FMXCIpO1xuICAgICAgICAgICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogQ29uc3RhbnRzLmJhY2tncm91bmRDb2xvciB9XTtcbiAgICAgICAgICAgIGZyYW1lLnggPSBzcGFjZS54ICsgMjQ7XG4gICAgICAgICAgICBmcmFtZS55ID0gc3BhY2UuaGVpZ2h0O1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdGl0bGUgZm9yIHRoZSBmcmFtZSBiYXNlZCBvbiB0aGUgY29tcG9uZW50IHNldCBuYW1lXG4gICAgICAgICAgICBsZXQgZm9udE5hbWUgPSB7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfTtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlTm9kZSA9IHNlbGVjdGVkRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHNldE5vZGUgPSAoX2EgPSBpbnN0YW5jZU5vZGUubWFpbkNvbXBvbmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhcmVudDtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlTm9kZSA9IE5vZGVDcmVhdG9yLmdldE5ld1RleHROb2RlKHNldE5vZGUubmFtZSwgdW5kZWZpbmVkLCBmb250TmFtZSk7XG4gICAgICAgICAgICB0aXRsZU5vZGUuZm9udFNpemUgPSBDb25zdGFudHMudGl0bGVGb250U2l6ZTtcbiAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHRpdGxlTm9kZSk7XG4gICAgICAgICAgICAvLyBBZGQgc3BhY2luZyBhbmQgYWxpZ25tZW50IGF0dHJpYnV0ZXMgdG8gdGhlIHRpdGxlIGFuZCBmcmFtZVxuICAgICAgICAgICAgY29uc3Qgc3BhY2VyID0gTm9kZUNyZWF0b3IuZ2V0VlNwYWNlcigyKTtcbiAgICAgICAgICAgIHNwYWNlci5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgZnJhbWUubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHNwYWNlcik7XG4gICAgICAgICAgICAvLyBBZGQgYSB2YXJpYW50IGluc3RhbmNlIGFuZCBpdHMgbmFtZSB0byB0aGUgZnJhbWUgZm9yIGVhY2ggdmFyaWFudCBpbiB0aGUgc2V0XG4gICAgICAgICAgICB2YXJpYW50cy5mb3JFYWNoKHZhcmlhbnQgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIGFwcGx5QXV0b0xheW91dChjaGlsZEZyYW1lLCAxMiwgXCJIT1JJWk9OVEFMXCIpO1xuICAgICAgICAgICAgICAgIGNoaWxkRnJhbWUuYXBwZW5kQ2hpbGQodmFyaWFudCk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgYXBwbHlBdXRvTGF5b3V0KGRhdGFGcmFtZSwgMTIsIFwiVkVSVElDQUxcIik7XG4gICAgICAgICAgICAgICAgbGV0IHByb3BJbmZvID0gcGFyc2VLZXlWYWx1ZVBhaXJzKChfYiA9IChfYSA9IHZhcmlhbnQubWFpbkNvbXBvbmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCIpO1xuICAgICAgICAgICAgICAgIHByb3BJbmZvLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXR1bU5vZGUgPSBOb2RlQ3JlYXRvci5nZXROZXdUZXh0Tm9kZShgJHtwcm9wWzBdfTogJHtwcm9wWzFdfWApO1xuICAgICAgICAgICAgICAgICAgICBkYXRhRnJhbWUuYXBwZW5kQ2hpbGQoZGF0dW1Ob2RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjaGlsZEZyYW1lLmFwcGVuZENoaWxkKGRhdGFGcmFtZSk7XG4gICAgICAgICAgICAgICAgY2hpbGRGcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGNoaWxkRnJhbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYWNlciA9IE5vZGVDcmVhdG9yLmdldFZTcGFjZXIoMik7XG4gICAgICAgICAgICAgICAgc3BhY2VyLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIGFuZCB6b29tIGluIG9uIHRoZSBuZXcgZnJhbWUgdG8gZW5zdXJlIGl0IGlzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XG4gICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2ZyYW1lXSk7XG4gICAgICAgICAgICAvLyBEaXNwbGF5IGEgY29uZmlybWF0aW9uIG1lc3NhZ2UgYW5kIGNsb3NlIHRoZSBwbHVnaW5cbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlZhcmlhbnRzIGdlbmVyYXRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBpZiBubyBlbGVtZW50IGlzIHNlbGVjdGVkXG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJQbGVhc2Ugc2VsZWN0IGFuIGVsZW1lbnQgb24gdGhlIGNhbnZhcy5cIik7XG4gICAgICAgIH1cbiAgICB9KSkoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgVmFyaWFudE1hbmFnZXIgZnJvbSBcIi4vdmFyaWFudF9tYW5hZ2VyXCI7XG5pbXBvcnQgKiBhcyBIYW5kT2ZmTWFuYWdlciBmcm9tIFwiLi9oYW5kb2ZmX21hbmFnZXJcIjtcbmltcG9ydCAqIGFzIFJlcG9ydE1hbmFnZXIgZnJvbSBcIi4vbGludFJlcG9ydF9tYW5hZ2VyXCI7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDMyMCwgaGVpZ2h0OiA2MDAgfSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PSBcImhhbmRvZmZcIikge1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJHZW5lcmF0aW5nIEhhbmRvZmYgLi4uXCIpO1xuICAgICAgICBjb25zdCBzaG91bGRTa2lwQ29tcG9uZW50Q2hpbGRyZW5UcmF2ZXJzYWwgPSBtc2cuc2tpcENvbXBvbmVudDtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVGb3JBbGwgPSBtc2cuZ2VuZXJhdGVIT2ZmRm9yQWxsO1xuICAgICAgICBjb25zdCB1cGRhdGVQcmV2aW91c0hhbmRvZmYgPSBtc2cudXBkYXRlUHJldmlvdXNIYW5kb2ZmO1xuICAgICAgICBjb25zdCBoYW5kT2ZmT25OZXdQYWdlID0gbXNnLmhhbmRPZmZPbk5ld1BhZ2U7XG4gICAgICAgIGNvbnN0IHNob3dUb2tlbnMgPSBtc2cuc2hvd1Rva2VucztcbiAgICAgICAgY29uc3Qgc2hvd1N0eWxlcyA9IG1zZy5zaG93U3R5bGVzO1xuICAgICAgICBjb25zdCBzaG93VmFyaWFibGVzID0gbXNnLnNob3dWYXJpYWJsZXM7XG4gICAgICAgIGNvbnN0IHNob3dSYXdEYXRhID0gbXNnLnNob3dSYXdEYXRhO1xuICAgICAgICBjb25zdCBzaG93TGludERhdGEgPSBtc2cuc2hvd0xpbnREYXRhO1xuICAgICAgICAvLyBjb25zdCBtYXhEZXB0aCA9IG1zZy5tYXhEZXB0aDtcbiAgICAgICAgSGFuZE9mZk1hbmFnZXIuZ2VuZXJhdGVIYW5kb2ZmKHtcbiAgICAgICAgICAgIHNraXBDb21wb25lbnRDaGlsZHJlblRyYXZlcnNhbDogc2hvdWxkU2tpcENvbXBvbmVudENoaWxkcmVuVHJhdmVyc2FsLFxuICAgICAgICAgICAgZ2VuZXJhdGVGb3JBbGw6IGdlbmVyYXRlRm9yQWxsLFxuICAgICAgICAgICAgdXBkYXRlUHJldmlvdXNIYW5kb2ZmOiB1cGRhdGVQcmV2aW91c0hhbmRvZmYsXG4gICAgICAgICAgICBoYW5kT2ZmT25OZXdQYWdlOiBoYW5kT2ZmT25OZXdQYWdlLFxuICAgICAgICAgICAgc2hvd1Rva2Vuczogc2hvd1Rva2VucyxcbiAgICAgICAgICAgIHNob3dTdHlsZXM6IHNob3dTdHlsZXMsXG4gICAgICAgICAgICBzaG93VmFyaWFibGVzOiBzaG93VmFyaWFibGVzLFxuICAgICAgICAgICAgbWF4RGVwdGg6IDIsXG4gICAgICAgICAgICBzaG93UmF3RGF0YTogc2hvd1Jhd0RhdGEsXG4gICAgICAgICAgICBzaG93TGludERhdGE6IHNob3dMaW50RGF0YVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT0gXCJ2YXJpYW50c1wiKSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIkdlbmVyYXRpbmcgVmFyaWFudHMgLi4uXCIpO1xuICAgICAgICBWYXJpYW50TWFuYWdlci5nZW5lcmF0ZVZhcmlhbnRzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09IFwibGludENoZWNrXCIpIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiR2VuZXJhdGluZyBMaW50IFJlcG9ydCAuLi5cIik7XG4gICAgICAgIGNvbnN0IHNob3VsZFNraXBDb21wb25lbnRDaGlsZHJlblRyYXZlcnNhbCA9IG1zZy5za2lwQ29tcG9uZW50O1xuICAgICAgICBjb25zdCBnZW5lcmF0ZUZvckFsbCA9IG1zZy5nZW5lcmF0ZVJlcG9ydEZvckFsbDtcbiAgICAgICAgY29uc3QgdXBkYXRlUHJldmlvdXNSZXBvcnQgPSBtc2cudXBkYXRlUHJldmlvdXNSZXBvcnQ7XG4gICAgICAgIGNvbnN0IHJlcG9ydE9uTmV3UGFnZSA9IG1zZy5yZXBvcnRPbk5ld1BhZ2U7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIuZ2VuZXJhdGVSZXBvcnQoe1xuICAgICAgICAgICAgc2tpcENvbXBvbmVudENoaWxkcmVuVHJhdmVyc2FsOiBzaG91bGRTa2lwQ29tcG9uZW50Q2hpbGRyZW5UcmF2ZXJzYWwsXG4gICAgICAgICAgICBnZW5lcmF0ZUZvckFsbDogZ2VuZXJhdGVGb3JBbGwsXG4gICAgICAgICAgICB1cGRhdGVQcmV2aW91c1JlcG9ydDogdXBkYXRlUHJldmlvdXNSZXBvcnQsXG4gICAgICAgICAgICByZXBvcnRPbk5ld1BhZ2U6IHJlcG9ydE9uTmV3UGFnZVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9