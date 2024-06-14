import * as NodeCreator from "./node_manager"
import * as Constants from "./constants"
import { applyAutoLayout } from "./layouting"
import { applyAutoLayoutHorizontal } from "./frame_generator"

function createLinkButton(text: string, fontSize: number, destination: SceneNode): FrameNode {
    let button = NodeCreator.getNewTextNode(text)
    button.fontSize = fontSize
    button.hyperlink = {type: "NODE", value: destination.id}
    let buttonFrame = figma.createFrame()
    buttonFrame.appendChild(button)
    return buttonFrame
}

export function createHandoffButton(handOffNode: SceneNode, sourceNodeId: string) {
    let frame = createLinkButton("Go to Handoff →", Constants.titleFontSize, handOffNode)
    frame.name = `Handoff button: ${sourceNodeId}`
    applyAutoLayout(frame, 2, "HORIZONTAL")
    frame.cornerRadius = 4
    frame.fills = [{ type: 'SOLID', color: Constants.darkBackgroundColor }]
    return frame
}

export function updateHandoffButton(oldButton: FrameNode, newHandOff: FrameNode) {
    let button = oldButton.children[0] as TextNode
    button.hyperlink = {type: "NODE", value: newHandOff.id}
}

export function createLintReportButton(reportNode: SceneNode, sourceNodeId: string, passedPercentage : string) {
    let frame = createLinkButton("Go to Lint Report →", Constants.titleFontSize, reportNode)
    const percentage = NodeCreator.getNewTextNode(`${passedPercentage}%`, { r: 0.46, g: 0.38, b: 0 }, undefined,Constants.titleFontSize)
    frame.appendChild(percentage);
    applyAutoLayoutHorizontal(frame, 10 , "HORIZONTAL")
    frame.name = `Lint Report button: ${sourceNodeId}`
    applyAutoLayout(frame, 2, "HORIZONTAL")
    frame.cornerRadius = 4
    frame.fills = [{ type: 'SOLID', color: Constants.darkBackgroundColor }]
    return frame
}

export function updateLintReportButton(oldButton: FrameNode, newReport: FrameNode) {
    let button = oldButton.children[0] as TextNode
    button.hyperlink = {type: "NODE", value: newReport.id}
}

export function createBackToSourceButton(sourceNode: SceneNode) {
    let frame = createLinkButton("← Back to Souce", Constants.titleFontSize, sourceNode)
    frame.name = "Source button"
    applyAutoLayout(frame, 2, "HORIZONTAL")
    frame.cornerRadius = 4
    frame.fills = [{ type: 'SOLID', color: Constants.darkBackgroundColor }]
    return frame
}

export function createParentButton(parentContainerNode: FrameNode) {
    let frame = createLinkButton("↑", Constants.title3FontSize, parentContainerNode)
    frame.name = "Parent button"
    applyAutoLayout(frame, 0, "HORIZONTAL")
    frame.cornerRadius = 4
    frame.fills = [{ type: 'SOLID', color: Constants.darkBackgroundColor }]
    return frame
}
