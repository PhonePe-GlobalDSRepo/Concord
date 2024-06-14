import { applyAutoLayout } from "./layouting"
import * as Constants from "./constants"
import * as Utils from "./utils"

/**
 * Creates a new TextNode with the specified text, color and font style.
 * @param text - The text to be displayed by the TextNode.
 * @param color - The color of the TextNode's fill. The default value is { r: 0.1, g: 0.1, b: 0.1 }.
 * @param fontName - The font family and style of the TextNode. The default value is { family: "Inter", style: "Regular" }.
 * @returns A new TextNode with the specified text, color and font style.
 */
export function getNewTextNode(text: string, color = { r: 0.1, g: 0.1, b: 0.1 }, fontName = { family: "Inter", style: "Regular" }, fontSize = Constants.bodyFontSize): TextNode {
    // Create a new TextNode
    const textNode: TextNode = figma.createText();
    // Set the TextNode's text, fill color, font family and size
    textNode.characters = text;
    textNode.fills = [{ type: 'SOLID', color: color }];
    textNode.fontName = fontName;
    textNode.fontSize = fontSize
    // Return the newly created TextNode
    return textNode
}

/**
 * Creates a vertical spacer with the specified height.
 * @param height - The desired height of the spacer.
 * @returns A frame containing the vertical spacer, with a gray background color.
 */
export function getVSpacer(height: number, color: any = { r: 0.8, g: 0.8, b: 0.8 }): FrameNode {
    // Create a new frame to contain the spacer
    const spacer = figma.createFrame()
    // Set the fill of the spacer to a gray color
    spacer.fills = [{ type: 'SOLID', color: color }];
    // Set the size of the spacer to 1 pixel wide and the specified height
    spacer.resize(1, height);
    // Return the newly created frame containing the vertical spacer
    return spacer
}

/**
 * Creates a new frame containing two TextNodes as its child elements.
 * @param node1 - The first TextNode to be added.
 * @param node2 - The second TextNode to be added.
 * @returns A frame containing the two TextNodes, laid out horizontally with 4px spacing.
 */
export function createContainerWithFrames(node1: TextNode, node2: TextNode): FrameNode {
    let container = figma.createFrame();
    container.name = "text info container"
    container.fills = [];
    // Compute the necessary size of the frame based on the size of the TextNodes
    // container.resize(node1.width + node2.width + 16, Math.max(node1.height, node2.height));
    figma.currentPage.appendChild(container);
    // Set the layout and alignment of the frame
    // container.layoutSizingHorizontal = "FILL"
    container.layoutMode = "HORIZONTAL";
    container.layoutSizingVertical = "HUG"
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
export function getTokenNode(key: string, value: string): FrameNode {
     // Set the font family and style
     let fontName = { family: "Inter", style: "Regular" };
     // Create a frame containing two text nodes, one for the key and one for the value
     return createContainerWithFrames(
        getNewTextNode(key, undefined, fontName = fontName),
        getNewTextNode(value, { r: 0.46, g: 0.38, b: 0 }, fontName = fontName));
}

/**
 * Creates a frame containing one or more token nodes, each representing a key-value pair.
 * @param tokens - An array of key-value pairs to be displayed as tokens.
 * @param padding - The amount of padding to apply to the frame and the token nodes.
 * @returns A frame containing one or more token nodes, laid out vertically.
 */
export function getTokenFrame(tokens: [string, string][], padding: number): FrameNode {
    // Create a new empty frame
    const tokenFrame: FrameNode = figma.createFrame()
    // Remove the frame's background
    tokenFrame.backgrounds = []
    // Apply vertical auto-layout with the specified padding
    applyAutoLayout(tokenFrame as FrameNode, padding, "VERTICAL");
    // Add a new token node to the frame for each key-value pair in the `tokens` array
    tokens.forEach((token) => {
        let newNode = getTokenNode(`${token[0]}:`, token[1])
        tokenFrame.appendChild(newNode)
    })

    // Return the newly created frame containing the token nodes
    return tokenFrame
}

/**
 * Creates a horizontal line separator, with a solid black stroke and a thickness of 1 pixel.
 * @returns A LineNode representing the horizontal line separator.
 */
export function getSeparator(): LineNode {
    // Create a new line
    const separator = figma.createLine();
    // Set the line's stroke color to black and its thickness to 1 pixel
    separator.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    separator.strokeWeight = 1;
    // Rotate the line 0 degrees and align it to the center of the parent container
    separator.rotation = 0;
    separator.constraints = { horizontal: "STRETCH", vertical: "CENTER" };
    // Return the newly created line representing the separator
    return separator
}

function getFirstFillHexCode(node: any): string | null {
    // Type assertion to tell TypeScript that node.fills is an array of Paint objects
    const fills: Readonly<Paint[]> = node.fills as Readonly<Paint[]>;
  
    if (!fills || fills.length === 0) {
      return null;
    }
  
    const fill = fills[0];
    if (fill == undefined) {
        return null
    }
     
    if (fill.type != "SOLID") {
        return null
    }

    // Type guard to ensure that fill has a color property
    if ('color' in fill && fill.color) {
        const { r, g, b } = fill.color;
        const hex = ((r* 255 << 16) | (g* 255 << 8) | b* 255).toString(16);
        return '#' + hex.padStart(6, '0');
    }

    return null;
}

// create a frame containing raw data information
export function getSizeFrame(node: SceneNode): FrameNode {

    let details: [string, string][] = []

    const allValues = Object.keys(Constants.PrimaryDataValues)
        .filter(key => isNaN(Number(key)))
        .map(key => Constants.PrimaryDataValues[key as keyof typeof Constants.PrimaryDataValues]);

    allValues.forEach(value => {
        const sizeDatum = getSizeDatum(node, value)
        if (sizeDatum != null) {
            details.push(sizeDatum)
        }
    });
    
    return getDataDetailsFrame("Raw Data", details)
}

export function getSizeDatum(node: SceneNode, dataValueType: Constants.RawDataValue): [string, string] | null {
    let primaryDataValue = dataValueType as Constants.PrimaryDataValues
    let secondaryDataValue = dataValueType as Constants.SecondaryDataValues

    if (primaryDataValue != null) {
        switch (primaryDataValue) {
            case Constants.PrimaryDataValues.Width:
                const width = Utils.getRoundedDecimal(node.width)
                return ["Width", String(width)]
            case Constants.PrimaryDataValues.Height:
                const height = Utils.getRoundedDecimal(node.height)
                return ["Height", String(height)]
            case Constants.PrimaryDataValues.Radius:
                if ('cornerRadius' in node) {
                    return ["CornerRadius", `${String(node.cornerRadius)}`]
                }
                break;
            case Constants.PrimaryDataValues.Fill:
                let color = getFirstFillHexCode(node)
                if (color != null) {
                    return ["Fill", `${String(color)}`]
                }
                break;
            default:
                break;
        }
    }

    if (secondaryDataValue != null) {

    }

    return null
}

export function appendToDataDetailsFrame(Node : FrameNode, data: [string, string][], color = { r: 0.46, g: 0, b: 0 }){
    applyAutoLayout(Node, Constants.padding2, "VERTICAL")

    let fontName = { family: "Inter", style: "Regular" };

    let datumNodes: FrameNode[] = []
    data.forEach((datum) => {
        const datumNode = createContainerWithFrames(getNewTextNode(datum[0], undefined, fontName = fontName),
        getNewTextNode(datum[1], color, fontName = fontName))
        Node.appendChild(datumNode)
        datumNodes.push(datumNode)
    })
    
    var maxWidth = 0
    var maxWidth2 = 0
    datumNodes.forEach((node: FrameNode) => {
        const text1Width = node.children[0].width
        const text2Width = node.children[1].width
        maxWidth = Math.max(text1Width, maxWidth)
        maxWidth2 = Math.max(text2Width, maxWidth2)
    })
    
    datumNodes.forEach((node: FrameNode) => {
        node.resize(Math.max(maxWidth + maxWidth2 + Constants.padding3 , 200), node.height);
    })
}

export function getDataDetailsFrame(title: string, data: [string, string][], color = { r: 0.46, g: 0.38, b: 0 }): FrameNode {
    const detailsFrame = figma.createFrame()
    applyAutoLayout(detailsFrame, Constants.padding2, "VERTICAL")
    detailsFrame.fills = [{type: 'SOLID', color: Constants.white}]
    detailsFrame.cornerRadius = 6

    let fontName = { family: "Inter", style: "Regular" };
    let newNode = getNewTextNode(title);
    detailsFrame.appendChild(newNode);
    
    let line = getVSpacer(1, Constants.separatorColor)
    line.layoutAlign = "STRETCH"
    detailsFrame.appendChild(line)

    let datumNodes: FrameNode[] = []
    data.forEach((datum) => {
        const datumNode = createContainerWithFrames(getNewTextNode(datum[0], undefined, fontName = fontName),
        getNewTextNode(datum[1], color, fontName = fontName))
        detailsFrame.appendChild(datumNode)
        datumNodes.push(datumNode)
    })
    
    var maxWidth = 0
    var maxWidth2 = 0
    datumNodes.forEach((node: FrameNode) => {
        const text1Width = node.children[0].width
        const text2Width = node.children[1].width
        maxWidth = Math.max(text1Width, maxWidth)
        maxWidth2 = Math.max(text2Width, maxWidth2)
    })

    datumNodes.forEach((node: FrameNode) => {
        node.resize(Math.max(maxWidth + maxWidth2 + 4, 200), node.height);
    })
    
    return detailsFrame
}

export function createChildTitleNode(child: SceneNode): FrameNode {
    let fontName = { family: "Inter", style: "Bold" };
            let childName = figma.createFrame()
            childName.name = "Child name"
            const childNameNode = getNewTextNode(child.name, { r: 0, g: 0, b: 0 }, fontName)
            childNameNode.fontSize = Constants.title2FontSize
            const childTypeNode = getNewTextNode(`<${child.type}>`, { r: 0, g: 0, b: 0 })
            childTypeNode.fontSize = Constants.title3FontSize
            childName.appendChild(childTypeNode)
            childName.appendChild(childNameNode)
            childName.backgrounds = []
            childName.layoutMode = "HORIZONTAL"
            childName.layoutAlign = "STRETCH"
            childName.counterAxisSizingMode = "AUTO"
            childName.counterAxisAlignItems = "CENTER"
            childName.itemSpacing = Constants.padding1
            childName.primaryAxisSizingMode = "FIXED"
            return childName
}