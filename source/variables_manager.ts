import { applyAutoLayout } from "./layouting"
import * as Constants from "./constants"
import * as NodeManager from "./node_manager"

//check if style exists
export function isVariablePresent(node: SceneNode): Boolean {
    let boundVariables = node.boundVariables;
    let fillVars = boundVariables?.fills
    let strokeVars = boundVariables?.strokes
    let effectVars = boundVariables?.effects

    return (fillVars != null) || (strokeVars != null) || (effectVars != null)
}


// create a frame containing raw data in information
export function getVariablesFrame(node: SceneNode): FrameNode {
    let details: [string, string][] = []
    
    const fills = node.boundVariables?.fills
    if (fills && fills.length > 0) {
        const firstFill = fills[0]
        if (firstFill.type == "VARIABLE_ALIAS") {
            const fillId = firstFill.id
            const variableValue = figma.variables.getVariableById(fillId)?.name
            details.push(["fill", variableValue ?? ""])
        }
    }

    const strokes = node.boundVariables?.strokes
    if (strokes && strokes.length > 0) {
        const firstStroke = strokes[0]
        if (firstStroke.type == "VARIABLE_ALIAS") {
            const strokeId = firstStroke.id
            const variableValue = figma.variables.getVariableById(strokeId)?.name
            details.push(["stroke", variableValue ?? ""])
        }
    }

    const effects = node.boundVariables?.effects
    if (effects && effects.length > 0) {
        const firstEffect = effects[0]
        if (firstEffect.type == "VARIABLE_ALIAS") {
            const effectId = firstEffect.id
            const variableValue = figma.variables.getVariableById(effectId)?.name
            details.push(["effect", variableValue ?? ""])
        }
    }

    return NodeManager.getDataDetailsFrame("Variables", details)
}