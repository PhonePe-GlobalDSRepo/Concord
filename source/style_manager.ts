import { applyAutoLayout } from "./layouting"
import * as Constants from "./constants"
import * as NodeManager from "./node_manager"

//check if style exists
export function isStylePresent(node: SceneNode): Boolean {
    const fillStyleId = (node as Constants.fillStyleNode).fillStyleId;
    const backgroundStyleId = (node as Constants.backgroundStyleNode).backgroundStyleId;
    const strokeStyleId = (node as Constants.strokeStyleNode).strokeStyleId;
    const effectStyleId = (node as Constants.effectStyleNode).effectStyleId;
    const gridStyleId = (node as Constants.gridStyleNode).gridStyleId;

    return (fillStyleId != null && fillStyleId != figma.mixed && fillStyleId != "") 
    || (backgroundStyleId != null && backgroundStyleId != "") 
    || (strokeStyleId != null && strokeStyleId != "") 
    || (effectStyleId != null && effectStyleId != "") 
    || (gridStyleId != null && gridStyleId != "")
}

// create a frame containing raw data in information
export function getStyleFrame(node: SceneNode): FrameNode {
    let details: [string, string][] = []
    const fillStyleId = (node as Constants.fillStyleNode).fillStyleId as string;
    if (fillStyleId) {
        const styleObject = figma.getStyleById(fillStyleId);
        details.push(["fill", styleObject?.name ?? ""])
    }
    const backgroundStyleId = (node as Constants.backgroundStyleNode).backgroundStyleId as string;
    if (backgroundStyleId) {
        const styleObject = figma.getStyleById(backgroundStyleId);
        details.push(["backrgound", styleObject?.name ?? ""])
    }
    const strokeStyleId = (node as Constants.strokeStyleNode).strokeStyleId as string;
    if (strokeStyleId) {
        const styleObject = figma.getStyleById(strokeStyleId);
        details.push(["stroke", styleObject?.name ?? ""])
    }
    const effectStyleId = (node as Constants.effectStyleNode).effectStyleId as string;
    if (effectStyleId) {
        const styleObject = figma.getStyleById(effectStyleId);
        details.push(["effect", styleObject?.name ?? ""])
    }
    const gridStyleId = (node as Constants.gridStyleNode).gridStyleId as string;
    if (gridStyleId) {
        const styleObject = figma.getStyleById(gridStyleId);
        details.push(["grid", styleObject?.name ?? ""])
    }
    
    return NodeManager.getDataDetailsFrame("Styles", details)
}